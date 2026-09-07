# Homepage GSC inspection (owner)

## Production smoke test (agent, 2026-09-07)

Automated checks after deploy (`2694e89`):

| Check | URL | Result |
|-------|-----|--------|
| robots.txt | `https://family-wealth.pro/robots.txt` | HTTP 200, plain text, `Sitemap:` line present |
| sitemap.xml | `https://family-wealth.pro/sitemap.xml` | HTTP 200, XML, includes `/uk` and entity URL |
| llms.txt | `https://family-wealth.pro/llms.txt` | HTTP 200, plain text |
| Homepage | `https://family-wealth.pro/uk` | HTTP 200 |
| Root | `https://family-wealth.pro/` | HTTP 200 |
| Entity page | `https://family-wealth.pro/uk/anton-cherepkov-financial-advisor` | HTTP 200 |
| Sample article | `https://family-wealth.pro/uk/knowledge/reserve-fund` | HTTP 200 |

Schema in initial HTML (`index.html`): Organization + Person JSON-LD. Article JSON-LD is injected client-side on knowledge article routes.

**Still owner-only:** GSC property, URL Inspection tables below, sitemap submit in GSC/Bing.

---

## Owner setup — Google Search Console

Do once (≈15 min):

1. Open [Google Search Console](https://search.google.com/search-console).
2. **Add property** → choose **URL prefix**: `https://family-wealth.pro`
3. **Verify ownership** (pick one):
   - **HTML tag** — copy the `google-site-verification` meta tag; add it to `frontend/index.html` `<head>`, deploy, then click Verify in GSC. *(Agent can add the tag if you paste it here.)*
   - **DNS** — add the TXT record at your domain registrar (Cloudflare DNS if the domain is there).
4. After verified: **Sitemaps** → enter `sitemap.xml` → Submit.
5. **URL Inspection** — inspect each URL below and copy values into the tables.
6. Optional: [Rich Results Test](https://search.google.com/test/rich-results) → paste `https://family-wealth.pro/uk` → confirm Organization/Person detected.

Repeat step 5 for the entity page after homepage is green:

- `https://family-wealth.pro/uk/anton-cherepkov-financial-advisor`

## Owner setup — Bing Webmaster Tools

1. [Bing Webmaster](https://www.bing.com/webmasters) → add site `https://family-wealth.pro`
2. Import from GSC if offered, or verify separately.
3. Submit sitemap: `https://family-wealth.pro/sitemap.xml`

---

## `https://family-wealth.pro/`

| Field | Value |
|-------|--------|
| URL is on Google | |
| Crawled | |
| Indexed | |
| Last crawl | |
| Page indexing reason | |
| User-declared canonical | |
| Google-selected canonical | |

## `https://family-wealth.pro/uk`

| Field | Value |
|-------|--------|
| URL is on Google | |
| Crawled | |
| Indexed | |
| Last crawl | |
| Page indexing reason | |
| User-declared canonical | |
| Google-selected canonical | |

If the homepage is not indexed, list at most five fix items below before treating later SEO stories as done.

1.
2.
3.
4.
5.
