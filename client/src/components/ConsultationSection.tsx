/**
 * ConsultationSection
 * Design: «Научная Элегантность» — светлый фон с фиолетовым акцентом,
 * карточка с иконкой врача, три кнопки мессенджеров.
 */
import { motion } from "framer-motion";
import { Stethoscope, MessageCircle, Send } from "lucide-react";

// Instagram SVG icon (lucide не имеет Instagram)
const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

// WhatsApp SVG icon
const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12 },
  }),
};

export default function ConsultationSection() {
  return (
    <section id="consultation" className="py-24 bg-white">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          variants={fadeUp}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-8 h-0.5 bg-primary" />
            <span className="text-sm font-semibold tracking-widest uppercase text-primary">
              Специалист
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-foreground leading-tight">
            Консультация эндокринолога
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Получите профессиональную консультацию по применению пептидов
            в исследовательских и медицинских целях. Наш специалист ответит
            на ваши вопросы в удобном мессенджере.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          custom={1}
          variants={fadeUp}
          className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-[#f5f3ff] via-white to-[#ede9fe] p-8 sm:p-12 shadow-sm"
        >
          {/* Decorative purple stripe */}
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary rounded-l-2xl" />

          <div className="flex flex-col lg:flex-row lg:items-center gap-10">
            {/* Icon + text */}
            <div className="flex-1">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                <Stethoscope size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                Задайте вопрос эндокринологу
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-lg">
                Консультации проводятся онлайн. Специалист поможет разобраться
                в механизмах действия пептидов, особенностях протоколов
                и интерпретации результатов исследований.
              </p>

              {/* Features list */}
              <ul className="mt-6 space-y-2">
                {[
                  "Индивидуальный подбор протоколов",
                  "Расшифровка лабораторных анализов",
                  "Ответы на вопросы по пептидам",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:min-w-[220px]">
              {/* Telegram */}
              <a
                href="https://t.me/ugslab"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl font-semibold text-white bg-[#229ED9] hover:bg-[#1a8ec4] transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <Send size={18} />
                Telegram
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/message/ugslab"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl font-semibold text-white bg-[#25D366] hover:bg-[#1db954] transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <WhatsAppIcon />
                WhatsApp
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/ugslab"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-90 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <InstagramIcon />
                Instagram
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
