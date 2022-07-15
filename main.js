const boxEls = document.querySelectorAll('.box');
boxEls.forEach(function(boxEl){
    boxEl.classList.add('New');
})
//-------------------------------------------------------------//

const boxEl = document.querySelector('.box');
boxEl.classList.add('active');
let isContains = boxEl.classList.contains('active');
console.log(isContains);


