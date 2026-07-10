import { Link } from "react-router-dom";

export function EnglishStubPage() {
  return (
    <main className="page">
      <section className="card" aria-labelledby="en-stub-title">
        <h1 id="en-stub-title" className="title">
          English version
        </h1>
        <p className="subtitle">
          The English version of this website is still under development. Please
          check back later or switch to Ukrainian.
        </p>
        <Link className="link-back" to="/">
          ← Choose another language
        </Link>
      </section>
    </main>
  );
}
