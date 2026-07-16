import { useState } from "react";
import { contactCertificates } from "../../content/contactPage";
import { ImageLightbox } from "../ui/ImageLightbox";
import "./CertificateGallery.css";

const imagesBase = `${import.meta.env.BASE_URL}images/`;

export function CertificateGallery({ showHeader = true }: { showHeader?: boolean }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = contactCertificates.items.find((item) => item.id === activeId);

  return (
    <>
      <section
        className="certificate-gallery"
        aria-label={showHeader ? undefined : "Сертифікати"}
        aria-labelledby={showHeader ? "certificates-title" : undefined}
      >
        {showHeader ? (
          <>
            <h2 id="certificates-title" className="certificate-gallery__title">
              {contactCertificates.heading}
            </h2>
            <p className="certificate-gallery__hint">{contactCertificates.hint}</p>
          </>
        ) : null}
        <div className="certificate-gallery__grid">
          {contactCertificates.items.map((item) => (
            <button
              key={item.id}
              type="button"
              className="certificate-gallery__card"
              onClick={() => setActiveId(item.id)}
              aria-label={`${item.label}. Збільшити`}
            >
              <img
                src={`${imagesBase}${item.file}`}
                alt=""
                className="certificate-gallery__thumb"
                loading="lazy"
              />
              <span className="certificate-gallery__label">{item.label}</span>
            </button>
          ))}
        </div>
      </section>

      {active ? (
        <ImageLightbox
          src={`${imagesBase}${active.file}`}
          alt={active.alt}
          onClose={() => setActiveId(null)}
        />
      ) : null}
    </>
  );
}
