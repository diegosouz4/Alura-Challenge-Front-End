export function criaModal(mTitulo, mTexto, mBotao, url) {
  const titulo = mTitulo;
  const texto = mTexto;
  const textoBotao = mBotao;
  const novoModal = `
  <div data-modal class="modal__content">
      <h2 class="modal__title">${titulo}</h2>
      <p class="modal__text">${texto}</p>
      <div class="modal__buttons">
          <a class="modal__button button button--fill" href="/comunidade.html">Ir para comunidade</a>
          <a data-btn-modal class="modal__button button button--outline" href="${url}">${textoBotao}</a>
      </div>
  </div>`;
  return  novoModal
}
