export interface Product {
  id: string;
  name: string;
  dosage: string;
  form: string;
  category: string;
  categoryId: string;
  description: string;
  researchAreas: string;
  storage: string;
  searchTags: string[]; // hidden tags for smart search
}

export interface Category {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
}

export const categories: Category[] = [
  { id: "metabolic", name: "Метаболические / GLP-1 агонисты", nameEn: "Metabolic / GLP-1 Agonists", description: "Исследования метаболизма, аппетита, гликемии", descriptionEn: "Metabolism, appetite, glycemia research" },
  { id: "ghrh", name: "GHRH / GH-axis", nameEn: "GHRH / GH-axis", description: "Исследования гормона роста, секреции, регенерации", descriptionEn: "Growth hormone, secretion, regeneration research" },
  { id: "regeneration", name: "Регенерация и восстановление", nameEn: "Regeneration & Recovery", description: "Исследования заживления, воспаления, восстановления тканей", descriptionEn: "Healing, inflammation, tissue recovery research" },
  { id: "mito", name: "Митохондриальные и энергетические исследования", nameEn: "Mitochondrial & Energy Research", description: "Исследования клеточной энергетики, митохондрий", descriptionEn: "Cellular energetics, mitochondria research" },
  { id: "muscle", name: "Мышечная регуляция и рост", nameEn: "Muscle Regulation & Growth", description: "Исследования мышечного роста, IGF-1 сигналинга", descriptionEn: "Muscle growth, IGF-1 signaling research" },
  { id: "derm", name: "Кожа и дерматология", nameEn: "Skin & Dermatology", description: "Исследования коллагена, заживления, омоложения", descriptionEn: "Collagen, healing, rejuvenation research" },
  { id: "repro", name: "Репродуктивная и нейроэндокринная регуляция", nameEn: "Reproductive & Neuroendocrine Regulation", description: "Исследования гонадотропинов, либидо, фертильности", descriptionEn: "Gonadotropin, libido, fertility research" },
  { id: "immune", name: "Иммунорегуляция", nameEn: "Immunoregulation", description: "Исследования иммунного ответа, воспаления", descriptionEn: "Immune response, inflammation research" },
  { id: "longevity", name: "Геропротекция и долголетие", nameEn: "Longevity & Geroprotection", description: "Исследования старения, теломер, клеточного восстановления", descriptionEn: "Aging, telomeres, cellular restoration research" },
];

