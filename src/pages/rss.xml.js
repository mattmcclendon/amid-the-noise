import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Amid the Noise',
    description:
      'Systems, signal, trust, and human-centered design.',
    site: context.site,
    items: await pagesGlobToRssItems(
      import.meta.glob('./writing/*.{md,mdx}')
    ),
  });
}