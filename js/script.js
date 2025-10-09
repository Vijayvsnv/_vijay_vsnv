// Theme toggle
const toggle = document.getElementById('theme-toggle');
if(localStorage.getItem('theme') === 'dark'){
  document.documentElement.classList.add('dark');
  toggle.querySelector('i').className = 'fa-regular fa-sun';
}
toggle.addEventListener('click', ()=>{
  document.documentElement.classList.toggle('dark');
  const dark = document.documentElement.classList.contains('dark');
  localStorage.setItem('theme', dark ? 'dark' : 'light');
  toggle.querySelector('i').className = dark ? 'fa-regular fa-sun' : 'fa-regular fa-moon';
});

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', ()=>{
  navLinks.classList.toggle('show');
});
