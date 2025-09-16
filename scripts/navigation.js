//hamburger
const hamburger = document.querySelector('#nav-button');
const menu = document.querySelector('#menu');
hamburger.addEventListener('click', x => {
    hamburger.classList.toggle('show');
    menu.classList.toggle('show');
});