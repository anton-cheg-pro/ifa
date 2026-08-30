# Contract: Share preview (chat crawlers)

Crawlers that fetch the document at the site origin MUST see these properties in the initial HTML (`frontend/index.html` after build). Values are Ukrainian/English as noted; no return promises.

| Property | Required | Intent |
|----------|----------|--------|
| `og:type` | yes | `website` |
| `og:site_name` | yes | Family Wealth |
| `og:title` | yes | Same idea as the default document title |
| `og:description` | yes | Short honest summary |
| `og:url` | yes | Absolute `https://family-wealth.pro/uk` |
| `og:image` | yes | Absolute HTTPS image URL |
| `og:locale` | yes | `uk_UA` |
| `twitter:card` | yes | `summary_large_image` |
| `twitter:title` / `twitter:description` / `twitter:image` | yes | Align with OG |

**Out of contract this phase**: Unique OG per inner path (SPA limitation).
