---
name: personal-cms-blogsite-creator
description: Design and ship personal CMS blog sites end-to-end — stack choice, content model, UI/UX, authoring workflow, SEO, deploy, and ops. Use when creating, redesigning, or upgrading a personal blog, portfolio-blog hybrid, GitHub Pages/Jekyll site, headless CMS blog, or when the user asks for a personal CMS, blogsite, or writing platform.
---

# Personal CMS Blogsite Creator

Senior full-stack playbook for personal blogs that feel authored, not templated. Prefer clarity over cleverness. Bake in Karpathy discipline: surface ambiguity before coding, ship minimum viable structure, touch only what the request requires, define verifiable success criteria and loop until they pass.

## When this skill applies

- Greenfield personal blog / CMS / writing site
- Redesign or rebuild of an existing personal blog (e.g. Jekyll + GitHub Pages)
- Adding CMS authoring, theming, SEO, or reading UX to a portfolio site
- Choosing between static, hybrid, and dynamic personal publishing stacks

## Operating principles (Karpathy)

1. **Think before coding** — State assumptions. If stack, IA, or visual direction is unclear, ask. Present tradeoffs; do not silently pick.
2. **Simplicity first** — No speculative features, plugins, or abstractions. One author, one site, one publishing path unless asked otherwise.
3. **Surgical changes** — On existing blogs, preserve brand voice, URLs, and content. Match established patterns; do not drive-by refactor.
4. **Goal-driven** — Every phase ends with a check (`serve`/`build`, Lighthouse smoke, content renders, links work).

## Discovery (do this first)

Collect before scaffolding. If missing, ask — do not invent a fake identity.

| Area | Ask |
|------|-----|
| Identity | Name, tagline, niche, tone (personal / technical / hybrid) |
| Content | Post types, cadence, categories/tags, drafts vs publish |
| Audience | Who reads; primary CTA (read, subscribe, hire, contact) |
| Stack constraints | Prefer static GH Pages? Need CMS UI? Comments? Newsletter? |
| Brand | Existing palette, fonts, photography, must-keep URLs |
| Deploy | GitHub Pages, Netlify, Vercel, Cloudflare, custom domain |

**Default for this repo family:** Jekyll + `github-pages` gem + custom layouts + markdown posts + Docker serve — unless the user explicitly wants a different stack.

## Stack decision (pick one, document why)

| Need | Prefer | Avoid for personal blogs |
|------|--------|--------------------------|
| Free, git-native, GH Pages | **Jekyll** or Astro static | Heavy WordPress hosting |
| React ecosystem + content files | **Astro** + MD/MDX | SPA-only blogs (bad SEO/perf) |
| Visual CMS for non-dev editing | Astro/Next + Sanity/Decap/Tina | Building a custom CMS from scratch |
| Maximum control / app features | Next.js App Router + MDX or headless CMS | Premature microservices |

Default recommendation when unsure: **Astro + markdown** (new) or **Jekyll + GitHub Pages** (existing GH Pages sites). See [stacks.md](stacks.md).

## Information architecture (minimum)

```
/                 → identity hero / home (brand-first)
/posts| /blog     → chronological index (+ optional categories)
/posts/:slug      → article reading surface
/about            → optional; only if not covered on home
/feed.xml         → Atom/RSS
/sitemap.xml      → sitemap
```

Content model for markdown posts:

```yaml
---
layout: post          # or equivalent
title: "..."
date: YYYY-MM-DD HH:MM:SS ±TZ
categories: [Topic]   # keep sparse
tags: []              # optional; don't invent taxonomies
description: "..."    # SEO excerpt; required for social cards
image: /assets/...    # optional OG image
draft: false
---
```

Keep front matter boring and consistent. Categories > tags for personal blogs.

## End-to-end delivery workflow

Copy and track:

```
Task Progress:
- [ ] 1. Discovery answers locked
- [ ] 2. Stack + deploy target chosen
- [ ] 3. Scaffold site + content model
- [ ] 4. Home + index + post templates (UI/UX)
- [ ] 5. Sample/migrated posts render
- [ ] 6. SEO/meta/RSS/sitemap/favicon
- [ ] 7. Local serve + mobile check
- [ ] 8. Production deploy + custom domain smoke
```

### 1. Scaffold

