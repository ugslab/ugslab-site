import { useLang } from "@/contexts/LanguageContext";
import { t } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Camera, Video } from "lucide-react";

const PRODUCTION_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663487132888/e8adGwpKRAAUmjUuR8zksC/china-production-RwFmTRcvydaq7Bscr3hgvF.webp";

export default function ProductionSection() {
  const { lang } = useLang();

  return (
    <section className="py-20 lg:py-28 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Manrope', sans-serif" }}>
            {t(lang, "production.title")}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm">
            {t(lang, "production.text")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative max-w-4xl mx-auto rounded-xl overflow-hidden border border-gray-100"
        >
          <img src={PRODUCTION_IMG} alt="Manufacturing" className="w-full h-auto object-cover aspect-video" />
          <div className="absolute inset-0 bg-gray-900/30 flex items-center justify-center">
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                  <Camera className="w-4 h-4 text-white" />
                  <span className="text-xs text-white font-medium">
                    {lang === "en" ? "Photos" : "Фото"}
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                  <Video className="w-4 h-4 text-white" />
                  <span className="text-xs text-white font-medium">
                    {lang === "en" ? "Video — coming soon" : "Видео — скоро"}
                  </span>
                </div>
              </div>
              <p className="text-xs text-white/70 max-w-sm mx-auto">
                {t(lang, "production.placeholder")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
