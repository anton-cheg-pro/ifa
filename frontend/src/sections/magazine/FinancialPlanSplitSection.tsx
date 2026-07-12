import { magazine } from "../../content/uk";
import { SplitSection } from "./SplitSection";

const financialPlanImage = `${import.meta.env.BASE_URL}images/financial-plan.jpg`;

export function FinancialPlanSplitSection() {
  const { financialPlan } = magazine;

  return (
    <SplitSection
      photoLeft
      title={financialPlan.title}
      body={financialPlan.body}
      cta={financialPlan.cta}
      imageSrc={financialPlanImage}
      imageAlt={financialPlan.imageAlt}
      placeholder={false}
    />
  );
}
