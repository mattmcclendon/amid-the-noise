import { timingSafeEqual } from 'node:crypto';

const pacificHour = new Intl.DateTimeFormat('en-US', {
  timeZone: 'America/Los_Angeles', hour: '2-digit', hourCycle: 'h23',
});

export function isRefreshTime(now) {
  // UTC schedules cover both PST and PDT. Skip the repeated 1 a.m. at fall-back.
  return pacificHour.format(now) === '01'
    && pacificHour.format(new Date(now.getTime() - 3600000)) !== '01';
}

export async function handle(request, { env = process.env, now = new Date(), fetcher = fetch } = {}) {
  const reply = (body, status = 200) => Response.json(body, {
    status, headers: { 'Cache-Control': 'no-store' },
  });
  if (request.method !== 'GET') return reply({ error: 'Method not allowed' }, 405);
  if (!env.CRON_SECRET) return reply({ error: 'Cron is not configured' }, 503);
  const expected = Buffer.from(`Bearer ${env.CRON_SECRET}`);
  const actual = Buffer.from(request.headers.get('authorization') || '');
  if (actual.length !== expected.length || !timingSafeEqual(actual, expected)) {
    return reply({ error: 'Unauthorized' }, 401);
  }
  if (!isRefreshTime(now)) return reply({ skipped: true, reason: 'Outside daily Pacific window' });
  if (!env.PUBLICATIONS_DEPLOY_HOOK_URL) return reply({ error: 'Deploy hook is not configured' }, 503);
  try {
    const hook = new URL(env.PUBLICATIONS_DEPLOY_HOOK_URL);
    if (hook.protocol !== 'https:' || hook.hostname !== 'api.vercel.com' || !hook.pathname.startsWith('/v1/integrations/deploy/')) {
      return reply({ error: 'Invalid deploy hook configuration' }, 503);
    }
    const result = await fetcher(hook, { method: 'POST', redirect: 'error', signal: AbortSignal.timeout(15000) });
    if (!result.ok) {
      console.error('Publication rebuild hook failed', result.status);
      return reply({ error: 'Deploy hook failed' }, 502);
    }
    console.info('Daily publication rebuild requested', now.toISOString());
    return reply({ triggered: true });
  } catch {
    console.error('Publication rebuild hook request failed');
    return reply({ error: 'Deploy hook request failed' }, 502);
  }
}

export default { fetch: handle };
