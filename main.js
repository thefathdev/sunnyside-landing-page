// Query selectors
const mobileBtn = document.querySelector('.mobile-menu__toggle')
const mobileMenu = document.querySelector('.mobile-menu')

// Event listeners
mobileBtn.addEventListener('click', () => {
  mobileMenu.dataset.state =
    mobileMenu.dataset.state === 'opened' ? 'closed' : 'opened'
})
