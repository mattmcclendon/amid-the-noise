import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  const allItems = await pagesGlobToRssItems(
    import.meta.glob('./writing/*.{md,mdx}')
  );

  const now = new Date();

  const items = allItems
    .filter((item) => item.pubDate && new Date(item.pubDate) <= now)
    .sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate))
    .slice(0, 50);

  return rss({
    title: 'Amid the Noise',
    description: 'Systems, signal, trust, and human-centered design.',
    site: context.site,
    items,
  });
}