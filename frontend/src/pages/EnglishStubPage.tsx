import { Link } from "react-router-dom";

export function EnglishStubPage() {
  return (
    <main className="stub-page">
      <section className="stub-card" aria-labelledby="en-stub-title">
        <h1 id="en-stub-title" className="stub-card__title">
          English version
        </h1>
        <p className="stub-card__text">
          The English version of this website is still under development. Please
          check back later or switch to Ukrainian.
        </p>
        <Link className="stub-card__link" to="/">
          ← Choose another language
        </Link>
      </section>
    </main>
  );
}
