import { consultation } from "./uk";

export const ANTON_ENTITY_PATH = "/uk/anton-cherepkov-financial-advisor";

export const antonEntityPage = {
  title: "Антон Черепков",
  subtitle: "Незалежний фінансовий консультант",
  lead: "Антон Черепков — незалежний фінансовий консультант в Україні та засновник Family Wealth. Допомагає приватним клієнтам створювати, інвестувати та захищати сімейний капітал, а також планувати довгостроковий пасивний дохід і фінансову незалежність. Інвестує з 2012 року.",
  imageAlt: "Антон Черепков — незалежний фінансовий консультант",
  ctaLabel: consultation.freeCta,
  ctaTo: "/uk/contact#consultation-form",
  profiles: [
    { label: "Instagram", href: "https://www.instagram.com/anton_cheg/" },
    { label: "YouTube", href: "https://www.youtube.com/@anton_cheg" },
    { label: "Linktree", href: "https://linktr.ee/anton_cheg" },
  ],
  finmentorLabel: "Команда FinMentor",
} as const;
