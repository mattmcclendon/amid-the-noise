import fs from "fs";
import path from "path";
import fg from "fast-glob";
import matter from "gray-matter";

const POSTS_PATH = "src/pages/writing";
const OUTPUT_PATH = "data/editorial-calendar.json";

function loadPosts() {
  const files = fg.sync(`${POSTS_PATH}/**/*.md`);

  return files.map((file) => {
    const raw = fs.readFileSync(file, "utf-8");
    const { data } = matter(raw);

    return {
      pubDate: data.pubDate || "",
      title: data.title || "Untitled",
      subtitle: data.subtitle || "",
      slug: path.basename(file, ".md"),
      description: data.description || "",
      tags: data.tags || [],
      tier: data.tier || "",
      heroImage: data.heroImage || "",
      heroAlt: data.heroAlt || "",
      url: `https://amidthenoise.com/writing/${path.basename(file, ".md")}`,
      status:
        new Date(data.pubDate) < new Date()
          ? "Published"
          : "Scheduled",
    };
  });
}

function sortPosts(posts) {
  return posts.sort(
    (a, b) => new Date(a.pubDate) - new Date(b.pubDate)
  );
}

function ensureDataDirectory() {
  if (!fs.existsSync("data")) {
    fs.mkdirSync("data");
  }
}

function exportCalendar(posts) {
  ensureDataDirectory();

  fs.writeFileSync(
    OUTPUT_PATH,
    JSON.stringify(posts, null, 2),
    "utf-8"
  );

  console.log(
    `Exported ${posts.length} posts to ${OUTPUT_PATH}`
  );
}

function main() {
  const posts = loadPosts();
  const sortedPosts = sortPosts(posts);

  exportCalendar(sortedPosts);
}

main();