const burgerIcon = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');

burgerIcon.addEventListener('click', () => {
    burgerIcon.classList.toggle('change')
    menu.classList.toggle('hidden')
})
