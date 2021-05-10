function hasClass(ele, cls) {
  return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(ele, cls) {
  if (!hasClass(ele, cls)) ele.className += ' ' + cls;
}

function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    let reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
    ele.className = ele.className.replace(reg, ' ');
  }
}

function toggleMenu() {
  let ele = document.getElementsByTagName('body')[0];
  if (!hasClass(ele, 'menu-open')) {
    addClass(ele, 'menu-open');
  } else {
    removeClass(ele, 'menu-open');
  }
}

document.querySelector('.sidenav__open-menu-btn').addEventListener('click', toggleMenu);
document.querySelector('.sidenav__overlay').addEventListener('click', toggleMenu);
