/**
 * Footer
 * Design: «Научная Элегантность» — минималистичный футер с логотипом,
 * навигацией и дисклеймером.
 */

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0a0a14] border-t border-white/5">
      <div className="container py-12 sm:py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-1 mb-3">
              <span className="text-xl font-heading font-extrabold tracking-tight text-white">
                UGS
              </span>
              <span className="text-xl font-heading font-normal tracking-tight text-white/50">
                LAB
              </span>
              <span className="block w-5 h-[2px] bg-primary rounded-full ml-1" />
            </div>
            <p className="text-sm text-white/30 max-w-xs leading-relaxed">
              Пептиды исследовательского класса. Высокая чистота, полная документация.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-2">
            {[
              { label: "Главная", href: "#hero" },
              { label: "Каталог", href: "#catalog" },
              { label: "О компании", href: "#about" },
              { label: "Контакты", href: "#contacts" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item.href);
                }}
                className="text-sm text-white/40 hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Separator */}
        <div className="w-full h-px bg-white/8 my-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} UGS LAB. Все права защищены.
          </p>
          <p className="text-xs text-white/20 max-w-md leading-relaxed">
            Продукция предназначена исключительно для исследовательских целей.
            Не является лекарственным средством.
          </p>
        </div>
      </div>
    </footer>
  );
}
