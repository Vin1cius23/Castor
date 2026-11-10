export interface DifferentialItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: 'award' | 'cpu' | 'feather' | 'user-check';
}

export interface ProductCategory {
  id: string;
  slug: string;
  name: string;
  shortFilterLabel?: string;
  subtitle: string;
  editorialTitle: string;
  supportingPhrase: string;
  description: string;
  image: string;
  layoutSpan: 'large' | 'medium' | 'wide' | 'standard';
  highlights: string[];
}

export type FirmnessLevel = 'Macio' | 'Médio' | 'Firme';

/**
 * Estrutura centralizada de produtos para fácil edição futura.
 * Basta alterar nome, categoria, descrição, firmeza, tecnologia, medidas e imagem.
 */
export interface ProductItem {
  id: string;
  name: string;
  category: string;
  categorySlug:
    | 'colchoes'
    | 'camas-box'
    | 'cabeceiras'
    | 'travesseiros'
    | 'estofados'
    | 'poltronas'
    | 'acessorios-para-cama';
  description: string;
  firmness: FirmnessLevel;
  technology: string;
  sizes: string[];
  image: string;
  /** Define o produto principal exibido no card largo de destaque na Home */
  isMainHighlight?: boolean;
  /** Define os produtos exibidos na grade de 3 colunas da Home */
  featured?: boolean;
}

export interface BrandMilestone {
  year: string;
  title: string;
  description: string;
  location: string;
}

/**
 * Link oficial de WhatsApp para consulta de modelos na Vitrine e Catálogo.
 * Inclui o nome do modelo como parâmetro de texto quando acionado.
 */
export const WHATSAPP_CATALOG_BASE_LINK = 'https://wa.me/message/UBIY5MDBGAFEJ1';

export function getProductWhatsAppLink(modelName: string): string {
  const message = `Olá! Gostaria de consultar informações, medidas e condições sobre o ${modelName}.`;
  return `${WHATSAPP_CATALOG_BASE_LINK}?text=${encodeURIComponent(message)}`;
}

/**
 * PRODUTOS CENTRALIZADOS (PLACEHOLDERS IDENTIFICÁVEIS PARA SUBSTITUIÇÃO PELO CATÁLOGO OFICIAL)
 * Edite este array para atualizar os modelos exibidos na Home e na página /produtos.
 */
