import howWeWork from "../../../docs/content/pages/how-we-work.md?raw";
import secondOpinion from "../../../docs/content/pages/second-opinion.md?raw";
import educationSavings from "../../../docs/content/pages/education-savings.md?raw";
import taxConsulting from "../../../docs/content/pages/tax-consulting.md?raw";
import pensionSavings from "../../../docs/content/pages/pension-savings.md?raw";
import corporateTraining from "../../../docs/content/pages/corporate-training.md?raw";
import cashflow from "../../../docs/content/pages/cashflow.md?raw";
import publicClient from "../../../docs/content/pages/public-client.md?raw";
import licenses from "../../../docs/content/pages/licenses.md?raw";
import articleInvestmentIncomeTax2025 from "../../../docs/content/pages/articles/investment-income-tax-2025.md?raw";
import articlePodcastMoneyInPairs from "../../../docs/content/pages/articles/podcast-money-in-pairs.md?raw";
import articleBrokerTopUpUkraine from "../../../docs/content/pages/articles/broker-top-up-ukraine.md?raw";
import articlePathToFinancialFreedom from "../../../docs/content/pages/articles/path-to-financial-freedom.md?raw";
import articleInheritanceBrokerAccount from "../../../docs/content/pages/articles/inheritance-broker-account.md?raw";
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
  "investment-income-tax-2025": articleInvestmentIncomeTax2025,
  "podcast-money-in-pairs": articlePodcastMoneyInPairs,
  "broker-top-up-ukraine": articleBrokerTopUpUkraine,
  "path-to-financial-freedom": articlePathToFinancialFreedom,
  "inheritance-broker-account": articleInheritanceBrokerAccount,
  "reserve-fund": articleReserveFund,
  "inflation-savings": articleInflationSavings,
} as const;

export type ArticleId = keyof typeof articleBodies;
