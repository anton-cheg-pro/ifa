# Quickstart: Validate open production backlog

## Prerequisites

- Production: https://family-wealth.pro/uk
- Local: `cd frontend && npm ci && npm run build && npm run preview`

## Story 1 — Copy

1. Open tone checklist (`docs/content/tone-checklist.md` once added).
2. Spot-check home, financial plan, one service, one knowledge article.
3. Confirm no narrative sentence starts with “бо” except inside quotes.
4. Confirm disclaimers still present.
5. Do not treat as done until PO has approved the copy.

## Story 2 — Share preview

1. Confirm built `dist/index.html` contains `og:title`, `og:description`, `og:image` with `https://family-wealth.pro` image URL.
2. After deploy, paste `https://family-wealth.pro/uk` into Telegram (or a share debugger if Telegram cache is stale).
3. Expect title, description, and image.

## Story 3 — Discovery

1. Open `https://family-wealth.pro/robots.txt` and `https://family-wealth.pro/sitemap.xml`.
2. Confirm listed URLs return 200 (SPA may serve `index.html` for all).
3. Search the brand name + site address; confirm the live site is reachable without requiring ads.

## Story 4 — Photo

1. Skip until the owner file exists.
2. After swap: `/uk/services/second-opinion` on a wide viewport; image is the new horizontal still.

## Build gate

```bash
cd frontend
npm run build
```

Must succeed with no new packages in `package.json`.
