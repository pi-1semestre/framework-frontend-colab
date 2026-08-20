# framework-img-vue

Este modelo ajuda você a começar a desenvolver com Vue 3 e Vite.

## Configuração Recomendada da IDE

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (desative o Vetur).

## Configuração Recomendada do Navegador

- Navegadores baseados em Chromium (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Ativar Formatador de Objetos Personalizado no Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Ativar Formatador de Objetos Personalizado no Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Suporte a Tipos para Imports `.vue` em TS

O TypeScript não consegue lidar com informações de tipo para imports `.vue` por padrão, então substituímos a CLI `tsc` por `vue-tsc` para a verificação de tipos. Nos editores, precisamos do [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) para que o serviço de linguagem do TypeScript reconheça os tipos `.vue`.

## Personalizar a Configuração

Veja a [Referência de Configuração do Vite](https://vite.dev/config/).

## Configuração do Projeto

```sh
npm install
```

### Compilar e Recarregar a Quente para Desenvolvimento

```sh
npm run dev
```

### Verificar Tipos, Compilar e Minificar para Produção

```sh
npm run build
```
