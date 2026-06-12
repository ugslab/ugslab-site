import { motion } from "framer-motion";
import { Send, Thermometer, FlaskConical } from "lucide-react";
import type { Product } from "@/lib/products";
import type { Lang } from "@/lib/i18n";

interface ProductCardProps {
  product: Product;
  index: number;
  lang: Lang;
}

export default function ProductCard({ product, index, lang }: ProductCardProps) {
  const requestText = lang === "en" ? "Request price & availability" : "Запросить прайс и наличие";
  const coaText = lang === "en" ? "Request CoA" : "Запросить CoA";

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.25, delay: index * 0.03 }}
      className="group relative flex flex-col p-5 rounded-xl border border-gray-100 bg-white hover:border-indigo-200 hover:shadow-md transition-all duration-300"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-5 right-5 h-[2px] bg-indigo-100 group-hover:bg-indigo-400 transition-colors rounded-full" />

      {/* Header */}
      <div className="mb-3 pt-2">
        <h3 className="text-sm font-bold text-gray-900 tracking-tight" style={{ fontFamily: "'Manrope', sans-serif" }}>
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mt-1.5">
          <span className="text-xs font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
            {product.dosage}
          </span>
          <span className="text-[10px] text-gray-400 uppercase tracking-wide">
            {product.form}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-xs text-gray-500 leading-relaxed flex-1 mb-3">
        {product.description}
      </p>

      {/* Research Areas */}
      <p className="text-[10px] text-gray-400 mb-4">
        <span className="font-medium">{lang === "en" ? "Research:" : "Исследования:"}</span> {product.researchAreas}
      </p>

      {/* Meta */}
      <div className="flex items-center gap-3 mb-4 text-[10px] text-gray-400">
        <span className="flex items-center gap-1">
          <Thermometer className="w-3 h-3" />
          {product.storage}
        </span>
        <span className="flex items-center gap-1">
          <FlaskConical className="w-3 h-3" />
          Research Use Only
        </span>
      </div>

      {/* Actions */}
      <div className="flex gap-2 mt-auto">
        <a
          href="https://t.me/ugslab"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <Send className="w-3 h-3" />
          {requestText}
        </a>
        <a
          href="https://t.me/ugslab"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center px-3 py-2 text-xs font-medium border border-gray-200 text-gray-500 rounded-lg hover:border-indigo-300 hover:text-indigo-600 transition-colors"
        >
          {coaText}
        </a>
      </div>
    </motion.div>
  );
}
