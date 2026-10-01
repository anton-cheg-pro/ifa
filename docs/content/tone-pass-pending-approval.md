# Tone pass — pending PO approval (2026-10-01)

**Scope:** FIN-COPY-01 / FIN-COPY-02 (first batch). **Approved** 2026-10-01 (`approve all` + homepage hero).

## Changed copy (before → after)


### Step 2 band (loss / recovery math)

| Location | Before | After |
|----------|--------|-------|
| `howWeWorkPage.ts`, `how-we-work.md` | …не втратити кошти. **Бо** втративши 50%… **шалені** +100%. | …не втратити кошти. **Якщо** втратити 50%… приріст **близько +100%**. |

### Article broker-top-up-ukraine

| Location | Before | After |
|----------|--------|-------|
| `broker-top-up-ukraine.md` | …консультанта, **бо** зараз ці способи… | …консультанта**: способи поповнення постійно змінюються**, і консультант… |

## Left unchanged (OK per checklist)

- `corporate-training.md` / `servicePages.ts` — «бо» **inside** quoted employee thought.
- Homepage `uk.ts` — no hits for slang in this pass.
- `how-to-choose-financial-advisor.md` — already PO/finance-reviewed.

## Also waiting deploy (separate from tone)

- **GSC fix:** `frontend/public/_redirects` — `301` `/` → `/uk` (canonical conflict).
- **Docs:** GSC tables, pillar draft `pillars/financial-advisor-ukraine.md`, tone checklist.

## Next batch (after you approve this)

- Full pass on remaining service markdown (8 files).
- Homepage magazine blocks in `uk.ts` if you want softer tone there too.

### Homepage hero (PO 2026-10-01)

| Field | Value |
|-------|--------|
| H1 | Незалежний фінансовий консультант / для українських сімей |
| Subtitle | В Україні та за кордоном. Розпочинаємо з плану… |
| Primary CTA | «Отримати презентацію» → `ConsultationModal` (`source=hero-presentation`) |
