import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "./ProductCard";
import { products, categories, type Product } from "@/lib/products";
import { useLang } from "@/contexts/LanguageContext";
import { t } from "@/lib/i18n";
import { ArrowLeft, Grid3X3, Search } from "lucide-react";

interface CatalogSectionProps {
  externalSearch?: string;
}

export default function CatalogSection({ externalSearch }: CatalogSectionProps) {
  const { lang } = useLang();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[] | null>(null);

  // Handle external search from Hero
  useEffect(() => {
    if (externalSearch) {
      setSearchQuery(externalSearch);
      performSearch(externalSearch);
    }
  }, [externalSearch]);

  const performSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults(null);
      return;
    }
    const q = query.toLowerCase().trim();
    const results = products.filter((p) => {
      const fields = [
        p.name,
        p.dosage,
        p.description,
        p.researchAreas,
        p.category,
        ...p.searchTags,
      ].map((s) => s.toLowerCase());
      return fields.some((f) => f.includes(q));
    });
    setSearchResults(results);
    setActiveCategory(null);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    performSearch(value);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults(null);
  };

  const productsInCategory = activeCategory
    ? products.filter((p) => p.categoryId === activeCategory)
    : [];

  const activeCategoryInfo = categories.find((c) => c.id === activeCategory);

  return (
    <section id="catalog" className="py-20 lg:py-28 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-10">
          <h2
            className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            {t(lang, "catalog.title")}
          </h2>
          <p className="text-gray-500 text-sm">
            {products.length} {lang === "en" ? "molecules" : "молекул"} · {categories.length} {lang === "en" ? "categories" : "категорий"} · Research Use Only
          </p>
        </div>

        {/* Search within catalog */}
        <div className="relative max-w-md mb-8">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder={t(lang, "hero.searchPlaceholder")}
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-300 transition-all"
          />
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          )}
        </div>

        {/* Search Results */}
        {searchResults !== null ? (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <button
                onClick={clearSearch}
                className="text-sm text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                {t(lang, "catalog.backToCatalog")}
              </button>
              <span className="text-sm text-gray-400">
                {searchResults.length} {lang === "en" ? "results" : "результатов"}
              </span>
            </div>
            {searchResults.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {searchResults.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} lang={lang} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 text-gray-400">
                <Search className="w-8 h-8 mx-auto mb-3 opacity-50" />
                <p className="text-sm">{t(lang, "catalog.noResults")}</p>
              </div>
            )}
          </div>
        ) : activeCategory ? (
          /* Category products view */
          <div>
            <div className="flex items-center gap-3 mb-6">
              <button
                onClick={() => setActiveCategory(null)}
                className="text-sm text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                {t(lang, "catalog.backToCatalog")}
              </button>
              {activeCategoryInfo && (
                <span className="text-sm text-gray-500">
                  {lang === "en" ? activeCategoryInfo.nameEn : activeCategoryInfo.name}
                </span>
              )}
            </div>
            {activeCategoryInfo && (
              <p className="text-sm text-gray-500 mb-6 max-w-2xl">
                {lang === "en" ? activeCategoryInfo.descriptionEn : activeCategoryInfo.description}
              </p>
            )}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
              >
                {productsInCategory.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} lang={lang} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        ) : (
          /* Category cards grid */
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {categories.map((cat, i) => {
              const count = products.filter((p) => p.categoryId === cat.id).length;
              return (
                <motion.button
                  key={cat.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  onClick={() => setActiveCategory(cat.id)}
                  className="group text-left p-5 bg-white border border-gray-100 rounded-xl hover:border-indigo-200 hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <Grid3X3 className="w-5 h-5 text-indigo-500 opacity-70 group-hover:opacity-100 transition-opacity" />
                    <span className="text-xs font-medium text-gray-400 bg-gray-50 px-2 py-0.5 rounded">
                      {count}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1.5 group-hover:text-indigo-700 transition-colors">
                    {lang === "en" ? cat.nameEn : cat.name}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {lang === "en" ? cat.descriptionEn : cat.description}
                  </p>
                </motion.button>
              );
            })}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-sm text-gray-500 mb-4">
            {lang === "en"
              ? "Can't find the molecule you need? Write to us — we'll find or order it."
              : "Не нашли нужную молекулу? Напишите — подберём или привезём под заказ."}
          </p>
          <a
            href="https://t.me/ugslab"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors"
          >
            {lang === "en" ? "Request in Telegram" : "Запросить в Telegram"}
          </a>
        </div>
      </div>
    </section>
  );
}
