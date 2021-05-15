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

// advanced task

const openModal = document.querySelector('.button__open-modal-window');
const modalWindow = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__btn');
const leftSide = document.querySelector('.left-side');
const rightSide = document.querySelector('.right-side');
const avatar = document.querySelector('.avatar');
const headerMenu = document.querySelector('.header__menu');
const headerLogo = document.querySelector('.header__logo');
const avatarBg = document.querySelector('._bg');

openModal.addEventListener('click', () => {
  modalWindow.style.display = 'block';
  avatarBg.style.display = 'block';
  leftSide.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  avatar.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  rightSide.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  headerMenu.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  headerLogo.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
});

closeModal.addEventListener('click', () => {
  modalWindow.style.display = 'none';
  avatarBg.style.display = 'none';
  leftSide.style.backgroundColor = '#2d2d2d';
  avatar.style.backgroundColor = '#2d2d2d';
  rightSide.style.backgroundColor = 'rgb(247, 243, 233)';
  headerMenu.style.backgroundColor = 'rgb(247, 243, 233)';
  headerLogo.style.backgroundColor = 'rgb(247, 243, 233)';
});
