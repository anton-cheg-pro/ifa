---
name: backend-development
description: Backend patterns for IFA project — API layout, data models, auth, financial validation. Use when implementing or reviewing backend/, server code, databases, or APIs.
---

# Backend Development (IFA)

## Stack (default until project chooses otherwise)

- Node.js + TypeScript
- Framework: Fastify or Express
- DB: PostgreSQL + Prisma (or Drizzle)
- Auth: JWT or session cookies; httpOnly for tokens

Adjust to match `package.json` if stack already chosen.

## Layout

```
backend/
  src/
    routes/       # HTTP handlers, thin
    services/     # business logic
    models/       # DB types / Prisma schema
    middleware/   # auth, validation, errors
    utils/
  prisma/         # schema, migrations
  tests/
```

## API conventions

- Prefix: `/api/v1`
- JSON request/response; ISO 8601 dates; decimal as string for money
- Errors: `{ "error": { "code", "message" } }` with proper HTTP status
- Paginate lists: `?page=&limit=` → `{ data, meta: { total, page } }`

## Financial data rules

- Store money as integer minor units (kopiyky) or `DECIMAL`; never `float`
- All rates/percentages: document basis (annual vs monthly, nominal vs real)
- Audit log for changes to client financial records
- Validate ranges server-side even if frontend validates

## Auth

- Roles: `client`, `advisor`, `admin` (extend as needed)
- Advisor sees only assigned clients unless admin
- Rate-limit auth and sensitive endpoints

## Before shipping

- [ ] Input validation on every endpoint
- [ ] No secrets in code; use env vars
- [ ] Migration tested up and down
- [ ] Finance-analyst spec implemented for money features
