// =======================================================
// 🌟 INICIALIZACIÓN DEL DOM
// =======================================================
document.addEventListener('DOMContentLoaded', () => {

  // =======================================================
  // 🍔 MENÚ HAMBURGUESA (MOBILE)
  // =======================================================
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
  }

  // =======================================================
  // 📦 JSON DE DESTINOS - RESTAURANTES PET FRIENDLY
  // =======================================================
  const destinosData = {
    bariloche: {
      nombre: "Bariloche, Argentina",
      imagen: '../img/bariloche.png',
      restaurantes: [
        {
          id: 'maleza',
          nombre: 'Maleza',
          tipoCocina: 'local',
          descripcion: 'Restaurante patagónico con terraza pet friendly y vistas al lago Nahuel Huapi.',
          imagen: '../img/bariloche.png',
          comensales: '1-2',
          direccion: 'Av. Bustillo Km 7',
          telefono: '+54 294 444-5566',
          email: 'contacto@maleza.com',
          web: 'https://maleza.com'
        },
        {
          id: 'chiado',
          nombre: 'Chiado',
          tipoCocina: 'internacional',
          descripcion: 'Cocina mediterránea en espacios amplios al aire libre donde tu mascota es bienvenida.',
          imagen: '../img/bariloche.png',
          comensales: '3-4',
          direccion: 'Mitre 298',
          telefono: '+54 294 442-3344',
          email: 'info@chiado.com.ar',
          web: 'https://chiado.com.ar'
        },
        {
          id: 'puntopanoramico',
          nombre: 'Punto Panorámico',
          tipoCocina: 'cafe',
          descripcion: 'Cafetería con vistas espectaculares, ideal para brunch con tu perro.',
          imagen: '../img/bariloche.png',
          comensales: '1-2',
          direccion: 'Circuito Chico Km 18',
          telefono: '+54 294 448-7788',
          email: 'reservas@puntopanoramico.com',
          web: ''
        }
      ]
    },
    sansebastian: {
      nombre: "San Sebastián, España",
      imagen: '../img/SanSebastian.png',
      restaurantes: [
        {
          id: 'nestor',
          nombre: 'Bar Nestor',
          tipoCocina: 'local',
          descripcion: 'Pintxos vascos tradicionales en terraza pet friendly, famoso por su tortilla.',
          imagen: '../img/SanSebastian.png',
          comensales: '1-2',
          direccion: 'Calle Fermín Calbetón, 11',
          telefono: '+34 943 42 58 67',
          email: 'info@barnestor.com',
          web: ''
        },
        {
          id: 'lacuchara',
          nombre: 'La Cuchara de San Telmo',
          tipoCocina: 'local',
          descripcion: 'Cocina vasca de autor que acepta perros pequeños en su salón.',
          imagen: '../img/SanSebastian.png',
          comensales: '3-4',
          direccion: 'Calle 31 de Agosto, 28',
          telefono: '+34 943 44 16 55',
          email: 'reservas@lacuchara.es',
          web: 'https://lacucharadesantelmo.com'
        }
      ]
    },
    portland: {
      nombre: "Portland, Oregón (EE.UU.)",
      imagen: '../img/portland-city.jpg',
      restaurantes: [
        {
          id: 'luckylabrador',
          nombre: 'Lucky Labrador Brewing',
          tipoCocina: 'cafe',
          descripcion: 'Cervecería artesanal con enorme patio dog friendly y menú para mascotas.',
          imagen: '../img/portland-city.jpg',
          comensales: '3-4',
          direccion: '915 SE Hawthorne Blvd',
          telefono: '+1 503-236-3555',
          email: 'info@luckylab.com',
          web: 'https://luckylab.com'
        },
        {
          id: 'tinshed',
          nombre: 'Tin Shed Garden Cafe',
          tipoCocina: 'cafe',
          descripcion: 'Brunch legendario con menú especial para perros (hamburguesas caninas).',
          imagen: '../img/portland-city.jpg',
          comensales: '1-2',
          direccion: '1438 NE Alberta St',
          telefono: '+1 503-288-6966',
          email: 'hello@tinshedgardencafe.com',
          web: 'https://tinshedgardencafe.com'
        }
      ]
    },
    garda: {
      nombre: "Lago di Garda, Italia",
      imagen: '../img/garda-italy.jpg',
      restaurantes: [
        {
          id: 'gardenia',
          nombre: 'Ristorante Gardenia',
          tipoCocina: 'local',
          descripcion: 'Cocina italiana tradicional en terraza con vistas al lago, pet friendly.',
          imagen: '../img/garda-italy.jpg',
          comensales: '3-4',
          direccion: 'Via Gardesana, 45',
          telefono: '+39 045 740 5566',
          email: 'info@ristorantegardenia.it',
          web: 'https://ristorantegardenia.it'
        },
        {
          id: 'pescatore',
          nombre: 'Trattoria Al Pescatore',
          tipoCocina: 'local',
          descripcion: 'Especialidad en pescados frescos del lago, acepta mascotas en exterior.',
          imagen: '../img/garda-italy.jpg',
          comensales: '5+',
          direccion: 'Lungolago Zanardelli, 12',
          telefono: '+39 045 627 0022',
          email: 'reservas@alpescatore.it',
          web: ''
        }
      ]
    }
  };

  // =======================================================
  // 🔍 BUSCADOR INTEGRADO - Lógica principal
  // =======================================================
  
  // Elementos del DOM
  const selectDestino = document.getElementById('destino');
  const selectPersonas = document.getElementById('personas');
  const selectRestaurante = document.getElementById('restaurante');
  const btnBuscar = document.getElementById('btnBuscar');
  const btnLimpiar = document.getElementById('btnLimpiar');
  const resultadoContainer = document.getElementById('resultadoContainer');
  
  // Elementos del resumen
  const resumenDestino = document.getElementById('resumenDestino');
  const resumenTipo = document.getElementById('resumenTipo');
  const resumenRestaurante = document.getElementById('resumenRestaurante');
  const resumenPersonas = document.getElementById('resumenPersonas');
  
  // Botones de tipo de cocina
  const botonesTypoCocina = document.querySelectorAll('.selector-btn[data-tipo]');
  let tipoCocinaSeleccionado = '';
  
  // Nombres legibles
  const nombresDestinos = {
    bariloche: 'Bariloche',
    sansebastian: 'San Sebastián',
    portland: 'Portland',
    garda: 'Lago di Garda'
  };
  
  const nombresTipoCocina = {
    local: 'Cocina local',
    internacional: 'Internacional',
    cafe: 'Cafés & Brunch',
    todos: 'Todos'
  };
  
  // Event listener para botones de tipo de cocina
  botonesTypoCocina.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle: si ya está activo, lo desactiva
      const tipo = btn.dataset.tipo;
      
      if (btn.classList.contains('active')) {
        btn.classList.remove('active');
        tipoCocinaSeleccionado = '';
      } else {
        // Desactivar todos y activar el clickeado
        botonesTypoCocina.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        tipoCocinaSeleccionado = tipo === 'todos' ? '' : tipo;
      }
      
      // Actualizar select de restaurantes si ya hay destino
      if (selectDestino.value) {
        actualizarSelectRestaurantes();
      }
      
      actualizarResumen();
    });
  });
  
  // Función para actualizar el select de restaurantes
  function actualizarSelectRestaurantes() {
    if (!selectRestaurante || !selectDestino) return;
    
    const destinoKey = selectDestino.value;
    
    // Limpiar opciones
    selectRestaurante.innerHTML = '';
    
    if (!destinoKey) {
      selectRestaurante.disabled = true;
      selectRestaurante.innerHTML = '<option value="">Primero elegí un destino...</option>';
      actualizarBotonBuscar();
      return;
    }
    
    const data = destinosData[destinoKey];
    if (!data) return;
    
    // Filtrar por tipo de cocina si hay uno seleccionado
    let restaurantesFiltrados = data.restaurantes;
    if (tipoCocinaSeleccionado) {
      restaurantesFiltrados = data.restaurantes.filter(r => r.tipoCocina === tipoCocinaSeleccionado);
    }
    
    if (restaurantesFiltrados.length === 0) {
      selectRestaurante.disabled = true;
      selectRestaurante.innerHTML = '<option value="">No hay restaurantes de este tipo...</option>';
      actualizarBotonBuscar();
      return;
    }
    
    // Habilitar y llenar
    selectRestaurante.disabled = false;
    selectRestaurante.innerHTML = '<option value="">-- Elegí un restaurante --</option>';
    
    restaurantesFiltrados.forEach(r => {
      const option = document.createElement('option');
      option.value = r.id;
      option.textContent = r.nombre;
      selectRestaurante.appendChild(option);
    });
    
    actualizarBotonBuscar();
  }
  
  // Función para actualizar el resumen de selección
  function actualizarResumen() {
    if (!resumenDestino) return;
    
    const destino = selectDestino ? selectDestino.value : '';
    const tipo = tipoCocinaSeleccionado;
    const restaurante = selectRestaurante ? selectRestaurante.value : '';
    const personas = selectPersonas ? selectPersonas.value : '';
    
    // Destino
    resumenDestino.textContent = destino ? nombresDestinos[destino] : '--';
    resumenDestino.classList.toggle('active', !!destino);
    
    // Tipo
    resumenTipo.textContent = tipo ? nombresTipoCocina[tipo] : 'Todos';
    resumenTipo.classList.toggle('active', !!tipo);
    
    // Restaurante
    if (restaurante && destino) {
      const data = destinosData[destino];
      const r = data ? data.restaurantes.find(x => x.id === restaurante) : null;
      resumenRestaurante.textContent = r ? r.nombre : '--';
      resumenRestaurante.classList.add('active');
    } else {
      resumenRestaurante.textContent = '--';
      resumenRestaurante.classList.remove('active');
    }
    
    // Personas
    resumenPersonas.textContent = personas || '--';
    resumenPersonas.classList.toggle('active', !!personas);
  }
  
  // Función para validar y actualizar botón de búsqueda
  function actualizarBotonBuscar() {
    if (!btnBuscar) return;
    
    const destinoOk = selectDestino && selectDestino.value;
    const restauranteOk = selectRestaurante && selectRestaurante.value;
    
    btnBuscar.disabled = !(destinoOk && restauranteOk);
  }
  
  // Función para limpiar todas las selecciones
  function limpiarSelecciones() {
    if (selectDestino) selectDestino.value = '';
    if (selectPersonas) selectPersonas.value = '1-2';
    if (selectRestaurante) {
      selectRestaurante.innerHTML = '<option value="">Primero elegí un destino...</option>';
      selectRestaurante.disabled = true;
    }
    
    // Desactivar botones de tipo
    botonesTypoCocina.forEach(btn => btn.classList.remove('active'));
    tipoCocinaSeleccionado = '';
    
    // Limpiar resultado
    if (resultadoContainer) {
      resultadoContainer.innerHTML = `
        <div class="resultado-placeholder">
          <div class="placeholder-icon">🍽️</div>
          <p>Seleccioná un destino para ver los restaurantes disponibles</p>
        </div>
      `;
    }
    
    actualizarResumen();
    actualizarBotonBuscar();
  }
  
  // Función para mostrar el resultado
  function mostrarResultado() {
    const destinoKey = selectDestino.value;
    const restauranteId = selectRestaurante.value;
    
    if (!destinoKey || !restauranteId) return;
    
    const data = destinosData[destinoKey];
    const restaurante = data.restaurantes.find(r => r.id === restauranteId);
    
    if (!restaurante) return;
    
    // Crear HTML del resultado
    resultadoContainer.innerHTML = `
      <div class="resultado-contenido">
        <div class="resultado-imagen">
          <img src="${restaurante.imagen}" alt="${restaurante.nombre}">
        </div>
        
        <div class="resultado-info">
          <h3>${restaurante.nombre}</h3>
          <span class="resultado-tipo-badge">${nombresTipoCocina[restaurante.tipoCocina]}</span>
          
          <p class="resultado-descripcion">${restaurante.descripcion}</p>
          
          <div class="resultado-contacto">
            <h4>📞 Información de contacto</h4>
            <ul>
              <li><strong>Dirección:</strong> ${restaurante.direccion}</li>
              <li><strong>Teléfono:</strong> ${restaurante.telefono}</li>
              <li><strong>Email:</strong> <a href="mailto:${restaurante.email}">${restaurante.email}</a></li>
              ${restaurante.web ? `<li><strong>Web:</strong> <a href="${restaurante.web}" target="_blank">Visitar sitio</a></li>` : ''}
            </ul>
          </div>
          
          <div class="resultado-amenities">
            <h4>🐾 Características pet friendly</h4>
            <ul>
              <li>Mesas en exterior</li>
              <li>Bowls de agua disponibles</li>
              <li>Personal amigable con mascotas</li>
              <li>Comensales: ${selectPersonas.value}</li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }
  
  // Event listeners
  if (selectDestino) {
    selectDestino.addEventListener('change', () => {
      actualizarSelectRestaurantes();
      actualizarResumen();
      
      // Si se cambia el destino, limpiar resultado
      if (resultadoContainer) {
        resultadoContainer.innerHTML = `
          <div class="resultado-placeholder">
            <div class="placeholder-icon">🍽️</div>
            <p>Seleccioná un restaurante para ver los detalles</p>
          </div>
        `;
      }
    });
  }
  
  if (selectPersonas) {
    selectPersonas.addEventListener('change', actualizarResumen);
  }
  
  if (selectRestaurante) {
    selectRestaurante.addEventListener('change', () => {
      actualizarBotonBuscar();
      actualizarResumen();
    });
  }
  
  if (btnBuscar) {
    btnBuscar.addEventListener('click', () => {
      mostrarResultado();
    });
  }
  
  if (btnLimpiar) {
    btnLimpiar.addEventListener('click', limpiarSelecciones);
  }
  
  // Inicializar resumen
  actualizarResumen();

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
