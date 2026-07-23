# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single **Jekyll** static blog site (Ruby), deployed via GitHub Pages. There is no backend, database, or JS build — the only runtime service is the Jekyll dev server. There is no automated test suite and no lint config in the repo.

### Services

| Service | How to run | Notes |
| --- | --- | --- |
| Jekyll dev server | `bundle exec jekyll serve --host 0.0.0.0 --port 4000` | Serves at `http://localhost:4000`. `./start.sh` does `bundle install` then serves. `--watch` (default for `serve`) hot-reloads posts/layouts. |

### Build

- `bundle exec jekyll build` outputs static HTML to `_site/` (gitignored).

### Non-obvious caveats

- Dependencies are vendored locally: `bundle config set --local path vendor/bundle` is set so `bundle install` needs no `sudo`. Both `vendor/` and `.bundle/` are gitignored.
- `_config.yml` uses `remote_theme: mmistakes/jekyll-theme-basically-basic@1.4.5`, so the **first** build/serve needs internet access to fetch the theme from GitHub. Without network the site renders unthemed.
- `_config.yml` is NOT hot-reloaded by `jekyll serve` — restart the server after editing it (posts, layouts, and data files do hot-reload).
- Core "publish a post" workflow: add a `YYYY-MM-DD-title.markdown` file under `_posts/` with front matter (`layout: post`, `title`, `date`, `categories`); it appears on `/posts/` and at its category-based permalink after the watcher rebuilds.
