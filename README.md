# REPUBER

Clone da interface do Uber — feito só pra estudar UI/UX. Sem backend, sem complexidade: o app inteiro é focado em layout, navegação e mapa.

## Stack

- React Native + **Expo** (SDK 57)
- **Expo Router** (bottom tabs + top tabs)
- **TypeScript**
- Mapa: **Leaflet + OpenStreetMap** dentro de uma WebView
- **expo-location** pra localização atual
- APK feito com **EAS Build**

## O que tem

- **Tela de início** no estilo Uber: saudação, busca "Para onde?", ações rápidas (Corrida, Entregas, Reservar, Alugar), cards de sugestão e destinos salvos
- **Bottom tabs**: Início, Opções, Atividades e Conta (tudo com conteúdo mock)
- **Top tabs** dentro do início: Uber e Envios
- **Mapa**: dá pra tocar em qualquer ponto, cai o marcador do destino, desenha a rota e mostra distância e tempo de chegada (dado real do OSRM) — com ride sheet estilo Uber e botão de minimizar

## A saga do mapa (resumo)

1. Comecei com `react-native-maps` → mapa preto no Expo Go, porque a chave do Google Maps embutida lá tá quebrada
2. Testei `expo-maps` → exigia development build e chave com billing
3. Fui de **OpenStreetMap + WebView (Leaflet)** com rota pelo **OSRM** → sem chave, sem conta, sem cobrança. Ficou bom e é o que está hoje

## Rodando

```bash
cd frontend
npm install
npx expo start
```

Escaneia o QR com o Expo Go e vai.

## Gerando o APK

```bash
cd frontend
npx eas-cli build --platform android --profile preview
```

O link do APK aparece no terminal e em https://expo.dev (conta `neveess7`, projeto `REPUBER`).

## Estrutura

```
frontend/src/
├── app/
│   ├── _layout.tsx          # Stack raiz
│   ├── map.tsx              # Mapa (WebView + Leaflet)
│   └── (tabs)/
│       ├── _layout.tsx      # Bottom tabs
│       ├── options / tasks / account
│       └── (main)/
│           ├── _layout.tsx  # Top tabs Uber | Envios
│           ├── index.tsx    # Tela de início
│           └── shipments.tsx
├── components/              # Cards, botões, overlays, ride sheet
└── global/color-variants.ts # Paleta de cores
```

Obs.: ícones e splash são placeholders pretos gerados na largada — troque pelos assets reais quando quiser.