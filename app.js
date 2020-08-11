const hamburger = document.querySelector('.nav-bar .nav-list .hamburger');
const nav_list = document.querySelector('.nav-bar .nav-list');

hamburger.addEventListener('click', () => {
    nav_list.classList.toggle('active');
    hamburger.classList.toggle('active');
});