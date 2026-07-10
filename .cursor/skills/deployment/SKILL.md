---
name: deployment
description: Deploy IFA to the internet — git, GitHub, production build, static hosting, CI/CD, domains. Use when committing, pushing, creating PRs, deploying frontend, or explaining how the site goes live.
---

# Deployment (IFA)

## Dev vs production

| | Development | Production |
|---|-------------|------------|
| Command | `cd frontend && npm run dev` | `npm run build` → host `dist/` |
| Who runs | Developer laptop | Hosting provider 24/7 |
| URL | `localhost:5173` | Public domain or `*.vercel.app` etc. |

`npm run dev` is **not** for public users. Production serves static files from `frontend/dist/`.

## Git & GitHub

```bash
git status
git diff
git add <files>
git commit -m "message"
git push -u origin <branch>
```

- Use `gh` for PRs, issues, checks: `gh pr create`, `gh pr view`
- Commit only when user explicitly requests
- Meaningful messages: what/why, not file lists

## Build

```bash
cd frontend
npm install
npm run build    # output: frontend/dist/
npm run preview  # optional local check of production build
```

Build must pass before deploy. Node 18+ recommended for CI; local may use older Node with Vite 2.

## Static hosting (frontend only)

Recommended starters: **Vercel**, **Netlify**, **Cloudflare Pages**.

Typical setup:
1. Push repo to GitHub
2. Connect repo on host
3. Settings:
   - **Root directory:** `frontend`
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Deploy on every push to `main`

### SPA routing (required)

React Router paths `/`, `/uk`, `/en` need all routes → `index.html`:

| Host | Config |
|------|--------|
| Netlify | `frontend/public/_redirects` → `/* /index.html 200` |
| Vercel | `frontend/vercel.json` rewrites |
| Cloudflare Pages | `_redirects` or dashboard SPA setting |

Without this, direct links to `/uk` return 404 on production.

## Custom domain

1. Buy domain at registrar (e.g. ukraine.com.ua, Cloudflare)
2. In host dashboard: add custom domain
3. DNS: CNAME to host (or A records per host docs)
4. HTTPS: usually automatic (Let's Encrypt)

## CI example (GitHub Actions)

Path: `.github/workflows/frontend.yml` — trigger on push/PR, `npm ci`, `npm run build`, optional deploy job.

## When backend appears

Split deployment:
- **Frontend:** static host (CDN)
- **Backend:** Railway, Render, Fly.io, or VPS + Docker
- **DB:** managed Postgres on same provider

Set `VITE_API_URL` (or similar) in host env for frontend build.

## Pre-deploy checklist

- [ ] `npm run build` succeeds
- [ ] SPA fallback configured
- [ ] No secrets in git
- [ ] Financial copy reviewed (`finance-analyst`) if user-facing changes
- [ ] Production URL tested: `/`, `/uk`, `/en`

## Explain to user (plain language)

1. Code on GitHub
2. Host pulls code → runs build → serves `dist/`
3. Host keeps site online; developer does not run `npm run dev` in production
