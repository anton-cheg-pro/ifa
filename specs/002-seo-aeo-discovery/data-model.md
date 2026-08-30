# Data model: SEO/AEO discovery

Content is static. No database.

## Organization (Family Wealth)

| Field | Rule |
|-------|------|
| name | Family Wealth |
| url | `https://family-wealth.pro` |
| logo / image | Optional; existing assets only |

**Relationships**: `founder` / employee → Person.

## Person (Антон Черепков)

| Field | Rule |
|-------|------|
| name | Антон Черепков |
| jobTitle | Незалежний фінансовий консультант |
| worksFor | Family Wealth |
| url | `https://family-wealth.pro/uk/anton-cherepkov-financial-advisor` |
| sameAs | Only PO-confirmed real profile URLs |
| lead | Approved entity statement (first paragraph on entity page) |

**Relationships**: Author of knowledge articles; linked from every pillar.

## Pillar page

| Field | Rule |
|-------|------|
| path | One of the locked/proposed paths in [canonical-urls.md](./contracts/canonical-urls.md) |
| title / description | Unique, honest, no guaranteed returns |
| intro | Answer-first; PO-approved UA |
| personLink | Required → entity URL |

## FAQ item

| Field | Rule |
|-------|------|
| question | From spec set (PO wording before ship) |
| shortAnswer | 50–100 words first |
| longAnswer | Optional |
| schema | FAQPage only if visible on `/uk/faq` |

## Knowledge article

| Field | Rule |
|-------|------|
| slug | Existing `/uk/knowledge/:slug` |
| title, lead, body | Educational; finance-analyst + PO |
| author | Антон Черепков + link to Person.url |

**State**: Draft (PO) → reviewed → live.

## Crawl surface

| Field | Rule |
|-------|------|
| robots.txt | Allow public; Sitemap absolute URL; do not Disallow GPTBot / OAI-SearchBot / ChatGPT-User |
| sitemap.xml | All canonical URLs in [canonical-urls.md](./contracts/canonical-urls.md) as they go live |
| user-declared canonical | Homepage `https://family-wealth.pro/uk` (and per-page when we add `<link rel="canonical">` in `index.html` for default only this phase) |

## Share preview

Same as Organization-facing homepage card: title, description, image, `og:url` = `https://family-wealth.pro/uk`. See [share-preview.md](./contracts/share-preview.md).

## AI Visibility Matrix row

| Field | Rule |
|-------|------|
| query | Spec list |
| engine | ChatGPT / Gemini / Perplexity |
| month | YYYY-MM |
| status | not mentioned / mentioned / site cited / recommended |

Stored in `docs/seo/ai-visibility-matrix.md` (owner-filled).

## External mention

Off-site. Not stored in the app. Standard line from spec.
