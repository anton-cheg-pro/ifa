import { useState, type FormEvent } from "react";
import { consultation, cta } from "../../content/uk";
import { submitConsultation } from "../../lib/submitConsultation";
import { Button } from "../ui/Button";
import "./ConsultationForm.css";

type ChannelId = (typeof consultation.form.channels)[number]["id"];

type FormState = {
  name: string;
  phone: string;
  channel: ChannelId | "";
  website: string;
};

const initialForm: FormState = { name: "", phone: "", channel: "", website: "" };

type ConsultationFormProps = {
  id?: string;
  source?: string;
};

export function ConsultationForm({ id = "consultation-form", source = "contact" }: ConsultationFormProps) {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [usedFallback, setUsedFallback] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Введіть ім'я";
    if (!form.phone.trim()) next.phone = "Введіть номер телефону";
    if (!form.channel) next.channel = "Оберіть спосіб зв'язку";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setSubmitError(null);

    const result = await submitConsultation({
      name: form.name.trim(),
      phone: form.phone.trim(),
      channel: form.channel,
      website: form.website,
      source,
    });

    setSubmitting(false);

    if (result.ok) {
      setSubmitted(true);
      setUsedFallback(false);
      setErrors({});
      return;
    }

    if (result.fallback) {
      setSubmitted(true);
      setUsedFallback(true);
      setErrors({});
      return;
    }

    setSubmitError(result.message ?? "Помилка надсилання.");
  };

  if (submitted) {
    return (
      <div className="consultation-form consultation-form--success" role="status">
        <h3 className="consultation-form__title">{consultation.form.successTitle}</h3>
        <p className="consultation-form__note">
          {usedFallback ? consultation.form.successFallback : consultation.form.successBody}
        </p>
        {usedFallback ? (
          <p className="consultation-form__fallback-links">
            <a href={cta.links.find((l) => l.label === "Telegram")?.href} target="_blank" rel="noopener noreferrer">
              Telegram
            </a>
          </p>
        ) : null}
        <Button
          type="button"
          variant="ghost"
          onClick={() => {
            setSubmitted(false);
            setUsedFallback(false);
            setForm(initialForm);
          }}
        >
          Надіслати ще раз
        </Button>
      </div>
    );
  }

  return (
    <form id={id} className="consultation-form" onSubmit={handleSubmit} noValidate>
      <h3 className="consultation-form__title">{consultation.form.title}</h3>

      <div className="consultation-form__honeypot" aria-hidden="true">
        <label htmlFor="consultation-website">Website</label>
        <input
          id="consultation-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(e) => setForm((f) => ({ ...f, website: e.target.value }))}
        />
      </div>

      <div className="consultation-form__field">
        <label className="consultation-form__label" htmlFor="consultation-name">
          {consultation.form.nameLabel}
        </label>
        <input
          id="consultation-name"
          className="consultation-form__input"
          type="text"
          autoComplete="name"
          placeholder={consultation.form.namePlaceholder}
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          aria-invalid={!!errors.name}
        />
        {errors.name ? <p className="consultation-form__error">{errors.name}</p> : null}
      </div>

      <div className="consultation-form__field">
        <label className="consultation-form__label" htmlFor="consultation-phone">
          {consultation.form.phoneLabel}
        </label>
        <input
          id="consultation-phone"
          className="consultation-form__input"
          type="tel"
          autoComplete="tel"
          placeholder={consultation.form.phonePlaceholder}
          value={form.phone}
          onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
          aria-invalid={!!errors.phone}
        />
        {errors.phone ? <p className="consultation-form__error">{errors.phone}</p> : null}
      </div>

      <fieldset className="consultation-form__fieldset">
        <legend className="consultation-form__label">{consultation.form.channelLabel}</legend>
        <div className="consultation-form__radios">
          {consultation.form.channels.map((ch) => (
            <label key={ch.id} className="consultation-form__radio">
              <input
                type="radio"
                name="channel"
                value={ch.id}
                checked={form.channel === ch.id}
                onChange={() => setForm((f) => ({ ...f, channel: ch.id }))}
              />
              <span>{ch.label}</span>
            </label>
          ))}
        </div>
        {errors.channel ? <p className="consultation-form__error">{errors.channel}</p> : null}
      </fieldset>

      {submitError ? (
        <p className="consultation-form__error" role="alert">
          {submitError}
        </p>
      ) : null}

      <Button type="submit" variant="primary" disabled={submitting}>
        {submitting ? "Надсилання…" : consultation.form.submit}
      </Button>

      <p className="consultation-form__direct">
        {consultation.form.directTelegramHint}{" "}
        <a
          href={consultation.form.directTelegramHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          {consultation.form.directTelegramLabel}
        </a>
      </p>
    </form>
  );
}
