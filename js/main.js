const searchEl = document.querySelector(".search");
const inputEl = searchEl.querySelector("input");

searchEl.addEventListener('click', function() {
  inputEl.focus();
})

inputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  inputEl.setAttribute('placeholder','통합검색');
})

inputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  inputEl.setAttribute('placeholder','');
})

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll',_.throttle(function(){
  if(window.scrollY > 500){
    gsap.to(".badges",{duration:.4 , opacity:0, display:'block'})
  }
  else {
    gsap.to(".badges",{duration:.4 , opacity:1 ,display:'none'})
  }
},300))