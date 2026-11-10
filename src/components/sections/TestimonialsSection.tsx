import React from 'react';
import { ExternalLink, MessageSquarePlus, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../../config/siteConfig';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';

/**
 * 9. DEPOIMENTOS
 * Título exato: "A satisfação de quem já escolheu a Castor."
 * REGRA ESTRITA (Seção 9 & Regra 17.5):
 * "Não inventar avaliações ou atribuir notas fictícias à loja.
 * Deixar a seção preparada para integração com avaliações reais do Google ou depoimentos autorizados dos clientes."
 */
export const TestimonialsSection: React.FC = () => {
  const { ref, isVisible } = useRevealOnScroll<HTMLElement>(0.12);

  const clientExperiencePillars = [
    {
      tag: 'Atendimento Presencial em Piracicaba',
      title: 'Consultoria sem pressa e experimentação real',
      summary:
        'Espaço reservado para relato autorizado de clientes que visitaram nosso showroom na Av. Torquato da Silva Leitão, 571, em São Dimas.',
      status: 'Slot preparado para depoimento verificado / Google Reviews',
    },
    {
      tag: 'Curadoria de Colchões & Conjuntos Box',
      title: 'Escolha orientada para cada perfil de descanso',
      summary:
        'Espaço reservado para avaliação real sobre a adaptação aos colchões Pocket System® e de espuma comercializados pela unidade.',
      status: 'Slot preparado para depoimento verificado / Google Reviews',
    },
    {
      tag: 'Pós-Venda & Confiança Local',
      title: 'Relacionamento próximo em Piracicaba e região',
      summary:
        'Espaço reservado para depoimento autorizado sobre o acompanhamento comercial, entrega e experiência completa com a loja.',
      status: 'Slot preparado para depoimento verificado / Google Reviews',
    },
  ];

  return (
    <section
      id="depoimentos"
      ref={ref}
      aria-labelledby="depoimentos-heading"
      className="bg-[#F7F5F0] py-20 sm:py-28 border-b border-[#E8E0D4]"
    >
      <div
        className={`max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 ${
          isVisible ? 'reveal-visible' : 'reveal-hidden'
        }`}
      >
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#B49A70]" />
              <span className="text-[11px] uppercase tracking-[0.24em] text-[#858078] font-medium">
                Transparência & Credibilidade
              </span>
            </div>
            <h2
              id="depoimentos-heading"
              className="font-editorial text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#29231F] leading-[1.15]"
            >
              A satisfação de quem já escolheu a Castor.
            </h2>
          </div>

          <p className="text-sm text-[#49392F] max-w-md leading-relaxed">
            Compromisso com avaliações reais e verificáveis. Confira o perfil oficial da Exclusiva
            Castor de Piracicaba no Google Maps ou envie seu relato autorizado.
          </p>
        </div>

        {/* Architectural Grid Ready for Google Reviews API / Verified Client Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mb-10">
          {clientExperiencePillars.map((item, idx) => (
            <article
              key={item.title}
              className="bg-white border border-[#E8E0D4] p-7 sm:p-8 flex flex-col justify-between relative"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-6 pb-4 border-b border-[#E8E0D4]">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#B49A70] font-semibold">
                    {item.tag}
                  </span>
                  <span className="font-cormorant italic text-lg text-[#858078]">0{idx + 1}</span>
                </div>

                <h3 className="font-editorial text-xl sm:text-2xl text-[#29231F] mb-3 leading-snug">
                  “{item.title}”
                </h3>

                <p className="text-sm text-[#858078] leading-relaxed mb-6">{item.summary}</p>
              </div>

              <div className="pt-4 border-t border-[#E8E0D4]/70 flex items-center gap-2 text-xs text-[#49392F]">
                <CheckCircle2 className="w-4 h-4 text-[#B49A70] shrink-0" strokeWidth={1.5} />
                <span>{item.status}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Google Maps Official Verification & Review Integration Bar */}
        <div className="bg-[#E8E0D4]/45 border border-[#B49A70]/40 p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex items-start gap-4 max-w-2xl">
            <div className="w-11 h-11 bg-[#29231F] text-[#B49A70] flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#49392F] font-semibold block mb-1">
                Integração com Avaliações Verificadas
              </span>
              <h3 className="font-editorial text-xl sm:text-2xl text-[#29231F] mb-1">
                Avaliações públicas no Google Maps — Castor Piracicaba
              </h3>
              <p className="text-xs sm:text-sm text-[#49392F] leading-relaxed">
                Em respeito à autenticidade, não exibimos notas ou depoimentos fictícios. Você pode
                consultar diretamente todas as avaliações públicas registradas pelos clientes no
                perfil oficial da nossa unidade no Google Maps ou compartilhar sua experiência com
                nossa equipe.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full lg:w-auto shrink-0">
            <a
              href={SITE_CONFIG.address.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#29231F] hover:bg-[#49392F] text-[#F7F5F0] px-6 py-3.5 text-xs uppercase tracking-[0.16em] font-medium transition-colors"
            >
              <span>Ver perfil no Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#B49A70]" />
            </a>

            <a
              href={getWhatsAppUrl(
                'Olá! Já sou cliente da Exclusiva Castor de Piracicaba e gostaria de enviar meu depoimento sobre minha experiência.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F7F5F0] text-[#29231F] border border-[#49392F]/35 px-5 py-3.5 text-xs uppercase tracking-[0.16em] font-medium transition-colors"
            >
              <MessageSquarePlus className="w-3.5 h-3.5 text-[#B49A70]" />
              <span>Enviar meu relato</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

