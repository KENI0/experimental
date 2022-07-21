const fadeEls = document.querySelectorAll('.container .fade-in')

fadeEls.forEach(function(fadeEl,index) {
gsap.to(fadeEl, .5 ,{
  delay: (index + 1) * .7 , 
  opacity: 1,
})
});

const boxDis = document.querySelector('.box-tag .box-img')

window.addEventListener('scroll',_.throttle(function() {
  console.log(window.scrollY);
  if(window.scrollY > 600){
    gsap.to(boxDis, .5, {
      opacity: 0
    })
  }
  else {
    gsap.to(boxDis, .5, {
      opacity: 1
    })
  }
},300))