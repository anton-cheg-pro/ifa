# Contract: Crawl surface (search and assistants)

## robots.txt

Served from site root after deploy.

- Allow crawling of public pages.
- `Sitemap:` absolute URL to `https://family-wealth.pro/sitemap.xml`.

## sitemap.xml

List important public URLs (home, about, contact, licenses, knowledge, financial-plan, how-we-work, each service slug). Use `https://family-wealth.pro` origin. No extra query params.

## HTML

- Default `<title>` and `<meta name="description">` in `index.html` for bots that do not run JS.
- After JS, important routes keep unique `document.title` as today.

## Claims

Descriptions MUST NOT state guaranteed investment returns or fake credentials.
