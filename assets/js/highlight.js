const codeContainer = document.querySelector("#editorContainer");
const linguagem = document.querySelector("#codeLang");
const btn = document.querySelector("#chooseLang");

function trocaLinguagem() {
  const codigo = codeContainer.querySelector("code");
  codeContainer.innerHTML = `<code class="editor__code hljs ${linguagem.value}" contenteditable="true" aria-label="editor"></code><div class="dots"><span class="dot dot--red"></span><span class="dot dot--yellow"></span><span class="dot dot--green"></span></div>`;
  codeContainer.querySelector("code").innerText = codigo.innerText;
}

linguagem.addEventListener("change", () => {
  trocaLinguagem();
});

btn.addEventListener("click", () => {
  const codigo = codeContainer.querySelector("code");
  hljs.highlightBlock(codigo);
});
