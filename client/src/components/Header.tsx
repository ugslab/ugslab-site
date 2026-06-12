import { useState, useEffect } from "react";
import { Send, Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Почему Китай", href: "#why-china" },
    { label: "Как мы работаем", href: "#how-we-work" },
    { label: "Каталог", href: "#catalog" },
    { label: "О компании", href: "#about" },
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
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 lg:h-18">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-1">
          <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${scrolled ? 'text-foreground' : 'text-white'}`} style={{ fontFamily: "'Manrope', sans-serif" }}>
            UGS <span className="font-light">LAB</span>
          </span>
          <span className="block w-5 h-[2px] bg-primary rounded-full ml-1.5" />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
              className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${
                scrolled ? "text-foreground/70" : "text-white/80"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://t.me/ugslab"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:bg-primary/90 transition-colors"
          >
            <Send className="w-3.5 h-3.5" />
            Telegram
          </a>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 transition-colors ${scrolled ? 'text-foreground' : 'text-white'}`}
          aria-label="Меню"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-lg">
          <nav className="container py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                className="text-sm font-medium text-foreground/70 hover:text-primary py-2 border-b border-border/50 last:border-0"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://t.me/ugslab"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-md mt-2"
            >
              <Send className="w-3.5 h-3.5" />
              Написать в Telegram
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
