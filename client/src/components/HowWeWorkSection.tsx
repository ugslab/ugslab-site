import { motion } from "framer-motion";
import { Search, ShieldCheck, FileCheck, Package, Truck, Tag } from "lucide-react";

const steps = [
  { icon: Search, title: "Изучаем производства", desc: "Посещаем выставки и фабрики, оцениваем мощности и специализацию" },
  { icon: ShieldCheck, title: "Проверяем GMP", desc: "Оцениваем соответствие стандартам, документацию, условия производства" },
  { icon: FileCheck, title: "Оцениваем качество", desc: "Анализируем стабильность, чистоту, документацию на каждую партию" },
  { icon: Package, title: "Отбираем и привозим", desc: "Формируем каталог из проверенных позиций и организуем логистику" },
  { icon: Tag, title: "Адаптируем упаковку", desc: "Крафтовая коробка, белая этикетка, двуязычная маркировка CN+EN" },
  { icon: Truck, title: "Доставляем", desc: "Понятная логистика, наличие на складе, оперативная отправка" },
];

export default function HowWeWorkSection() {
  return (
    <section id="how-we-work" className="py-20 lg:py-28 bg-secondary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-xs font-medium text-primary tracking-wide uppercase mb-3 block">Процесс</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "'Manrope', sans-serif" }}>
            Как мы работаем
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            От производства в Китае до вашей лаборатории — каждый этап контролируется.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-muted-foreground/50 uppercase tracking-wider">Шаг {i + 1}</span>
                  <h3 className="text-sm font-semibold text-foreground mt-0.5 mb-1.5" style={{ fontFamily: "'Manrope', sans-serif" }}>
                    {step.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
