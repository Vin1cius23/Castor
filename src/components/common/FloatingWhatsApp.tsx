import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Sparkles, MapPin } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../../config/siteConfig';

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M12.031 2C6.508 2 2.023 6.485 2.023 12.008c0 1.766.461 3.49 1.337 5.01L2 22l5.122-1.343a9.97 9.97 0 0 0 4.909 1.295h.004c5.522 0 10.007-4.485 10.007-10.008C22.042 6.485 17.554 2 12.031 2zm5.829 14.129c-.246.693-1.434 1.326-1.996 1.409-.513.076-1.163.108-1.878-.119-.434-.138-.991-.322-1.703-.63-2.996-1.294-4.953-4.312-5.103-4.512-.149-.2-1.219-1.622-1.219-3.094 0-1.472.771-2.196 1.045-2.495.274-.3.598-.375.798-.375.199 0 .399.002.573.01.184.009.43-.07.673.514.249.599.847 2.071.922 2.221.075.15.125.324.025.524-.1.2-.15.324-.299.499-.15.175-.314.391-.449.524-.15.15-.305.312-.131.612.174.3.774 1.277 1.662 2.069 1.142 1.018 2.104 1.334 2.403 1.484.3.15.474.125.649-.075.174-.2.748-.873.947-1.173.2-.3.399-.25.673-.15.274.1 1.745.823 2.044.973.3.15.499.225.574.35.075.125.075.723-.171 1.416z" />
  </svg>
);

export const FloatingWhatsApp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 600);
    return () => clearTimeout(timer);
  }, []);

  const quickOptions = [
    {
      label: 'Conhecer linhas de colchões e produtos',
      sublabel: 'Atendimento geral via WhatsApp',
      icon: MessageCircle,
      href: getWhatsAppUrl(SITE_CONFIG.whatsappMessages.default),
    },
    {
      label: 'Falar com um especialista do sono',
      sublabel: 'Orientação para escolher o colchão ideal',
      icon: Sparkles,
      href: getWhatsAppUrl(SITE_CONFIG.whatsappMessages.specialist),
    },
    {
      label: 'Agendar visita à loja em Piracicaba',
      sublabel: 'Av. Torquato da Silva Leitão, 571 — São Dimas',
      icon: MapPin,
      href: getWhatsAppUrl(SITE_CONFIG.whatsappMessages.storeVisit),
    },
  ];

  return (
    <div
      className={`fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex flex-col items-end transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      {/* Quick contextual popover */}
      {isMenuOpen && (
        <div
          role="dialog"
          aria-label="Opções de atendimento via WhatsApp"
          className="mb-3 w-[310px] sm:w-[340px] bg-[#F7F5F0] border border-[#B49A70]/45 shadow-xl text-[#29231F] overflow-hidden transition-all duration-300"
        >
          <div className="bg-[#29231F] text-[#F7F5F0] px-5 py-4 flex items-start justify-between border-b border-[#B49A70]/30">
            <div>
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#B49A70] block mb-1">
                Atendimento Exclusivo
              </span>
              <p className="font-editorial text-lg font-normal text-white leading-snug">
                Exclusiva Castor Piracicaba
              </p>
              <p className="text-xs text-[#E8E0D4]/80 mt-0.5">
                {SITE_CONFIG.contact.phoneDisplay} • São Dimas
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Fechar opções de atendimento"
              className="text-[#E8E0D4]/70 hover:text-white p-1 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-3 space-y-2">
            <p className="text-xs text-[#858078] px-2 pt-1 pb-0.5">
              Selecione como podemos ajudar você hoje:
            </p>
            {quickOptions.map((opt) => {
              const IconComponent = opt.icon;
              return (
                <a
                  key={opt.label}
                  href={opt.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-start gap-3 p-3 bg-white hover:bg-[#E8E0D4]/45 border border-[#E8E0D4] hover:border-[#B49A70] transition-colors group"
                >
                  <div className="p-2 bg-[#F7F5F0] text-[#49392F] group-hover:text-[#B49A70] transition-colors shrink-0 mt-0.5">
                    <IconComponent className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-[#29231F] block leading-snug">
                      {opt.label}
                    </span>
                    <span className="text-[11px] text-[#858078] block mt-0.5">
                      {opt.sublabel}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      )}

      {/* Main Floating Action Bar */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          className="hidden sm:inline-flex items-center gap-2 bg-[#29231F]/95 hover:bg-[#49392F] text-[#F7F5F0] text-xs tracking-[0.12em] uppercase px-4 py-3 border border-[#B49A70]/40 shadow-md transition-all duration-300 cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <span>Atendimento Piracicaba</span>
        </button>

        <a
          href={getWhatsAppUrl(SITE_CONFIG.whatsappMessages.default)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar com a Exclusiva Castor de Piracicaba pelo WhatsApp"
          title="Falar pelo WhatsApp (19) 3927-3635"
          className="flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 bg-[#29231F] hover:bg-[#49392F] text-[#F7F5F0] border border-[#B49A70]/60 shadow-lg transition-all duration-300 hover:scale-105 group"
        >
          <WhatsAppIcon className="w-6 h-6 text-[#25D366] group-hover:scale-110 transition-transform duration-300" />
        </a>
      </div>
    </div>
  );
};

