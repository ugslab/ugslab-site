import { useLang } from "@/contexts/LanguageContext";
import { t } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Shield, Truck, FileCheck, FlaskConical } from "lucide-react";

export default function AboutSection() {
  const { lang } = useLang();

  const features = lang === "en" ? [
    { icon: Shield, title: "Quality Control", desc: "Each batch is verified. HPLC ≥98%. CoA available on request." },
    { icon: FileCheck, title: "Documentation", desc: "Full documentation for every product. Transparency at every stage." },
    { icon: Truck, title: "Direct Supply", desc: "Direct access to China's manufacturing base. No intermediaries." },
    { icon: FlaskConical, title: "Research Only", desc: "All products are intended exclusively for research purposes." },
  ] : [
    { icon: Shield, title: "Контроль качества", desc: "Каждая партия проверена. HPLC ≥98%. CoA по запросу." },
    { icon: FileCheck, title: "Документация", desc: "Полная документация на каждый продукт. Прозрачность на каждом этапе." },
    { icon: Truck, title: "Прямые поставки", desc: "Прямой доступ к производственной базе Китая. Без посредников." },
    { icon: FlaskConical, title: "Для исследований", desc: "Все продукты предназначены исключительно для исследовательских целей." },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Manrope', sans-serif" }}>
            {t(lang, "about.title")}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {t(lang, "about.text")}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="p-5 rounded-xl border border-gray-100 bg-gray-50/50"
            >
              <feature.icon className="w-5 h-5 text-indigo-600 mb-3" />
              <h3 className="text-sm font-semibold text-gray-900 mb-1.5">{feature.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
