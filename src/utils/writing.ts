export interface PublishedWritingPost {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  postTime: number;
}

interface WritingModule {
  frontmatter?: {
    title?: string;
    description?: string;
    pubDate?: Date | string;
    date?: Date | string;
    tags?: string[] | string;
    draft?: boolean;
  };
}

export const getPostTime = (value: Date | string | undefined) => {
  const normalizedDate = value instanceof Date
    ? value.toISOString().slice(0, 10)
    : String(value ?? '').trim();

  if (!/^\d{4}-\d{2}-\d{2}$/.test(normalizedDate)) return null;

  const [year, month, day] = normalizedDate.split('-').map(Number);
  const time = Date.UTC(year, month - 1, day);
  const date = new Date(time);

  if (
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== month - 1 ||
    date.getUTCDate() !== day
  ) return null;

  return time;
};

export const slugifyTag = (tag: string) =>
  tag
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

export const getPublishedWritingPosts = (
  postModules: Record<string, unknown>,
): PublishedWritingPost[] =>
  Object.entries(postModules)
    .map(([path, module]) => {
      const frontmatter = (module as WritingModule).frontmatter ?? {};
      const postTime = getPostTime(frontmatter.pubDate ?? frontmatter.date);
      const slug = path.split('/').at(-1)?.replace(/\.md$/, '') ?? '';

      if (frontmatter.draft || postTime === null || postTime > Date.now()) return null;

      return {
        slug,
        title: frontmatter.title ?? '',
        description: frontmatter.description ?? '',
        tags: Array.isArray(frontmatter.tags)
          ? frontmatter.tags
          : frontmatter.tags
            ? [frontmatter.tags]
            : [],
        postTime,
      };
    })
    .filter((post): post is PublishedWritingPost => post !== null)
    .sort((a, b) => b.postTime - a.postTime);

export const getTopWritingTags = (
  posts: PublishedWritingPost[],
  limit = 20,
  minimumCount = 3,
) => {
  const tagCounts = new Map<string, number>();

  for (const post of posts) {
    for (const tag of post.tags) {
      tagCounts.set(tag, (tagCounts.get(tag) ?? 0) + 1);
    }
  }

  return [...tagCounts.entries()]
    .filter(([, count]) => count >= minimumCount)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, limit);
};
