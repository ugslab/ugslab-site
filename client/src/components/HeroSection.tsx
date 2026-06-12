import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663487132888/e8adGwpKRAAUmjUuR8zksC/new-hero-lab-BqrjKpb5jMtKhMRugqRMZt.webp";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a1a]/85 via-[#0a0a1a]/70 to-[#0a0a1a]/40" />
      </div>

      <div className="container relative z-10 py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-md mb-8">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            <span className="text-xs font-medium text-white/70 tracking-wide uppercase">Research Grade Peptides</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6" style={{ fontFamily: "'Manrope', sans-serif" }}>
            Исследовательские пептиды из китайской производственной цепочки
          </h1>

          <p className="text-base lg:text-lg text-white/70 leading-relaxed mb-10 max-w-xl">
            Прямой источник, понятная логистика, доступная цена. Без посредников и искусственных наценок.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#catalog"
              onClick={(e) => { e.preventDefault(); document.querySelector('#catalog')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors text-sm"
            >
              Каталог продукции
              <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href="https://t.me/ugslab"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium rounded-md hover:bg-white/15 transition-colors text-sm"
            >
              Связаться в Telegram
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
