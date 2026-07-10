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
