import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../../config/siteConfig';
import { WhatsAppIcon } from '../common/FloatingWhatsApp';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';

const BED_SIZES = [
  { id: 'Solteiro', label: 'Solteiro', detail: 'Uso individual ou quarto de hóspedes' },
  { id: 'Casal Padrão', label: 'Casal', detail: 'Proporção clássica para dormitórios' },
  { id: 'Queen Size', label: 'Queen Size', detail: 'Mais amplitude e liberdade para o casal' },
  { id: 'King Size', label: 'King Size', detail: 'Máximo espaço e experiência de hotelaria' },
];

const COMFORT_LEVELS = [
  {
    id: 'Macio & Acolhedor',
    label: 'Macio & Acolhedor',
    detail: 'Sensação envolvente com alívio suave dos pontos de pressão',
    recommendedLine: 'Colchões com tecnologia Pocket System® e camadas de conforto macias',
  },
  {
    id: 'Equilibrado / Intermediário',
    label: 'Equilibrado',
    detail: 'Estabilidade anatômica que combina maciez inicial e sustentação',
    recommendedLine: 'Colchões de molas ensacadas Pocket System® ou Espuma de suporte médio',
  },
  {
    id: 'Firme & Estruturado',
    label: 'Firme & Estruturado',
    detail: 'Sustentação ortopédica firme e alinhamento postural preciso',
    recommendedLine: 'Colchões de Espuma Castor de alta densidade ou suporte firme',
  },
];

const BASE_TYPES = [
  { id: 'Apenas Colchão', label: 'Apenas o Colchão' },
  { id: 'Conjunto com Cama Box Tradicional', label: 'Colchão + Box Tradicional' },
  { id: 'Conjunto com Box Baú', label: 'Colchão + Box Baú (Espaço Interno)' },
  { id: 'Dormitório Completo (Box + Cabeceira + Travesseiros)', label: 'Dormitório Completo' },
];

