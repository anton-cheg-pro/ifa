# Cloudflare Pages + custom domain (IFA)

Step-by-step guide for the product owner and `devops-engineer`: buy a domain on Cloudflare, deploy the Family Wealth static site, and serve it over HTTPS on your own URL.

**Current production:** Cloudflare Pages — [https://family-wealth.pro](https://family-wealth.pro)  
**Legacy (retire):** GitHub Pages — `https://anton-cheg-pro.github.io/ifa/`

---

## What you get

| Piece | Role |
|-------|------|
| **Cloudflare Registrar** | Buy and renew the domain; DNS lives in the same account |
| **Cloudflare Pages** | Builds `frontend/` on every git push and serves `dist/` on a global CDN |
| **HTTPS** | Free certificate; Cloudflare provisions it automatically |
| **Consultation API** | Stays on Cloudflare Worker (`VITE_CONSULTATION_API_URL`) — no change required |

The site is a **static React SPA** (Vite). No server to maintain. Cloudflare only hosts files from `npm run build`.

---

## Before you start

- [ ] GitHub repo with the IFA code (`anton-cheg-pro/ifa`)
- [ ] Cloudflare account — [dash.cloudflare.com](https://dash.cloudflare.com/sign-up) (free tier is enough to start)
- [ ] Card for domain payment (registrar charges yearly; amount depends on TLD, e.g. `.com` ~$10–15/year)
- [ ] Decide the domain name (e.g. `familywealth.ua`, `finmentor-family.com` — check availability first)

**Note on `.ua` domains:** Cloudflare Registrar supports many TLDs; if `.ua` is unavailable there, you can buy at a Ukrainian registrar (e.g. ukraine.com.ua) and **transfer DNS to Cloudflare** (free) — see [Part C](#part-c-custom-domain-on-pages).

---

## Part A — Buy a domain on Cloudflare

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com).
2. Left menu → **Domain registration** → **Register domains** (or **Domains** → **Register**).
3. Search for your desired name → pick TLD → **Purchase**.
4. Complete billing and registrant contact (ICANN requires valid email; you will confirm ownership).
5. After purchase, the domain appears under **Websites** with Cloudflare as DNS provider automatically.

**Tips**

- Enable **auto-renew** so the site does not disappear after one year.
- Use an email you check regularly — expiry and transfer notices go there.
- Registrar + DNS in one account simplifies Pages setup (no CNAME copy-paste between companies).

---

## Part B — Deploy the site on Cloudflare Pages

### 1. Connect GitHub

1. Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Authorize Cloudflare to access GitHub → select repository **`ifa`**.
3. **Project name:** e.g. `family-wealth` (this becomes `family-wealth.pages.dev` until you add a custom domain).

### 2. Build settings (IFA monorepo)

| Setting | Value |
|---------|--------|
| **Production branch** | `main` |
| **Root directory** | `frontend` |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Framework preset** | None (or Vite if offered) |

### 3. Environment variables (Production)

Add in **Settings → Environment variables → Production**:

| Name | Value |
|------|--------|
| `VITE_CONSULTATION_API_URL` | `https://ifa-consultation.cherepkov0905.workers.dev` |
| `NODE_VERSION` | `20` (optional; matches GitHub Actions) |

**Important:** do **not** set `GITHUB_PAGES=true` on Cloudflare.  
That flag is only for GitHub Pages project URLs (`/ifa/` subpath). On your own domain the site must use base path **`/`** (Vite default when `GITHUB_PAGES` is unset).

### 4. SPA routing (required)

React Router routes (`/uk`, `/uk/contact`, `/uk/knowledge/...`) must return `index.html` on refresh.

**Option A — `_redirects` file (recommended)**  
Add to `frontend/public/_redirects` (then commit):

```text
/*    /index.html   200
```

Vite copies `public/` into `dist/`; Cloudflare Pages honors this file.

**Option A is in the repo** — `frontend/public/_redirects` (SPA fallback on refresh).

**Option B — Dashboard**  
Pages project → **Settings** → **Functions** / **Redirects** (wording varies): enable **Single Page Application** behavior if the UI offers it.

Without SPA fallback, direct links like `https://yourdomain.com/uk/contact` return **404** after deploy.

### 5. First deploy

1. Save settings → **Deploy**.
2. Wait for build log (install → `tsc && vite build` → upload).
3. Open the `*.pages.dev` URL → test:
   - `/` or `/uk` (language redirect)
   - `/uk/how-we-work`
   - `/uk/knowledge`
   - `/uk/contact` — submit test form (Worker must allow your new origin if CORS is restricted)

### 6. Build locally (sanity check)

```bash
cd frontend
npm ci
npm run build
npm run preview
```

Do **not** set `GITHUB_PAGES=true`. Open preview URL and click through main routes.

---

## Part C — Custom domain on Pages

### Domain bought on Cloudflare (same account)

1. Pages project → **Custom domains** → **Set up a custom domain**.
2. Enter e.g. `familywealth.com` and optionally `www.familywealth.com`.
3. Cloudflare creates DNS records automatically (usually CNAME to Pages).
4. Wait for **Active** status and SSL (**Full** or **Full (strict)** is fine for static sites).
5. Optional: **Redirect rules** — `www` → apex or apex → `www` (pick one canonical URL).

### Domain at another registrar

1. Add the site to Cloudflare: **Add a site** → enter domain → choose **Free** plan.
2. Cloudflare shows **nameservers** — set them at your registrar (replaces old NS).
3. After DNS propagates (minutes to 48h), attach domain in Pages as above.
4. Or manually: CNAME `@` or `www` to `<project>.pages.dev` per Cloudflare docs.

---

## Part D — IFA-specific checklist

| Step | Why |
|------|-----|
| No `GITHUB_PAGES` on Cloudflare build | Avoid `/ifa/` prefix on custom domain |
| `VITE_CONSULTATION_API_URL` in Pages env | Contact modal/form still posts to Worker |
| `_redirects` or SPA mode | Deep links work on refresh |
| Test consultation form on production URL | Worker CORS may need `https://yourdomain.com` added |
| Update social / Linktree links | Point to new domain |
| Optional: redirect old GitHub Pages URL | Cloudflare **Redirect rules** or keep both during transition |

### GitHub Pages vs Cloudflare

You can run **both** for a while:

- GitHub Pages: `https://anton-cheg-pro.github.io/ifa/` (unchanged workflow)
- Cloudflare Pages: `https://yourdomain.com`

When the custom domain is stable, disable GitHub Pages in repo **Settings → Pages** (Source: None). Workflow `deploy-pages.yml` removed Jul 2026.

### Future code change (only if you fully move off GitHub Pages)

- Production builds on Cloudflare use `base: '/'` already (default in `frontend/vite.config.js`).
- GitHub Actions workflow can stay for backup deploys or be replaced by Pages-only CI.

---

## Part E — Costs (rough)

| Item | Typical cost |
|------|----------------|
| Cloudflare Pages (static) | Free tier: generous bandwidth/build minutes |
| Cloudflare DNS | Free on Free plan |
| Domain `.com` | ~$10–15 / year via Cloudflare Registrar |
| Domain `.ua` | Varies; may require local registrar |
| Worker (consultation API) | Free tier usually sufficient at low volume |

---

## Troubleshooting

| Problem | Likely cause | Fix |
|---------|----------------|-----|
| Site loads but CSS/JS 404 | Wrong `base` (`/ifa/` on custom domain) | Remove `GITHUB_PAGES=true` from Cloudflare build env |
| `/uk/contact` 404 on refresh | No SPA fallback | Add `public/_redirects` |
| Form fails in browser | CORS on Worker | Allow new origin in Worker script |
| Old content after deploy | CDN cache | Purge cache in Cloudflare **Caching** (usually not needed for HTML on Pages) |
| Build fails on Pages | Node version | Set `NODE_VERSION=20` |

---

## Suggested order (for PO)

1. Create Cloudflare account.
2. Register domain (or connect existing DNS to Cloudflare).
3. Connect `ifa` repo to Pages with settings above.
4. Ask `devops-engineer` to add `_redirects` + verify Worker CORS.
5. Deploy → test `*.pages.dev`.
6. Attach custom domain → test HTTPS and main routes.
7. Update bookmarks and marketing links; optionally retire GitHub Pages URL.

---

## Related docs

- [architecture.md](./architecture.md) — stack and hosting overview  
- `frontend/public/_redirects` — SPA fallback on Cloudflare Pages  
- [deployment skill](../.cursor/skills/deployment/SKILL.md) — build and deploy conventions  
