// navigation

const headerNav = document.querySelector('.header__nav-btn')
const btnNav = document.querySelector('.nav-icon-btn')
const headerInner = document.querySelector('.header__inner')

headerNav.addEventListener('click', function () {
  btnNav.classList.toggle('nav-icon-btn--active')
  headerInner.classList.toggle('header__inner--mobile')
})

// якоря

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', (event) => {
    event.preventDefault()
    const blockId = anchor.getAttribute('href')
    document.querySelector('' + blockId).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  })
  console.log(anchor)
}
