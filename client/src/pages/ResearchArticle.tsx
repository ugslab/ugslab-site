import { useParams, Link } from "wouter";
import { getArticleBySlug } from "@/lib/articles";
import { ArrowLeft, Send } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { useEffect } from "react";
import { useSEO } from "@/hooks/useSEO";
import { articleSEO } from "@/lib/seo";

// Simple markdown to HTML renderer
function renderMarkdown(md: string): string {
  let html = md;

  // Remove the title (first # heading) since we render it separately
  html = html.replace(/^# .+\n/, "");

  // Remove "## Ключевые эффекты" section (we show it separately)
  html = html.replace(/## Ключевые эффекты\n(- .+\n)+\n?/, "");

  // Headers
  html = html.replace(/^### (.+)$/gm, '<h3 class="text-lg font-bold text-gray-900 mt-8 mb-3" style="font-family: \'Manrope\', sans-serif">$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100" style="font-family: \'Manrope\', sans-serif">$1</h2>');

  // Bold
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-gray-800">$1</strong>');

  // Links - PubMed and others
  html = html.replace(/\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-indigo-600 hover:text-indigo-800 underline underline-offset-2">$1</a>');

  // Unordered lists
  html = html.replace(/^- (.+)$/gm, '<li class="text-gray-600 leading-relaxed pl-1">$1</li>');
  html = html.replace(/(<li[^>]*>.*<\/li>\n?)+/g, (match) => `<ul class="list-disc list-outside ml-5 space-y-1.5 my-3">${match}</ul>`);

  // Ordered lists
  html = html.replace(/^\d+\. (.+)$/gm, '<li class="text-gray-600 leading-relaxed pl-1">$1</li>');

  // Paragraphs - wrap remaining text lines
  html = html.replace(/^(?!<[hulo]|<li|<a|<strong)(.+)$/gm, (match) => {
    if (match.trim() === "") return "";
    return `<p class="text-gray-600 leading-relaxed my-3">${match}</p>`;
  });

  // Clean up empty lines
  html = html.replace(/\n{3,}/g, "\n\n");

  return html;
}

export default function ResearchArticle() {
  const params = useParams<{ slug: string }>();
  const { lang } = useLang();
  const article = getArticleBySlug(params.slug || "");
  const slug = params.slug || "";
  const seoData = articleSEO[slug];

  useSEO({
    title: seoData?.title || (article ? `${article.moleculeName} — обзор исследований | UGS LAB` : "UGS LAB"),
    description:
      seoData?.description ||
      (article
        ? `Научный обзор ${article.moleculeName}: механизм действия, результаты исследований, ссылки на PubMed.`
        : "Каталог исследовательских пептидов UGS LAB."),
    canonical: `/research/${slug}`,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params.slug]);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Manrope', sans-serif" }}>
            {lang === "en" ? "Article not found" : "Статья не найдена"}
          </h1>
          <Link href="/#catalog" className="text-indigo-600 hover:text-indigo-800 underline">
            {lang === "en" ? "Back to catalog" : "Вернуться в каталог"}
          </Link>
        </div>
      </div>
    );
  }

  const articleHtml = renderMarkdown(article.markdown);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/#catalog" className="flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            {lang === "en" ? "Catalog" : "Каталог"}
          </Link>
          <span className="text-xs text-gray-400 uppercase tracking-wider" style={{ fontFamily: "'Manrope', sans-serif" }}>
            UGS LAB — Research
          </span>
        </div>
      </header>

      {/* Article Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Manrope', sans-serif" }}>
          {article.moleculeName} — {lang === "en" ? "research overview" : "обзор исследований"}
        </h1>

        {/* Key Effects Card */}
        <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 mb-10">
          <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4" style={{ fontFamily: "'Manrope', sans-serif" }}>
            {lang === "en" ? "Key Effects" : "Ключевые эффекты"}
          </h2>
          <ul className="space-y-2">
            {article.keyEffects.map((effect, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                {effect}
              </li>
            ))}
          </ul>
        </div>

        {/* Article Body */}
        <article
          className="prose-custom"
          dangerouslySetInnerHTML={{ __html: articleHtml }}
        />

        {/* CTA */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900" style={{ fontFamily: "'Manrope', sans-serif" }}>
                {lang === "en" ? `Interested in ${article.moleculeName}?` : `Интересует ${article.moleculeName}?`}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {lang === "en" ? "Request price, availability, and CoA" : "Запросите прайс, наличие и CoA"}
              </p>
            </div>
            <a
              href="https://t.me/ugslabstore_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Send className="w-4 h-4" />
              {lang === "en" ? "Contact in Telegram" : "Написать в Telegram"}
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-100">
          <p className="text-[10px] text-gray-400 leading-relaxed">
            {lang === "en"
              ? "This material is provided for informational and research purposes only. UGS LAB does not make medical claims. All products are intended exclusively for in-vitro research. Consult qualified specialists before any use."
              : "Материал предоставлен исключительно в информационных и исследовательских целях. UGS LAB не делает медицинских заявлений. Все продукты предназначены исключительно для исследований in vitro. Перед любым применением проконсультируйтесь с квалифицированными специалистами."}
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 mt-16 py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs text-gray-400">© 2024–2026 UGS LAB · Research Use Only</p>
        </div>
      </footer>
    </div>
  );
}
