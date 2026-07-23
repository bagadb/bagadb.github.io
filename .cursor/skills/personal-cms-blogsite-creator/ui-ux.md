# UI/UX for personal CMS blogs

Craft rules for home, index, and reading surfaces. Apply when designing or redesigning visuals.

## Design direction first

Before CSS, lock:

1. **Mood** — one sentence (e.g. "foggy night desk, calm cyan accent")
2. **Palette** — CSS variables only; 1 background family, 1 text family, 1 accent
3. **Type pair** — display + body; avoid Inter, Roboto, Arial, raw system as display
4. **Hero media** — real photo or authored artwork tied to the person/place — not abstract purple mesh alone as the main idea

```css
:root {
  --bg: #252a34;
  --bg-elevated: #2f3542;
  --text: #efefef;
  --text-muted: #b8bdc7;
  --accent: #00abb5;
  --focus: #00abb5;
  --measure: 68ch;
  --space: clamp(1rem, 2vw, 2rem);
  --font-display: "YourDisplay", Georgia, serif;
  --font-body: "YourBody", Georgia, serif;
}
```

Adapt tokens to the brand; do not copy sample hex if the site already has a palette.

## Home (first viewport)

Allowed:

- Brand / name at hero scale
- One headline
- One short supporting sentence
- One CTA group (e.g. "Read the blog" + social icons)
- One dominant full-bleed visual plane

Forbidden in first viewport:

- Stats, schedules, "this week" widgets
- Card grids, inset hero images, floating media tiles
- Detached badges, promo chips, overlay labels on the hero image
- Secondary marketing blocks

Home should still read as **their** site with the nav removed.

## Posts index

- Chronological list: title, date, optional one-line excerpt
- Light structure — linked headings beat card galleries
- Filters/categories only if content volume needs them

## Post / reading surface

- Single column, `max-width: var(--measure)`
- `h1` = post title; metadata in quiet text (`time` with machine-readable datetime)
- Body: generous line-height (~1.6–1.75), restrained link color = accent
- Code blocks scroll; images fluid (`max-width: 100%; height: auto`)
- Previous/next optional; don't clutter with related-post carousels

## Motion

Ship 2–3 intentional motions:

1. Home content panel enter (opacity/translate ~300–500ms)
2. Link/CTA hover color or underline
3. Optional subtle background parallax or slow ken-burns — keep tasteful

Prefer `prefers-reduced-motion: reduce` to disable non-essential motion.

## Responsive

- Mobile-first padding; home stacks image atmosphere + bio panel
- No horizontal scroll
- Social icons with adequate hit area
- Test 375px and 1280px widths before done

## A11y baseline

- Text contrast AA on body and UI chrome
- Visible `:focus-visible` rings using `--focus`
- Decorative images: empty alt; informative images: real alt
- Don't rely on color alone for links inside body copy (underline on hover/focus at minimum)

## Anti-patterns (AI-default looks)

Avoid unless the existing brand already is:

1. Purple-on-white / purple→indigo gradient themes
2. Warm cream `#F4F1EA` + terracotta + hard serif poster look
3. Broadsheet: hairline rules, zero radius, dense newspaper columns
4. Dark mode + glow + rounded-full pills + multi-layer shadows + emoji clusters
