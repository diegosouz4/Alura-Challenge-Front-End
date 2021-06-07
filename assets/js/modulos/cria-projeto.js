export function criaProjeto(projeto) {
  const listaDeProjetos = document.querySelector("[data-lista-projetos]");
  const novaLi = document.createElement("li");

  novaLi.classList.add("editor__card");
  novaLi.innerHTML = `
  <a href="/?id=${projeto.id}"><div class="editor__container" style="background-color: ${projeto.descricaoProjeto.color};">
    <code class="editor__code hljs ${projeto.descricaoProjeto.lang}" aria-label="editor"></code>
    <div class="editor__info">
      <div class="comunidade__dots"><span class="dot dot--red"></span><span class="dot dot--yellow"></span><span class="dot dot--green"></span></div>
      <div class="editor__lang"><span class="lang__tag" data-card-lang>${projeto.descricaoProjeto.lang}</span></div>
    </div>
  </div></a>

  <div class="card__content">
    <div class="card__description">
      <h2 class="card__titulo">${projeto.descricaoProjeto.title}</h2>
      <p class="card__about">${projeto.descricaoProjeto.description}</p>
    </div>
    <div class="card__actions">
      <div class="actions__icones">
        <button id="buttonComments" class="icon__comment button button--icon btnComments">
          <img
            src="./assets/img/icons/icon-comment.svg"
            alt="comentários"
          />
          <span class="count count--comments btnComments" >${projeto.descricaoProjeto.comments}</span>
        </button>
        <button id="buttonLikes" class="icon__like button button--icon btnLike">
          <svg
            class="heart btnLike"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="likes"
              clas="btnLike"
              d="M18.0587 1.44659C15.9181 -0.377597 12.7346 -0.0494787 10.7698 1.97783L10.0003 2.77078L9.23077 1.97783C7.26987 -0.0494787 4.08243 -0.377597 1.94185 1.44659C-0.51123 3.5403 -0.640134 7.29804 1.55514 9.56752L9.11359 17.3721C9.60186 17.876 10.3948 17.876 10.8831 17.3721L18.4415 9.56752C20.6407 7.29804 20.5118 3.5403 18.0587 1.44659Z"
            />
          </svg>
          <span class="count btnLike count--likes">${projeto.descricaoProjeto.likes}</span>
        </button>
      </div>
      <div class="actions__user__container">
        <a href="https://github.com/diegosouz4" target="_blank">
          <div class="card__user user">
            <div class="user__thumb"></div>
            <h3 class="user__name">Diego Souza</h3>
          </div>
        </a>
      </div>
    </div>
  </div>`;

  listaDeProjetos.appendChild(novaLi);
}
