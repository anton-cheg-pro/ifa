# Research: Open production backlog

## 1. Copy tone pass (Story 1)

- **Decision**: Edit visitor copy in `frontend/src/content/*` and matching `docs/content/pages/**`. Add `docs/content/tone-checklist.md`. Ship only after PO approve (same workflow as FIN-P1f-01).
- **Rationale**: Copy already lives in those files; a parallel CMS would violate minimal change.
- **Alternatives considered**: Site-wide string replace without review (rejected — compliance and quotes). New CMS (rejected — new product).

## 2. Chat share preview (Story 2)

- **Decision**: Static Open Graph + Twitter tags in `frontend/index.html` with absolute `https://family-wealth.pro/...` URLs. Default image: About advisor photo (`anton.jpg`) unless PO picks another still before implement. One card for all URLs this phase (SPA crawlers see `index.html`).
- **Rationale**: Chat bots do not run the SPA. `react-helmet` would add a dependency and still not help most bots. Prerender is a new pipeline.
- **Alternatives considered**: Per-route prerender (too heavy). Helmet (new dep, weak for Telegram).

## 3. Search and assistants (Story 3)

- **Decision**: Keep/extend unique `document.title` on important routes. Put a site-wide meta description in `index.html` (honest, no returns). Add `public/robots.txt` + `public/sitemap.xml` listing main UA paths. Do **not** add JSON-LD or a new legal route in this feature.
- **Rationale**: Sitemap + titles help Google and many assistants; JSON-LD is extra surface without PO request. Spec excluded dedicated legal page.
- **Alternatives considered**: SSR/prerender for unique meta per URL (rejected for this phase). Paid ads (out of spec).

## 4. Second-opinion photo (Story 4)

- **Decision**: When PO supplies a horizontal file, compress with existing `docs/scripts/compress-images.ps1`, place under `frontend/public/images/`, point `servicePages` second-opinion `image` at that file. Do not block Stories 1–3.
- **Rationale**: Already decided (FE-P1f-09); only the asset is missing.
- **Alternatives considered**: CSS crop of current vertical photo (rejected — PO wanted a horizontal original).

## 5. Backlog source of truth

- **Decision**: Implement from this spec’s later `tasks.md`. Do not append new living tickets to `docs/tasks.md` for the same stories. Do not push `docs/tasks.md` unless PO asks.
- **Rationale**: Constitution IV + PO rule on tickets vs implementations.
- **Alternatives considered**: Dual-write tickets and spec (rejected — two sources of truth).
