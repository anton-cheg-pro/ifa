# Feature Specification: SEO/AEO discovery & entity authority

**Feature Branch**: `002-seo-aeo-discovery`

**Created**: 2026-08-30

**Status**: Draft — clarifications resolved; ready for `/speckit-plan`

**Input**: User description: "SEO/AEO (title, description, OG, sitemap, honest claims) per Constitution Principle V. GSC indexability first. Dedicated Anton Cherepkov entity page, Schema.org Person/Organization, content cluster, FAQ, answer-first articles, external authority strategy, AI Visibility Matrix. No copy changes without PO approval."

**Constitution**: Implements **Principle V — Discoverable by search and AI**. Supersedes the crawl/share slice of `001-open-production-backlog` User Story 3 (and related technical tasks) once this spec is approved; `001` User Stories 1, 2, and 4 remain separate unless PO merges them.

## Positioning (north star)

Family Wealth and **Антон Черепков** MUST be discoverable as one coherent entity cluster:

**Незалежний фінансовий консультант для сімейного капіталу** → Family Wealth → Україна → фінансове планування, інвестиції, пенсійний капітал, пасивний дохід, фінансова незалежність, захист і передача сімейного капіталу.

The site MUST NOT compete on the generic query «фінансовий консультант» alone. It MUST compete on family-capital, long-horizon planning, and the named advisor entity.

## Clarifications

### Session 2026-09-07

