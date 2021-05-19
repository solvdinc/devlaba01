import './styles/template.scss';

// scroll-to-top
const button = document.querySelector('.scroll-to-top');

function checkScroll() {
  if ((document.documentElement.scrollTop > 20)
    && window.outerWidth < 600) {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
}

button.addEventListener('click', () => {
  document.documentElement.scrollTop = 0;
});

window.onscroll = () => { checkScroll(); };

// sidenav and modal
const sideNav = document.querySelector('.sidenav');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

function addMenuToggle() {
  sideNav.classList.toggle('sidenav_active');
}

function showModal() {
  modal.classList.add('show');
  overlay.classList.add('show');
  document.querySelector('body').style.overflowY = 'hidden';
}

function closeModal() {
  modal.classList.remove('show');
  overlay.classList.remove('show');
  document.querySelector('body').removeAttribute('style');
}

function handler({ target }) {
  if (target.closest('.open-modal-button')) {
    showModal();
  }
  if (target.closest('.modal__button')) {
    closeModal();
  }
  if (target.closest('.header__menu') && !sideNav.classList.contains('sidenav_active')) {
    addMenuToggle();
  }

  if (target.closest('.sidenav__close-button') && sideNav.classList.contains('sidenav_active')) {
    addMenuToggle();
  }
}

window.addEventListener('click', handler);
