import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';
import { CastorLogo } from '../common/CastorLogo';
import { WhatsAppIcon } from '../common/FloatingWhatsApp';
import { SITE_CONFIG, getWhatsAppUrl } from '../../config/siteConfig';
import { PRODUCT_CATEGORIES } from '../../data/catalogData';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#29231F] text-[#F7F5F0] border-t border-[#B49A70]/30">
      {/* Top Editorial Banner */}
      <div className="border-b border-[#B49A70]/20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.26em] text-[#B49A70] block mb-2">
              Atendimento Consultivo em Piracicaba
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-normal text-white leading-tight">
              “{SITE_CONFIG.centralConcept}”
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
            <a
              href={getWhatsAppUrl(SITE_CONFIG.whatsappMessages.specialist)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#B49A70] hover:bg-[#c3a97e] text-[#29231F] px-6 py-3.5 text-xs uppercase tracking-[0.16em] font-semibold transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Fale com um especialista</span>
            </a>
            <a
              href={SITE_CONFIG.address.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-[#E8E0D4]/30 hover:border-[#B49A70] text-[#F7F5F0] px-6 py-3.5 text-xs uppercase tracking-[0.16em] font-medium transition-colors"
            >
              <span>Como chegar à loja</span>
              <ArrowUpRight className="w-4 h-4 text-[#B49A70]" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Column 1: Logo & Institutional Description (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <CastorLogo variant="light" size="md" />

            <p className="text-sm text-[#E8E0D4]/80 leading-relaxed max-w-sm">
              Inaugurada em julho de 2023 no bairro São Dimas, a{' '}
              <strong className="font-medium text-white">Exclusiva Castor de Piracicaba</strong>{' '}
              reúne curadoria completa de colchões, camas box, cabeceiras, travesseiros, poltronas e
              estofados em um showroom climatizado com estacionamento próprio.
            </p>

            {/* Social & Direct Channels */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={SITE_CONFIG.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram ${SITE_CONFIG.contact.instagramHandle}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#B49A70]/35 hover:border-[#B49A70] bg-[#49392F]/35 text-xs tracking-wider text-[#F7F5F0] transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-[#B49A70]" />
                <span>{SITE_CONFIG.contact.instagramHandle}</span>
              </a>

              <a
                href={getWhatsAppUrl(SITE_CONFIG.whatsappMessages.default)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Comercial Exclusiva Castor Piracicaba"
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#B49A70]/35 hover:border-[#B49A70] bg-[#49392F]/35 text-xs tracking-wider text-[#F7F5F0] transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#B49A70]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.22em] text-[#B49A70] font-semibold">
              Navegação
            </h3>
            <ul className="space-y-3 text-sm text-[#E8E0D4]/80">
              {SITE_CONFIG.navigation.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Product Categories (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.22em] text-[#B49A70] font-semibold">
              Categorias de Produtos
            </h3>
            <ul className="space-y-2.5 text-sm text-[#E8E0D4]/80">
              {PRODUCT_CATEGORIES.map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/produtos?categoria=${category.slug}`}
                    className="hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#B49A70]" />
                    <span>{category.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Address (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.22em] text-[#B49A70] font-semibold">
              Localização e Contato
            </h3>
            <div className="space-y-3.5 text-sm text-[#E8E0D4]/85">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#B49A70] shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <p className="text-white font-medium">{SITE_CONFIG.address.street}</p>
                  <p className="text-xs text-[#E8E0D4]/75">
                    Bairro {SITE_CONFIG.address.neighborhood} — {SITE_CONFIG.address.city}/
                    {SITE_CONFIG.address.state}
                  </p>
                  <p className="text-xs text-[#E8E0D4]/65">CEP: {SITE_CONFIG.address.zipCode}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#B49A70] shrink-0" strokeWidth={1.5} />
                <a
                  href={`tel:${SITE_CONFIG.contact.phoneTel}`}
                  className="hover:text-white transition-colors font-medium"
                >
                  {SITE_CONFIG.contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#B49A70] shrink-0" strokeWidth={1.5} />
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="hover:text-white transition-colors break-all text-xs sm:text-sm"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </div>

              <div className="flex items-start gap-3 pt-1 border-t border-[#B49A70]/20">
                <Clock className="w-4 h-4 text-[#B49A70] shrink-0 mt-0.5" strokeWidth={1.5} />
                <div className="text-xs space-y-1 text-[#E8E0D4]/75">
                  <p>{SITE_CONFIG.hours.weekdays}</p>
                  <p>{SITE_CONFIG.hours.saturday}</p>
                  <p className="text-[#858078]">{SITE_CONFIG.hours.sundayAndHolidays}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="border-t border-[#B49A70]/20 bg-[#221D19]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#858078]">
          <div className="text-center sm:text-left space-y-0.5">
            <p className="text-[#E8E0D4]/75">
              © {currentYear} <strong className="font-normal text-white">{SITE_CONFIG.unitName}</strong>.
              Todos os direitos reservados.
            </p>
            <p className="text-[11px] text-[#858078]">
              {SITE_CONFIG.legalName} • CNPJ: {SITE_CONFIG.cnpj} • I.E.: {SITE_CONFIG.ie}
            </p>
          </div>

          <div className="flex items-center gap-6 text-[11px] uppercase tracking-[0.16em] text-[#E8E0D4]/60">
            <span>Piracicaba • SP</span>
            <span className="text-[#B49A70]">•</span>
            <span>Um sonho de colchão</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
