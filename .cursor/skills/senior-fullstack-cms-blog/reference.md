# Personal CMS Blog — Reference

Read this when choosing architecture, CMS tooling, or deploy strategy.

## When to stay static

Stay on Markdown + static site generator when:

- One author (or a few trusted authors)
- Posts are files in git
- Hosting is GitHub Pages / similar
- No need for live previews from non-technical editors

This covers most personal blogs. Prefer it.

## When to add a CMS layer

Add a Git-based or headless CMS when:

- Non-git editors need a UI to publish
- Editorial workflow (draft → review → publish) is required
- Structured content beyond posts (projects, recipes, etc.) grows painful in raw front matter

Prefer Git-backed CMS (Decap, Tina, Front Matter) so content remains in the repo.

## Generator cheat sheet

| Tool | Fit |
|------|-----|
| **Jekyll** | GitHub Pages native; Liquid; mature themes; Ruby toolchain |
| **Hugo** | Fast builds; Go templates; great for large post counts |
| **Eleventy** | Flexible; JS ecosystem; minimal opinions |
| **Astro** | Component islands; modern UI with mostly static output |

Do not migrate generators for taste alone. Migrate only for a concrete constraint (build time, component model, hosting).

## Jekyll / GitHub Pages notes

- Prefer `github-pages` gem compatibility over bleeding-edge Jekyll plugins.
- Customizations: thin `_layouts` / `_includes` / `_sass` overrides beat forking a whole theme.
- `remote_theme` updates can change markup; pin versions when stability matters.
- Front matter drives layout selection; keep layout names stable.
- Collections for non-post content; `_data` for repeated structured config.

## Reading UX checklist

- Comfortable measure (~60–75 characters) and line height for longform
- Predictable nav: Home, Posts, About (as needed) — no mystery meat
- Post pages: title, date, readable body; avoid chrome competing with text
- Code blocks scroll horizontally; do not blow out mobile layout
- Focus states visible; contrast AA+ for body text
- Prefer system of spacing/type scales via CSS variables

## Performance budget (personal blog)

- Hero/background images: compress; prefer modern formats when Pages/CDN allows
- Avoid autoplaying heavy GIFs when a short MP4/WebM or static frame works
- Limit webfonts (1–2 families); `font-display: swap`
- No unnecessary JS frameworks on article pages

## SEO baseline

- Unique `<title>` and meta description per important page
- One H1 per page; logical heading order
- Absolute canonical URL when `site.url` is set
- Image `alt` that describes content
- Keep `sitemap.xml` / feeds accurate if present
