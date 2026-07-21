---
name: finance-domain
description: Financial domain knowledge for IFA — personal finance, investments, risk, Ukrainian context, disclaimers. Use when defining calculators, advice copy, business rules, or reviewing financial accuracy.
---

# Finance Domain (IFA)

## Product positioning

Independent financial advisor site: **education + tools**, not guaranteed outcomes. User makes own decisions; advisor content is general guidance unless explicit paid advisory relationship is modeled.

## Core topics

| Area | Examples |
|------|----------|
| Budgeting | Income/expense tracking, emergency fund (3–6 months expenses) |
| Savings | Deposits, inflation impact, real return |
| Investments | Stocks, bonds, ETFs, diversification, horizon, risk tolerance |
| Retirement | Pension pillars (UA), long-term accumulation |
| Insurance | Life, health — needs-based framing |
| Tax | High-level only; refer to tax professional for filing |

## Risk & compliance framing

- No promises of returns; use "historical", "illustrative", "estimate"
- Past performance ≠ future results — state explicitly on charts
- Risk profile: conservative / moderate / aggressive — define asset mix ranges, not single products
- Conflicts of interest: disclose if site promotes specific providers

## Standard disclaimer (UA template)

> Інформація на сайті має освітній характер і не є індивідуальною інвестиційною рекомендацією. Рішення про інвестування приймаєте ви. Минула дохідність не гарантує майбутніх результатів. Зверніться до ліцензованого радника або юриста за персональною консультацією.

Adapt per feature; keep visible near actionable financial content.

## Calculator spec checklist

- [ ] Inputs defined with min/max and units
- [ ] Formula written in plain math + edge cases (zero, negative, overflow)
- [ ] Output labels and rounding rules
- [ ] Assumptions listed (inflation %, tax, fees)
- [ ] Disclaimer attached

## Ukrainian context notes

- Currency: UAH primary; USD/EUR for FX education if needed
- Inflation and deposit rates: use configurable defaults, cite "станом на [дата]"
- Pension system changes frequently — avoid hardcoded rules without version date

## Review questions (use on every financial feature)

1. Could a user mistake this for personalized advice?
2. Are risks and limitations visible without scrolling past the fold?
3. Is the math conservative and auditable?
4. Is sensitive data minimized?
