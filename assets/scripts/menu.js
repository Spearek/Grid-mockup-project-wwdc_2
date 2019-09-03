const burger = document.querySelector('.hamburger');
const burgerContainer = document.querySelector('.burger-container');
const nav =document.querySelector('.navigation');

const handleMenu = ()=>{
    burger.classList.toggle('is-active');
    burgerContainer.classList.toggle('button-moved');
    nav.classList.toggle('js-visible');
}
burger.addEventListener("click",handleMenu);