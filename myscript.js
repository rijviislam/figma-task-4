const navbar = document.querySelector('.navigation');
const openBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');

openBtn.addEventListener('click', () => {
    navbar.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    navbar.classList.remove('active');
});