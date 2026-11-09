export const metadata = {
  title: "About",
  description: "About this blog and its author.",
};

export default function About() {
  return (
    <article className="article">
      <header className="article-header">
        <h1>About</h1>
      </header>
      <div className="prose">
        <p>
          Welcome to my blog. This is a place where I write about the things I
          am learning, building, and thinking about.
        </p>
        <p>
          The site is built with Next.js, posts are written in Markdown, and it
          is hosted on Vercel. Every push to GitHub publishes automatically.
        </p>
        <p>
          Edit this page in <code>app/about/page.js</code> to add your own
          story and contact details.
        </p>
      </div>
    </article>
  );
}
