import fs from "fs";
import path from "path";
import fg from "fast-glob";
import matter from "gray-matter";

const POSTS_PATH = "src/pages/writing";
const TODAY = new Date();
TODAY.setHours(0, 0, 0, 0);

function loadPosts() {
  const files = fg.sync(`${POSTS_PATH}/**/*.md`);

  return files.map((file) => {
    const raw = fs.readFileSync(file, "utf-8");
    const { data } = matter(raw);

    return {
      title: data.title || "Untitled",
      pubDate: data.pubDate || "",
      slug: path.basename(file, ".md"),
      file,
    };
  });
}

function groupByDate(posts) {
  return posts.reduce((groups, post) => {
    if (!post.pubDate) return groups;

    if (!groups[post.pubDate]) {
      groups[post.pubDate] = [];
    }

    groups[post.pubDate].push(post);
    return groups;
  }, {});
}

function printDuplicateDates(groups) {
  const duplicates = Object.entries(groups)
    .filter(([, posts]) => posts.length > 1)
    .sort(([a], [b]) => new Date(a) - new Date(b));

  console.log("\nDuplicate publication dates:\n");

  if (!duplicates.length) {
    console.log("None found.");
    return;
  }

  duplicates.forEach(([date, posts]) => {
    console.log(`${date} — ${posts.length} posts`);

    posts.forEach((post) => {
      console.log(`  - ${post.title} (${post.slug})`);
    });

    console.log("");
  });
}

function printFutureDuplicateDates(groups) {
  const duplicates = Object.entries(groups)
    .filter(([date, posts]) => {
      const dateObj = new Date(`${date}T00:00:00`);
      return dateObj >= TODAY && posts.length > 1;
    })
    .sort(([a], [b]) => new Date(a) - new Date(b));

  console.log("\nFuture duplicate publication dates:\n");

  if (!duplicates.length) {
    console.log("None found.");
    return;
  }

  duplicates.forEach(([date, posts]) => {
    console.log(`${date} — ${posts.length} posts`);

    posts.forEach((post) => {
      console.log(`  - ${post.title} (${post.slug})`);
    });

    console.log("");
  });
}

function printMissingDates(posts) {
  const missing = posts.filter((post) => !post.pubDate);

  console.log("\nPosts missing pubDate:\n");

  if (!missing.length) {
    console.log("None found.");
    return;
  }

  missing.forEach((post) => {
    console.log(`- ${post.title} (${post.file})`);
  });
}

function main() {
  const posts = loadPosts();
  const groups = groupByDate(posts);

  console.log(`Auditing ${posts.length} posts...`);

  printMissingDates(posts);
  printDuplicateDates(groups);
  printFutureDuplicateDates(groups);
}

main();