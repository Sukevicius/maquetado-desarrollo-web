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
  let destinosData = {};

  // Cargar datos desde el archivo JSON
  fetch('actividades-data.json')
    .then(response => response.json())
    .then(data => {
      destinosData = data.destinos;
      console.log('✅ Datos de actividades cargados:', Object.keys(destinosData).length, 'destinos');
      // Inicializar la interfaz después de cargar los datos
      inicializarInterfaz();
    })
    .catch(error => {
      console.error('❌ Error cargando datos de actividades:', error);
    });

  // Función para inicializar la interfaz
  function inicializarInterfaz() {

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
  
  // Mapeo de nombres para display
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

  const nombresTipoActividad = {
    playas: 'Playas',
    senderos: 'Senderos',
    parques: 'Parques',
    'dog-parks': 'Dog Parks'
  };

  // =======================================================
  // 🎯 ELEMENTOS DEL DOM - BUSCADOR INTEGRADO
  // =======================================================
  const selectDestino = document.getElementById('selectDestino');
  const botonesActividad = document.querySelectorAll('#botonesActividad .selector-btn');
  const selectActividad = document.getElementById('selectActividad');
  const selectPersonas = document.getElementById('selectPersonas');
  const btnBuscar = document.getElementById('btnBuscar');
  const btnLimpiar = document.getElementById('btnLimpiar');
  
  const resumenDestino = document.getElementById('resumenDestino');
  const resumenTipo = document.getElementById('resumenTipo');
  const resumenActividad = document.getElementById('resumenActividad');
  const resumenPersonas = document.getElementById('resumenPersonas');
  
  const resultadoContainer = document.getElementById('resultadoContainer');

  let tipoActividadSeleccionado = '';

  // =======================================================
  // 🔄 FUNCIÓN: ACTUALIZAR SELECT DE ACTIVIDADES
  // =======================================================
  function actualizarSelectActividades() {
    const destinoKey = selectDestino.value;
    const tipo = tipoActividadSeleccionado;
    
    if (!destinoKey) {
      selectActividad.disabled = true;
      selectActividad.innerHTML = '<option value="">Primero seleccioná un destino</option>';
      return;
    }
    
    const data = destinosData[destinoKey];
    let actividadesFiltradas = data.actividades;
    
    // Filtrar por tipo si hay uno seleccionado
    if (tipo) {
      actividadesFiltradas = actividadesFiltradas.filter(a => a.tipoActividad === tipo);
    }
    
    selectActividad.disabled = false;
    selectActividad.innerHTML = '<option value="">Elegí una actividad...</option>';
    
    actividadesFiltradas.forEach(actividad => {
      const option = document.createElement('option');
      option.value = actividad.id;
      option.textContent = `${actividad.nombre} - ${nombresTipoActividad[actividad.tipoActividad]}`;
      selectActividad.appendChild(option);
    });
  }

  // =======================================================
  // 📝 FUNCIÓN: ACTUALIZAR RESUMEN
  // =======================================================
  function actualizarResumen() {
    const destino = selectDestino ? selectDestino.value : '';
    const tipo = tipoActividadSeleccionado;
    const actividad = selectActividad ? selectActividad.value : '';
    const personas = selectPersonas ? selectPersonas.value : '';
    
    // Destino
    resumenDestino.textContent = destino ? nombresDestinos[destino] : '--';
    resumenDestino.classList.toggle('active', !!destino);
    
    // Tipo
    resumenTipo.textContent = tipo ? nombresTipoActividad[tipo] : 'Todos';
    resumenTipo.classList.toggle('active', !!tipo);
    
    // Actividad
    if (actividad && destino) {
      const data = destinosData[destino];
      const act = data ? data.actividades.find(a => a.id === actividad) : null;
      resumenActividad.textContent = act ? act.nombre : '--';
      resumenActividad.classList.add('active');
    } else {
      resumenActividad.textContent = '--';
      resumenActividad.classList.remove('active');
    }
    
    // Personas
    resumenPersonas.textContent = personas || '--';
    resumenPersonas.classList.toggle('active', !!personas);
  }

  // =======================================================
  // 🗑️ FUNCIÓN: LIMPIAR SELECCIONES
  // =======================================================
  function limpiarSelecciones() {
    if (selectDestino) selectDestino.value = '';
    if (selectPersonas) selectPersonas.value = '1-2';
    if (selectActividad) {
      selectActividad.value = '';
      selectActividad.disabled = true;
      selectActividad.innerHTML = '<option value="">Primero seleccioná un destino</option>';
    }
    
    // Limpiar botones de tipo
    tipoActividadSeleccionado = '';
    botonesActividad.forEach(btn => btn.classList.remove('active'));
    
    // Limpiar resultado
    resultadoContainer.innerHTML = `
      <div class="resultado-placeholder">
        <div class="placeholder-icon">
          <span class="material-symbols-outlined">hiking</span>
        </div>
        <p>Seleccioná un destino para descubrir actividades pet friendly</p>
      </div>
    `;
    
    btnBuscar.disabled = true;
    actualizarResumen();
  }

  // =======================================================
  // 🎨 FUNCIÓN: MOSTRAR RESULTADO
  // =======================================================
  function mostrarResultado() {
    const destinoKey = selectDestino.value;
    const actividadId = selectActividad.value;
    
    if (!destinoKey || !actividadId) return;
    
    const data = destinosData[destinoKey];
    const actividad = data.actividades.find(a => a.id === actividadId);
    
    if (!actividad) return;
    
    resultadoContainer.innerHTML = `
      <div class="resultado-contenido">
        <div class="resultado-imagen">
          <img src="${actividad.imagen}" alt="${actividad.nombre}">
        </div>
        <div class="resultado-info">
          <h3>${actividad.nombre}</h3>
          <span class="resultado-tipo-badge">${nombresTipoActividad[actividad.tipoActividad]}</span>
          
          <p class="resultado-descripcion">${actividad.descripcion}</p>
          
          <div class="resultado-contacto">
            <h4><span class="material-symbols-outlined">info</span> Información</h4>
            <ul>
              <li><strong>Duración:</strong> ${actividad.duracion}</li>
              <li><strong>Dificultad:</strong> ${actividad.dificultad}</li>
              <li><strong>Mejor época:</strong> ${actividad.mejorEpoca}</li>
              <li><strong>Requisitos:</strong> ${actividad.requisitos}</li>
            </ul>
          </div>
          
          <div class="resultado-amenities">
            <h4><span class="material-symbols-outlined">check_circle</span> Recomendaciones</h4>
            <ul>
              <li>Llevá agua suficiente</li>
              <li>Bolsas para residuos</li>
              <li>Snacks para tu mascota</li>
              <li>Botiquín básico</li>
              <li>Documentación de vacunas</li>
              <li>Correa y collar con ID</li>
            </ul>
          </div>
        </div>
      </div>
    `;
    
    resultadoContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  // =======================================================
  // 👂 EVENT LISTENERS
  // =======================================================
  
  // Cambio de destino
  selectDestino.addEventListener('change', () => {
    actualizarSelectActividades();
    btnBuscar.disabled = !selectDestino.value || !selectActividad.value;
    actualizarResumen();
  });

  // Botones de tipo de actividad
  botonesActividad.forEach(btn => {
    btn.addEventListener('click', () => {
      const tipo = btn.dataset.tipo;
      
      if (tipoActividadSeleccionado === tipo) {
        // Deseleccionar
        tipoActividadSeleccionado = '';
        btn.classList.remove('active');
      } else {
        // Seleccionar
        tipoActividadSeleccionado = tipo;
        botonesActividad.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      }
      
      actualizarSelectActividades();
      actualizarResumen();
    });
  });

  // Cambio de actividad específica
  selectActividad.addEventListener('change', () => {
    btnBuscar.disabled = !selectActividad.value;
    actualizarResumen();
  });

  // Cambio de personas
  selectPersonas.addEventListener('change', () => {
    actualizarResumen();
  });

  // Botón buscar
  btnBuscar.addEventListener('click', () => {
    mostrarResultado();
  });

  // Botón limpiar
  btnLimpiar.addEventListener('click', () => {
    limpiarSelecciones();
  });

  // Inicializar resumen
  actualizarResumen();

  } // Fin de inicializarInterfaz

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
