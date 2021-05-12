
import '../styles/styles-scss.scss';
import '../styles/media.scss';
import '../images/avatar.jpg';
import '../images/github-icon.png';
import '../images/gmail-icon.png';
import '../images/tel-icon.png';

const menu = document.querySelector('.menu');
const sidenav = document.querySelector(".sidenav")

function toggleButton() {
    sidenav.classList.toggle("sidenav__opened")
}
menu.addEventListener('click', toggleButton)
