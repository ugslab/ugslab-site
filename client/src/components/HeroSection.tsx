import { useState, useEffect, useRef } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { t } from "@/lib/i18n";
import { Search, ArrowDown } from "lucide-react";

const searchExamples = [
  "Semaglutide",
  "BPC-157",
  "похудение",
  "Tirzepatide",
  "суставы",
  "Selank",
  "сон",
  "Epitalon",
  "Оземпик",
  "GHK-Cu",
  "Монжаро",
  "тревожность",
  "TB-500",
  "рост мышц",
];

interface HeroSectionProps {
  onSearch: (query: string) => void;
}

export default function HeroSection({ onSearch }: HeroSectionProps) {
  const { lang } = useLang();
  const [placeholder, setPlaceholder] = useState("");
  const [exampleIndex, setExampleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Animated placeholder typing effect
  useEffect(() => {
    const currentExample = searchExamples[exampleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentExample.length) {
          setPlaceholder(currentExample.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (charIndex > 0) {
          setPlaceholder(currentExample.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setExampleIndex((exampleIndex + 1) % searchExamples.length);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, exampleIndex]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      onSearch(searchValue.trim());
      const catalogEl = document.querySelector("#catalog");
      if (catalogEl) catalogEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white pt-16">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full text-xs font-medium text-indigo-700 mb-8">
          <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse" />
          Research Grade Peptides
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6" style={{ fontFamily: "'Manrope', sans-serif" }}>
          {t(lang, "hero.headline")}
        </h1>

        {/* Search Bar */}
        <form onSubmit={handleSubmit} className="relative max-w-2xl mx-auto mt-10">
          <div className="relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              ref={inputRef}
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder={placeholder}
              className="w-full pl-14 pr-32 py-5 text-lg bg-white border border-gray-200 rounded-2xl shadow-lg shadow-gray-100/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-300 transition-all placeholder:text-gray-400"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 px-5 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-xl hover:bg-indigo-700 transition-colors"
            >
              {lang === "en" ? "Search" : "Найти"}
            </button>
          </div>
        </form>

        {/* Scroll hint */}
        <div className="mt-16 flex flex-col items-center gap-2 text-gray-400">
          <span className="text-xs font-medium">{t(lang, "hero.browseCatalog")}</span>
          <a href="#catalog" onClick={(e) => { e.preventDefault(); document.querySelector("#catalog")?.scrollIntoView({ behavior: "smooth" }); }}>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
