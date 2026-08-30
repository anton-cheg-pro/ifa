# Feature Specification: Open production backlog

**Feature Branch**: `001-open-production-backlog`

**Created**: 2026-08-30

**Status**: Draft

**Input**: User description: "Rewrite remaining described tasks to Spec Kit. Site is live; keep changes minimal. Remaining work must stay stylish, fast, and conversion-oriented. Near-term also includes search and ChatGPT discoverability."

## User Scenarios & Testing *(mandatory)*

This spec **replaces** growing `docs/tasks.md` as the source of truth for remaining live-site work. Old IDs (FE-P1f-09, FIN-COPY-*, etc.) are labels only; new work follows this spec → plan → tasks → implement.

### User Story 1 - Sharper public copy (Priority: P1)

A visitor reads Ukrainian pages (home, financial plan, services, knowledge articles) and sees a professional tone: fewer spoken fillers, same meaning, same legal caution. The advisor is not promising returns.

**Why this priority**: Copy is already public; tone was explicitly requested and affects trust on every page.

**Independent Test**: Review the public pages against a short tone checklist; fillers at the start of sentences are gone except inside quoted speech.

**Acceptance Scenarios**:

1. **Given** a published page with a sentence that started with a casual “бо”, **When** the copy pass is live, **Then** the sentence still makes the same point without that spoken glue (unless it is inside a quote).
2. **Given** existing disclaimers and “no promised return” wording, **When** copy is edited, **Then** those meanings remain visible on the same pages.
3. **Given** proposed copy, **When** the product owner has not approved it, **Then** it is not shown to the public.

---

### User Story 2 - Share preview in chats (Priority: P2)

Someone pastes the public site URL into Telegram (or a similar chat). The chat shows a card: site name, a short honest description, and a still image.

**Why this priority**: Direct sharing is how many first contacts arrive; there is currently no preview.

**Independent Test**: Paste the homepage URL into a chat preview tool or Telegram; a title, description, and image appear.

**Acceptance Scenarios**:

1. **Given** a person shares the main public URL, **When** the chat fetches a preview, **Then** they see Family Wealth named as an independent financial advisor and a short non-promissory description.
2. **Given** the same URL, **When** the preview image loads, **Then** it is a single agreed brand photo (not a broken or empty image).

---

### User Story 3 - Search and assistant discovery (Priority: P3)

A person looking for an independent financial advisor in Ukraine (or “Family Wealth” by name) can find the live site via a search engine or an AI assistant, with a description that matches what the site actually offers.

**Why this priority**: Constitution requires discoverability next; it must stay honest and must not bloat the site.

**Independent Test**: Search the public site name and a plain-language service phrase; the official site appears and the snippet does not claim guaranteed income.

**Acceptance Scenarios**:

1. **Given** the public site, **When** a search engine or assistant reads the main pages, **Then** each important page has a clear human title and a short accurate summary.
2. **Given** those summaries, **When** they are published, **Then** they do not promise investment returns or invent credentials.

---

### User Story 4 - Second-opinion photo (Priority: P4)

On the “second opinion” service page, the photo next to the text is a horizontal image provided by the owner, not the current vertical stand-in.

**Why this priority**: Already decided; blocked only on the owner sending the file.

**Independent Test**: Open the second-opinion page on a wide screen; the photo sits in the split layout without looking cropped as a tall portrait.

**Acceptance Scenarios**:

1. **Given** the owner has supplied the horizontal photo, **When** the page is live, **Then** that photo is what visitors see in the service split.
2. **Given** the photo is not yet supplied, **When** other backlog items ship, **Then** this story stays unfinished and does not block copy or share-preview work.

---

### Edge Cases

- Quoted client or employee speech may keep colloquial words; narrative copy may not.
- Share preview is one site-wide card for this phase (not a unique card per inner page).
- If a search snippet is wrong after publish, copy is corrected; no paid ads or fake listings are in scope.
- Owner-only actions (turn off the old hosting UI, send a photo) are not “done” by the site itself.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Remaining live-site work MUST be planned and implemented from this Spec Kit feature (and later features), not by appending a parallel ticket list as the source of truth.
- **FR-002**: Public Ukrainian copy MUST complete a tone pass: reduce spoken sentence glue (especially “бо” as a sentence starter) and other agreed colloquial markers, without changing facts or compliance meaning.
- **FR-003**: A one-page tone checklist MUST exist so later edits can be judged the same way; the owner MUST approve public copy before it ships.
- **FR-004**: Sharing the main public URL MUST produce a preview with title, short description, and image.
- **FR-005**: Important public pages MUST have a unique, accurate title and a short description suitable for search and assistants.
- **FR-006**: Discoverability text MUST stay educational: no guaranteed returns, no invented social proof.
- **FR-007**: The second-opinion page MUST use the owner’s horizontal photo once it is provided; until then the current photo may remain.
- **FR-008**: Changes MUST stay the smallest that satisfy the story; no new product areas (calculators, accounts, full English site) in this feature.

### Key Entities

- **Public page**: A visitor-facing screen (home, about, contact, services, knowledge, licenses) with title, body, and optional image.
- **Share preview**: Title, short description, and image shown when the main URL is pasted in a chat.
- **Tone checklist**: Rules for what spoken glue is allowed (quotes) vs rewritten (narrative).
- **Owner asset**: A photo or hosting setting only the owner can supply or click.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: After the copy pass, a reviewer can open the main public pages and find no new spoken “бо” sentence starters in narrative text (quotes excluded).
- **SC-002**: Pasting the main public URL in Telegram shows a preview card (title + description + image) on first try after publish, without the owner writing extra text in the chat.
- **SC-003**: A person searching the brand name together with the public site address can reach the live homepage from ordinary web search without paid ads as a requirement of this feature.
- **SC-004**: No story in this feature adds a new public product (calculator, login, full English site).
- **SC-005**: Second-opinion layout uses the owner photo within one production release after the file is received.

## Assumptions

- `docs/tasks.md` remains a historical log; new remaining work is this spec (and follow-on Spec Kit features if a story is split out).
- Legacy labels map as: FIN-COPY-01…07 + REP-037 → User Story 1; share-preview discussion → User Story 2; Principle V / former “item 2” → User Story 3; FE-P1f-09 + REP-034 → User Story 4; OPS-CF-05 stays an owner hosting click, not a site story.
- Share image default: advisor portrait already used on About, unless the owner picks another still before implement.
- Magazine homepage polish (old FIN-M01…M07) is folded into User Story 1, not a separate product.
- A dedicated legal page is **out of this feature** unless the owner asks in review (footer already carries the full disclaimer).
- Owner still disables the old GitHub Pages source in repository settings; that is operational, not a visitor story.
