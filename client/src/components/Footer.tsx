import { useLang } from "@/contexts/LanguageContext";
import { t } from "@/lib/i18n";

export default function Footer() {
  const { lang } = useLang();

  return (
    <footer className="py-10 bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
          <div>
            <span className="text-lg font-bold text-white tracking-tight" style={{ fontFamily: "'Manrope', sans-serif" }}>
              UGS <span className="font-light">LAB</span>
            </span>
            <span className="block w-5 h-[2px] bg-indigo-500 rounded-full mt-1.5" />
          </div>
          <a
            href="https://t.me/ugslab"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-indigo-400 transition-colors"
          >
            t.me/ugslab
          </a>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <p className="text-xs text-gray-500 leading-relaxed max-w-3xl">
            <span className="font-semibold text-gray-400">Research Use Only.</span>{" "}
            {t(lang, "footer.disclaimer")}
          </p>
          <p className="text-xs text-gray-600 mt-4">
            &copy; {new Date().getFullYear()} UGS LAB
          </p>
        </div>
      </div>
    </footer>
  );
}
