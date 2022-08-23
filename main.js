// Query selectors
const mobileBtn = document.querySelector('.mobile-menu__toggle')
const mobileMenu = document.querySelector('.mobile-menu')

// Event listeners
mobileBtn.addEventListener('click', () => {
  mobileMenu.dataset.state =
    mobileMenu.dataset.state === 'opened' ? 'closed' : 'opened'
})

// GSAP Animation
gsap.registerPlugin(ScrollTrigger)

// Hero
gsap.from('.hero__heading', {
  duration: 1,
  y: '-200%',
  opacity: 0,
  ease: 'power3.out',
})

gsap.from('.hero__arrow', {
  duration: 1,
  y: '-200%',
  opacity: 0,
  ease: 'power3.out',
  delay: 0.5,
})

// About
gsap.from('.about__img--1', {
  duration: 1,
  x: '100%',
  scrollTrigger: {
    trigger: '.about__img--1',
    start: 'top center',
    end: 'bottom 80%',
    scrub: 1,
  },
  ease: 'power2.out',
})

gsap.from('.about__img--2', {
  duration: 1,
  x: '-100%',
  scrollTrigger: {
    trigger: '.about__img--2',
    start: 'top center',
    end: 'bottom 80%',
    scrub: 1,
  },
  ease: 'power2.out',
})

const aboutHeadings = gsap.utils.toArray('.about__heading')

aboutHeadings.forEach((heading) => {
  gsap.from(heading, {
    opacity: 0,
    y: '50',
    duration: 0.5,
    scrollTrigger: {
      trigger: heading,
      start: '-100% center',
      end: 'bottom 80%',
    },
    ease: 'power3.out',
  })
})

const aboutBodies = gsap.utils.toArray('.about__body')

aboutBodies.forEach((body) => {
  gsap.from(body, {
    opacity: 0,
    y: '50',
    duration: 0.5,
    scrollTrigger: {
      trigger: body,
      start: '-150% center',
      end: 'bottom 80%',
    },
    ease: 'power3.out',
  })
})

const aboutLinks = gsap.utils.toArray('.about__link')

aboutLinks.forEach((link) => {
  gsap.from(link, {
    opacity: 0,
    y: '50',
    duration: 0.5,
    scrollTrigger: {
      trigger: link,
      start: '-600% center',
      end: 'bottom 80%',
    },
    ease: 'power3.out',
  })
})

// Testimonials

gsap.from('.services__heading', {
  opacity: 0,
  y: '50',
  duration: 0.5,
  scrollTrigger: {
    trigger: '.services__heading',
    start: '-100% center',
    end: 'bottom 80%',
  },
  ease: 'power3.out',
})

const cards = gsap.utils.toArray('.card')

cards.forEach((card) => {
  gsap.from(card, {
    opacity: 0,
    y: '50',
    duration: 0.5,
    scrollTrigger: {
      trigger: card,
      start: 'top center',
      end: 'bottom 80%',
    },
    ease: 'power3.out',
  })
})

// gallery

gsap.from('.projects__img', {
  opacity: 0,
  x: '50',
  duration: 0.5,
  scrollTrigger: {
    trigger: '.projects__img',
    start: 'top center',
    end: 'bottom 80%',
    markers: true,
  },
  ease: 'power2.out',
  stagger: 0.25,
})
