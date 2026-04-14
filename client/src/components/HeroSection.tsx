/**
 * Hero Section
 * Design: «Научная Элегантность» — полноэкранная секция с тёмным градиентом,
 * молекулярным фоном и белым текстом. Фиолетовый CTA.
 */
import { motion } from "framer-motion";
import { ArrowDown, FlaskConical } from "lucide-react";
import { Button } from "@/components/ui/button";

const HERO_BG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663487132888/e8adGwpKRAAUmjUuR8zksC/hero-bg-45osWUWQs7HWu2UG4v5rRc.webp";

export default function HeroSection() {
  const scrollToCatalog = () => {
    const el = document.querySelector("#catalog");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a]/80 via-[#0a0a1a]/60 to-[#0a0a1a]/90" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white/80 text-sm font-medium">
              <FlaskConical size={14} className="text-purple-400" />
              Research Grade Peptides
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-heading font-extrabold text-white leading-[1.08] mb-6"
          >
            Пептиды для{" "}
            <span className="relative">
              <span className="relative z-10">научных</span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-primary/40 -z-0 rounded-sm" />
            </span>{" "}
            исследований
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="text-lg sm:text-xl text-white/65 leading-relaxed mb-10 max-w-2xl"
          >
            UGS LAB — поставщик высокоочищенных пептидов для исследовательских
            целей. Строгий контроль качества, документация и стабильность
            каждой партии.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              onClick={scrollToCatalog}
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-base rounded-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            >
              Каталог продукции
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const el = document.querySelector("#about");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-6 text-base rounded-lg transition-all duration-300"
            >
              О компании
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <button
          onClick={scrollToCatalog}
          className="flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
          aria-label="Прокрутить вниз"
        >
          <span className="text-xs tracking-widest uppercase">Каталог</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown size={18} />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
}
