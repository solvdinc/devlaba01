window.addEventListener('load', () => {
  scrollButton = document.querySelector('.scroll-to-top')

  window.addEventListener('scroll', () => {
    scrollFunction()
  })

  scrollButton.addEventListener('click', () => {
    scrollToTop()
  })

  function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollButton.classList.add('_visible')
    } else {
      scrollButton.classList.remove('_visible')
    }
  }

  function scrollToTop() {
    document.documentElement.scrollTop = 0
  }
})
