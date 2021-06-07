export function deletaProjeto(posicao){
    const listaAtual = [];
    for(let i = 0; i < localStorage.length; i++){
        listaAtual.push(JSON.parse(localStorage.getItem(i)));
    }

    const novaLista = listaAtual.filter(item => item.id !== posicao);
    localStorage.clear()
    for(let i = 0; i < novaLista.length; i++){
        const novoId = localStorage.length;
        novaLista[i].id = novoId;
        localStorage.setItem(novaLista[i].id, JSON.stringify(novaLista[i]));
    }
}