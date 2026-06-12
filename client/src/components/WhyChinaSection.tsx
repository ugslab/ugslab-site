import { motion } from "framer-motion";
import { Factory, Route, FlaskConical, DollarSign } from "lucide-react";

const CHINA_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663487132888/e8adGwpKRAAUmjUuR8zksC/china-production-RwFmTRcvydaq7Bscr3hgvF.webp";

const points = [
  {
    icon: Factory,
    title: "Производственная база мирового рынка",
    text: "Китай — реальный источник большинства исследовательских пептидов. Каждый завод специализируется на определённых молекулах.",
  },
  {
    icon: Route,
    title: "Прямой доступ без посредников",
    text: "Мы работаем напрямую с производствами, минуя цепочку дистрибьюторов и реселлеров.",
  },
  {
    icon: FlaskConical,
    title: "Специализация и экспертиза",
    text: "Каждое производство фокусируется на узком спектре молекул, что обеспечивает стабильность и чистоту.",
  },
  {
    icon: DollarSign,
    title: "Рациональная цена",
    text: "Меньше посредников — ниже наценка. Доступная цена без компромисса по качеству сырья.",
  },
];

export default function WhyChinaSection() {
  return (
    <section id="why-china" className="py-20 lg:py-28 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-xs font-medium text-primary tracking-wide uppercase mb-3 block">Прозрачность</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "'Manrope', sans-serif" }}>
            Почему Китай
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            Китай — это реальная производственная база рынка пептидов. Мы не маскируем этот факт, а делаем его частью прозрачной модели: прямой источник, широкий ассортимент, понятная логистика.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid sm:grid-cols-2 gap-6">
            {points.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-5 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors"
              >
                <point.icon className="w-5 h-5 text-primary mb-3" />
                <h3 className="text-sm font-semibold text-foreground mb-2" style={{ fontFamily: "'Manrope', sans-serif" }}>
                  {point.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{point.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-lg overflow-hidden border border-border shadow-sm"
          >
            <img src={CHINA_IMG} alt="Производство пептидов" className="w-full h-auto object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
