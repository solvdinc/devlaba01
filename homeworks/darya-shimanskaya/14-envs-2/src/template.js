import './styles/template.scss';

// scroll-to-top
const button = document.querySelector('.scroll-to-top');

function checkScroll() {
  if ((document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    && window.outerWidth < 600) {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
}

button.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

window.onscroll = () => { checkScroll(); };

// sidenav
const menu = document.querySelector('.header__menu-content');
const sideNav = document.querySelector('.sidenav');

function addMenuToggle() {
  sideNav.classList.toggle('sidenav_active');
  menu.classList.toggle('menu_active');
}

function sidenavHandler({ target }) {
  if (target.closest('.header__menu') && !sideNav.classList.contains('sidenav_active')) {
    addMenuToggle();
  }

  if ((target.closest('.sidenav__close-button') && sideNav.classList.contains('sidenav_active'))) {
    addMenuToggle();
  }
}

window.addEventListener('click', sidenavHandler);
