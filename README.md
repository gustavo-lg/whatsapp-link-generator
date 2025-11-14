# 📱 Gerador de Link para WhatsApp

Uma aplicação web moderna e responsiva para gerar links personalizados do WhatsApp de forma rápida e gratuita. Desenvolvido pela RD Station.

## 🚀 Sobre o Projeto

O **Gerador de Link para WhatsApp** é uma ferramenta gratuita que permite criar links personalizados para iniciar conversas no WhatsApp. Com ele, você pode compartilhar seu número de WhatsApp de forma prática e profissional em redes sociais, sites e outros canais digitais.

### ✨ Funcionalidades Principais

- ✅ **Formulário Intuitivo**: Interface simples e fácil de usar
- ✅ **Validação Robusta**: Validação de telefone brasileiro (com ou sem nono dígito)
- ✅ **Mensagem Personalizada**: Crie mensagens automáticas personalizadas
- ✅ **Link Instantâneo**: Geração imediata do link do WhatsApp
- ✅ **Cópia Rápida**: Copie o link gerado com um clique
- ✅ **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- ✅ **Acessível**: Seguindo padrões WCAG 2.1
- ✅ **SEO Otimizado**: Meta tags, structured data e sitemap configurados

## 🛠️ Stack Tecnológica

### Core
- **React 19.2.0** - Biblioteca JavaScript para interfaces
- **TypeScript 5.9.3** - Superset JavaScript com tipagem estática
- **Vite 7.2.2** - Build tool e dev server rápido
- **React Router DOM 7.9.5** - Roteamento declarativo

### UI & Estilo
- **Material UI (MUI) 7.3.5** - Biblioteca de componentes React
  - `@mui/material` - Componentes principais
  - `@mui/icons-material` - Ícones
  - `@emotion/react` & `@emotion/styled` - CSS-in-JS

### Formulários & Validação
- **React Hook Form 7.66.0** - Gerenciamento de formulários
- **Zod 4.1.12** - Validação de schemas TypeScript-first
- **@hookform/resolvers 5.2.2** - Integração React Hook Form + Zod

### SEO & Meta Tags
- **react-head 3.4.2** - Gerenciamento de tags `<head>` (compatível com React 19)

### Code Quality
- **ESLint 9.39.1** - Linter JavaScript/TypeScript
- **Prettier 3.6.2** - Formatador de código
- **TypeScript ESLint** - Regras específicas para TypeScript

## 📁 Estrutura do Projeto

```
whatsapp-link-generator/
├── public/
│   ├── favico.ico
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/          # Imagens e recursos estáticos
│   ├── components/      # Componentes reutilizáveis
│   │   ├── Footer.tsx
│   │   ├── FormField.tsx
│   │   ├── Header.tsx
│   │   ├── SelectCargo.tsx
│   │   ├── SnackbarAlert.tsx
│   │   ├── WhatsAppFixed.tsx
│   │   └── WhatsAppFixedResult.tsx
│   ├── hooks/          # Custom hooks
│   │   └── useFormLink.ts
│   ├── pages/          # Páginas da aplicação
│   │   ├── FormPage.tsx
│   │   └── ResultPage.tsx
│   ├── routes/         # Configuração de rotas
│   │   └── index.tsx
│   ├── types/          # Definições TypeScript
│   │   └── form.ts
│   ├── utils/          # Funções utilitárias
│   │   └── formatPhone.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🚦 Como Executar

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd whatsapp-link-generator
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse no navegador:
```
http://localhost:5173
```

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build
npm run build        # Cria build de produção

# Code Quality
npm run lint         # Verifica erros de lint
npm run lint:fix     # Corrige erros de lint automaticamente
npm run format       # Formata código com Prettier
npm run format:check # Verifica formatação

# Preview
npm run preview      # Preview do build de produção
```

## 📖 Como Usar

### 1. Página Inicial (Formulário)

Na página principal, preencha:

- **Número do WhatsApp*** (obrigatório)
  - Formato: `(99) 99999-9999` ou `(99) 9999-9999`
  - Aceita números com ou sem nono dígito
  - Apenas números brasileiros

- **Email*** (obrigatório)
  - Deve ser um email válido

- **Cargo*** (obrigatório)
  - Selecione uma opção da lista

