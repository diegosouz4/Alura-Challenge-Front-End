const editorBG = document.querySelector('#editorContainer');
const editorColor = document.querySelector('#editorColor');

editorColor.addEventListener('input', function(e){
    let corEscolhida = e.target.value;
    editorBG.style.backgroundColor = corEscolhida;
})