const scrollToTopBtn = document.querySelector('.btn-top');

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
