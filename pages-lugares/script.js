// script.js

document.addEventListener('DOMContentLoaded', () => {
  const menuSticky = document.getElementById('menuSticky');
  const menuVertical = document.getElementById('menuVertical');
  const topBar = document.getElementById('topBar');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  const cardSlider = document.getElementById('cardSlider');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  // Mostrar u ocultar menú según scroll
  const toggleMenus = () => {
    const hasScrolledPast = window.scrollY > window.innerHeight * 0.5;
    menuSticky.style.display = hasScrolledPast ? 'flex' : 'none';
    menuVertical.style.display = hasScrolledPast ? 'none' : 'flex';
    topBar.style.display = hasScrolledPast ? 'none' : 'flex';
  };

  toggleMenus();
  window.addEventListener('scroll', toggleMenus);

  // Menú hamburguesa
  hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

  // Slider con flechas
  const scrollAmount = 300;
  prevBtn.addEventListener('click', () => {
    cardSlider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    cardSlider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
});
