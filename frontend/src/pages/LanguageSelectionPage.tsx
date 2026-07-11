import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";

export function LanguageSelectionPage() {
  const navigate = useNavigate();

  return (
    <main className="lang-page">
      <section className="lang-card" aria-labelledby="language-question">
        <p className="lang-card__brand">Family Wealth</p>
        <h1 id="language-question" className="lang-card__question">
          Which language would you like to use?
        </h1>
        <div className="lang-card__actions">
          <Button variant="primary" onClick={() => navigate("/uk")}>
            Українська
          </Button>
          <Button variant="secondary" onClick={() => navigate("/en")}>
            English
          </Button>
        </div>
      </section>
    </main>
  );
}
