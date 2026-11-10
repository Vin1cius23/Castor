import React from 'react';
import { Award, Cpu, Feather, UserCheck } from 'lucide-react';
import { DIFFERENTIALS_DATA, type DifferentialItem } from '../../data/catalogData';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';

const ICON_MAP: Record<DifferentialItem['iconName'], React.FC<{ className?: string; strokeWidth?: number }>> = {
  award: Award,
  cpu: Cpu,
  feather: Feather,
  'user-check': UserCheck,
};

export const DifferentialsSection: React.FC = () => {
  const { ref, isVisible } = useRevealOnScroll<HTMLElement>(0.15);

  return (
    <section
      id="diferenciais"
      ref={ref}
      aria-labelledby="diferenciais-heading"
      className="bg-[#F7F5F0] py-20 sm:py-28 border-b border-[#E8E0D4]"
    >
      <div
        className={`max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 ${
          isVisible ? 'reveal-visible' : 'reveal-hidden'
        }`}
      >
        {/* Editorial Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-14 sm:pb-16 border-b border-[#E8E0D4]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#B49A70]" />
              <span className="text-[11px] uppercase tracking-[0.24em] text-[#858078] font-medium">
                Essência & Excelência
              </span>
            </div>
            <h2
              id="diferenciais-heading"
              className="font-editorial text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#29231F] leading-[1.15]"
            >
              Qualidade que transforma suas noites.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#49392F] max-w-md leading-relaxed">
            Cada detalhe da nossa curadoria em Piracicaba reflete o compromisso com o bem-estar, a
            ergonomia e a durabilidade que consagraram a marca Castor.
          </p>
        </div>

        {/* Horizontal Architectural Composition (No generic rounded cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#E8E0D4]">
          {DIFFERENTIALS_DATA.map((item, idx) => {
            const IconComponent = ICON_MAP[item.iconName];
            return (
              <div
                key={item.id}
                className={`py-10 md:py-12 ${
                  idx === 0
                    ? 'md:pr-8 lg:pr-9'
                    : idx === DIFFERENTIALS_DATA.length - 1
                    ? 'md:pl-8 lg:pl-9'
                    : 'md:px-8 lg:px-9'
                } flex flex-col justify-between group`}
              >
                <div>
                  {/* Number & Minimalist Gold Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-cormorant italic text-xl text-[#B49A70] tracking-wider">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 border border-[#E8E0D4] group-hover:border-[#B49A70] bg-white flex items-center justify-center transition-colors duration-300">
                      <IconComponent className="w-4 h-4 text-[#B49A70]" strokeWidth={1.35} />
                    </div>
                  </div>

                  {/* Differential Title */}
                  <h3 className="font-editorial text-xl sm:text-2xl font-normal text-[#29231F] mb-3.5 group-hover:text-[#49392F] transition-colors">
                    {item.title}
                  </h3>

                  {/* Short Editorial Description */}
                  <p className="text-sm text-[#858078] leading-relaxed">{item.description}</p>
                </div>

                {/* Subtle Bottom Gold Accent Line */}
                <div className="mt-8 pt-4 border-t border-[#E8E0D4]/60 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#858078]">
                    Padrão Castor
                  </span>
                  <span className="w-4 h-[1px] bg-[#B49A70] group-hover:w-8 transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

