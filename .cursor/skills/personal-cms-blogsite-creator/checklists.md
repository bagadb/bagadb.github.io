# Launch checklists

Use after implementation. Do not mark done until checks pass.

## Pre-launch

```
Content
- [ ] Home identity text approved / provided by owner
- [ ] At least one real post renders (not lorem)
- [ ] Drafts are not published
- [ ] Images compressed; alts set

IA & URLs
- [ ] /, index, post permalink work
- [ ] Old URLs preserved or redirects planned
- [ ] 404 page present and on-brand

SEO
- [ ] title + description on home and posts
- [ ] OG tags on posts
- [ ] RSS/Atom linked
- [ ] sitemap.xml present
- [ ] favicon works

UI/UX
- [ ] First viewport passes brand test (nav removed still identifiable)
- [ ] Reading measure comfortable on desktop
- [ ] Mobile home + post OK
- [ ] 2–3 motions present; reduced-motion respected

Quality
- [ ] Production build succeeds
- [ ] No console/build errors for critical path
- [ ] External social links correct + target=_blank with rel=noopener where used
```

## Local verify

```
- [ ] Dev server starts from documented command
- [ ] Home 200
- [ ] Posts index 200
- [ ] One post 200
- [ ] Feed 200 (if enabled)
```

## Production verify

```
- [ ] HTTPS custom domain (or *.github.io) loads
- [ ] CNAME / DNS correct
- [ ] Hard-refresh shows latest theme assets
- [ ] Share card preview sanity-checked (title + image)
```

## Handoff note (include in PR / reply)

```markdown
## Run locally
[command]

## Publish a post
1. Add `_posts/YYYY-MM-DD-slug.markdown` (or CMS path)
2. Fill front matter
3. Commit + push

## Success criteria used
- [checks you actually ran]
```