export const CATALOG_PRODUCTS: ProductItem[] = [
  {
    id: 'modelo-castor-01',
    name: 'Modelo Castor 01',
    category: 'Colchões',
    categorySlug: 'colchoes',
    description:
      'Colchão principal em destaque com acabamento refinado e composição pensada para noites de extremo conforto.',
    firmness: 'Médio',
    technology: 'Molas Ensacadas • Pillow Top',
    sizes: ['Solteiro', 'Casal', 'Queen', 'King'],
    image:
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=85',
    isMainHighlight: true,
    featured: true,
  },
  {
    id: 'modelo-castor-02',
    name: 'Modelo Castor 02',
    category: 'Colchões',
    categorySlug: 'colchoes',
    description:
      'Toque envolvente e acolhimento suave para quem prioriza sensação de maciez ao deitar.',
    firmness: 'Macio',
    technology: 'Molas Ensacadas • Pillow Top',
    sizes: ['Casal', 'Queen', 'King'],
    image:
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=85',
    featured: true,
  },
  {
    id: 'modelo-castor-03',
    name: 'Modelo Castor 03',
    category: 'Colchões',
    categorySlug: 'colchoes',
    description:
      'Sustentação estável e suporte firme para alinhamento postural durante o descanso.',
    firmness: 'Firme',
    technology: 'Espuma',
    sizes: ['Solteiro', 'Casal', 'Queen', 'King'],
    image:
      'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1000&q=85',
    featured: true,
  },
  {
    id: 'modelo-castor-04',
    name: 'Modelo Castor 04',
    category: 'Camas Box',
    categorySlug: 'camas-box',
    description:
      'Base estruturada com amplo espaço interno e acabamento elegante para compor o dormitório.',
    firmness: 'Firme',
    technology: 'Base Box Baú',
    sizes: ['Solteiro', 'Casal', 'Queen', 'King'],
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=85',
    featured: true,
  },
  {
    id: 'modelo-castor-05',
    name: 'Modelo Castor 05',
    category: 'Cabeceiras',
    categorySlug: 'cabeceiras',
    description:
      'Cabeceira estofada com design contemporâneo que valoriza a composição da cama.',
    firmness: 'Médio',
    technology: 'Painel Estofado',
    sizes: ['Casal', 'Queen', 'King'],
    image:
      'https://images.unsplash.com/photo-1540518614846-7ede433c4576?auto=format&fit=crop&w=1000&q=85',
    featured: true,
  },
  {
    id: 'modelo-castor-06',
    name: 'Modelo Castor 06',
    category: 'Travesseiros',
    categorySlug: 'travesseiros',
    description:
      'Apoio cervical equilibrado e toque macio para complementar a experiência do colchão.',
    firmness: 'Macio',
    technology: 'Espuma • Conforto Cervical',
    sizes: ['Padrão', 'King'],
    image:
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=85',
    featured: true,
  },
  {
    id: 'modelo-castor-07',
    name: 'Modelo Castor 07',
    category: 'Poltronas',
    categorySlug: 'poltronas',
    description:
      'Poltrona de descanso com linhas elegantes para suítes, quartos e espaços de leitura.',
    firmness: 'Médio',
    technology: 'Espuma • Estrutura Estofada',
    sizes: ['Medida Única'],
    image:
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=85',
    featured: true,
  },
  {
    id: 'modelo-castor-08',
    name: 'Modelo Castor 08',
    category: 'Estofados',
    categorySlug: 'estofados',
    description:
      'Estofado amplo e confortável pensado para momentos de pausa e convivência.',
    firmness: 'Médio',
    technology: 'Espuma • Assento Conforto',
    sizes: ['2 Lugares', '3 Lugares'],
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=85',
    featured: false,
  },
  {
    id: 'modelo-castor-09',
    name: 'Modelo Castor 09',
    category: 'Acessórios',
    categorySlug: 'acessorios-para-cama',
    description:
      'Linha de proteção e enxoval para preservar o colchão com toque agradável no dia a dia.',
    firmness: 'Macio',
    technology: 'Proteção Impermeável • Têxtil',
    sizes: ['Solteiro', 'Casal', 'Queen', 'King'],
    image:
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=85',
    featured: false,
  },
  {
    id: 'modelo-castor-10',
    name: 'Modelo Castor 10',
    category: 'Colchões',
    categorySlug: 'colchoes',
    description:
      'Equilíbrio entre acolhimento inicial e suporte individual para noites tranquilas.',
    firmness: 'Médio',
    technology: 'Molas Ensacadas',
    sizes: ['Solteiro', 'Casal', 'Queen', 'King'],
    image:
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1000&q=85',
    featured: false,
  },
];

// Mantém exportação compatível
export const FEATURED_PRODUCTS = CATALOG_PRODUCTS;

/**
 * 4. SEÇÃO DE DIFERENCIAIS
 */
export const DIFFERENTIALS_DATA: DifferentialItem[] = [
  {
    id: 'tradicao-experiencia',
    number: '01',
    title: 'Tradição e experiência',
    description:
      'Desde 1962 construindo uma trajetória de excelência na indústria colchoeira nacional, unindo conhecimento técnico, rigor produtivo e credibilidade reconhecida em todo o país.',
    iconName: 'award',
  },
  {
    id: 'tecnologia-inovacao',
    number: '02',
    title: 'Tecnologia e inovação',
    description:
      'Sistemas de suporte como o exclusivo Pocket System® de molas ensacadas individualmente e espumas de alta performance desenvolvidas com controle laboratorial próprio.',
    iconName: 'cpu',
  },
  {
    id: 'conforto-qualidade',
    number: '03',
    title: 'Conforto e qualidade',
    description:
      'Acabamentos refinados, tecidos de toque macio e diferentes níveis de suporte pensados para acolher o corpo com equilíbrio ergonômico e durabilidade.',
    iconName: 'feather',
  },
  {
    id: 'atendimento-especializado',
    number: '04',
    title: 'Atendimento especializado',
    description:
      'Na Exclusiva Castor de Piracicaba, nossa consultoria dedicada orienta sua escolha por meio da experimentação presencial em ambiente climatizado e acolhedor.',
    iconName: 'user-check',
  },
];

/**
 * 5. CATEGORIAS DE PRODUTOS (Com título editorial curto e frase de apoio para cada categoria)
 */
