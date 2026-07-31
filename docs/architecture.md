# IFA — System Architecture

Technical overview: components, connections, and technology stack. Product and domain context — [Readme.md](../Readme.md).

**Legend:** solid = current · dashed = planned

---

## Technology stack

### In use (frontend)

| Layer | Technology | Version (approx.) | Role |
|-------|------------|-------------------|------|
| Runtime | Node.js | 14+ (18+ recommended for CI) | dev & build |
| UI library | React | 18.x | components, pages |
| Language | TypeScript | 4.9.x | type safety |
| Bundler / dev server | Vite | 2.9.x | `npm run dev`, `npm run build` |
| Routing | React Router | 6.x | `/`, `/uk`, `/en` |
| Styling | CSS (custom) | — | layout, cards, buttons |

### Planned (backend)

| Layer | Technology | Role |
|-------|------------|------|
| Runtime | Node.js + TypeScript | API server |
| Framework | Fastify or Express | HTTP routes |
| Database | PostgreSQL | persistent data |
| ORM | Prisma or Drizzle | schema, migrations |
| Auth | JWT or session cookies | users (when needed) |

### Planned (operations)

| Layer | Technology | Role |
|-------|------------|------|
| Version control | Git + GitHub | source, collaboration |
| Frontend hosting | **Cloudflare Pages** | `https://family-wealth.pro` — see [cloudflare-pages-and-domain.md](./cloudflare-pages-and-domain.md) |
| Legacy hosting | GitHub Pages (retired) | `anton-cheg-pro.github.io/ifa/` — disable in repo Settings → Pages |
| Pages (Phase 1f) | `/uk/about` + `/uk/contact` split | see [tasks.md](./tasks.md) Phase 1f |
| Alt hosting | Vercel / Netlify | optional |
| CI | GitHub Actions | build on push |
| Backend hosting | Railway / Render / VPS | API (when added) |
| TLS | Let's Encrypt (via host) | HTTPS |

### Tooling (development)

| Tool | Location | Role |
|------|----------|------|
| Cursor agents | `.cursor/agents/` | specialized subagents |
| Cursor skills | `.cursor/skills/` | domain & deploy playbooks |
| Cursor rules | `.cursor/rules/` | e.g. ask before implementation |

---

## Repository structure

```mermaid
flowchart TB
  subgraph repo["ifa/"]
    RM[Readme.md]
    AG[AGENTS.md]
    subgraph docs["docs/"]
      ARCH[architecture.md]
    end
    subgraph fe["frontend/"]
      SRC[src/pages]
      DIST[dist/]
    end
    subgraph be["backend/ — planned"]
      API[src/routes]
      DB[(PostgreSQL)]
    end
    subgraph cursor[".cursor/"]
      AGENTS[agents/]
      SKILLS[skills/]
      RULES[rules/]
    end
  end
```

---

## Routes (production — Cloudflare)

| Path | Page | Notes |
|------|------|--------|
| `/` | redirect → `/uk` | language gate removed |
| `/uk` | Home (magazine sections) | primary entry |
| `/uk/about` | Про мене | bio, photo, **certificates only here** |
| `/uk/contact` | Контакти | map, hours, form — no certificates |
| `/uk/how-we-work` | Як ми працюємо | hidden from header nav; route kept |
| `/uk/services/financial-plan` | Фінансовий план | same layout as how-we-work |
| `/uk/services/*` | Service pages | magazine layout + sticky CTA |
| `/uk/knowledge` | База знань | list + article routes |
| `/uk/licenses` | Ліцензії | FinMentor + SmartAlpha links; no certificate gallery |
| `/en` | English stub | Phase 2 |

**Content model (Phase 1f):** certificates on `/uk/about` only; removed from Contact and Licenses. Consultation form posts to Cloudflare Worker (`VITE_CONSULTATION_API_URL`). SPA fallback: `frontend/public/_redirects`.

---

## Agent team & dependencies

```mermaid
flowchart LR
  PO([Product owner])

  subgraph specialists
    ARCH[architect]
    FIN[finance-analyst]
    FE[frontend-developer]
    BE[backend-developer]
    OPS[devops-engineer]
  end

  PO --> ARCH
  ARCH --> FIN
  ARCH --> FE
  ARCH --> BE
  ARCH --> OPS

  FIN -->|specs & disclaimers| BE
  FIN -->|copy & rules| FE
  BE -->|REST API| FE
  FE -->|npm run build| OPS
  BE -->|deploy| OPS
```

