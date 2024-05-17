let btnMenu = document.getElementById("btn-menu");
let menuMobile = document.getElementById("menu-mobile");

btnMenu.addEventListener("click", ()=>{
    menuMobile.classList.add("abrir-menu");
});

menuMobile.addEventListener("click", ()=>{
    menuMobile.classList.remove("abrir-menu");
});