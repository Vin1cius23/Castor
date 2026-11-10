import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../../config/siteConfig';

export const HeroSection: React.FC = () => {
  const scrollToSection = (id: string, e: React.MouseEvent) => {
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="inicio"
      aria-label="Apresentação Exclusiva Castor de Piracicaba"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#29231F]"
    >
      {/* High-impact editorial photography: luxury bedroom, natural lighting, neutral tones, mattress & bed centerpiece */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=2200&q=90"
          alt="Suíte contemporânea de alto padrão com cama e colchão elegante em iluminação natural"
          className="w-full h-full object-cover object-center scale-[1.01] transition-transform duration-1000"
          fetchPriority="high"
        />
        {/* Subtle multi-layered editorial contrast overlay for crisp legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(105deg, rgba(41, 35, 31, 0.86) 0%, rgba(41, 35, 31, 0.62) 48%, rgba(41, 35, 31, 0.32) 100%)',
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#29231F]/80 via-[#29231F]/25 to-transparent" />
      </div>

      {/* Top Spacer for Fixed Header */}
      <div className="h-24 sm:h-28 relative z-10" />

      {/* Main Editorial Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl">
          {/* Decorative Editorial Overline */}
          <div className="inline-flex items-center gap-3 mb-6 sm:mb-8">
            <span className="w-10 h-[1px] bg-[#B49A70]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[#E8E0D4] font-medium">
              Exclusiva Castor • Piracicaba / SP
            </span>
          </div>

          {/* Primary Headline */}
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-normal text-white leading-[1.08] tracking-[-0.01em] mb-6 sm:mb-8">
            Seu descanso merece uma experiência{' '}
            <span className="italic font-cormorant font-normal text-[#E8E0D4]">
              extraordinária.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-[#F7F5F0]/88 font-light leading-relaxed max-w-2xl mb-10 sm:mb-12">
            Descubra o conforto, a tecnologia e a qualidade dos produtos Castor em um ambiente
            pensado para proporcionar o melhor para você.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
            <Link
              to="/#produtos"
              onClick={(e) => scrollToSection('produtos', e)}
              className="inline-flex items-center justify-center gap-3 bg-[#F7F5F0] hover:bg-[#B49A70] text-[#29231F] px-8 py-4 text-xs sm:text-[13px] uppercase tracking-[0.18em] font-semibold transition-all duration-300 group"
            >
              <span>Conheça nossos produtos</span>
              <ArrowRight className="w-4 h-4 text-[#49392F] group-hover:text-[#29231F] transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              to="/#nossa-loja"
              onClick={(e) => scrollToSection('nossa-loja', e)}
              className="inline-flex items-center justify-center gap-3 bg-[#29231F]/45 hover:bg-[#29231F]/85 backdrop-blur-xs text-[#F7F5F0] border border-[#E8E0D4]/45 hover:border-[#B49A70] px-8 py-4 text-xs sm:text-[13px] uppercase tracking-[0.18em] font-medium transition-all duration-300"
            >
              <MapPin className="w-4 h-4 text-[#B49A70]" strokeWidth={1.5} />
              <span>Visite nossa loja</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Bar & Visual Scroll Indicator */}
      <div className="relative z-10 border-t border-white/15 bg-[#29231F]/40 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Subtle Store Highlights */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.2em] text-[#E8E0D4]/85">
            <span>Tradição desde 1962</span>
            <span className="text-[#B49A70] hidden sm:inline">•</span>
            <span>Tecnologia Pocket System®</span>
            <span className="text-[#B49A70] hidden sm:inline">•</span>
            <span className="hidden md:inline">{SITE_CONFIG.address.neighborhood}, Piracicaba/SP</span>
          </div>

          {/* Visual Scroll Indicator */}
          <a
            href="#diferenciais"
            onClick={(e) => scrollToSection('diferenciais', e)}
            aria-label="Rolar para conhecer os diferenciais da Exclusiva Castor"
            className="inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.22em] text-[#E8E0D4] hover:text-white transition-colors group"
          >
            <span>Explorar experiência</span>
            <span className="w-7 h-7 border border-[#B49A70]/60 flex items-center justify-center">
              <ArrowDown className="w-3.5 h-3.5 text-[#B49A70] animate-scroll-indicator" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

