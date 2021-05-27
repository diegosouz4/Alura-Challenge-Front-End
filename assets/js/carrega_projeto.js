import {criaProjeto} from './cria-projeto.js';

let projetosSalvos = new Array();

if(localStorage.hasOwnProperty('projetos')){
    projetosSalvos = JSON.parse(localStorage.getItem('projetos'));

    projetosSalvos.forEach((projeto) => {
        criaProjeto(projeto);
    })

    let codeContent = document.querySelectorAll('code');
    let codeContainer = document.querySelectorAll('.editor__container');

    for(let i = 0; i < codeContent.length; i++){
        codeContent[i].innerText = projetosSalvos[i].code;
        let hl = codeContainer[i].querySelector("code");
        hljs.highlightBlock(hl);
    }
}