export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'colchoes',
    slug: 'colchoes',
    name: 'Colchões',
    shortFilterLabel: 'Colchões',
    subtitle: 'Molas Pocket System® & Espumas Selecionadas',
    editorialTitle: 'A ciência do descanso em sua forma mais pura.',
    supportingPhrase:
      'Modelos em molas ensacadas e espumas selecionadas com diferentes níveis de firmeza para acolher cada biotipo.',
    description:
      'Soluções em colchões de molas ensacadas individualmente (Pocket System® — exclusivo da Castor no Brasil) e colchões de espuma em diferentes densidades e níveis de conforto.',
    image:
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1400&q=85',
    layoutSpan: 'large',
    highlights: [
      'Molas ensacadas individualmente Pocket System®',
      'Colchões de espuma com diferentes níveis de firmeza',
      'Opções de medidas Solteiro, Casal, Queen e King',
    ],
  },
  {
    id: 'camas-box',
    slug: 'camas-box',
    name: 'Camas Box',
    shortFilterLabel: 'Camas Box',
    subtitle: 'Tradicionais, Baú & Cama Acoplada',
    editorialTitle: 'Base sólida, proporção elegante e funcionalidade.',
    supportingPhrase:
      'Estruturas tradicionais, opções com baú interno e modelos com cama auxiliar para otimizar seu dormitório.',
    description:
      'Bases estruturadas com madeira de reflorestamento, incluindo boxes tradicionais, boxes baú para otimização inteligente de espaço e boxes com cama auxiliar acoplada.',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85',
    layoutSpan: 'medium',
    highlights: [
      'Boxes tradicionais de alta estabilidade',
      'Boxes baú com amplo espaço interno',
      'Boxes com cama acoplada para maior versatilidade',
    ],
  },
  {
    id: 'cabeceiras',
    slug: 'cabeceiras',
    name: 'Cabeceiras',
    shortFilterLabel: 'Cabeceiras',
    subtitle: 'Design & Acabamento para o Dormitório',
    editorialTitle: 'Moldura arquitetônica para o seu quarto.',
    supportingPhrase:
      'Acabamentos estofados e texturas neutras que transformam a cama no ponto focal da suíte.',
    description:
      'Cabeceiras estofadas e estruturadas que emolduram a cama com elegância arquitetônica, agregando conforto visual e apoio ergonômico ao quarto.',
    image:
      'https://images.unsplash.com/photo-1540518614846-7ede433c4576?auto=format&fit=crop&w=1200&q=85',
    layoutSpan: 'standard',
    highlights: [
      'Estofamento com costuras e texturas sofisticadas',
      'Harmonia estética com os conjuntos Box Castor',
      'Proporções pensadas para diferentes medidas de cama',
    ],
  },
  {
    id: 'travesseiros',
    slug: 'travesseiros',
    name: 'Travesseiros',
    shortFilterLabel: 'Travesseiros',
    subtitle: 'Alinhamento Cervical & Maciez',
    editorialTitle: 'O complemento essencial para um sono reparador.',
    supportingPhrase:
      'Opções de altura e maciez pensadas para harmonizar o apoio cervical ao suporte do seu colchão.',
    description:
      'Linha diversificada de travesseiros desenvolvidos para complementar o suporte do colchão, favorecendo o alinhamento adequado da cabeça e do pescoço durante o repouso.',
    image:
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1200&q=85',
    layoutSpan: 'standard',
    highlights: [
      'Diferentes alturas e perfis de maciez',
      'Materiais selecionados para conforto térmico e tátil',
      'Experimentação presencial junto aos colchões na loja',
    ],
  },
  {
    id: 'estofados',
    slug: 'estofados',
    name: 'Estofados',
    shortFilterLabel: 'Estofados',
    subtitle: 'Conforto Castor para Áreas de Convivência',
    editorialTitle: 'Aconchego e sofisticação para receber e relaxar.',
    supportingPhrase:
      'A tradição em espumas e ergonomia da Castor traduzida em estofados elegantes para o living.',
    description:
      'Sofás e estofados que levam a tradição em espumas e ergonomia da Castor para a sala de estar, combinando estética contemporânea e aconchego.',
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85',
    layoutSpan: 'standard',
    highlights: [
      'Espumas de alta resiliência e toque acolhedor',
      'Linhas contemporâneas para ambientes elegantes',
      'Acabamento pensado para o uso diário com conforto',
    ],
  },
  {
    id: 'poltronas',
    slug: 'poltronas',
    name: 'Poltronas',
    shortFilterLabel: 'Poltronas',
    subtitle: 'Leitura, Descanso & Decoração',
    editorialTitle: 'Um convite à pausa e à contemplação.',
    supportingPhrase:
      'Peças de presença sutil e desenho ergonômico para valorizar suítes, salas e recantos de leitura.',
    description:
      'Poltronas desenhadas para criar recantos de leitura, relaxamento e contemplação no quarto ou no living, unindo presença decorativa e ergonomia.',
    image:
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85',
    layoutSpan: 'medium',
    highlights: [
      'Design versátil para suítes e salas de estar',
      'Assento e encosto projetados para relaxamento',
      'Revestimentos em tons neutros e sofisticados',
    ],
  },
  {
    id: 'acessorios-para-cama',
    slug: 'acessorios-para-cama',
    name: 'Acessórios para cama',
    shortFilterLabel: 'Acessórios',
    subtitle: 'Capas Impermeáveis, Protetores & Roupas de Cama',
    editorialTitle: 'Cuidado, proteção e toque suave todos os dias.',
    supportingPhrase:
      'Protetores impermeáveis e enxoval selecionados para preservar seu colchão e elevar o conforto tátil.',
    description:
      'Capas impermeáveis, protetores de colchão e enxoval selecionados para preservar a integridade do seu colchão e elevar a sensação de conforto no dia a dia.',
    image:
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=85',
    layoutSpan: 'wide',
    highlights: [
      'Capas impermeáveis que protegem e prolongam a conservação',
      'Roupas de cama de toque suave e acabamento elegante',
      'Complementos pensados para a experiência completa do sono',
    ],
  },
];

