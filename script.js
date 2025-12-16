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
    const hasScrolledPast = window.scrollY > window.innerHeight;
    if (menuSticky) menuSticky.style.display = hasScrolledPast ? 'flex' : 'none';
    if (menuVertical) menuVertical.style.display = hasScrolledPast ? 'none' : 'flex';
    if (topBar) topBar.style.display = hasScrolledPast ? 'none' : 'flex';
  };

  toggleMenus();
  window.addEventListener('scroll', toggleMenus);

  // Menú hamburguesa
  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
  }

  // Slider con flechas
  if (cardSlider && prevBtn && nextBtn) {
    const scrollAmount = 300;
    prevBtn.addEventListener('click', () => {
      cardSlider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
      cardSlider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  }

  // =====================
  // MODALES DE LUGARES
  // =====================
  
  // Abrir modal
  const modalButtons = document.querySelectorAll('[data-modal]');
  modalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modalId = button.getAttribute('data-modal');
      const modal = document.getElementById('modal-' + modalId);
      if (modal) {
        modal.classList.add('active');
        document.body.classList.add('modal-open');
      }
    });
  });

  // Cerrar modal con botón X o botón Cerrar
  const closeButtons = document.querySelectorAll('.modal-close, .btn-cerrar');
  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal-overlay');
      if (modal) {
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
      }
    });
  });

  // Cerrar modal al hacer clic fuera
  const modals = document.querySelectorAll('.modal-overlay');
  modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
      }
    });
  });

  // Cerrar modal con tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const activeModal = document.querySelector('.modal-overlay.active');
      if (activeModal) {
        activeModal.classList.remove('active');
        document.body.classList.remove('modal-open');
      }
    }
  });

  // Acordeones dentro de los modales
  const modalAccordionHeaders = document.querySelectorAll('.modal-accordion-header');
  modalAccordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isActive = item.classList.contains('active');
      
      // Cerrar todos los acordeones del mismo modal
      const modal = header.closest('.modal-container');
      modal.querySelectorAll('.modal-accordion-item').forEach(i => {
        i.classList.remove('active');
      });
      
      // Si no estaba activo, abrirlo
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // Cerrar modal cuando se hace clic en "Consultar disponibilidad"
  const reservarButtons = document.querySelectorAll('.btn-reservar');
  reservarButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal-overlay');
      if (modal) {
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
      }
    });
  });
});
