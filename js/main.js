const searchEl = document.querySelector('.search');
const iconEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
  iconEl.focus()
})

iconEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  iconEl.setAttribute('placeholder','통합검색');
})

iconEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  iconEl.setAttribute('placeholder','')
})