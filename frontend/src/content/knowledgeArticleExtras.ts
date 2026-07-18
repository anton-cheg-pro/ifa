export type BrokerTopUpMethod = {
  id: string;
  name: string;
  fee: string;
  comment: string;
};

export const brokerTopUpMethods: readonly BrokerTopUpMethod[] = [
  {
    id: "genome",
    name: "Genome",
    fee: "1% + 0–20 €/міс. за обслуговування + 1 € за переказ",
    comment:
      "Підходить тим, хто вже давно зареєстрований або планує перераховувати великі суми. У Genome є віртуальна картка, на яку можна перераховувати кошти з української картки.",
  },
  {
    id: "transfergo",
    name: "TransferGo",
    fee: "0–3%",
    comment:
      "При першій реєстрації — 2 перекази без комісії. Якщо є Google Pay / Apple Pay, при переказі з Литви до Німеччини комісія до 1%. При реєстрації потрібно вказати країну Європи (деталі в інструкції); перераховувати краще невеликими сумами. У TransferGo немає внутрішньої картки, але можна одразу відправляти на брокерський рахунок.",
  },
  {
    id: "wise",
    name: "Wise",
    fee: "1%",
    comment:
      "Якщо ви зареєструвалися давно і маєте картку Wise, можна перераховувати валюту з українського банку на Wise, далі — на брокерський рахунок.",
  },
  {
    id: "revolut",
    name: "Revolut",
    fee: "1%",
    comment:
      "Якщо ви проживаєте в Європі або в країні, яку обслуговує Revolut, можна відкрити картку і перераховувати кошти з картки українського банку.",
  },
  {
    id: "bilderlings",
    name: "Bilderlings",
    fee: "1% + 0 € віртуальна (15 € фізична + 70 € доставка)",
    comment:
      "Віртуальна картка обмежена 200 € на день; для розширення ліміту потрібна фізична картка (15 + 70 €).",
  },
  {
    id: "crypto",
    name: "Криптовалюта",
    fee: "2–5%",
    comment:
      "Поповнення доступне не у всіх брокерів. Якщо у клієнта багато криптовалюти, варто підібрати брокера з найвигіднішим способом поповнення.",
  },
] as const;

export const articleYoutubeIds: Record<string, string> = {
  "investment-income-tax-2025": "vw7huvBoZ8o",
  "podcast-money-in-pairs": "gWlfqEksNPM",
};

export const articleBannerImages: Record<string, { file: string; alt: string }> = {
  "reserve-fund": {
    file: "levels.png",
    alt: "Схема п'яти фінансових рівнів: від боргів до пасивного доходу",
  },
  levels: {
    file: "levels.png",
    alt: "Схема п'яти фінансових рівнів: від боргів до пасивного доходу",
  },
  "financial-freedom": {
    file: "financial-freedom.jpg",
    alt: "Ілюстрація до статті про шлях до фінансової свободи",
  },
};

const BROKER_TABLE_MARKER = "<!-- broker-methods-table -->";
const ARTICLE_BANNER_PREFIX = "<!-- article-banner:";

export function splitArticleBody(source: string): {
  before: string;
  bannerId?: string;
  after: string;
} {
  const bannerMatch = source.match(/<!-- article-banner:([\w-]+) -->/);
  if (!bannerMatch) {
    return { before: source, after: "" };
  }

  const marker = bannerMatch[0];
  const [before, after = ""] = source.split(marker);
  return { before, bannerId: bannerMatch[1], after };
}

export { BROKER_TABLE_MARKER, ARTICLE_BANNER_PREFIX };
