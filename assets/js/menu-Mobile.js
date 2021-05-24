const menu = document.querySelector(".menu");
const btnMenu = document.querySelector("#botaoMenu");
const btnBusca = document.querySelector("#botaoBusca");
const searchBar = document.querySelector("#searchBar");
const btnCloseBusca = document.querySelector("#closeBusca");

let menuIsOpen = false;
let buscaIsOpen = false;

btnMenu.addEventListener("click", function (e) {
  e.preventDefault;
  menuIsOpen = !menuIsOpen;
  if (!menuIsOpen) {
    btnMenu.classList.remove("is--open");
    menu.classList.remove("menu__is--open");
    return;
  }
  btnMenu.classList.add("is--open");
  menu.classList.add("menu__is--open");
});

btnBusca.addEventListener('click', function(e){
  e.preventDefault;
  buscaIsOpen = !buscaIsOpen;
  if(!buscaIsOpen){
    searchBar.classList.remove('is--visible');
    return
  }

  searchBar.classList.add('is--visible');
})

btnCloseBusca.addEventListener('click', function(e){
  e.preventDefault;
  if(!buscaIsOpen){
    return
  }
  searchBar.classList.remove('is--visible');
  buscaIsOpen = !buscaIsOpen;
})
