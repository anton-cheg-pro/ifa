import { Button } from "../../components/ui/Button";
import "./SplitSection.css";

type SplitSectionProps = {
  id?: string;
  photoLeft?: boolean;
  title: string;
  body: string[];
  cta?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  imageSrc?: string;
  imageAlt: string;
  placeholder?: boolean;
  panelSurface?: boolean;
};

export function SplitSection({
  id,
  photoLeft = false,
  title,
  body,
  cta,
  ctaSecondary,
  imageSrc,
  imageAlt,
  placeholder = false,
  panelSurface = false,
}: SplitSectionProps) {
  return (
    <section
      id={id}
      className={`magazine-split${photoLeft ? " magazine-split--photo-left" : ""}`}
    >
      <div className="magazine-split__media">
        {placeholder || !imageSrc ? (
          <div className="magazine-split__placeholder" aria-hidden="true">
            [фото]
          </div>
        ) : (
          <img
            src={imageSrc}
            alt={imageAlt}
            className="magazine-split__image"
            loading="lazy"
            decoding="async"
          />
        )}
      </div>
      <div
        className={`magazine-split__panel${
          panelSurface ? " magazine-split__panel--surface" : ""
        }`}
      >
        <h2 className="magazine-split__title">{title}</h2>
        {body.map((paragraph) => (
          <p key={paragraph.slice(0, 32)} className="magazine-split__body">
            {paragraph}
          </p>
        ))}
        {cta || ctaSecondary ? (
          <div className="magazine-split__actions">
            {cta ? (
              cta.href.startsWith("/") ? (
                <Button to={cta.href} variant="primary">
                  {cta.label}
                </Button>
              ) : (
                <Button href={cta.href} variant="primary">
                  {cta.label}
                </Button>
              )
            ) : null}
            {ctaSecondary ? (
              ctaSecondary.href.startsWith("/") ? (
                <Button to={ctaSecondary.href} variant="ghost">
                  {ctaSecondary.label}
                </Button>
              ) : (
                <Button href={ctaSecondary.href} variant="ghost">
                  {ctaSecondary.label}
                </Button>
              )
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
