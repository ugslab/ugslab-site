import { useLang } from "@/contexts/LanguageContext";
import { t } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactsSection() {
  const { lang } = useLang();

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Manrope', sans-serif" }}>
              {t(lang, "contacts.title")}
            </h2>
            <p className="text-gray-500 leading-relaxed mb-10">
              {t(lang, "contacts.text")}
            </p>

            <a
              href="https://t.me/ugslab"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-colors text-base"
            >
              <Send className="w-5 h-5" />
              {t(lang, "contacts.button")}
            </a>

            <p className="text-xs text-gray-400 mt-6">
              t.me/ugslab
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
