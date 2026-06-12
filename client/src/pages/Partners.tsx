import { Send } from "lucide-react";

export default function Partners() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-gray-900" style={{ fontFamily: "'Manrope', sans-serif" }}>
              UGS <span className="font-light">LAB</span>
            </span>
            <span className="block w-5 h-[2px] bg-indigo-600 rounded-full" />
          </a>
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
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full text-xs font-medium text-indigo-700 mb-6">
            合作伙伴
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Manrope', sans-serif" }}>
            合作邀请
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            UGS LAB 是一家面向独联体市场的研究肽目录平台。我们正在寻找可靠的中国多肽生产商和供应商建立长期合作关系。
          </p>
        </div>

        {/* What we're looking for */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">我们在寻找</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 shrink-0" />
              <span>具有GMP或ISO认证的多肽生产商</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 shrink-0" />
              <span>能够提供HPLC ≥98%纯度的产品</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 shrink-0" />
              <span>提供完整的COA文件（HPLC, MS）</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 shrink-0" />
              <span>稳定的供货能力和合理的MOQ</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 shrink-0" />
              <span>支持定制标签和包装</span>
            </li>
          </ul>
        </section>

        {/* Our categories */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">我们的产品方向</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              "GLP-1受体激动剂",
              "GHRH / GHRP 类",
              "修复与再生肽",
              "神经肽",
              "线粒体研究肽",
              "肌肉调节肽",
              "免疫调节肽",
              "皮肤/色素研究",
              "生殖/内分泌肽",
              "实验性分子",
              "小分子化合物",
              "抑菌水/辅料",
            ].map((cat) => (
              <div key={cat} className="px-3 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm text-gray-700">
                {cat}
              </div>
            ))}
          </div>
        </section>

        {/* What we offer */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">我们提供</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 shrink-0" />
              <span>稳定的订单量和长期合作</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 shrink-0" />
              <span>清晰的沟通和及时付款</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 shrink-0" />
              <span>独联体市场的分销渠道</span>
            </li>
          </ul>
        </section>

        {/* Contact */}
        <section className="p-6 bg-indigo-50 border border-indigo-100 rounded-xl">
          <h2 className="text-xl font-bold text-gray-900 mb-3">联系我们</h2>
          <p className="text-gray-600 mb-4">
            如果您有兴趣合作，请通过Telegram联系我们。我们会尽快回复。
          </p>
          <a
            href="https://t.me/ugslab"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Send className="w-4 h-4" />
            通过Telegram联系
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} UGS LAB · Research Use Only · All products are intended exclusively for research purposes.
          </p>
        </div>
      </footer>
    </div>
  );
}
