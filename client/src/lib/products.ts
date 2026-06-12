export interface Product {
  id: string;
  name: string;
  dosage: string;
  form: string;
  category: string;
  categoryId: string;
  description: string;
  storage: string;
}

export interface Category {
  id: string;
  name: string;
  shortName: string;
  description: string;
}

export const categories: Category[] = [
  { id: "all", name: "Все продукты", shortName: "Все", description: "" },
  { id: "metabolic", name: "Метаболические / GLP-1 агонисты", shortName: "GLP-1", description: "Молекулы, изучаемые в контексте регуляции аппетита, гликемии, инсулиновой чувствительности и энергетического обмена." },
  { id: "ghrh", name: "GHRH / GHRP / GH-axis", shortName: "GH-axis", description: "Пептиды, изучаемые в контексте оси гормона роста, секреции GH, IGF-1 и восстановления тканей." },
  { id: "regeneration", name: "Регенерация и восстановление", shortName: "Регенерация", description: "Пептиды, изучаемые в контексте восстановления тканей, барьерных функций и воспалительной регуляции." },
  { id: "neuro", name: "Нейропептиды и нейрорегуляция", shortName: "Нейро", description: "Молекулы, изучаемые в контексте нейропластичности, стресс-ответа и когнитивных процессов." },
  { id: "mito", name: "Митохондриальные исследования", shortName: "Митохондрии", description: "Молекулы, изучаемые в контексте митохондриальной функции, клеточной энергетики и окислительного стресса." },
  { id: "muscle", name: "Мышечная регуляция", shortName: "Мышцы", description: "Молекулы, изучаемые в контексте регуляции мышечной ткани, миостатинового пути и IGF-1 axis." },
  { id: "immune", name: "Иммунорегуляция", shortName: "Иммунитет", description: "Пептиды, изучаемые в контексте иммунного ответа, воспалительных каскадов и цитокиновой регуляции." },
  { id: "derm", name: "Кожа и пигментация", shortName: "Кожа", description: "Молекулы, изучаемые в контексте кожных моделей, пигментации и внеклеточного матрикса." },
  { id: "repro", name: "Репродуктивная регуляция", shortName: "Репродукция", description: "Молекулы, изучаемые в контексте нейроэндокринной регуляции и репродуктивной оси." },
  { id: "rare", name: "Редкие и экспериментальные", shortName: "Редкие", description: "Молекулы с узкой исследовательской областью, применяемые в специализированных моделях." },
  { id: "small", name: "Малые молекулы", shortName: "Малые молекулы", description: "Исследовательские соединения, не относящиеся к пептидам." },
  { id: "solvents", name: "Растворители и аксессуары", shortName: "Растворители", description: "Вспомогательные позиции для хранения, разведения и лабораторной работы." },
];

