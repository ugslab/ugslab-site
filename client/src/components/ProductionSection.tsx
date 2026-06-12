import { motion } from "framer-motion";
import { Camera, Video } from "lucide-react";

const PRODUCTION_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663487132888/e8adGwpKRAAUmjUuR8zksC/china-production-RwFmTRcvydaq7Bscr3hgvF.webp";

export default function ProductionSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-medium text-primary tracking-wide uppercase mb-3 block">Производство</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "'Manrope', sans-serif" }}>
            Регулярно посещаем производства и выставки
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Контролируем качество на месте. Фото- и видеоматериалы с производств будут доступны в этом разделе.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative max-w-4xl mx-auto rounded-lg overflow-hidden border border-border"
        >
          <img src={PRODUCTION_IMG} alt="Производство" className="w-full h-auto object-cover aspect-video" />
          <div className="absolute inset-0 bg-[#0a0a1a]/30 flex items-center justify-center">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-md border border-white/20">
                <Camera className="w-4 h-4 text-white" />
                <span className="text-xs text-white font-medium">Фото</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-md border border-white/20">
                <Video className="w-4 h-4 text-white" />
                <span className="text-xs text-white font-medium">Видео — скоро</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