/**
 * 8. SEÇÃO SOBRE A MARCA CASTOR — Marcos históricos verificados no site institucional
 */
export const CASTOR_MILESTONES: BrandMilestone[] = [
  {
    year: '1962',
    title: 'Origem em Ourinhos e o Sonho do Fundador',
    location: 'Vila Musa • Ourinhos/SP',
    description:
      'O Dr. Hélio Silva funda a Colchões Hélio Silva em uma oficina artesanal. O nome "Castor" nasceu de um sonho marcante com um novelo de lã vermelha que simbolizava maciez e perfeição, aliado ao espírito construtor e dedicado dos castores.',
  },
  {
    year: '1983',
    title: 'Expansão para o Distrito Industrial',
    location: 'Distrito Industrial Dr. Hélio Silva • Ourinhos/SP',
    description:
      'A empresa transfere sua sede para o Distrito Industrial Doutor Hélio Silva, realizando expressivos investimentos em tecnologia produtiva e consolidando-se como referência nacional.',
  },
  {
    year: '1988',
    title: 'Pioneirismo no Programa Pró-Espuma (INER)',
    location: 'Qualidade & Normatização',
    description:
      'A Castor torna-se uma das primeiras empresas do país a aderir ao programa Pró-Espuma, do Instituto Nacional de Estudos do Repouso (INER), elevando os padrões de excelência do setor.',
  },
  {
    year: '1992–1993',
    title: 'Laboratório Próprio e Certificação ISO 9001',
    location: 'Controle Rigoroso de Qualidade',
    description:
      'Em 1992 cria seu centro laboratorial próprio em Ourinhos para monitorar cada etapa da produção, conquistando em 1993 a certificação internacional ISO 9001.',
  },
  {
    year: '2023',
    title: 'Inauguração da Exclusiva Castor de Piracicaba',
    location: 'São Dimas • Piracicaba/SP',
    description:
      'Em julho de 2023, Piracicaba e região ganham um showroom exclusivo em São Dimas, com ambiente climatizado, estacionamento próprio e curadoria completa da marca.',
  },
  {
    year: 'Presente',
    title: 'Presença Nacional, Sustentabilidade e ESG',
    location: '4 Unidades Fabris no Brasil',
    description:
      'Com fábricas em Ourinhos (SP), Passo Fundo (RS), Juiz de Fora (MG) e Pombos (PE), a Castor destaca-se pelo uso de madeira de reflorestamento, logística reversa, certificação GPTW, certificação ESG (2024) e adesão ao Pacto Global da ONU.',
  },
];

export const VERIFIED_BRAND_CREDENTIALS = [
  {
    title: 'Fundada em 1962',
    subtitle: 'Mais de 6 décadas de história em Ourinhos/SP',
  },
  {
    title: '4 Unidades Fabris',
    subtitle: 'Ourinhos/SP, Passo Fundo/RS, Juiz de Fora/MG e Pombos/PE',
  },
  {
    title: 'ISO 9001 & Pró-Espuma',
    subtitle: 'Centro laboratorial próprio e rigor técnico desde os anos 1990',
  },
  {
    title: 'Compromisso ESG & ONU',
    subtitle: 'Madeira de reflorestamento, logística reversa e Pacto Global',
  },
];
