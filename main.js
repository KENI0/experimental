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