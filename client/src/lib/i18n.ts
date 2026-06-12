export type Lang = "ru" | "en" | "kz";

export const translations = {
  ru: {
    nav: {
      catalog: "Каталог",
      about: "О нас",
      contact: "Контакт",
    },
    hero: {
      headline: "UGS LAB — каталог исследовательских пептидов. Прямой доступ к производственной базе Китая.",
      searchPlaceholder: "Поиск по каталогу...",
      browseCatalog: "Смотреть весь каталог",
    },
    catalog: {
      title: "Каталог продукции",
      allProducts: "Все продукты",
      requestPrice: "Запросить прайс и наличие",
      researchOnly: "Research Use Only",
      researchAreas: "Область исследований",
      storage: "Хранение",
      form: "Форма",
      backToCatalog: "← Назад к категориям",
      molecules: "молекул",
      noResults: "Ничего не найдено. Попробуйте другой запрос.",
    },
    about: {
      title: "О компании",
      text: "UGS LAB — прямой каталог исследовательских пептидов из производственной базы Китая. Контроль качества. Наличие. Доставка.",
    },
    production: {
      title: "Производство",
      text: "Регулярно посещаем производства и выставки.",
      placeholder: "Фото и видео с производств появятся здесь после ближайшей поездки.",
    },
    contacts: {
      title: "Контакт",
      text: "Свяжитесь с нами в Telegram для запроса прайса, наличия или документации.",
      button: "Написать в Telegram",
    },
    footer: {
      disclaimer: "Продукция предназначена исключительно для исследовательских целей и не является лекарственным средством.",
    },
  },
  en: {
    nav: {
      catalog: "Catalog",
      about: "About",
      contact: "Contact",
    },
    hero: {
      headline: "UGS LAB — research peptide catalog. Direct access to China's manufacturing base.",
      searchPlaceholder: "Search catalog...",
      browseCatalog: "Browse full catalog",
    },
    catalog: {
      title: "Product Catalog",
      allProducts: "All Products",
      requestPrice: "Request price & availability",
      researchOnly: "Research Use Only",
      researchAreas: "Research Areas",
      storage: "Storage",
      form: "Form",
      backToCatalog: "← Back to categories",
      molecules: "molecules",
      noResults: "Nothing found. Try a different query.",
    },
    about: {
      title: "About",
      text: "UGS LAB — direct research peptide catalog from China's manufacturing base. Quality control. Availability. Delivery.",
    },
    production: {
      title: "Manufacturing",
      text: "We regularly visit manufacturing facilities and exhibitions.",
      placeholder: "Photos and videos from manufacturing visits will appear here after our next trip.",
    },
    contacts: {
      title: "Contact",
      text: "Reach out via Telegram to request pricing, availability, or documentation.",
      button: "Message on Telegram",
    },
    footer: {
      disclaimer: "Products are intended exclusively for research purposes and are not medicinal products.",
    },
  },
  kz: {
    nav: {
      catalog: "Каталог",
      about: "Біз туралы",
      contact: "Байланыс",
    },
    hero: {
      headline: "UGS LAB — зерттеу пептидтерінің каталогы.",
      searchPlaceholder: "Каталогтан іздеу...",
      browseCatalog: "Толық каталогты қарау",
    },
    catalog: {
      title: "Өнім каталогы",
      allProducts: "Барлық өнімдер",
      requestPrice: "Бағаны сұрау",
      researchOnly: "Research Use Only",
      researchAreas: "Зерттеу бағыттары",
      storage: "Сақтау",
      form: "Форма",
      backToCatalog: "← Категорияларға оралу",
      molecules: "молекулалар",
      noResults: "Ештеңе табылмады.",
    },
    about: {
      title: "Біз туралы",
      text: "UGS LAB — Қытайдың өндірістік базасынан зерттеу пептидтерінің тікелей каталогы.",
    },
    production: {
      title: "Өндіріс",
      text: "Біз өндірістерге және көрмелерге тұрақты түрде барамыз.",
      placeholder: "Өндірістен фото және видео жақында пайда болады.",
    },
    contacts: {
      title: "Байланыс",
      text: "Баға, қолжетімділік немесе құжаттама сұрау үшін Telegram арқылы хабарласыңыз.",
      button: "Telegram-ға жазу",
    },
    footer: {
      disclaimer: "Өнімдер тек зерттеу мақсатында арналған және дәрілік зат болып табылмайды.",
    },
  },
};

export function t(lang: Lang, path: string): string {
  const keys = path.split(".");
  let result: any = translations[lang];
  for (const key of keys) {
    result = result?.[key];
  }
  if (typeof result === "string") return result;
  // fallback to Russian
  let fallback: any = translations.ru;
  for (const key of keys) {
    fallback = fallback?.[key];
  }
  return typeof fallback === "string" ? fallback : path;
}
