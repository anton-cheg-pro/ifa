# Contract: Crawl surface

## robots.txt

Served from origin **as `text/plain`**, not the SPA 404 HTML.

- Allow crawling of public pages.
- Do **not** `Disallow` Googlebot, Bingbot, GPTBot, OAI-SearchBot, ChatGPT-User.
- `Sitemap: https://family-wealth.pro/sitemap.xml`

## Cloudflare (required for this contract)

Static SEO files in `frontend/public/` plus `_routes.json` exclude so they are not rewritten to `index.html`:

```json
{
  "version": 1,
  "include": ["/*"],
  "exclude": ["/robots.txt", "/sitemap.xml", "/llms.txt"]
}
```

Verify after deploy: `curl -I https://family-wealth.pro/robots.txt` is 200 and body starts with `User-agent` (or comments), not Ukrainian 404 copy.

## sitemap.xml

- XML sitemap listing **live** canonical URLs only (see [canonical-urls.md](./canonical-urls.md)).
- Absolute `https://family-wealth.pro/...` loc values.
- Owner submits in GSC and Bing after first deploy that includes the file.

## HTML defaults (`index.html`)

- `<html lang="uk">`
- Default `<title>` and `<meta name="description">` (honest; no promised returns).
- Optional `<link rel="canonical" href="https://family-wealth.pro/uk">` for the default document (SPA: one canonical in initial HTML).
- After JS, unique `document.title` on important routes (existing pattern).

## Claims

Titles and descriptions MUST NOT state guaranteed investment returns, «найкращий в Україні», or fake credentials.
