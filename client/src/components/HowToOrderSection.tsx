import { motion } from "framer-motion";
import { Send, MessageCircle, Package } from "lucide-react";

const steps = [
  { icon: MessageCircle, num: "01", title: "Напишите в Telegram", desc: "Свяжитесь с нами, укажите интересующие позиции из каталога" },
  { icon: Package, num: "02", title: "Подтвердите заказ", desc: "Мы проверим наличие, уточним детали и согласуем доставку" },
  { icon: Send, num: "03", title: "Получите продукцию", desc: "Отправка в день подтверждения, с соблюдением условий хранения" },
];

export default function HowToOrderSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-medium text-primary tracking-wide uppercase mb-3 block">Заказ</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "'Manrope', sans-serif" }}>
            Как заказать
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Три простых шага — от запроса до получения продукции.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center p-6 rounded-lg bg-card border border-border"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-[10px] font-bold text-primary/60 tracking-wider">{step.num}</span>
              <h3 className="text-sm font-semibold text-foreground mt-1 mb-2" style={{ fontFamily: "'Manrope', sans-serif" }}>
                {step.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://t.me/ugslab"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors text-sm"
          >
            <Send className="w-4 h-4" />
            Написать в Telegram
          </a>
        </div>
      </div>
    </section>
  );
}
