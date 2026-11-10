import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import {
  CATALOG_PRODUCTS,
  PRODUCT_CATEGORIES,
} from '../../data/catalogData';
import { ProductCatalogCard } from '../common/ProductCatalogCard';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';

interface FeaturedProductsSectionProps {
  selectedCategorySlug?: string;
  onCategoryChange?: (slug: string) => void;
}

export const FeaturedProductsSection: React.FC<FeaturedProductsSectionProps> = ({
  selectedCategorySlug = 'todos',
  onCategoryChange,
}) => {
  const [internalCategory, setInternalCategory] = useState<string>(selectedCategorySlug);
  const { ref, isVisible } = useRevealOnScroll<HTMLElement>(0.06);

  const activeCategory = onCategoryChange ? selectedCategorySlug : internalCategory;

  const handleFilterClick = (slug: string) => {
    if (onCategoryChange) {
      onCategoryChange(slug);
    } else {
      setInternalCategory(slug);
    }
  };

  // Produto principal em destaque (card largo na Home)
  const mainHighlightProduct =
    CATALOG_PRODUCTS.find((p) => p.isMainHighlight) || CATALOG_PRODUCTS[0];

  // Demais produtos em destaque para a grade de 3 colunas
  const gridProducts = CATALOG_PRODUCTS.filter((product) => {
    if (activeCategory === 'todos') {
      return product.featured && product.id !== mainHighlightProduct.id;
    }
    return product.categorySlug === activeCategory;
  });

  const activeCategoryMeta = PRODUCT_CATEGORIES.find((c) => c.slug === activeCategory);

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
        {/* Editorial Heading with Italic Serif Highlight */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#B49A70]" />
              <span className="text-[11px] uppercase tracking-[0.24em] text-[#858078] font-medium">
                Vitrine Exclusiva • Piracicaba
              </span>
            </div>
            <h2
              id="destaques-heading"
              className="font-editorial text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#29231F] leading-[1.15]"
            >
              Conheça alguns dos nossos{' '}
              <span className="italic font-cormorant font-normal text-[#49392F]">destaques.</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="text-sm text-[#49392F] max-w-sm leading-relaxed">
              Consulte modelos, medidas e condições com nossa equipe especializada em Piracicaba.
            </p>
            <Link
              to="/produtos"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#29231F] hover:text-[#49392F] font-semibold border-b border-[#B49A70] pb-1 shrink-0 self-start sm:self-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B49A70]"
            >
              <span>Catálogo completo</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#B49A70]" />
            </Link>
          </div>
        </div>

        {/* Subtle Category Filter Bar */}
        <div
          role="tablist"
          aria-label="Filtrar vitrine por categoria"
          className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-[#E8E0D4]"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeCategory === 'todos'}
            onClick={() => handleFilterClick('todos')}
            className={`px-4 py-2.5 rounded-[5px] text-xs uppercase tracking-[0.16em] font-medium transition-all duration-300 shrink-0 cursor-pointer border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B49A70] ${
              activeCategory === 'todos'
                ? 'bg-[#29231F] text-[#F7F5F0] border-[#29231F]'
                : 'bg-white text-[#49392F] border-[#E8E0D4] hover:border-[#B49A70]'
            }`}
          >
            Destaques da Loja
          </button>

          {PRODUCT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat.slug}
              onClick={() => handleFilterClick(cat.slug)}
              className={`px-4 py-2.5 rounded-[5px] text-xs uppercase tracking-[0.16em] font-medium transition-all duration-300 shrink-0 cursor-pointer border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B49A70] ${
                activeCategory === cat.slug
                  ? 'bg-[#29231F] text-[#F7F5F0] border-[#29231F]'
                  : 'bg-white text-[#49392F] border-[#E8E0D4] hover:border-[#B49A70]'
              }`}
            >
              {cat.shortFilterLabel || cat.name}
            </button>
          ))}
        </div>

        {/* Category Editorial Intro when a specific category is selected */}
        {activeCategoryMeta && (
          <div className="mb-8 p-6 rounded-[6px] bg-[#F7F5F0] border border-[#E8E0D4] flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-500">
            <div>
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#B49A70] font-semibold block mb-1">
                {activeCategoryMeta.name}
              </span>
              <h3 className="font-editorial text-2xl text-[#29231F]">
                {activeCategoryMeta.editorialTitle}
              </h3>
              <p className="text-sm text-[#858078] mt-1">{activeCategoryMeta.supportingPhrase}</p>
            </div>
            <button
              type="button"
              onClick={() => handleFilterClick('todos')}
              className="text-xs uppercase tracking-[0.16em] text-[#49392F] hover:text-[#29231F] underline underline-offset-4 self-start md:self-center shrink-0 cursor-pointer"
            >
              Ver todos os destaques
            </button>
          </div>
        )}

        {/* 1. Large Featured Product Card (Image Left, Text Right) when viewing "todos" */}
        {activeCategory === 'todos' && mainHighlightProduct && (
          <div className="mb-10">
            <ProductCatalogCard
              product={mainHighlightProduct}
              variant="highlight"
              staggerIndex={0}
            />
          </div>
        )}

        {/* 2. 3-Column Grid on Desktop, 1-Column on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {gridProducts.map((product, idx) => (
            <ProductCatalogCard
              key={product.id}
              product={product}
              variant="grid"
              staggerIndex={idx + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
