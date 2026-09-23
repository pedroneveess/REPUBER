

Clone da interface do Uber — 
Foco no frontend, criação do layout e design baseado no aplicativo do Uber.
Feito com React Native, Typescript, Expo, Expo router, OpenStreetMap com Leaflet.


- **Tela de início** no estilo Uber: Botao de pesquisa, ações rápidas (Corrida, Entregas, Reservar, Alugar), cards de sugestão e destinos salvos
- **Bottom tabs**: Início, Opções, Atividades e Conta.
- **Top tabs** dentro da tela de Home: Uber e Envios
- **Mapa**: dá pra tocar em qualquer ponto, cai o marcador do destino, desenha a rota e mostra distância e tempo de chegada.


Comecei com a criação do design e layout basicos, criando os componentes e estilizando as telas.
Tentei fazer o mapa com o React Native Maps onde não obtive nenhum sucesso. Na web o React Native Maps não é compativel então não aparece e no Expo Go ele apenas ficava com uma tela totalmente preta. O aplicativo pedia permissão de localização mas não funcionava de jeito nenhum.
Sem conseguir fazer na mão pedi pra IA fazer pra mim(exato).
Inicialmente pedi para trocar o React Native Maps para a biblioteca oficial do Expo só que a biblioteca pede para utilizar da API gratuita do google maps que não consegui ter acesso pois aconteceu um erro no login(Não sei oque aconteceu).
Tive que buscar outra alternativa e pelo Youtube vi o OpenStreetMap, mapa livre e gratuito que seria possivel utlizar. Para faze-lo funcionar eu precisaria de algo que coloque o mapa pra dentro do codigo e ai entra o Leaflet, principal biblioteca JavaScript de código aberto para mapas interativos compatíveis. 
Ultima atuaização foi para criar uma build de um APK para testar como download no celular.
Link da build: https://expo.dev/accounts/neveess7/projects/REPUBER/builds/35f9920d-d5ac-4b2a-9389-89296a291769
