import { magazine } from "../../content/uk";
import "./QuoteBandSection.css";

export function QuoteBandSection() {
  return (
    <section className="magazine-band magazine-band--quote" aria-label="Цитата">
      <blockquote className="magazine-quote">
        <p>{magazine.quote.text}</p>
        {magazine.quote.attribution ? (
          <cite>{magazine.quote.attribution}</cite>
        ) : null}
      </blockquote>
    </section>
  );
}
