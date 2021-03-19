const scrollToTopBtn = document.querySelector('.btn-top');

document.addEventListener('scroll', () => {
  requestAnimationFrame(showBtn);
  // if (innerWidth < 600 && pageYOffset > 200) {
  //   scrollToTopBtn.style.opacity = '1';
  // } else {
  //   scrollToTopBtn.style.opacity = '0';
  // }
});

const showBtn = () => {
  if (innerWidth < 600 && pageYOffset > 200) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
};

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo(pageXOffset, 0);
});
