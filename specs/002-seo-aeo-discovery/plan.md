# Implementation Plan: SEO/AEO discovery & entity authority

**Branch**: `002-seo-aeo-discovery` | **Date**: 2026-10-02 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/002-seo-aeo-discovery/spec.md`

## Summary

Make Family Wealth crawlable and entity-clear: (1) static crawl surface + honest meta; (2) Anton entity page; (3) JSON-LD Organization + Person on homepage, FAQPage + ProfessionalService on `/uk/faq` only; (4–7) pillars, FAQ, flagship, knowledge — PO-gated; (8–9) optional `llms.txt`, off-site matrix. **2026-10-02 slice:** align public copy so AI/search do not read “client-only DIY” — two-layer disclaimers + partner management path ([positioning-copy.md](./contracts/positioning-copy.md)).

**001 overlap**: This feature **owns** crawl, share meta, robots, sitemap, titles (former `001` US2/US3 / T012–T020). Leave `001` US1 (tone) and US4 (photo) in `001`.

## Technical Context

**Language/Version**: TypeScript 4.9, React 18, Node 20 (frontend build)

**Primary Dependencies**: Vite 2.9, React Router 6 (existing only). No new npm packages.

**Storage**: Git static files (`frontend/src/content/`, `frontend/public/`, `docs/content/`)

**Testing**: Manual GSC + production curl of robots/sitemap; `npm run build`; schema validator; [quickstart.md](./quickstart.md)

**Target Platform**: Cloudflare Pages SPA, `https://family-wealth.pro`

**Project Type**: Static SPA marketing site

**Performance Goals**: No extra JS libraries; JSON-LD is a small inline `<script type="application/ld+json">`; images already compressed; no prerender pipeline

**Constraints**: Constitution v1.0.0 — smallest diffs; PO approve all new UA copy except the already-approved entity lead; no promised returns; `sameAs` only real URLs; finance-analyst on financial claims

**Scale/Scope**: Existing UA routes **plus** PO-approved new paths (entity, ~6 pillars besides entity, FAQ, flagship). Knowledge articles added only after PO drafts.

**2026-10-01 increment:** knowledge article sidebar; footer author bio; `/uk/faq` accordion; nav FAQ; fee **250 USD**. Largely shipped.

**2026-10-02 increment (next implement slice):** Fix AEO misread “advice only / no account management” per FR-017: keep «рішення приймає клієнт», add professional instrument selection + licensed partner (BVI FSC) on client brokerage accounts; audit surfaces in [positioning-copy.md](./contracts/positioning-copy.md). FAQ `who-we-work-with`: ~$10k / ~$500 orientation + smaller amounts (FR-008a). `ProfessionalService` JSON-LD on `/uk/faq` only (FR-018), [json-ld.md](./contracts/json-ld.md). Finance-analyst on all changed UA. No new routes or npm packages.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Plan fit |
|-----------|----------|
| I. Production-minimal | New routes are **PO-approved** in spec (Q1–Q3). Reuse `PageLayout` / knowledge / about patterns. No new stack. |
| II. Convert visitors | Entity + pillars + FAQ exist to get consult-intent searchers to CTAs already on site — not decorative. |
| III. Fast by default | Static files + one JSON-LD blob; no Helmet/SSR. |
| IV. Speckit | This plan/tasks are source of truth for SEO/AEO (not growing `docs/tasks.md`). |
| V. Discoverable | Core of this feature; honest claims; AI crawlers allowed. |

**Post-design re-check (2026-10-01)**: Passed. FAQ accordion and article sidebar reuse existing layout and `ConsultationCta`. No new dependencies. FAQ nav appears only with a live page (Principle I). Financial ranges stay illustrative (Principle V).

**Post-design re-check (2026-10-02)**: Passed. Positioning copy is content-only + one extra JSON-LD script on `FaqPage`. Schema dollar figures only where FAQ text shows them (Principle V). Partner vs Family Wealth roles explicit (compliance).

## Project Structure

### Documentation (this feature)

```text
specs/002-seo-aeo-discovery/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   ├── crawl-surface.md
│   ├── share-preview.md
│   ├── json-ld.md
│   ├── canonical-urls.md
│   ├── faq-ui.md              # accordion + article sidebar (2026-10-01)
│   └── positioning-copy.md    # FR-017 disclaimer + service model audit (2026-10-02)
└── tasks.md             # /speckit-tasks — not this command
```

### Source Code (repository root)

```text
frontend/
├── index.html                 # title, description, OG/Twitter, JSON-LD (non-JS bots)
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── llms.txt               # P8 only, after P1–P7
│   ├── _redirects             # SPA fallback; do not steal static SEO files
│   ├── _routes.json           # Cloudflare: exclude robots/sitemap/llms from Functions/SPA
│   └── images/
└── src/
    ├── App.tsx                # new Route entries
    ├── content/               # entity, pillars, faq, flagship (PO-approved copy)
    └── pages/                 # reuse layout; entity/pillar/faq pages
docs/
├── content/                   # markdown mirrors for PO review
└── seo/
    └── ai-visibility-matrix.md  # template; PO fills monthly
```

**Structure Decision**: Vite frontend only. Consultation Worker unchanged. No backend.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| New public routes (entity, pillars, FAQ, flagship) | Spec P2–P6; PO chose slugs 2026-08-30 | Stuffing entity + cluster into `/uk/about` fails entity collision and answer-first AEO |
