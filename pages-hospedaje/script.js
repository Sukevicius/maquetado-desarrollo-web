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
  // 📦 DATOS DE DESTINOS - HOSPEDAJES PET FRIENDLY
  // =======================================================
  // Los datos se cargan desde hospedajes-data.js (variable global DESTINOS_DATA)
  const destinosData = DESTINOS_DATA;
  console.log('✅ Datos de hospedajes cargados:', Object.keys(destinosData).length, 'destinos')

  // Textos por temporada con info de cuidados
  const temporadas = {
    primavera: { 
      emoji: '🌸', 
      texto: 'Primavera - Ideal para paseos al aire libre',
      temperatura: '12°C - 22°C',
      cuidados: [
        '🌼 Época de alergias: llevá antihistamínicos para tu mascota',
        '🐛 Aplicá antiparasitarios (pulgas y garrapatas activas)',
        '💧 Hidratación constante durante caminatas',
        '🌧️ Llevá impermeable para lluvias inesperadas'
      ],
      consejos: 'Ideal para caminatas largas y actividades al aire libre. Las temperaturas son agradables pero pueden variar, llevá abrigo liviano para vos y tu mascota.',
      alerta: 'Revisá a tu mascota después de cada paseo por posibles garrapatas.'
    },
    verano: { 
      emoji: '☀️', 
      texto: 'Verano - Perfecto para playas y lagos',
      temperatura: '20°C - 35°C',
      cuidados: [
        '🥵 Evitá paseos entre 12:00 y 16:00 (piso caliente)',
        '💧 Agua fresca siempre disponible (riesgo de golpe de calor)',
        '🐾 Protegé las almohadillas del asfalto caliente',
        '🏖️ Buscá playas habilitadas para mascotas'
      ],
      consejos: 'Las mañanas y tardes son ideales para actividades. Buscá hospedajes con aire acondicionado o ventilación. Nunca dejes a tu mascota en el auto.',
      alerta: '⚠️ Signos de golpe de calor: jadeo excesivo, babeo, debilidad. Actuá rápido!'
    },
    otono: { 
      emoji: '🍂', 
      texto: 'Otoño - Paisajes coloridos y clima templado',
      temperatura: '8°C - 18°C',
      cuidados: [
        '🍄 Cuidado con hongos y frutos caídos (pueden ser tóxicos)',
        '🌡️ Cambios bruscos de temperatura: llevá abrigo',
        '🌙 Días más cortos: usá collar reflectante',
        '🍂 Hojas húmedas pueden ocultar peligros'
      ],
      consejos: 'Excelente época para viajar: menos turistas y paisajes hermosos. Ideal para razas con pelaje grueso. Aprovechá las tardes doradas para fotos!',
      alerta: 'Controlá que tu mascota no coma castañas o bellotas caídas.'
    },
    invierno: { 
      emoji: '❄️', 
      texto: 'Invierno - Nieve y acogedores hospedajes',
      temperatura: '-5°C - 10°C',
      cuidados: [
        '🧥 Abrigo para razas de pelo corto o pequeñas',
        '🧂 La sal de las calles irrita las almohadillas',
        '🏠 Secá bien a tu mascota al volver del paseo',
        '❄️ Cuidado con lagos y superficies congeladas'
      ],
      consejos: 'Perfecta para disfrutar junto al fuego. Algunos hoteles ofrecen mantas especiales para mascotas. Paseos cortos pero frecuentes.',
      alerta: '⚠️ El anticongelante es muy tóxico y tiene sabor dulce que atrae a los perros.'
    }
  };

  // =======================================================
  // 🔍 BUSCADOR INTEGRADO - Sistema de selects
  // =======================================================
  
  // Elementos del DOM - Selects
  const selectDestino = document.getElementById('selectDestino');
  const selectTipo = document.getElementById('selectTipo');
  const selectHospedaje = document.getElementById('selectHospedaje');
  const selectTemporada = document.getElementById('selectTemporada');
  const btnBuscar = document.getElementById('btnBuscar');
  const btnLimpiar = document.getElementById('btnLimpiar');
  
  // Elementos del resumen
  const resumenDestino = document.getElementById('resumenDestino');
  const resumenTipo = document.getElementById('resumenTipo');
  const resumenHospedaje = document.getElementById('resumenHospedaje');
  const resumenTemporada = document.getElementById('resumenTemporada');
  
  // Elementos del resultado
  const resultadoPlaceholder = document.getElementById('resultadoPlaceholder');
  const resultadoContenido = document.getElementById('resultadoContenido');
  const resultadoLista = document.getElementById('resultadoLista');
  
  // Elementos del detalle
  const resultadoImagen = document.getElementById('resultadoImagen');
  const resultadoNombre = document.getElementById('resultadoNombre');
  const resultadoTipoBadge = document.getElementById('resultadoTipoBadge');
  const resultadoDescripcion = document.getElementById('resultadoDescripcion');
  const resultadoTelefono = document.getElementById('resultadoTelefono');
  const resultadoEmail = document.getElementById('resultadoEmail');
  const resultadoDireccion = document.getElementById('resultadoDireccion');
  const resultadoWeb = document.getElementById('resultadoWeb');
  const resultadoAmenities = document.getElementById('resultadoAmenities');
  const resultadoTemporadaBadge = document.getElementById('resultadoTemporadaBadge');
  const listaHospedajes = document.getElementById('listaHospedajes');
  const listaTitulo = document.getElementById('listatitulo');
  
  // Elementos de info de temporada (en detalle)
  const resultadoTemporadaInfo = document.getElementById('resultadoTemporadaInfo');
  const temporadaTitulo = document.getElementById('temporadaTitulo');
  const temporadaTemp = document.getElementById('temporadaTemp');
  const temporadaConsejos = document.getElementById('temporadaConsejos');
  const temporadaCuidados = document.getElementById('temporadaCuidados');
  const temporadaAlerta = document.getElementById('temporadaAlerta');
  
  // Elementos de info de temporada (standalone)
  const temporadaInfoStandalone = document.getElementById('temporadaInfoStandalone');
  const temporadaEmojiStandalone = document.getElementById('temporadaEmojiStandalone');
  const temporadaTituloStandalone = document.getElementById('temporadaTituloStandalone');
  const temporadaTempStandalone = document.getElementById('temporadaTempStandalone');
  const temporadaConsejosStandalone = document.getElementById('temporadaConsejosStandalone');
  const temporadaCuidadosStandalone = document.getElementById('temporadaCuidadosStandalone');
  const temporadaAlertaStandalone = document.getElementById('temporadaAlertaStandalone');
  
  // Nombres legibles para mostrar
  const nombresDestinos = {
    bariloche: 'Bariloche',
    sanmartin: 'San Martín de los Andes',
    angostura: 'Villa La Angostura',
    elbolson: 'El Bolsón',
    sanrafael: 'San Rafael',
    belgrano: 'Villa Gral. Belgrano',
    tandil: 'Tandil',
    mardlaspampas: 'Mar de las Pampas',
    sansebastian: 'San Sebastián',
    portland: 'Portland',
    garda: 'Lago di Garda',
    colonia: 'Colonia del Sacramento',
    florianopolis: 'Florianópolis'
  };
  
  const nombresTipos = {
    '': 'Todos',
    hotel: '🏨 Hotel',
    departamento: '🏢 Depto',
    casa: '🏡 Casa'
  };
  
  // Función para validar y actualizar el estado del botón
  function actualizarBotonBuscar() {
    if (!btnBuscar) return;
    
    const destinoSeleccionado = selectDestino && selectDestino.value;
    const hospedajeSeleccionado = selectHospedaje && selectHospedaje.value;
    
    // El botón se habilita cuando hay destino Y hospedaje seleccionados
    if (destinoSeleccionado && hospedajeSeleccionado) {
      btnBuscar.disabled = false;
    } else {
      btnBuscar.disabled = true;
    }
  }
  
  // Función para mostrar info de temporada en el detalle
  function mostrarInfoTemporada(temporadaKey) {
    if (!resultadoTemporadaInfo) return;
    
    if (!temporadaKey || !temporadas[temporadaKey]) {
      resultadoTemporadaInfo.style.display = 'none';
      return;
    }
    
    const t = temporadas[temporadaKey];
    const nombreTemp = temporadaKey.charAt(0).toUpperCase() + temporadaKey.slice(1);
    
    temporadaTitulo.textContent = `${t.emoji} Viajás en ${nombreTemp}`;
    temporadaTemp.textContent = t.temperatura;
    temporadaConsejos.textContent = t.consejos;
    
    // Llenar lista de cuidados
    temporadaCuidados.innerHTML = '';
    t.cuidados.forEach(c => {
      const li = document.createElement('li');
      li.textContent = c;
      temporadaCuidados.appendChild(li);
    });
    
    temporadaAlerta.textContent = t.alerta;
    resultadoTemporadaInfo.style.display = 'block';
  }
  
  // Función para mostrar info de temporada standalone (en lista)
  function mostrarInfoTemporadaStandalone(temporadaKey) {
    if (!temporadaInfoStandalone) return;
    
    if (!temporadaKey || !temporadas[temporadaKey]) {
      temporadaInfoStandalone.style.display = 'none';
      return;
    }
    
    const t = temporadas[temporadaKey];
    const nombreTemp = temporadaKey.charAt(0).toUpperCase() + temporadaKey.slice(1);
    
    temporadaEmojiStandalone.textContent = t.emoji;
    temporadaTituloStandalone.textContent = nombreTemp;
    temporadaTempStandalone.textContent = t.temperatura;
    temporadaConsejosStandalone.textContent = t.consejos;
    
    // Llenar lista de cuidados
    temporadaCuidadosStandalone.innerHTML = '';
    t.cuidados.forEach(c => {
      const li = document.createElement('li');
      li.textContent = c;
      temporadaCuidadosStandalone.appendChild(li);
    });
    
    temporadaAlertaStandalone.textContent = t.alerta;
    temporadaInfoStandalone.style.display = 'block';
  }
  
  // Función para actualizar el resumen de selección
  function actualizarResumen() {
    if (!resumenDestino) return;
    
    const destino = selectDestino ? selectDestino.value : '';
    const tipo = selectTipo ? selectTipo.value : '';
    const hospedaje = selectHospedaje ? selectHospedaje.value : '';
    const temporada = selectTemporada ? selectTemporada.value : '';
    
    // Destino
    resumenDestino.textContent = destino ? nombresDestinos[destino] : '--';
    resumenDestino.classList.toggle('active', !!destino);
    
    // Tipo
    resumenTipo.textContent = tipo ? nombresTipos[tipo] : 'Todos';
    resumenTipo.classList.toggle('active', !!tipo);
    
    // Hospedaje
    if (hospedaje && destino) {
      const data = destinosData[destino];
      const h = data ? data.hospedajes.find(x => x.id === hospedaje) : null;
      resumenHospedaje.textContent = h ? h.nombre : '--';
      resumenHospedaje.classList.add('active');
    } else {
      resumenHospedaje.textContent = '--';
      resumenHospedaje.classList.remove('active');
    }
    
    // Temporada
    if (temporada && temporadas[temporada]) {
      resumenTemporada.textContent = temporadas[temporada].emoji + ' ' + temporada.charAt(0).toUpperCase() + temporada.slice(1);
      resumenTemporada.classList.add('active');
    } else {
      resumenTemporada.textContent = 'Todas';
      resumenTemporada.classList.remove('active');
    }
  }
  
  // Función para actualizar el select de hospedajes
  function actualizarSelectHospedajes() {
    if (!selectHospedaje || !selectDestino) return;
    
    const destinoKey = selectDestino.value;
    const tipoAlojamiento = selectTipo ? selectTipo.value : '';
    
    // Limpiar opciones anteriores
    selectHospedaje.innerHTML = '';
    
    if (!destinoKey) {
      selectHospedaje.disabled = true;
      selectHospedaje.innerHTML = '<option value="">Primero elegí un destino...</option>';
      return;
    }
    
    const data = destinosData[destinoKey];
    if (!data) return;
    
    // Filtrar hospedajes por tipo
    let hospedajesFiltrados = data.hospedajes;
    if (tipoAlojamiento) {
      hospedajesFiltrados = data.hospedajes.filter(h => h.tipoAlojamiento === tipoAlojamiento);
    }
    
    if (hospedajesFiltrados.length === 0) {
      selectHospedaje.disabled = true;
      selectHospedaje.innerHTML = '<option value="">No hay hospedajes de este tipo...</option>';
      return;
    }
    
    // Habilitar y llenar opciones
    selectHospedaje.disabled = false;
    selectHospedaje.innerHTML = '<option value="">-- Elegí un hospedaje --</option>';
    
    hospedajesFiltrados.forEach(h => {
      const option = document.createElement('option');
      option.value = h.id;
      option.textContent = `${h.nombre} - ${h.tipo}`;
      selectHospedaje.appendChild(option);
    });
  }
  
  // Función para mostrar lista de hospedajes (cards)
  function mostrarListaHospedajes() {
    if (!resultadoPlaceholder) return;
    
    const destinoKey = selectDestino ? selectDestino.value : '';
    const tipoAlojamiento = selectTipo ? selectTipo.value : '';
    
    if (!destinoKey) {
      resultadoPlaceholder.style.display = 'flex';
      if (resultadoContenido) resultadoContenido.style.display = 'none';
      if (resultadoLista) resultadoLista.style.display = 'none';
      return;
    }
    
    const data = destinosData[destinoKey];
    if (!data) return;
    
    // Filtrar hospedajes
    let hospedajesFiltrados = data.hospedajes;
    if (tipoAlojamiento) {
      hospedajesFiltrados = data.hospedajes.filter(h => h.tipoAlojamiento === tipoAlojamiento);
    }
    
    // Actualizar título
    let tipoTexto = tipoAlojamiento ? nombresTipos[tipoAlojamiento] : 'Todos los hospedajes';
    if (listaTitulo) listaTitulo.textContent = `${tipoTexto} en ${nombresDestinos[destinoKey]}`;
    
    // Generar cards
    if (listaHospedajes) {
      listaHospedajes.innerHTML = '';
      hospedajesFiltrados.forEach(h => {
        const card = document.createElement('div');
        card.className = 'hospedaje-card';
        card.dataset.id = h.id;
        card.innerHTML = `
          <h4>${h.nombre}</h4>
          <span class="tipo-tag">${h.tipo}</span>
          <p>${h.descripcion.substring(0, 80)}...</p>
        `;
        card.addEventListener('click', () => {
          // Actualizar el select
          if (selectHospedaje) {
            selectHospedaje.value = h.id;
          }
          mostrarDetalleHospedaje(h.id);
          actualizarResumen();
        });
        listaHospedajes.appendChild(card);
      });
    }
    
    // Mostrar lista
    resultadoPlaceholder.style.display = 'none';
    if (resultadoContenido) resultadoContenido.style.display = 'none';
    if (resultadoLista) resultadoLista.style.display = 'block';
    
    // Mostrar info de temporada standalone si hay una seleccionada
    const temporada = selectTemporada ? selectTemporada.value : '';
    mostrarInfoTemporadaStandalone(temporada);
  }
  
  // Función para mostrar detalle de hospedaje
  function mostrarDetalleHospedaje(hospedajeId) {
    if (!resultadoContenido) return;
    
    const destinoKey = selectDestino ? selectDestino.value : '';
    if (!destinoKey || !hospedajeId) return;
    
    const data = destinosData[destinoKey];
    if (!data) return;
    
    const hospedaje = data.hospedajes.find(h => h.id === hospedajeId);
    if (!hospedaje) return;
    
    // Actualizar imagen
    if (resultadoImagen) {
      resultadoImagen.src = hospedaje.imagen;
      resultadoImagen.alt = hospedaje.nombre;
    }
    
    // Actualizar info
    if (resultadoNombre) resultadoNombre.textContent = hospedaje.nombre;
    if (resultadoTipoBadge) resultadoTipoBadge.textContent = hospedaje.tipo;
    if (resultadoDescripcion) resultadoDescripcion.textContent = hospedaje.descripcion;
    
    // Actualizar contacto
    if (resultadoTelefono) resultadoTelefono.textContent = hospedaje.telefono;
    if (resultadoEmail) resultadoEmail.textContent = hospedaje.email;
    if (resultadoDireccion) resultadoDireccion.textContent = hospedaje.direccion;
    if (resultadoWeb) {
      resultadoWeb.textContent = hospedaje.web;
      resultadoWeb.href = 'https://' + hospedaje.web;
    }
    
    // Actualizar amenities
    if (resultadoAmenities) {
      resultadoAmenities.innerHTML = '';
      hospedaje.amenities.forEach(a => {
        const li = document.createElement('li');
        li.textContent = a;
        resultadoAmenities.appendChild(li);
      });
    }
    
    // Badge de temporada
    const temporada = selectTemporada ? selectTemporada.value : '';
    if (resultadoTemporadaBadge) {
      if (temporada && temporadas[temporada]) {
        const t = temporadas[temporada];
        resultadoTemporadaBadge.textContent = `${t.emoji} ${t.texto}`;
        resultadoTemporadaBadge.style.display = 'block';
      } else {
        resultadoTemporadaBadge.style.display = 'none';
      }
    }
    
    // Mostrar info de temporada en el detalle
    mostrarInfoTemporada(temporada);
    
    // Ocultar el standalone (por si estaba visible)
    if (temporadaInfoStandalone) temporadaInfoStandalone.style.display = 'none';
    
    // Marcar card activa
    document.querySelectorAll('.hospedaje-card').forEach(card => {
      card.classList.toggle('active', card.dataset.id === hospedajeId);
    });
    
    // Mostrar detalle
    if (resultadoPlaceholder) resultadoPlaceholder.style.display = 'none';
    if (resultadoLista) resultadoLista.style.display = 'none';
    resultadoContenido.style.display = 'grid';
  }
  
  // =======================================================
  // 📝 EVENT LISTENERS - Selects
  // =======================================================
  
  // Cambio de destino
  if (selectDestino) {
    selectDestino.addEventListener('change', () => {
      // Resetear hospedaje seleccionado
      if (selectHospedaje) selectHospedaje.value = '';
      actualizarSelectHospedajes();
      actualizarResumen();
      actualizarBotonBuscar();
      // Ya NO mostramos resultados automáticamente
    });
  }
  
  // Cambio de tipo
  if (selectTipo) {
    selectTipo.addEventListener('change', () => {
      // Resetear hospedaje seleccionado
      if (selectHospedaje) selectHospedaje.value = '';
      actualizarSelectHospedajes();
      actualizarResumen();
      actualizarBotonBuscar();
      // Ya NO mostramos resultados automáticamente
    });
  }
  
  // Cambio de hospedaje
  if (selectHospedaje) {
    selectHospedaje.addEventListener('change', () => {
      actualizarResumen();
      actualizarBotonBuscar();
      // Ya NO mostramos resultados automáticamente
    });
  }
  
  // Cambio de temporada
  if (selectTemporada) {
    selectTemporada.addEventListener('change', () => {
      actualizarResumen();
      // Ya NO mostramos info de temporada automáticamente
      // Solo se mostrará cuando se haga click en Buscar
    });
  }
  
  // Click en botón de búsqueda
  if (btnBuscar) {
    btnBuscar.addEventListener('click', () => {
      const hospedajeId = selectHospedaje ? selectHospedaje.value : '';
      const temporada = selectTemporada ? selectTemporada.value : '';
      
      if (hospedajeId) {
        // Mostrar detalle del hospedaje
        mostrarDetalleHospedaje(hospedajeId);
        
        // Si hay temporada, actualizar badge e info
        if (temporada && temporadas[temporada]) {
          const t = temporadas[temporada];
          if (resultadoTemporadaBadge) {
            resultadoTemporadaBadge.textContent = `${t.emoji} ${t.texto}`;
            resultadoTemporadaBadge.style.display = 'block';
          }
          mostrarInfoTemporada(temporada);
        } else {
          if (resultadoTemporadaBadge) resultadoTemporadaBadge.style.display = 'none';
          if (resultadoTemporadaInfo) resultadoTemporadaInfo.style.display = 'none';
        }
      } else if (selectDestino && selectDestino.value) {
        // Mostrar lista de hospedajes
        mostrarListaHospedajes();
        
        // Si hay temporada, mostrar info standalone
        if (temporada) {
          mostrarInfoTemporadaStandalone(temporada);
        }
      }
    });
  }
  
  // Click en botón de limpiar
  if (btnLimpiar) {
    btnLimpiar.addEventListener('click', () => {
      // Resetear todos los selects
      if (selectDestino) selectDestino.value = '';
      if (selectTipo) selectTipo.value = '';
      if (selectHospedaje) {
        selectHospedaje.value = '';
        selectHospedaje.disabled = true;
        selectHospedaje.innerHTML = '<option value="">Primero elegí un destino...</option>';
      }
      if (selectTemporada) selectTemporada.value = '';
      
      // Actualizar resumen
      actualizarResumen();
      
      // Actualizar botón de búsqueda
      actualizarBotonBuscar();
      
      // Ocultar todos los resultados y mostrar placeholder
      if (resultadoContenido) resultadoContenido.style.display = 'none';
      if (resultadoLista) resultadoLista.style.display = 'none';
      if (temporadaInfoStandalone) temporadaInfoStandalone.style.display = 'none';
      if (resultadoPlaceholder) resultadoPlaceholder.style.display = 'flex';
    });
  }

  // =======================================================
  // 🔘 BOTONES DEL RESUMEN - Click para ir a la fila
  // =======================================================
  
  // Mapeo de targets a filas y selects
  const rowMap = {
    destino: { row: document.getElementById('rowDestino'), select: selectDestino },
    tipo: { row: document.getElementById('rowTipo'), select: selectTipo },
    hospedaje: { row: document.getElementById('rowHospedaje'), select: selectHospedaje },
    temporada: { row: document.getElementById('rowTemporada'), select: selectTemporada }
  };
  
  // Función para resaltar una fila y abrir su select
  function highlightRow(rowId) {
    const target = rowMap[rowId];
    if (!target || !target.row) return;
    
    // Quitar highlight de todas las filas
    Object.values(rowMap).forEach(t => {
      if (t.row) t.row.classList.remove('highlight');
    });
    
    // Scroll suave a la fila
    target.row.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Agregar highlight
    target.row.classList.add('highlight');
    
    // Hacer focus en el select para abrirlo
    if (target.select) {
      setTimeout(() => {
        target.select.focus();
      }, 300);
    }
    
    // Quitar highlight después de 2 segundos
    setTimeout(() => {
      target.row.classList.remove('highlight');
    }, 2000);
  }
  
  // Event listeners para botones del resumen
  const resumenButtons = document.querySelectorAll('.resumen-btn');
  resumenButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;
      if (target) {
        highlightRow(target);
      }
    });
  });

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
  
  // Inicializar estado al cargar
  actualizarResumen();
  actualizarBotonBuscar();

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
});
