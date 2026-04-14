/**
 * Contacts Section
 * Design: «Научная Элегантность» — тёмный фон с фиолетовым градиентом,
 * контактные данные и кнопки мессенджеров.
 */
import { motion } from "framer-motion";
import { MessageCircle, Send, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const TELEGRAM_LINK = "https://t.me/ugslab";
const WHATSAPP_LINK = "https://wa.me/message/ugslab";

export default function ContactsSection() {
  return (
    <section id="contacts" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-[#0f0f1a]" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />

      <div className="container relative z-10">
        {/* Section number */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-6xl sm:text-7xl font-heading font-extrabold text-white/5 leading-none select-none">
            03
          </span>
          <div className="w-12 h-px bg-primary/40" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight mb-6"
            >
              Свяжитесь с нами
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-white/55 leading-relaxed mb-10 max-w-lg"
            >
              Для оформления заказа или получения консультации свяжитесь с нами
              через удобный мессенджер. Мы ответим в кратчайшие сроки.
            </motion.p>

            {/* Contact buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Button
                asChild
                size="lg"
                className="bg-[#0088cc] hover:bg-[#0088cc]/90 text-white font-semibold px-8 py-6 text-base rounded-lg shadow-lg shadow-[#0088cc]/25 transition-all duration-300"
              >
                <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer">
                  <Send size={18} className="mr-2" />
                  Написать в Telegram
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-[#25D366] hover:bg-[#25D366]/90 text-white font-semibold px-8 py-6 text-base rounded-lg shadow-lg shadow-[#25D366]/25 transition-all duration-300"
              >
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={18} className="mr-2" />
                  Написать в WhatsApp
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Right: Info cards */}
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-xl bg-white/5 border border-white/8 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center">
                  <Send size={18} className="text-primary" />
                </div>
                <h3 className="text-base font-semibold text-white">Telegram</h3>
              </div>
              <p className="text-sm text-white/50 leading-relaxed">
                Основной канал связи для быстрого оформления заказов и консультаций.
                Ответ в течение 30 минут в рабочее время.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 rounded-xl bg-white/5 border border-white/8 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center">
                  <MessageCircle size={18} className="text-primary" />
                </div>
                <h3 className="text-base font-semibold text-white">WhatsApp</h3>
              </div>
              <p className="text-sm text-white/50 leading-relaxed">
                Альтернативный канал связи. Удобен для отправки документов
                и обсуждения деталей заказа.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="p-6 rounded-xl bg-white/5 border border-white/8 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center">
                  <Clock size={18} className="text-primary" />
                </div>
                <h3 className="text-base font-semibold text-white">Время работы</h3>
              </div>
              <p className="text-sm text-white/50 leading-relaxed">
                Пн — Пт: 09:00 — 18:00 (МСК)<br />
                Сб — Вс: по предварительной договорённости
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
