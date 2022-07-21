const fadeEls = document.querySelectorAll('.container .fade-in')

fadeEls.forEach(function(fadeEl,index) {
gsap.to(fadeEl, .5 ,{
  delay: (index + 1) * .7 , 
  opacity: 1,
})
})
