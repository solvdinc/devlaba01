const b = document.querySelector('.burger__toggle');
const sideSection = document.querySelector('.side');

b.addEventListener('click', () => {
  sideSection.classList.toggle('show');
});
