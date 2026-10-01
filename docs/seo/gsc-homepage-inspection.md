# Homepage GSC inspection (owner)

**Крок 1 з плану PO:** покрокова інструкція українською → [`gsc-owner-walkthrough-uk.md`](./gsc-owner-walkthrough-uk.md)

## Production smoke test (agent, 2026-10-01)

Automated checks on production:

| Check | URL | Result |
|-------|-----|--------|
| robots.txt | `https://family-wealth.pro/robots.txt` | HTTP 200, plain text, `Sitemap:` line present |
| sitemap.xml | `https://family-wealth.pro/sitemap.xml` | HTTP 200, XML, includes `/uk` and entity URL |
| llms.txt | `https://family-wealth.pro/llms.txt` | HTTP 200, plain text |
| Homepage | `https://family-wealth.pro/uk` | HTTP 200 |
| Root | `https://family-wealth.pro/` | HTTP 200 |
| Entity page | `https://family-wealth.pro/uk/anton-cherepkov-financial-advisor` | HTTP 200 |
| Sample article | `https://family-wealth.pro/uk/knowledge/reserve-fund` | HTTP 200 |
| New article | `https://family-wealth.pro/uk/knowledge/how-to-choose-financial-advisor` | HTTP 200 (post `d83a8e7`) |

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
| URL is on Google | Так (2026-10-01, PO) |
| Crawled | (уточнити в GSC) |
| Indexed | **Так** |
| Last crawl | (уточнити в GSC) |
| Page indexing reason | Проіндексовано |
| User-declared canonical | `https://family-wealth.pro/uk` (з `index.html`) |
| Google-selected canonical | Ймовірно `https://family-wealth.pro/` |

## `https://family-wealth.pro/uk`

| Field | Value |
|-------|--------|
| URL is on Google | Так (сторінка відома Google) |
| Crawled | (уточнити в GSC) |
| Indexed | **Ні** |
| Last crawl | (уточнити в GSC) |
| Page indexing reason | **Копія. Google вибрав іншу канонічну, ніж користувач** |
| User-declared canonical | `https://family-wealth.pro/uk` |
| Google-selected canonical | `https://family-wealth.pro/` (очікувано) |

### Fix applied (code, deploy required)

**Причина:** `/` і `/uk` обидва віддавали **200** з одним `index.html`; canonical у HTML вказує на `/uk`, але Google обрав корінь `/` як канонічний.

**Зміна:** `frontend/public/_redirects` — `301` з `/` на `/uk` перед SPA fallback.

**Після деплою (PO):**

1. Перевір: `curl -I https://family-wealth.pro/` → має бути `301` → `Location: .../uk`
2. GSC → URL Inspection → `https://family-wealth.pro/uk` → **Запросити індексацію**
3. Через 1–2 тижні повторити Inspection; `/` може лишатися в індексі, але має злитися з `/uk`

If the homepage is not indexed, list at most five fix items below before treating later SEO stories as done.

1. [x] 301 `/` → `/uk` on Cloudflare Pages (`_redirects`)
2. [ ] Deploy + verify 301 on production
3. [ ] Request indexing for `/uk` in GSC
4. [ ] Internal links use `/uk`, not bare `/` (spot-check header/footer)
5. [ ] Re-run URL Inspection after crawl
