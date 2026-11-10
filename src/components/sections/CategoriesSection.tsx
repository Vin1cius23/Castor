import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { PRODUCT_CATEGORIES, type ProductCategory } from '../../data/catalogData';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';

interface CategoriesSectionProps {
  onSelectCategory?: (categorySlug: string) => void;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({ onSelectCategory }) => {
  const { ref, isVisible } = useRevealOnScroll<HTMLElement>(0.08);

  const handleCategoryClick = (category: ProductCategory, e: React.MouseEvent) => {
    if (onSelectCategory) {
      e.preventDefault();
      onSelectCategory(category.slug);
      const vitrine = document.getElementById('vitrine-produtos');
      if (vitrine) {
        vitrine.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Editorial asymmetric grid spans for the 7 categories (avoiding small repetitive cards)
  const getGridClasses = (index: number): string => {
    switch (index) {
      case 0: // Colchões — Hero editorial highlight (7 cols)
        return 'lg:col-span-7 min-h-[420px] sm:min-h-[500px]';
      case 1: // Camas Box (5 cols)
        return 'lg:col-span-5 min-h-[420px] sm:min-h-[500px]';
      case 2: // Cabeceiras (4 cols)
        return 'lg:col-span-4 min-h-[380px]';
      case 3: // Travesseiros (4 cols)
        return 'lg:col-span-4 min-h-[380px]';
      case 4: // Estofados (4 cols)
        return 'lg:col-span-4 min-h-[380px]';
      case 5: // Poltronas (5 cols)
        return 'lg:col-span-5 min-h-[380px] sm:min-h-[420px]';
      case 6: // Acessórios para cama (7 cols)
        return 'lg:col-span-7 min-h-[380px] sm:min-h-[420px]';
      default:
        return 'lg:col-span-4 min-h-[380px]';
    }
  };

  return (
    <section
      id="produtos"
      ref={ref}
      aria-labelledby="categorias-heading"
      className="bg-[#F7F5F0] py-20 sm:py-28 border-b border-[#E8E0D4]"
    >
      <div
        className={`max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 ${
          isVisible ? 'reveal-visible' : 'reveal-hidden'
        }`}
      >
        {/* Editorial Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#B49A70]" />
              <span className="text-[11px] uppercase tracking-[0.24em] text-[#858078] font-medium">
                Curadoria Completa para o Dormitório & Lar
              </span>
            </div>
            <h2
              id="categorias-heading"
              className="font-editorial text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#29231F] leading-[1.15]"
            >
              Encontre o conforto ideal para você.
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="text-sm text-[#858078] max-w-sm leading-relaxed">
              Sete linhas de produtos pensadas para transformar seu quarto e seus ambientes de
              descanso com a assinatura Castor.
            </p>
            <Link
              to="/produtos"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#49392F] hover:text-[#29231F] font-semibold border-b border-[#B49A70] pb-1 shrink-0 self-start sm:self-auto"
            >
              <span>Ver catálogo completo</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#B49A70]" />
            </Link>
          </div>
        </div>

        {/* Asymmetric Editorial Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-7">
          {PRODUCT_CATEGORIES.map((category, index) => (
            <article
              key={category.id}
              className={`group relative overflow-hidden border border-[#E8E0D4] bg-[#29231F] flex flex-col justify-end ${getGridClasses(
                index
              )}`}
            >
              {/* Category High-Resolution Photography with subtle hover zoom */}
              <img
                src={category.image}
                alt={`${category.name} — Exclusiva Castor de Piracicaba`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Subtle Editorial Gradient Overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(41, 35, 31, 0.12) 0%, rgba(41, 35, 31, 0.52) 48%, rgba(41, 35, 31, 0.92) 100%)',
                }}
              />

              {/* Top Category Number & Subtitle Badge */}
              <div className="relative z-10 p-6 sm:p-8 mb-auto flex items-center justify-between">
                <span className="inline-block px-3 py-1 bg-[#29231F]/70 backdrop-blur-xs border border-[#B49A70]/40 text-[10px] uppercase tracking-[0.22em] text-[#E8E0D4]">
                  {category.subtitle}
                </span>
                <span className="font-cormorant italic text-lg text-[#E8E0D4]/80">
                  0{index + 1}
                </span>
              </div>

              {/* Bottom Editorial Content */}
              <div className="relative z-10 p-6 sm:p-8 lg:p-9 border-t border-white/10 bg-gradient-to-t from-[#29231F]/95 via-[#29231F]/70 to-transparent">
                <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-white mb-2.5 tracking-wide">
                  {category.name}
                </h3>
                <p className="text-sm text-[#E8E0D4]/85 leading-relaxed mb-5 max-w-xl">
                  {category.description}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-white/15">
                  <Link
                    to={`/produtos?categoria=${category.slug}`}
                    onClick={(e) => handleCategoryClick(category, e)}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white group-hover:text-[#B49A70] font-medium transition-colors"
                  >
                    <span>Explorar {category.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#B49A70] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>

                  <span className="text-[11px] text-[#E8E0D4]/65 hidden sm:inline">
                    Experimente no showroom
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

