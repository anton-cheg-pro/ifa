import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <main className="page">
      <section className="card card--wide" aria-labelledby="home-title">
        <h1 id="home-title" className="title">
          Незалежний фінансовий радник
        </h1>
        <p className="subtitle">
          Освітні матеріали та інструменти для планування особистих фінансів і
          інвестицій. Сайт у розробці — незабаром з&apos;являться калькулятори
          та корисні поради.
        </p>
        <Link className="link-back" to="/">
          ← Змінити мову
        </Link>
        <p className="disclaimer">
          Інформація на сайті має освітній характер і не є індивідуальною
          інвестиційною рекомендацією.
        </p>
      </section>
    </main>
  );
}
