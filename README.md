# Steven Universo | Portal Interativo

Portal de fã responsivo e interativo dedicado ao universo de *Steven Universe*. O projeto reúne história, personagens, fusões, momentos marcantes, jogos, músicas, curiosidades e informações sobre Rebecca Sugar em uma experiência visual inspirada na série.

<p align="center">
  <a href="https://steven-universo-next.vercel.app"><strong>Acessar o projeto na Vercel</strong></a>
  ·
  <a href="https://github.com/pi-1semestre/framework-frontend-colab">Ver repositório</a>
</p>

![Crystal Gems reunidas](./public/artwork/crystal-gems-group.png)

## Sobre o projeto

O portal foi desenvolvido de forma colaborativa para apresentar o universo de *Steven Universe* de maneira organizada, acessível e envolvente. Além do conteúdo informativo, a página oferece filtros, carrosséis, modais, vídeos, um player visual de músicas e um quiz com perguntas variadas.

O conteúdo está distribuído em uma página única, com navegação por seções e layout adaptado para computadores, tablets e celulares.

## Funcionalidades

- apresentação da história e da ordem cronológica da franquia;
- explorador de personagens com categorias e perfis detalhados;
- guia de temas, lugares e conceitos do universo;
- atlas de fusões com integrantes, aparições e vídeos;
- linha do tempo de momentos marcantes com controle de spoilers;
- catálogo de jogos oficiais e suas plataformas;
- seleção de músicas com player interativo e links para o YouTube;
- curiosidades editoriais acompanhadas de fontes;
- quiz sobre personagens, episódios, músicas e bastidores;
- seção de prêmios e informações sobre Rebecca Sugar;
- navegação responsiva e interações acessíveis por teclado.

## Tecnologias

- [Next.js 16](https://nextjs.org/) com App Router;
- [React 19](https://react.dev/);
- [TypeScript](https://www.typescriptlang.org/);
- [Tailwind CSS 4](https://tailwindcss.com/);
- [Lucide React](https://lucide.dev/) para os ícones;
- [Vercel](https://vercel.com/) para hospedagem.

## Como executar localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) 20.9 ou superior;
- npm, incluído na instalação do Node.js.

### Instalação

```bash
git clone https://github.com/pi-1semestre/framework-frontend-colab.git
cd framework-frontend-colab
npm ci
npm run dev
```

Depois, acesse [http://localhost:3000](http://localhost:3000) no navegador.

O projeto não exige variáveis de ambiente para funcionar localmente. Opcionalmente, `NEXT_PUBLIC_SITE_URL` pode ser definida para alterar a URL-base usada nos metadados da aplicação.

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento. |
| `npm run build` | Gera a versão otimizada para produção. |
| `npm start` | Executa a versão de produção após o build. |
| `npm run lint` | Analisa o código com o ESLint. |
| `npm run lint:fix` | Corrige automaticamente problemas compatíveis com o ESLint. |

## Estrutura do projeto

```text
app/
├── _components/   # Componentes e seções da interface
├── _data/         # Conteúdo tipado usado pelo portal
├── globals.css    # Estilos globais e responsivos
├── layout.tsx     # Layout e metadados da aplicação
└── page.tsx       # Página principal

public/
├── artwork/       # Artes de destaque e grupos
├── characters/    # Retratos dos personagens
├── fusions/       # Imagens das fusões
├── games/         # Capas dos jogos
└── people/        # Fotografias de pessoas reais
```

## Colaboração

Este projeto foi construído em equipe. O histórico completo pode ser consultado na página de [contribuidores do repositório](https://github.com/pi-1semestre/framework-frontend-colab/graphs/contributors).

## Aviso legal

Projeto de fã, sem fins comerciais. *Steven Universe* e seus personagens pertencem aos respectivos detentores de direitos. As imagens são utilizadas com finalidade informativa e educacional.
