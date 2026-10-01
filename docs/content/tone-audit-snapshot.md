# Tone audit snapshot (2026-10-01)

Quick scan for FIN-COPY-01 / FIN-COPY-02. **Not a full pass** — use before editorial sprint.

## « бо » in narrative (review each in context)

| File | Note |
|------|------|
| `docs/content/pages/articles/broker-top-up-ukraine.md` | Mid-sentence «…консультанта, бо зараз…» — OK (not sentence-start) |
| `docs/content/pages/corporate-training.md` | Inside quoted thought «…іншу компанію, бо там платять…» — OK (quote) |

No sentence-initial «Бо » hits in `docs/content/pages/` at scan time.

## Next manual passes (FIN-COPY-03…06)

1. Homepage magazine blocks — `frontend/src/content/uk.ts`
2. How we work — `howWeWorkPage.ts` + `how-we-work.md`
3. All service markdown under `docs/content/pages/`
4. All articles under `docs/content/pages/articles/` (including `how-to-choose-financial-advisor.md`)

## Suggested order for PO

1. Finish GSC (see `docs/seo/gsc-owner-walkthrough-uk.md`)
2. Approve pillar draft `docs/content/pages/pillars/financial-advisor-ukraine.md`
3. Run FIN-COPY on services + homepage, then deploy tone fixes in one PR
