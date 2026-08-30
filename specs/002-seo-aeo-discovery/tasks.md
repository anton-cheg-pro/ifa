# Tasks: SEO/AEO discovery & entity authority

**Input**: Design documents from `/specs/002-seo-aeo-discovery/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/

**Tests**: Not requested — no automated test tasks.

**Organization**: By user story (US1–US9). Do not append the same work to `docs/tasks.md`. `001` US2/US3 crawl+OG tasks are **this** feature — do not implement them twice.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Parallel (different files, no wait on incomplete sibling)
- **[Story]**: US1–US9 for story phases only

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Frozen stack; no new app.

- [x] T001 Confirm no new packages in `frontend/package.json`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Cloudflare must serve static SEO files instead of the SPA 404.

- [x] T002 Add `frontend/public/_routes.json` excluding `/robots.txt`, `/sitemap.xml`, `/llms.txt` per `specs/002-seo-aeo-discovery/contracts/crawl-surface.md`

**Checkpoint**: US1 can add robots/sitemap. `frontend/index.html` is shared by US1 and US3 — **one editor at a time**.

---

## Phase 3: User Story 1 - Homepage is indexable (Priority: P1) 🎯 MVP

**Goal**: Crawlers get real robots/sitemap; homepage has honest title, description, OG; owner can inspect GSC.

**Independent Test**: `curl` robots.txt and sitemap.xml on production are not the in-app 404; `frontend/dist/index.html` has meta + OG; GSC URL Inspection documented.

### Implementation for User Story 1

- [x] T003 [P] [US1] Add `frontend/public/robots.txt` (allow public; do not Disallow GPTBot/OAI-SearchBot/ChatGPT-User; `Sitemap: https://family-wealth.pro/sitemap.xml`) per `specs/002-seo-aeo-discovery/contracts/crawl-surface.md`
- [x] T004 [P] [US1] Add `frontend/public/sitemap.xml` with **existing** live URLs only (`/uk`, about, contact, licenses, knowledge + current article slugs, how-we-work, all service slugs) per `specs/002-seo-aeo-discovery/contracts/canonical-urls.md`
- [x] T005 [US1] Add default `<title>`, `<meta name="description">` (no promised returns), `<link rel="canonical" href="https://family-wealth.pro/uk">`, Open Graph + Twitter tags in `frontend/index.html` per `specs/002-seo-aeo-discovery/contracts/share-preview.md` (image: `https://family-wealth.pro/images/anton.jpg` unless PO already picked another)
- [x] T006 [P] [US1] Set unique `document.title` in `frontend/src/pages/HomePage.tsx` if missing
- [x] T007 [P] [US1] Set unique `document.title` in `frontend/src/pages/LicensesPage.tsx` if missing
- [x] T008 [P] [US1] Set unique `document.title` in `frontend/src/pages/KnowledgePage.tsx` if missing
- [x] T009 [P] [US1] Set unique `document.title` in `frontend/src/pages/EnglishStubPage.tsx` if missing
- [x] T010 [US1] After `npm run build`, confirm `frontend/dist/index.html` contains OG tags and `frontend/dist/robots.txt` / `sitemap.xml` exist
- [ ] T011 [US1] Owner: GSC URL Inspection for `https://family-wealth.pro/` and `/uk`; record index/canonical status (or ≤5 fix items) in `docs/seo/gsc-homepage-inspection.md` before treating later stories as done

**Checkpoint**: Indexation path works without entity/pillar pages.

---

## Phase 4: User Story 3 - Structured data (Priority: P3)

**Goal**: Organization + Person JSON-LD in initial HTML. Placed **before US2 in file-edit order** because it shares `index.html` with T005; Person.url already points at the future entity path.

**Independent Test**: Schema validator on homepage HTML: zero errors; `sameAs` URLs resolve.

### Implementation for User Story 3

- [x] T012 [US3] Ask PO for FinMentor / LinkedIn / Facebook / YouTube profile URLs; put confirmed list only in `frontend/src/content/sameAs.ts` (include existing Instagram + Telegram from `frontend/src/content/uk.ts`; omit unconfirmed)
- [x] T013 [US3] Add Organization + Person JSON-LD `<script type="application/ld+json">` in `frontend/index.html` per `specs/002-seo-aeo-discovery/contracts/json-ld.md` (`Person.url` = `https://family-wealth.pro/uk/anton-cherepkov-financial-advisor`) — after T005, same file

