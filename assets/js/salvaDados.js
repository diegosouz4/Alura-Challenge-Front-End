const btnSave = document.querySelector('[data-save-btn]');

btnSave.addEventListener('click', (e) => {
    e.preventDefalt;

    const tituloProjeto = document.querySelector('[data-title]').value;
    const descricaoProjeto = document.querySelector('[data-description]').value;
    const linguagemProjeto = document.querySelector('[data-codeLang]').value;
    const corProjeto = document.querySelector('[data-color]').value;
    const codigoProjeto = document.querySelector('code').innerText;

    validaDados(tituloProjeto, descricaoProjeto, linguagemProjeto, corProjeto, codigoProjeto);
})

function validaDados(titulo, descricao, linguagem, cor, codigo){
    if(titulo.length <= 0 || descricao <= 0 || linguagem <= 0 || codigo <= 0){
        alert('Valor do campo inválido ou em branco!');
        return
    }

    const dadosDoProjeto = pegaDados(titulo, descricao, linguagem, cor, codigo);
    console.log(dadosDoProjeto)
    salvaProjeto(dadosDoProjeto);
}

function pegaDados(titulo, descricao, linguagem, cor, codigo){    
    const novoProjeto = {
        title: titulo,
        description: descricao,
        lang: linguagem,
        color: cor,
        code: codigo
    }

    return novoProjeto;
}

function salvaProjeto(projeto) {
    let projetosSalvos = new Array();

    if(localStorage.hasOwnProperty('projetos')) projetosSalvos = JSON.parse(localStorage.getItem('projetos'));

    projetosSalvos.push(projeto);
    localStorage.setItem('projetos', JSON.stringify(projetosSalvos));
    window.location.href = "./comunidade.html";
}