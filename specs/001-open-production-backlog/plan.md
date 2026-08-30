# Implementation Plan: Open production backlog

**Branch**: `001-open-production-backlog` | **Date**: 2026-08-30 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/001-open-production-backlog/spec.md`

## Summary

Finish remaining live-site work as four slices: (1) Ukrainian tone pass with PO approve, (2) one site-wide chat share card, (3) crawl-friendly titles/summaries plus sitemap, (4) second-opinion photo when the owner file arrives. Approach: smallest edits in existing content and `index.html` / `public/`; no new framework, no prerender, no extra product surfaces.

## Technical Context

**Language/Version**: TypeScript 4.9, React 18, Node 20 (frontend build)

**Primary Dependencies**: Vite 2.9, React Router 6 (existing only)

**Storage**: Static files in git (`frontend/src/content/`, `docs/content/`, `frontend/public/`)

**Testing**: Manual production checks (see [quickstart.md](./quickstart.md)); `npm run build` in `frontend/`

**Target Platform**: Public HTTPS site family-wealth.pro (Cloudflare Pages SPA)

**Project Type**: Static SPA marketing site

**Performance Goals**: No new JS libraries; share image already compressed or compressed with existing script; no extra layout runtime

**Constraints**: Constitution v1.0.0 — production-minimal diffs; PO approve before public copy; no calculators/accounts/full English; no GitHub Pages as production

**Scale/Scope**: Existing UA routes only (~home, about, contact, licenses, knowledge, 8 services, how-we-work)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Plan fit |
|-----------|----------|
| I. Production-minimal | Copy, meta, sitemap, one image swap. No refactors or new routes. |
| II. Convert visitors | Tone + share card + honest discovery support consult CTAs already on site. |
| III. Fast by default | No new deps; static meta; compressed image for story 4. |
| IV. Speckit | This plan/tasks replace growing `docs/tasks.md` for this work. |
| V. Discoverable | Titles, description, sitemap, robots; no promised returns. |

**Post-design re-check**: Passed. Contracts are HTML/text files only. No complexity tracking table (no violations).

## Project Structure

### Documentation (this feature)

```text
specs/001-open-production-backlog/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   ├── share-preview.md
│   └── crawl-surface.md
└── tasks.md             # /speckit-tasks — not this command
```

### Source Code (repository root)

```text
frontend/
├── index.html                 # default title, share + search meta
├── public/
│   ├── robots.txt             # allow crawl, point to sitemap
│   ├── sitemap.xml            # important UA URLs
│   ├── favicon.svg
│   └── images/                # share image; second-opinion photo
└── src/
    ├── content/               # uk.ts, howWeWorkPage.ts, servicePages.ts, …
    └── pages/                 # existing document.title per route
docs/
├── content/                   # page markdown + tone-checklist.md
└── legal/                     # unchanged (legal page out of spec)
```

**Structure Decision**: Existing Vite frontend only. No backend changes. Worker untouched.

## Complexity Tracking

> None — no constitution violations.
