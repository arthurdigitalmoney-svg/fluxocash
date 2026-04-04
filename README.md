# 💰 FluxoCash - Gestão Financeira Inteligente

Sistema completo de gestão financeira para **Empresas (PJ)** e **Pessoas Físicas (PF)**.

![FluxoCash](https://img.shields.io/badge/React-18-blue) ![Vite](https://img.shields.io/badge/Vite-5-purple) ![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Funcionalidades

- **Dashboard** com visão geral, gráficos e alertas
- **Lançamentos** com busca, filtros e status pago/pendente
- **Contas a Pagar** com vencimentos, prazos e alertas de atraso
- **Comparativo** dia a dia, mês a mês e ano a ano
- **Recorrentes** para aluguel, assinaturas, salários, contas fixas
- **Metas Financeiras** com progresso, aportes mensais e previsão
- **Relatórios** exportáveis em CSV e TXT
- Alternância entre **Empresa** e **Pessoal**

## 🚀 Como rodar localmente

```bash
# 1. Instale as dependências
npm install

# 2. Rode o servidor de desenvolvimento
npm run dev

# 3. Acesse no navegador
# http://localhost:5173
```

## 📦 Como fazer o build para produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

## 🌐 Deploy na Vercel (Gratuito)

### Opção 1: Via GitHub (Recomendado)

1. Crie uma conta em [github.com](https://github.com)
2. Crie um repositório novo (ex: `fluxocash`)
3. Suba os arquivos:
   ```bash
   git init
   git add .
   git commit -m "primeiro commit"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/fluxocash.git
   git push -u origin main
   ```
4. Acesse [vercel.com](https://vercel.com) e faça login com GitHub
5. Clique em **"New Project"** → importe o repositório `fluxocash`
6. A Vercel detecta automaticamente que é Vite + React
7. Clique **"Deploy"** — pronto!

Seu app vai estar em: `https://fluxocash-seuusuario.vercel.app`

### Opção 2: Via CLI da Vercel

```bash
# Instale a CLI
npm i -g vercel

# Na pasta do projeto, rode:
vercel

# Siga as instruções no terminal
```

## 🔗 Domínio próprio (Opcional)

1. Compre um domínio em [registro.br](https://registro.br) (~R$40/ano)
2. Na Vercel, vá em **Settings → Domains**
3. Adicione seu domínio e configure o DNS conforme instruído

## 📁 Estrutura do Projeto

```
fluxocash/
├── index.html          # Página HTML principal
├── package.json        # Dependências e scripts
├── vite.config.js      # Configuração do Vite
├── public/
│   └── favicon.svg     # Ícone do site
└── src/
    ├── main.jsx        # Ponto de entrada React
    └── App.jsx         # Aplicação completa
```

## 🛠 Tecnologias

- **React 18** — Interface reativa
- **Vite 5** — Build ultrarrápido
- **SVG** — Gráficos e ícones sem dependências
- **CSS-in-JS** — Estilização inline com CSS variables

## 📄 Licença

MIT — use como quiser!
