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

## Later types (same contract, later stories)

- `FAQPage` on `/uk/faq` when Q&A is visible
- `Article` on knowledge articles when author byline is visible
- `BreadcrumbList` only if breadcrumbs are visible in the UI

Validate with Google Rich Results Test / schema.org validator: zero errors on shipped types.
