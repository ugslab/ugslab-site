/**
 * Catalog Section
 * Design: «Научная Элегантность» — секция с молекулярным паттерном на фоне,
 * нумерация секции, сетка карточек продукции.
 */
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { products } from "@/lib/products";

const VIALS_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663487132888/e8adGwpKRAAUmjUuR8zksC/peptide-vials-cGKfMHdTvkyBswcVygbWnD.webp";

export default function CatalogSection() {
  return (
    <section id="catalog" className="relative py-24 sm:py-32">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

      <div className="container relative z-10">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="text-6xl sm:text-7xl font-heading font-extrabold text-primary/10 leading-none select-none">
                01
              </span>
              <div className="w-12 h-px bg-primary/40" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground tracking-tight"
            >
              Каталог продукции
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-muted-foreground mt-3 max-w-xl"
            >
              Высокоочищенные пептиды для исследовательских целей.
              Каждая партия проходит строгий контроль качества.
            </motion.p>
          </div>

          {/* Decorative image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block w-64 h-36 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={VIALS_IMG}
              alt="Пептидные флаконы"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-xs text-muted-foreground/60 mt-10 text-center max-w-2xl mx-auto leading-relaxed"
        >
          Все продукты предназначены исключительно для исследовательских целей (Research use only).
          Не предназначены для применения на людях или животных.
        </motion.p>
      </div>
    </section>
  );
}
