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
| id | Stable string for accordion state |
| question | PO wording in `docs/content/faq-po-draft-proposal.md` |
| answer | Professional edit of PO text; educational; no guaranteed returns |
| cta | Optional; fee item only — opens consultation modal |
| ui | One column; at most one `id` open |
| schema | FAQPage JSON-LD for all items on `/uk/faq` |

### FAQ `who-we-work-with` (FR-008a)

| Field | Rule |
|-------|------|
| capitalOrientation | Approximate fit: capital from about **$10,000** |
| savingsOrientation | Or ability to set aside about **$500** per month |
| smallerAmounts | May start with smaller sums to build a habit of investing regularly |
| minimum | Orientation only — not a hard minimum; no return promises |

## ProfessionalService (FAQ page only, FR-018)

| Field | Rule |
|-------|------|
| page | `/uk/faq` only |
| name | Family Wealth |
| description | Subset of visible FAQ facts (plan, client decision, professional selection, partner path, no custody, fit threshold if present in FAQ) |
| founder | Person → Антон Черепков, jobTitle «Незалежний фінансовий консультант», entity `url`, `sameAs` allow-list |
| forbidden | aggregateRating; $10k/$500 on homepage JSON-LD; licenses not shown on FAQ |

## Knowledge article

| Field | Rule |
|-------|------|
| slug | Existing `/uk/knowledge/:slug` |
| title, lead, body | Educational; finance-analyst + PO |
| authorHeader | Name linked to Person.url |
| authorFooter | «Автор:» + name link + approved entity paragraph |
| related | All other articles, knowledge-index order, title + lead |

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