export const SleepAdvisorSection: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState(BED_SIZES[2]);
  const [selectedComfort, setSelectedComfort] = useState(COMFORT_LEVELS[1]);
  const [selectedBase, setSelectedBase] = useState(BASE_TYPES[1]);
  const { ref, isVisible } = useRevealOnScroll<HTMLElement>(0.12);

  const customAdvisorMessage = `Olá! Utilizei o Guia de Conforto no site da Exclusiva Castor de Piracicaba e gostaria de orientação de um especialista para o seguinte perfil:\n• Medida: ${selectedSize.id}\n• Preferência de conforto: ${selectedComfort.id}\n• Configuração: ${selectedBase.id}`;

  return (
    <section
      ref={ref}
      aria-labelledby="consultoria-sono-heading"
      className="bg-[#29231F] text-[#F7F5F0] py-20 sm:py-24 border-b border-[#B49A70]/25"
    >
      <div
        className={`max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 ${
          isVisible ? 'reveal-visible' : 'reveal-hidden'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Editorial Intro (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#B49A70]" />
              <span className="text-[11px] uppercase tracking-[0.26em] text-[#B49A70] font-medium">
                Consultoria Digital do Sono
              </span>
            </div>

            <h2
              id="consultoria-sono-heading"
              className="font-editorial text-3xl sm:text-4xl font-normal text-white leading-[1.15]"
            >
              Descubra a configuração ideal antes mesmo de visitar a loja.
            </h2>

            <p className="text-sm sm:text-base text-[#E8E0D4]/80 leading-relaxed font-light">
              Cada pessoa possui uma necessidade única de sustentação e conforto. Selecione ao lado
              suas preferências de medida, sensação de toque e base para enviar seu perfil
              diretamente a um consultor da{' '}
              <strong className="text-white font-medium">Exclusiva Castor de Piracicaba</strong>.
            </p>

            {/* Summary Card */}
            <div className="p-6 bg-[#221D19] border border-[#B49A70]/35 space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#B49A70]">
                <Sparkles className="w-4 h-4" strokeWidth={1.5} />
                <span>Indicação de Curadoria</span>
              </div>

              <p className="font-editorial text-xl text-white leading-snug">
                {selectedComfort.recommendedLine}
              </p>

              <div className="text-xs text-[#E8E0D4]/75 space-y-1.5 pt-2 border-t border-[#B49A70]/20">
                <p>
                  <span className="text-[#858078]">Medida selecionada:</span>{' '}
                  <strong className="text-white font-medium">{selectedSize.label}</strong>
                </p>
                <p>
                  <span className="text-[#858078]">Nível de conforto:</span>{' '}
                  <strong className="text-white font-medium">{selectedComfort.label}</strong>
                </p>
                <p>
                  <span className="text-[#858078]">Composição:</span>{' '}
                  <strong className="text-white font-medium">{selectedBase.label}</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Right Interactive Selector (7 cols) */}
          <div className="lg:col-span-7 bg-[#221D19] border border-[#B49A70]/30 p-6 sm:p-9 space-y-8">
            {/* Step 1: Size */}
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#B49A70] font-semibold mb-3.5">
                1. Qual medida você procura?
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {BED_SIZES.map((size) => {
                  const isSelected = selectedSize.id === size.id;
                  return (
                    <button
                      key={size.id}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`p-3.5 text-left border transition-all cursor-pointer flex items-start justify-between gap-2 ${
                        isSelected
                          ? 'bg-[#49392F]/45 border-[#B49A70] text-white'
                          : 'bg-[#29231F] border-white/10 text-[#E8E0D4]/80 hover:border-[#B49A70]/45'
                      }`}
                    >
                      <div>
                        <span className="text-xs uppercase tracking-[0.14em] font-semibold block">
                          {size.label}
                        </span>
                        <span className="text-[11px] text-[#E8E0D4]/65 block mt-0.5">
                          {size.detail}
                        </span>
                      </div>
                      {isSelected && <Check className="w-4 h-4 text-[#B49A70] shrink-0 mt-0.5" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Comfort Feel */}
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#B49A70] font-semibold mb-3.5">
                2. Qual sensação de conforto você prefere ao deitar?
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {COMFORT_LEVELS.map((comfort) => {
                  const isSelected = selectedComfort.id === comfort.id;
                  return (
                    <button
                      key={comfort.id}
                      type="button"
                      onClick={() => setSelectedComfort(comfort)}
                      className={`p-3.5 text-left border transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#49392F]/45 border-[#B49A70] text-white'
                          : 'bg-[#29231F] border-white/10 text-[#E8E0D4]/80 hover:border-[#B49A70]/45'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-xs uppercase tracking-[0.12em] font-semibold">
                          {comfort.label}
                        </span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-[#B49A70] shrink-0" />}
                      </div>
                      <span className="text-[11px] text-[#E8E0D4]/65 leading-snug">
                        {comfort.detail}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Base Configuration */}
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#B49A70] font-semibold mb-3.5">
                3. Como deseja compor seu ambiente?
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {BASE_TYPES.map((base) => {
                  const isSelected = selectedBase.id === base.id;
                  return (
                    <button
                      key={base.id}
                      type="button"
                      onClick={() => setSelectedBase(base)}
                      className={`px-4 py-3 text-left border transition-all cursor-pointer flex items-center justify-between gap-2 ${
                        isSelected
                          ? 'bg-[#49392F]/45 border-[#B49A70] text-white'
                          : 'bg-[#29231F] border-white/10 text-[#E8E0D4]/80 hover:border-[#B49A70]/45'
                      }`}
                    >
                      <span className="text-xs font-medium">{base.label}</span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-[#B49A70] shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-3 border-t border-[#B49A70]/25 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <span className="text-xs text-[#E8E0D4]/75">
                Atendimento direto com nossa equipe em Piracicaba ({SITE_CONFIG.contact.phoneDisplay})
              </span>

              <a
                href={getWhatsAppUrl(customAdvisorMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#B49A70] hover:bg-[#c5ab80] text-[#29231F] px-6 py-4 text-xs uppercase tracking-[0.18em] font-semibold transition-colors shrink-0"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Receber indicação no WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
