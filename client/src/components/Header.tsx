import { useState, useEffect } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { t, type Lang } from "@/lib/i18n";
import { Menu, X, Send } from "lucide-react";

export default function Header() {
  const { lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: t(lang, "nav.catalog"), href: "#catalog" },
    { label: t(lang, "nav.about"), href: "#about" },
    { label: t(lang, "nav.contact"), href: "#contact" },
  ];

  const languages: { code: Lang; label: string; disabled?: boolean }[] = [
    { code: "ru", label: "RU" },
    { code: "en", label: "EN" },
    { code: "kz", label: "KZ", disabled: true },
  ];

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-2">
            <span className={`text-xl font-bold tracking-tight transition-colors ${scrolled ? "text-gray-900" : "text-gray-900"}`} style={{ fontFamily: "'Manrope', sans-serif" }}>
              UGS <span className="font-light">LAB</span>
            </span>
            <span className="block w-5 h-[2px] bg-indigo-600 rounded-full" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                className={`text-sm font-medium transition-colors hover:text-indigo-600 ${scrolled ? "text-gray-600" : "text-gray-700"}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right side: Language switcher + Telegram */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center gap-0.5 text-xs font-medium border border-gray-200 rounded-md overflow-hidden">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => !l.disabled && setLang(l.code)}
                  disabled={l.disabled}
                  className={`px-2.5 py-1.5 transition-colors ${
                    lang === l.code
                      ? "bg-indigo-600 text-white"
                      : l.disabled
                      ? "text-gray-300 cursor-not-allowed bg-gray-50"
                      : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                  title={l.disabled ? "Скоро" : undefined}
                >
                  {l.label}
                </button>
              ))}
            </div>

            {/* Telegram Button */}
            <a
              href="https://t.me/ugslab"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              Telegram
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-600"
            aria-label="Меню"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                className="block text-sm font-medium text-gray-700 hover:text-indigo-600 py-2 border-b border-gray-50 last:border-0"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-1 pt-2 border-t border-gray-100">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => { if (!l.disabled) { setLang(l.code); setMobileOpen(false); } }}
                  disabled={l.disabled}
                  className={`px-2.5 py-1.5 rounded text-xs font-medium ${
                    lang === l.code
                      ? "bg-indigo-600 text-white"
                      : l.disabled
                      ? "text-gray-300"
                      : "text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
            <a
              href="https://t.me/ugslab"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-lg w-full justify-center"
            >
              <Send className="w-3.5 h-3.5" />
              Telegram
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
