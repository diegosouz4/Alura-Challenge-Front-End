(() => {
  const listaProjetos = document.querySelector("[data-lista-projetos]");

  listaProjetos.addEventListener("click", (e) => {
    const projetos = document.querySelectorAll(".editor__card");
    const arrayProjetos = Array.from(projetos);

    const alvo = e.target;
    let alvoId = 0;

    if (alvo.classList.contains("btnLike")) {
      let listaDoAlvo = alvo.parentNode.parentNode.parentNode.parentNode;
      let contador = listaDoAlvo.querySelector(".count--likes");
      alvoId = arrayProjetos.indexOf(listaDoAlvo);
      somaLike(alvoId, contador);
    }

    if (alvo.classList.contains("btnComments")) {
      let listaDoAlvo = alvo.parentNode.parentNode.parentNode.parentNode;
      let contador = listaDoAlvo.querySelector(".count--comments");
      alvoId = arrayProjetos.indexOf(listaDoAlvo);
      somaCommets(alvoId, contador);
    }
  });

  function somaLike(id, span) {
    const dadosSalvos = JSON.parse(localStorage.getItem(id));
    dadosSalvos.descricaoProjeto.likes += 1;
    span.innerText = dadosSalvos.descricaoProjeto.likes;
    localStorage.setItem(dadosSalvos.id, JSON.stringify(dadosSalvos));
  }

  function somaCommets(id, span) {
    const dadosSalvos = JSON.parse(localStorage.getItem(id));
    dadosSalvos.descricaoProjeto.comments += 1;
    span.innerText = dadosSalvos.descricaoProjeto.comments;
    localStorage.setItem(dadosSalvos.id, JSON.stringify(dadosSalvos));
  }
})();
