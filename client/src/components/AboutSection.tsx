import { motion } from "framer-motion";
import { Eye, Package, FileText, BarChart3 } from "lucide-react";

const values = [
  { icon: Eye, title: "Прозрачность", desc: "Не скрываем происхождение молекул и не создаём искусственных легенд" },
  { icon: Package, title: "Простая упаковка", desc: "Техническая маркировка, крафт-коробка, информация для исследователя" },
  { icon: FileText, title: "Документация", desc: "CoA, данные о чистоте, batch-информация при наличии" },
  { icon: BarChart3, title: "Рациональная цена", desc: "Прямой источник — минимум посредников, понятная логика ценообразования" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-medium text-primary tracking-wide uppercase mb-3 block">О компании</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6" style={{ fontFamily: "'Manrope', sans-serif" }}>
              UGS LAB
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                UGS LAB — понятный поставщик исследовательских пептидов, работающий с китайской производственной цепочкой.
              </p>
              <p>
                Мы не прячем происхождение молекул и не создаём искусственную легенду. Показываем источник, упаковку, маркировку, каталог и логику цены.
              </p>
              <p>
                Наша задача — сделать исследовательские молекулы понятными и доступными. Прямой контакт с производствами, проверка документации, контроль каждой партии.
              </p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-5 rounded-lg border border-border bg-card"
              >
                <v.icon className="w-5 h-5 text-primary mb-3" />
                <h3 className="text-sm font-semibold text-foreground mb-1.5" style={{ fontFamily: "'Manrope', sans-serif" }}>
                  {v.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
