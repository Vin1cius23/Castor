import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { CastorLogo } from '../common/CastorLogo';
import { WhatsAppIcon } from '../common/FloatingWhatsApp';
import { SITE_CONFIG, getWhatsAppUrl } from '../../config/siteConfig';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // On the home page (/), the header starts transparent over the cinematic hero banner
  // and transitions smoothly into a solid editorial bar upon scrolling.
  const isHomePage = location.pathname === '/';
  const useSolidAppearance = isScrolled || !isHomePage || isMobileMenuOpen;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 36);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (path: string, sectionId: string, e: React.MouseEvent) => {
    setIsMobileMenuOpen(false);
    // If already on HomePage and clicking a section anchor, scroll smoothly;
    // Also allow visiting the dedicated route when clicking from subpages or via URL.
    if (location.pathname === '/' && sectionId) {
      const target = document.getElementById(sectionId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.pushState(null, '', path === '/' ? '/' : `/#${sectionId}`);
        return;
      }
    }
    navigate(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        useSolidAppearance
          ? 'bg-[#F7F5F0]/96 backdrop-blur-md border-b border-[#E8E0D4] py-3.5 shadow-[0_4px_24px_rgba(41,35,31,0.04)]'
          : 'bg-transparent border-b border-white/15 py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between gap-4">
        {/* Official Brand Logo */}
        <Link
          to="/"
          onClick={(e) => handleNavClick('/', 'inicio', e)}
          aria-label="Exclusiva Castor de Piracicaba — Ir para o início"
          className="shrink-0 focus:outline-none"
        >
          <CastorLogo
            variant={useSolidAppearance ? 'dark' : 'light'}
            size={isScrolled ? 'sm' : 'md'}
          />
        </Link>

        {/* Desktop Navigation Menu with generous editorial spacing */}
        <nav
          aria-label="Navegação principal"
          className="hidden lg:flex items-center gap-9 xl:gap-11"
        >
          {SITE_CONFIG.navigation.map((item) => {
            const isActive =
              item.path === '/'
                ? location.pathname === '/' && !location.hash
                : location.pathname === item.path || location.hash === `#${item.sectionId}`;

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={(e) => handleNavClick(item.path, item.sectionId, e)}
                className={`relative text-xs xl:text-[13px] uppercase tracking-[0.18em] font-medium py-1.5 transition-colors duration-300 group ${
                  useSolidAppearance
                    ? isActive
                      ? 'text-[#29231F]'
                      : 'text-[#49392F] hover:text-[#29231F]'
                    : isActive
                    ? 'text-white'
                    : 'text-[#F7F5F0]/88 hover:text-white'
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-[1.5px] bg-[#B49A70] transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Desktop Highlight CTA Button: "Fale com um especialista" */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={getWhatsAppUrl(SITE_CONFIG.whatsappMessages.specialist)}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2.5 px-5 py-3 text-xs uppercase tracking-[0.16em] font-medium transition-all duration-300 border ${
              useSolidAppearance
                ? 'bg-[#29231F] text-[#F7F5F0] border-[#29231F] hover:bg-[#49392F] hover:border-[#49392F]'
                : 'bg-[#F7F5F0]/12 backdrop-blur-xs text-white border-[#B49A70]/75 hover:bg-[#F7F5F0] hover:text-[#29231F] hover:border-[#F7F5F0]'
            }`}
          >
            <WhatsAppIcon className="w-3.5 h-3.5 text-[#B49A70]" />
            <span>Fale com um especialista</span>
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          className={`lg:hidden p-2.5 border transition-colors cursor-pointer ${
            useSolidAppearance
              ? 'text-[#29231F] border-[#E8E0D4] hover:border-[#B49A70]'
              : 'text-white border-white/25 hover:border-white'
          }`}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[68px] bottom-0 bg-[#F7F5F0] border-t border-[#E8E0D4] transition-all duration-500 overflow-y-auto ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-3 pointer-events-none'
        }`}
      >
        <div className="px-6 py-8 flex flex-col justify-between min-h-full">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#B49A70] mb-5">
              Menu de Navegação
            </p>
            <nav aria-label="Menu mobile" className="flex flex-col divide-y divide-[#E8E0D4]">
              {SITE_CONFIG.navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={(e) => handleNavClick(item.path, item.sectionId, e)}
                  className="py-4 flex items-center justify-between text-[#29231F] hover:text-[#B49A70] transition-colors group"
                >
                  <span className="font-editorial text-2xl font-normal tracking-wide">
                    {item.label}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#B49A70] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              ))}
            </nav>

            {/* Quick Page Switcher links for multi-page browsing */}
            <div className="mt-6 pt-5 border-t border-[#E8E0D4]">
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#858078] mb-3">
                Páginas Dedicadas
              </p>
              <div className="flex flex-wrap gap-2">
                <Link
                  to="/produtos"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xs px-3 py-1.5 bg-[#E8E0D4]/60 text-[#49392F] hover:bg-[#49392F] hover:text-white transition-colors"
                >
                  Catálogo Completo
                </Link>
                <Link
                  to="/nossa-loja"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xs px-3 py-1.5 bg-[#E8E0D4]/60 text-[#49392F] hover:bg-[#49392F] hover:text-white transition-colors"
                >
                  Showroom Piracicaba
                </Link>
                <Link
                  to="/sobre-a-castor"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xs px-3 py-1.5 bg-[#E8E0D4]/60 text-[#49392F] hover:bg-[#49392F] hover:text-white transition-colors"
                >
                  História da Marca
                </Link>
                <Link
                  to="/contato"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xs px-3 py-1.5 bg-[#E8E0D4]/60 text-[#49392F] hover:bg-[#49392F] hover:text-white transition-colors"
                >
                  Localização & Horários
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Footer Contact & Specialist CTA */}
          <div className="mt-8 pt-6 border-t border-[#B49A70]/35 space-y-4">
            <a
              href={getWhatsAppUrl(SITE_CONFIG.whatsappMessages.specialist)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 bg-[#29231F] hover:bg-[#49392F] text-[#F7F5F0] py-4 px-6 text-xs uppercase tracking-[0.18em] font-medium transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#B49A70]" />
              <span>Fale com um especialista</span>
            </a>

            <div className="space-y-2 text-xs text-[#49392F]">
              <a
                href={`tel:${SITE_CONFIG.contact.phoneTel}`}
                className="flex items-center gap-2 hover:text-[#29231F]"
              >
                <Phone className="w-3.5 h-3.5 text-[#B49A70]" />
                <span>Telefone e WhatsApp: {SITE_CONFIG.contact.phoneDisplay}</span>
              </a>
              <p className="flex items-start gap-2 text-[#858078]">
                <MapPin className="w-3.5 h-3.5 text-[#B49A70] shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.address.fullAddress}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

