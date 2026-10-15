import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const WRITING_DIR = path.join(process.cwd(), "content", "writing");

// Drafts show up locally and on preview deploys, never on the live site.
const SHOW_DRAFTS =
  process.env.NODE_ENV !== "production" ||
  (!!process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production");

export type Article = {
  slug: string;
  title: string;
  date: string;
  description?: string;
  draft: boolean;
  readingTime: number;
  content: string;
};

function toDateString(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value ?? "");
}

function readArticle(file: string): Article {
  const raw = fs.readFileSync(path.join(WRITING_DIR, file), "utf8");
  const { data, content } = matter(raw);
  const words = content.trim().split(/\s+/).filter(Boolean).length;

  return {
    slug: file.replace(/\.md$/, ""),
    title: data.title ?? file.replace(/\.md$/, ""),
    date: toDateString(data.date),
    description: data.description,
    draft: data.draft === true,
    readingTime: Math.max(1, Math.round(words / 230)),
    content,
  };
}

export function getArticles(): Article[] {
  if (!fs.existsSync(WRITING_DIR)) return [];

  return fs
    .readdirSync(WRITING_DIR)
    .filter((file) => file.endsWith(".md"))
    .map(readArticle)
    .filter((article) => SHOW_DRAFTS || !article.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getArticle(slug: string): Article | undefined {
  return getArticles().find((article) => article.slug === slug);
}

export function renderMarkdown(markdown: string): string {
  return marked.parse(markdown, { async: false });
}

export function formatDate(date: string): string {
  if (!date) return "";
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}
