import fs from "fs";
import path from "path";
import readline from "readline";
import fg from "fast-glob";
import matter from "gray-matter";
import { google } from "googleapis";

const POSTS_PATH = "src/pages/writing";
const SHEET_ID = "1F50_7L__NgD3wlDd68ny0L9wXfmhfDH-CwcXNP8XeYA";
const SHEET_RANGE = "Sheet1!A1:O";
const TOKEN_PATH = "scripts/token.json";
const CREDENTIALS_PATH = "scripts/credentials.json";
const SCOPES = [
  "https://www.googleapis.com/auth/calendar",
  "https://www.googleapis.com/auth/spreadsheets",
];

function loadPosts() {
  const files = fg.sync(`${POSTS_PATH}/**/*.md`);

  return files
    .map((file) => {
      const raw = fs.readFileSync(file, "utf-8");
      const { data } = matter(raw);
      const slug = path.basename(file, ".md");
      const url = `https://www.amidthenoise.com/writing/${slug}/`;

      return {
        pubDate: data.pubDate || "",
        title: data.title || "Untitled",
        slug,
        url,
        subtitle: data.subtitle || "",
        description: data.description || "",
        tags: Array.isArray(data.tags) ? data.tags.join(", ") : "",
        tier: data.tier || "",
        heroImage: data.heroImage || "",
        status: new Date(data.pubDate) > new Date() ? "Scheduled" : "Published",
        linkedinBlurb: "",
        facebookBlurb: "",
        twitterBlurb: "",
        bufferReady: "",
        file,
      };
    })
    .filter((post) => post.pubDate)
    .sort((a, b) => new Date(a.pubDate) - new Date(b.pubDate));
}

async function authorize() {
  const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, "utf-8"));
  const { client_secret, client_id, redirect_uris } = credentials.installed;

  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );

  if (fs.existsSync(TOKEN_PATH)) {
    const token = JSON.parse(fs.readFileSync(TOKEN_PATH, "utf-8"));
    oAuth2Client.setCredentials(token);
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

function buildRows(posts) {
  const headers = [
    "Pub Date",
    "Title",
    "Slug",
    "URL",
    "Subtitle",
    "Description",
    "Tags",
    "Tier",
    "Hero Image",
    "Status",
    "LinkedIn Blurb",
    "Facebook Blurb",
    "Twitter/X Blurb",
    "Buffer Ready",
    "File",
  ];

  const rows = posts.map((post) => [
    post.pubDate,
    post.title,
    post.slug,
    post.url,
    post.subtitle,
    post.description,
    post.tags,
    post.tier,
    post.heroImage,
    post.status,
    post.linkedinBlurb,
    post.facebookBlurb,
    post.twitterBlurb,
    post.bufferReady,
    post.file,
  ]);

  return [headers, ...rows];
}

async function syncSheet(auth, posts) {
  const sheets = google.sheets({ version: "v4", auth });
  const values = buildRows(posts);

  await sheets.spreadsheets.values.clear({
    spreadsheetId: SHEET_ID,
    range: SHEET_RANGE,
  });

  await sheets.spreadsheets.values.update({
    spreadsheetId: SHEET_ID,
    range: SHEET_RANGE,
    valueInputOption: "RAW",
    resource: {
      values,
    },
  });

  console.log(`Synced ${posts.length} posts to Google Sheets.`);
}

async function main() {
  const posts = loadPosts();
  const auth = await authorize();

  await syncSheet(auth, posts);
}

main().catch(console.error);