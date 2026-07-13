export type ConsultationPayload = {
  name: string;
  phone: string;
  channel: string;
  website?: string;
  source?: string;
};

type SubmitResult =
  | { ok: true }
  | { ok: false; fallback: true; message?: string }
  | { ok: false; fallback?: false; message: string };

export async function submitConsultation(
  payload: ConsultationPayload,
): Promise<SubmitResult> {
  const apiUrl = import.meta.env.VITE_CONSULTATION_API_URL?.trim();

  if (!apiUrl) {
    return { ok: false, fallback: true };
  }

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return {
        ok: false,
        message: "Не вдалося надіслати заявку. Спробуйте ще раз або напишіть у Telegram.",
      };
    }

    return { ok: true };
  } catch {
    return {
      ok: false,
      message: "Помилка мережі. Перевірте з'єднання або напишіть у Telegram.",
    };
  }
}
