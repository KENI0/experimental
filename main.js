const hideEl = document.querySelector('.up-scroll')

window.addEventListener('scroll',function(){
  if(window.scrollY > 500){
    gsap.to(hideEl, .1, {
      opacity: 1
    })
  }
  else {
    gsap.to(hideEl ,.1, {
     opacity: 0
    })   
  }
})

const upScroll = document.querySelector('.up-scroll')
upScroll.addEventListener('click',function() {
  gsap.to(window,.4, {
    scrollTo:0
  })
})