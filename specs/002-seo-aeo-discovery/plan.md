# Implementation Plan: SEO/AEO discovery & entity authority

**Branch**: `002-seo-aeo-discovery` | **Date**: 2026-08-30 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/002-seo-aeo-discovery/spec.md`

## Summary

Make Family Wealth crawlable and entity-clear: (1) static `robots.txt`/`sitemap.xml` that are **not** swallowed by the SPA fallback, honest title/description/OG in `index.html`, GSC homepage check; (2) canonical Person page at `/uk/anton-cherepkov-financial-advisor` with the approved lead paragraph, keeping `/uk/about`; (3) JSON-LD Organization + Person; (4–7) pillar cluster, FAQ, flagship `/uk/passive-income-retirement`, author-linked knowledge articles — **copy gated by PO**; (8–9) optional `llms.txt`, off-site authority + monthly AI matrix (owner, not code).

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

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Plan fit |
|-----------|----------|
| I. Production-minimal | New routes are **PO-approved** in spec (Q1–Q3). Reuse `PageLayout` / knowledge / about patterns. No new stack. |
| II. Convert visitors | Entity + pillars + FAQ exist to get consult-intent searchers to CTAs already on site — not decorative. |
| III. Fast by default | Static files + one JSON-LD blob; no Helmet/SSR. |
| IV. Speckit | This plan/tasks are source of truth for SEO/AEO (not growing `docs/tasks.md`). |
| V. Discoverable | Core of this feature; honest claims; AI crawlers allowed. |

**Post-design re-check**: Passed. Contracts are HTML/text/JSON-LD only. New pages justified in Complexity Tracking (Principle I vs PO-approved cluster).

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
│   └── canonical-urls.md
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
