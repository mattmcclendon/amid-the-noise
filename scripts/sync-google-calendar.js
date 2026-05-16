import fs from "fs";
import path from "path";
import readline from "readline";
import fg from "fast-glob";
import matter from "gray-matter";
import { google } from "googleapis";

const POSTS_PATH = "src/pages/writing";
const SCOPES = [
  "https://www.googleapis.com/auth/calendar",
  "https://www.googleapis.com/auth/spreadsheets",
];
const TOKEN_PATH = "scripts/token.json";
const CREDENTIALS_PATH = "scripts/credentials.json";
const CALENDAR_ID = "c_a5c775115125bf99ed18a8fadceace50b704fe9948b6900d53e95c409cb9fd22@group.calendar.google.com";

async function loadPosts() {
  const files = await fg(`${POSTS_PATH}/**/*.md`);

  return files.map((file) => {
    const raw = fs.readFileSync(file, "utf-8");
    const { data } = matter(raw);

    return {
      title: data.title || "Untitled",
      pubDate: data.pubDate || null,
      subtitle: data.subtitle || "",
      description: data.description || "",
      tags: data.tags || [],
      tier: data.tier || "",
      heroImage: data.heroImage || "",
      slug: path.basename(file, ".md"),
      file,
    };
  });
}

async function authorize() {
  const content = fs.readFileSync(CREDENTIALS_PATH);
  const credentials = JSON.parse(content);

  const { client_secret, client_id, redirect_uris } =
    credentials.installed;

  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );

  if (fs.existsSync(TOKEN_PATH)) {
    const token = fs.readFileSync(TOKEN_PATH);
    oAuth2Client.setCredentials(JSON.parse(token));
    return oAuth2Client;
  }

  return getAccessToken(oAuth2Client);
}

function getAccessToken(oAuth2Client) {
  return new Promise((resolve, reject) => {
    const authUrl = oAuth2Client.generateAuthUrl({
      access_type: "offline",
      scope: SCOPES,
    });

    console.log("\nAuthorize this app by visiting this URL:\n");
    console.log(authUrl);

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question("\nPaste the authorization code here: ", (code) => {
      rl.close();

      oAuth2Client.getToken(code, (err, token) => {
        if (err) return reject(err);

        oAuth2Client.setCredentials(token);

        fs.writeFileSync(TOKEN_PATH, JSON.stringify(token));

        console.log("\nToken stored to", TOKEN_PATH);

        resolve(oAuth2Client);
      });
    });
  });
}

function addDays(dateString, days) {
  const date = new Date(`${dateString}T00:00:00`);
  date.setDate(date.getDate() + days);
  return date.toISOString().split("T")[0];
}

function buildEvent(post) {
  const url = `https://www.amidthenoise.com/writing/${post.slug}/`;

  return {
    summary: `Publish: ${post.title}`,
    description: [
      `Slug: ${post.slug}`,
      `URL: ${url}`,
      `Tier: ${post.tier}`,
      `Tags: ${post.tags.join(", ")}`,
      `Hero: ${post.heroImage}`,
      "",
      "Subtitle:",
      post.subtitle,
      "",
      "Description:",
      post.description,
    ].join("\n"),
    start: {
      date: post.pubDate,
    },
    end: {
      date: addDays(post.pubDate, 1),
    },
    extendedProperties: {
      private: {
        slug: post.slug,
        source: "amid-the-noise-frontmatter",
      },
    },
  };
}

async function findExistingEvent(calendar, slug) {
  const response = await calendar.events.list({
    calendarId: CALENDAR_ID,
    privateExtendedProperty: `slug=${slug}`,
    maxResults: 1,
    singleEvents: true,
  });

  return response.data.items?.[0] || null;
}

async function syncPost(calendar, post) {
  if (!post.pubDate || !post.slug || !post.title) {
    console.log(`Skipping incomplete post: ${post.file || post.slug || "unknown"}`);
    return;
  }

  const event = buildEvent(post);
  const existingEvent = await findExistingEvent(calendar, post.slug);

  if (existingEvent) {
    await calendar.events.update({
      calendarId: CALENDAR_ID,
      eventId: existingEvent.id,
      resource: {
        ...existingEvent,
        ...event,
      },
    });

    console.log(`Updated: ${post.pubDate} — ${post.title}`);
    return;
  }

  await calendar.events.insert({
    calendarId: CALENDAR_ID,
    resource: event,
  });

  console.log(`Created: ${post.pubDate} — ${post.title}`);
}

async function syncAllPosts(auth, posts) {
  const calendar = google.calendar({ version: "v3", auth });

  const sortedPosts = posts
    .filter((post) => post.pubDate)
    .sort((a, b) => new Date(a.pubDate) - new Date(b.pubDate));

  console.log(`\nSyncing ${sortedPosts.length} posts to Google Calendar...\n`);

  for (const post of sortedPosts) {
    await syncPost(calendar, post);
  }

  console.log("\nCalendar sync complete.");
}

async function main() {
  const posts = await loadPosts();
  const auth = await authorize();

  await syncAllPosts(auth, posts);
}

main().catch(console.error);