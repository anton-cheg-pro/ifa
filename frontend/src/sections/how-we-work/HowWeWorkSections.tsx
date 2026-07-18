import { howWeWorkPage } from "../../content/howWeWorkPage";
import { ConsultationCta } from "../../components/consultation/ConsultationCta";
import "./HowWeWorkSplit.css";

const images = {
  hero: `${import.meta.env.BASE_URL}images/hero.jpg`,
  team: `${import.meta.env.BASE_URL}images/team.jpg`,
  plan: `${import.meta.env.BASE_URL}images/financial-plan.jpg`,
  specialization: `${import.meta.env.BASE_URL}images/specialization.jpg`,
} as const;

type HowWeWorkSplitProps = {
  photoRight?: boolean;
  title?: string;
  paragraphs: readonly string[];
  imageSrc: string;
  imageAlt: string;
  panelSurface?: boolean;
  showCta?: boolean;
};

export function HowWeWorkHero({ heroTitle }: { heroTitle: string }) {
  const { hero, heroCtaLabel } = howWeWorkPage;

  return (
    <section className="how-we-work-hero">
      <img src={images.hero} alt={hero.imageAlt} className="how-we-work-hero__image" />
      <div className="how-we-work-hero__overlay" aria-hidden="true" />
      <div className="how-we-work-hero__content">
        <h1 className="how-we-work-hero__title">{heroTitle}</h1>
        <p className="how-we-work-hero__subtitle">{hero.subtitle}</p>
        <ConsultationCta source="how-we-work-hero" className="how-we-work-hero__cta">
          {heroCtaLabel}
        </ConsultationCta>
      </div>
    </section>
  );
}

export function HowWeWorkStepBand({
  label,
  note,
  subtitle,
}: {
  label: string;
  note?: string;
  subtitle?: string;
}) {
  return (
    <section className="how-we-work-step" aria-label={label}>
      <div className="how-we-work-step__inner">
        <p className="how-we-work-step__label">{label}</p>
        {subtitle ? <p className="how-we-work-step__subtitle">{subtitle}</p> : null}
        {note ? <p className="how-we-work-step__note">{note}</p> : null}
      </div>
    </section>
  );
}

export function HowWeWorkSplit({
  photoRight = false,
  title,
  paragraphs,
  imageSrc,
  imageAlt,
  panelSurface = false,
  showCta = true,
}: HowWeWorkSplitProps) {
  const { ctaLabel } = howWeWorkPage;

  return (
    <section
      className={`how-we-work-split${photoRight ? " how-we-work-split--photo-right" : ""}`}
    >
      <div className="how-we-work-split__media">
        <img src={imageSrc} alt={imageAlt} className="how-we-work-split__image" loading="lazy" />
      </div>
      <div
        className={`how-we-work-split__panel${
          panelSurface ? " how-we-work-split__panel--surface" : ""
        }`}
      >
        {title ? <h2 className="how-we-work-split__title">{title}</h2> : null}
        {paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)} className="how-we-work-split__body">
            {paragraph}
          </p>
        ))}
        {showCta ? (
          <ConsultationCta source="how-we-work">{ctaLabel}</ConsultationCta>
        ) : null}
      </div>
    </section>
  );
}

export function HowWeWorkPricing({ imageSrc }: { imageSrc: string }) {
  const { pricing } = howWeWorkPage;

  return (
    <section className="how-we-work-pricing">
      <div className="how-we-work-split">
        <div className="how-we-work-split__media">
          <img
            src={imageSrc}
            alt={pricing.imageAlt}
            className="how-we-work-split__image"
            loading="lazy"
          />
        </div>
        <div className="how-we-work-split__panel how-we-work-split__panel--surface">
          {pricing.paragraphs.map((paragraph, index) => (
            <p key={paragraph.slice(0, 40)} className="how-we-work-split__body">
              {index === 0 ? (
                <>
                  {paragraph.split(pricing.highlight)[0]}
                  <strong className="how-we-work-pricing__highlight">{pricing.highlight}</strong>
                  {paragraph.split(pricing.highlight)[1] ?? ""}
                </>
              ) : (
                paragraph
              )}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowWeWorkStickyCta() {
  const { stickyCtaLabel } = howWeWorkPage;

  return (
    <div className="how-we-work-sticky-cta">
      <ConsultationCta source="how-we-work-sticky" sticky>
        {stickyCtaLabel}
      </ConsultationCta>
    </div>
  );
}
