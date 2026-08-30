# Tasks: Open production backlog

**Input**: Design documents from `/specs/001-open-production-backlog/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/

**Tests**: Not requested — no automated test tasks.

**Organization**: By user story (US1–US4). Do not append the same work to `docs/tasks.md`.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Parallel (different files, no wait on incomplete sibling)
- **[Story]**: US1–US4 for story phases only

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Confirm frozen stack; no new project.

- [ ] T001 Confirm no new packages in `frontend/package.json` (Vite/React SPA stays as-is)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Shared public URL list for crawl + share contracts.

- [ ] T002 List canonical public paths (home, about, contact, licenses, knowledge, how-we-work, financial-plan, all service slugs) in `specs/001-open-production-backlog/contracts/crawl-surface.md` if any URL is missing from the contract

**Checkpoint**: Stories may start. US2 and US3 both touch `frontend/index.html` — do **not** edit that file in parallel.

---

## Phase 3: User Story 1 - Sharper public copy (Priority: P1) 🎯 MVP

**Goal**: Professional UA tone; same meaning and disclaimers; PO approve before public ship.

**Independent Test**: Tone checklist + spot-check home, financial plan, one service, one article; no narrative sentence-starting «бо» except in quotes.

### Implementation for User Story 1

- [ ] T003 [US1] Write tone rules in `docs/content/tone-checklist.md` (narrative vs quotes; «бо», «тобто», «шалені», «проапгрейдити»)
- [ ] T004 [P] [US1] Tone pass `frontend/src/content/howWeWorkPage.ts`
- [ ] T005 [P] [US1] Tone pass `docs/content/pages/how-we-work.md`
- [ ] T006 [P] [US1] Tone pass magazine strings in `frontend/src/content/uk.ts`
- [ ] T007 [P] [US1] Tone pass `frontend/src/content/servicePages.ts`
- [ ] T008 [P] [US1] Tone pass service markdown in `docs/content/pages/` (`second-opinion.md`, `education-savings.md`, `tax-consulting.md`, `pension-savings.md`, `cashflow.md`, `public-client.md`, `corporate-training.md`)
- [ ] T009 [P] [US1] Tone pass articles in `docs/content/pages/articles/`
- [ ] T010 [US1] Stop for PO approve of copy (do not deploy Story 1 until approved)
- [ ] T011 [US1] After approve, fix any PO notes in the same content files as T004–T009

**Checkpoint**: Copy is PO-approved and ready to ship independently of share/SEO/photo.

---

## Phase 4: User Story 2 - Share preview in chats (Priority: P2)

**Goal**: One site-wide preview card (title, description, image) for `https://family-wealth.pro/uk`.

**Independent Test**: Built `frontend/dist/index.html` has OG/Twitter tags; after deploy, Telegram shows a card.

### Implementation for User Story 2

- [ ] T012 [US2] Add Open Graph + Twitter meta (absolute `https://family-wealth.pro` URLs; default image `/images/anton.jpg`) in `frontend/index.html` per `specs/001-open-production-backlog/contracts/share-preview.md`
- [ ] T013 [US2] Verify `og:image` URL after `npm run build` in `frontend/dist/index.html`

**Checkpoint**: Share card works even if Stories 1, 3, 4 are unfinished.

---

## Phase 5: User Story 3 - Search and assistant discovery (Priority: P3)

**Goal**: Honest default description, robots, sitemap, unique titles on remaining pages.

**Independent Test**: `/robots.txt` and `/sitemap.xml` on production; listed URLs return 200; titles unique after JS.

### Implementation for User Story 3

- [ ] T014 [US3] Add `<meta name="description">` (no promised returns) in `frontend/index.html` (after T012; same file)
- [ ] T015 [P] [US3] Add `frontend/public/robots.txt` per `specs/001-open-production-backlog/contracts/crawl-surface.md`
- [ ] T016 [P] [US3] Add `frontend/public/sitemap.xml` with the URL list from T002
- [ ] T017 [P] [US3] Set `document.title` in `frontend/src/pages/HomePage.tsx`
- [ ] T018 [P] [US3] Set `document.title` in `frontend/src/pages/LicensesPage.tsx`
- [ ] T019 [P] [US3] Set `document.title` in `frontend/src/pages/KnowledgePage.tsx`
- [ ] T020 [P] [US3] Set `document.title` in `frontend/src/pages/EnglishStubPage.tsx`

**Checkpoint**: Crawl surface live; no new routes.

---

## Phase 6: User Story 4 - Second-opinion photo (Priority: P4)

**Goal**: Horizontal owner photo on second-opinion split. Skip until file exists.

**Independent Test**: `/uk/services/second-opinion` on a wide viewport shows the new still.

### Implementation for User Story 4

- [ ] T021 [US4] Receive owner horizontal photo (blocked; do not invent a file)
- [ ] T022 [US4] Compress with `docs/scripts/compress-images.ps1` into `frontend/public/images/`
- [ ] T023 [US4] Point `image` for second-opinion in `frontend/src/content/servicePages.ts` at the new filename

**Checkpoint**: Other stories already shippable without T021–T023.

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Build and validate; no extra refactor.

- [ ] T024 Run `npm run build` in `frontend/` (must stay green; `package.json` unchanged)
- [ ] T025 Walk `specs/001-open-production-backlog/quickstart.md` on production after deploy
- [ ] T026 Do not add duplicate living tickets to `docs/tasks.md` for US1–US4

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: Immediate
- **Foundational (Phase 2)**: After T001
- **US1 (Phase 3)**: After T002; MVP
- **US2 (Phase 4)**: Independent of US1; can start after T002
- **US3 (Phase 5)**: After T012 (`index.html`); T015/T016/T017–T020 can parallel after T014 starts
- **US4 (Phase 6)**: Independent; blocked only on owner file
- **Polish (Phase 7)**: After the stories you intend to ship

### User Story Dependencies

- **US1**: No code dependency on US2–US4; **PO gate T010** before deploy
- **US2**: No dependency on US1
- **US3**: Sequential on `frontend/index.html` after US2
- **US4**: No dependency on US1–US3

### Parallel Opportunities

- T004–T009 in parallel (different files)
- T015–T016 and T017–T020 in parallel (different files)
- US1 copy and US2 meta can proceed in parallel (different files)
- US4 whenever the photo arrives

---

## Parallel Example: User Story 1

```text
T004 howWeWorkPage.ts
T005 how-we-work.md
T006 uk.ts
T007 servicePages.ts
T008 docs/content/pages/*.md (services)
T009 docs/content/pages/articles/*
```

Wait for T010 PO approve before shipping.

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. T001–T002
2. T003–T009 → T010 PO approve → T011
3. Stop, validate tone, deploy if PO says ship

### Incremental Delivery

1. US1 copy (after approve)
2. US2 share card
3. US3 robots/sitemap/titles
4. US4 photo when file exists
5. T024–T025

---

## Notes

- No new npm packages
- US2/US3 share `frontend/index.html` — one editor at a time
- Commit implementations the PO asked to ship; do not push local-only ticket dumps
