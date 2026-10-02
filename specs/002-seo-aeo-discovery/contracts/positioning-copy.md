# Contract: Account management & educational disclaimers (FR-017)

Public copy uses **two layers**. Both may appear on the same page (e.g. footer + body).

## Layer 1 — Educational (site-wide default)

- Site content is **not** an individual investment recommendation.
- **The client makes the investment decision** («рішення про інвестування приймає клієнт» / «приймаєте ви» — keep this; do not replace with “we decide for you”).
- **Family Wealth professionally selects where to invest** (add adjacent to or after the decision line where space allows: footer long disclaimer, FAQ, how-we-work, contact, entity-adjacent blocks).

## Layer 2 — Service model (conversion / AEO)

After a financial plan, the client may:

1. Invest **independently**, or
2. Officially connect a **licensed partner** (Approved Investment Manager, BVI FSC) to the **client’s own brokerage account**.

**Must state clearly:**

- Family Wealth does **not** accept client funds onto its own accounts.
- Family Wealth is **not** the discretionary manager or custodian.
- Account management via the licensed partner **is available** — copy must not imply “advice only, never managed.”

## Audit surfaces (implement slice)

| Surface | File / location | Action |
|---------|-----------------|--------|
| Short footer disclaimer | `frontend/src/content/uk.ts` → `footer.disclaimerShort` | Keep client decision; add professional instrument selection in same or long disclaimer |
| Long footer disclaimer | `uk.ts` → `footer.disclaimerLong` | Layer 1 + optional one line on partner path (if not redundant with long text) |
| Legal accordion / about | `uk.ts` → `legal` blocks | Align “не приймає кошти” with partner management sentence |
| Second opinion service | `servicePages.ts` | Keep “рішення … приймаєте ви”; add that recommendations are professional, not DIY-only framing |
| FAQ guarantees | `faqPage.ts` `guarantees` | After “кошти на вашому рахунку”, mention optional licensed partner management (consistent with fee/differentiation items) |
| FAQ who we work with | `faqPage.ts` `who-we-work-with` | FR-008a threshold + smaller amounts habit (see [faq-ui.md](./faq-ui.md)) |
| Contact intro | `contactPage.ts` | Already mentions licensed portfolio team — ensure no contradiction with footer |
| Static legal mirror | `docs/legal/disclaimers-ua.md` | Match shipped footer after PO/finance-analyst |
| `llms.txt` | `frontend/public/llms.txt` | One line on plan → self or licensed partner; no $ figures unless also on FAQ |

## Forbidden

- Claim Family Wealth is the BVI-licensed discretionary manager (partner is).
- `aggregateRating` or star reviews in copy or schema.
- Removing “client decides” to sound more “full service.”

## Review gate

All changed UA strings in this contract → **finance-analyst** before ship (FR-014).
