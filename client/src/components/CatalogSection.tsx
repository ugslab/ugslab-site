import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "./ProductCard";
import { products, categories } from "@/lib/products";

export default function CatalogSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.categoryId === activeCategory);

  const activeInfo = categories.find((c) => c.id === activeCategory);

  return (
    <section id="catalog" className="py-20 lg:py-28 bg-secondary/30">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="text-xs font-medium text-primary tracking-wide uppercase mb-3 block">
            Каталог
          </span>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            Каталог продукции
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            {products.length} позиций в {categories.length - 1} категориях. Все молекулы — Research Use Only.
          </p>
        </motion.div>

        {/* Category filters */}
        <div className="mb-8 overflow-x-auto pb-2 -mx-4 px-4">
          <div className="flex gap-2 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md border transition-all whitespace-nowrap ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-muted-foreground border-border hover:border-primary/30 hover:text-foreground"
                }`}
              >
                {cat.shortName}
                {cat.id !== "all" && (
                  <span className="ml-1.5 opacity-60">
                    {products.filter((p) => p.categoryId === cat.id).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Category description */}
        {activeInfo && activeInfo.description && (
          <motion.p
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-muted-foreground mb-8 max-w-2xl"
          >
            {activeInfo.description}
          </motion.p>
        )}

        {/* Products grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {filteredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground mb-4">
            Не нашли нужную молекулу? Напишите — подберём или привезём под заказ.
          </p>
          <a
            href="https://t.me/ugslab"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium border border-primary text-primary rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Запросить в Telegram
          </a>
        </motion.div>

        {/* Disclaimer */}
        <p className="text-[10px] text-muted-foreground/50 mt-8 text-center max-w-xl mx-auto">
          Все продукты предназначены исключительно для исследовательских целей. Не предназначены для применения на людях или животных.
        </p>
      </div>
    </section>
  );
}
