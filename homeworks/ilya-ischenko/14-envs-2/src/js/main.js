import '../styles/main.scss';

const burgerBtn = document.querySelector('.burger-btn');
const sideNav = document.querySelector('.side-nav');
const overlay = document.querySelector('.overlay');

function menuToggler() {
  sideNav.classList.toggle('side-nav_active');
  overlay.classList.toggle('overlay_active');
  burgerBtn.classList.toggle('burger-btn_active');
}

function sideNavClickHandler({ target }) {
  if (target.closest('.burger-btn') && !sideNav.classList.contains('side-nav_active')) {
    menuToggler();
  }

  if ((target.closest('.close-btn') || target.classList.contains('overlay')) && sideNav.classList.contains('side-nav_active')) {
    menuToggler();
  }
}

window.addEventListener('click', sideNavClickHandler);
