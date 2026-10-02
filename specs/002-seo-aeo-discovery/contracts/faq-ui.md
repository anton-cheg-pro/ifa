# Contract: FAQ page and article sidebar

## `/uk/faq`

- Route registered in `frontend/src/App.tsx`.
- Header link label `FAQ`, `title` / tooltip `Часті питання`, between `/uk/licenses` and `/uk/contact`.
- One column of cards. Click opens that answer and closes any other. Initial state: none open.
- Answers stay in the DOM (`hidden` or `aria-expanded`); do not unmount, so FAQPage JSON-LD can list every question and answer.
- Fee card states 250 USD and UAH at the NBU rate on the payment day.
- CTA label: «Записатися на безкоштовну вступну зустріч» → existing `ConsultationCta` / `ConsultationModal`.
- Copy: `docs/content/faq-po-draft-proposal.md` → `frontend/src/content/faqPage.ts`.
- Item `who-we-work-with` («З ким ви працюєте?»): state approximate fit ~$10,000 capital or ~$500/month savings; may start smaller to build regular investing; orientation only, not a hard minimum (FR-008a).
- JSON-LD on this route: `FAQPage` + `ProfessionalService` (FAQ-only); see [json-ld.md](./json-ld.md).
- Sitemap: `https://family-wealth.pro/uk/faq` when the page returns real content.

## Knowledge article layout

- Desktop (`min-width: 48rem`): related articles in a column to the right of the body.
- Narrower: same list below the article (after body, before or after the author footer — author footer stays with the article column).
- Each related item: linked title + `lead` preview. Exclude the current slug. Order = `pages.knowledge.articles`.
- Footer text starts with «Автор:» and includes the approved entity paragraph; the name links to `/uk/anton-cherepkov-financial-advisor`.