- Create only directories the stack needs (`_posts`, `assets`, layouts/components, config).
- Wire local serve (`bundle exec jekyll serve`, `npm run dev`, or Docker).
- Success: home URL returns 200 with brand visible.

### 2. Content pipeline

- One markdown (or MDX) authoring path.
- Images under `assets/` with descriptive names; compress before commit.
- Drafts: `_drafts/` (Jekyll) or `draft: true` — never publish placeholders.
- Success: `jekyll build` / production build exits 0; post list shows titles + dates.

### 3. UI/UX (non-negotiable craft)

Personal blogs fail when they look like dashboards or theme demos. Follow [ui-ux.md](ui-ux.md). Hard rules:

- **Brand first** — Name/identity is hero-level on home, not nav chrome.
- **One composition** for first viewport: brand, one headline, one supporting line, one CTA group, one dominant visual.
- **Full-bleed atmosphere** on promotional home — edge-to-edge image/gradient plane; no inset hero cards.
- **No hero overlays** — no floating badges, chips, or promo stickers on media.
- **Cards only for interaction** — index rows can be simple linked titles + meta; avoid card grids of posts unless interaction needs a container.
- **Expressive type** — not Inter/Roboto/Arial/system as the display face.
- **Atmosphere** — CSS variables for palette; background with depth (photo, subtle pattern, gradient). Avoid purple-on-white AI clichés, cream+terracotta serif cliché, and broadsheet hairline cliché unless the brand is already that.
- **Motion** — 2–3 intentional transitions (e.g. home panel fade, link color, image ken-burns subtle). No noise.
- **Reading surface** — comfortable measure (~60–75ch), clear hierarchy (H1 → H2 → body), high contrast for text, quiet chrome.
- **Mobile** — home and post readable without horizontal scroll; tap targets ≥44px.

### 4. CMS / authoring UX

For a **personal** site, git + markdown is often the CMS. Escalate only when asked:

| Level | What to ship |
|-------|----------------|
| L0 Git CMS | Markdown in repo; PR or direct push publishes |
| L1 Decap/Tina | Admin UI over git; same static output |
| L2 Headless | Sanity/Contentful + static or SSR front |

Never build auth, roles, and a custom admin for a single-author blog unless explicitly requested.

### 5. SEO, social, feed

- Unique `<title>` + meta description per page
- Canonical URL from config `url` + `baseurl`
- Open Graph + Twitter card tags on posts
- RSS/Atom feed linked in `<head>`
- `sitemap.xml`; `robots.txt` allowing crawl
- Semantic HTML: one `h1`, article/`time` datetime, alt text on images

### 6. Performance & a11y

- Optimize hero and post images (size + format); lazy-load below fold
- Prefer system-safe font loading (`font-display: swap`) when self-hosting
- Keyboard focus visible; color contrast AA for body text
- No layout shift from late web fonts or unsized images

### 7. Deploy & ops

- GitHub Pages: `github-pages` gem compatibility; CNAME for custom domain
- Preview via PR builds when available
- Document: how to add a post, how to run locally, how to deploy
- Success criteria: production URL serves HTTPS, home + one post + feed OK

## Existing-site surgery (this repo pattern)

When enhancing an existing Jekyll personal blog:

1. Read `_config.yml`, layouts, `_data/`, and 1–2 posts before changing anything.
2. Preserve permalinks (`/posts/`, post URLs) unless migration is requested.
3. Keep remote_theme / custom layout split intact unless replacing the theme intentionally.
4. Prefer extending `_layouts/` and assets over rewriting all markup.
5. Verify with Docker Compose or `bundle exec jekyll serve` before declaring done.

## Anti-patterns

- Multi-author RBAC, comment engines, and newsletter stacks on day one
- Blog-as-SPA with client-fetched markdown
- Card grids, stat strips, and pill clusters on the home hero
- Inventing biography, social links, or niche the user did not provide
- Theme soup (Bootstrap + Tailwind + random UI kit) without a design direction
- Huge plugin lists "for later"

## Output expectations

When delivering work under this skill:

1. Short plan with assumptions + success checks
2. Implemented site or surgical diff
3. How to run locally and how to publish a post
4. Explicit list of follow-ups **not** done (only if relevant debt remains)

## Additional resources

- Stack matrix and commands: [stacks.md](stacks.md)
- UI/UX detail and tokens: [ui-ux.md](ui-ux.md)
- Launch checklist: [checklists.md](checklists.md)
