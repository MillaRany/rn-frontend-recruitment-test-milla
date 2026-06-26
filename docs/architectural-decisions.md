# Como o app é estruturado

## Stack

Expo + React Native + TypeScript. GraphQL com Apollo. Estado local com Zustand salvo no AsyncStorage. Navegação por Expo Router.

## Estrutura

```
src/
├── api/               # ApolloClient + queries GraphQL
├── app/               # Expo Router (rotas por arquivo)
│   ├── (tabs)/
│   │   ├── characters/   # Lista de personagens
│   │   ├── favorites/    # Lista de favoritos
│   │   └── stats/        # Estatísticas
│   └── character/        # Detalhe do personagem
├── components/        # Componentes de UI reutilizáveis
├── hooks/             # Custom hooks (useCharacters, useFavorites, useDoubleTap, useDebouncedValue)
├── store/             # Zustand store (favoritos)
├── theme/             # Design tokens
├── types/             # Tipos TypeScript
└── utils/             # Funções puras (error, percentage, stats)
```

## Como as telas funcionam

Cada tela segue o mesmo padrão:

```
Tela (index.tsx)
  → chama um Controller (useAlgoController.ts)
    → que usa hooks (useCharacters, useFavorites) e o store (favoritos)
```

A tela só desenha o layout. O controller organiza os dados. Os hooks buscam na API.

### Characters

Mostra os personagem numa lista infinita. Conforme o usuário rola, carrega mais. Dá pra buscar por nome (com um delay de 400ms pra não fazer requisição a cada letra) e filtrar por status. Puxar a lista pra baixo atualiza.

### Favorites

Mostra só os personagens favoritados. Os IDs ficam salvos no celular (AsyncStorage) e o app busca os dados completos na API.

### Stats

Mostra estatísticas baseadas nos favoritos do usuário: total, distribuição de status (vivo/morto/desconhecido), espécies mais favoritadas. Se não tem favoritos, mostra uma mensagem.

### Detail

Tela com todas as informações de um personagem. O botão de coração favorita/desfavorita.

## Tratamento de erro

- **Sem dados + erro**: tela cheia com mensagem e botão "Try again"
- **Carregando mais itens + erro**: aviso no rodapé, o que já carregou continua lá
- **Sem favoritos**: mensagem "No favorites yet"
- **API lenta**: animação de carregamento

As mensagens de erro usam o tema do Rick and Morty (ex: "The portal fluid is leaking").

## Decisões rápidas

- Stats usam favoritos (dados relevantes pro usuário) ao invés de amostra genérica da API
- Busca com delay de 400ms pra não sobrecarregar a API
- Um toque abre detalhes, dois toques seguidos favorita
- Dados de favoritos persistem memo fechando o app (AsyncStorage)
- Roda no navegador também (react-native-web), sem precisar mudar código
