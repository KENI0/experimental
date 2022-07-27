const upScroll = document.querySelector('.up-scroll')
upScroll.addEventListener('click',function() {
  gsap.to(window, {
    duration: .5,
    scrollTo: 0
  })
} )