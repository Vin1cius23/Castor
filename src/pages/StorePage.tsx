import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { OurStoreSection } from '../components/sections/OurStoreSection';
import { LocationContactSection } from '../components/sections/LocationContactSection';
import { SITE_CONFIG } from '../config/siteConfig';

export const StorePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const institutionalTextParagraphs = [
    'Inaugurada em julho de 2023, a Exclusiva Castor de Piracicaba apresenta uma curadoria minuciosamente pensada a fim de trazer aos piracicabanos uma vasta diversidade de produtos, proporcionando a clientes exigentes uma gama de colchões, boxes e acessórios meticulosamente projetados para atender às necessidades individuais.',
    'Com um ambiente climatizado e acolhedor, estacionamento próprio e acessível, todos os detalhes da loja foram pensados para que nossos clientes sintam-se verdadeiramente em casa.',
    'Investir num colchão Castor é, antes de tudo, investir em qualidade de vida. Não vendemos apenas colchões: entregamos conforto e noites bem dormidas que valorizam o seu bem-estar todos os dias.',
  ];

  return (
    <main className="pt-24 bg-[#F7F5F0]">
      {/* Top Banner */}
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
              Unidade Piracicaba • Inaugurada em {SITE_CONFIG.inaugurationDate}
            </span>
            <h1 className="font-editorial text-4xl sm:text-5xl font-normal text-white leading-tight mb-4">
              Nossa Loja em Piracicaba
            </h1>
            <p className="text-base text-[#E8E0D4]/85 leading-relaxed">
              Localizada no bairro São Dimas ({SITE_CONFIG.address.street}), nossa unidade exclusiva
              oferece atendimento consultivo e espaço preparado para você experimentar cada linha
              da Castor com tranquilidade.
            </p>
          </div>
        </div>
      </section>

      {/* Main Store Section with Authentic Photos */}
      <OurStoreSection />

      {/* Institutional Commitment Section */}
      <section className="py-16 sm:py-24 bg-[#E8E0D4]/30 border-b border-[#E8E0D4]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-[11px] uppercase tracking-[0.24em] text-[#B49A70] font-semibold block">
              Compromisso com o seu Bem-Estar
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#29231F] leading-tight">
              Por que experimentar seu colchão presencialmente faz toda a diferença
            </h2>
            {institutionalTextParagraphs.map((p) => (
              <p key={p} className="text-sm sm:text-base text-[#49392F] leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <div className="lg:col-span-5 bg-white border border-[#E8E0D4] p-7 sm:p-8 space-y-4">
            <h3 className="font-editorial text-2xl text-[#29231F]">
              Diferenciais da Unidade Piracicaba
            </h3>
            <ul className="space-y-3 text-sm text-[#49392F]">
              {[
                'Showroom exclusivo da marca Castor em Piracicaba/SP',
                'Estacionamento próprio frontal na Av. Torquato da Silva Leitão, 571',
                'Ambiente totalmente climatizado e planejado para experimentação',
                'Equipe treinada para orientação ergonômica sem pressa',
                'Portfólio completo: colchões, camas box, cabeceiras, estofados, poltronas e enxoval',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B49A70] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <LocationContactSection />
    </main>
  );
};

