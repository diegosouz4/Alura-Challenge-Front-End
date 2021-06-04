(() => {
  const exportNav = document.getElementById("exportNav");
  const exportContent = document.querySelector(".export__container");

  exportNav.addEventListener("click", () => {
    exportContent.classList.toggle("export--open");
  });

  const botaoExportarImg = document.getElementById("exportButtonImg");
  const exportButtonCode = document.getElementById("exportButtonCode");

  botaoExportarImg.addEventListener("click", () => {
    const canvas = document.getElementById("editorContainer");
    const extensao = document.getElementById("exportSelectImg").value;
    const codigoArquivo = canvas.querySelector("code").innerText;
    const nomeArquivo = document.querySelector("[data-title]").value;

    if (nomeArquivo.length > 0 && codigoArquivo.length > 0) {
      const arquivoFinal = `${nomeArquivo}.${extensao}`;
      domtoimage.toBlob(canvas).then(function (blob) {
        window.saveAs(blob, arquivoFinal);
      });
      console.log(canvas.classList);
    }
  });

  exportButtonCode.addEventListener("click", () => {
    const canvas = document.getElementById("editorContainer");
    const extensao = document.getElementById("exportSelectCode").value;
    const codigoArquivo = canvas.querySelector("code").innerText;
    const nomeArquivo = document.querySelector("[data-title]").value;

    console.log(extensao, codigoArquivo, nomeArquivo);

    if (nomeArquivo.length > 0 && codigoArquivo.length > 0) {
      const blob = new Blob([codigoArquivo], {
        type: "text/plain;charset=utf-8",
      });
      const arquivoFinal = `${nomeArquivo}.${extensao}`;
      window.saveAs(blob, arquivoFinal);
    }
  });
})();
