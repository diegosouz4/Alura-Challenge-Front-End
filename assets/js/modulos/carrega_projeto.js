import { criaProjeto } from "./cria-projeto.js";
import { mostraMensagem } from "./mostra-mensagem.js"

(() => {
  
  if (localStorage.length > 0) {
    for (let i = 0; i < localStorage.length; i++) {
      let novoProjeto = JSON.parse(localStorage.getItem(i));
      // criaProjeto(novoProjeto);
      criaProjeto(novoProjeto)

      let codeContent = document.querySelectorAll("code");
      let novoCodigo = codeContent[i];

      novoCodigo.innerText = novoProjeto.descricaoProjeto.code;
      hljs.highlightBlock(novoCodigo);
    }
  } else {
    mostraMensagem();
  }
})();
