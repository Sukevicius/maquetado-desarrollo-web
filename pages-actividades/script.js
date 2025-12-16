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
  // 📦 JSON DE DESTINOS - ACTIVIDADES PET FRIENDLY
  // =======================================================
  const destinosData = {
    bariloche: {
      nombre: "Bariloche, Argentina",
      imagen: '../img/bariloche.png',
      alt: 'Bariloche',
      descripcion: 'Aventuras en la Patagonia entre lagos y montañas.',
      actividades: [
        { nombre: 'Villa Coihues', tipo: 'Sendero', descripcion: 'Caminata fácil con vistas al lago.' },
        { nombre: 'Cerro Catedral', tipo: 'Trekking', descripcion: 'Senderos de montaña aptos para perros.' },
        { nombre: 'Playa Bonita', tipo: 'Playa', descripcion: 'Playa tranquila ideal para mascotas.' },
        { nombre: 'Bahía Serena', tipo: 'Playa', descripcion: 'Aguas calmas para nadar con tu perro.' }
      ]
    },
    sansebastian: {
      nombre: "San Sebastián, España",
      imagen: '../img/SanSebastian.png',
      alt: 'San Sebastián',
      descripcion: 'Playas y paseos costeros en el País Vasco.',
      actividades: [
        { nombre: 'Playa de Ondarreta', tipo: 'Playa', descripcion: 'Permite perros en temporada baja.' },
        { nombre: 'Monte Urgull', tipo: 'Paseo', descripcion: 'Vistas panorámicas de la bahía.' },
        { nombre: 'Paseo de La Concha', tipo: 'Paseo', descripcion: 'Icónico paseo marítimo pet friendly.' }
      ]
    },
    portland: {
      nombre: "Portland, Oregón (EE.UU.)",
      imagen: '../img/portland-city.jpg',
      alt: 'Portland',
      descripcion: 'La ciudad con más dog parks de Estados Unidos.',
      actividades: [
        { nombre: 'Forest Park', tipo: 'Parque', descripcion: 'Más de 130km de senderos naturales.' },
        { nombre: 'Mt. Tabor Park', tipo: 'Parque', descripcion: 'Volcán extinto con vistas a la ciudad.' },
        { nombre: 'Sellwood Riverfront Park', tipo: 'Dog Park', descripcion: 'Parque junto al río para perros.' },
        { nombre: 'Chimney Park', tipo: 'Dog Park', descripcion: 'Área cercada para perros sin correa.' }
      ]
    },
    garda: {
      nombre: "Lago di Garda, Italia",
      imagen: '../img/garda-italy.jpg',
      alt: 'Lago di Garda',
      descripcion: 'Pueblos pintorescos y playas a orillas del lago.',
      actividades: [
        { nombre: 'Bau Beach (Peschiera)', tipo: 'Playa', descripcion: 'Playa exclusiva para perros.' },
        { nombre: 'Sirmione', tipo: 'Paseo', descripcion: 'Pueblo medieval pet friendly.' },
        { nombre: 'Malcesine', tipo: 'Paseo', descripcion: 'Calles empedradas con vistas al castillo.' },
        { nombre: 'Limone sul Garda', tipo: 'Paseo', descripcion: 'Limoneros y vistas al lago.' }
      ]
    }
  };

  // =======================================================
  // 🐾 TABS DE ACTIVIDADES POR DESTINO
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
    data.actividades.forEach(a => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${a.nombre}</strong> (${a.tipo}): ${a.descripcion}`;
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
