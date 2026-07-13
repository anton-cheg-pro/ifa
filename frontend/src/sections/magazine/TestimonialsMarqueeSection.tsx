import { useState } from "react";
import { magazine } from "../../content/uk";
import { ImageLightbox } from "../../components/ui/ImageLightbox";
import "./TestimonialsMarqueeSection.css";

const feedbackBase = `${import.meta.env.BASE_URL}images/feedback/`;

function MarqueeImages({
  files,
  onSelect,
}: {
  files: string[];
  onSelect: (file: string) => void;
}) {
  const doubled = [...files, ...files];

  return (
    <div className="magazine-marquee__track magazine-marquee__track--testimonials">
      {doubled.map((file, index) => {
        const src = `${feedbackBase}${file}`;

        return (
          <button
            key={`${file}-${index}`}
            type="button"
            className="magazine-marquee__item magazine-marquee__item--testimonial"
            onClick={() => onSelect(file)}
            aria-label="Відкрити відгук у повному розмірі"
          >
            <img src={src} alt="" loading="lazy" decoding="async" />
          </button>
        );
      })}
    </div>
  );
}

export function TestimonialsMarqueeSection() {
  const { testimonials } = magazine;
  const [activeFile, setActiveFile] = useState<string | null>(null);

  if (!testimonials.files.length) {
    return (
      <section className="magazine-marquee magazine-marquee--testimonials" aria-label="Відгуки">
        <p className="magazine-marquee__label">Відгуки клієнтів</p>
        <p className="magazine-marquee__placeholder">{testimonials.placeholder}</p>
      </section>
    );
  }

  const activeSrc = activeFile ? `${feedbackBase}${activeFile}` : null;

  return (
    <section className="magazine-marquee magazine-marquee--testimonials" aria-label="Відгуки">
      <p className="magazine-marquee__label">Відгуки клієнтів</p>
      <p className="magazine-marquee__hint">Натисніть на відгук, щоб збільшити та прочитати</p>
      <div className="magazine-marquee__viewport">
        <MarqueeImages files={testimonials.files} onSelect={setActiveFile} />
      </div>
      {activeSrc ? (
        <ImageLightbox
          src={activeSrc}
          alt="Відгук клієнта"
          onClose={() => setActiveFile(null)}
        />
      ) : null}
    </section>
  );
}
