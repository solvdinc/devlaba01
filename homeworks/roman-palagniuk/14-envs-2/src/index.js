import './css/mobile.css';
import './css/tab.css';
import './css/CV.css';

const b = document.querySelector('.burger__toggle');
const sideSection = document.querySelector('.side');

b.addEventListener('click', () => {
  sideSection.classList.toggle('show');
});
