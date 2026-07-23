# Publish a new blog post (GitHub Pages)

Your site is Jekyll + GitHub Pages. A post is a markdown file under `_posts/`. Pushing to the Pages branch publishes it.

## 1. Create the post file

Name it:

```
_posts/YYYY-MM-DD-short-slug.markdown
```

Examples:

- `_posts/2026-07-23-my-new-post.markdown`
- `_posts/2026-08-01-favorite-albums.markdown`

Use today's date and a short lowercase slug with hyphens.

## 2. Front matter (required)

```yaml
---
layout: post
title: "Your title here"
date: 2026-07-23 20:00:00 +0530
categories: Personal
description: "One-sentence summary for SEO and link previews."
---
```

- `categories`: one short label (`Personal`, `Computers`, `Music`, …). Kept sparse on purpose.
- `description`: shown in search/social previews — write a real sentence.
- Timezone `+0530` matches your existing posts; change if you prefer.

Then write the body in Markdown below the `---`.

## 3. Images (optional)

1. Put files in `assets/` (e.g. `assets/my-post-hero.jpg`).
2. Compress large photos before committing.
3. Reference them with a leading slash:

```markdown
![Alt text](/assets/my-post-hero.jpg)
```

## 4. Preview locally (optional but recommended)

```bash
bundle install
bundle exec jekyll serve --host 0.0.0.0
```

Or with Docker:

```bash
docker compose up --build
```

Open http://127.0.0.1:4000/posts/ and click your draft.

## 5. Publish

```bash
git add _posts/YYYY-MM-DD-short-slug.markdown assets/
git commit -m "Add post: your title"
git push origin version-2
```

Use whatever branch GitHub Pages is building from (this repo uses `version-2`). After the Pages build finishes, the post appears at:

```
https://shreyasl.work/<category>/<YYYY>/<MM>/<DD>/<slug>.html
```

and on https://shreyasl.work/posts/

## Drafts (not published)

Put unfinished posts in `_drafts/` (no date prefix required), or keep them local and uncommitted. Files in `_drafts/` are not built unless you run:

```bash
bundle exec jekyll serve --drafts
```

## Checklist before you push

- [ ] Filename starts with `YYYY-MM-DD-`
- [ ] `layout: post`, title, date, category, description set
- [ ] Images load under `/assets/...`
- [ ] Local preview looks good (optional)
- [ ] Commit + push to the Pages branch
