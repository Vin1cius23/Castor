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
  subtitle: string;
  description: string;
  image: string;
  layoutSpan: 'large' | 'medium' | 'wide' | 'standard';
  highlights: string[];
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  shortDescription: string;
  detailedDescription: string;
  features: string[];
  image: string;
  featured: boolean;
  isDemoReference: true;
  demoReferenceLabel: string;
}

export interface BrandMilestone {
  year: string;
  title: string;
  description: string;
  location: string;
}

/**
 * 4. SEÇÃO DE DIFERENCIAIS
 * Título exato: "Qualidade que transforma suas noites."
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
 * 5. CATEGORIAS DE PRODUTOS
 * Título exato: "Encontre o conforto ideal para você."
 */
export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'colchoes',
    slug: 'colchoes',
    name: 'Colchões',
    subtitle: 'Molas Pocket System® & Espumas Selecionadas',
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
    subtitle: 'Tradicionais, Baú & Cama Acoplada',
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
    subtitle: 'Design & Acabamento para o Dormitório',
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
    subtitle: 'Alinhamento Cervical & Maciez',
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
    subtitle: 'Conforto Castor para Áreas de Convivência',
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
    subtitle: 'Leitura, Descanso & Decoração',
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
    subtitle: 'Capas Impermeáveis, Protetores & Roupas de Cama',
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
 * 6. PRODUTOS EM DESTAQUE
 * Título exato: "Conheça alguns dos nossos destaques."
 * REGRA 6 & 17.5: Conteúdo demonstrativo claramente identificado como exemplo/referência
 * das linhas comercializadas na loja, sem inventar preços, disponibilidade ou modelos não confirmados.
 */
