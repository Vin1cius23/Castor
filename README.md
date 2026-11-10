# Exclusiva Castor de Piracicaba — Website Institucional e Comercial Premium

Redesign completo da presença digital da **Exclusiva Castor de Piracicaba** (`Exclusiva Móveis e Colchões LTDA`), projetado com direção de arte editorial, foco em conversão via WhatsApp e preservação integral da identidade oficial da marca **Castor**.

> **Conceito central:** *"Exclusiva Castor — Seu descanso merece o melhor."*

---

## 1. Direção Criativa & Identidade Visual

### Paleta de Cores Oficial do Projeto
- **Off-white (Fundo principal):** `#F7F5F0`
- **Bege Editorial:** `#E8E0D4`
- **Marrom Sofisticado:** `#49392F`
- **Marrom Escuro:** `#29231F`
- **Dourado Discreto (Detalhes, divisores e ícones):** `#B49A70`
- **Branco:** `#FFFFFF`
- **Cinza Neutro:** `#858078`

### Tipografia
- **Títulos e Destaques Editoriais:** `Playfair Display` & `Cormorant Garamond`
- **Textos, Interface e Navegação:** `Manrope` & `Inter`

---

## 2. Arquitetura do Projeto

```text
e:\Castor
├── public/
│   ├── images/
│   │   ├── logo-castor-oficial.png              # Logo oficial Castor preservada
│   │   ├── logo-exclusiva-castor-piracicaba.jpg # Assinatura Exclusiva Castor Piracicaba
│   │   ├── loja-fachada-piracicaba.jpg          # Fotografia real da fachada (Av. Torquato da Silva Leitão, 571)
│   │   └── loja-interior-piracicaba.jpg         # Fotografia real do showroom interno em Piracicaba
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── config/
│   │   └── siteConfig.ts                        # Ponto único de configuração (WhatsApp, telefone, endereço, horários)
│   ├── data/
│   │   └── catalogData.ts                       # Categorias, vitrine demonstrativa de produtos e marcos históricos
│   ├── hooks/
│   │   └── useRevealOnScroll.ts                 # Microinterações suaves com suporte a prefers-reduced-motion
│   ├── components/
│   │   ├── common/
│   │   │   ├── CastorLogo.tsx                   # Identidade visual oficial Castor + Unidade Piracicaba
│   │   │   └── FloatingWhatsApp.tsx             # Botão flutuante de WhatsApp com menu rápido contextual
│   │   ├── layout/
│   │   │   ├── Header.tsx                       # Header dinâmico (transparente no Hero -> sólido ao rolar)
│   │   │   └── Footer.tsx                       # Rodapé em marrom escuro (#29231F) com informações verificadas
│   │   └── sections/
│   │       ├── HeroSection.tsx                  # Primeira dobra cinematográfica
│   │       ├── DifferentialsSection.tsx         # 4 diferenciais em composição horizontal
│   │       ├── CategoriesSection.tsx            # 7 categorias em mosaico editorial assimétrico
│   │       ├── FeaturedProductsSection.tsx      # Vitrine de destaques com filtro, modal e CTA WhatsApp por produto
│   │       ├── OurStoreSection.tsx              # Seção institucional com fotos reais da unidade Piracicaba
│   │       ├── AboutCastorSection.tsx           # História verificada da Castor (desde 1962 em Ourinhos/SP)
│   │       ├── TestimonialsSection.tsx          # Seção de avaliações sem notas fictícias, integrada ao Google Maps
│   │       └── LocationContactSection.tsx       # Endereço, horários, Google Maps e gerador de consultoria WhatsApp
│   └── pages/
│       ├── HomePage.tsx                         # Experiência principal completa (/)
│       ├── ProductsPage.tsx                     # Catálogo dedicado (/produtos)
│       ├── StorePage.tsx                        # Página dedicada da loja (/nossa-loja)
│       ├── AboutPage.tsx                        # Página dedicada da marca (/sobre-a-castor)
│       └── ContactPage.tsx                      # Página dedicada de contato (/contato)
```

---

## 3. Como Executar Localmente

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Gerar versão otimizada para produção
npm run build
```

---

## 4. Como Atualizar Contatos e Produtos (Preparado para CMS)

- **Alterar telefone, WhatsApp, endereço ou mensagens padrão:** edite `src/config/siteConfig.ts`.
- **Atualizar categorias ou substituir os produtos demonstrativos de referência por itens específicos do estoque:** edite `src/data/catalogData.ts`.

