import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: {
    default: "My Blog",
    template: "%s | My Blog",
  },
  description: "Thoughts, notes, and ideas on writing, technology, and markets.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container header-inner">
            <Link href="/" className="brand">
              My Blog
            </Link>
            <nav className="nav">
              <Link href="/">Posts</Link>
              <Link href="/about">About</Link>
            </nav>
          </div>
        </header>
        <main className="container main">{children}</main>
        <footer className="site-footer">
          <div className="container">
            <p>© {new Date().getFullYear()} My Blog. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