- **Mensagem** (opcional)
  - Texto livre para personalizar a mensagem automática

Ao clicar em **"Gerar link grátis"**:
1. Os dados são enviados para o webhook do Zapier
2. O link do WhatsApp é gerado
3. Você é redirecionado para a página de resultado

### 2. Página de Resultado

Na página de resultado você pode:

- **Copiar o link**: Clique no botão "Copie seu link"
  - O botão muda para "Link copiado" com ícone de check verde por 2 segundos

- **Gerar novo link**: Clique em "← Gerar outro link" para voltar ao formulário

- **Adicionar botão no site**: Link para saber mais sobre RD Station Conversas

## 🔧 Funcionalidades Técnicas

### Validação de Telefone

O projeto inclui funções utilitárias para:
- Limpar números de telefone (remover caracteres não numéricos)
- Aplicar máscara brasileira: `(99) 99999-9999`
- Validar formato (10 ou 11 dígitos)
- Formatar para WhatsApp: `55XXXXXXXXXX`

### Integração com Webhook

Ao submeter o formulário, os dados são enviados via POST para:
```
https://hooks.zapier.com/hooks/catch/13309391/uie4g8v/
```

**Payload enviado**:
```json
{
  "nome": "parte_do_email",
  "whatsapp": "(11) 98888-7777",
  "cargo": "Diretor de Marketing",
  "mensagem": "Olá! Quero mais informações.",
  "origem": "Gerador de Link WhatsApp"
}
```

### Geração do Link

O link do WhatsApp é gerado no formato:
```
https://wa.me/55XXXXXXXXXX?text=Mensagem%20Formatada
```

Onde:
- `55` = código do país (Brasil)
- `XXXXXXXXXX` = número limpo e formatado
- `text` = mensagem codificada em URL

## 🎨 Design & UX

- **Fonte**: Red Hat Display (Google Fonts)
- **Cores Principais**:
  - Primária: `#003D5C`
  - Secundária: `#25D366` (WhatsApp)
  - Destaque: `#7BEFFF`, `#C3F628`
- **Responsividade**: Breakpoints do Material UI
- **Acessibilidade**: ARIA labels, navegação por teclado, skip links

## 📱 Responsividade

O projeto é totalmente responsivo com breakpoints:
- **Mobile (xs)**: < 600px
- **Tablet (sm)**: 600px - 960px
- **Desktop (md+)**: > 960px

### Ajustes Específicos

- **Header**: Logo centralizado no mobile, texto oculto
- **WhatsApp Fixo**: Centralizado no mobile, posicionado à esquerda no desktop
- **Cards MediaTopics**: 4 em linha em telas menores, layout adaptativo
- **Formulário**: Campos empilhados no mobile, lado a lado no desktop

## 🔍 SEO

### Meta Tags
- Título dinâmico por página
- Descrição otimizada
- Open Graph (Facebook/LinkedIn)
- Twitter Cards
- Canonical URLs

### Structured Data
- Schema.org WebApplication (JSON-LD)
- Informações sobre preço, categoria e provedor

### Arquivos SEO
- `sitemap.xml` - Mapa do site
- `robots.txt` - Instruções para crawlers

## 🌐 Deploy

O projeto está configurado para deploy no **Vercel**:

1. Conecte seu repositório ao Vercel
2. O build será executado automaticamente
3. O site estará disponível em: `https://whatsapp-link-generator-tau.vercel.app/`

### Variáveis de Ambiente

Nenhuma variável de ambiente é necessária no momento.

## 🧪 Testes

Para executar testes (quando implementados):
```bash
npm test
```

## 📝 Licença

Este projeto é propriedade da RD Station.

## 👥 Contribuindo

Este é um projeto interno da RD Station. Para sugestões ou problemas, entre em contato com a equipe de desenvolvimento.

## 🔗 Links Úteis

- **Site**: https://whatsapp-link-generator-tau.vercel.app/
- **Sitemap**: https://whatsapp-link-generator-tau.vercel.app/sitemap.xml
- **Robots.txt**: https://whatsapp-link-generator-tau.vercel.app/robots.txt
- **RD Station**: https://www.rdstation.com
- **Política de Privacidade**: https://legal.rdstation.com/pt/privacy-policy/

---

Desenvolvido com ❤️ pela equipe RD Station
