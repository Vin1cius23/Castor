import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Sparkles, Layers, MapPin, ArrowRight, Car, ThermometerSun } from 'lucide-react';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';

export const OurStoreSection: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<'fachada' | 'interior'>('fachada');
  const { ref, isVisible } = useRevealOnScroll<HTMLElement>(0.12);

  const storeHighlights = [
    {
      title: 'Atendimento especializado',
      description:
        'Consultoria dedicada para entender seu perfil de sono, biotipo e preferências de conforto.',
      icon: Users,
    },
    {
      title: 'Ambiente preparado para experimentação',
      description:
        'Showroom climatizado e acolhedor onde você pode deitar e sentir na prática cada tecnologia Castor.',
      icon: Sparkles,
    },
    {
      title: 'Variedade de produtos',
      description:
        'Ampla curadoria de colchões, boxes, cabeceiras, travesseiros, roupas de cama, estofados e poltronas.',
      icon: Layers,
    },
    {
      title: 'Localização privilegiada',
      description:
        'No tradicional bairro São Dimas em Piracicaba, com estacionamento próprio e fácil acesso.',
      icon: MapPin,
    },
  ];

  const scrollToContact = (e: React.MouseEvent) => {
    const el = document.getElementById('contato');
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="nossa-loja"
      ref={ref}
      aria-labelledby="nossa-loja-heading"
      className="bg-[#F7F5F0] py-20 sm:py-28 border-b border-[#E8E0D4]"
    >
      <div
        className={`max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 ${
          isVisible ? 'reveal-visible' : 'reveal-hidden'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Authentic Photographs of the Piracicaba Store (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative overflow-hidden border border-[#E8E0D4] bg-[#29231F] aspect-[16/11]">
              <img
                src={
                  activePhoto === 'fachada'
                    ? '/images/loja-fachada-piracicaba.jpg'
                    : '/images/loja-interior-piracicaba.jpg'
                }
                alt={
                  activePhoto === 'fachada'
                    ? 'Fachada real da loja Exclusiva Castor de Piracicaba na Av. Torquato da Silva Leitão, 571'
                    : 'Ambiente interno do showroom da Exclusiva Castor de Piracicaba'
                }
                loading="lazy"
                className="w-full h-full object-cover object-center transition-all duration-700"
              />

              {/* Authentic Location Caption Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#29231F]/90 backdrop-blur-xs border border-[#B49A70]/45 px-4 py-3 text-[#F7F5F0]">
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#B49A70] block">
                  Fotografia Real • Unidade Piracicaba/SP
                </span>
                <p className="text-xs sm:text-sm font-medium text-white mt-0.5">
                  {activePhoto === 'fachada'
                    ? 'Fachada com estacionamento próprio — Av. Torquato da Silva Leitão, 571'
                    : 'Showroom amplo e climatizado preparado para experimentação'}
                </p>
              </div>
            </div>

            {/* Interactive Switcher between Authentic Facade and Showroom Interior */}
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setActivePhoto('fachada')}
                className={`flex items-center gap-3 p-3 border text-left transition-all cursor-pointer ${
                  activePhoto === 'fachada'
                    ? 'bg-white border-[#B49A70] shadow-xs'
                    : 'bg-[#E8E0D4]/30 border-[#E8E0D4] hover:border-[#B49A70]/50'
                }`}
              >
                <img
                  src="/images/loja-fachada-piracicaba.jpg"
                  alt="Miniatura da fachada da loja Exclusiva Castor Piracicaba"
                  className="w-16 h-12 object-cover shrink-0 border border-[#E8E0D4]"
                />
                <div>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#B49A70] block">
                    Vista Externa
                  </span>
                  <span className="text-xs font-medium text-[#29231F]">
                    Fachada & Estacionamento
                  </span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setActivePhoto('interior')}
                className={`flex items-center gap-3 p-3 border text-left transition-all cursor-pointer ${
                  activePhoto === 'interior'
                    ? 'bg-white border-[#B49A70] shadow-xs'
                    : 'bg-[#E8E0D4]/30 border-[#E8E0D4] hover:border-[#B49A70]/50'
                }`}
              >
                <img
                  src="/images/loja-interior-piracicaba.jpg"
                  alt="Miniatura do interior da loja Exclusiva Castor Piracicaba"
                  className="w-16 h-12 object-cover shrink-0 border border-[#E8E0D4]"
                />
                <div>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#B49A70] block">
                    Vista Interna
                  </span>
                  <span className="text-xs font-medium text-[#29231F]">
                    Showroom de Experimentação
                  </span>
                </div>
              </button>
            </div>

            {/* Convenience Strip */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-[#49392F]">
              <span className="inline-flex items-center gap-2">
                <Car className="w-4 h-4 text-[#B49A70]" strokeWidth={1.5} />
                <span>Estacionamento próprio e acessível</span>
              </span>
              <span className="inline-flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-[#B49A70]" strokeWidth={1.5} />
                <span>Ambiente climatizado em São Dimas</span>
              </span>
            </div>
          </div>

          {/* Right Column: Institutional Copy & Store Highlights (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="w-8 h-[1px] bg-[#B49A70]" />
                <span className="text-[11px] uppercase tracking-[0.24em] text-[#858078] font-medium">
                  Nossa Loja • Desde Julho de 2023
                </span>
              </div>

              <h2
                id="nossa-loja-heading"
                className="font-editorial text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#29231F] leading-[1.15] mb-5"
              >
                Uma experiência de conforto esperando por você.
              </h2>

              <p className="text-base text-[#49392F] leading-relaxed">
                Na Exclusiva Castor de Piracicaba, você encontra um ambiente preparado para conhecer
                de perto diferentes soluções em conforto e descanso, com atendimento dedicado para
                ajudar você a encontrar o produto ideal.
              </p>
            </div>

            {/* 4 Required Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2 border-t border-[#E8E0D4]">
              {storeHighlights.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-4 bg-white border border-[#E8E0D4] hover:border-[#B49A70]/60 transition-colors"
                  >
                    <div className="w-8 h-8 border border-[#E8E0D4] flex items-center justify-center mb-3 bg-[#F7F5F0]">
                      <IconComponent className="w-4 h-4 text-[#B49A70]" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-editorial text-lg font-medium text-[#29231F] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#858078] leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                to="/nossa-loja"
                className="inline-flex items-center justify-center gap-3 bg-[#29231F] hover:bg-[#49392F] text-[#F7F5F0] px-7 py-4 text-xs uppercase tracking-[0.18em] font-medium transition-colors group"
              >
                <span>Conheça nossa loja</span>
                <ArrowRight className="w-4 h-4 text-[#B49A70] transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="#contato"
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 border border-[#49392F]/35 hover:border-[#29231F] text-[#29231F] px-6 py-4 text-xs uppercase tracking-[0.16em] font-medium transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#B49A70]" />
                <span>Ver mapa e horários</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
