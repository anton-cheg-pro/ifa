# Data model: Open production backlog

Content is static. No database.

## Public page

| Field | Rule |
|-------|------|
| Path | Existing UA route only |
| Title | Unique, human; `{page} — Family Wealth` where titles already follow that pattern |
| Body | Ukrainian; tone checklist; no promised returns |
| Image | Optional; second-opinion uses owner horizontal asset when present |

**Relationships**: Many pages share one Share preview (this phase).

## Share preview

| Field | Rule |
|-------|------|
| Canonical URL | `https://family-wealth.pro/uk` (and site origin for image URLs) |
| Title | Independent financial advisor naming Family Wealth |
| Description | Short, educational, no guaranteed income |
| Image URL | Absolute HTTPS; one still (default advisor photo) |

**State**: Draft in repo → live after Pages deploy.

## Tone checklist

| Field | Rule |
|-------|------|
| Forbidden in narrative | Sentence-starting spoken “бо”; other markers listed in the checklist |
| Allowed | Same words inside quoted speech |
| Approver | Product owner before public ship |

## Owner asset

| Field | Rule |
|-------|------|
| Type | Horizontal photo for second opinion, or hosting UI click (out of site) |
| Presence | Optional; story 4 incomplete until file exists |
