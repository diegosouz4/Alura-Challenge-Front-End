import { criaModal } from './cria-modal.js';
import {deletaProjeto} from './deleta_projeto.js'
(() => {
  const btnSave = document.querySelector("[data-save-btn]");
  const btnDel = document.querySelector("[data-delete-btn]");
  const valorId = checaUrl();
  const modalContainer = document.querySelector("[data-modal]");

  

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
      if (titulo.length <= 0) alert("Informe um título para o projeto");
      if (descricao.length <= 0) alert("Informe uma descrição para o projeto");
      if (codigo.length <= 0) alert("Informe o código do projeto");
      return;
    }

    const dadosDoProjeto = pegaDados(titulo, descricao, linguagem, cor, codigo);
    salvaProjeto(dadosDoProjeto);
    
    modalContainer.classList.remove('is--hide')
    modalContainer.innerHTML = criaModal("Projeto Salvo!", "parabéns, você acabou de salvar o seu primeiro projeto.", "Editar projeto", `/?id=${dadosDoProjeto.id}`);
  }

  function pegaDados(titulo, descricao, linguagem, cor, codigo) {
    let novoId = localStorage.length;
    let likesAtual = 0;
    let commentsAtual = 0;

    if (valorId > -1) {
      let dadosSalvos = JSON.parse(localStorage.getItem(valorId));
      novoId = valorId;
      likesAtual = dadosSalvos.descricaoProjeto.likes;
      commentsAtual = dadosSalvos.descricaoProjeto.comments;
    } 

    const novoProjeto = {
      id: novoId,
      descricaoProjeto: {
        title: titulo,
        description: descricao,
        lang: linguagem,
        color: cor,
        code: codigo,
        likes: likesAtual,
        comments: commentsAtual,
      },
    };

    return novoProjeto;
  }

  function salvaProjeto(projeto) {
    if (localStorage !== "undefined") {
      console.log("possui localstorage");
      localStorage.setItem(projeto.id, JSON.stringify(projeto));
      return;
    }

    console.log("não suporta localstorage");
  }

  function checaUrl() {
    const urlAtual = window.location.href;
    const primeiroParametro = urlAtual.split("?");

    if (primeiroParametro[1] == undefined) return -1;

    const segundoParametro = primeiroParametro[1].split("=");
    const urlId = parseInt(segundoParametro[1]);

    dadosParaEditar(urlId);
    btnDel.classList.remove('is--hide');
    btnSave.textContent = "Atualizar projeto"
    return urlId;
  }

  function dadosParaEditar(id) {
    const dadosProjeto = JSON.parse(localStorage.getItem(id));

    const campoTitulo = document.querySelector("[data-title]");
    const campoDescricao = document.querySelector("[data-description]");
    const campoLinguagem = document.querySelector("[data-codeLang]");
    const campoCor = document.querySelector("[data-color]");
    const bgCampoCor = document.querySelector("#editorContainer");
    const campoCodigo = document.querySelector("code");

    campoTitulo.value = dadosProjeto.descricaoProjeto.title;
    campoDescricao.value = dadosProjeto.descricaoProjeto.description;
    campoLinguagem.value = dadosProjeto.descricaoProjeto.lang;
    campoCor.value = dadosProjeto.descricaoProjeto.color;
    bgCampoCor.style.backgroundColor = dadosProjeto.descricaoProjeto.color;
    campoCodigo.innerText = dadosProjeto.descricaoProjeto.code;
  }

  btnDel.addEventListener("click", (e) => {
    e.preventDefault;
    deletaProjeto(valorId);
    modalContainer.classList.remove('is--hide')
    modalContainer.innerHTML = criaModal("Projeto deletado!", "O projeto foi deletado com sucesso.", "Criar um projeto", "/");
  });

  modalContainer.addEventListener('click', (e) => {
    const alvo = e.target;
    const btnmodal = modalContainer.querySelector('[data-btn-modal]');

    if(alvo == btnmodal) {
      modalContainer.classList.add('is--hide')
    }
  })
})();
