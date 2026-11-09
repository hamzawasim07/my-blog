# My Blog

A simple, professional blog built with [Next.js](https://nextjs.org) and Markdown, ready to deploy on [Vercel](https://vercel.com).

## Features

- Posts written in Markdown with front matter
- Clean responsive design with automatic dark mode
- Reading-time estimates and SEO metadata
- Statically generated for speed

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Writing a post

Create a file in `posts/`, for example `posts/my-post.md`:

```md
---
title: "My Post Title"
date: "2026-11-09"
excerpt: "A one-line summary shown on the home page."
---

Your content here.
```

## Deploying

1. Push this repository to GitHub.
2. Import it at https://vercel.com/new.
3. Click Deploy. Every push to `main` redeploys automatically.
