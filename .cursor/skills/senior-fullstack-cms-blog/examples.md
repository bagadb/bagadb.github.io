# Examples

## Example 1: New blog post

**Request:** Add a post about a terminal setup.

**Approach:**

1. Create `_posts/YYYY-MM-DD-slug.markdown` with front matter matching existing posts.
2. Reuse the established `layout`.
3. Place images under `assets/` with descriptive names; reference with site-relative paths.
4. Keep tone aligned with prior posts; do not over-format.

**Front matter pattern:**

```markdown
---
layout: posts
title: "My terminal setup"
date: 2026-07-23
---
```

## Example 2: Home page UI pass

**Request:** Improve the home page first viewport.

**Do:**

- Make the personal/brand name the dominant text signal
- One short supporting sentence
- One primary action (e.g. read posts)
- One full-bleed atmosphere image already in `assets/`

**Don't:**

- Add stat strips, tag clouds, or card grids in the hero
- Overlay badges on the hero image
- Introduce a new purple gradient theme unrelated to the site

## Example 3: Theme customization without a rewrite

**Request:** Tweak typography and spacing.

**Approach:**

1. Identify whether styles come from the remote theme or local overrides.
2. Add the smallest local override (layout include or CSS variable layer).
3. Rebuild and check post + home templates.
4. Leave remote theme pin unchanged unless an upgrade is the goal.

## Example 4: “Should we add a CMS?”

**Signals to stay Markdown-only:** solo author, comfortable with git, few posts/month.

**Signals to add Git-based CMS:** non-technical co-author, frequent draft editing in UI, structured fields beyond Markdown.

**Default answer:** stay Markdown until a concrete editing pain appears.
