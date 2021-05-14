import '../styles/template.scss';

const scrollBtn = document.querySelector('.scroll-button');

scrollBtn.addEventListener('click', () => {
  document.documentElement.scrollTop = 0;
});

const burgerMenu = document.querySelector('.header__burger-menu');
const sideNav = document.querySelector('.side-nav');

burgerMenu.addEventListener('click', () => {
  sideNav.classList.toggle('side-nav_active');
});
