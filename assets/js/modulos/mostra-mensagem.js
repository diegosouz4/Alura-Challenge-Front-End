export function mostraMensagem(){
    const ul = document.querySelector('[data-lista-projetos]');
    const li = document.createElement('li');
    li.classList.add('comunidade__mensagem');
    li.innerHTML = `
        <h2 class="mensagem__titulo">Não foi encontrado nenhum projeto salvo.</h2>
        <p class="mensagem__texto">Clique aqui para criar o seu primeiro projeto</p>
        <a class="menu__icon mensagem__novo_projeto" href="/"><img src="./assets/img/icons/icon-oneplus.svg" alt="Novo projeto"/></a>
    `
    ul.appendChild(li);
}