export const products: Product[] = [
  // ── Метаболические / GLP-1 ──
  { id: "tirzepatide-15", name: "Tirzepatide", dosage: "15 mg", form: "Lyophilized Powder", category: "Метаболические / GLP-1 агонисты", categoryId: "metabolic", description: "Двойной агонист GIP/GLP-1R. Изучается в контексте метаболической регуляции и липидного обмена.", researchAreas: "Метаболизм, аппетит, гликемия, липидный обмен", storage: "2–8°C", searchTags: ["tirzepatide", "тирзепатид", "mounjaro", "монжаро", "zepbound", "снижение веса", "похудение", "аппетит", "метаболизм", "диабет", "сахар", "glp-1", "gip", "вес"] },
  { id: "tirzepatide-30", name: "Tirzepatide", dosage: "30 mg", form: "Lyophilized Powder", category: "Метаболические / GLP-1 агонисты", categoryId: "metabolic", description: "Двойной агонист GIP/GLP-1R. Изучается в контексте метаболической регуляции и липидного обмена.", researchAreas: "Метаболизм, аппетит, гликемия, липидный обмен", storage: "2–8°C", searchTags: ["tirzepatide", "тирзепатид", "mounjaro", "монжаро", "zepbound", "снижение веса", "похудение", "аппетит", "метаболизм", "диабет", "сахар", "glp-1", "gip", "вес"] },
  { id: "tirzepatide-40", name: "Tirzepatide", dosage: "40 mg", form: "Lyophilized Powder", category: "Метаболические / GLP-1 агонисты", categoryId: "metabolic", description: "Двойной агонист GIP/GLP-1R. Изучается в контексте метаболической регуляции и липидного обмена.", researchAreas: "Метаболизм, аппетит, гликемия, липидный обмен", storage: "2–8°C", searchTags: ["tirzepatide", "тирзепатид", "mounjaro", "монжаро", "zepbound", "снижение веса", "похудение", "аппетит", "метаболизм", "диабет", "сахар", "glp-1", "gip", "вес"] },
  { id: "retatrutide-15", name: "Retatrutide", dosage: "15 mg", form: "Lyophilized Powder", category: "Метаболические / GLP-1 агонисты", categoryId: "metabolic", description: "Тройной агонист GLP-1/GIP/GCGR. Изучается в контексте энергетического обмена и метаболической регуляции.", researchAreas: "Метаболизм, энергетический обмен, гликемия", storage: "2–8°C", searchTags: ["retatrutide", "ретатрутид", "тройной агонист", "снижение веса", "похудение", "аппетит", "метаболизм", "glp-1", "gip", "gcgr", "вес"] },
  { id: "retatrutide-30", name: "Retatrutide", dosage: "30 mg", form: "Lyophilized Powder", category: "Метаболические / GLP-1 агонисты", categoryId: "metabolic", description: "Тройной агонист GLP-1/GIP/GCGR. Изучается в контексте энергетического обмена и метаболической регуляции.", researchAreas: "Метаболизм, энергетический обмен, гликемия", storage: "2–8°C", searchTags: ["retatrutide", "ретатрутид", "тройной агонист", "снижение веса", "похудение", "аппетит", "метаболизм", "glp-1", "gip", "gcgr", "вес"] },

  // ── GHRH / GH-axis ──
  { id: "tesamorelin-10", name: "Tesamorelin", dosage: "10 mg", form: "Lyophilized Powder", category: "GHRH / GH-axis", categoryId: "ghrh", description: "Аналог GHRH. Изучается в контексте секреции гормона роста и висцерального жирового метаболизма.", researchAreas: "GH-axis, висцеральный жир, секреция гормона роста", storage: "2–8°C", searchTags: ["tesamorelin", "тесаморелин", "гормон роста", "жиросжигание", "висцеральный жир", "gh", "ghrh", "growth hormone"] },
  { id: "igf1-lr3", name: "IGF-1 LR3", dosage: "1 mg", form: "Lyophilized Powder", category: "Мышечная регуляция и рост", categoryId: "muscle", description: "Аналог IGF-1 с удлинённым периодом полувыведения. Изучается в контексте мышечного роста и клеточной пролиферации.", researchAreas: "Мышечный рост, клеточная пролиферация, IGF-1 сигналинг", storage: "2–8°C", searchTags: ["igf-1", "igf1", "lr3", "рост мышц", "мышечная масса", "анаболизм", "восстановление", "muscle growth", "insulin-like growth factor"] },

  // ── Регенерация и восстановление ──
  { id: "tb500", name: "TB-500", dosage: "5 mg", form: "Lyophilized Powder", category: "Регенерация и восстановление", categoryId: "regeneration", description: "Фрагмент тимозина β4. Изучается в контексте регенерации тканей, ангиогенеза и противовоспалительных процессов.", researchAreas: "Регенерация, ангиогенез, противовоспалительное действие", storage: "2–8°C", searchTags: ["tb-500", "tb500", "тимозин", "thymosin", "заживление", "восстановление", "травма", "воспаление", "мышцы", "связки", "healing", "recovery"] },
  { id: "bpc157-5", name: "BPC-157", dosage: "5 mg", form: "Lyophilized Powder", category: "Регенерация и восстановление", categoryId: "regeneration", description: "Body Protection Compound. Изучается в контексте регенерации ЖКТ, заживления тканей и нейропротекции.", researchAreas: "Регенерация ЖКТ, заживление, нейропротекция", storage: "2–8°C", searchTags: ["bpc-157", "bpc157", "заживление", "суставы", "связки", "кишечник", "травма", "восстановление", "жкт", "gut", "healing", "joints"] },
  { id: "bpc157-10", name: "BPC-157", dosage: "10 mg", form: "Lyophilized Powder", category: "Регенерация и восстановление", categoryId: "regeneration", description: "Body Protection Compound. Изучается в контексте регенерации ЖКТ, заживления тканей и нейропротекции.", researchAreas: "Регенерация ЖКТ, заживление, нейропротекция", storage: "2–8°C", searchTags: ["bpc-157", "bpc157", "заживление", "суставы", "связки", "кишечник", "травма", "восстановление", "жкт", "gut", "healing", "joints"] },

  // ── Митохондриальные и энергетические ──
  { id: "motsc-40", name: "MOTS-c", dosage: "40 mg", form: "Lyophilized Powder", category: "Митохондриальные и энергетические исследования", categoryId: "mito", description: "Митохондриальный пептид. Изучается в контексте клеточной энергетики, метаболической регуляции и физической выносливости.", researchAreas: "Клеточная энергетика, метаболизм, физическая выносливость", storage: "2–8°C", searchTags: ["mots-c", "motsc", "метаболизм", "энергия", "выносливость", "старение", "митохондрии", "mitochondria", "energy", "endurance", "aging"] },
  { id: "nad-1000", name: "NAD+", dosage: "1000 mg", form: "Lyophilized Powder", category: "Митохондриальные и энергетические исследования", categoryId: "mito", description: "Никотинамидадениндинуклеотид. Изучается в контексте клеточного метаболизма, энергетики и процессов старения.", researchAreas: "Клеточный метаболизм, энергетика, старение", storage: "2–8°C", searchTags: ["nad+", "nad", "никотинамид", "энергия", "старение", "клеточное восстановление", "митохондрии", "метаболизм", "aging", "cellular repair", "longevity"] },

  // ── Кожа и дерматология ──
  { id: "ghk-cu-100", name: "GHK-Cu", dosage: "100 mg", form: "Lyophilized Powder", category: "Кожа и дерматология", categoryId: "derm", description: "Медь-пептидный комплекс. Изучается в контексте стимуляции коллагена, заживления и антиоксидантной защиты.", researchAreas: "Коллаген, заживление, антиоксидантная защита", storage: "2–8°C", searchTags: ["ghk-cu", "ghk", "медь", "copper", "кожа", "коллаген", "омоложение", "заживление", "волосы", "антиоксидант", "skin", "collagen", "rejuvenation", "hair"] },

  // ── Репродуктивная и нейроэндокринная регуляция ──
  { id: "pt141-10", name: "PT-141", dosage: "10 mg", form: "Lyophilized Powder", category: "Репродуктивная и нейроэндокринная регуляция", categoryId: "repro", description: "Агонист MC3/MC4 рецепторов. Изучается в контексте нейроэндокринной регуляции сексуальной функции.", researchAreas: "Сексуальная функция, нейроэндокринная регуляция", storage: "2–8°C", searchTags: ["pt-141", "pt141", "bremelanotide", "бремеланотид", "либидо", "потенция", "эрекция", "сексуальная функция", "libido", "sexual function"] },
  { id: "kisspeptin10-5", name: "Kisspeptin-10", dosage: "5 mg", form: "Lyophilized Powder", category: "Репродуктивная и нейроэндокринная регуляция", categoryId: "repro", description: "Нейропептид, регулирующий ось HPG. Изучается в контексте репродуктивной эндокринологии и фертильности.", researchAreas: "Репродуктивная эндокринология, фертильность, HPG-axis", storage: "2–8°C", searchTags: ["kisspeptin", "kisspeptin-10", "кисспептин", "гормоны", "фертильность", "репродукция", "тестостерон", "fertility", "testosterone", "hormones"] },

  // ── Иммунорегуляция ──
  { id: "kpv-10", name: "KPV", dosage: "10 mg", form: "Lyophilized Powder", category: "Иммунорегуляция", categoryId: "immune", description: "Трипептид (Lys-Pro-Val), фрагмент α-MSH. Изучается в контексте противовоспалительной регуляции и иммуномодуляции.", researchAreas: "Противовоспалительное действие, иммуномодуляция, ЖКТ", storage: "2–8°C", searchTags: ["kpv", "воспаление", "кожа", "кишечник", "иммунитет", "противовоспалительное", "inflammation", "skin", "gut", "immune"] },

  // ── Геропротекция и долголетие ──
  { id: "epithalon-50", name: "Epithalon", dosage: "50 mg", form: "Lyophilized Powder", category: "Геропротекция и долголетие", categoryId: "longevity", description: "Тетрапептид (Ala-Glu-Asp-Gly). Изучается в контексте активации теломеразы и регуляции циркадных ритмов.", researchAreas: "Теломераза, циркадные ритмы, старение", storage: "2–8°C", searchTags: ["epithalon", "эпиталон", "epitalon", "старение", "теломеры", "долголетие", "антиэйдж", "сон", "telomeres", "longevity", "anti-aging", "sleep"] },
];
