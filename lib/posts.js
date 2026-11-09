import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export function getAllPosts() {
  const files = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".md"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(postsDirectory, file), "utf8");
    const { data, content } = matter(raw);
    const words = content.trim().split(/\s+/).length;

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt || "",
      readingTime: Math.max(1, Math.round(words / 200)),
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPost(slug) {
  const raw = fs.readFileSync(path.join(postsDirectory, `${slug}.md`), "utf8");
  const { data, content } = matter(raw);
  const processed = await remark().use(html).process(content);
  const words = content.trim().split(/\s+/).length;

  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt || "",
    readingTime: Math.max(1, Math.round(words / 200)),
    contentHtml: processed.toString(),
  };
}

export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
