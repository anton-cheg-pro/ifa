<!--
Sync Impact Report
- Version change: (none / template) → 1.0.0
- Modified principles: placeholders → I–V named below
- Added sections: Product constraints; Speckit workflow & quality gates
- Removed sections: none (template slots filled)
- Deferred TODOs: none in this file; task-list rewrite is a follow-up command (see Next Actions)
-->

# Family Wealth Constitution

## Core Principles

### I. Production-minimal change
The site is live at family-wealth.pro. Every change MUST be the smallest diff that delivers the agreed outcome. Agents MUST NOT refactor, restyle, or expand scope unless the product owner (PO) asked for it in the same request. Match existing patterns; add no new pages, routes, dependencies, or hosting paths without PO approval. If unclear, STOP and ask before writing code.

Rationale: production traffic and SEO already exist; large diffs risk regressions and slower pages.

### II. Convert visitors into clients
The site MUST look and behave as a premium advisory brand: consistent design system, clear CTAs, readable Ukrainian copy, working consultation flow. Visual polish MUST NOT come at the cost of broken navigation, forms, or accessibility. New UI MUST serve a conversion or trust job (book a consult, understand a service, contact). Decorative-only work is out of scope unless PO requests it.

Rationale: the product is a client-acquisition site, not a design playground.

### III. Fast by default
Page weight, request count, and render cost MUST stay low. Do not add heavy libraries, unoptimized images, or extra runtime for convenience. Images MUST stay compressed; CSS/JS MUST ship only what the changed surface needs. After UI work, verify the affected flow; do not ship known layout or performance regressions.

Rationale: speed is part of trust and ranking; the SPA already competes on a global CDN.

### IV. Speckit for remaining work
Open product work MUST go through Spec Kit: specify → PO review → plan → tasks → implement. Do not invent a parallel backlog of ad-hoc tickets as the source of truth for new features. Existing items in `docs/tasks.md` MUST be migrated into Spec Kit specs/plans/tasks rather than grown as a second process. Exceptions: obvious typos, one-line bugfixes, and changes the PO fully specified in the same message.

Rationale: production work needs a reviewable spec and a small, ordered task list.

### V. Discoverable by search and AI
Near-term work MUST improve how search engines and AI assistants find and correctly describe Family Wealth (accurate titles, descriptions, structured content, crawlable URLs, honest claims). Discoverability MUST NOT use keyword stuffing, fake reviews, or promised returns. SEO/AEO copy is financial-facing: `finance-analyst` review before shipping.

Rationale: inbound clients will come from Google and tools such as ChatGPT, not only from direct links.

## Product constraints

- **Stack (frozen unless PO asks):** Vite + React SPA, Cloudflare Pages, consultation Cloudflare Worker. No GitHub Pages as production. No backend/PostgreSQL/calculators/full English site until PO opens that phase.
- **Copy:** Ukrainian for visitors; English for code comments and agent docs. Financial claims MUST stay educational; no guaranteed returns. Orthography MUST be checked before ship.
- **Ask before implement:** unclear UX, copy, branding, routes, or integrations → ask; do not guess.
- **Push policy:** commit/push implementations the PO asked to ship; do not push local-only ticket edits unless the PO asks.

## Speckit workflow & quality gates

1. `/speckit-specify` — capture intent, constraints, and success criteria (including speed and conversion).
2. PO gate — approve or reject the spec before planning.
3. `/speckit-plan` — smallest design that fits production-minimal change.
4. `/speckit-tasks` — ordered, dependency-aware tasks; no duplicate living backlog in `docs/tasks.md` for the same work.
5. `/speckit-implement` — execute tasks only; no extra polish.

A change is done only if: the agreed user-visible behavior works on production after deploy; compliance copy is intact; no unexplained JS/CSS/image bloat.

## Governance

This constitution supersedes conflicting agent habits and informal task lists. Amendments require a documented change, PO approval, and a semantic version bump:

- **MAJOR** — remove or redefine a principle.
- **MINOR** — add a principle or material section.
- **PATCH** — wording, dates, clarifications.

Agents MUST check this file before specifying or implementing. Complexity MUST be justified against Principles I–III. Runtime guidance: `AGENTS.md`, `.cursor/rules/ask-before-implementation.mdc`, `.cursor/rules/text-orthography.mdc`.

**Version**: 1.0.0 | **Ratified**: 2026-08-30 | **Last Amended**: 2026-08-30
