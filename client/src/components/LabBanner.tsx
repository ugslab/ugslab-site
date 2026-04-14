/**
 * Lab Banner — промежуточная секция между каталогом и «О компании».
 * Полноширинное изображение с текстом поверх.
 */
import { motion } from "framer-motion";

const LAB_RESEARCH_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663487132888/e8adGwpKRAAUmjUuR8zksC/lab-research-H57aqtyJpUvYHXb3hJ5iHj.webp";

export default function LabBanner() {
  return (
    <section className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
      <img
        src={LAB_RESEARCH_IMG}
        alt="Исследовательская работа в лаборатории"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a1a]/80 via-[#0a0a1a]/50 to-transparent" />

      <div className="absolute inset-0 flex items-center">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-lg"
          >
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-primary/80 font-medium mb-2">
              Research Grade
            </p>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white leading-tight mb-3">
              Чистота и точность в каждом флаконе
            </h3>
            <p className="text-sm sm:text-base text-white/50 leading-relaxed">
              HPLC-анализ ≥98% | Лиофилизированная форма | Сертификат анализа
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
