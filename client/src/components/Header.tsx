/**
 * Header / Navigation
 * Design: «Научная Элегантность» — фиксированная навигация.
 * На hero (не скролл): белый текст на прозрачном фоне.
 * При скролле: белый фон, тёмный текст.
 */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Главная", href: "#hero" },
    { label: "Каталог", href: "#catalog" },
    { label: "О компании", href: "#about" },
    { label: "Консультация", href: "#consultation" },
    { label: "Контакты", href: "#contacts" },
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
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_oklch(0.91_0.008_290)]"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#hero");
          }}
          className="flex items-center gap-1 group"
        >
          <span
            className={`text-xl md:text-2xl font-heading font-extrabold tracking-tight transition-colors duration-300 ${
              scrolled ? "text-foreground" : "text-white"
            }`}
          >
            UGS
          </span>
          <span
            className={`text-xl md:text-2xl font-heading font-normal tracking-tight transition-colors duration-300 ${
              scrolled ? "text-foreground/70" : "text-white/70"
            }`}
          >
            LAB
          </span>
          <span className="block w-6 h-[3px] bg-primary rounded-full ml-1 group-hover:w-8 transition-all duration-300" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(item.href);
              }}
              className={`text-sm font-medium transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${
                scrolled
                  ? "text-foreground/60 hover:text-primary"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 transition-colors ${
            scrolled ? "text-foreground/70 hover:text-primary" : "text-white/70 hover:text-white"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Меню"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className={`md:hidden backdrop-blur-lg border-t ${
          scrolled
            ? "bg-white/98 border-border"
            : "bg-[#0a0a1a]/95 border-white/10"
        }`}>
          <nav className="container py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item.href);
                }}
                className={`text-base font-medium py-2 border-b last:border-0 transition-colors ${
                  scrolled
                    ? "text-foreground/70 hover:text-primary border-border/50"
                    : "text-white/70 hover:text-white border-white/10"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
