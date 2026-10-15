# joshlaw.dev

My personal site. It's a spinning cube made of `#` characters that you can grab and throw around.

Built with Next.js and deployed on Vercel.

## Run locally

```bash
pnpm install
pnpm dev
```

## Writing

Articles live in `content/writing/` as Markdown files. The file name becomes the URL, so `content/writing/on-tools.md` is served at `/writing/on-tools`.

Each file starts with a little frontmatter:

```md
---
title: On tools
date: 2026-10-15
description: Optional one-liner used for the page's meta description.
draft: true
---

Write the article here in Markdown.
```

Articles are listed newest first on `/writing`. Anything with `draft: true` shows up locally and on Vercel preview deploys, but not on the live site. Remove the line (or set it to `false`) and push to publish.
