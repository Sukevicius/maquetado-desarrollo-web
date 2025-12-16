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
      actividades: [
        {
          id: 'villa-coihues',
          nombre: 'Villa Coihues',
          tipoActividad: 'senderos',
          descripcion: 'Caminata fácil de 5km con vistas espectaculares al lago Nahuel Huapi. Ideal para perros de todas las edades y tamaños.',
          imagen: '../img/bariloche.png',
          grupoPersonas: '1-2',
          duracion: '2-3 horas',
          dificultad: 'Fácil',
          requisitos: 'Correa obligatoria, bolsas para residuos',
          mejorEpoca: 'Primavera y Verano'
        },
        {
          id: 'cerro-catedral',
          nombre: 'Cerro Catedral',
          tipoActividad: 'senderos',
          descripcion: 'Senderos de montaña con diferentes niveles de dificultad. Paisajes patagónicos únicos con tu mascota.',
          imagen: '../img/bariloche.png',
          grupoPersonas: '3-4',
          duracion: '4-6 horas',
          dificultad: 'Moderada',
          requisitos: 'Buen estado físico del perro, agua abundante',
          mejorEpoca: 'Todo el año'
        },
        {
          id: 'playa-bonita',
          nombre: 'Playa Bonita',
          tipoActividad: 'playas',
          descripcion: 'Playa tranquila en el lago Nahuel Huapi donde tu perro puede nadar libremente. Aguas cristalinas y arena suave.',
          imagen: '../img/bariloche.png',
          grupoPersonas: '1-2',
          duracion: '3-4 horas',
          dificultad: 'Fácil',
          requisitos: 'Toalla para el perro, juguetes acuáticos',
          mejorEpoca: 'Verano'
        },
        {
          id: 'bahia-serena',
          nombre: 'Bahía Serena',
          tipoActividad: 'playas',
          descripcion: 'Aguas calmas perfectas para que tu perro aprenda a nadar. Zona segura y con poco oleaje.',
          imagen: '../img/bariloche.png',
          grupoPersonas: 'grupo',
          duracion: '2-3 horas',
          dificultad: 'Fácil',
          requisitos: 'Chaleco salvavidas recomendado',
          mejorEpoca: 'Verano'
        }
      ]
    },
    sansebastian: {
      nombre: "San Sebastián, España",
      imagen: '../img/SanSebastian.png',
      actividades: [
        {
          id: 'playa-ondarreta',
          nombre: 'Playa de Ondarreta',
          tipoActividad: 'playas',
          descripcion: 'Playa urbana que permite perros en temporada baja (octubre-mayo). Una de las playas más bellas de Europa.',
          imagen: '../img/SanSebastian.png',
          grupoPersonas: '1-2',
          duracion: '2-4 horas',
          dificultad: 'Fácil',
          requisitos: 'Correa obligatoria, horarios específicos',
          mejorEpoca: 'Otoño e Invierno'
        },
        {
          id: 'monte-urgull',
          nombre: 'Monte Urgull',
          tipoActividad: 'senderos',
          descripcion: 'Sendero urbano con vistas panorámicas a la bahía de La Concha. Bosque y fortaleza histórica.',
          imagen: '../img/SanSebastian.png',
          grupoPersonas: '3-4',
          duracion: '1-2 horas',
          dificultad: 'Fácil',
          requisitos: 'Correa, agua para el perro',
          mejorEpoca: 'Todo el año'
        },
        {
          id: 'paseo-concha',
          nombre: 'Paseo de La Concha',
          tipoActividad: 'parques',
          descripcion: 'Icónico paseo marítimo de 3km completamente pet friendly. Ideal para caminar al atardecer.',
          imagen: '../img/SanSebastian.png',
          grupoPersonas: 'grupo',
          duracion: '1-2 horas',
          dificultad: 'Fácil',
          requisitos: 'Ninguno especial',
          mejorEpoca: 'Todo el año'
        }
      ]
    },
    portland: {
      nombre: "Portland, Oregón (EE.UU.)",
      imagen: '../img/portland-city.jpg',
      actividades: [
        {
          id: 'forest-park',
          nombre: 'Forest Park',
          tipoActividad: 'parques',
          descripcion: 'Uno de los parques urbanos más grandes de EE.UU. con más de 130km de senderos naturales.',
          imagen: '../img/portland-city.jpg',
          grupoPersonas: '3-4',
          duracion: '2-6 horas',
          dificultad: 'Moderada',
          requisitos: 'Correa en zonas compartidas, agua',
          mejorEpoca: 'Primavera y Otoño'
        },
        {
          id: 'mt-tabor',
          nombre: 'Mt. Tabor Park',
          tipoActividad: 'parques',
          descripcion: 'Parque único construido sobre un volcán extinto. Áreas sin correa designadas y vistas a la ciudad.',
          imagen: '../img/portland-city.jpg',
          grupoPersonas: '1-2',
          duracion: '1-3 horas',
          dificultad: 'Fácil',
          requisitos: 'Bolsas para residuos',
          mejorEpoca: 'Todo el año'
        },
        {
          id: 'sellwood-park',
          nombre: 'Sellwood Riverfront Park',
          tipoActividad: 'dog-parks',
          descripcion: 'Dog park junto al río Willamette. Área sin correa con acceso al agua para que tu perro nade.',
          imagen: '../img/portland-city.jpg',
          grupoPersonas: 'grupo',
          duracion: '1-2 horas',
          dificultad: 'Fácil',
          requisitos: 'Vacunas al día, comportamiento social',
          mejorEpoca: 'Verano'
        },
        {
          id: 'chimney-park',
          nombre: 'Chimney Park',
          tipoActividad: 'dog-parks',
          descripcion: 'Dog park cercado de 2 acres. Área separada para perros pequeños y grandes.',
          imagen: '../img/portland-city.jpg',
          grupoPersonas: '1-2',
          duracion: '1 hora',
          dificultad: 'Fácil',
          requisitos: 'Vacunas, licencia de perro',
          mejorEpoca: 'Todo el año'
        }
      ]
    },
    garda: {
      nombre: "Lago di Garda, Italia",
      imagen: '../img/garda-italy.jpg',
      actividades: [
        {
          id: 'bau-beach',
          nombre: 'Bau Beach (Peschiera)',
          tipoActividad: 'playas',
          descripcion: 'Primera playa exclusiva para perros en Italia. Arena limpia, duchas y zona de juegos acuáticos.',
          imagen: '../img/garda-italy.jpg',
          grupoPersonas: '1-2',
          duracion: '3-5 horas',
          dificultad: 'Fácil',
          requisitos: 'Entrada con costo, vacunas requeridas',
          mejorEpoca: 'Verano'
        },
        {
          id: 'sirmione',
          nombre: 'Sirmione',
          tipoActividad: 'parques',
          descripcion: 'Pueblo medieval completamente pet friendly. Calles históricas, castillo y aguas termales.',
          imagen: '../img/garda-italy.jpg',
          grupoPersonas: '3-4',
          duracion: '4-6 horas',
          dificultad: 'Fácil',
          requisitos: 'Correa en zonas históricas',
          mejorEpoca: 'Primavera y Otoño'
        },
        {
          id: 'malcesine',
          nombre: 'Malcesine',
          tipoActividad: 'parques',
          descripcion: 'Pueblo pintoresco con calles empedradas y vistas al castillo Scaligero. Paseo por el lungolago.',
          imagen: '../img/garda-italy.jpg',
          grupoPersonas: '1-2',
          duracion: '2-4 horas',
          dificultad: 'Fácil',
          requisitos: 'Bozal recomendado en transporte público',
          mejorEpoca: 'Todo el año'
        },
        {
          id: 'limone',
          nombre: 'Limone sul Garda',
          tipoActividad: 'parques',
          descripcion: 'Famoso por sus limoneros. Paseo panorámico junto al lago con terrazas pet friendly.',
          imagen: '../img/garda-italy.jpg',
          grupoPersonas: 'grupo',
          duracion: '3-5 horas',
          dificultad: 'Fácil',
          requisitos: 'Agua, protección solar para el perro',
          mejorEpoca: 'Primavera'
        }
      ]
    }
  };

  // Mapeo de nombres para display
  const nombresDestinos = {
    bariloche: 'Bariloche',
    sansebastian: 'San Sebastián',
    portland: 'Portland',
    garda: 'Lago di Garda'
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
