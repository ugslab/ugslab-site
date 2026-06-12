import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactsSection() {
  return (
    <section id="contacts" className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-medium text-primary tracking-wide uppercase mb-3 block">Контакты</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "'Manrope', sans-serif" }}>
              Свяжитесь с нами
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Для заказа, уточнения наличия или запроса документации — напишите в Telegram. Отвечаем оперативно.
            </p>

            <a
              href="https://t.me/ugslab"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors text-base"
            >
              <Send className="w-5 h-5" />
              t.me/ugslab
            </a>

            <p className="text-xs text-muted-foreground mt-6">
              Telegram — единственный канал связи с UGS LAB
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
