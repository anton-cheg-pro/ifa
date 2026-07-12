import { magazine } from "../../content/uk";

export function WelcomeIncomeBand() {
  const { welcomeIncome } = magazine;

  return (
    <section className="magazine-band magazine-band--income" aria-label="Запрошення">
      <p className="magazine-income">{welcomeIncome.headline}</p>
      <p className="magazine-income__note">{welcomeIncome.disclaimer}</p>
    </section>
  );
}
