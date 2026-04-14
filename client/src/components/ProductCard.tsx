/**
 * Product Card
 * Design: «Научная Элегантность» — белая карточка с тонкой фиолетовой полосой сверху,
 * как на этикетках бренда. Hover — приподнятие + фиолетовая тень.
 */
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
  index: number;
}

const TELEGRAM_LINK = "https://t.me/+P5Vt_RUS1802ZmJi";
const WHATSAPP_LINK = "https://wa.me/message/ugslab";

export default function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative bg-white rounded-lg border border-border/80 overflow-hidden hover:shadow-xl hover:shadow-primary/8 transition-all duration-400 hover:-translate-y-1"
    >
      {/* Purple accent stripe — like the brand labels */}
      <div className="h-1 bg-gradient-to-r from-primary via-primary/80 to-primary/40" />

      <div className="p-6 sm:p-7">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-heading font-bold text-lg sm:text-xl text-foreground tracking-tight">
              {product.name}
            </h3>
            <div className="flex items-center gap-3 mt-1.5">
              <span className="text-sm font-semibold text-primary">
                {product.dosage}
              </span>
              <span className="text-xs text-muted-foreground px-2 py-0.5 bg-muted rounded-full">
                {product.type}
              </span>
            </div>
          </div>
          {/* Decorative vial icon */}
          <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center shrink-0">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-primary"
            >
              <path d="M9 3h6v3H9z" />
              <path d="M10 6v2l-4 8v1a3 3 0 003 3h6a3 3 0 003-3v-1l-4-8V6" />
              <path d="M7 15h10" />
            </svg>
          </div>
        </div>

        {/* Separator */}
        <div className="w-full h-px bg-border/60 mb-4" />

        {/* Description */}
        <p className="text-sm text-foreground/75 leading-relaxed mb-3">
          {product.description}
        </p>

        {/* Research use */}
        <div className="bg-muted/60 rounded-md p-3.5 mb-5">
          <p className="text-xs font-medium text-primary/80 uppercase tracking-wider mb-1.5">
            Область исследований
          </p>
          <p className="text-sm text-foreground/65 leading-relaxed">
            {product.researchUse}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-2">
          <Button
            asChild
            size="sm"
            className="flex-1 bg-primary hover:bg-primary/90 text-white font-medium text-sm rounded-md shadow-sm shadow-primary/15 hover:shadow-md hover:shadow-primary/20 transition-all duration-300"
          >
            <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1.5">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              Telegram
            </a>
          </Button>
          <Button
            asChild
            size="sm"
            variant="outline"
            className="flex-1 border-border hover:border-primary/30 hover:bg-primary/5 text-foreground/70 hover:text-primary font-medium text-sm rounded-md transition-all duration-300"
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1.5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
