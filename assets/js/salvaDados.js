const btnSave = document.querySelector("[data-save-btn]");

btnSave.addEventListener("click", (e) => {
  e.preventDefalt;

  const tituloProjeto = document.querySelector("[data-title]").value;
  const descricaoProjeto = document.querySelector("[data-description]").value;
  const linguagemProjeto = document.querySelector("[data-codeLang]").value;
  const corProjeto = document.querySelector("[data-color]").value;
  const codigoProjeto = document.querySelector("code").innerText;

  validaDados(
    tituloProjeto,
    descricaoProjeto,
    linguagemProjeto,
    corProjeto,
    codigoProjeto
  );
});

function validaDados(titulo, descricao, linguagem, cor, codigo) {
  if (titulo.length <= 0 || descricao.length <= 0 || codigo.length <= 0) {
    if(titulo.length <= 0 ) alert("Informe um título para o projeto");
    if(descricao.length <= 0 ) alert("Informe uma descrição para o projeto");
    if(codigo.length <= 0 ) alert("Informe o código do projeto");
    return;
  }

  const dadosDoProjeto = pegaDados(titulo, descricao, linguagem, cor, codigo);
  salvaProjeto(dadosDoProjeto);
}

function pegaDados(titulo, descricao, linguagem, cor, codigo) {
  let novoId = localStorage.length;

  const novoProjeto = {
    id: novoId,
    descricaoProjeto: {
      title: titulo,
      description: descricao,
      lang: linguagem,
      color: cor,
      code: codigo,
    }
  };

  return novoProjeto;
}

function salvaProjeto(projeto) {
  if (localStorage !== "undefined") {
    console.log("possui localstorage");
    localStorage.setItem(projeto.id, JSON.stringify(projeto));
    window.location.href = "./comunidade.html";
    return;
  }

  console.log("não suporta localstorage");
}
