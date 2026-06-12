import { motion } from "framer-motion";
import { Package, Tag, Thermometer, Globe } from "lucide-react";

const KRAFT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663487132888/e8adGwpKRAAUmjUuR8zksC/kraft-packaging-LL2u5T5fxrKdKhrmxVpGmS.webp";

const features = [
  { icon: Package, label: "Крафтовая коробка" },
  { icon: Tag, label: "Белая техническая этикетка" },
  { icon: Globe, label: "Двуязычная маркировка (CN + EN)" },
  { icon: Thermometer, label: "Условия хранения: 2–8°C" },
];

export default function PackagingSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-medium text-primary tracking-wide uppercase mb-3 block">Упаковка</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "'Manrope', sans-serif" }}>
              Упаковка и маркировка
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Простая и техническая. Без декоративных легенд — только информация для исследователя: молекула, дозировка, партия, хранение, происхождение.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-md border border-border bg-card">
                  <f.icon className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-xs font-medium text-foreground">{f.label}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-md bg-secondary/80 border border-border">
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Research Use Only.</span> Продукция предназначена исключительно для исследовательских целей. Не для применения человеком или животными.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-lg overflow-hidden border border-border shadow-sm bg-secondary/30 p-8 flex items-center justify-center"
          >
            <img src={KRAFT_IMG} alt="Упаковка UGS LAB" className="w-full max-w-md h-auto object-contain rounded-md" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
