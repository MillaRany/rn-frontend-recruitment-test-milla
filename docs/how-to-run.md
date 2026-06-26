# Guia de execução

Aplicativo para explorar personagens de Rick and Morty usando a [GraphQL API pública](https://rickandmortyapi.com/graphql).

## Pré-requisitos

- **Node.js** >= 18
- **Yarn** 1.x
- App **Expo Go** no celular (Google Play / App Store) ou emulador Android / simulador iOS

## Setup

Crie um arquivo `.env` na raiz do projeto:

```env
EXPO_PUBLIC_API_URI='https://rickandmortyapi.com/graphql'
```

## Rodar

```bash
yarn start
```

## Ver no celular

1. Celular e computador na **mesma rede Wi-Fi**
2. Instale o **Expo Go** no celular
3. Escaneie o QR code que aparece no terminal
4. O app abre automaticamente

## Testes e verificação

```bash
yarn test # testes unitários e de componente (Jest)
```

## Comandos rápidos

| Comando | O que faz |
|---------|-----------|
| `yarn start` | Inicia servidor de desenvolvimento |
| `yarn android-emulator` | Inicia no emulador Android |
| `yarn android-tunnel` | Iniciar servidor de desenvolvimento via tunel (nao precisa estar no mesmo wifi) |
| `yarn web` | Inicia no navegador |
| `yarn test` | Roda testes |
| `npx tsc --noEmit` | Verifica tipos |