**Checkpoint**: Schema can ship with US1 even if entity page is one deploy later (URL will 404 until US2). Prefer shipping T013 **with** US2 if possible.

---

## Phase 5: User Story 2 - Anton entity page (Priority: P2)

**Goal**: Canonical Person page; first paragraph is the approved entity statement; `/uk/about` unchanged.

**Independent Test**: Open `/uk/anton-cherepkov-financial-advisor`; first paragraph matches spec; about still works; ≥3 internal links to entity.

### Implementation for User Story 2

- [x] T014 [US2] Add entity copy (approved lead only; extra body only if PO supplied) in `frontend/src/content/antonEntityPage.ts`
- [x] T015 [US2] Add page component `frontend/src/pages/AntonEntityPage.tsx` (reuse `PageLayout`; entity statement first; existing consult CTA pattern)
- [x] T016 [US2] Register route `/uk/anton-cherepkov-financial-advisor` in `frontend/src/App.tsx`
- [x] T017 [P] [US2] Add entity link from home magazine/about CTA area in `frontend/src/content/uk.ts` **without** removing `/uk/about` nav
- [x] T018 [P] [US2] Add entity link in `frontend/src/components/layout/SiteFooter.tsx` (keep «Про мене» → `/uk/about`)
- [x] T019 [US2] Append entity URL to `frontend/public/sitemap.xml`
- [x] T020 [US2] Set `document.title` on `frontend/src/pages/AntonEntityPage.tsx`

**Checkpoint**: Entity page independent of pillars/FAQ.

---

## Phase 6: User Story 4 - Topic pillar cluster (Priority: P4)

**Goal**: Six pillar pages (entity is US2) with answer-first intros and link to Anton. **No invented copy.**

**Independent Test**: Each live pillar 200, unique title, link to entity, in sitemap.

### Implementation for User Story 4

- [ ] T021 [US4] Stop: PO + finance-analyst approve Ukrainian copy for six pillars (do not write financial claims yourself)
- [ ] T022 [US4] After approve, add content map `frontend/src/content/pillarPages.ts` for `/uk/financial-advisor-ukraine`, `/uk/financial-planning`, `/uk/pension-planning`, `/uk/passive-income`, `/uk/investment-planning`, `/uk/family-capital`
- [ ] T023 [US4] Add `frontend/src/pages/PillarPage.tsx` (answer-first intro, link to `/uk/anton-cherepkov-financial-advisor`, unique `document.title`)
- [ ] T024 [US4] Register the six routes in `frontend/src/App.tsx`
- [ ] T025 [US4] Add the six URLs to `frontend/public/sitemap.xml`
- [ ] T026 [P] [US4] Mirror approved copy in `docs/content/pages/pillars/` (one md per pillar)

**Checkpoint**: Cluster shippable without FAQ/flagship/articles.

---

## Phase 7: User Story 5 - FAQ (Priority: P5)

**Goal**: `/uk/faq` with spec questions; 50–100 word answers first; FAQPage JSON-LD matching visible Q&A.

**Independent Test**: FAQ page lists all agreed questions; short answer first; schema matches.

### Implementation for User Story 5

- [ ] T027 [US5] Stop: PO + finance-analyst approve FAQ answers
- [ ] T028 [US5] After approve, add `frontend/src/content/faqPage.ts`
- [ ] T029 [US5] Add `frontend/src/pages/FaqPage.tsx` + route `/uk/faq` in `frontend/src/App.tsx`
- [ ] T030 [US5] Inject FAQPage JSON-LD on FAQ route only (small `useEffect` script tag in `frontend/src/pages/FaqPage.tsx`; no new npm package)
- [ ] T031 [US5] Append `/uk/faq` to `frontend/public/sitemap.xml`

**Checkpoint**: FAQ independent of flagship articles.

---

## Phase 8: User Story 6 - Flagship passive-income retirement (Priority: P6)

**Goal**: `/uk/passive-income-retirement` — planning answer first, then Anton attribution; `$2 000` as illustration.

**Independent Test**: Path 200; block 1 educational; block 2 links to entity.

### Implementation for User Story 6

- [ ] T032 [US6] Stop: PO + finance-analyst approve flagship copy
- [ ] T033 [US6] After approve, add `frontend/src/content/passiveIncomeRetirementPage.ts`
- [ ] T034 [US6] Add `frontend/src/pages/PassiveIncomeRetirementPage.tsx` + route in `frontend/src/App.tsx` + `document.title`
- [ ] T035 [US6] Append URL to `frontend/public/sitemap.xml`

