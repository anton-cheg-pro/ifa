// Ukrainian content — placeholders until finance-analyst delivers final copy

export const site = {
  name: "Family Wealth",
  advisorName: "Черепков Антон",
  tagline: "Family Wealth",
};

export const nav = {
  about: "Про мене",
  howWeWork: "Як ми працюємо",
  services: "Наші послуги",
  knowledge: "База знань",
  licenses: "Ліцензії",
  contact: "Контакти",
  langUk: "UA",
  langEn: "EN",
};

export const servicesNav = [
  { label: "Фінансовий план", path: "/uk/services/financial-plan" },
  { label: "Друга думка", path: "/uk/services/second-opinion" },
  { label: "Накопичення на освіту", path: "/uk/services/education-savings" },
  { label: "Податкове консультування", path: "/uk/services/tax-consulting" },
  { label: "Пенсійні накопичення", path: "/uk/services/pension-savings" },
  { label: "Корпоративне навчання", path: "/uk/services/corporate-training" },
  { label: "Проведення CashFlow", path: "/uk/services/cashflow" },
  { label: "Стань публічним клієнтом", path: "/uk/services/public-client" },
] as const;

export const consultation = {
  /** Short label — sticky bar, header, tight layouts */
  stickyCta: "Записатися",
  /** Prominent offer — hero, first touch */
  freeCta: "Отримати безкоштовну консультацію",
  /** Default booking — service pages, mid-page CTAs */
  bookCta: "Записатися на консультацію",
  form: {
    title: "Заявка на консультацію",
    nameLabel: "Ім'я",
    namePlaceholder: "Ваше ім'я",
    phoneLabel: "Номер телефону",
    phonePlaceholder: "+380…",
    channelLabel: "Яким способом найзручніше спілкуватися?",
    submit: "Надіслати заявку",
    successTitle: "Дякуємо!",
    successBody: "Заявку отримано. Зв'яжемося з вами найближчим часом.",
    successFallback:
      "Заявку збережено локально. Поки бот не підключено — напишіть напряму в Telegram.",
    channels: [
      { id: "telegram", label: "Telegram" },
      { id: "whatsapp", label: "WhatsApp" },
      { id: "signal", label: "Signal" },
      { id: "phone", label: "Телефон" },
    ] as const,
    directTelegramHint: "або напишіть мені прямо тут —",
    directTelegramLabel: "Антон",
    directTelegramHref: "https://t.me/anton_cheg",
  },
};

export const pages = {
  howWeWork: {
    title: "Як ми працюємо",
    subtitle: "Фінансовий план",
  },
  licenses: {
    title: "Ліцензії",
    finmentorUrl: "https://finmentor.pro",
  },
  contact: {
    title: "Контакти",
    body: "Зв'яжіться зі мною зручним способом або залиште заявку на безкоштовну консультацію-знайомство.",
    signature: "Черепков Антон Володимирович",
    address: {
      heading: "Наша адреса",
      lines: ["Україна, Київ,", "вул. Теремківська 4а, оф. 102-2"],
      mapsQuery: "вул. Теремківська 4а, Київ, Україна",
      mapsEmbedUrl:
        "https://maps.google.com/maps?q=%D0%B2%D1%83%D0%BB.+%D0%A2%D0%B5%D1%80%D0%B5%D0%BC%D0%BA%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+4%D0%B0,+%D0%9A%D0%B8%D1%97%D0%B2,+%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0&hl=uk&z=17&output=embed",
    },
    hours: {
      heading: "Час роботи",
      weekdays: "Пн.–Пт.: 10:00–19:00",
      weekend: "Вихідні: субота, неділя",
    },
    finmentor: {
      heading: "Наша команда",
      name: "FinMentor",
      url: "https://finmentor.pro",
      description: "Ми працюємо в складі команди FinMentor — дізнайтеся більше на сайті.",
    },
    social: [
      {
        id: "instagram",
        label: "Instagram",
        href: "https://www.instagram.com/anton_cheg/",
      },
      {
        id: "telegram",
        label: "Telegram",
        href: "https://t.me/anton_cheg",
      },
      {
        id: "whatsapp",
        label: "WhatsApp",
        href: "https://wa.me/+380506246560",
      },
    ],
  },
  knowledge: {
    title: "База знань",
    subtitle: "Короткі матеріали з особистих фінансів",
    articles: [
      {
        id: "investment-income-tax-2025",
        title: "Оподаткування інвестиційного доходу 2025",
        lead: "Дивіденди, купони та продаж цінних паперів в Україні — основні правила та типові питання.",
      },
      {
        id: "podcast-money-in-pairs",
        title: "Подкаст «Гроші в парах»",
        lead: "Розмови про гроші в стосунках: бюджет, цілі, конфлікти та спільні рішення для пар.",
      },
      {
        id: "broker-top-up-ukraine",
        title: "Поповнення брокерського рахунку з України",
        lead: "Актуальні способи поповнення брокерського рахунку з України: посередники, комісії та на що звернути увагу.",
      },
      {
        id: "path-to-financial-freedom",
        title: "Шлях до фінансової свободи",
        lead: "Чому перші $100 000 — найважчі, і як працює складний відсоток на шляху до мільйона.",
      },
      {
        id: "reserve-fund",
        title: "Фінансові рівні",
        lead: "П'ять рівнів особистих фінансів — від боргів до пасивного доходу. Чому важливо рухатися по черзі.",
      },
      {
        id: "inheritance-broker-account",
        title: "Успадкування активів на брокерському рахунку",
        lead: "Estate Tax США для нерезидентів: поріг $60 000, процедура IRS 706-NA та загальні способи зменшити ризик.",
      },
    ],
  },
  services: {
    "second-opinion": {
      title: "Друга думка",
    },
    "education-savings": {
      title: "Накопичення на освіту",
    },
    "tax-consulting": {
      title: "Податкове консультування",
    },
    "pension-savings": {
      title: "Пенсійні накопичення",
    },
    "corporate-training": {
      title: "Корпоративне навчання",
    },
    cashflow: {
      title: "Проведення CashFlow",
    },
    "public-client": {
      title: "Стань публічним клієнтом",
    },
  },
};

