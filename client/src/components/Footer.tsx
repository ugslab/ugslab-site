export default function Footer() {
  return (
    <footer className="py-10 bg-[#0f0f1a] text-white/50">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
          <div>
            <span className="text-lg font-bold text-white tracking-tight" style={{ fontFamily: "'Manrope', sans-serif" }}>
              UGS <span className="font-light">LAB</span>
            </span>
            <span className="block w-5 h-[2px] bg-primary rounded-full mt-1.5" />
          </div>
          <a
            href="https://t.me/ugslab"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/60 hover:text-primary transition-colors"
          >
            t.me/ugslab
          </a>
        </div>

        <div className="border-t border-white/10 pt-6">
          <p className="text-xs text-white/40 leading-relaxed max-w-3xl">
            <span className="font-semibold text-white/50">Research Use Only.</span> Вся продукция UGS LAB предназначена исключительно для исследовательских и лабораторных целей. Не предназначена для применения человеком или животными. Не является лекарственным средством, БАД или медицинским изделием.
          </p>
          <p className="text-xs text-white/30 mt-4">
            &copy; {new Date().getFullYear()} UGS LAB. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
