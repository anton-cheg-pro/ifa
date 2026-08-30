import { useEffect } from "react";
import { Link } from "react-router-dom";
import { site } from "../content/uk";

export function EnglishStubPage() {
  useEffect(() => {
    document.title = `English version — ${site.name}`;
    return () => {
      document.title = site.name;
    };
  }, []);

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
        <Link className="stub-card__link" to="/uk">
          ← Українська версія
        </Link>
      </section>
    </main>
  );
}
