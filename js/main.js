const burger = document.querySelector('.burger')
const nav = document.querySelector('.nav')
const menuItemAll = document.querySelectorAll('.menu__item')
burger.addEventListener('click',()=>{
  burger.classList.toggle('active')
  nav.classList.toggle('open')
})

menuItemAll.forEach((item)=>{
  item.addEventListener('click', ()=>{
    burger.classList.toggle('active')
    nav.classList.toggle('open')
  })
})