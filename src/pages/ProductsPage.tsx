import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ArrowLeft, Feather, Sparkles, RotateCcw } from 'lucide-react';
import {
  CATALOG_PRODUCTS,
  PRODUCT_CATEGORIES,
  type FirmnessLevel,
  WHATSAPP_CATALOG_BASE_LINK,
} from '../data/catalogData';
import { ProductCatalogCard } from '../components/common/ProductCatalogCard';
import { WhatsAppIcon } from '../components/common/FloatingWhatsApp';

const FIRMNESS_OPTIONS: Array<{ value: 'todos' | FirmnessLevel; label: string }> = [
  { value: 'todos', label: 'Todas as Firmezas' },
  { value: 'Macio', label: 'Macio' },
  { value: 'Médio', label: 'Médio' },
  { value: 'Firme', label: 'Firme' },
];

export const ProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('categoria') || 'todos';
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [activeFirmness, setActiveFirmness] = useState<'todos' | FirmnessLevel>('todos');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const paramCat = searchParams.get('categoria') || 'todos';
    setActiveCategory(paramCat);
  }, [searchParams]);

  const handleCategoryChange = (slug: string) => {
    setActiveCategory(slug);
    if (slug !== 'colchoes' && slug !== 'todos') {
      setActiveFirmness('todos');
    }
    if (slug === 'todos') {
      setSearchParams({});
    } else {
      setSearchParams({ categoria: slug });
    }
  };

  // Mostrar filtro de firmeza quando estiver em "Colchões" ou "Todos"
  const showFirmnessFilter = activeCategory === 'colchoes' || activeCategory === 'todos';

  const selectedCategoryMeta = PRODUCT_CATEGORIES.find((cat) => cat.slug === activeCategory);

  // Categorias visíveis na listagem editorial
  const categoriesToRender =
    activeCategory === 'todos'
      ? PRODUCT_CATEGORIES
      : PRODUCT_CATEGORIES.filter((cat) => cat.slug === activeCategory);

  return (
    <main className="pt-24 bg-[#F7F5F0] min-h-screen">
      {/* Page Editorial Banner */}
      <section className="bg-[#29231F] text-[#F7F5F0] py-16 sm:py-20 border-b border-[#B49A70]/30">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#B49A70] hover:text-white mb-6 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B49A70]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Voltar ao Início</span>
          </Link>

          <div className="max-w-3xl">
            <span className="text-[11px] uppercase tracking-[0.26em] text-[#E8E0D4]/80 block mb-3">
              Catálogo Exclusiva Castor • Piracicaba/SP
            </span>
            <h1 className="font-editorial text-4xl sm:text-5xl font-normal text-white leading-tight mb-4">
              Curadoria de Conforto &{' '}
              <span className="italic font-cormorant font-normal text-[#E8E0D4]">
                Alto Padrão
              </span>
            </h1>
            <p className="text-base text-[#E8E0D4]/85 leading-relaxed">
              Explore nossas categorias de colchões, camas box, cabeceiras, travesseiros,
              estofados, poltronas e acessórios. Consulte modelos, medidas e condições com nossa
              equipe.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar Section (Categories + Firmness Filter for Mattresses) */}
      <section
        aria-label="Filtros do catálogo"
        className="sticky top-[64px] sm:top-[68px] z-30 bg-[#F7F5F0]/95 backdrop-blur-md border-b border-[#E8E0D4] py-4 shadow-[0_4px_20px_rgba(41,35,31,0.03)]"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-3">
          {/* Category Filter Pills */}
          <div
            role="tablist"
            aria-label="Filtrar por categoria"
            className="flex items-center gap-2 overflow-x-auto pb-1"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === 'todos'}
              onClick={() => handleCategoryChange('todos')}
              className={`px-4 py-2 rounded-[5px] text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300 shrink-0 cursor-pointer border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B49A70] ${
                activeCategory === 'todos'
                  ? 'bg-[#29231F] text-[#F7F5F0] border-[#29231F]'
                  : 'bg-white text-[#49392F] border-[#E8E0D4] hover:border-[#B49A70]'
              }`}
            >
              Todas as Categorias
            </button>

            {PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat.slug}
                onClick={() => handleCategoryChange(cat.slug)}
                className={`px-4 py-2 rounded-[5px] text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300 shrink-0 cursor-pointer border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B49A70] ${
                  activeCategory === cat.slug
                    ? 'bg-[#29231F] text-[#F7F5F0] border-[#29231F]'
                    : 'bg-white text-[#49392F] border-[#E8E0D4] hover:border-[#B49A70]'
                }`}
              >
                {cat.shortFilterLabel || cat.name}
              </button>
            ))}
          </div>

          {/* Firmness Sub-filter for Mattresses */}
          {showFirmnessFilter && (
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#E8E0D4]/80">
              <div className="flex items-center flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-[#858078] mr-1">
                  <Feather className="w-3.5 h-3.5 text-[#B49A70]" strokeWidth={1.5} />
                  <span>Nível de firmeza (Colchões):</span>
                </span>

                {FIRMNESS_OPTIONS.map((option) => {
                  const isSelected = activeFirmness === option.value;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setActiveFirmness(option.value)}
                      className={`px-3 py-1 rounded-[4px] text-xs font-medium transition-all duration-300 cursor-pointer border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B49A70] ${
                        isSelected
                          ? 'bg-[#49392F] text-[#F7F5F0] border-[#49392F]'
                          : 'bg-white text-[#49392F] border-[#E8E0D4] hover:border-[#B49A70]'
                      }`}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>

              {(activeCategory !== 'todos' || activeFirmness !== 'todos') && (
                <button
                  type="button"
                  onClick={() => {
                    handleCategoryChange('todos');
                    setActiveFirmness('todos');
                  }}
                  className="inline-flex items-center gap-1.5 text-xs text-[#49392F] hover:text-[#29231F] cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-[#B49A70]" />
                  <span>Limpar filtros</span>
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Catalog Content Grouped by Category with Editorial Title & Supporting Phrase */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-20">
        {categoriesToRender.map((category) => {
          const categoryProducts = CATALOG_PRODUCTS.filter((product) => {
            if (product.categorySlug !== category.slug) return false;
            // Aplica o filtro de firmeza para colchões (ou quando filtrado especificamente)
            if (
              activeFirmness !== 'todos' &&
              (category.slug === 'colchoes' || activeCategory === category.slug)
            ) {
              return product.firmness === activeFirmness;
            }
            return true;
          });

          if (categoryProducts.length === 0) {
            return null;
          }

          return (
            <div
              key={category.id}
              className="space-y-8 transition-all duration-500"
            >
              {/* Category Editorial Header: Short Editorial Title + Supporting Phrase */}
              <div className="border-b border-[#E8E0D4] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2.5 mb-2">
                    <span className="w-6 h-[1px] bg-[#B49A70]" />
                    <span className="text-[11px] uppercase tracking-[0.22em] text-[#B49A70] font-semibold">
                      {category.name}
                    </span>
                  </div>
                  <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-normal text-[#29231F] leading-tight">
                    {category.editorialTitle}
                  </h2>
                  <p className="text-sm sm:text-base text-[#858078] mt-2 leading-relaxed">
                    {category.supportingPhrase}
                  </p>
                </div>

                <span className="text-xs uppercase tracking-[0.18em] text-[#858078] shrink-0">
                  {categoryProducts.length}{' '}
                  {categoryProducts.length === 1 ? 'modelo disponível' : 'modelos disponíveis'}
                </span>
              </div>

              {/* 3-Column Desktop / 1-Column Mobile Product Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
                {categoryProducts.map((product, idx) => (
                  <ProductCatalogCard
                    key={product.id}
                    product={product}
                    variant="grid"
                    staggerIndex={idx}
                  />
                ))}
              </div>
            </div>
          );
        })}

        {/* Empty State if a combination of filters has no match */}
        {selectedCategoryMeta &&
          CATALOG_PRODUCTS.filter(
            (p) =>
              p.categorySlug === selectedCategoryMeta.slug &&
              (activeFirmness === 'todos' || p.firmness === activeFirmness)
          ).length === 0 && (
            <div className="bg-white rounded-[8px] border border-[#E8E0D4] p-10 text-center max-w-xl mx-auto space-y-4">
              <p className="font-editorial text-2xl text-[#29231F]">
                Nenhum modelo encontrado com este filtro de firmeza.
              </p>
              <p className="text-sm text-[#858078]">
                Experimente selecionar todas as firmezas ou consulte nossa equipe pelo WhatsApp para
                opções personalizadas.
              </p>
              <button
                type="button"
                onClick={() => setActiveFirmness('todos')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[5px] bg-[#29231F] text-[#F7F5F0] text-xs uppercase tracking-[0.16em] cursor-pointer"
              >
                Ver todas as firmezas
              </button>
            </div>
          )}

        {/* Bottom Advisory Banner */}
        <div className="bg-[#29231F] rounded-[8px] text-[#F7F5F0] border border-[#B49A70]/40 p-8 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#B49A70] mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Atendimento Exclusivo em Piracicaba</span>
            </div>
            <h3 className="font-editorial text-2xl sm:text-3xl text-white mb-2">
              Consulte modelos, medidas e condições com nossa equipe.
            </h3>
            <p className="text-sm text-[#E8E0D4]/80 leading-relaxed">
              Nossos especialistas estão à disposição pelo WhatsApp e em nosso showroom no bairro
              São Dimas para apresentar todos os detalhes de acabamento, suporte e medidas.
            </p>
          </div>

          <a
            href={WHATSAPP_CATALOG_BASE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-[6px] bg-[#B49A70] hover:bg-[#c5ab80] text-[#29231F] px-7 py-4 text-xs uppercase tracking-[0.18em] font-semibold shrink-0 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Consultar no WhatsApp</span>
          </a>
        </div>
      </section>
    </main>
  );
};
