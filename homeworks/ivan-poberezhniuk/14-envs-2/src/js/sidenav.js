function toggleMenu() {
  let elem = document.getElementsByTagName('body')[0];
  elem.classList.toggle('menu-open');
}

document.querySelector('.sidenav__open-menu-btn').addEventListener('click', toggleMenu);
document.querySelector('.sidenav__close-menu-btn').addEventListener('click', toggleMenu);