- Q: Який публічний заголовок і URL-slug для статті «як обрати фінансового консультанта»? → A: Заголовок «Як вибрати фінансового консультанта»; slug `how-to-choose-financial-advisor` (option A).
- Q: Яка CTA після статей бази знань? → A: Після тіла кожної статті — кнопка запису на консультацію, що відкриває ту саму модальну форму, що на послузі «Фінансовий план» (sticky `ConsultationCta`, той самий `ConsultationModal`).
- Q: Де показувати автора на статтях? → A: У шапці (існуючий byline з посиланням на entity page) **і** в кінці статті рядок «Автор: Антон Черепков» (ім'я — посилання на entity page).
- Q: Як публікувати фінансові твердження в PO-драфті «Як вибрати фінансового консультанта» (Medallion, «кращі результати», AUM $50k)? → A: Finance-analyst review перед публікацією; пом'якшити або прибрати неперевірені claims про дохідність (option B).

Approved entity statement (first paragraph on the Anton page when implemented — **no other public copy changes without PO approval**):

> Антон Черепков — незалежний фінансовий консультант в Україні та засновник Family Wealth. Допомагає приватним клієнтам створювати, інвестувати та захищати сімейний капітал, а також планувати довгостроковий пасивний дохід і фінансову незалежність. Інвестує з 2012 року.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Homepage is indexable (Priority: P1) 🎯 MVP

A search engine can crawl, understand, and index `https://family-wealth.pro/uk` (and the root redirect target). The owner can confirm status in Google Search Console (URL Inspection): on Google, crawled, indexed, canonical agreed, with a documented reason if not indexed.

**Why this priority**: If the homepage is not indexed, all other SEO/AEO work is secondary.

**Independent Test**: GSC URL Inspection for `https://family-wealth.pro/` and `/uk` shows indexable state OR a single documented fix list; `robots.txt` and `sitemap.xml` exist and are reachable; no accidental block of major search or AI crawlers.

**Acceptance Scenarios**:

1. **Given** production, **When** the owner opens GSC URL Inspection for the homepage, **Then** they can read: URL on Google, crawled, indexed, last crawl, page indexing reason, user-declared canonical, Google-selected canonical.
2. **Given** `https://family-wealth.pro/robots.txt`, **When** fetched, **Then** public pages are allowed and `Sitemap` points to the live sitemap URL (not a 404 HTML page).
3. **Given** `https://family-wealth.pro/sitemap.xml`, **When** fetched, **Then** it lists canonical public URLs including the homepage.
4. **Given** crawler policy, **When** reviewed, **Then** GPTBot, OAI-SearchBot, ChatGPT-User, and standard search bots are not blocked unless PO explicitly decides otherwise.
5. **Given** the homepage, **When** shared or crawled, **Then** it has an honest title, meta description, H1, HTTPS, mobile-friendly layout, and Open Graph preview — without promised returns or superlative claims («найкращий в Україні»).

---

### User Story 2 - Anton Cherepkov entity page (Priority: P2)

Someone searching «хто такий Антон Черепков» or an AI assistant resolving entity collision finds a **dedicated canonical page** where the approved entity statement is the **first visible paragraph**, not buried in footer or about copy.

**Why this priority**: Name collision (many Черепкови on LinkedIn, old technical profiles) requires a clear disambiguation page linking Person → Family Wealth → financial advisor → Ukraine.

**Independent Test**: Open `/uk/anton-cherepkov-financial-advisor`; first paragraph matches the approved entity statement; page is in sitemap; internal links from home, services, and articles point here (`/uk/about` still exists separately).

**Acceptance Scenarios**:

1. **Given** the new page is live, **When** a visitor opens it, **Then** the first paragraph is exactly the approved entity statement (PO may extend later only after approval).
2. **Given** `/uk/about` remains live (PO: keep both), **When** sitemap and schema are published, **Then** Person `url` and cluster author links use `/uk/anton-cherepkov-financial-advisor` as the entity canonical; `/uk/about` stays the existing «Про мене» page with a distinct role (bio/certificates), not a duplicate of the entity statement page.
3. **Given** any pillar or article page in this feature, **When** published, **Then** it links to the Anton entity page with consistent anchor intent (author / advisor).

---

### User Story 3 - Structured data for Organization and Person (Priority: P3)

Search engines and AI systems can read machine-readable facts: Family Wealth as Organization; Антон Черепков as Person (`jobTitle`, `worksFor`, page URL, `sameAs` only for **real** profiles PO confirms).

**Why this priority**: Schema does not guarantee ranking but disambiguates entities for Google and assistants.

**Independent Test**: Rich-results / schema validator on the homepage and Anton page shows valid Organization + Person JSON-LD matching **visible** content; `sameAs` URLs resolve.

**Acceptance Scenarios**:

1. **Given** visible site content, **When** structured data is published, **Then** Organization includes name Family Wealth and site URL; Person includes name, job title, worksFor, and Anton page URL.
2. **Given** `sameAs`, **When** listed, **Then** every URL is a real profile PO supplied (LinkedIn, Facebook, Instagram, YouTube, FinMentor, other authoritative profiles) — no invented links.
3. **Given** future FAQ and articles, **When** those ship, **Then** FAQPage, Article, and BreadcrumbList may be added only where matching visible content exists.

---

### User Story 4 - Topic pillar cluster (Priority: P4)

A prospect searching «фінансовий консультант в Україні», «пенсійне планування», «пасивний дохід», etc. finds dedicated pillar pages on Family Wealth, each with clear scope, honest claims, and a link to Anton.

**Why this priority**: Builds topical authority around family capital, not generic «консультант» spam.

**Independent Test**: Each pillar URL returns 200, unique title/description, answer-first intro, link to Anton page, listed in sitemap.

**Pillar pages (content PO approves before ship)**:

| # | Topic (UA) | Purpose |
|---|------------|---------|
| 1 | Антон Черепков | Entity home (User Story 2) |
| 2 | Фінансовий консультант в Україні | Category + disambiguation |
| 3 | Фінансове планування | Core service intent |
| 4 | Пенсійне планування | Retirement capital |
| 5 | Пасивний дохід | Passive income intent |
| 6 | Інвестиційне планування | Long-horizon investing |
| 7 | Управління сімейним капіталом | Family wealth positioning |

**Acceptance Scenarios**:

1. **Given** a pillar page, **When** published, **Then** it opens with a direct answer to the page topic (not marketing fluff first).
2. **Given** the cluster, **When** mapped, **Then** home → pillars → services/articles form intentional internal links without duplicate thin pages for keyword variants.

---

### User Story 5 - FAQ for AI-friendly answers (Priority: P5)

Visitors and assistants get short, factual answers to common questions, each 50–100 words upfront, then optional deeper explanation.

**Why this priority**: Answer-first FAQ matches AEO patterns and supports «порадь фінансового консультанта в Україні»-style queries.

**Independent Test**: FAQ page (or section) lists agreed questions; each answer starts with a concise paragraph; schema FAQPage matches visible Q&A when implemented.

**Initial question set (PO approves wording before ship)**:

- Хто такий Антон Черепков?
- Що робить фінансовий консультант?
- Як знайти незалежного фінансового консультанта в Україні?
- Скільки грошей потрібно для пенсії?
- Як створити пасивний дохід?
- Куди інвестувати довгостроково?
- Чи потрібен фінансовий план сім'ї?
- Скільки потрібно інвестувати щомісяця?
- Чим фінансовий консультант відрізняється від менеджера банку?
- Чи можна створити пенсійний капітал в Україні?

**Acceptance Scenarios**:

1. **Given** an FAQ entry, **When** read, **Then** the first 50–100 words fully answer the question without requiring scroll for the core fact.
2. **Given** compliance rules, **When** FAQ mentions returns or planning, **Then** text stays educational — no guaranteed outcomes.

---

### User Story 6 - Flagship «passive income in retirement» page (Priority: P6)

A person asking «хочу пасивний дохід на пенсії, порадь фінансового консультанта в Україні» lands on a dedicated page that opens with a concrete planning answer (example structure PO approved), then introduces Anton with the entity statement pattern.

**Why this priority**: Matches real client phrasing and AI citation format.

**Independent Test**: Canonical page exists at `/uk/passive-income-retirement`; first block answers «як створити пасивний дохід на пенсії» with capital, horizon, return assumptions, risk — then advisor attribution.

**Acceptance Scenarios**:

1. **Given** the page, **When** read top to bottom, **Then** block 1 is educational planning content; block 2 attributes Антон Черепков with link to entity page.
2. **Given** the example «$2 000/month», **When** used, **Then** it is framed as illustration with assumptions, not a promise.

---

### User Story 7 - Knowledge articles with author entity (Priority: P7)

The blog/knowledge area grows with ~10–15 strong articles (not SEO spam), each attributed to Антон Черепков with link to the entity page.

**Why this priority**: Long-tail queries and AI citations need depth + consistent author entity.

**Independent Test**: Each published article shows author in header and footer (linked to entity page), consultation CTA after body (same modal as financial-plan service), and sitemap includes article URLs.

**Acceptance Scenarios**:

1. **Given** a knowledge article, **When** published, **Then** author is Антон Черепков with link to the entity page in the header byline **and** a footer line «Автор: Антон Черепков» (name linked to entity page).
2. **Given** any knowledge article, **When** the visitor finishes reading the body, **Then** a consultation CTA is visible that opens the same modal form as `/uk/services/financial-plan` (not a separate form or external URL).
3. **Given** the backlog, **When** PO delivers a draft, **Then** finance-analyst reviews before public ship and softens or removes unverified return/performance claims (e.g. hedge-fund return illustrations, «most investors do better with advisors» generalizations) while keeping educational intent.
4. **Given** PO draft for «Як вибрати фінансового консультанта», **When** approved and implemented, **Then** it is live at `/uk/knowledge/how-to-choose-financial-advisor` with slug `how-to-choose-financial-advisor`.

**PO content backlog — articles to prepare** (owner writes; site implements after approval):

| Priority | Article title (UA) | Slug (when known) |
|----------|-------------------|-------------------|
| P1 | Як вибрати фінансового консультанта | `how-to-choose-financial-advisor` *(PO draft received 2026-09-07)* |
| P1 | Скільки потрібно грошей / накопичити до пенсії? | |
| P1 | Як створити пасивний дохід? | |
| P1 | Як створити пасивний дохід $2 000 на місяць? | |
| P2 | Скільки потрібно інвестувати щомісяця? | |
| P2 | ETF для довгострокових інвестицій | |
| P2 | ETF чи нерухомість для пенсійного капіталу? | |
| P2 | Як побудувати фінансовий план сім'ї? | |
| P2 | Фінансовий план сім'ї | |
| P3 | Як захистити сімейний капітал? | |
| P3 | Що робити з $100 000 капіталу? | |
| P3 | Як інвестувати на 20 років? | |

---

### User Story 8 - Optional AI site map file (Priority: P8)

Assistants MAY use `/llms.txt` as a structured map of canonical pages and entity summary. This is optional and not a substitute for indexation, content, or external authority.

**Why this priority**: Low effort, low expectation per AEO research — last in pipeline.

**Independent Test**: If PO approves, `/llms.txt` lists canonical URLs and one-line entity description; if not approved, story is skipped with no impact on other stories.

---

### User Story 9 - External authority & AI visibility measurement (Priority: P9 — mostly off-site)

Inbound trust grows through **independent** mentions (FinMentor profile, interviews, podcasts, media, catalogs) repeating the same entity line. Progress is measured monthly with an AI Visibility Matrix, not only Google position.

**Why this priority**: Research shows brand site is a minority of AI citation sources; third-party corroboration matters.

**Independent Test**: Matrix spreadsheet updated monthly; at least one independent source (e.g. FinMentor) already uses aligned copy; owner pursues 10–20 quality mentions over 90 days (off-site work).

**Standard off-site entity line** (use consistently):

> Антон Черепков — незалежний фінансовий консультант в Україні, засновник Family Wealth. Інвестує з 2012 року.

**AI Visibility Matrix (monthly)** — example queries to test in ChatGPT, Gemini, Perplexity:

| Query | Track progression |
|-------|-------------------|
| фінансовий консультант Україна | not mentioned → mentioned → site cited → recommended |
| незалежний фінансовий консультант Україна | same |
| фінансовий радник Україна | same |
| інвестиційний консультант Україна | same |
| фінансовий консультант для сім'ї | same |
| планування пенсії Україна | same |
| пасивний дохід на пенсії | same |
| хто такий Антон Черепков | same |
| Family Wealth | same |

**Acceptance Scenarios**:

1. **Given** month N baseline, **When** matrix is re-run, **Then** PO records status per engine per query.
2. **Given** external outreach, **When** a new mention goes live, **Then** it uses the standard entity line or PO-approved variant.

---

### Edge Cases

- **SPA indexing**: Bots that do not execute JavaScript rely on `index.html` defaults and static files; unique per-route titles/descriptions must still be correct after load for users and executing bots.
- **Entity collision**: Do not claim «#1» or «найкращий»; prefer verifiable facts (independent since 2012, FinMentor listing).
- **Copy gate**: All new or changed UA copy requires PO approval before deploy; only the approved entity statement is pre-authorized for the Anton page lead.
- **Forbidden tactics (out of scope, must not implement)**: bought spam backlinks, fake reviews/ratings, duplicate keyword pages, self-authored «TOP-10 consultants» lists, fabricated `sameAs` URLs.
- **Bing Webmaster Tools**: Owner registers alongside GSC in week 1; same indexability checks apply.
- **Core Web Vitals / mobile**: Must not regress while adding pages or schema (Constitution III).
- **FinMentor**: Existing third-party profile is a positive signal; link in `sameAs` when PO confirms URL.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Production MUST expose crawlable `robots.txt` and `sitemap.xml` with all canonical public URLs, including new pages from this feature once published.
- **FR-002**: Homepage and key routes MUST have unique, honest `<title>` and meta description suitable for search and assistants; no guaranteed returns.
- **FR-003**: Homepage MUST provide Open Graph and Twitter card metadata for link previews (aligned with honest positioning).
- **FR-004**: Owner MUST complete Google Search Console URL Inspection for the homepage and document index status before treating later stories as done.
- **FR-005**: Site MUST publish a dedicated Anton Cherepkov page at `/uk/anton-cherepkov-financial-advisor` with the approved entity statement as the first paragraph.
- **FR-006**: Site MUST publish JSON-LD Organization and Person matching visible content, with `sameAs` limited to PO-confirmed real profiles.
- **FR-007**: Site MUST publish seven topic pillar pages (table in User Story 4) with answer-first intros and links to the Anton entity page.
- **FR-008**: Site MUST publish an FAQ surface covering the agreed question set with short answers first.
- **FR-009**: Site MUST publish one flagship passive-income-in-retirement page at `/uk/passive-income-retirement`.
- **FR-010**: Knowledge articles MUST attribute Антон Черепков and link to the entity page in the header byline **and** in a footer line «Автор: Антон Черепков» after the article body.
- **FR-010a**: Every knowledge article MUST show a consultation CTA after the body that opens the same modal form as the financial-plan service page (`ConsultationModal` via `ConsultationCta`).
- **FR-011**: Internal linking MUST connect home, pillars, services, FAQ, articles, and Anton page without orphan URLs.
- **FR-012**: Crawler policy MUST allow major search bots; AI bots (GPTBot, OAI-SearchBot, ChatGPT-User) MUST remain allowed unless PO explicitly opts out.
- **FR-013**: Optional `/llms.txt` MAY ship only after P1–P7 baseline; not required for MVP.
- **FR-014**: All financial-facing copy MUST pass finance-analyst review before ship.
- **FR-015**: Changes MUST stay minimal per Constitution I — no new dependencies, no unrelated redesign, no calculators or auth.
- **FR-016**: Owner MUST maintain monthly AI Visibility Matrix; external authority outreach is owner-driven but tracked in this feature.

### Key Entities

- **Organization (Family Wealth)**: Brand, public URL, logo/image optional, relationship to advisor.
- **Person (Антон Черепков)**: Canonical page URL, job title, worksFor, invest-since-2012 fact, sameAs profiles.
- **Pillar page**: Topic, answer-first intro, links to Person and relevant services.
- **FAQ item**: Question, short answer (50–100 words), optional long answer.
- **Knowledge article**: Title, slug, author attribution (header + footer), educational body, consultation CTA after body, links to Person.
- **Crawl surface**: robots.txt rules, sitemap URL list, canonical URLs.
- **Share preview**: Title, description, image for homepage (and optionally key pages later).
- **AI Visibility Matrix row**: Query, engine, month, status tier (not mentioned / mentioned / site / recommended).
- **External mention**: Third-party URL, entity line used, date — not hosted on Family Wealth.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Within 7 days of P1 deploy, GSC URL Inspection for the homepage shows «Indexed» OR a written fix list with owner-assigned actions (no more than 5 items).
- **SC-002**: `robots.txt` and `sitemap.xml` return HTTP 200 on production (not the SPA 404 page).
- **SC-003**: Within 14 days of P2 deploy, the Anton entity page is in the sitemap and reachable from at least three internal links (header, footer, or body on home + one service/article).
- **SC-004**: Schema validator reports zero errors for Organization + Person on pages where JSON-LD is shipped.
- **SC-005**: Within 90 days, all seven pillar pages and FAQ are live with PO-approved copy.
- **SC-006**: Within 90 days, at least 5 knowledge articles from the backlog are published with author attribution.
- **SC-007**: Monthly AI Visibility Matrix is filled for all nine sample queries across three engines; PO can compare month-over-month.
- **SC-008**: Zero shipped pages contain guaranteed-return language or unverified «best in Ukraine» claims.
- **SC-009**: Page weight and Core Web Vitals on homepage do not regress versus pre-feature baseline (owner spot-check or GSC CWV report).

## 90-day delivery phases (planning guide)

| Phase | When | Focus |
|-------|------|--------|
| 1 | Week 1 | Technical SEO: GSC, Bing, robots, sitemap, canonical, HTTPS, titles, descriptions, H1, OG, indexability, internal linking baseline |
| 2 | Weeks 2–3 | Entity page + 7 pillars (copy approval per page) |
| 3 | Month 2 | FAQ + flagship passive-income page + first 5–10 articles from backlog |
| 4 | Months 2–3 | Schema hardening, optional llms.txt, external authority (10–20 mentions), monthly AI matrix |

Order of operations: **indexation → content → entity → external authority → measurement → llms.txt** (not reversed).

## Assumptions

- Production origin is `https://family-wealth.pro`; Ukrainian routes stay under `/uk/` unless PO chooses root-level slugs.
- `001-open-production-backlog` technical crawl tasks (T012–T020) merge into this feature's P1 after PO approves this spec.
- **PO 2026-08-30:** Entity URL is `/uk/anton-cherepkov-financial-advisor`. `/uk/about` stays as «Про мене»; both URLs remain in sitemap with distinct roles (entity vs bio). Flagship page is `/uk/passive-income-retirement`.
- Share preview image: existing advisor portrait unless PO selects another before implement.
- External authority (interviews, podcasts, portals) is not implemented in code but is part of success measurement.
- FinMentor advisor listing counts as an existing independent entity signal.
- PO registers Bing Webmaster Tools and submits sitemap (owner UI actions).

## Out of scope

- Paid ads, link farms, fake reviews, AI-generated spam articles, English full site, calculators, client accounts, backend API.
- Changing existing page copy except new pages and PO-approved SEO/AEO additions.
- Promising ChatGPT «top 3» placement — goal is measurable improvement on the AI Visibility Matrix over months.