**Checkpoint**: Flagship independent of new blog posts.

---

## Phase 9: User Story 7 - Knowledge author entity (Priority: P7)

**Goal**: Existing (and future) articles attribute Антон Черепков with entity link. New articles only from PO drafts.

**Independent Test**: Open any knowledge article; author links to entity page.

### Implementation for User Story 7

- [x] T036 [US7] Add author byline + link to `/uk/anton-cherepkov-financial-advisor` in `frontend/src/pages/KnowledgeArticlePage.tsx`
- [x] T037 [US7] Add Article JSON-LD on article pages in `frontend/src/pages/KnowledgeArticlePage.tsx` only if visible author/title match (`contracts/json-ld.md`)
- [ ] T038 [US7] Stop: wait for PO article drafts from spec backlog; then add slugs in `frontend/src/content/knowledgeArticles.ts` + bodies + `docs/content/pages/articles/` after finance-analyst review; update `frontend/public/sitemap.xml`

**Checkpoint**: T036 can ship without T038.

---

## Phase 10: User Story 8 - Optional llms.txt (Priority: P8)

**Goal**: Structured map for assistants after P1–P7 baseline.

**Independent Test**: `/llms.txt` is text, not SPA 404.

### Implementation for User Story 8

- [ ] T039 [US8] Skip unless PO wants it; else add `frontend/public/llms.txt` listing live canonical URLs + one-line entity (after T002 exclude)

---

## Phase 11: User Story 9 - External authority & AI matrix (Priority: P9)

**Goal**: Owner tracking; not application features.

**Independent Test**: Matrix file exists; owner can fill monthly.

### Implementation for User Story 9

- [x] T040 [US9] Create fill-in table `docs/seo/ai-visibility-matrix.md` (nine queries × ChatGPT/Gemini/Perplexity)
- [ ] T041 [US9] Owner: Bing Webmaster + GSC sitemap submit; monthly matrix in `docs/seo/ai-visibility-matrix.md`; outreach with spec entity line (no app code)

---

## Phase 12: Polish & Cross-Cutting Concerns

- [x] T042 Run `npm run build` in `frontend/` (must stay green; `package.json` unchanged)
- [ ] T043 Walk `specs/002-seo-aeo-discovery/quickstart.md` after deploy
- [x] T044 Do not add duplicate living tickets to `docs/tasks.md` for US1–US9
- [x] T045 Internal linking: pillars/FAQ/flagship/articles point at entity URL; no orphan new routes (`frontend/src/content/*`, `SiteHeader.tsx` only if PO wants pillars in nav)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup**: Immediate
- **Foundational (T002)**: Before robots/sitemap actually work on Cloudflare
- **US1**: After T002; MVP
- **US3**: After T005 (`index.html`); ideally same deploy as US2
- **US2**: After US1 (sitemap exists); can start page files in parallel with T003/T004
- **US4–US6**: After US2 (entity URL to link); **blocked on PO copy**
- **US7 T036**: After US2 route exists
- **US8**: After P1–P7 live URLs
- **US9**: Anytime (docs + owner)
- **Polish**: After stories you intend to ship

### User Story Dependencies

- **US1**: No code dependency on US2–US9
- **US3**: Sequential on `frontend/index.html` after T005
- **US2**: Independent of pillars; T013 Person.url assumes this path
- **US4–US6**: Copy gate T021/T027/T032
- **US7 T038**: PO drafts
- **US8**: Optional
- **US9**: Off-site

### Parallel Opportunities

- T003 + T004
- T006–T009
- T017 + T018
- T014–T016 vs T003/T004 (different files)
- T040 anytime
- Do **not** parallel T005 and T013

---

## Parallel Example: User Story 1

```text
T003 robots.txt
T004 sitemap.xml
T006–T009 document.title on four pages
```

Then T005 → T010 → T011. Then T013 on `index.html`.

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. T001–T002
2. T003–T011
3. Stop: GSC + curl robots/sitemap
4. Deploy if PO says ship

### Incremental Delivery

1. US1 crawl + OG
2. US2 entity + US3 JSON-LD (same release preferred)
3. US7 T036 author byline
4. US4–US6 when copy approved
5. US7 T038 articles, US8 llms, US9 matrix

---

## Notes

- No new npm packages
- No pillar/FAQ/flagship body copy without PO + finance-analyst
- Entity lead paragraph is pre-approved
- `sameAs`: never invent URLs