export const products: Product[] = [
  // ── Метаболические / GLP-1 ──
  { id: "semaglutide", name: "Semaglutide", dosage: "3 mg", form: "Lyophilized Powder", category: "Метаболические / GLP-1 агонисты", categoryId: "metabolic", description: "Агонист GLP-1R. Изучается в контексте метаболической регуляции, гликемии и инсулиновой чувствительности.", storage: "2–8°C" },
  { id: "tirzepatide", name: "Tirzepatide", dosage: "30 mg", form: "Lyophilized Powder", category: "Метаболические / GLP-1 агонисты", categoryId: "metabolic", description: "Двойной агонист GIP/GLP-1R. Изучается в контексте метаболической регуляции и липидного обмена.", storage: "2–8°C" },
  { id: "retatrutide-30", name: "Retatrutide", dosage: "30 mg", form: "Lyophilized Powder", category: "Метаболические / GLP-1 агонисты", categoryId: "metabolic", description: "Тройной агонист GLP-1/GIP/GCGR. Изучается в контексте энергетического обмена.", storage: "2–8°C" },
  { id: "retatrutide-15", name: "Retatrutide", dosage: "15 mg", form: "Lyophilized Powder", category: "Метаболические / GLP-1 агонисты", categoryId: "metabolic", description: "Тройной агонист GLP-1/GIP/GCGR. Дозировка для исследовательских протоколов.", storage: "2–8°C" },
  { id: "cagrisema", name: "CagriSema", dosage: "20 mg", form: "Lyophilized Powder", category: "Метаболические / GLP-1 агонисты", categoryId: "metabolic", description: "Комбинация GLP-1 + амилин. Изучается в контексте контроля аппетита и гликемии.", storage: "2–8°C" },
  { id: "mazdutide", name: "Mazdutide", dosage: "10 mg", form: "Lyophilized Powder", category: "Метаболические / GLP-1 агонисты", categoryId: "metabolic", description: "Двойной агонист GLP-1/GCGR. Изучается в контексте метаболической регуляции.", storage: "2–8°C" },
  { id: "survodutide", name: "Survodutide", dosage: "10 mg", form: "Lyophilized Powder", category: "Метаболические / GLP-1 агонисты", categoryId: "metabolic", description: "Двойной агонист GLP-1/GCGR. Изучается в контексте липидного обмена.", storage: "2–8°C" },
  { id: "aod9604", name: "AOD-9604", dosage: "10 mg", form: "Lyophilized Powder", category: "Метаболические / GLP-1 агонисты", categoryId: "metabolic", description: "Фрагмент GH. Изучается в контексте липолиза и жирового метаболизма.", storage: "2–8°C" },
  { id: "tesofensine", name: "Tesofensine", dosage: "500 mcg", form: "Capsule", category: "Метаболические / GLP-1 агонисты", categoryId: "metabolic", description: "Ингибитор обратного захвата моноаминов. Изучается в контексте метаболической регуляции.", storage: "Room temperature" },

  // ── GHRH / GHRP / GH-axis ──
  { id: "cjc1295-dac", name: "CJC-1295 DAC", dosage: "5 mg", form: "Lyophilized Powder", category: "GHRH / GHRP / GH-axis", categoryId: "ghrh", description: "Аналог GHRH с DAC. Изучается в контексте GH/IGF-1 axis.", storage: "2–8°C" },
  { id: "cjc1295-nodac", name: "CJC-1295 No DAC", dosage: "5 mg", form: "Lyophilized Powder", category: "GHRH / GHRP / GH-axis", categoryId: "ghrh", description: "Mod GRF 1-29. Изучается в контексте пульсатильной секреции GH.", storage: "2–8°C" },
  { id: "ipamorelin", name: "Ipamorelin", dosage: "5 mg", form: "Lyophilized Powder", category: "GHRH / GHRP / GH-axis", categoryId: "ghrh", description: "Селективный GHRP. Изучается в контексте GH-axis и восстановления.", storage: "2–8°C" },
  { id: "sermorelin", name: "Sermorelin", dosage: "5 mg", form: "Lyophilized Powder", category: "GHRH / GHRP / GH-axis", categoryId: "ghrh", description: "Аналог GHRH (1-29). Изучается в контексте секреции гормона роста.", storage: "2–8°C" },
  { id: "tesamorelin", name: "Tesamorelin", dosage: "10 mg", form: "Lyophilized Powder", category: "GHRH / GHRP / GH-axis", categoryId: "ghrh", description: "Аналог GHRH. Изучается в контексте GH/IGF-1 axis и композиции тела.", storage: "2–8°C" },
  { id: "ghrp2", name: "GHRP-2", dosage: "5 mg", form: "Lyophilized Powder", category: "GHRH / GHRP / GH-axis", categoryId: "ghrh", description: "Пептид, высвобождающий GH. Изучается в контексте GH-axis.", storage: "2–8°C" },
  { id: "ghrp6", name: "GHRP-6", dosage: "5 mg", form: "Lyophilized Powder", category: "GHRH / GHRP / GH-axis", categoryId: "ghrh", description: "Пептид, высвобождающий GH. Изучается в контексте грелиновых рецепторов.", storage: "2–8°C" },
  { id: "hexarelin", name: "Hexarelin", dosage: "5 mg", form: "Lyophilized Powder", category: "GHRH / GHRP / GH-axis", categoryId: "ghrh", description: "Синтетический GHRP. Изучается в контексте GH-секреции и кардиопротекции.", storage: "2–8°C" },
  { id: "fragment176", name: "Fragment 176-191", dosage: "5 mg", form: "Lyophilized Powder", category: "GHRH / GHRP / GH-axis", categoryId: "ghrh", description: "Фрагмент GH (176-191). Изучается в контексте липидного метаболизма.", storage: "2–8°C" },
  { id: "mk677", name: "MK-677", dosage: "25 mg", form: "Capsule", category: "GHRH / GHRP / GH-axis", categoryId: "ghrh", description: "Непептидный агонист грелиновых рецепторов. Изучается в контексте GH-секреции.", storage: "Room temperature" },
  { id: "igf1-lr3", name: "IGF-1 LR3", dosage: "1 mg", form: "Lyophilized Powder", category: "GHRH / GHRP / GH-axis", categoryId: "ghrh", description: "Аналог IGF-1 с удлинённым периодом полувыведения. Клеточная пролиферация.", storage: "2–8°C" },

  // ── Регенерация и восстановление ──
  { id: "bpc157", name: "BPC-157", dosage: "10 mg", form: "Lyophilized Powder", category: "Регенерация и восстановление", categoryId: "regeneration", description: "Пентадекапептид. Изучается в контексте тканевой регуляции и барьерных функций.", storage: "2–8°C" },
  { id: "tb500", name: "TB-500", dosage: "10 mg", form: "Lyophilized Powder", category: "Регенерация и восстановление", categoryId: "regeneration", description: "Фрагмент тимозина бета-4. Изучается в контексте тканевой регуляции и ангиогенеза.", storage: "2–8°C" },
  { id: "bpc157-tb500", name: "BPC-157 + TB-500 Blend", dosage: "10 mg", form: "Lyophilized Powder", category: "Регенерация и восстановление", categoryId: "regeneration", description: "Комбинация пептидов для синергетического восстановления тканей.", storage: "2–8°C" },
  { id: "ghk-cu", name: "GHK-Cu", dosage: "100 mg", form: "Lyophilized Powder", category: "Регенерация и восстановление", categoryId: "regeneration", description: "Медный трипептид. Изучается в контексте тканевого ремоделирования и матрикса.", storage: "2–8°C" },
  { id: "kpv", name: "KPV", dosage: "5 mg", form: "Lyophilized Powder", category: "Регенерация и восстановление", categoryId: "regeneration", description: "Трипептид α-MSH. Изучается в контексте воспалительной регуляции.", storage: "2–8°C" },
  { id: "ll37", name: "LL-37", dosage: "5 mg", form: "Lyophilized Powder", category: "Регенерация и восстановление", categoryId: "regeneration", description: "Кателицидин. Изучается в контексте врождённого иммунитета и тканевой регуляции.", storage: "2–8°C" },

  // ── Нейропептиды ──
  { id: "selank", name: "Selank", dosage: "10 mg", form: "Lyophilized Powder", category: "Нейропептиды и нейрорегуляция", categoryId: "neuro", description: "Аналог тафтсина. Изучается в контексте нейрорегуляции и стресс-ответа.", storage: "2–8°C" },
  { id: "semax", name: "Semax Amidate", dosage: "30 mg", form: "Lyophilized Powder", category: "Нейропептиды и нейрорегуляция", categoryId: "neuro", description: "Аналог АКТГ (4-10). Изучается в контексте нейропластичности и когнитивных процессов.", storage: "2–8°C" },
  { id: "dsip", name: "DSIP", dosage: "5 mg", form: "Lyophilized Powder", category: "Нейропептиды и нейрорегуляция", categoryId: "neuro", description: "Дельта-сон индуцирующий пептид. Изучается в контексте циркадных ритмов.", storage: "2–8°C" },
  { id: "pinealon", name: "Pinealon", dosage: "20 mg", form: "Lyophilized Powder", category: "Нейропептиды и нейрорегуляция", categoryId: "neuro", description: "Трипептид. Изучается в контексте нейропротекции и пинеальной регуляции.", storage: "2–8°C" },
  { id: "dihexa", name: "Dihexa", dosage: "50 mg", form: "Powder", category: "Нейропептиды и нейрорегуляция", categoryId: "neuro", description: "Малая молекула. Изучается в контексте нейрогенеза через HGF/c-Met pathway.", storage: "2–8°C" },

  // ── Митохондриальные ──
  { id: "motsc", name: "MOTS-c", dosage: "40 mg", form: "Lyophilized Powder", category: "Митохондриальные исследования", categoryId: "mito", description: "Митохондриальный пептид. Изучается в контексте AMPK-активации и энергетики.", storage: "2–8°C" },
  { id: "ss31", name: "SS-31 (Elamipretide)", dosage: "50 mg", form: "Lyophilized Powder", category: "Митохондриальные исследования", categoryId: "mito", description: "Митохондриально-таргетный пептид. Кардиолипиновая стабилизация.", storage: "2–8°C" },
  { id: "humanin", name: "Humanin", dosage: "5 mg", form: "Lyophilized Powder", category: "Митохондриальные исследования", categoryId: "mito", description: "Митохондриальный пептид. Изучается в контексте цитопротекции и апоптоза.", storage: "2–8°C" },

  // ── Мышечная регуляция ──
  { id: "ace031", name: "ACE-031", dosage: "1 mg", form: "Lyophilized Powder", category: "Мышечная регуляция", categoryId: "muscle", description: "Растворимый рецептор ActRIIB. Изучается в контексте миостатинового пути.", storage: "2–8°C" },
  { id: "follistatin", name: "Follistatin 344", dosage: "1 mg", form: "Lyophilized Powder", category: "Мышечная регуляция", categoryId: "muscle", description: "Гликопротеин. Изучается в контексте ингибирования миостатина.", storage: "2–8°C" },
  { id: "peg-mgf", name: "PEG-MGF", dosage: "5 mg", form: "Lyophilized Powder", category: "Мышечная регуляция", categoryId: "muscle", description: "Пегилированный MGF. Изучается в контексте мышечной регенерации и IGF-1 axis.", storage: "2–8°C" },

  // ── Иммунорегуляция ──
  { id: "thymosin-a1", name: "Thymosin Alpha-1", dosage: "5 mg", form: "Lyophilized Powder", category: "Иммунорегуляция", categoryId: "immune", description: "Пептид тимуса. Изучается в контексте T-клеточного ответа и цитокиновой модуляции.", storage: "2–8°C" },
  { id: "vip", name: "VIP", dosage: "5 mg", form: "Lyophilized Powder", category: "Иммунорегуляция", categoryId: "immune", description: "Вазоактивный интестинальный пептид. Иммунная регуляция и нейроэндокринные процессы.", storage: "2–8°C" },
  { id: "ara290", name: "ARA-290", dosage: "5 mg", form: "Lyophilized Powder", category: "Иммунорегуляция", categoryId: "immune", description: "Агонист рецептора EPO. Нейропротекция и противовоспалительные каскады.", storage: "2–8°C" },

  // ── Кожа и пигментация ──
  { id: "melanotan2", name: "Melanotan II", dosage: "10 mg", form: "Lyophilized Powder", category: "Кожа и пигментация", categoryId: "derm", description: "Аналог α-MSH. Изучается в контексте меланогенеза и рецепторных моделей MC1R.", storage: "2–8°C" },
  { id: "pt141", name: "PT-141 (Bremelanotide)", dosage: "10 mg", form: "Lyophilized Powder", category: "Кожа и пигментация", categoryId: "derm", description: "Агонист MC рецепторов. Нейроэндокринная регуляция и поведенческие модели.", storage: "2–8°C" },

  // ── Репродуктивная регуляция ──
  { id: "kisspeptin", name: "Kisspeptin-10", dosage: "5 mg", form: "Lyophilized Powder", category: "Репродуктивная регуляция", categoryId: "repro", description: "Нейропептид. Изучается в контексте GnRH-сигналинга и репродуктивной оси.", storage: "2–8°C" },
  { id: "gonadorelin", name: "Gonadorelin", dosage: "2 mg", form: "Lyophilized Powder", category: "Репродуктивная регуляция", categoryId: "repro", description: "Аналог GnRH. Гипоталамо-гипофизарно-гонадная ось.", storage: "2–8°C" },
  { id: "oxytocin", name: "Oxytocin", dosage: "5 mg", form: "Lyophilized Powder", category: "Репродуктивная регуляция", categoryId: "repro", description: "Нейропептид. Нейроэндокринная регуляция и социальные поведенческие модели.", storage: "2–8°C" },

  // ── Редкие и экспериментальные ──
  { id: "epitalon", name: "Epitalon", dosage: "10 mg", form: "Lyophilized Powder", category: "Редкие и экспериментальные", categoryId: "rare", description: "Тетрапептид. Изучается в контексте теломеразной активности и пинеальной регуляции.", storage: "2–8°C" },
  { id: "epithalon-40", name: "Epithalon", dosage: "40 mg", form: "Lyophilized Powder", category: "Редкие и экспериментальные", categoryId: "rare", description: "Тетрапептид. Увеличенная дозировка для расширенных протоколов.", storage: "2–8°C" },
  { id: "foxo4-dri", name: "FOXO4-DRI", dosage: "10 mg", form: "Lyophilized Powder", category: "Редкие и экспериментальные", categoryId: "rare", description: "Сенолитический пептид. Изучается в контексте клеточного старения.", storage: "2–8°C" },
  { id: "p21", name: "P21", dosage: "50 mg", form: "Lyophilized Powder", category: "Редкие и экспериментальные", categoryId: "rare", description: "Пептидомиметик CNTF. Изучается в контексте нейрогенеза.", storage: "2–8°C" },

  // ── Малые молекулы ──
  { id: "5amino1mq-50", name: "5-Amino-1MQ", dosage: "50 mg", form: "Capsule", category: "Малые молекулы", categoryId: "small", description: "Ингибитор NNMT. Изучается в контексте метаболических и клеточных моделей.", storage: "Room temperature" },
  { id: "5amino1mq-80", name: "5-Amino-1MQ", dosage: "80 mg", form: "Capsule", category: "Малые молекулы", categoryId: "small", description: "Ингибитор NNMT. Увеличенная дозировка.", storage: "Room temperature" },
  { id: "noopept", name: "Noopept", dosage: "20 mg", form: "Capsule", category: "Малые молекулы", categoryId: "small", description: "Дипептидный ноотроп. Нейропротекция и когнитивные процессы.", storage: "Room temperature" },
  { id: "bam15", name: "BAM-15", dosage: "50 mg", form: "Powder", category: "Малые молекулы", categoryId: "small", description: "Митохондриальный разобщитель. Клеточная энергетика.", storage: "2–8°C" },

  // ── Растворители и аксессуары ──
  { id: "bac-water", name: "Bacteriostatic Water", dosage: "10 ml", form: "Solution", category: "Растворители и аксессуары", categoryId: "solvents", description: "Стерильная вода с 0.9% бензиловым спиртом для разведения лиофилизированных препаратов.", storage: "Room temperature" },
  { id: "sterile-water", name: "Sterile Water", dosage: "10 ml", form: "Solution", category: "Растворители и аксессуары", categoryId: "solvents", description: "Стерильная вода для инъекций. Разведение исследовательских препаратов.", storage: "Room temperature" },
  { id: "nacl", name: "Sodium Chloride 0.9%", dosage: "10 ml", form: "Solution", category: "Растворители и аксессуары", categoryId: "solvents", description: "Изотонический раствор NaCl для разведения и хранения пептидов.", storage: "Room temperature" },
];
