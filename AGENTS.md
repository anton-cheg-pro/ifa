# IFA — Independent Financial Advisor

Website for an independent financial advisor. Domain: personal finance, investment guidance, client tools.

## Team agents

| Agent | Scope |
|-------|-------|
| `backend-developer` | API, database, auth, business logic, integrations |
| `frontend-developer` | UI, pages, components, UX, client-side state |
| `finance-analyst` | Domain rules, copy, calculations, compliance framing |
| `devops-engineer` | Git, GitHub, builds, deploy, CI/CD, public hosting |
| `architect` | System overview, diagrams, structure, planning, trade-offs |

Delegate via `/backend-developer`, `/frontend-developer`, `/finance-analyst`, `/devops-engineer`, `/architect` or natural mention.

## Conventions

- Code comments and docs: English
- User-facing copy: Ukrainian unless specified otherwise
- Minimize scope; match existing patterns before adding abstractions
- Financial claims must be reviewed by `finance-analyst` before shipping
- **Ask before implementation** if anything is unclear (`.cursor/rules/ask-before-implementation.mdc`)
- **Check orthography** in user-facing text (`.cursor/rules/text-orthography.mdc`)

## Current scope (product owner)

| In scope now (Phase 1) | Out of scope / deferred |
|------------------------|-------------------------|
| Static UA landing on GitHub Pages | Calculators |
| Design system + section layout | Client logins / accounts |
| Placeholder images | PostgreSQL / backend API |
| Language gate `/`, `/uk`, `/en` stub | English full site |

Backend and database: **low priority** — not needed until product owner requests.

## Structure

```
backend/     # API, services, data layer
frontend/    # Web app (Vite + React)
docs/        # architecture.md, API contracts, specs
```

## Run frontend

```bash
cd frontend
npm install
npm run dev
```
