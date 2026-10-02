# Contract: JSON-LD (Organization + Person)

Insert in `index.html` as `<script type="application/ld+json">` (visible to non-JS crawlers). Values MUST match visible site facts.

## Organization

| Property | Value |
|----------|--------|
| `@type` | `Organization` |
| `name` | Family Wealth |
| `url` | `https://family-wealth.pro` |

## Person

| Property | Value |
|----------|--------|
| `@type` | `Person` |
| `name` | Антон Черепков |
| `jobTitle` | Незалежний фінансовий консультант |
| `worksFor` | Organization Family Wealth (node or `@id`) |
| `url` | `https://family-wealth.pro/uk/anton-cherepkov-financial-advisor` |
| `sameAs` | Array of **real** profile URLs only |

**sameAs allow-list (confirm at implement; omit if not real):**

- Instagram: `https://www.instagram.com/anton_cheg/`
- YouTube: `https://www.youtube.com/@anton_cheg`
- Linktree: `https://linktr.ee/anton_cheg`
- FinMentor team: `https://finmentor.pro/about/#team` (no UTM in `sameAs`)
- Telegram: `https://t.me/anton_cheg`

Do not add invented or search-result URLs.

## FAQ page (`/uk/faq` only)

Inject via existing `FaqPage` `useEffect` pattern (same as `FAQPage` today). **Do not** add `ProfessionalService` to `index.html`.

### FAQPage

- One `FAQPage` with all visible Q&A (answers remain in DOM when collapsed).

### ProfessionalService (FR-018)

| Property | Rule |
|----------|------|
| `@type` | `ProfessionalService` |
| `name` | Family Wealth |
| `url` | `https://family-wealth.pro/uk/faq` |
| `areaServed` | `UA` (only if visible on page; otherwise omit) |
| `description` | Paraphrase **only** facts visible in FAQ text: financial plan, client decision + professional instrument selection, optional licensed partner on client brokerage account, no custody on Family Wealth accounts, approximate fit $10,000 / $500 with smaller amounts OK — **exact wording must match** the shipped `who-we-work-with` and differentiation answers |
| `knowsAbout` | Topics explicitly named in visible FAQ (e.g. фінансове планування, пасивний дохід) — no invented list |
| `founder` | `@type` `Person`, `name` Антон Черепков, `jobTitle` **Незалежний фінансовий консультант** (not «Фінансовий планувальник»), `url` entity page, `sameAs` = same allow-list as homepage Person |

**Homepage `index.html` graph:** Organization + Person only. **No** $10,000 / $500 in homepage JSON-LD.

**Forbidden on all JSON-LD:** `aggregateRating`, awards, licenses not visible on that URL.

## Other types

- `Article` on knowledge articles when author byline is visible
- `BreadcrumbList` only if breadcrumbs are visible in the UI

Validate with Google Rich Results Test / schema.org validator: zero errors on shipped types.
