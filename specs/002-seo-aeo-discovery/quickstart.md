# Quickstart: SEO/AEO discovery

Validate in this order. Do not skip P1 because later pages exist.

## Prerequisites

- Production: `https://family-wealth.pro`
- Local: `cd frontend && npm install && npm run build && npm run preview` (or `npm run dev`)
- Owner access: Google Search Console, Bing Webmaster Tools

## P1 — Crawl and homepage

1. After deploy, `curl https://family-wealth.pro/robots.txt` — plain text, `Sitemap:` line, not the site 404 page.
2. `curl https://family-wealth.pro/sitemap.xml` — XML, includes `https://family-wealth.pro/uk`.
3. Open `frontend/dist/index.html` after `npm run build` — title, description, OG tags, JSON-LD present ([share-preview.md](./contracts/share-preview.md), [json-ld.md](./contracts/json-ld.md)).
4. Owner: GSC → URL Inspection → `https://family-wealth.pro/` and `/uk`. Record: on Google, crawled, indexed, last crawl, indexing reason, user-declared vs Google-selected canonical. If not indexed, write ≤5 fix items before treating later stories as done.
5. Owner: submit sitemap in GSC (and Bing).

## P2 — Entity page

1. Open `/uk/anton-cherepkov-financial-advisor`.
2. First paragraph is the approved entity statement (spec).
3. `/uk/about` still loads as «Про мене».
4. Sitemap lists the entity URL once live.

## P3 — Schema

1. Paste homepage HTML into a schema validator — Organization + Person, no errors.
2. `Person.url` is the entity URL; `sameAs` URLs resolve in a browser.

## P4–P6 — Cluster (only after PO copy)

1. Each live pillar and `/uk/faq` and `/uk/passive-income-retirement` return 200, unique title, answer-first intro, link to entity page.
2. Flagship: educational block first; `$2 000` framed as illustration; then Anton attribution.

## P7 — Articles

1. Open a knowledge article — author line links to entity URL.
2. Footer shows «Автор:» plus the full entity paragraph; the name links to the entity page.
3. Other articles appear on the right (desktop) or below (narrow viewport): title + lead, same order as `/uk/knowledge`, current article omitted.
4. New articles only from PO drafts.

## FAQ accordion (2026-10-01)

1. Open `/uk/faq`. Header shows FAQ between Ліцензії and Контакти; hover/title reads «Часті питання».
2. Cards are one column. Open one answer — any previously open card closes. A second card cannot stay open.
3. Fee answer shows 250 USD and a button that opens the consultation modal.
4. `https://family-wealth.pro/uk/how-we-work` (or financial-plan) shows 250, not 200.

## Positioning & schema (2026-10-02, FR-017 / FR-008a / FR-018)

1. Footer / long disclaimer: still says the **client** makes the investment decision; also states Family Wealth **professionally selects** instruments (or equivalent). No claim that Family Wealth holds client funds or is the BVI discretionary manager.
2. FAQ «З ким ви працюєте?»: mentions ~$10,000 and/or ~$500 per month as **orientation**, plus that smaller amounts are OK to build regular investing — not a hard minimum.
3. FAQ differentiation / fee / guarantees answers: licensed partner path on **client** brokerage account is visible; consistent with [positioning-copy.md](./contracts/positioning-copy.md).
4. View source on `/uk/faq` after load: `FAQPage` + `ProfessionalService` JSON-LD; description aligns with visible FAQ (no star rating).
5. View source on homepage `index.html`: Organization + Person only — **no** $10,000 / $500 in JSON-LD.
6. Optional: ask ChatGPT «чи Family Wealth може керувати брокерським рахунком клієнта» after deploy — should cite FAQ/site, not only the old footer line (manual AEO spot-check).

## P8 — llms.txt (optional)

1. If shipped: `curl https://family-wealth.pro/llms.txt` is text, not SPA 404.

## P9 — Owner monthly

1. Fill `docs/seo/ai-visibility-matrix.md` for the nine queries × three engines.
2. Outreach uses the standard off-site entity line (spec).

## Claims check

No page in this feature ships guaranteed returns or «найкращий консультант України» without evidence (do not add such claims).
