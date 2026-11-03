// CONFIGURAÇÃO DA PÁGINA
// Tudo que você pode precisar trocar fica neste arquivo.

window.APP_CONFIG = {
  // Endpoint do Formspree que recebe as respostas.
  // Para trocar, cole o novo endereço: https://formspree.io/f/SEU_ID
  formspreeEndpoint: "https://formspree.io/f/mljjagjj",

  // Vídeos de cada bloco.
  // "src" aceita:
  //   - arquivo da pasta do projeto (ex: "cruzamento.mp4")
  //   - link do YouTube (público ou não listado)
  //   - link do Vimeo
  //   - link direto de um arquivo .mp4 hospedado em outro lugar
  // "poster" é a imagem de capa que aparece antes de dar play.
  videos: {
    1: { src: "1x1-defendendo.mp4", poster: "poster-1x1-defendendo.jpg" },
    2: { src: "gols-sofridos.mp4",   poster: "poster-gols-sofridos.jpg" },
    3: { src: "cruzamento.mp4",      poster: "poster-cruzamento.jpg" }
  }
};
