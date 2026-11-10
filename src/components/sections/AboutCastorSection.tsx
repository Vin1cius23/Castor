import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Factory, Leaf, Award, ArrowUpRight } from 'lucide-react';
import { CASTOR_MILESTONES, VERIFIED_BRAND_CREDENTIALS } from '../../data/catalogData';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';

export const AboutCastorSection: React.FC = () => {
  const { ref, isVisible } = useRevealOnScroll<HTMLElement>(0.1);

  return (
    <section
      id="sobre-a-castor"
      ref={ref}
      aria-labelledby="sobre-castor-heading"
      className="bg-[#29231F] text-[#F7F5F0] py-20 sm:py-28 border-b border-[#B49A70]/25"
    >
      <div
        className={`max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 ${
          isVisible ? 'reveal-visible' : 'reveal-hidden'
        }`}
      >
        {/* Top Institutional Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-16 border-b border-[#B49A70]/25">
          {/* Left Column: Brand Story & Verified Origin (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#B49A70]" />
              <span className="text-[11px] uppercase tracking-[0.26em] text-[#B49A70] font-medium">
                Tradição & Evolução • Desde 1962
              </span>
            </div>

            <h2
              id="sobre-castor-heading"
              className="font-editorial text-3xl sm:text-4xl lg:text-[46px] font-normal text-white leading-[1.12]"
            >
              Uma história construída em torno do conforto.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#E8E0D4]/85 leading-relaxed font-light">
              <p>
                Fruto da visão e da dedicação do <strong className="text-white font-medium">Dr. Hélio Silva</strong>,
                a Castor teve origem em <strong className="text-white font-medium">1962</strong>, na Vila Musa, em
                Ourinhos/SP. O que começou como uma oficina artesanal ganhou o nome{' '}
                <em className="font-cormorant text-lg text-[#E8E0D4]">“Castor”</em> a partir de um sonho
                marcante do fundador com um novelo de lã vermelha — símbolo de maciez e perfeição —,
                aliado à admiração pelo espírito construtor e incansável dos castores.
              </p>

              <p>
                Ao longo de mais de seis décadas, a marca protagonizou marcos técnicos importantes
                no setor colchoeiro brasileiro: transferiu sua matriz para o Distrito Industrial Dr.
                Hélio Silva em 1983, foi uma das pioneiras a aderir ao programa{' '}
                <strong className="text-white font-medium">Pró-Espuma (INER)</strong> em 1988, inaugurou seu
                centro laboratorial próprio em 1992 e conquistou a certificação internacional{' '}
                <strong className="text-white font-medium">ISO 9001</strong> em 1993.
              </p>

              <p>
                Hoje, a Castor conta com quatro parques fabris estrategicamente distribuídos em{' '}
                <strong className="text-white font-medium">
                  Ourinhos (SP), Passo Fundo (RS), Juiz de Fora (MG) e Pombos (PE)
                </strong>
                , além de práticas ambientais e de governança reconhecidas pela certificação{' '}
                <strong className="text-white font-medium">ESG (2024)</strong>, selo{' '}
                <strong className="text-white font-medium">GPTW</strong> e adesão ao{' '}
                <strong className="text-white font-medium">Pacto Global da ONU</strong>.
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/sobre-a-castor"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#B49A70] hover:text-white font-medium border-b border-[#B49A70]/60 pb-1.5 transition-colors"
              >
                <span>Conhecer a trajetória completa da marca</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Editorial Visual & Verified Credentials (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative overflow-hidden border border-[#B49A70]/35 bg-[#49392F]/30">
              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=85"
                alt="Acabamento e conforto de alto padrão dos produtos Castor"
                loading="lazy"
                className="w-full h-64 sm:h-72 object-cover opacity-90"
              />
              <div className="p-6 bg-[#221D19] border-t border-[#B49A70]/30 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#B49A70] block">
                    Identidade Oficial
                  </span>
                  <p className="font-editorial text-xl text-white mt-0.5">
                    Colchões Castor — Um sonho de colchão.
                  </p>
                </div>
                <img
                  src="/images/logo-castor-oficial.png"
                  alt="Logo Castor"
                  className="h-10 w-auto border border-[#B49A70]/40 shrink-0"
                />
              </div>
            </div>

            {/* 4 Verified Brand Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {VERIFIED_BRAND_CREDENTIALS.map((cred, idx) => {
                const icons = [Award, Factory, ShieldCheck, Leaf];
                const IconComp = icons[idx % icons.length];
                return (
                  <div
                    key={cred.title}
                    className="p-4 bg-[#221D19] border border-[#B49A70]/25 flex items-start gap-3"
                  >
                    <IconComp className="w-4 h-4 text-[#B49A70] shrink-0 mt-1" strokeWidth={1.5} />
                    <div>
                      <h3 className="text-xs uppercase tracking-[0.14em] text-white font-semibold">
                        {cred.title}
                      </h3>
                      <p className="text-xs text-[#E8E0D4]/70 mt-1 leading-relaxed">
                        {cred.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Chronological Milestones Strip */}
        <div className="pt-14">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#B49A70] mb-8">
            Linha do Tempo Institucional Verificada
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {CASTOR_MILESTONES.map((milestone) => (
              <div
                key={milestone.year}
                className="border-l border-[#B49A70]/40 pl-4 py-1 flex flex-col justify-between"
              >
                <div>
                  <span className="font-editorial text-2xl text-[#B49A70] block mb-1">
                    {milestone.year}
                  </span>
                  <h3 className="text-sm font-medium text-white mb-2 leading-snug">
                    {milestone.title}
                  </h3>
                  <p className="text-xs text-[#E8E0D4]/70 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
                <span className="text-[10px] uppercase tracking-[0.15em] text-[#858078] mt-3 block">
                  {milestone.location}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

