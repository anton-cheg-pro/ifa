import { useNavigate } from "react-router-dom";

export function LanguageSelectionPage() {
  const navigate = useNavigate();

  return (
    <main className="page">
      <section className="card" aria-labelledby="language-question">
        <p className="subtitle">IFA — Independent Financial Advisor</p>
        <h1 id="language-question" className="question">
          Which language would you like to use?
        </h1>
        <div className="actions">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => navigate("/uk")}
          >
            Українська
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate("/en")}
          >
            English
          </button>
        </div>
      </section>
    </main>
  );
}
