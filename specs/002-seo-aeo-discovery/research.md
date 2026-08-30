# Research: SEO/AEO discovery & entity authority

## 1. SPA swallows `robots.txt` / `sitemap.xml`

- **Decision**: Put `robots.txt` and `sitemap.xml` in `frontend/public/` (Vite copies to `dist/`). Add Cloudflare Pages `_routes.json` **exclude** for `/robots.txt`, `/sitemap.xml`, `/llms.txt` so they are not rewritten to `index.html`. Keep `_redirects` `/* /index.html 200` for app routes only via exclude, not by inventing a second host.
- **Rationale**: Live fetch of `https://family-wealth.pro/robots.txt` returned the in-app 404 page, not robots. GSC and AI crawlers cannot index if they see HTML 404.
- **Alternatives considered**: Prerender/SSR (new pipeline, Principle I). Cloudflare Worker HTML rewrite (extra surface). Drop SPA fallback (breaks deep links).

## 2. Meta and Open Graph without prerender

- **Decision**: Site-wide honest `<title>`, `<meta name="description">`, OG/Twitter in `frontend/index.html` with absolute `https://family-wealth.pro` URLs. Keep unique `document.title` (and later description via `document.querySelector` only if needed) after JS for executing clients. One OG card this phase (SPA limitation). Default image: existing advisor still (`anton.jpg`) unless PO picks another.
- **Rationale**: Chat and many bots do not run React. `react-helmet` adds a dependency and still fails Telegram. Same conclusion as `001` research item 2 — this feature **implements** it.
- **Alternatives considered**: Per-URL prerender; Helmet; Cloudflare HTML injection per path.

## 3. Entity page vs `/uk/about`

- **Decision**: New route `/uk/anton-cherepkov-financial-advisor` (Person canonical). Keep `/uk/about` as «Про мене» (bio, certificates). Nav: keep «Про мене» → about; add entity links from home/pillars/articles/author byline. Schema `Person.url` = entity URL only.
- **Rationale**: PO Q2 = keep both. Distinct roles prevent duplicate entity statements.
- **Alternatives considered**: Redirect about → entity (rejected by PO). Replace about in place (loses bio/certs URL).

## 4. JSON-LD

- **Decision**: One `application/ld+json` graph in `index.html`: `Organization` (Family Wealth, url site origin) + `Person` (name, jobTitle, worksFor, url entity page). `sameAs` = only URLs already public on the site **plus** FinMentor and other profiles **PO lists before ship** (LinkedIn, Facebook, YouTube — do not invent). Add `FAQPage` / `Article` / `BreadcrumbList` only when that page’s visible content ships (P5/P7), injected with the same pattern (static snippet on those pages if we later prerender; until then, a tiny `useEffect` that sets a `<script type="application/ld+json">` on FAQ/article routes is allowed **without** a new library).
- **Rationale**: Schema must match visible content. Empty `sameAs` is better than fake URLs.
- **Alternatives considered**: JSON-LD generator package (rejected — new dep). Schema only on entity page (homepage bots would miss Organization).

## 5. Pillar and FAQ routes

- **Decision**: English slugs under `/uk/` to match PO flagship/entity style:

  | Topic | Path |
  |-------|------|
  | Антон (entity) | `/uk/anton-cherepkov-financial-advisor` |
  | Фінансовий консультант в Україні | `/uk/financial-advisor-ukraine` |
  | Фінансове планування | `/uk/financial-planning` |
  | Пенсійне планування | `/uk/pension-planning` |
  | Пасивний дохід (pillar) | `/uk/passive-income` |
  | Інвестиційне планування | `/uk/investment-planning` |
  | Сімейний капітал | `/uk/family-capital` |
  | FAQ | `/uk/faq` |
  | Flagship | `/uk/passive-income-retirement` |

  Reuse `PageLayout` + content modules in `frontend/src/content/`. **Do not publish body copy until PO + finance-analyst approve**, except the entity lead already approved. Scaffold pages with the approved lead / placeholders marked “PO draft” only if PO agrees at implement; default is wait for approved Ukrainian text.
- **Rationale**: Spec locked two slugs; remaining need a consistent convention. Ukrainian translit slugs were Q3-A; PO chose English for flagship.
- **Alternatives considered**: Nest pillars under `/uk/knowledge/` (mixes articles and pillars). Duplicate service pages as pillars (thin duplicate — rejected).

## 6. Knowledge author entity

- **Decision**: Extend existing `KnowledgeArticlePage` header with author line: «Антон Черепков» linking to entity URL. New articles wait for PO drafts from spec backlog. Do not AI-generate article bodies.
- **Rationale**: Existing knowledge stack; smallest change for FR-010.
- **Alternatives considered**: New blog engine (rejected).

## 7. `llms.txt`

- **Decision**: Optional file in `public/llms.txt` after P1–P7. Markdown-ish list of canonical URLs + one-line entity. Exclude from SPA via `_routes.json`. Skip if PO says not now.
- **Rationale**: Spec P8 last in pipeline; not a ranking lever.
- **Alternatives considered**: Ship llms.txt first (rejected — spec order).

## 8. External authority and AI matrix

- **Decision**: Not application code. Add `docs/seo/ai-visibility-matrix.md` as a fill-in table. Owner: GSC URL Inspection, Bing Webmaster, sitemap submit, monthly matrix, outreach with the standard entity line. `sameAs` FinMentor when PO confirms the advisor profile URL.
- **Rationale**: Spec P9 off-site; Constitution I forbids building a CRM for mentions.
- **Alternatives considered**: In-app analytics dashboard (out of scope).

## 9. Relationship to `001-open-production-backlog`

- **Decision**: Implement crawl + OG here. Do not duplicate T012–T020 in `001` after this plan is the living source. `001` copy tone and second-opinion photo stay in `001`.
- **Rationale**: Spec 002 Constitution note.
- **Alternatives considered**: Dual implement in both features (rejected).