export const hero = {
  titleLines: ["Тримай свої фінанси", "під контролем"] as const,
  subtitle: "Earn more. Spend less. Invest the rest.",
  imageAlt: "Радник за роботою з ноутбуком",
  ctaPrimary: "Дізнатися більше",
  ctaSecondary: "Контакти",
};

export const howItWorks = {
  title: "Як ми працюємо",
  intro: [
    {
      title: "Для кого цей сайт",
      body: "Для людей, які хочуть зрозуміти свої гроші: планувати бюджет, формувати заощадження та базово орієнтуватися в інвестиціях. Тут — загальна освіта, а не персональна інвестиційна рекомендація.",
    },
    {
      title: "Знайома ситуація?",
      body: "Дохід є, але незрозуміло, чи достатньо заощаджень, як врахувати інфляцію та які кроки робити далі. Інформації багато — важко відрізнити освіту від реклами.",
    },
    {
      title: "Наш підхід",
      body: "Ми пояснюємо поняття, ризики та типові сценарії простою мовою. Мета — щоб ви могли ставити правильні питання і приймати обґрунтовані рішення самостійно або з ліцензованим радником.",
    },
  ],
  steps: [
    {
      title: "Дізнайтеся",
      description: "Ознайомтеся з темами: бюджет, резерв, інвестиції, пенсія.",
    },
    {
      title: "Зрозумійте ризики",
      description: "Кожен матеріал пояснює обмеження та припущення — без прихованих обіцянок.",
    },
    {
      title: "Вирішіть самі",
      description: "Використовуйте знання для власного плану або зверніться до фахівця.",
    },
  ],
  mission: {
    quote:
      "Family Wealth — навчальний проєкт незалежного фінансового радника. Ми фокусуємося на освіті та прозорості, а не на продажу продуктів.",
    attribution: "Місія проєкту",
  },
};

export const topics = {
  title: "Наші послуги",
  subtitle: "Основні напрямки, які ми розкриваємо поступово.",
  items: [
    {
      title: "Бюджет",
      description: "Доходи, витрати та контроль грошового потоку.",
    },
    {
      title: "Резервний фонд",
      description: "Навіщо потрібна подушка безпеки і скільки відкладати.",
    },
    {
      title: "Заощадження",
      description: "Депозити, інфляція та реальна дохідність.",
    },
    {
      title: "Інвестиції",
      description: "Диверсифікація, горизонт і толерантність до ризику.",
    },
    {
      title: "Пенсія",
      description: "Довгострокове накопичення в українському контексті.",
    },
    {
      title: "Страхування",
      description: "Загальні принципи страхування за потребою.",
    },
  ],
};

export const materials = {
  title: "База знань",
  subtitle: "Статті та гайди з'являтимуться тут. [TODO: finance-analyst]",
  items: [
    {
      title: "Резервний фонд: з чого почати",
      description: "Незабаром — короткий гайд українською.",
      badge: "Незабаром",
    },
    {
      title: "Інфляція та заощадження",
      description: "Як оцінити реальну дохідність депозиту.",
      badge: "Незабаром",
    },
    {
      title: "Бази диверсифікації",
      description: "Чому не варто тримати все в одному активі.",
      badge: "Незабаром",
    },
  ],
};

