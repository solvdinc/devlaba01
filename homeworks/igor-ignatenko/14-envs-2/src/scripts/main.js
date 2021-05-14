import '../styles/styles-scss.scss';
import '../styles/media.scss';
import '../images/avatar.jpg';
import '../images/github-icon.png';
import '../images/gmail-icon.png';
import '../images/tel-icon.png';

const sidenav = document.querySelector(".sidenav");
const overlay = document.querySelector('.overlay');
const navCheckBox = document.querySelector('.navigation__checkbox')

function handler({ target }) {
    if ((target.closest('.navigation__checkbox')  ||  (target.classList.contains('overlay')) && sidenav.classList.contains('sidenav__opened'))) {
        navCheckBox.classList.toggle('navigation__checkbox__checked')
        sidenav.classList.toggle("sidenav__opened");
        overlay.classList.toggle("overlay__active");
    }
}

window.addEventListener('click', handler)