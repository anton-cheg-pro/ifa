# Consultation → Telegram (Cloudflare Worker)

Forwards form submissions to your Telegram chat. **Bot token never goes in the frontend repo.**

## Setup (~15 min)

### 1. Telegram bot

1. [@BotFather](https://t.me/BotFather) → `/newbot`
   - **Display name:** `Family Wealth Заявки`
   - **Username:** e.g. `@familywealth_requests_bot`
2. Copy **bot token** — only in Cloudflare Secrets (never commit).
3. Message your bot once, then open in the browser (replace `<TOKEN>` locally):

   `https://api.telegram.org/bot<TOKEN>/getUpdates`

   Copy **chat id** from `message.chat.id`.

### 2. Deploy Worker

Cloudflare shows *"use wrangler deploy"* when you **upload files**. Use one of these instead:

#### Option A — Dashboard editor (no CLI)

1. [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create**
2. Choose **Create Worker** → **Deploy** (default Hello World is fine)
3. **Edit code** (or **Quick edit**) — **delete all** default code
4. Copy-paste the full contents of `consultation.mjs` from this repo
5. **Save and deploy**
6. **Settings** → **Variables and Secrets** → **Add**:
   - `TELEGRAM_BOT_TOKEN` (Secret)
   - `TELEGRAM_CHAT_ID` (Secret)
7. Copy Worker URL, e.g. `https://ifa-consultation.<your-subdomain>.workers.dev`

Do **not** use "Upload" / drag-and-drop of `.mjs` files — that triggers the build error.

#### Option B — Wrangler CLI (recommended)

From project root:

```powershell
cd workers
npm install -g wrangler
wrangler login
wrangler secret put TELEGRAM_BOT_TOKEN
wrangler secret put TELEGRAM_CHAT_ID
wrangler deploy
```

Wrangler prints the Worker URL after deploy.

### 3. Connect frontend

`frontend/.env.local` (not committed):

```env
VITE_CONSULTATION_API_URL=https://ifa-consultation.<your-subdomain>.workers.dev
```

Rebuild frontend. For GitHub Pages, add `VITE_CONSULTATION_API_URL` as a repo **Variable** in GitHub Actions.

## Test

**PowerShell** (`curl` is an alias — use `Invoke-RestMethod` or `curl.exe`):

```powershell
$body = @{
  name    = "Test"
  phone   = "+380501234567"
  channel = "telegram"
} | ConvertTo-Json

Invoke-RestMethod `
  -Uri "https://ifa-consultation.YOUR-SUBDOMAIN.workers.dev" `
  -Method Post `
  -ContentType "application/json" `
  -Body $body
```

Expected: `ok : True` and a message in Telegram.

**Git Bash / curl.exe** (real curl, not PowerShell alias):

```powershell
curl.exe -X POST "https://ifa-consultation.YOUR-SUBDOMAIN.workers.dev" `
  -H "Content-Type: application/json" `
  -d "{\"name\":\"Test\",\"phone\":\"+380501234567\",\"channel\":\"telegram\"}"
```

## Alternatives

- **Formspree** — email instead of Telegram, no Worker.
- **No API URL** — form shows fallback + link to Telegram.
