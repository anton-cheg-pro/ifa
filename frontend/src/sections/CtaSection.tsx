import { useState, type FormEvent } from "react";
import { cta } from "../content/uk";
import { Container } from "../components/layout/Container";
import { Section } from "../components/layout/Section";
import { Button } from "../components/ui/Button";
import "./CtaSection.css";

type ChannelId = (typeof cta.form.channels)[number]["id"];

type FormState = {
  name: string;
  phone: string;
  channel: ChannelId | "";
};

const initialForm: FormState = { name: "", phone: "", channel: "" };

export function CtaSection() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Введіть ім'я";
    if (!form.phone.trim()) next.phone = "Введіть номер телефону";
    if (!form.channel) next.channel = "Оберіть спосіб зв'язку";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setErrors({});
  };

  return (
    <Section id="contact" alt>
      <Container narrow>
        <div className="contact">
          <h2 className="contact__title">{cta.title}</h2>
          <p className="contact__body">{cta.body}</p>
          <p className="contact__signature">{cta.signature}</p>

          <ul className="contact__links">
            {cta.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="contact__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {submitted ? (
            <div className="contact__success" role="status">
              <h3 className="contact__form-title">{cta.form.successTitle}</h3>
              <p className="contact__note">{cta.form.successBody}</p>
              <Button
                type="button"
                variant="ghost"
                onClick={() => {
                  setSubmitted(false);
                  setForm(initialForm);
                }}
              >
                Надіслати ще раз
              </Button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <h3 className="contact__form-title">{cta.form.title}</h3>

              <div className="contact__field">
                <label className="contact__label" htmlFor="contact-name">
                  {cta.form.nameLabel}
                </label>
                <input
                  id="contact-name"
                  className="contact__input"
                  type="text"
                  autoComplete="name"
                  placeholder={cta.form.namePlaceholder}
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                />
                {errors.name && (
                  <p id="contact-name-error" className="contact__error" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="contact__field">
                <label className="contact__label" htmlFor="contact-phone">
                  {cta.form.phoneLabel}
                </label>
                <input
                  id="contact-phone"
                  className="contact__input"
                  type="tel"
                  autoComplete="tel"
                  placeholder={cta.form.phonePlaceholder}
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                />
                {errors.phone && (
                  <p id="contact-phone-error" className="contact__error" role="alert">
                    {errors.phone}
                  </p>
                )}
              </div>

              <fieldset className="contact__fieldset">
                <legend className="contact__label">{cta.form.channelLabel}</legend>
                <div className="contact__radios">
                  {cta.form.channels.map((ch) => (
                    <label key={ch.id} className="contact__radio">
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
                {errors.channel && (
                  <p className="contact__error" role="alert">
                    {errors.channel}
                  </p>
                )}
              </fieldset>

              <Button type="submit" variant="primary">
                {cta.form.submit}
              </Button>
            </form>
          )}

          <p className="contact__note">{cta.note}</p>
        </div>
      </Container>
    </Section>
  );
}
