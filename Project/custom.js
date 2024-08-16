
const toggleBtn = document.getElementById('toggleBtn');
const navLinks = document.querySelector('.navLinks');
const dropDown = document.querySelector('.dropdown_open');

toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});