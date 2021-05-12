import './style.scss';
import './cv.scss';
const side = document.querySelector(".side")
const overlay = document.querySelector(".overlay")
const menuOpen = document.querySelector(".menu__open")
const menuClose = document.querySelector(".menu__close")
const menuLinks = document.querySelectorAll(".menu__link")

menuLinks.forEach(menuLink => {
  menuLink.addEventListener("click", toggleHamburger)
})

menuOpen.addEventListener("click", toggleHamburger)
menuClose.addEventListener("click", toggleHamburger)
overlay.addEventListener("click", toggleHamburger)

function toggleHamburger() {
  overlay.classList.toggle("show__overlay")
  side.classList.toggle("show__menu")
}
