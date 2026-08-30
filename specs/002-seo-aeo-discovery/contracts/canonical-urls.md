# Contract: Canonical public URLs

Origin: `https://family-wealth.pro`

## Existing (keep)

| Path | Role |
|------|------|
| `/uk` | Homepage (canonical UA home) |
| `/` | Redirect to `/uk` |
| `/uk/about` | «Про мене» bio — **not** Person canonical |
| `/uk/contact` | Contact |
| `/uk/licenses` | Licenses |
| `/uk/knowledge` | Knowledge index |
| `/uk/knowledge/:slug` | Articles |
| `/uk/how-we-work` | How we work |
| `/uk/services/financial-plan` | Financial plan |
| `/uk/services/:slug` | Other services |
| `/en` | English stub |

## New (this feature)

| Path | Role | Copy gate |
|------|------|-----------|
| `/uk/anton-cherepkov-financial-advisor` | Person canonical | Lead paragraph **already approved** |
| `/uk/financial-advisor-ukraine` | Pillar | PO + finance-analyst |
| `/uk/financial-planning` | Pillar | PO + finance-analyst |
| `/uk/pension-planning` | Pillar | PO + finance-analyst |
| `/uk/passive-income` | Pillar | PO + finance-analyst |
| `/uk/investment-planning` | Pillar | PO + finance-analyst |
| `/uk/family-capital` | Pillar | PO + finance-analyst |
| `/uk/faq` | FAQ | PO + finance-analyst |
| `/uk/passive-income-retirement` | Flagship | PO + finance-analyst |

Ship a route only when its copy is approved (entity lead excepted). Sitemap includes a URL only after it returns 200 with real content (not an empty stub).
