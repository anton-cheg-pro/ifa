import howWeWork from "../../../docs/content/pages/how-we-work.md?raw";
import secondOpinion from "../../../docs/content/pages/second-opinion.md?raw";
import educationSavings from "../../../docs/content/pages/education-savings.md?raw";
import taxConsulting from "../../../docs/content/pages/tax-consulting.md?raw";
import pensionSavings from "../../../docs/content/pages/pension-savings.md?raw";
import corporateTraining from "../../../docs/content/pages/corporate-training.md?raw";
import cashflow from "../../../docs/content/pages/cashflow.md?raw";
import publicClient from "../../../docs/content/pages/public-client.md?raw";
import licenses from "../../../docs/content/pages/licenses.md?raw";
import articleReserveFund from "../../../docs/content/pages/articles/reserve-fund.md?raw";
import articleInflationSavings from "../../../docs/content/pages/articles/inflation-savings.md?raw";

export const pageBodies = {
  "how-we-work": howWeWork,
  "second-opinion": secondOpinion,
  "education-savings": educationSavings,
  "tax-consulting": taxConsulting,
  "pension-savings": pensionSavings,
  "corporate-training": corporateTraining,
  cashflow,
  "public-client": publicClient,
  licenses,
} as const;

export type ServiceSlug = Exclude<keyof typeof pageBodies, "how-we-work" | "licenses">;

export const articleBodies = {
  "reserve-fund": articleReserveFund,
  "inflation-savings": articleInflationSavings,
} as const;

export type ArticleId = keyof typeof articleBodies;
