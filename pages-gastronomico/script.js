// =======================================================
// 🌟 INICIALIZACIÓN DEL DOM
// =======================================================
document.addEventListener('DOMContentLoaded', () => {

  // =======================================================
  // 🍔 MENÚ HAMBURGUESA (MOBILE)
  // =======================================================
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');

  hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

  // =======================================================
  // 📦 JSON DE DESTINOS - RESTAURANTES PET FRIENDLY
  // =======================================================
  const destinosData = {
    bariloche: {
      nombre: "Bariloche, Argentina",
      imagen: '../img/bariloche.png',
      alt: 'Bariloche',
      descripcion: 'Gastronomía patagónica con vistas a lagos y montañas.',
      restaurantes: [
        { nombre: 'Maleza', tipo: 'Cocina patagónica', descripcion: 'Terraza pet friendly con vistas.' },
        { nombre: 'Chiado', tipo: 'Restaurante', descripcion: 'Espacios al aire libre para mascotas.' },
        { nombre: 'Punto Panorámico', tipo: 'Mirador', descripcion: 'Vistas al lago, acepta mascotas en exterior.' }
      ]
    },
    sansebastian: {
      nombre: "San Sebastián, España",
      imagen: '../img/SanSebastian.png',
      alt: 'San Sebastián',
      descripcion: 'Capital gastronómica vasca con los mejores pintxos.',
      restaurantes: [
        { nombre: 'Bar Nestor', tipo: 'Pintxos', descripcion: 'Terraza pet friendly, famoso por su tortilla.' },
        { nombre: 'La Cuchara de San Telmo', tipo: 'Cocina vasca', descripcion: 'Acepta perros pequeños.' },
        { nombre: 'Gandarias', tipo: 'Clásico vasco', descripcion: 'Mesas al exterior para mascotas.' }
      ]
    },
    portland: {
      nombre: "Portland, Oregón (EE.UU.)",
      imagen: '../img/portland-city.jpg',
      alt: 'Portland',
      descripcion: 'Escena gastronómica alternativa y cervecerías artesanales.',
      restaurantes: [
        { nombre: 'Lucky Labrador Brewing', tipo: 'Cervecería', descripcion: 'Patio dog friendly, cerveza artesanal.' },
        { nombre: 'Tin Shed Garden Cafe', tipo: 'Brunch', descripcion: 'Famoso brunch con menú para perros.' },
        { nombre: 'Hawthorne Hophouse', tipo: 'Bar', descripcion: 'Amplio espacio para mascotas.' }
      ]
    },
    garda: {
      nombre: "Lago di Garda, Italia",
      imagen: '../img/garda-italy.jpg',
      alt: 'Lago di Garda',
      descripcion: 'Cocina italiana tradicional con vistas al lago.',
      restaurantes: [
        { nombre: 'Ristorante Gardenia', tipo: 'Italiano', descripcion: 'Terraza al lago, pet friendly.' },
        { nombre: 'Trattoria Al Pescatore', tipo: 'Pescados', descripcion: 'Pescados frescos, acepta mascotas.' },
        { nombre: 'Osteria Il Gallo', tipo: 'Rústico', descripcion: 'Ambiente acogedor para mascotas.' }
      ]
    }
  };

  // =======================================================
  // 🐾 TABS DE RESTAURANTES POR DESTINO
  // =======================================================
  const tabs = document.querySelectorAll('.tabs-epoca .tab');
  const epocaImagen = document.getElementById('epocaImagen');
  const epocaLista = document.getElementById('epocaLista');

  // Función para actualizar la vista
  function actualizarVista(destinoKey) {
    const data = destinosData[destinoKey];
    if (!data) return;

    // Cambiar la imagen
    epocaImagen.src = data.imagen;
    epocaImagen.alt = data.alt;

    // Cambiar la lista
    epocaLista.innerHTML = '';
    data.restaurantes.forEach(r => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${r.nombre}</strong> (${r.tipo}): ${r.descripcion}`;
      epocaLista.appendChild(li);
    });

    // Actualizar tabs activos
    tabs.forEach(t => {
      t.classList.toggle('active', t.dataset.destino === destinoKey);
    });
  }

  // Event listeners para tabs
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      actualizarVista(tab.dataset.destino);
    });
  });

  // =======================================================
  // 🔍 BUSCADOR - Sincronizar con tabs
  // =======================================================
  const selectDestino = document.getElementById('destino');
  const buscadorForm = document.getElementById('buscadorForm');

  if (selectDestino) {
    selectDestino.addEventListener('change', () => {
      const destinoSeleccionado = selectDestino.value;
      if (destinoSeleccionado && destinosData[destinoSeleccionado]) {
        actualizarVista(destinoSeleccionado);
        
        // Scroll suave a la sección de resultados
        document.querySelector('.mejor-epoca-section').scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  }

  if (buscadorForm) {
    buscadorForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const destinoSeleccionado = selectDestino.value;
      
      if (destinoSeleccionado && destinosData[destinoSeleccionado]) {
        actualizarVista(destinoSeleccionado);
        
        // Scroll suave a la sección de resultados
        document.querySelector('.mejor-epoca-section').scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        alert('Por favor, seleccioná un destino para buscar.');
      }
    });
  }

  // =======================================================
  // 🗂️ MODALES DE LUGARES
  // =======================================================
  
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
});
