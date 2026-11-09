import Link from "next/link";
import { getAllPosts, formatDate } from "../lib/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <>
      <section className="hero">
        <h1>Writing on ideas worth sharing.</h1>
        <p>
          Short, clear essays and notes. Browse the latest posts below.
        </p>
      </section>

      <section>
        <h2 className="section-title">Latest posts</h2>
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.slug} className="post-card">
              <Link href={`/posts/${post.slug}`}>
                <p className="meta">
                  {formatDate(post.date)} · {post.readingTime} min read
                </p>
                <h3>{post.title}</h3>
                <p className="excerpt">{post.excerpt}</p>
                <span className="read-more">Read more →</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
