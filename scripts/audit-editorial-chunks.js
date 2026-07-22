import fs from "fs";
import fg from "fast-glob";
import matter from "gray-matter";

const CONTENT_GLOBS = [
  "src/pages/writing/**/*.md",
  "src/pages/career/case-studies/content/**/*.md",
  "src/content/writing/**/*.md",
];

const FIX = process.argv.includes("--fix");
const LONG_UNSECTIONED_WORDS = 1000;
const SHORT_SECTION_WORDS = 45;

function isFence(line) {
  return /^\s*(```|~~~)/.test(line);
}

function isH2(line) {
  return /^##\s+\S/.test(line);
}

function isRule(line) {
  return /^\s*---\s*$/.test(line);
}

function bodyStartIndex(lines) {
  if (!isRule(lines[0] || "")) return 0;

  for (let index = 1; index < lines.length; index += 1) {
    if (isRule(lines[index])) return index + 1;
  }

  return 0;
}

function previousNonEmptyIndex(lines, fromIndex, minimumIndex) {
  for (let index = fromIndex - 1; index >= minimumIndex; index -= 1) {
    if (lines[index].trim()) return index;
  }

  return -1;
}

function auditStructure(file, raw) {
  const lines = raw.split("\n");
  const bodyStart = bodyStartIndex(lines);
  const missingRules = [];
  const duplicateRules = [];
  const headings = [];
  let inFence = false;
  let previousBodyRule = -1;

  for (let index = bodyStart; index < lines.length; index += 1) {
    const line = lines[index];

    if (isFence(line)) {
      inFence = !inFence;
      continue;
    }

    if (inFence) continue;

    if (isRule(line)) {
      const previous = previousNonEmptyIndex(lines, index, bodyStart);
      if (previous >= bodyStart && isRule(lines[previous])) {
        duplicateRules.push(index + 1);
      }
      previousBodyRule = index;
      continue;
    }

    if (!isH2(line)) continue;

    headings.push({ index, text: line.replace(/^##\s+/, "").trim() });
    const previous = previousNonEmptyIndex(lines, index, bodyStart);

    if (previous >= bodyStart && !isRule(lines[previous])) {
      missingRules.push({ line: index + 1, heading: line.trim() });
    }
  }

  const shortSections = headings.flatMap((heading, headingIndex) => {
    const end = headings[headingIndex + 1]?.index ?? lines.length;
    const text = lines
      .slice(heading.index + 1, end)
      .filter((line) => !isRule(line))
      .join(" ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\[[^\]]+\]\([^\)]+\)/g, " ")
      .replace(/[^\p{L}\p{N}’'-]+/gu, " ")
      .trim();
    const words = text ? text.split(/\s+/).length : 0;

    return words > 0 && words < SHORT_SECTION_WORDS
      ? [{ line: heading.index + 1, heading: heading.text, words }]
      : [];
  });

  const { content } = matter(raw);
  const bodyWords = content.trim() ? content.trim().split(/\s+/).length : 0;
  const chunks = [];
  let chunkLines = [];
  inFence = false;

  for (let index = bodyStart; index < lines.length; index += 1) {
    const line = lines[index];

    if (isFence(line)) inFence = !inFence;

    if (!inFence && isRule(line)) {
      chunks.push(chunkLines.join("\n"));
      chunkLines = [];
      continue;
    }

    chunkLines.push(line);
  }

  chunks.push(chunkLines.join("\n"));
  const longChunks = chunks.flatMap((chunk, index) => {
    const text = chunk
      .replace(/<[^>]+>/g, " ")
      .replace(/[^\p{L}\p{N}’'-]+/gu, " ")
      .trim();
    const words = text ? text.split(/\s+/).length : 0;
    return words >= LONG_UNSECTIONED_WORDS ? [{ index: index + 1, words }] : [];
  });

  return {
    file,
    lines,
    bodyStart,
    missingRules,
    duplicateRules,
    shortSections,
    bodyWords,
    longChunks,
    previousBodyRule,
  };
}

function fixMissingRules(audit) {
  if (!audit.missingRules.length) return false;

  const lines = audit.lines;
  const missingLines = new Set(audit.missingRules.map((issue) => issue.line - 1));
  const output = [];
  let inFence = false;

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];

    if (index >= audit.bodyStart && isFence(line)) {
      inFence = !inFence;
    }

    if (!inFence && missingLines.has(index)) {
      while (output.length && !output.at(-1).trim()) output.pop();
      output.push("", "---", "");
    }

    output.push(line);
  }

  fs.writeFileSync(audit.file, output.join("\n"));
  return true;
}

function printIssues(label, audits, select, format) {
  const issues = audits.flatMap((audit) =>
    select(audit).map((issue) => ({ file: audit.file, issue }))
  );

  console.log(`\n${label}: ${issues.length}`);
  issues.forEach(({ file, issue }) => console.log(`  ${file}:${format(issue)}`));
  return issues.length;
}

function main() {
  const files = fg.sync(CONTENT_GLOBS, { unique: true }).sort();
  let audits = files.map((file) => auditStructure(file, fs.readFileSync(file, "utf-8")));
  let changed = 0;

  if (FIX) {
    audits.forEach((audit) => {
      if (fixMissingRules(audit)) changed += 1;
    });
    audits = files.map((file) => auditStructure(file, fs.readFileSync(file, "utf-8")));
  }

  console.log(`Auditing ${files.length} rendered Markdown files...`);
  if (FIX) console.log(`Updated ${changed} files.`);

  const missing = printIssues(
    "Major headings missing a preceding horizontal rule",
    audits,
    (audit) => audit.missingRules,
    (issue) => `${issue.line} ${issue.heading}`
  );

  const duplicates = printIssues(
    "Consecutive horizontal rules",
    audits,
    (audit) => audit.duplicateRules,
    (line) => `${line}`
  );

  printIssues(
    `Sections shorter than ${SHORT_SECTION_WORDS} words (editorial review)`,
    audits,
    (audit) => audit.shortSections,
    (issue) => `${issue.line} ${issue.heading} — ${issue.words} words`
  );

  const longChunks = audits.flatMap((audit) =>
    audit.longChunks.map((chunk) => ({ file: audit.file, ...chunk }))
  );
  console.log(`\nUninterrupted chunks with ${LONG_UNSECTIONED_WORDS}+ words (editorial review): ${longChunks.length}`);
  longChunks.forEach((chunk) => {
    console.log(`  ${chunk.file} — chunk ${chunk.index}, ${chunk.words} words`);
  });

  if (missing || duplicates) process.exitCode = 1;
}

main();
