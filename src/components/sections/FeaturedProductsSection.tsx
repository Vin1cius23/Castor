import React, { useState } from 'react';
import { Check, Info, X, Eye } from 'lucide-react';
import {
  FEATURED_PRODUCTS,
  PRODUCT_CATEGORIES,
  type ProductItem,
} from '../../data/catalogData';
import { SITE_CONFIG, getWhatsAppUrl } from '../../config/siteConfig';
import { WhatsAppIcon } from '../common/FloatingWhatsApp';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';

interface FeaturedProductsSectionProps {
  selectedCategorySlug?: string;
  onCategoryChange?: (slug: string) => void;
  showAllByDefault?: boolean;
}

export const FeaturedProductsSection: React.FC<FeaturedProductsSectionProps> = ({
  selectedCategorySlug = 'todos',
  onCategoryChange,
  showAllByDefault = false,
}) => {
  const [internalCategory, setInternalCategory] = useState<string>(selectedCategorySlug);
  const [selectedProductModal, setSelectedProductModal] = useState<ProductItem | null>(null);
  const { ref, isVisible } = useRevealOnScroll<HTMLElement>(0.08);

  const activeCategory = onCategoryChange ? selectedCategorySlug : internalCategory;

  const handleFilterClick = (slug: string) => {
    if (onCategoryChange) {
      onCategoryChange(slug);
    } else {
      setInternalCategory(slug);
    }
  };

  const filteredProducts = FEATURED_PRODUCTS.filter((product) => {
    if (activeCategory === 'todos') {
      return showAllByDefault ? true : product.featured;
    }
    return product.categorySlug === activeCategory;
  });

  return (
    <section
      id="vitrine-produtos"
      ref={ref}
      aria-labelledby="destaques-heading"
      className="bg-[#E8E0D4]/35 py-20 sm:py-28 border-b border-[#E8E0D4]"
    >
      <div
        className={`max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 ${
          isVisible ? 'reveal-visible' : 'reveal-hidden'
        }`}
      >
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#B49A70]" />
              <span className="text-[11px] uppercase tracking-[0.24em] text-[#858078] font-medium">
                Vitrine Comercial • Piracicaba
              </span>
            </div>
            <h2
              id="destaques-heading"
              className="font-editorial text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#29231F] leading-[1.15]"
            >
              Conheça alguns dos nossos destaques.
            </h2>
          </div>

          <p className="text-sm text-[#49392F] max-w-md leading-relaxed">
            Consulte disponibilidade de medidas, tecidos e condições diretamente com nossa equipe
            comercial pelo WhatsApp.
          </p>
        </div>

        {/* Transparent Editorial Notice about Demonstrative Reference Catalog (Rule 6 & 17.5) */}
        <div className="mb-10 p-4 sm:px-6 bg-[#F7F5F0] border border-[#B49A70]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-start sm:items-center gap-3">
            <Info className="w-4 h-4 text-[#B49A70] shrink-0 mt-0.5 sm:mt-0" strokeWidth={1.5} />
            <p className="text-xs sm:text-[13px] text-[#49392F]">
              <strong className="font-semibold text-[#29231F]">
                Vitrine demonstrativa de referência:
              </strong>{' '}
              Os itens abaixo exemplificam as categorias comercializadas na Exclusiva Castor de
              Piracicaba. Para modelos em estoque, medidas e valores atualizados, consulte nossos
              especialistas.
            </p>
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#858078] shrink-0">
            Atendimento: {SITE_CONFIG.contact.phoneDisplay}
          </span>
        </div>

        {/* Category Filter Tabs */}
        <div
          role="tablist"
          aria-label="Filtrar destaques por categoria"
          className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-[#E8E0D4]"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeCategory === 'todos'}
            onClick={() => handleFilterClick('todos')}
            className={`px-4 py-2.5 text-xs uppercase tracking-[0.16em] font-medium transition-colors shrink-0 cursor-pointer border ${
              activeCategory === 'todos'
                ? 'bg-[#29231F] text-[#F7F5F0] border-[#29231F]'
                : 'bg-white text-[#49392F] border-[#E8E0D4] hover:border-[#B49A70]'
            }`}
          >
            Todos os destaques
          </button>

          {PRODUCT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat.slug}
              onClick={() => handleFilterClick(cat.slug)}
              className={`px-4 py-2.5 text-xs uppercase tracking-[0.16em] font-medium transition-colors shrink-0 cursor-pointer border ${
                activeCategory === cat.slug
                  ? 'bg-[#29231F] text-[#F7F5F0] border-[#29231F]'
                  : 'bg-white text-[#49392F] border-[#E8E0D4] hover:border-[#B49A70]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const whatsappProductUrl = getWhatsAppUrl(
              SITE_CONFIG.whatsappMessages.product(product.name)
            );

            return (
              <article
                key={product.id}
                className="bg-white border border-[#E8E0D4] hover:border-[#B49A70]/70 transition-all duration-500 flex flex-col justify-between group"
              >
                <div>
                  {/* Product Image Container */}
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-[#29231F]">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#29231F]/55 via-transparent to-transparent" />

                    {/* Category Tag */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#F7F5F0]/95 text-[#29231F] text-[10px] uppercase tracking-[0.2em] font-semibold border border-[#E8E0D4]">
                        {product.category}
                      </span>
                    </div>

                    {/* Demonstrative Badge */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-[0.16em] text-[#F7F5F0]/90 bg-[#29231F]/80 backdrop-blur-xs px-2.5 py-1 border border-white/15">
                        Catálogo de Referência
                      </span>

                      <button
                        type="button"
                        onClick={() => setSelectedProductModal(product)}
                        aria-label={`Ver detalhes de ${product.name}`}
                        className="inline-flex items-center gap-1.5 text-[11px] text-white bg-[#29231F]/85 hover:bg-[#B49A70] hover:text-[#29231F] px-3 py-1 transition-colors cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Detalhes</span>
                      </button>
                    </div>
                  </div>

                  {/* Product Editorial Body */}
                  <div className="p-6 sm:p-7">
                    <h3 className="font-editorial text-2xl font-normal text-[#29231F] mb-2.5 leading-snug">
                      {product.name}
                    </h3>

                    <p className="text-sm text-[#858078] leading-relaxed mb-5">
                      {product.shortDescription}
                    </p>

                    {/* Key Characteristics */}
                    <div className="border-t border-[#E8E0D4] pt-4">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#49392F] font-semibold mb-3">
                        Principais Características
                      </p>
                      <ul className="space-y-2">
                        {product.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2.5 text-xs text-[#49392F]"
                          >
                            <Check
                              className="w-3.5 h-3.5 text-[#B49A70] shrink-0 mt-0.5"
                              strokeWidth={2}
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Action Footer: "Consultar condições" */}
                <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-2">
                  <a
                    href={whatsappProductUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 bg-[#29231F] hover:bg-[#49392F] text-[#F7F5F0] py-3.5 px-5 text-xs uppercase tracking-[0.18em] font-medium transition-colors"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-[#B49A70]" />
                    <span>Consultar condições</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProductModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-product-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#29231F]/80 backdrop-blur-xs"
          onClick={() => setSelectedProductModal(null)}
        >
          <div
            className="bg-[#F7F5F0] border border-[#B49A70]/50 max-w-2xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 sm:h-72 bg-[#29231F]">
              <img
                src={selectedProductModal.image}
                alt={selectedProductModal.name}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedProductModal(null)}
                aria-label="Fechar janela de detalhes"
                className="absolute top-4 right-4 w-10 h-10 bg-[#29231F]/90 text-white hover:bg-[#B49A70] hover:text-[#29231F] flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6">
                <span className="px-3 py-1 bg-[#F7F5F0] text-[#29231F] text-[10px] uppercase tracking-[0.2em] font-semibold">
                  {selectedProductModal.category}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-5">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#B49A70] mb-1">
                  {selectedProductModal.demoReferenceLabel}
                </p>
                <h3
                  id="modal-product-title"
                  className="font-editorial text-2xl sm:text-3xl text-[#29231F]"
                >
                  {selectedProductModal.name}
                </h3>
              </div>

              <p className="text-sm text-[#49392F] leading-relaxed">
                {selectedProductModal.detailedDescription}
              </p>

              <div className="bg-white p-4 border border-[#E8E0D4]">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#49392F] font-semibold mb-2.5">
                  Destaques da Linha
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProductModal.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-xs text-[#29231F]">
                      <Check className="w-3.5 h-3.5 text-[#B49A70] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedProductModal(null)}
                  className="px-5 py-3.5 border border-[#E8E0D4] text-xs uppercase tracking-[0.16em] text-[#49392F] hover:border-[#29231F] cursor-pointer"
                >
                  Fechar
                </button>
                <a
                  href={getWhatsAppUrl(
                    SITE_CONFIG.whatsappMessages.product(selectedProductModal.name)
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#29231F] hover:bg-[#49392F] text-[#F7F5F0] px-6 py-3.5 text-xs uppercase tracking-[0.18em] font-medium transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#B49A70]" />
                  <span>Consultar condições pelo WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

