# Contract: Share preview (chat crawlers)

Crawlers that fetch the document at the site origin MUST see these properties in the initial HTML (`frontend/index.html` after build). No return promises.

| Property | Required | Intent |
|----------|----------|--------|
| `og:type` | yes | `website` |
| `og:site_name` | yes | Family Wealth |
| `og:title` | yes | Same idea as the default document title |
| `og:description` | yes | Short honest summary (advisor + family capital, Ukraine) |
| `og:url` | yes | Absolute `https://family-wealth.pro/uk` |
| `og:image` | yes | Absolute HTTPS image URL (default `/images/anton.jpg` unless PO picks another) |
| `og:locale` | yes | `uk_UA` |
| `twitter:card` | yes | `summary_large_image` |
| `twitter:title` / `twitter:description` / `twitter:image` | yes | Align with OG |

**Out of contract this phase**: Unique OG per inner path (SPA limitation).
