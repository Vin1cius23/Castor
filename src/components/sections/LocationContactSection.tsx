import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, Navigation, Send } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../../config/siteConfig';
import { WhatsAppIcon } from '../common/FloatingWhatsApp';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';

export const LocationContactSection: React.FC = () => {
  const { ref, isVisible } = useRevealOnScroll<HTMLElement>(0.1);

  // Interactive Personalized Consultation Form state -> opens WhatsApp with custom context
  const [visitorName, setVisitorName] = useState('');
  const [selectedInterest, setSelectedInterest] = useState('Colchões Pocket System® / Espuma');
  const [selectedPreference, setSelectedPreference] = useState('Atendimento pelo WhatsApp');

  const handleCustomConsultation = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = visitorName.trim() || 'Visitante';
    const message = SITE_CONFIG.whatsappMessages.customConsultation(
      cleanName,
      selectedInterest,
      selectedPreference
    );
    window.open(getWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contato"
      ref={ref}
      aria-labelledby="contato-heading"
      className="bg-[#F7F5F0] py-20 sm:py-28"
    >
      <div
        className={`max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 ${
          isVisible ? 'reveal-visible' : 'reveal-hidden'
        }`}
      >
        {/* Editorial Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#B49A70]" />
              <span className="text-[11px] uppercase tracking-[0.24em] text-[#858078] font-medium">
                Localização e Contato • São Dimas, Piracicaba/SP
              </span>
            </div>
            <h2
              id="contato-heading"
              className="font-editorial text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#29231F] leading-[1.15]"
            >
              Venha conhecer a Exclusiva Castor.
            </h2>
          </div>

          <p className="text-sm text-[#49392F] max-w-md leading-relaxed">
            Visite nosso showroom com estacionamento próprio na Avenida Torquato da Silva Leitão,
            571, ou fale agora mesmo com nossa equipe comercial.
          </p>
        </div>

        {/* Main Commercial & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Address, Phone, WhatsApp, Hours & Primary Buttons (5 cols) */}
          <div className="lg:col-span-5 bg-white border border-[#E8E0D4] p-7 sm:p-9 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#B49A70] font-semibold block mb-1">
                  Unidade Oficial em Piracicaba
                </span>
                <h3 className="font-editorial text-2xl text-[#29231F]">
                  {SITE_CONFIG.unitName}
                </h3>
              </div>

              <div className="space-y-5 pt-2 border-t border-[#E8E0D4]">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 bg-[#F7F5F0] border border-[#E8E0D4] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#B49A70]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-[#858078] font-medium">
                      Endereço da Unidade
                    </p>
                    <p className="text-sm sm:text-base font-medium text-[#29231F] mt-0.5">
                      {SITE_CONFIG.address.street}
                    </p>
                    <p className="text-xs sm:text-sm text-[#49392F]">
                      {SITE_CONFIG.address.neighborhood}, {SITE_CONFIG.address.city}/
                      {SITE_CONFIG.address.state} — CEP {SITE_CONFIG.address.zipCode}
                    </p>
                    <p className="text-xs text-[#858078] mt-1">
                      {SITE_CONFIG.address.ParkingInfo}
                    </p>
                  </div>
                </div>

                {/* Commercial Phone & WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 bg-[#F7F5F0] border border-[#E8E0D4] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-[#B49A70]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-[#858078] font-medium">
                      Telefone Comercial & WhatsApp
                    </p>
                    <div className="flex flex-wrap items-center gap-3 mt-0.5">
                      <a
                        href={`tel:${SITE_CONFIG.contact.phoneTel}`}
                        className="text-base sm:text-lg font-medium text-[#29231F] hover:text-[#B49A70] transition-colors"
                      >
                        {SITE_CONFIG.contact.phoneDisplay}
                      </a>
                      <span className="text-[10px] uppercase tracking-[0.15em] px-2 py-0.5 bg-[#E8E0D4]/60 text-[#49392F]">
                        Fixo & WhatsApp
                      </span>
                    </div>
                  </div>
                </div>

                {/* E-mail */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 bg-[#F7F5F0] border border-[#E8E0D4] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-[#B49A70]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-[#858078] font-medium">
                      E-mail Comercial
                    </p>
                    <a
                      href={`mailto:${SITE_CONFIG.contact.email}`}
                      className="text-sm font-medium text-[#29231F] hover:text-[#B49A70] transition-colors"
                    >
                      {SITE_CONFIG.contact.email}
                    </a>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 bg-[#F7F5F0] border border-[#E8E0D4] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-[#B49A70]" strokeWidth={1.5} />
                  </div>
                  <div className="w-full">
                    <p className="text-xs uppercase tracking-[0.16em] text-[#858078] font-medium mb-1.5">
                      Horários de Funcionamento
                    </p>
                    <div className="space-y-1 text-xs sm:text-sm text-[#49392F]">
                      {SITE_CONFIG.hours.scheduleStructured.map((row) => (
                        <div
                          key={row.label}
                          className="flex items-center justify-between border-b border-[#E8E0D4]/60 pb-1 last:border-b-0"
                        >
                          <span>{row.label}</span>
                          <span className="font-medium text-[#29231F]">{row.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Required Action Buttons: "Como chegar" and "Falar pelo WhatsApp" */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 border-t border-[#E8E0D4]">
              <a
                href={SITE_CONFIG.address.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-[#29231F] bg-white hover:bg-[#29231F] text-[#29231F] hover:text-[#F7F5F0] py-3.5 px-4 text-xs uppercase tracking-[0.16em] font-medium transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-[#B49A70]" />
                <span>Como chegar</span>
              </a>

              <a
                href={getWhatsAppUrl(SITE_CONFIG.whatsappMessages.default)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#29231F] hover:bg-[#49392F] text-[#F7F5F0] py-3.5 px-4 text-xs uppercase tracking-[0.16em] font-medium transition-colors"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-[#B49A70]" />
                <span>Falar pelo WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Integrated Google Maps + Personalized Consultation Box (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Google Maps Embed */}
            <div className="border border-[#E8E0D4] bg-white p-2 h-[340px] sm:h-[380px] relative">
              <iframe
                title="Localização da Exclusiva Castor de Piracicaba no Google Maps"
                src={SITE_CONFIG.address.googleMapsEmbedUrl}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            {/* Quick Personalized Consultation Generator via WhatsApp */}
            <form
              onSubmit={handleCustomConsultation}
              className="bg-[#29231F] text-[#F7F5F0] border border-[#B49A70]/35 p-6 sm:p-7"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#B49A70] block">
                    Atendimento Direto Personalizado
                  </span>
                  <h3 className="font-editorial text-xl sm:text-2xl text-white">
                    Solicite orientação de um especialista Castor
                  </h3>
                </div>
                <span className="text-xs text-[#E8E0D4]/75">Resposta rápida via WhatsApp</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="visitor-name"
                    className="block text-[10px] uppercase tracking-[0.18em] text-[#E8E0D4]/80 mb-1.5"
                  >
                    Seu nome
                  </label>
                  <input
                    id="visitor-name"
                    type="text"
                    value={visitorName}
                    onChange={(e) => setVisitorName(e.target.value)}
                    placeholder="Como prefere ser chamado(a)"
                    className="w-full bg-[#221D19] border border-[#B49A70]/35 focus:border-[#B49A70] px-3.5 py-2.5 text-xs text-white placeholder:text-[#858078] focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="visitor-interest"
                    className="block text-[10px] uppercase tracking-[0.18em] text-[#E8E0D4]/80 mb-1.5"
                  >
                    Produto de interesse
                  </label>
                  <select
                    id="visitor-interest"
                    value={selectedInterest}
                    onChange={(e) => setSelectedInterest(e.target.value)}
                    className="w-full bg-[#221D19] border border-[#B49A70]/35 focus:border-[#B49A70] px-3.5 py-2.5 text-xs text-white focus:outline-none"
                  >
                    <option value="Colchões Pocket System® / Espuma">
                      Colchões (Molas / Espuma)
                    </option>
                    <option value="Camas Box / Box Baú / Cama Acoplada">
                      Camas Box & Box Baú
                    </option>
                    <option value="Cabeceiras & Móveis">Cabeceiras</option>
                    <option value="Travesseiros & Acessórios para Cama">
                      Travesseiros & Acessórios
                    </option>
                    <option value="Estofados & Poltronas">Estofados & Poltronas</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="visitor-preference"
                    className="block text-[10px] uppercase tracking-[0.18em] text-[#E8E0D4]/80 mb-1.5"
                  >
                    Modalidade
                  </label>
                  <select
                    id="visitor-preference"
                    value={selectedPreference}
                    onChange={(e) => setSelectedPreference(e.target.value)}
                    className="w-full bg-[#221D19] border border-[#B49A70]/35 focus:border-[#B49A70] px-3.5 py-2.5 text-xs text-white focus:outline-none"
                  >
                    <option value="Atendimento pelo WhatsApp">Receber informações no WhatsApp</option>
                    <option value="Agendar visita presencial na loja em Piracicaba">
                      Visitar a loja em Piracicaba
                    </option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#B49A70] hover:bg-[#c5ab80] text-[#29231F] px-6 py-3 text-xs uppercase tracking-[0.18em] font-semibold transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Iniciar conversa personalizada no WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