export const cta = {
  title: "Контакти",
  body: "Зв'яжіться зі мною зручним способом або залиште заявку — відповім у межах освітнього формату сайту.",
  signature: "Черепков Антон Володимирович",
  note: "Персональна консультація — за окремою домовленістю з ліцензованим радником.",
  links: [
    { label: "Linktree", href: "https://linktr.ee/anton_cheg" },
    { label: "Instagram", href: "https://www.instagram.com/anton_cheg/" },
    { label: "Telegram", href: "https://t.me/anton_cheg" },
  ],
  form: {
    title: "Написати",
    nameLabel: "Ім'я",
    namePlaceholder: "Ваше ім'я",
    phoneLabel: "Номер телефону",
    phonePlaceholder: "+380…",
    channelLabel: "Яким способом найзручніше спілкуватися?",
    submit: "Надіслати",
    successTitle: "Дякуємо!",
    successBody:
      "Заявку отримано. Поки форма не підключена до сервера — також можете написати напряму через посилання вище.",
    channels: [
      { id: "telegram", label: "Telegram" },
      { id: "whatsapp", label: "WhatsApp" },
      { id: "signal", label: "Signal" },
      { id: "phone", label: "Телефон" },
      { id: "instagram", label: "Instagram" },
    ] as const,
  },
};

export const disclaimer = {
  short:
    "Інформація на сайті має освітній характер і не є індивідуальною інвестиційною рекомендацією. Рішення про інвестування приймаєте ви.",
  full:
    "Інформація на сайті має освітній характер і не є індивідуальною інвестиційною рекомендацією. Рішення про інвестування приймаєте ви. Минула дохідність не гарантує майбутніх результатів. Зустріч-знайомство та опис послуг не є обіцянкою доходу чи гарантією результату. Будь-які цифри на сайті (статистика, приклади) мають довідковий характер, якщо не зазначено інше. Зверніться до ліцензованого радника, податкового консультанта або юриста за персональною консультацією.",
  formPrivacy:
    "Надсилаючи заявку, ви погоджуєтеся на обробку імені та телефону лише для зв'язку щодо консультації. Дані не публікуються на сайті.",
};

export const footer = {
  legal: "Правова інформація",
  copyright: "© 2026 Family Wealth",
};

// Magazine homepage — draft copy; finance-analyst polishes FIN-M01…M07
export const magazine = {
  quote: {
    text: "Якщо ви не з багатої родини — багата родина може початися з вас.",
    attribution: "Family Wealth",
  },
  team: {
    title: "Команда, яка закриває весь цикл",
    body: [
      "Ми допомагаємо з питаннями від щоденного бюджету до довгострокових інвестицій, податків і юридичних нюансів.",
      "Один контакт — зрозумілий план і супровід, без розриву між «порадою» та реалізацією.",
    ],
    cta: { label: "Дізнатися більше", href: "/uk/how-we-work" },
    imageAlt: "Команда Family Wealth",
    placeholder: false,
  },
  stats: {
    items: [
      "13 років досвіду консультування клієнтів",
      "250+ клієнтів",
      "1500+ проведених консультацій",
      "96%+ клієнтів на постійній основі",
      "65 000+ фінансових інструментів у світі, з яких ми обираємо",
    ],
    disclaimer:
      "Статистика наведена для загального ознайомлення. Актуальність і точність окремих показників уточнюйте на консультації.",
  },
  specialization: {
    line1: "Ми спеціалізуємось на викликах та цілях таких людей, як ви",
    line2: "— ми знаємо, що ви не шукаєте базових порад",
    cta: { label: "Як ми працюємо", href: "/uk/how-we-work" },
    imageAlt: "Спеціалізація Family Wealth",
    placeholder: false,
  },
  welcomeIncome: {
    headline: "Ваша родина заробляє більше 100 000 грн на місяць? Ласкаво просимо.",
    disclaimer:
      "Орієнтир для формату співпраці; не є відмовою іншим — уточнюємо на першій розмові.",
  },
  financialPlan: {
    title: "Все розпочинається з плану",
    body: [
      "Фінансовий план — це дорожня карта: куди рухаються гроші, які ризики враховані і які кроки робити далі.",
      "Без плану рішення розкидані; з планом — ви бачите пріоритети й можете діяти послідовно.",
    ],
    cta: { label: "Дізнатися більше", href: "/uk/services/financial-plan" },
    imageAlt: "Фінансове планування",
  },
  testimonials: {
    files: [
      "photo_2026-05-25_09-50-12.jpg",
      "photo_2026-05-25_09-50-34.jpg",
      "photo_2026-05-25_09-52-16.jpg",
      "photo_2026-05-25_10-45-18.jpg",
      "photo_2026-06-04_09-38-47.jpg",
      "photo_2026-06-04_09-39-51.jpg",
      "photo_2026-06-04_09-40-01.jpg",
      "photo_2026-06-04_09-40-13.jpg",
      "photo_2026-06-04_10-09-01.jpg",
      "photo_2026-06-04_20-12-17.jpg",
    ],
    placeholder: "Скріншоти відгуків з'являться тут після REP-013.",
  },
  ctaBand: {
    brand: "Family Wealth",
    text: "Це важливий крок, який варто зробити зараз — почніть з розмови.",
    cta: { label: "Написати", to: "/uk/contact" },
    disclaimer:
      "Ми надаємо консультаційні та освітні послуги з особистих фінансів; інформація на сайті не є індивідуальною інвестиційною рекомендацією. Family Wealth не приймає кошти клієнтів на власні рахунки для інвестування.",
  },
};
