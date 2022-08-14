const menuBtn = document.getElementById('btn-burger')
const menu = document.querySelector('.menu')
const header = document.querySelector('.header__inner')

menuBtn.addEventListener("click", function () {
   this.classList.toggle("active")
   menu.classList.toggle('active')
})

const topOffset = document.querySelector('.header__inner').offsetHeight

document.querySelectorAll('a[href^="#"]').forEach(link => {
   link.addEventListener('click', function (e) {
      e.preventDefault()

      const href = this.getAttribute('href').substring(1)
      const scrollTarget = document.getElementById(href)
      // const topOffset = 0

      const elementPosition = scrollTarget.getBoundingClientRect().top
      const offsetPosition = elementPosition - topOffset*1.2

      window.scrollBy({
         top: offsetPosition,
         behavior: "smooth"
      })

      menu.classList.remove('active')
      menuBtn.classList.remove('active')
      header.classList.remove('hide')

   })
})

const toTop = document.querySelector('.to-top')

toTop.addEventListener('click', function(e) {
   window.scrollTo({
      top: 0,
      behavior: 'smooth'
   })

   menu.classList.remove('active')
   menuBtn.classList.remove('active')
   header.classList.remove('hide')
})


let oldOffsetY = 0
document.addEventListener('wheel', function(e) {
   let currentY = window.scrollY
   
   if (currentY < oldOffsetY) {
      header.classList.remove('hide')
   } else if (currentY > topOffset) {
      header.classList.add('hide')

      menu.classList.remove('active')
      menuBtn.classList.remove('active')
   }

   oldOffsetY = window.scrollY
})

// aos
AOS.init({
   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
   offset: 120, // offset (in px) from the original trigger point
   delay: 0, // values from 0 to 3000, with step 50ms
   duration: 600, // values from 0 to 3000, with step 50ms
   easing: 'ease', // default easing for AOS animations
   once: false, // whether animation should happen only once - while scrolling down
   mirror: false, // whether elements should animate out while scrolling past them
   anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
 
 });