export const FEATURED_PRODUCTS: ProductItem[] = [
  {
    id: 'colchao-molas-pocket-system',
    name: 'Linha Colchões Pocket System® Castor',
    category: 'Colchões',
    categorySlug: 'colchoes',
    shortDescription:
      'Colchões com tecnologia de molas ensacadas individualmente (Pocket System® — exclusivo da Castor no Brasil), projetados para oferecer suporte anatômico e estabilidade individual.',
    detailedDescription:
      'Representação demonstrativa da linha de colchões com molas Pocket System® comercializada na Exclusiva Castor de Piracicaba. O sistema de molas ensacadas individualmente proporciona adaptação progressiva aos contornos do corpo e reduz a transferência de movimentos entre o casal. Consulte nossa equipe para conhecer os modelos e medidas disponíveis em nosso showroom.',
    features: [
      'Tecnologia Pocket System® exclusiva da Castor no Brasil',
      'Estabilidade individual de movimentos para o casal',
      'Camadas de conforto para acolhimento ergonômico',
      'Disponível para experimentação presencial no showroom',
    ],
    image:
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1000&q=85',
    featured: true,
    isDemoReference: true,
    demoReferenceLabel: 'Item demonstrativo de referência da categoria • Consulte modelos em loja',
  },
  {
    id: 'colchao-espuma-selecionada',
    name: 'Linha Colchões de Espuma Castor',
    category: 'Colchões',
    categorySlug: 'colchoes',
    shortDescription:
      'Colchões de espuma desenvolvidos com rigoroso controle laboratorial de qualidade, oferecendo opções de suporte equilibrado para diferentes biotipos.',
    detailedDescription:
      'Representação demonstrativa da linha de colchões de espuma Castor disponível em nossa unidade de Piracicaba. Produzidos sob rigorosos padrões de controle de qualidade, atendem diferentes preferências de sustentação e maciez. Fale com um especialista para orientação personalizada conforme seu biotipo.',
    features: [
      'Espumas produzidas com monitoramento laboratorial Castor',
      'Opções de firmeza e suporte para diferentes necessidades',
      'Acabamento em tecidos de toque agradável',
      'Orientação especializada em loja para escolha adequada',
    ],
    image:
      'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1000&q=85',
    featured: true,
    isDemoReference: true,
    demoReferenceLabel: 'Item demonstrativo de referência da categoria • Consulte modelos em loja',
  },
  {
    id: 'conjunto-box-bau-tradicional',
    name: 'Linha Camas Box Baú & Tradicional Castor',
    category: 'Camas Box',
    categorySlug: 'camas-box',
    shortDescription:
      'Bases estruturadas em versões tradicional, baú com abertura assistida e cama acoplada, unindo sustentação firme e aproveitamento funcional do espaço.',
    detailedDescription:
      'Representação demonstrativa da linha de Camas Box Castor (Tradicional, Box Baú e Box com Cama Acoplada). Estrutura produzida com madeira de reflorestamento e acabamento coordenado com os colchões e cabeceiras da marca.',
    features: [
      'Versões Tradicional, Box Baú e Box com Cama Acoplada',
      'Estrutura com madeira de reflorestamento',
      'Excelente aproveitamento interno na versão Baú',
      'Design alinhado aos colchões da marca Castor',
    ],
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=85',
    featured: true,
    isDemoReference: true,
    demoReferenceLabel: 'Item demonstrativo de referência da categoria • Consulte modelos em loja',
  },
  {
    id: 'cabeceira-estofada-castor',
    name: 'Linha Cabeceiras Estofadas & Móveis',
    category: 'Cabeceiras',
    categorySlug: 'cabeceiras',
    shortDescription:
      'Cabeceiras com acabamento sofisticado e proporções equilibradas para valorizar a estética do dormitório e proporcionar apoio confortável.',
    detailedDescription:
      'Representação demonstrativa da curadoria de cabeceiras disponível na Exclusiva Castor de Piracicaba. Desenvolvidas para compor conjuntos harmônicos com as camas box da marca e transformar o visual do quarto.',
    features: [
      'Estética contemporânea em tons neutros e elegantes',
      'Apoio acolchoado confortável para leitura na cama',
      'Composição harmônica com diferentes tamanhos de cama box',
      'Consulte opções de revestimentos e dimensões na loja',
    ],
    image:
      'https://images.unsplash.com/photo-1540518614846-7ede433c4576?auto=format&fit=crop&w=1000&q=85',
    featured: true,
    isDemoReference: true,
    demoReferenceLabel: 'Item demonstrativo de referência da categoria • Consulte modelos em loja',
  },
  {
    id: 'travesseiros-conforto-castor',
    name: 'Linha Travesseiros Castor',
    category: 'Travesseiros',
    categorySlug: 'travesseiros',
    shortDescription:
      'Travesseiros projetados para complementar a ergonomia do colchão, proporcionando maciez e suporte adequado para a região cervical.',
    detailedDescription:
      'Representação demonstrativa da linha de travesseiros comercializada na Exclusiva Castor de Piracicaba. Experimente presencialmente em nosso showroom para identificar a altura e o toque ideais para sua posição de dormir.',
    features: [
      'Diferentes perfis de altura e sustentação',
      'Toque macio e excelente recuperação de volume',
      'Ideal para testar em conjunto com seu colchão Castor',
      'Consulte opções disponíveis para pronta-entrega',
    ],
    image:
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=85',
    featured: true,
    isDemoReference: true,
    demoReferenceLabel: 'Item demonstrativo de referência da categoria • Consulte modelos em loja',
  },
  {
    id: 'estofados-poltronas-castor',
    name: 'Linha Estofados & Poltronas de Descanso',
    category: 'Poltronas',
    categorySlug: 'poltronas',
    shortDescription:
      'Poltronas e estofados selecionados para integrar conforto ergonômico e elegância decorativa a suítes, salas de estar e espaços de leitura.',
    detailedDescription:
      'Representação demonstrativa da curadoria de poltronas e estofados disponível na Exclusiva Castor de Piracicaba. Produtos desenvolvidos com o mesmo cuidado em espumas e conforto que consagrou a marca Castor.',
    features: [
      'Ergonomia pensada para momentos de pausa e leitura',
      'Estética atemporal que valoriza dormitórios e livings',
      'Espumas de alta qualidade e acabamento refinado',
      'Atendimento consultivo para escolha do modelo ideal',
    ],
    image:
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=85',
    featured: true,
    isDemoReference: true,
    demoReferenceLabel: 'Item demonstrativo de referência da categoria • Consulte modelos em loja',
  },
  {
    id: 'estofado-living-castor',
    name: 'Linha Estofados para Living Castor',
    category: 'Estofados',
    categorySlug: 'estofados',
    shortDescription:
      'Estofados amplos e acolhedores que levam a tradição de conforto da Castor para os ambientes de convivência da sua casa.',
    detailedDescription:
      'Representação demonstrativa da categoria de estofados disponível na Exclusiva Castor de Piracicaba. Consulte nossa equipe pelo WhatsApp ou visite nosso showroom em São Dimas para conhecer os modelos em exposição.',
    features: [
      'Conforto superior para salas de estar e home theater',
      'Estrutura resistente e acabamento cuidadoso',
      'Curadoria pensada para clientes exigentes',
      'Consulte disponibilidade e medidas via WhatsApp',
    ],
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=85',
    featured: false,
    isDemoReference: true,
    demoReferenceLabel: 'Item demonstrativo de referência da categoria • Consulte modelos em loja',
  },
  {
    id: 'capas-impermeaveis-roupas-cama',
    name: 'Capas Impermeáveis & Roupas de Cama',
    category: 'Acessórios para cama',
    categorySlug: 'acessorios-para-cama',
    shortDescription:
      'Capas protetoras impermeáveis e enxoval de cama para proteger seu investimento e proporcionar noites ainda mais agradáveis.',
    detailedDescription:
      'Representação demonstrativa da linha de acessórios para cama comercializada na Exclusiva Castor de Piracicaba, incluindo capas impermeáveis e roupas de cama para diferentes medidas de colchão.',
    features: [
      'Proteção eficaz contra líquidos e agentes externos',
      'Preservação da higiene e conservação do colchão',
      'Opções compatíveis com diversas medidas e alturas',
      'Toque confortável que não interfere na maciez do colchão',
    ],
    image:
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=85',
    featured: false,
    isDemoReference: true,
    demoReferenceLabel: 'Item demonstrativo de referência da categoria • Consulte modelos em loja',
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

