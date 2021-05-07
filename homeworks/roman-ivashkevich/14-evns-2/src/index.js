import './styles.scss';
import './media.scss';
import './about.scss';

const scrollToTopBtn = document.querySelector('.btn-top');
const burgerButton = document.querySelector('.ncv-header-burger');
const backdrop = document.querySelector('.backdrop');
const header = document.querySelector('.ncv-header');
const navBarLinks = document.querySelectorAll('.navbar__link');
const credentialLink = document.querySelector('.education__content-credential');
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal-container__close-btn');

// Button to top
const showBtn = () => {
  if (window.innerWidth < 600 && window.pageYOffset > 200) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
};

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo(window.pageXOffset, 0);
});

document.addEventListener('scroll', () => {
  requestAnimationFrame(showBtn);
});

// Burger menu
const removeActiveClass = () => {
  document.body.classList.remove('_overflow');
  backdrop.classList.remove('_active-backdrop');
  backdrop.style.zIndex = 10;
  header.classList.remove('_active-header');
  modal.classList.remove('_active-modal');
};

const makeActiveLink = (event) => {
  const { target } = event;
  const activeLink = document.querySelectorAll('._active');

  if (target !== activeLink[0]) {
    activeLink[0].classList.remove('_active');
    target.classList.add('_active');
  }
};

burgerButton.addEventListener('click', () => {
  document.body.classList.toggle('_overflow');
  backdrop.classList.toggle('_active-backdrop');
  header.classList.toggle('_active-header');
});

backdrop.addEventListener('click', () => {
  removeActiveClass();
});

navBarLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    removeActiveClass();
    makeActiveLink(event);
  });
});

credentialLink.addEventListener('click', () => {
  modal.classList.add('_active-modal');
  document.body.classList.add('_overflow');
  backdrop.classList.add('_active-backdrop');
  backdrop.style.zIndex = 50;
});

modalCloseBtn.addEventListener('click', () => {
  removeActiveClass();
});
