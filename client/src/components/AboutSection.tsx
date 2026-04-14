/**
 * About Section
 * Design: «Научная Элегантность» — асимметричная компоновка: текст слева,
 * изображение лаборатории справа. Нумерация секции. Ключевые метрики.
 */
import { motion } from "framer-motion";
import { ShieldCheck, Microscope, FlaskRound, Award } from "lucide-react";

const LAB_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663487132888/e8adGwpKRAAUmjUuR8zksC/about-lab-QSHv69BKsVtsq5qbmaFwvt.webp";

const features = [
  {
    icon: ShieldCheck,
    title: "Контроль качества",
    desc: "Каждая партия проходит HPLC-анализ с подтверждением чистоты ≥98%",
  },
  {
    icon: Microscope,
    title: "Для исследований",
    desc: "Продукция предназначена исключительно для научных и лабораторных целей",
  },
  {
    icon: FlaskRound,
    title: "Лиофилизация",
    desc: "Пептиды поставляются в лиофилизированной форме для максимальной стабильности",
  },
  {
    icon: Award,
    title: "Документация",
    desc: "Сертификат анализа (CoA) прилагается к каждому продукту",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="container relative z-10">
        {/* Section number */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-6xl sm:text-7xl font-heading font-extrabold text-primary/10 leading-none select-none">
            02
          </span>
          <div className="w-12 h-px bg-primary/40" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground tracking-tight mb-6"
            >
              О компании
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4 mb-10"
            >
              <p className="text-base sm:text-lg text-foreground/70 leading-relaxed">
                <strong className="text-foreground font-semibold">UGS LAB</strong> — специализированный
                поставщик пептидов исследовательского класса. Мы обеспечиваем научные лаборатории
                и исследовательские учреждения высокоочищенными соединениями для проведения
                экспериментальных работ.
              </p>
              <p className="text-base sm:text-lg text-foreground/70 leading-relaxed">
                Наша миссия — предоставить исследователям доступ к качественным пептидам
                с полной документацией и прозрачным контролем качества. Каждый продукт
                сопровождается сертификатом анализа и данными HPLC.
              </p>
            </motion.div>

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="flex gap-3 p-4 rounded-lg bg-muted/50 border border-border/50 hover:border-primary/20 hover:bg-primary/3 transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                    <f.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-0.5">
                      {f.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-primary/10">
              <img
                src={LAB_IMG}
                alt="Современная исследовательская лаборатория"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a]/30 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary/20 rounded-xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-primary/10 rounded-lg -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
