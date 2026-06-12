import { motion } from "framer-motion";
import { Send, Thermometer, FlaskConical } from "lucide-react";
import type { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      className="group relative flex flex-col p-5 rounded-lg border border-border bg-card hover:border-primary/30 hover:shadow-sm transition-all duration-300"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-4 right-4 h-[2px] bg-primary/20 group-hover:bg-primary/50 transition-colors rounded-full" />

      {/* Header */}
      <div className="mb-3 pt-2">
        <h3 className="text-sm font-bold text-foreground tracking-tight" style={{ fontFamily: "'Manrope', sans-serif" }}>
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mt-1.5">
          <span className="text-xs font-semibold text-primary bg-primary/8 px-2 py-0.5 rounded">
            {product.dosage}
          </span>
          <span className="text-[10px] text-muted-foreground uppercase tracking-wide">
            {product.form}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-xs text-muted-foreground leading-relaxed flex-1 mb-4">
        {product.description}
      </p>

      {/* Meta */}
      <div className="flex items-center gap-3 mb-4 text-[10px] text-muted-foreground/70">
        <span className="flex items-center gap-1">
          <Thermometer className="w-3 h-3" />
          {product.storage}
        </span>
        <span className="flex items-center gap-1">
          <FlaskConical className="w-3 h-3" />
          Research Only
        </span>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <a
          href="https://t.me/ugslab"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
        >
          <Send className="w-3 h-3" />
          Заказать
        </a>
        <a
          href="https://t.me/ugslab"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium border border-border text-muted-foreground rounded hover:border-primary/30 hover:text-foreground transition-colors"
        >
          CoA
        </a>
      </div>
    </motion.div>
  );
}
