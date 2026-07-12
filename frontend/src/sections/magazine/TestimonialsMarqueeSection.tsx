import { magazine } from "../../content/uk";
import "./TestimonialsMarqueeSection.css";

const feedbackBase = `${import.meta.env.BASE_URL}images/feedback/`;

function MarqueeImages({ files }: { files: string[] }) {
  const doubled = [...files, ...files];

  return (
    <div className="magazine-marquee__track">
      {doubled.map((file, index) => (
        <figure
          key={`${file}-${index}`}
          className="magazine-marquee__item magazine-marquee__item--image"
        >
          <img
            src={`${feedbackBase}${file}`}
            alt=""
            loading="lazy"
            decoding="async"
          />
        </figure>
      ))}
    </div>
  );
}

export function TestimonialsMarqueeSection() {
  const { testimonials } = magazine;

  if (!testimonials.files.length) {
    return (
      <section className="magazine-marquee" aria-label="Відгуки">
        <p className="magazine-marquee__label">Відгуки клієнтів</p>
        <p className="magazine-marquee__placeholder">{testimonials.placeholder}</p>
      </section>
    );
  }

  return (
    <section className="magazine-marquee" aria-label="Відгуки">
      <p className="magazine-marquee__label">Відгуки клієнтів</p>
      <div className="magazine-marquee__viewport">
        <MarqueeImages files={testimonials.files} />
      </div>
    </section>
  );
}
