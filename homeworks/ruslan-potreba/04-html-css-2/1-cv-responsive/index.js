scrollButton = document.querySelector('.scroll-to-top')

window.onscroll = function () {
  scrollFunction()
}

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollButton.style.visibility = 'visible'
  } else {
    scrollButton.style.visibility = 'hidden'
  }
}

function scrollToTop() {
  document.documentElement.scrollTop = 0
}