| Agent | Delivers to |
|-------|-------------|
| finance-analyst | backend-developer, frontend-developer |
| backend-developer | frontend-developer (API contracts) |
| frontend-developer | devops-engineer (build artifact) |
| architect | all (structure, diagrams, sequencing) |

---

## User journey (current)

```mermaid
flowchart TD
  START([User opens site])
  ROOT["/ → redirect /uk"]
  UK["/uk — Home"]
  ABOUT["/uk/about — Про мене"]
  CONTACT["/uk/contact"]
  SERVICES["/uk/services/*"]
  EN["/en — stub"]

  START --> ROOT --> UK
  UK --> ABOUT
  UK --> CONTACT
  UK --> SERVICES
  UK --> EN
```

---

## Runtime: development vs production

### Development (today)

```mermaid
flowchart LR
  DEV[Developer machine]
  VITE[Vite dev server<br/>localhost:5173]
  BR[Browser]

  DEV -->|npm run dev| VITE
  BR -->|HTTP| VITE
  VITE -->|compile on the fly| BR
```

- Server runs only while terminal is open
- Not accessible from the public internet

### Production (current)

```mermaid
flowchart LR
  USER[Internet user]
  CF[Cloudflare Pages<br/>family-wealth.pro]
  DIST[frontend/dist/]
  WORKER[Consultation Worker]

  USER -->|HTTPS| CF
  CF --> DIST
  USER -->|POST form| WORKER
```

- `npm run build` produces `dist/` (base `/`, no `GITHUB_PAGES`)
- Cloudflare Pages deploy on push to `main`
- SPA fallback: `public/_redirects` → `index.html`

---

## Target system (full product)

```mermaid
flowchart TB
  subgraph client["Client"]
    SPA[React SPA]
  end

  subgraph edge["Edge / CDN"]
    HOST[Static host + TLS]
  end

  subgraph server["Backend — planned"]
    API[REST API<br/>Node.js]
    PG[(PostgreSQL)]
  end

  subgraph external["External — optional"]
    EMAIL[Email service]
    MARKET[Market data API]
  end

  SPA -->|HTTPS static assets| HOST
  SPA -->|HTTPS /api/v1/*| API
  API --> PG
  API --> EMAIL
  API --> MARKET
```

---

## Data flow: future calculator

Financial calculations must be authoritative on the server when accuracy and audit matter.

```mermaid
sequenceDiagram
  actor U as User
  participant SPA as Frontend
  participant API as Backend
  participant DB as Database
  participant FIN as finance-analyst spec

  Note over FIN,API: Spec defined before implementation
  FIN->>API: formula, validation, disclaimer
  FIN->>SPA: UA labels, disclaimer text

  U->>SPA: submit inputs
  SPA->>API: POST /api/v1/calc
  API->>API: validate + compute
  opt analytics
    API->>DB: log anonymous usage
  end
  API-->>SPA: results
  SPA-->>U: display + disclaimer
```

---

## Component status

| Component | Technology | Status |
|-----------|------------|--------|
| Language redirect | React Router | ✅ `/` → `/uk` |
| UA home + multi-page | React | ✅ live |
| EN stub | React | ✅ live |
| Consultation API | Cloudflare Worker | ✅ live |
| Public deploy | Cloudflare Pages | ✅ family-wealth.pro |
| CI pipeline | GitHub Actions (`ci.yml`) | ✅ |
| Backend API | Node + PostgreSQL | ⏳ planned |
| Calculators | FE + BE + finance specs | ⏳ planned |

---

## Recommended build order

```mermaid
flowchart TD
  A[1. Frontend shell + routing] --> B[2. Git + deploy pipeline]
  B --> C[3. UA content structure]
  C --> D[4. First calculator spec]
  D --> E{Server logic needed?}
  E -->|yes| F[5. Backend + API]
  E -->|no| G[5. Client-only tool]
  F --> H[6. Auth if accounts needed]
  G --> I[7. English locale]
  H --> I
```

1. Frontend shell + routing — **done**
2. Git repo + deploy pipeline
3. Main UA pages structure
4. finance-analyst spec for first tool
5. Backend if server-side math or data required
6. Auth only when user accounts needed
7. English when UA is stable

---

## Open architecture decisions

| Decision | Options | Impact |
|----------|---------|--------|
| v1 calculators | static vs API | complexity, accuracy |
| Hosting | Vercel / Netlify / Cloudflare | deploy config |
| Auth | anonymous vs accounts | backend scope |
| Repo layout | monorepo vs split | CI, deploy paths |

Confirm with product owner before major changes (project rule: ask before implementation).
