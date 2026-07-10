---
name: frontend-development
description: Frontend patterns for IFA project — components, pages, forms, API client, a11y. Use when implementing or reviewing frontend/, UI, React components, or styling.
---

# Frontend Development (IFA)

## Stack (default until project chooses otherwise)

- React + TypeScript
- Vite or Next.js (App Router)
- Styling: Tailwind CSS
- Forms: React Hook Form + Zod
- Data fetching: TanStack Query

Adjust to match `package.json` if stack already chosen.

## Layout

```
frontend/
  src/
    components/   # reusable UI
    pages/        # route-level views
    hooks/
    lib/          # api client, formatters
    styles/
  public/
```

## UI principles

- Clean, trustworthy finance aesthetic — not flashy trading-app style
- Ukrainian for user-visible strings; keep keys in code English
- Show disclaimers near calculators and investment content
- Format money: `1 234,56 ₴` (Ukrainian locale)

## Components

- One component per file; props typed explicitly
- Extract hooks for data fetching and form logic
- Shared: `Button`, `Input`, `Card`, `Alert`, `Spinner`, `Disclaimer`

## API client

```typescript
// lib/api.ts — base fetch with credentials, typed errors
const api = async <T>(path: string, init?: RequestInit): Promise<T> => { ... }
```

- Never duplicate financial calculations from backend
- Optimistic UI only for non-financial actions

## Accessibility

- Form fields: `<label>`, `aria-invalid`, error text linked via `aria-describedby`
- Focus visible; keyboard navigation for modals/menus
- Color not sole indicator of gain/loss (add +/- or icons)

## Before shipping

- [ ] Mobile layout checked
- [ ] Loading, empty, error states
- [ ] Financial copy approved by finance-analyst
- [ ] No hardcoded API URLs (use env)
