import React from 'react';
import { Feather, Layers, Maximize2, Sparkles } from 'lucide-react';
import { type ProductItem, getProductWhatsAppLink } from '../../data/catalogData';
import { WhatsAppIcon } from './FloatingWhatsApp';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';

interface ProductCatalogCardProps {
  product: ProductItem;
  variant?: 'grid' | 'highlight';
  staggerIndex?: number;
}

export const ProductCatalogCard: React.FC<ProductCatalogCardProps> = ({
  product,
  variant = 'grid',
  staggerIndex = 0,
}) => {
  const { ref, isVisible } = useRevealOnScroll<HTMLElement>(0.08);
  const whatsappHref = getProductWhatsAppLink(product.name);
  const transitionDelay = `${Math.min(staggerIndex * 90, 450)}ms`;

  if (variant === 'highlight') {
    return (
      <article
        ref={ref}
        style={{ transitionDelay }}
        className={`group bg-white rounded-[8px] border border-[#E8E0D4] hover:border-[#B49A70]/75 shadow-[0_8px_30px_rgba(41,35,31,0.03)] hover:shadow-[0_14px_40px_rgba(41,35,31,0.07)] transition-all duration-500 overflow-hidden grid grid-cols-1 lg:grid-cols-12 ${
          isVisible ? 'reveal-visible' : 'reveal-hidden'
        }`}
      >
        {/* Left: Large 4:5 / Editorial Image */}
        <div className="lg:col-span-6 p-3 sm:p-4 pb-0 lg:pb-4 lg:pr-0">
          <div className="relative aspect-[4/5] lg:aspect-auto lg:h-full min-h-[340px] sm:min-h-[420px] w-full overflow-hidden rounded-[6px] bg-[#29231F]">
            <img
              src={product.image}
              alt={`${product.name} — ${product.category} Exclusiva Castor Piracicaba`}
              loading="lazy"
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#29231F]/40 via-transparent to-transparent pointer-events-none" />

            {/* Discreet Category Badge over Image */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-[4px] bg-[#F7F5F0]/95 backdrop-blur-xs text-[#29231F] text-[10px] uppercase tracking-[0.2em] font-semibold border border-[#E8E0D4] shadow-2xs">
                {product.category}
              </span>
              <span className="px-3 py-1.5 rounded-[4px] bg-[#29231F]/85 backdrop-blur-xs text-[#E8E0D4] text-[10px] uppercase tracking-[0.18em] font-medium border border-[#B49A70]/40 inline-flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#B49A70]" />
                <span>Destaque da Vitrine</span>
              </span>
            </div>
          </div>
        </div>

        {/* Right: Editorial Details & Technical Specs */}
        <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-6">
          <div className="space-y-5">
            <div>
              <span className="text-[11px] uppercase tracking-[0.24em] text-[#B49A70] font-medium block mb-2">
                Curadoria Principal • Exclusiva Castor
              </span>
              <h3 className="font-editorial text-3xl sm:text-4xl font-normal text-[#29231F] leading-tight">
                {product.name}
              </h3>
              <p className="text-sm sm:text-base text-[#858078] leading-relaxed mt-2.5">
                {product.description}
              </p>
            </div>

            {/* Technical Spec Sheet in Icons / Chips */}
            <div className="pt-5 border-t border-[#E8E0D4] space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Firmness Chip */}
                <div className="flex items-center gap-3 p-3 rounded-[6px] bg-[#F7F5F0] border border-[#E8E0D4]/80">
                  <div className="w-8 h-8 rounded-[4px] bg-white border border-[#E8E0D4] flex items-center justify-center shrink-0">
                    <Feather className="w-4 h-4 text-[#B49A70]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.18em] text-[#858078] block">
                      Nível de Firmeza
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#29231F]">
                      {product.firmness}
                    </span>
                  </div>
                </div>

                {/* Technology Chip */}
                <div className="flex items-center gap-3 p-3 rounded-[6px] bg-[#F7F5F0] border border-[#E8E0D4]/80">
                  <div className="w-8 h-8 rounded-[4px] bg-white border border-[#E8E0D4] flex items-center justify-center shrink-0">
                    <Layers className="w-4 h-4 text-[#B49A70]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.18em] text-[#858078] block">
                      Tecnologia
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#29231F]">
                      {product.technology}
                    </span>
                  </div>
                </div>
              </div>

              {/* Available Sizes Chips */}
              <div className="p-3.5 rounded-[6px] bg-[#F7F5F0]/70 border border-[#E8E0D4]/80">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-[#858078] mb-2.5">
                  <Maximize2 className="w-3.5 h-3.5 text-[#B49A70]" strokeWidth={1.5} />
                  <span>Medidas Disponíveis</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <span
                      key={size}
                      className="px-3 py-1 rounded-[4px] bg-white border border-[#E8E0D4] text-xs font-medium text-[#49392F]"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Consultation Note & WhatsApp CTA */}
          <div className="pt-4 border-t border-[#E8E0D4] space-y-3.5">
            <p className="text-xs text-[#858078] italic font-cormorant sm:text-[15px]">
              Consulte modelos, medidas e condições com nossa equipe.
            </p>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Consultar ${product.name} no WhatsApp`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-[6px] bg-[#29231F] hover:bg-[#49392F] text-[#F7F5F0] px-7 py-4 text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B49A70] focus-visible:ring-offset-2"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#B49A70]" />
              <span>Consultar no WhatsApp</span>
            </a>
          </div>
        </div>
      </article>
    );
  }

  // Standard 3-Column Grid Card
  return (
    <article
      ref={ref}
      style={{ transitionDelay }}
      className={`group bg-white rounded-[8px] border border-[#E8E0D4] hover:border-[#B49A70]/75 shadow-[0_6px_24px_rgba(41,35,31,0.025)] hover:shadow-[0_12px_32px_rgba(41,35,31,0.06)] transition-all duration-500 flex flex-col justify-between overflow-hidden ${
        isVisible ? 'reveal-visible' : 'reveal-hidden'
      }`}
    >
      <div>
        {/* 4:5 Image with slightly rounded corners and smooth 1.05 hover zoom */}
        <div className="p-3 pb-0">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[6px] bg-[#29231F]">
            <img
              src={product.image}
              alt={`${product.name} — ${product.category} Exclusiva Castor Piracicaba`}
              loading="lazy"
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#29231F]/35 via-transparent to-transparent pointer-events-none" />

            {/* Discreet Category Badge over Photo */}
            <div className="absolute top-3.5 left-3.5">
              <span className="px-3 py-1 rounded-[4px] bg-[#F7F5F0]/95 backdrop-blur-xs text-[#29231F] text-[10px] uppercase tracking-[0.18em] font-semibold border border-[#E8E0D4] shadow-2xs">
                {product.category}
              </span>
            </div>
          </div>
        </div>

        {/* Card Body: Serif Model Name + Short Description + Technical Specs Chips */}
        <div className="p-5 sm:p-6 space-y-4">
          <div>
            <h3 className="font-editorial text-2xl font-normal text-[#29231F] group-hover:text-[#49392F] transition-colors leading-snug">
              {product.name}
            </h3>
            <p className="text-xs sm:text-sm text-[#858078] leading-relaxed mt-1.5 line-clamp-2">
              {product.description}
            </p>
          </div>

          {/* Mini Technical Sheet in Chips / Icons */}
          <div className="pt-3.5 border-t border-[#E8E0D4] space-y-2.5">
            <div className="flex flex-wrap items-center gap-2">
              {/* Firmness Chip */}
              <span
                title="Nível de firmeza"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] bg-[#F7F5F0] border border-[#E8E0D4] text-[11px] font-medium text-[#49392F]"
              >
                <Feather className="w-3 h-3 text-[#B49A70] shrink-0" strokeWidth={1.6} />
                <span>Firmeza: {product.firmness}</span>
              </span>

              {/* Technology Chip */}
              <span
                title="Tecnologia"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] bg-[#F7F5F0] border border-[#E8E0D4] text-[11px] font-medium text-[#49392F]"
              >
                <Layers className="w-3 h-3 text-[#B49A70] shrink-0" strokeWidth={1.6} />
                <span>{product.technology}</span>
              </span>
            </div>

            {/* Available Sizes */}
            <div className="flex items-center flex-wrap gap-1.5 pt-0.5">
              <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.15em] text-[#858078] mr-1">
                <Maximize2 className="w-3 h-3 text-[#B49A70]" strokeWidth={1.5} />
                <span>Medidas:</span>
              </span>
              {product.sizes.map((size) => (
                <span
                  key={size}
                  className="px-2 py-0.5 rounded-[3px] bg-[#E8E0D4]/45 text-[11px] text-[#29231F] font-medium"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Card Footer: Consultation Note + WhatsApp Button */}
      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 space-y-3">
        <p className="text-[11px] text-[#858078] leading-snug border-t border-[#E8E0D4]/70 pt-3">
          Consulte modelos, medidas e condições com nossa equipe.
        </p>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Consultar ${product.name} no WhatsApp`}
          className="w-full inline-flex items-center justify-center gap-2 rounded-[6px] bg-[#29231F] hover:bg-[#49392F] text-[#F7F5F0] py-3.5 px-4 text-xs uppercase tracking-[0.16em] font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B49A70] focus-visible:ring-offset-2"
        >
          <WhatsAppIcon className="w-4 h-4 text-[#B49A70]" />
          <span>Consultar no WhatsApp</span>
        </a>
      </div>
    </article>
  );
};
