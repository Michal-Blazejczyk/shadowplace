const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItem = document.querySelectorAll('.menu-nav__item');
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
function toggleMenu() {
    //! operator do sprawdzenia false/true
    if(!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItem.forEach(item => item.classList.add ('open'));
        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItem.forEach(item => item.classList.remove ('open'));
        showMenu = false;
    }
}