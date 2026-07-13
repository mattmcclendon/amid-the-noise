// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const shouldIncludeInSitemap = (page) => {
  const pathname = new URL(page).pathname.replace(/\/$/, '') || '/';

  if (pathname === '/books' || pathname === '/papers') return false;
  if (pathname === '/career' || pathname.startsWith('/career/')) return false;
  if (pathname === '/thinking' || pathname.startsWith('/thinking/')) return false;
  if (pathname === '/research') return false;
  if (pathname.startsWith('/research/field-studies')) return false;
  if (pathname.startsWith('/research/papers')) return false;

  return true;
};

// https://astro.build/config
export default defineConfig({
  site: 'https://www.amidthenoise.com',
  integrations: [sitemap({ filter: shouldIncludeInSitemap })],
});
