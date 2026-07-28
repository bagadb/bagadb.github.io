# Stacks & commands

Read this when choosing or wiring a publishing stack. Prefer one stack end-to-end.

## Decision matrix

| Constraint | Choice |
|------------|--------|
| Already on GitHub Pages / `github-pages` gem | Stay on **Jekyll** |
| Want modern DX, partials, islands, still static | **Astro** + Markdown/MDX |
| Non-dev needs a GUI to write | **Astro/Jekyll + Decap CMS** or **Tina** |
| Needs app routes, auth, or personalized pages | **Next.js** + MDX or headless CMS |
| Maximum simplicity, no Node | **Jekyll** or plain HTML + a few pages |

## Jekyll + GitHub Pages (personal blog default for GH sites)

**Layout**

```
_config.yml
_data/theme.yml
_layouts/          # home, posts index, post
_posts/YYYY-MM-DD-slug.markdown
_drafts/           # optional
assets/            # images, css
Gemfile            # github-pages + webrick
Dockerfile + docker-compose.yml  # optional local parity
```

**Local**

```bash
bundle install
bundle exec jekyll serve --host 0.0.0.0
# or
docker compose up --build
```

**New post**

```bash
# file: _posts/YYYY-MM-DD-short-slug.markdown
```

```yaml
---
layout: post
title: "Clear title"
date: 2026-07-23 20:00:00 +0530
categories: Personal
description: "One-sentence summary for SEO and shares."
---
```

**Config essentials**

- `title`, `description`, `url`, `baseurl`
- `remote_theme` **or** fully custom layouts (avoid fighting both)
- Exclude `vendor/`, `.bundle/`, `node_modules/` from build

**Deploy**

- Push to `main` / Pages branch, or Actions build
- `CNAME` file for custom domain; enforce HTTPS in Pages settings

## Astro (greenfield static)

```bash
npm create astro@latest
# add Markdown content collection under src/content/blog
npm run dev
npm run build
```

Use content collections with a zod schema mirroring the front matter fields above. Deploy to Pages/Netlify/Vercel as static.

## Headless / GUI CMS (only when requested)

- **Decap CMS**: admin SPA + git backend; works with Jekyll/Astro static output
- **Tina**: visual edit in-place; git-backed
- **Sanity**: hosted content API; pair with Astro/Next; overkill for many personal blogs

Wire CMS after the reading experience works — never before.

## Verification commands

```bash
# Jekyll
bundle exec jekyll build
bundle exec jekyll doctor

# Node static
npm run build

# Smoke
curl -sI http://127.0.0.1:4000/ | head
curl -sI http://127.0.0.1:4000/posts/ | head
```
