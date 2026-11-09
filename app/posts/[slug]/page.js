import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPost, formatDate } from "../../../lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  try {
    const post = await getPost(slug);
    return { title: post.title, description: post.excerpt };
  } catch {
    return {};
  }
}

export default async function PostPage({ params }) {
  const { slug } = await params;

  let post;
  try {
    post = await getPost(slug);
  } catch {
    notFound();
  }

  return (
    <article className="article">
      <Link href="/" className="back">
        ← All posts
      </Link>
      <header className="article-header">
        <h1>{post.title}</h1>
        <p className="meta">
          {formatDate(post.date)} · {post.readingTime} min read
        </p>
      </header>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
