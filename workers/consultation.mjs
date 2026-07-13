/**
 * Cloudflare Worker: forwards consultation form to Telegram.
 * Secrets: TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID
 * Deploy: see workers/README.md
 */

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

const CHANNEL_LABELS = {
  telegram: "Telegram",
  whatsapp: "WhatsApp",
  signal: "Signal",
  phone: "Телефон",
  instagram: "Instagram",
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", ...CORS_HEADERS },
  });
}

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: CORS_HEADERS });
    }

    if (request.method !== "POST") {
      return json({ ok: false, error: "Method not allowed" }, 405);
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return json({ ok: false, error: "Invalid JSON" }, 400);
    }

    if (body.website) {
      return json({ ok: true });
    }

    const name = String(body.name || "").trim();
    const phone = String(body.phone || "").trim();
    const channel = String(body.channel || "").trim();
    const source = String(body.source || "website").trim();

    if (!name || !phone || !channel) {
      return json({ ok: false, error: "Missing fields" }, 400);
    }

    const token = env.TELEGRAM_BOT_TOKEN;
    const chatId = env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return json({ ok: false, error: "Server not configured" }, 503);
    }

    const channelLabel = CHANNEL_LABELS[channel] || channel;
    const text = [
      "🆕 Заявка на безкоштовну консультацію",
      "",
      `Ім'я: ${name}`,
      `Телефон: ${phone}`,
      `Канал: ${channelLabel}`,
      `Джерело: ${source}`,
    ].join("\n");

    const tgResponse = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text }),
      },
    );

    if (!tgResponse.ok) {
      return json({ ok: false, error: "Telegram error" }, 502);
    }

    return json({ ok: true });
  },
};
