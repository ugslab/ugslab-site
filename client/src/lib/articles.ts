// Article data: key effects and slug mapping for each molecule
// Articles are imported as raw markdown strings

import tirzepatideMd from "@/lib/articles/tirzepatide.md?raw";
import retatrutideMd from "@/lib/articles/retatrutide.md?raw";
import motscMd from "@/lib/articles/mots-c.md?raw";
import tb500Md from "@/lib/articles/tb-500.md?raw";
import bpc157Md from "@/lib/articles/bpc-157.md?raw";
import pt141Md from "@/lib/articles/pt-141.md?raw";
import igf1lr3Md from "@/lib/articles/igf-1-lr3.md?raw";
import ghkcuMd from "@/lib/articles/ghk-cu.md?raw";
import epithalonMd from "@/lib/articles/epithalon.md?raw";
import kisspeptin10Md from "@/lib/articles/kisspeptin-10.md?raw";
import kpvMd from "@/lib/articles/kpv.md?raw";
import tesamorelinMd from "@/lib/articles/tesamorelin.md?raw";
import nadplusMd from "@/lib/articles/nad-plus.md?raw";

export interface ArticleData {
  slug: string;
  moleculeName: string;
  keyEffects: string[];
  markdown: string;
}

export const articles: ArticleData[] = [
  {
    slug: "tirzepatide",
    moleculeName: "Tirzepatide",
    keyEffects: [
      "Снижение массы тела до 20–25% (исследования SURMOUNT)",
      "Выраженный контроль аппетита и снижение потребления пищи",
      "Нормализация уровня глюкозы в крови (HbA1c ↓1,8–2,3%)",
      "Улучшение липидного профиля",
      "Двойное действие на рецепторы GIP и GLP-1",
    ],
    markdown: tirzepatideMd,
  },
  {
    slug: "retatrutide",
    moleculeName: "Retatrutide",
    keyEffects: [
      "Снижение массы тела до 24% (фаза 2)",
      "Контроль глюкозы (HbA1c ↓2%+)",
      "Снижение стеатоза печени на 80%+",
      "Повышенный расход энергии через глюкагоновый компонент",
      "Сохранение мышечной массы при снижении веса",
    ],
    markdown: retatrutideMd,
  },
  {
    slug: "mots-c",
    moleculeName: "MOTS-c",
    keyEffects: [
      "Оптимизация митохондриального метаболизма",
      "Улучшение инсулиночувствительности",
      "Повышение физической выносливости",
      "Антиоксидантная защита от стресса",
      "Коррекция возрастных метаболических изменений",
    ],
    markdown: motscMd,
  },
  {
    slug: "tb-500",
    moleculeName: "TB-500",
    keyEffects: [
      "Ускорение заживления сухожилий, связок и мышц",
      "Повышение ангиогенеза и кровоснабжения тканей",
      "Восстановление слизистой оболочки ЖКТ",
      "Нейропротекция и восстановление нервов",
      "Кардиопротективные эффекты",
    ],
    markdown: tb500Md,
  },
  {
    slug: "bpc-157",
    moleculeName: "BPC-157",
    keyEffects: [
      "Ускорение заживления сухожилий и связок",
      "Защита и восстановление слизистой ЖКТ",
      "Противовоспалительное действие",
      "Нейропротекция и восстановление нервов",
      "Стабильность в кислой среде (пероральное применение)",
    ],
    markdown: bpc157Md,
  },
  {
    slug: "pt-141",
    moleculeName: "PT-141",
    keyEffects: [
      "Повышение сексуального желания у мужчин и женщин",
      "Центральный механизм действия (через ЦНС, не сосуды)",
      "Быстрое действие: 24–72 часа после введения",
      "FDA-одобрен (препарат Vyleesi, 2019)",
      "Независимость от гормонального статуса",
    ],
    markdown: pt141Md,
  },
  {
    slug: "igf-1-lr3",
    moleculeName: "IGF-1 LR3",
    keyEffects: [
      "Стимуляция роста мышечной массы и синтеза белка",
      "Увеличенный период полувыведения (20–30 часов)",
      "Поддержка регенерации тканей и суставов",
      "Улучшение чувствительности к инсулину",
      "Модуляция оси роста (гипоталамус-гипофиз)",
    ],
    markdown: igf1lr3Md,
  },
  {
    slug: "ghk-cu",
    moleculeName: "GHK-Cu",
    keyEffects: [
      "Стимуляция синтеза коллагена и эластина",
      "Ускорение заживления ран и регенерации кожи",
      "Модуляция воспаления и антиоксидантные эффекты",
      "Поддержка роста волос",
      "Улучшение текстуры и упругости кожи",
    ],
    markdown: ghkcuMd,
  },
  {
    slug: "epithalon",
    moleculeName: "Epithalon",
    keyEffects: [
      "Активация теломеразы и удлинение теломер",
      "Замедление клеточного старения",
      "Регуляция мелатонина и циркадных ритмов",
      "Нейропротекция и снижение стресса",
      "Поддержка иммунного гомеостаза",
    ],
    markdown: epithalonMd,
  },
  {
    slug: "kisspeptin-10",
    moleculeName: "Kisspeptin-10",
    keyEffects: [
      "Регуляция оси гипоталамус-гипофиз-гонады",
      "Повышение уровня тестостерона и ЛГ",
      "Поддержка репродуктивной функции",
      "Физиологическая активация GnRH",
      "Коррекция репродуктивных нарушений",
    ],
    markdown: kisspeptin10Md,
  },
  {
    slug: "kpv",
    moleculeName: "KPV",
    keyEffects: [
      "Противовоспалительное действие (меланокортиновые рецепторы)",
      "Потенциал при воспалительных заболеваниях кишечника",
      "Модуляция иммунного ответа и снижение цитокинов",
      "Применение в дерматологии",
      "Поддержка барьерной функции ЖКТ и кожи",
    ],
    markdown: kpvMd,
  },
  {
    slug: "tesamorelin",
    moleculeName: "Tesamorelin",
    keyEffects: [
      "Стимуляция секреции гормона роста",
      "Снижение висцерального жира",
      "Поддержка мышечной массы",
      "Улучшение метаболических параметров",
      "FDA-одобренный пептид (липодистрофия)",
    ],
    markdown: tesamorelinMd,
  },
  {
    slug: "nad-plus",
    moleculeName: "NAD+",
    keyEffects: [
      "Оптимизация энергетического метаболизма",
      "Активация сиртуинов (белки долголетия)",
      "Поддержка репарации ДНК",
      "Повышение нейропластичности и когнитивных функций",
      "Поддержка иммунного ответа",
    ],
    markdown: nadplusMd,
  },
];

// Map product name to article slug
export function getArticleSlug(productName: string): string | null {
  const nameToSlug: Record<string, string> = {
    "Tirzepatide": "tirzepatide",
    "Retatrutide": "retatrutide",
    "MOTS-c": "mots-c",
    "TB-500": "tb-500",
    "BPC-157": "bpc-157",
    "PT-141": "pt-141",
    "IGF-1 LR3": "igf-1-lr3",
    "GHK-Cu": "ghk-cu",
    "Epithalon": "epithalon",
    "Kisspeptin-10": "kisspeptin-10",
    "KPV": "kpv",
    "Tesamorelin": "tesamorelin",
    "NAD+": "nad-plus",
  };
  return nameToSlug[productName] || null;
}

// Get key effects for a product
export function getKeyEffects(productName: string): string[] {
  const slug = getArticleSlug(productName);
  if (!slug) return [];
  const article = articles.find(a => a.slug === slug);
  return article?.keyEffects || [];
}

// Get article by slug
export function getArticleBySlug(slug: string): ArticleData | undefined {
  return articles.find(a => a.slug === slug);
}
