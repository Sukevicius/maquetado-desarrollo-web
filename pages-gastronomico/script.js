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
  let destinosData = {};

  // Cargar datos desde el archivo JSON
  fetch('gastronomia-data.json')
    .then(response => response.json())
    .then(data => {
      destinosData = data.destinos;
      console.log('✅ Datos de restaurantes cargados:', Object.keys(destinosData).length, 'destinos');
      // Inicializar la interfaz después de cargar los datos
      inicializarInterfaz();
    })
    .catch(error => {
      console.error('❌ Error cargando datos de restaurantes:', error);
    });

  // Función para inicializar la interfaz
  function inicializarInterfaz() {

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
  
  // Poblar select de destinos
  function poblarSelectDestinos() {
    selectDestino.innerHTML = '<option value="">-- Elegí un destino --</option>';
    Object.keys(destinosData).forEach(destinoKey => {
      const option = document.createElement('option');
      option.value = destinoKey;
      option.textContent = destinosData[destinoKey].nombre;
      selectDestino.appendChild(option);
    });
  }
  
  // Llamar al inicio
  poblarSelectDestinos();
  
  // Nombres legibles
  const nombresDestinos = {
    bariloche: 'Bariloche',
    sanmartin: 'San Martín de los Andes',
    villaangostura: 'Villa La Angostura',
    elbolson: 'El Bolsón',
    sanrafael: 'San Rafael',
    villageneralbelgrano: 'Villa General Belgrano',
    tandil: 'Tandil',
    mardelaspampas: 'Mar de las Pampas',
    colonia: 'Colonia del Sacramento',
    florianopolis: 'Florianópolis'
  };
  
  const nombresTipoCocina = {
    local: 'Cocina local',
    internacional: 'Internacional',
    italiana: 'Italiana',
    cerveceria: 'Cervecería',
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
  
  } // Fin de inicializarInterfaz

  // =======================================================
  // 🎠 CARRUSEL DE DESTACADOS CON FLECHAS
  // =======================================================
  const cardSlider = document.getElementById('cardSlider');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (cardSlider && prevBtn && nextBtn) {
    const scrollAmount = 300;
    
    // Función para actualizar el estado de las flechas
    const updateArrows = () => {
      const scrollLeft = Math.round(cardSlider.scrollLeft);
      const scrollWidth = cardSlider.scrollWidth;
      const clientWidth = cardSlider.clientWidth;
      const maxScroll = scrollWidth - clientWidth;
      
      // Deshabilitar flecha izquierda si está al inicio
      if (scrollLeft <= 1) {
        prevBtn.classList.add('disabled');
        prevBtn.disabled = true;
        prevBtn.setAttribute('disabled', 'true');
      } else {
        prevBtn.classList.remove('disabled');
        prevBtn.disabled = false;
        prevBtn.removeAttribute('disabled');
      }
      
      // Deshabilitar flecha derecha si está al final
      if (scrollLeft >= maxScroll - 25) {
        nextBtn.classList.add('disabled');
        nextBtn.disabled = true;
        nextBtn.setAttribute('disabled', 'true');
      } else {
        nextBtn.classList.remove('disabled');
        nextBtn.disabled = false;
        nextBtn.removeAttribute('disabled');
      }
    };
    
    // Actualizar al cargar (con delay para asegurar que el DOM esté listo)
    setTimeout(updateArrows, 100);
    
    // Actualizar al hacer scroll
    cardSlider.addEventListener('scroll', updateArrows);
    
    // Eventos de clic en las flechas con actualización posterior
    prevBtn.addEventListener('click', () => {
      if (!prevBtn.disabled && !prevBtn.classList.contains('disabled')) {
        cardSlider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        setTimeout(updateArrows, 400);
      }
    });

    nextBtn.addEventListener('click', () => {
      if (!nextBtn.disabled && !nextBtn.classList.contains('disabled')) {
        cardSlider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        setTimeout(updateArrows, 400);
      }
    });
    
    // Actualizar al cambiar el tamaño de la ventana
    window.addEventListener('resize', () => {
      setTimeout(updateArrows, 100);
    });
  }

}); // Fin de DOMContentLoaded
