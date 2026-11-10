/**
 * Central configuration file for Exclusiva Castor de Piracicaba.
 * All contact numbers, WhatsApp templates, addresses, and external links
 * are centralized here for effortless maintenance and future CMS integration.
 */

export const SITE_CONFIG = {
  brandName: 'Exclusiva Castor',
  unitName: 'Exclusiva Castor de Piracicaba',
  legalName: 'Exclusiva Móveis e Colchões LTDA',
  cnpj: '50.392.416/0001-70',
  ie: '120.695.751.112',
  centralConcept: 'Exclusiva Castor — Seu descanso merece o melhor.',
  brandTagline: 'Um sonho de colchão.',
  inaugurationDate: 'Julho de 2023',

  contact: {
    // Official verified commercial phone & WhatsApp of Exclusiva Castor Piracicaba
    phoneDisplay: '(19) 3927-3635',
    phoneTel: '+551939273635',
    whatsappNumber: '551939273635',
    whatsappShortLink: 'https://wa.me/message/UBIY5MDBGAFEJ1',
    email: 'castorpiracicaba@gmail.com',
    instagramHandle: '@castorpiracicaba',
    instagramUrl: 'https://www.instagram.com/castorpiracicaba',
  },

  address: {
    street: 'Avenida Torquato da Silva Leitão, 571',
    neighborhood: 'São Dimas',
    city: 'Piracicaba',
    state: 'SP',
    zipCode: '13416-215',
    fullAddress: 'Avenida Torquato da Silva Leitão, 571 — São Dimas, Piracicaba/SP',
    ParkingInfo: 'Estacionamento próprio e acessível em frente à loja',
    googleMapsDirectionsUrl: 'https://maps.app.goo.gl/iXTo4UDhn47sBRdt8',
    googleMapsEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3680.4643746023207!2d-47.646796!3d-22.710975000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c6317076d9f821%3A0x5ff037cdf58807d4!2sCastor%20Piracicaba!5e0!3m2!1spt-BR!2sbr!4v1771616811118!5m2!1spt-BR!2sbr',
  },

  hours: {
    weekdays: 'Segunda a sexta-feira: das 9h às 18h',
    saturday: 'Sábado: das 9h às 13h',
    sundayAndHolidays: 'Domingos e feriados: fechado',
    scheduleStructured: [
      { label: 'Segunda a Sexta-feira', hours: '09h00 às 18h00' },
      { label: 'Sábado', hours: '09h00 às 13h00' },
      { label: 'Domingos e Feriados', hours: 'Fechado' },
    ],
  },

  whatsappMessages: {
    default:
      'Olá! Conheci o site da Exclusiva Castor de Piracicaba e gostaria de saber mais sobre os produtos.',
    specialist:
      'Olá! Conheci o site da Exclusiva Castor de Piracicaba e gostaria de falar com um especialista para escolher o colchão ideal.',
    storeVisit:
      'Olá! Gostaria de receber informações sobre atendimento presencial na loja Exclusiva Castor de Piracicaba.',
    category: (categoryName: string) =>
      `Olá! Conheci o site da Exclusiva Castor de Piracicaba e gostaria de conhecer as opções disponíveis na categoria ${categoryName}.`,
    product: (productName: string) =>
      `Olá! Gostaria de receber informações e condições sobre ${productName}.`,
    customConsultation: (name: string, interest: string, preference: string) =>
      `Olá! Meu nome é ${name}. Vim pelo site da Exclusiva Castor de Piracicaba e tenho interesse em ${interest} (${preference}). Gostaria de falar com um consultor.`,
  },

  navigation: [
    { label: 'Início', path: '/', sectionId: 'inicio' },
    { label: 'Produtos', path: '/produtos', sectionId: 'produtos' },
    { label: 'Nossa Loja', path: '/nossa-loja', sectionId: 'nossa-loja' },
    { label: 'Sobre a Castor', path: '/sobre-a-castor', sectionId: 'sobre-a-castor' },
    { label: 'Contato', path: '/contato', sectionId: 'contato' },
  ],
} as const;

/**
 * Generates an official WhatsApp API link with encoded personalized text.
 */
export function getWhatsAppUrl(message: string = SITE_CONFIG.whatsappMessages.default): string {
  const cleanPhone = SITE_CONFIG.contact.whatsappNumber.replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(message);
  return `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodedMessage}`;
}

