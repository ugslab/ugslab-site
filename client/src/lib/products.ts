export interface Product {
  id: string;
  name: string;
  dosage: string;
  type: string;
  description: string;
  researchUse: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: "glp1-metabolic",
    name: "Метаболические / GLP-1 агонисты",
    description:
      "Пептиды, исследуемые в области метаболизма, регуляции гликемии и контроля массы тела.",
  },
  {
    id: "growth-hormone",
    name: "Гормон роста / GHRH",
    description:
      "Пептиды, связанные с осью гормона роста, секрецией GH и липолизом.",
  },
  {
    id: "neuropeptides",
    name: "Нейропептиды",
    description:
      "Пептиды с нейропротекторным и когнитивным исследовательским потенциалом.",
  },
  {
    id: "regeneration",
    name: "Регенерация и восстановление",
    description:
      "Пептиды, исследуемые в контексте заживления тканей, кожи и антиоксидантной защиты.",
  },
  {
    id: "longevity",
    name: "Геропротекция / Долголетие",
    description:
      "Пептиды, изучаемые в области биологии старения и клеточного обновления.",
  },
  {
    id: "other",
    name: "Малые молекулы и растворители",
    description:
      "Вспомогательные соединения и растворители для исследовательских протоколов.",
  },
];

export const products: Product[] = [
  // ── Метаболические / GLP-1 агонисты ──
  {
    id: "tirzepatide-30",
    name: "TIRZEPATIDE",
    dosage: "30 mg",
    type: "Peptide, Research use",
    category: "glp1-metabolic",
    description:
      "Двойной агонист рецепторов GIP и GLP-1. Пептид нового поколения для метаболических исследований.",
    researchUse:
      "Исследуется в контексте регуляции гликемии, инсулиновой чувствительности и метаболизма липидов. Перспективный объект изучения в области ожирения и диабета 2 типа.",
  },
  {
    id: "retatrutide-30",
    name: "RETATRUTIDE",
    dosage: "30 mg",
    type: "Peptide, Research use",
    category: "glp1-metabolic",
    description:
      "Тройной агонист рецепторов GIP, GLP-1 и глюкагона. Пептид третьего поколения.",
    researchUse:
      "Исследуется как мультирецепторный агонист для изучения энергетического баланса, снижения массы тела и регуляции метаболизма глюкозы и липидов.",
  },
  {
    id: "retatrutide-15",
    name: "RETATRUTIDE",
    dosage: "15 mg",
    type: "Peptide, Research use",
    category: "glp1-metabolic",
    description:
      "Тройной агонист рецепторов GIP, GLP-1 и глюкагона. Дозировка 15 мг.",
    researchUse:
      "Применяется в исследованиях метаболического синдрома, инсулинорезистентности и контроля аппетита.",
  },
  {
    id: "mazdutide-10",
    name: "MAZDUTIDE",
    dosage: "10 mg",
    type: "Peptide, Research use",
    category: "glp1-metabolic",
    description:
      "Двойной агонист рецепторов GLP-1 и глюкагона. Разработан для метаболических исследований.",
    researchUse:
      "Исследуется в области контроля массы тела, регуляции гликемии и лечения неалкогольной жировой болезни печени (НАЖБП).",
  },
  {
    id: "survodutide-10",
    name: "SURVODUTIDE",
    dosage: "10 mg",
    type: "Peptide, Research use",
    category: "glp1-metabolic",
    description:
      "Двойной агонист рецепторов GLP-1 и глюкагона нового поколения.",
    researchUse:
      "Изучается в контексте снижения массы тела, улучшения метаболических параметров и терапии НАЖБП/НАСГ.",
  },
  {
    id: "cagrisema-20",
    name: "CAGRISEMA",
    dosage: "20 mg",
    type: "Peptide, Research use",
    category: "glp1-metabolic",
    description:
      "Комбинация агониста рецептора GLP-1 (семаглутид) и агониста рецептора амилина (каграинтид).",
    researchUse:
      "Исследуется как комбинированный подход к контролю массы тела и аппетита с двойным механизмом действия.",
  },

  // ── Гормон роста / GHRH ──
  {
    id: "tesamorelin-10",
    name: "TESAMORELIN",
    dosage: "10 mg",
    type: "Peptide, Research use",
    category: "growth-hormone",
    description:
      "Синтетический аналог рилизинг-фактора гормона роста (GHRH). Стимулирует секрецию GH.",
    researchUse:
      "Исследуется в области снижения висцерального жира, липодистрофии и стимуляции оси GH/IGF-1.",
  },
  {
    id: "fragment-176-191",
    name: "FRAGMENT 176-191",
    dosage: "5 mg",
    type: "Peptide, Research use",
    category: "growth-hormone",
    description:
      "Фрагмент молекулы гормона роста (аминокислоты 176–191). Модифицированный С-терминальный фрагмент hGH.",
    researchUse:
      "Исследуется в контексте липолиза и жирового метаболизма без влияния на уровень глюкозы и IGF-1.",
  },
  {
    id: "aod9604-10",
    name: "AOD9604",
    dosage: "10 mg",
    type: "Peptide, Research use",
    category: "growth-hormone",
    description:
      "Модифицированный фрагмент гормона роста (Anti-Obesity Drug 9604).",
    researchUse:
      "Изучается как липолитический пептид: стимуляция расщепления жиров и ингибирование липогенеза без метаболических побочных эффектов.",
  },
  {
    id: "mots-c-40",
    name: "MOTS-c",
    dosage: "40 mg",
    type: "Peptide, Research use",
    category: "growth-hormone",
    description:
      "Митохондриальный пептид, кодируемый митохондриальной ДНК. Регулятор метаболического гомеостаза.",
    researchUse:
      "Исследуется в области энергетического метаболизма, инсулиновой чувствительности, физической выносливости и митохондриальной функции.",
  },

  // ── Нейропептиды ──
  {
    id: "selank-10",
    name: "SELANK",
    dosage: "10 mg",
    type: "Peptide, Research use",
    category: "neuropeptides",
    description:
      "Синтетический аналог тафтсина — эндогенного пептида иммунной системы. Состоит из 7 аминокислот.",
    researchUse:
      "Исследуется в контексте анксиолитических свойств, модуляции иммунного ответа и нейропротекторного потенциала. Применяется в исследованиях когнитивных функций и тревожных расстройств.",
  },
  {
    id: "semax-amidate-30",
    name: "SEMAX AMIDATE",
    dosage: "30 mg",
    type: "Peptide, Research use",
    category: "neuropeptides",
    description:
      "Амидированная форма синтетического пептида на основе фрагмента АКТГ (4-10). Обладает повышенной стабильностью.",
    researchUse:
      "Исследуется как нейропротектор и когнитивный модулятор. Изучается влияние на экспрессию нейротрофических факторов BDNF и NGF, а также на церебральный кровоток.",
  },

  // ── Регенерация и восстановление ──
  {
    id: "bpc-157-10",
    name: "BPC-157",
    dosage: "10 mg",
    type: "Peptide, Research use",
    category: "regeneration",
    description:
      "Пентадекапептид, состоящий из 15 аминокислот, выделенный из желудочного сока человека (Body Protection Compound).",
    researchUse:
      "Активно исследуется в области регенерации тканей: заживление сухожилий, мышц, связок и костей. Изучается гастропротекторное и ангиогенное действие.",
  },
  {
    id: "ghk-cu-100",
    name: "GHK-CU",
    dosage: "100 mg",
    type: "Peptide, Research use",
    category: "regeneration",
    description:
      "Трипептид-медь (Gly-His-Lys-Cu²⁺). Природный пептид, присутствующий в плазме крови.",
    researchUse:
      "Исследуется в области регенерации кожи, стимуляции синтеза коллагена, ранозаживления и антиоксидантной защиты. Изучается противовоспалительный потенциал.",
  },

  // ── Геропротекция / Долголетие ──
  {
    id: "epitalon-10",
    name: "EPITALON",
    dosage: "10 mg",
    type: "Peptide, Research use",
    category: "longevity",
    description:
      "Синтетический тетрапептид (Ala-Glu-Asp-Gly), аналог эпиталамина — экстракта эпифиза.",
    researchUse:
      "Исследуется в области биологии старения: активация теломеразы, регуляция циркадных ритмов и мелатонина. Изучается антиоксидантный и геропротекторный потенциал.",
  },
  {
    id: "epithalon-40",
    name: "EPITHALON",
    dosage: "40 mg",
    type: "Peptide, Research use",
    category: "longevity",
    description:
      "Синтетический тетрапептид (Ala-Glu-Asp-Gly) в увеличенной дозировке 40 мг для расширенных исследовательских протоколов.",
    researchUse:
      "Применяется в длительных исследованиях теломеразной активности, клеточного старения и нейроэндокринной регуляции.",
  },

  // ── Малые молекулы и растворители ──
  {
    id: "5-amino-1mq-50",
    name: "5-AMINO-1MQ",
    dosage: "50 mg",
    type: "Research use",
    category: "other",
    description:
      "Малая молекула — селективный ингибитор фермента NNMT (никотинамид-N-метилтрансферазы).",
    researchUse:
      "Исследуется в контексте метаболизма жировой ткани, энергетического обмена и потенциального влияния на ожирение через ингибирование NNMT.",
  },
  {
    id: "5-amino-1mq-80",
    name: "5-AMINO-1MQ",
    dosage: "80 mg",
    type: "Research use",
    category: "other",
    description:
      "Малая молекула — селективный ингибитор NNMT. Увеличенная дозировка для расширенных протоколов.",
    researchUse:
      "Применяется в исследованиях дозозависимых эффектов ингибирования NNMT на липидный метаболизм и дифференцировку адипоцитов.",
  },
  {
    id: "bacteriostatic-water",
    name: "BACTERIOSTATIC WATER",
    dosage: "10 ml",
    type: "Research use",
    category: "other",
    description:
      "Стерильная вода для инъекций с добавлением 0,9% бензилового спирта в качестве бактериостатического агента.",
    researchUse:
      "Используется как универсальный растворитель для реконституции лиофилизированных пептидов в лабораторных условиях. Обеспечивает стерильность раствора.",
  },
];
