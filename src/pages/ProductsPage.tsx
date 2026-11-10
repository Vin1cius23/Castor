import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Sparkles } from 'lucide-react';
import { FeaturedProductsSection } from '../components/sections/FeaturedProductsSection';
import { PRODUCT_CATEGORIES } from '../data/catalogData';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/siteConfig';
import { WhatsAppIcon } from '../components/common/FloatingWhatsApp';

export const ProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('categoria') || 'todos';
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const paramCat = searchParams.get('categoria') || 'todos';
    setActiveCategory(paramCat);
  }, [searchParams]);

  const handleCategoryChange = (slug: string) => {
    setActiveCategory(slug);
    if (slug === 'todos') {
      setSearchParams({});
    } else {
      setSearchParams({ categoria: slug });
    }
  };

  return (
    <main className="pt-24 bg-[#F7F5F0]">
      {/* Page Editorial Banner */}
      <section className="bg-[#29231F] text-[#F7F5F0] py-16 sm:py-20 border-b border-[#B49A70]/30">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#B49A70] hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Voltar ao Início</span>
          </Link>

          <div className="max-w-3xl">
            <span className="text-[11px] uppercase tracking-[0.26em] text-[#E8E0D4]/80 block mb-3">
              Curadoria Exclusiva Castor • Piracicaba/SP
            </span>
            <h1 className="font-editorial text-4xl sm:text-5xl font-normal text-white leading-tight mb-4">
              Catálogo de Linhas e Soluções em Conforto
            </h1>
            <p className="text-base text-[#E8E0D4]/85 leading-relaxed">
              Conheça nossas categorias de colchões Pocket System® e espuma, camas box tradicionais
              e baú, cabeceiras, travesseiros, poltronas, estofados e acessórios. Consulte
              disponibilidade e valores pelo WhatsApp {SITE_CONFIG.contact.phoneDisplay}.
            </p>
          </div>
        </div>
      </section>

      {/* Full Products Showcase */}
      <FeaturedProductsSection
        selectedCategorySlug={activeCategory}
        onCategoryChange={handleCategoryChange}
        showAllByDefault={true}
      />

      {/* Detailed Category Directory */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="mb-12">
          <span className="text-[11px] uppercase tracking-[0.24em] text-[#B49A70] block mb-2">
            Guia de Categorias
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl text-[#29231F]">
            O que você encontra em nosso showroom
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRODUCT_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="bg-white border border-[#E8E0D4] p-6 sm:p-8 flex flex-col justify-between gap-6"
            >
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#B49A70] font-semibold">
                  {category.subtitle}
                </span>
                <h3 className="font-editorial text-2xl text-[#29231F] mt-1 mb-3">
                  {category.name}
                </h3>
                <p className="text-sm text-[#49392F] leading-relaxed mb-5">
                  {category.description}
                </p>

                <ul className="space-y-2 border-t border-[#E8E0D4] pt-4">
                  {category.highlights.map((hl) => (
                    <li key={hl} className="flex items-start gap-2.5 text-xs text-[#29231F]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B49A70] shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <a
                  href={getWhatsAppUrl(SITE_CONFIG.whatsappMessages.category(category.name))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#29231F] hover:text-[#B49A70] font-semibold border-b border-[#B49A70] pb-1 transition-colors"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-[#B49A70]" />
                  <span>Consultar opções de {category.name}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Specialist Advisory CTA */}
        <div className="mt-14 bg-[#29231F] text-[#F7F5F0] border border-[#B49A70]/40 p-8 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#B49A70] mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Consultoria Personalizada</span>
            </div>
            <h3 className="font-editorial text-2xl sm:text-3xl text-white mb-2">
              Em dúvida sobre qual colchão escolher?
            </h3>
            <p className="text-sm text-[#E8E0D4]/80 leading-relaxed">
              Na Exclusiva Castor de Piracicaba ajudamos você a identificar a densidade, o sistema
              de molas e as dimensões ideais para o seu biotipo e rotina de descanso.
            </p>
          </div>

          <a
            href={getWhatsAppUrl(SITE_CONFIG.whatsappMessages.specialist)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-[#B49A70] hover:bg-[#c5ab80] text-[#29231F] px-7 py-4 text-xs uppercase tracking-[0.18em] font-semibold shrink-0 transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Falar com um especialista</span>
          </a>
        </div>
      </section>
    </main>
  );
};

