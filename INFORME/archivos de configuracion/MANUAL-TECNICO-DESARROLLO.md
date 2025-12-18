# 📘 MANUAL TÉCNICO DE DESARROLLO - FURRY TRAVELS

**Proyecto:** Sitio Web Pet Friendly  
**Desarrolladora:** Samanta Sukevicius  
**Materia:** Maquetado y Desarrollo Web  
**Fecha:** Diciembre 2024

---

## 📑 ÍNDICE

1. [Arquitectura del Proyecto](#arquitectura)
2. [Página Principal (index.html)](#index)
3. [Sistema de Navegación](#navegacion)
4. [Carrusel de Cards con Flechas](#carrusel)
5. [Sistema de Modales](#modales)
6. [Páginas de Servicios](#servicios)
7. [Estructura de Datos JSON](#json)
8. [Formulario de Contacto](#contacto)
9. [Mejoras Sugeridas](#mejoras)

---

## 🏗️ ARQUITECTURA DEL PROYECTO {#arquitectura}

### Estructura de Carpetas

```
maquetado-desarrollo-web/
│
├── css/                      # Hojas de estilo
│   ├── reset.css            # Reset de estilos del navegador
│   ├── global.css           # Variables y estilos globales
│   ├── index.css            # Estilos específicos de la home
│   ├── page-cards.css       # Estilos para tarjetas
│   ├── page-hospedaje.css   # Estilos para páginas de servicios
│   └── modal.css            # Estilos de modales
│
├── data/                     # Datos en JSON
│   ├── destinos-data.json   # Información de destinos
│   ├── consultas.json       # Consultas del formulario
│   └── consultas.txt        # Backup en texto plano
│
├── img/                      # Imágenes del sitio
│   ├── img-destinos/        # Imágenes organizadas por destino
│   └── [imágenes generales]
│
├── pages-hospedaje/          # Página de hospedaje
│   ├── hospedaje.html
│   ├── hospedajes-data.js   # Datos de hospedajes (JS)
│   └── script.js
│
├── pages-gastronomico/       # Página de gastronomía
│   ├── gastronomia.html
│   ├── gastronomia-data.json
│   └── script.js
│
├── pages-actividades/        # Página de actividades
│   ├── actividades.html
│   ├── actividades-data.json
│   └── script.js
│
├── index.html                # Página principal
├── contacto.html             # Formulario de contacto
├── gracias.html              # Página de confirmación
├── script.js                 # JavaScript principal
├── procesar_formulario.php   # Backend del formulario
└── config_mail.php           # Configuración de email

```

### Decisiones de Diseño

**¿Por qué esta estructura?**
- **Separación por funcionalidad**: Cada sección (hospedaje, gastronomía, actividades) tiene su carpeta independiente
- **Reutilización de CSS**: Los estilos globales se comparten, los específicos están separados
- **Modularidad**: Cada página puede funcionar de manera independiente
- **Escalabilidad**: Fácil agregar nuevas secciones sin afectar las existentes

---

## 🏠 PÁGINA PRINCIPAL (index.html) {#index}

### 1. Estructura del HTML

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <!-- Meta tags y CSS -->
</head>
<body class="fondo">
    <!-- Top Bar -->
    <div id="topBar" class="top-bar">...</div>
    
    <main>
        <!-- Slider Principal -->
        <header class="sliderPrincipal">...</header>
        
        <!-- Menú Sticky -->
        <div class="header-sticky-bar">...</div>
        
        <!-- Sección Info -->
        <section id="info" class="secinfo">...</section>
        
        <!-- Sección Lugares (Carrusel) -->
        <section id="lugares" class="seclugares">...</section>
        
        <!-- Sección Servicios (Acordeón) -->
        <section id="servicios" class="sechospedaje">...</section>
    </main>
    
    <footer>...</footer>
    
    <!-- Modales -->
    <div class="modal-overlay" id="modal-bariloche">...</div>
    
    <script src="script.js"></script>
</body>
</html>
```

### 2. Elementos Semánticos Importantes

**Uso de etiquetas HTML5:**
```html
<blockquote cite="https://www.avma.org">
    <p><em>"Las mascotas son parte de la familia..."</em></p>
    <footer>— <cite><abbr title="...">AVMA</abbr></cite></footer>
</blockquote>

<dl>
    <dt><strong>Pet Friendly</strong></dt>
    <dd>Establecimientos o servicios que aceptan mascotas.</dd>
</dl>
```

**¿Por qué así?**
- `<blockquote>` con `cite`: Semántica correcta para citas
- `<dl>`, `<dt>`, `<dd>`: Lista de definiciones (perfecto para glosarios)
- `<abbr>`: Accesibilidad para abreviaturas
- Mejora el SEO y la accesibilidad

---

## 🧭 SISTEMA DE NAVEGACIÓN {#navegacion}

### JavaScript del Menú (script.js)

```javascript
// Mostrar u ocultar menú según scroll
const toggleMenus = () => {
  const hasScrolledPast = window.scrollY > window.innerHeight;
  if (menuSticky) menuSticky.style.display = hasScrolledPast ? 'flex' : 'none';
  if (menuVertical) menuVertical.style.display = hasScrolledPast ? 'none' : 'flex';
  if (topBar) topBar.style.display = hasScrolledPast ? 'none' : 'flex';
};

toggleMenus();
window.addEventListener('scroll', toggleMenus);
```

### ¿Cómo funciona?

1. **Al cargar la página**: Muestra top bar y menú vertical
2. **Al hacer scroll > altura de viewport**: Cambia a menú sticky
3. **`window.innerHeight`**: Altura total de la ventana visible
4. **Evento `scroll`**: Se ejecuta cada vez que el usuario scrollea

### Menú Hamburguesa (Mobile)

```javascript
if (hamburgerBtn && navMenu) {
  hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
}
```

**¿Por qué `toggle`?**
- Si tiene la clase, la quita
- Si no la tiene, la agrega
- Perfecto para on/off con un solo botón

### CSS del Menú Sticky

```css
.header-sticky-bar {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    display: none; /* Oculto por defecto */
}
```

**Propiedades clave:**
- `position: fixed`: Se queda pegado al hacer scroll
- `z-index: 1000`: Por encima de todo el contenido
- JavaScript controla el `display`

---

## 🎠 CARRUSEL DE CARDS CON FLECHAS {#carrusel}

### HTML del Carrusel

```html
<div class="slider-wrapper">
    <button class="arrow left" id="prevBtn">
        <span class="material-symbols-outlined">arrow_back_ios</span>
    </button>
    
    <div class="slider-container" id="cardSlider">
        <article class="card">...</article>
        <article class="card">...</article>
        <!-- Más cards -->
    </div>
    
    <button class="arrow right" id="nextBtn">
        <span class="material-symbols-outlined">arrow_forward_ios</span>
    </button>
</div>
```

### JavaScript del Carrusel - EXPLICACIÓN DETALLADA

#### 1. Variables Iniciales

```javascript
const cardSlider = document.getElementById('cardSlider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const scrollAmount = 300; // Píxeles a mover por click
```

#### 2. Función `updateArrows()` - El Cerebro del Sistema

```javascript
const updateArrows = () => {
  // 1. OBTENER VALORES ACTUALES
  const scrollLeft = Math.round(cardSlider.scrollLeft);
  const scrollWidth = cardSlider.scrollWidth;
  const clientWidth = cardSlider.clientWidth;
  const maxScroll = scrollWidth - clientWidth;
  
  // 2. CALCULAR SI ESTAMOS AL INICIO
  if (scrollLeft <= 1) {
    prevBtn.classList.add('disabled');
    prevBtn.disabled = true;
    prevBtn.setAttribute('disabled', 'true');
  } else {
    prevBtn.classList.remove('disabled');
    prevBtn.disabled = false;
    prevBtn.removeAttribute('disabled');
  }
  
  // 3. CALCULAR SI ESTAMOS AL FINAL
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
```

#### Explicación de cada valor:

| Propiedad | Qué es | Ejemplo |
|-----------|--------|---------|
| `scrollLeft` | Píxeles desplazados hacia la derecha | 0 (inicio), 500 (medio), 1000 (cerca del final) |
| `scrollWidth` | Ancho TOTAL del contenedor (todo el contenido) | 2000px (todas las cards juntas) |
| `clientWidth` | Ancho VISIBLE del contenedor (ventana) | 800px (lo que ves en pantalla) |
| `maxScroll` | Máximo scroll posible | 1200px (2000 - 800) |

**Ejemplo Visual:**
```
scrollWidth = 2000px (ancho total)
|--------------------------------------------|
[Visible: 800px]
|----------|
           scrollLeft = 0    (al inicio)
           scrollLeft = 600  (en el medio)
           scrollLeft = 1200 (al final)
```

#### 3. ¿Por qué tolerancia de 25px?

```javascript
if (scrollLeft >= maxScroll - 25) {
  // Deshabilitar flecha derecha
}
```

**Problema sin tolerancia:**
- El scroll se mueve de 300px en 300px
- Raramente llegarás EXACTO a 1200px
- Podrías quedar en 1181px y la flecha seguiría activa
- Cards con gap y padding complican el cálculo exacto

**Solución con tolerancia:**
- Si estás a menos de 25px del final → consideras que llegaste
- `scrollLeft: 1176` → `1176 >= (1200 - 25)` → `1176 >= 1175` → TRUE → Deshabilitada ✅

#### 4. Triple Deshabilitación

```javascript
prevBtn.classList.add('disabled');      // Para CSS
prevBtn.disabled = true;                // Propiedad del elemento
prevBtn.setAttribute('disabled', 'true'); // Atributo HTML
```

**¿Por qué tres formas?**
1. **`.disabled` (clase)**: CSS lo usa para aplicar estilos grises
2. **`.disabled = true`**: JavaScript nativo del botón
3. **`setAttribute`**: Algunos navegadores solo respetan el atributo HTML

**Redundancia intencional para compatibilidad total**

#### 5. Eventos de Click con Validación

```javascript
nextBtn.addEventListener('click', () => {
  if (!nextBtn.disabled && !nextBtn.classList.contains('disabled')) {
    cardSlider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    setTimeout(updateArrows, 400);
  }
});
```

**Flujo:**
1. Usuario hace click
2. Verifica que NO esté disabled
3. Hace scroll suave de 300px a la derecha
4. Espera 400ms (duración de la animación)
5. Actualiza estado de las flechas

**¿Por qué el setTimeout?**
```javascript
setTimeout(updateArrows, 400);
```
- `behavior: 'smooth'` hace una animación
- La animación dura ~300-400ms
- Si actualizas inmediatamente, `scrollLeft` aún no cambió
- Esperar 400ms asegura que la animación terminó

#### 6. Actualización Automática en Múltiples Eventos

```javascript
// Al cargar la página
setTimeout(updateArrows, 100);

// Al hacer scroll (manual o con flechas)
cardSlider.addEventListener('scroll', updateArrows);

// Al redimensionar la ventana
window.addEventListener('resize', () => {
  setTimeout(updateArrows, 100);
});
```

**¿Por qué cada uno?**
- **Carga**: Deshabilitar flecha izquierda desde el inicio
- **Scroll**: Usuario puede scrollear con el mouse/touch
- **Resize**: Cambiar el tamaño de ventana cambia `clientWidth` y `maxScroll`

### CSS del Carrusel

```css
.slider-wrapper {
    position: relative;
    width: 100%;
    overflow: visible;
    padding: 2rem 3rem; /* Espacio para las flechas */
}

.slider-container {
    display: flex;
    overflow-x: hidden; /* Oculta el scroll horizontal nativo */
    scroll-behavior: smooth;
    gap: 24px;
    scroll-snap-type: x mandatory; /* Snap en mobile */
}

.slider-container .card {
    flex: 0 0 auto; /* No crece ni se encoge */
    width: 280px;
    scroll-snap-align: start;
}

.arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%); /* Centrado vertical */
    width: 50px;
    height: 50px;
    z-index: 10;
}

.arrow.left { left: 10px; }
.arrow.right { right: 10px; }

/* Estado disabled - MUY IMPORTANTE el orden */
.arrow:disabled,
.arrow.disabled {
    background-color: #ccc !important;
    color: #666 !important;
    cursor: not-allowed !important;
    opacity: 0.5 !important;
    pointer-events: none !important; /* Ignora todos los eventos */
}

/* Hover SOLO cuando NO está disabled */
.arrow:not([disabled]):not(.disabled):not(:disabled):hover {
    background-color: var(--pantone-mandarin-orange) !important;
    transform: translateY(-50%) scale(1.1) !important;
}
```

**Orden CSS Crítico:**
1. Estilos base de `.arrow`
2. Posiciones `.arrow.left` y `.arrow.right`
3. **Estados disabled** (antes del hover)
4. Hover con `:not()` (al final)

**¿Por qué este orden?**
- Si `hover` va antes que `disabled`, el hover puede sobreescribir
- `:not(:disabled):not(.disabled)` asegura que hover solo funcione cuando está activo
- `pointer-events: none` evita que reciba eventos de mouse

### Responsive Mobile

```css
@media (max-width: 768px) {
    .slider-wrapper {
        padding: 1rem 0;
    }
    
    .arrow {
        width: 36px;
        height: 36px;
        font-size: 1.3rem;
    }
    
    .slider-container {
        overflow-x: scroll; /* Permite scroll táctil */
        padding: 0 45px; /* Espacio para las flechas */
        scroll-snap-type: x mandatory;
    }
    
    .slider-container .card {
        scroll-snap-align: center; /* Centra las cards */
        width: calc(100vw - 100px);
        min-width: 260px;
        max-width: 300px;
    }
}
```

**Diferencias Mobile vs Desktop:**
- **Desktop**: Flechas controlan todo, sin scroll nativo
- **Mobile**: Scroll táctil + flechas opcionales
- `scroll-snap-align: center`: Cards se "pegan" al centro al scrollear

---

## 🎭 SISTEMA DE MODALES {#modales}

### HTML del Modal

```html
<div class="modal-overlay" id="modal-bariloche">
    <div class="modal-container">
        <div class="modal-header" style="background-image: url(...)">
            <button class="modal-close" aria-label="Cerrar modal">&times;</button>
            <h2>Bariloche, Argentina</h2>
        </div>
        <div class="modal-body">
            <div class="modal-intro">...</div>
            <div class="modal-accordion">
                <div class="modal-accordion-item">
                    <button class="modal-accordion-header">
                        Alojamiento <span class="modal-accordion-icon">▼</span>
                    </button>
                    <div class="modal-accordion-content">...</div>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button class="btn-modal btn-cerrar">Cerrar</button>
            <a href="contacto.html" class="btn-modal btn-reservar">Consultar</a>
        </div>
    </div>
</div>
```

### JavaScript de Modales

#### 1. Abrir Modal

```javascript
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
```

**¿Cómo funciona?**
1. Busca todos los botones con atributo `data-modal`
2. Al hacer click, lee el valor (ej: `"bariloche"`)
3. Busca el elemento con ID `modal-bariloche`
4. Agrega clase `active` → CSS lo muestra
5. Agrega `modal-open` al body → Bloquea scroll del fondo

**Ejemplo de botón:**
```html
<button class="card-button" data-modal="bariloche">Ver más</button>
```

#### 2. Cerrar Modal - Múltiples Formas

**a) Botón X o botón Cerrar:**
```javascript
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
```

`.closest('.modal-overlay')`: Sube en el DOM hasta encontrar el modal contenedor

**b) Click fuera del modal:**
```javascript
const modals = document.querySelectorAll('.modal-overlay');
modals.forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) { // Solo si haces click en el overlay (fondo gris)
      modal.classList.remove('active');
      document.body.classList.remove('modal-open');
    }
  });
});
```

**c) Tecla Escape:**
```javascript
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const activeModal = document.querySelector('.modal-overlay.active');
    if (activeModal) {
      activeModal.classList.remove('active');
      document.body.classList.remove('modal-open');
    }
  }
});
```

#### 3. Acordeones dentro del Modal

```javascript
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
```

**Lógica:**
1. Guarda si el acordeón estaba abierto
2. Cierra TODOS los acordeones del modal
3. Si no estaba abierto, lo abre (comportamiento de acordeón: solo uno abierto)

### CSS de Modales

```css
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: none; /* Oculto por defecto */
    z-index: 2000;
}

.modal-overlay.active {
    display: flex; /* Mostrar cuando tiene clase active */
    justify-content: center;
    align-items: center;
}

body.modal-open {
    overflow: hidden; /* Bloquea scroll del body */
}

.modal-container {
    background: white;
    max-width: 800px;
    max-height: 90vh;
    overflow-y: auto;
}
```

**¿Por qué `overflow: hidden` en el body?**
- Cuando el modal está abierto, no quieres que se pueda scrollear la página de fondo
- Solo quieres scroll dentro del modal

---

## 🏨 PÁGINAS DE SERVICIOS {#servicios}

Las tres páginas (Hospedaje, Gastronomía, Actividades) comparten una estructura similar pero con lógicas específicas.

### Estructura Común

```html
<!-- Menú Sticky -->
<div class="header-sticky-bar">...</div>

<!-- Banner -->
<section class="page-banner hospedaje-banner">
    <div class="banner-overlay">
        <h1>HOSPEDAJE</h1>
        <p>Encontrá los mejores alojamientos pet friendly</p>
    </div>
</section>

<!-- Header de Servicios (Acordeón clickeable) -->
<section class="servicios-header">
    <div class="vertical-title">SERVICIOS</div>
    <div class="accordion-container">
        <a href="hospedaje.html" class="accordion-item hospedaje active">
            <span>HOSPEDAJE</span>
        </a>
        <a href="gastronomia.html" class="accordion-item gastronomia">
            <span>GASTRONOMÍA</span>
        </a>
        <a href="actividades.html" class="accordion-item actividades">
            <span>ACTIVIDADES</span>
        </a>
    </div>
</section>

<!-- Buscador Integrado -->
<section class="buscador-integrado">...</section>

<!-- Resultados -->
<div id="resultadoContainer"></div>
```

### CSS del Acordeón de Servicios

**Mejora implementada: Sin estilos inline**

**Antes (❌):**
```html
<div class="accordion-item" style="background-image: url('img/dalmatahotel.png');">
    <a href="hospedaje.html">HOSPEDAJE</a>
</div>
```

**Después (✅):**
```html
<a href="hospedaje.html" class="accordion-item hospedaje">
    <span>HOSPEDAJE</span>
</a>
```

```css
/* CSS separado */
.accordion-item.hospedaje {
    background-image: url('../img/dalmatahotel.png');
}

.accordion-item.gastronomia {
    background-image: url('../img/salchiDepto.png');
}

.accordion-item.actividades {
    background-image: url('../img/grandanesCasa.png');
}
```

**Ventajas:**
1. **Separación de responsabilidades**: HTML estructura, CSS presenta
2. **Mantenibilidad**: Cambiar imagen = editar solo CSS
3. **Performance**: Navegador cachea mejor los archivos CSS
4. **Todo el div es clickeable**: El `<a>` envuelve todo, no solo el texto
5. **Escalabilidad**: Fácil agregar más servicios

---

## 📊 ESTRUCTURA DE DATOS JSON {#json}

### 1. Hospedajes (hospedajes-data.js)

**Decisión: ¿Por qué .js y no .json?**
```javascript
// hospedajes-data.js
const DESTINOS_DATA = {
  bariloche: {
    nombre: "Bariloche",
    temporadas: ["verano", "invierno", "primavera", "otoño"],
    hospedajes: [...]
  }
};
```

**Ventajas del .js:**
- No necesita `fetch()` asíncrono
- Datos disponibles inmediatamente
- Menos código boilerplate
- Variable global accesible

**Desventajas:**
- Menos portable (no se puede usar en otros proyectos fácilmente)
- Carga todo al inicio (no lazy loading)

### 2. Gastronomía (gastronomia-data.json)

```json
{
  "destinos": {
    "bariloche": {
      "nombre": "Bariloche",
      "restaurantes": [
        {
          "id": "maleza",
          "nombre": "Maleza",
          "tipo": "local",
          "descripcion": "...",
          "capacidad": 50,
          "precio": "$$",
          "imagen": "...",
          "servicios": ["WiFi", "Pet-friendly", "Terraza"]
        }
      ]
    }
  }
}
```

**Carga con Fetch:**
```javascript
fetch('gastronomia-data.json')
  .then(response => response.json())
  .then(data => {
    destinosData = data.destinos;
    inicializarInterfaz();
  })
  .catch(error => {
    console.error('❌ Error:', error);
  });
```

**¿Por qué usar .json aquí?**
1. Datos más grandes (muchos restaurantes)
2. Potencial para cargar desde una API real más adelante
3. Separación más clara de datos y lógica
4. Fácil de editar sin tocar código

### 3. Actividades (actividades-data.json)

Estructura similar a gastronomía:

```json
{
  "destinos": {
    "bariloche": {
      "nombre": "Bariloche",
      "actividades": {
        "playas": [...],
        "senderos": [...],
        "parques": [...],
        "dog-parks": [...]
      }
    }
  }
}
```

**Categorías jerárquicas:**
- Destino > Tipo de actividad > Lista de actividades
- Permite filtrado múltiple (destino + tipo)

### 4. Consultas del Formulario (consultas.json)

```json
{
  "consultas": [
    {
      "id": 1,
      "nombre": "Juan Pérez",
      "email": "juan@example.com",
      "telefono": "+54 11 1234-5678",
      "mensaje": "Consulta sobre hospedaje en Bariloche",
      "fecha": "2024-12-15 14:30:00"
    }
  ]
}
```

**Generado por PHP:**
```php
// procesar_formulario.php
$nuevaConsulta = [
    'id' => count($consultas) + 1,
    'nombre' => $_POST['nombre'],
    'email' => $_POST['email'],
    'telefono' => $_POST['telefono'],
    'mensaje' => $_POST['mensaje'],
    'fecha' => date('Y-m-d H:i:s')
];

file_put_contents('data/consultas.json', json_encode($data, JSON_PRETTY_PRINT));
```

---

## 📋 BUSCADORES INTERACTIVOS

### Sistema de Hospedaje

**Características únicas:**
1. Select de destino
2. Botones de tipo de hospedaje (hotel, cabaña, departamento)
3. Select de huéspedes
4. Select de temporada con descripción automática
5. Select de hospedaje específico

```javascript
// Al cambiar destino
selectDestino.addEventListener('change', (e) => {
  const destinoSeleccionado = e.target.value;
  if (destinoSeleccionado) {
    poblarHospedajes(destinoSeleccionado, tipoActual);
    poblarTemporadas(destinoSeleccionado);
  }
});

// Al seleccionar temporada
selectTemporada.addEventListener('change', (e) => {
  const temporada = e.target.value;
  if (temporada) {
    mostrarInfoTemporada(temporada);
  }
});

function mostrarInfoTemporada(temporada) {
  const info = temporadas[temporada];
  descripcionTemporada.innerHTML = `
    <div class="temporada-info">
      <h4>${info.emoji} ${info.texto}</h4>
      <p><strong>Temperatura promedio:</strong> ${info.temperatura}</p>
      <div class="cuidados">
        <h5>🐾 Cuidados importantes:</h5>
        <ul>
          ${info.cuidados.map(c => `<li>${c}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;
}
```

**¿Por qué este diseño?**
- **Selección progresiva**: Primero destino, luego tipo, luego específico
- **Información contextual**: Cada temporada muestra cuidados específicos
- **Filtrado dinámico**: El select de hospedajes se actualiza según el tipo elegido

### Sistema de Gastronomía

**Características:**
1. Botones de tipo de cocina (local, internacional, café)
2. Select de comensales (capacidad del restaurante)
3. Filtrado automático por múltiples criterios

```javascript
// Filtrar restaurantes
function filtrarRestaurantes(destino, tipo, personas) {
  return destinosData[destino].restaurantes.filter(r => {
    const cumpleTipo = !tipo || tipo === 'todos' || r.tipo === tipo;
    const cumpleCapacidad = !personas || r.capacidad >= parseInt(personas);
    return cumpleTipo && cumpleCapacidad;
  });
}

// Mostrar resultados
function mostrarResultado(restaurante) {
  resultadoContainer.innerHTML = `
    <div class="resultado-card">
      <img src="${restaurante.imagen}" alt="${restaurante.nombre}">
      <div class="info">
        <h3>${restaurante.nombre}</h3>
        <p class="tipo">${obtenerTextoTipo(restaurante.tipo)}</p>
        <p class="capacidad">👥 Capacidad: ${restaurante.capacidad} personas</p>
        <div class="servicios">
          ${restaurante.servicios.map(s => `<span class="tag">${s}</span>`).join('')}
        </div>
      </div>
    </div>
  `;
}
```

**Lógica de filtrado:**
```javascript
const cumpleTipo = !tipo || tipo === 'todos' || r.tipo === tipo;
```
- `!tipo`: Si no hay tipo seleccionado → TRUE (mostrar todo)
- `tipo === 'todos'`: Si seleccionó "Todos" → TRUE
- `r.tipo === tipo`: Si coincide el tipo → TRUE

**Operador OR (`||`)**: Si alguna condición es verdadera, pasa el filtro

### Sistema de Actividades

**Características:**
1. Categorización por tipo (playas, senderos, parques, dog-parks)
2. Select de actividad específica dentro de la categoría
3. Mostrar múltiples actividades si no se selecciona una específica

```javascript
// Poblar actividades por tipo
function poblarActividades(destino, tipo) {
  const actividades = destinosData[destino].actividades[tipo];
  selectActividad.innerHTML = '<option value="">-- Todas las actividades --</option>';
  
  actividades.forEach((act, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = act.nombre;
    selectActividad.appendChild(option);
  });
}

// Mostrar todas o una específica
function mostrarActividades(actividades) {
  if (Array.isArray(actividades)) {
    // Mostrar múltiples actividades
    resultadoContainer.innerHTML = actividades.map(act => 
      crearCardActividad(act)
    ).join('');
  } else {
    // Mostrar una actividad específica
    resultadoContainer.innerHTML = crearCardActividad(actividades);
  }
}
```

---

## 📧 FORMULARIO DE CONTACTO {#contacto}

### HTML del Formulario

```html
<form id="contactForm" action="procesar_formulario.php" method="POST">
    <div class="form-group">
        <label for="nombre">Nombre completo</label>
        <input type="text" id="nombre" name="nombre" required 
               pattern="[A-Za-záéíóúÁÉÍÓÚñÑ\s]+" 
               title="Solo letras y espacios">
    </div>
    
    <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
    </div>
    
    <div class="form-group">
        <label for="telefono">Teléfono</label>
        <input type="tel" id="telefono" name="telefono" required
               pattern="\+?\d{1,4}?[\s.-]?\(?\d{1,4}\)?[\s.-]?\d{1,9}">
    </div>
    
    <div class="form-group">
        <label for="mensaje">Mensaje</label>
        <textarea id="mensaje" name="mensaje" required 
                  minlength="10" rows="5"></textarea>
    </div>
    
    <button type="submit" class="btn-submit">Enviar Consulta</button>
</form>
```

**Validaciones HTML5:**
- `required`: Campo obligatorio
- `pattern`: Expresión regular para validar formato
- `type="email"`: Validación automática de email
- `type="tel"`: Teclado numérico en móviles
- `minlength`: Longitud mínima del mensaje

### PHP Backend (procesar_formulario.php)

```php
<?php
// 1. Validar que sea POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: contacto.html");
    exit;
}

// 2. Sanitizar datos
$nombre = filter_var($_POST['nombre'], FILTER_SANITIZE_STRING);
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$telefono = filter_var($_POST['telefono'], FILTER_SANITIZE_STRING);
$mensaje = filter_var($_POST['mensaje'], FILTER_SANITIZE_STRING);

// 3. Validar email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die("Email inválido");
}

// 4. Cargar consultas existentes
$jsonFile = 'data/consultas.json';
$consultas = [];

if (file_exists($jsonFile)) {
    $contenido = file_get_contents($jsonFile);
    $data = json_decode($contenido, true);
    $consultas = $data['consultas'] ?? [];
}

// 5. Agregar nueva consulta
$nuevaConsulta = [
    'id' => count($consultas) + 1,
    'nombre' => $nombre,
    'email' => $email,
    'telefono' => $telefono,
    'mensaje' => $mensaje,
    'fecha' => date('Y-m-d H:i:s')
];

$consultas[] = $nuevaConsulta;

// 6. Guardar en JSON
$data = ['consultas' => $consultas];
file_put_contents($jsonFile, json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

// 7. Guardar backup en texto
$txtFile = 'data/consultas.txt';
$texto = sprintf(
    "ID: %d\nNombre: %s\nEmail: %s\nTeléfono: %s\nMensaje: %s\nFecha: %s\n\n" . str_repeat("-", 50) . "\n\n",
    $nuevaConsulta['id'],
    $nombre,
    $email,
    $telefono,
    $mensaje,
    $nuevaConsulta['fecha']
);
file_put_contents($txtFile, $texto, FILE_APPEND);

// 8. Enviar email (opcional)
require_once 'config_mail.php';
if (ENVIAR_EMAIL) {
    $to = EMAIL_DESTINO;
    $subject = "Nueva consulta de " . $nombre;
    $body = "Nombre: $nombre\nEmail: $email\nTeléfono: $telefono\n\nMensaje:\n$mensaje";
    $headers = "From: " . EMAIL_REMITENTE;
    
    mail($to, $subject, $body, $headers);
}

// 9. Redirigir a página de gracias
header("Location: gracias.html");
exit;
?>
```

**Flujo completo:**
1. Validar método POST
2. Sanitizar datos (eliminar HTML/scripts maliciosos)
3. Validar formato de email
4. Cargar consultas anteriores del JSON
5. Crear objeto de nueva consulta con ID incremental
6. Guardar en JSON (con formato legible)
7. Guardar backup en archivo de texto
8. Enviar email opcional al administrador
9. Redirigir al usuario a página de confirmación

**Seguridad:**
- `FILTER_SANITIZE_STRING`: Elimina tags HTML
- `FILTER_VALIDATE_EMAIL`: Verifica formato válido
- `JSON_UNESCAPED_UNICODE`: Preserva caracteres especiales (ñ, acentos)

---

## 🎨 SISTEMA DE ESTILOS CSS

### Variables CSS Globales (global.css)

```css
:root {
    /* Paleta de colores */
    --pantone-habanero-gold: #FFD04C;
    --pantone-mandarin-orange: #F35B31;
    --pantone-blue-iolite: #1E5AA8;
    --pantone-aquarelle: #57A99A;
    --pantone-muskmelon: #FFC9A4;
    --pantone-tofu: #FFFAED;
    --color-white: #FFFFFF;
    
    /* Espaciado */
    --spacing-xs: 4px;
    --spacing-s: 8px;
    --spacing-m: 16px;
    --spacing-l: 24px;
    --spacing-xl: 32px;
    
    /* Bordes */
    --border-radius-s: 4px;
    --border-radius-m: 8px;
    --border-radius-l: 12px;
    
    /* Tipografía */
    --font-family: Arial, Helvetica, sans-serif;
    --font-size-base: 16px;
}
```

**Ventajas de las variables CSS:**
1. Cambiar un color en un solo lugar
2. Consistencia visual en todo el sitio
3. Fácil crear temas (dark mode, etc.)
4. Mejor mantenibilidad

**Uso:**
```css
.button {
    background-color: var(--pantone-habanero-gold);
    color: var(--pantone-blue-iolite);
    padding: var(--spacing-m);
    border-radius: var(--border-radius-m);
}
```

### Reset CSS (reset.css)

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

a {
    text-decoration: none;
    color: inherit;
}

ul, ol {
    list-style: none;
}

img {
    max-width: 100%;
    display: block;
}
```

**¿Por qué reset?**
- Cada navegador tiene estilos predeterminados diferentes
- Reset los normaliza para que se vean igual en todos
- `box-sizing: border-box`: Padding y border incluidos en el width

### Responsive Design

**Breakpoints usados:**
```css
/* Mobile first approach */

/* Base styles (mobile) - 0-768px */
.card {
    width: 100%;
    padding: 1rem;
}

/* Tablet - 768px+ */
@media (min-width: 768px) {
    .card {
        width: 50%;
    }
}

/* Desktop - 1024px+ */
@media (min-width: 1024px) {
    .card {
        width: 33.33%;
    }
}
```

**¿Por qué Mobile First?**
1. Mayoría del tráfico web es mobile
2. Más fácil agregar features que quitarlas
3. Performance: carga estilos básicos primero

---

## 🚀 MEJORAS SUGERIDAS {#mejoras}

### 1. Performance

**Actual:**
```html
<img src="img/bariloche.jpg" alt="Bariloche">
```

**Mejorado:**
```html
<img src="img/bariloche.jpg" alt="Bariloche" loading="lazy">
```
- `loading="lazy"`: Carga imágenes solo cuando van a ser visibles

**Optimización de imágenes:**
- Usar formato WebP (mejor compresión)
- Imágenes responsive con `<picture>`
- Minificar CSS y JS antes de producción

### 2. Accesibilidad

**Mejoras sugeridas:**

```html
<!-- Agregar roles ARIA -->
<button class="arrow left" 
        id="prevBtn" 
        aria-label="Imagen anterior"
        aria-disabled="false">
    <span aria-hidden="true">←</span>
</button>

<!-- Skip navigation -->
<a href="#main-content" class="skip-link">Saltar al contenido principal</a>

<!-- Anuncios para lectores de pantalla -->
<div role="status" aria-live="polite" class="sr-only">
    Se mostraron 5 hospedajes en Bariloche
</div>
```

**Testear con:**
- Lighthouse (Chrome DevTools)
- Screen reader (NVDA, JAWS)
- Navegación solo con teclado (Tab, Enter, Escape)

### 3. JavaScript Moderno

**Actual:**
```javascript
function poblarSelect() {
    selectDestino.innerHTML = '<option value="">-- Elegí un destino --</option>';
    Object.keys(destinosData).forEach(key => {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = destinosData[key].nombre;
        selectDestino.appendChild(option);
    });
}
```

**Mejorado con Template Literals:**
```javascript
function poblarSelect() {
    const options = Object.entries(destinosData)
        .map(([key, data]) => `<option value="${key}">${data.nombre}</option>`)
        .join('');
    
    selectDestino.innerHTML = `
        <option value="">-- Elegí un destino --</option>
        ${options}
    `;
}
```

**Ventajas:**
- Menos líneas de código
- Más legible
- Mejor performance (un solo innerHTML)

### 4. Separar Lógica de Presentación

**Actual: Todo en script.js**

**Mejorado:**
```javascript
// modules/carousel.js
export class Carousel {
    constructor(containerId, prevBtnId, nextBtnId) {
        this.container = document.getElementById(containerId);
        this.prevBtn = document.getElementById(prevBtnId);
        this.nextBtn = document.getElementById(nextBtnId);
        this.init();
    }
    
    init() {
        this.addEventListeners();
        this.updateArrows();
    }
    
    updateArrows() { /* ... */ }
    scroll(direction) { /* ... */ }
}

// modules/modal.js
export class Modal {
    constructor(modalId) { /* ... */ }
    open() { /* ... */ }
    close() { /* ... */ }
}

// script.js
import { Carousel } from './modules/carousel.js';
import { Modal } from './modules/modal.js';

const carousel = new Carousel('cardSlider', 'prevBtn', 'nextBtn');
```

**Ventajas:**
- Código más organizado
- Reutilizable
- Fácil de testear
- Escalable

### 5. Sistema de Componentes

**Crear funciones reutilizables:**

```javascript
// components/card.js
function createCard(data) {
    return `
        <article class="card">
            <img src="${data.imagen}" alt="${data.nombre}" loading="lazy">
            <div class="card-content">
                <h3>${data.nombre}</h3>
                <p>${data.descripcion}</p>
                <button class="card-button" data-modal="${data.id}">
                    Ver más
                </button>
            </div>
        </article>
    `;
}

// Uso
const cardsHTML = hospedajes.map(h => createCard(h)).join('');
container.innerHTML = cardsHTML;
```

### 6. Estado de la Aplicación

**Problema actual:** Variables dispersas

**Mejorado con State Management:**
```javascript
const AppState = {
    // Estado centralizado
    filtros: {
        destino: null,
        tipo: null,
        temporada: null
    },
    
    resultados: [],
    
    // Métodos
    setDestino(destino) {
        this.filtros.destino = destino;
        this.actualizarResultados();
    },
    
    actualizarResultados() {
        this.resultados = this.filtrarHospedajes();
        this.renderizar();
    },
    
    filtrarHospedajes() {
        // Lógica de filtrado centralizada
    },
    
    renderizar() {
        // Actualizar UI
    }
};
```

**Ventajas:**
- Un solo lugar para el estado
- Más fácil de debuggear
- Predecible

### 7. Validación en Tiempo Real

**Mejorar formulario:**
```javascript
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');

emailInput.addEventListener('blur', () => {
    if (!emailInput.validity.valid) {
        emailError.textContent = 'Por favor ingresá un email válido';
        emailInput.classList.add('error');
    } else {
        emailError.textContent = '';
        emailInput.classList.remove('error');
    }
});

emailInput.addEventListener('input', () => {
    if (emailInput.validity.valid) {
        emailError.textContent = '';
        emailInput.classList.remove('error');
    }
});
```

### 8. Cargar Datos desde API Real

**Actual:** JSON estáticos

**Futuro:**
```javascript
async function cargarHospedajes(destino) {
    try {
        const response = await fetch(`https://api.furrytravels.com/hospedajes/${destino}`);
        const data = await response.json();
        return data.hospedajes;
    } catch (error) {
        console.error('Error cargando hospedajes:', error);
        // Mostrar mensaje al usuario
        mostrarError('No se pudieron cargar los datos. Intentá de nuevo.');
    }
}
```

### 9. Progressive Web App (PWA)

**Agregar Service Worker:**
```javascript
// service-worker.js
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('furry-travels-v1').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/css/global.css',
                '/css/index.css',
                '/script.js',
                '/img/logofinal.png'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
```

**Beneficios:**
- Funciona offline
- Más rápido (cache)
- Instalable en el home screen
- Push notifications

### 10. Testing

**Agregar tests:**
```javascript
// tests/carousel.test.js
describe('Carousel', () => {
    it('debería deshabilitar flecha izquierda al inicio', () => {
        const carousel = new Carousel('test-slider', 'prev', 'next');
        expect(carousel.prevBtn.disabled).toBe(true);
    });
    
    it('debería avanzar 300px al hacer click en next', () => {
        const carousel = new Carousel('test-slider', 'prev', 'next');
        const initialScroll = carousel.container.scrollLeft;
        carousel.next();
        expect(carousel.container.scrollLeft).toBe(initialScroll + 300);
    });
});
```

---

## 📚 CONCLUSIONES

### Puntos Fuertes del Proyecto

1. ✅ **Estructura clara y organizada**
2. ✅ **Diseño responsive (mobile-first)**
3. ✅ **Componentes interactivos funcionales**
4. ✅ **Separación de estilos por página**
5. ✅ **Validación de formularios**
6. ✅ **Accesibilidad básica**
7. ✅ **Código comentado y documentado**

### Áreas de Mejora Prioritarias

1. 🔧 **Modularizar JavaScript** (separar en archivos)
2. 🔧 **Optimizar imágenes** (WebP, lazy loading)
3. 🔧 **Mejorar accesibilidad** (ARIA, navegación por teclado)
4. 🔧 **Agregar loading states** (skeleton screens)
5. 🔧 **Implementar manejo de errores** (try-catch, mensajes al usuario)

### Tecnologías a Considerar para Escalabilidad

- **React/Vue**: Para aplicaciones más complejas
- **TypeScript**: Tipado estático, menos errores
- **Webpack/Vite**: Bundling y optimización
- **Jest/Vitest**: Testing automatizado
- **Tailwind CSS**: Estilos utility-first más rápidos

---

## 🎓 LECCIONES APRENDIDAS

### 1. El orden del CSS importa
```css
/* ❌ INCORRECTO */
.arrow:hover { background: orange; }
.arrow.disabled { background: gray; }
/* Hover sobreescribe disabled */

/* ✅ CORRECTO */
.arrow.disabled { background: gray; }
.arrow:not(.disabled):hover { background: orange; }
/* Hover solo cuando NO está disabled */
```

### 2. setTimeout es tu amigo en animaciones
```javascript
// ❌ No funciona
cardSlider.scrollBy({ left: 300, behavior: 'smooth' });
updateArrows(); // scrollLeft aún no cambió

// ✅ Funciona
cardSlider.scrollBy({ left: 300, behavior: 'smooth' });
setTimeout(updateArrows, 400); // Espera que termine la animación
```

### 3. Tolerancias en medidas exactas
```javascript
// ❌ Muy estricto
if (scrollLeft === maxScroll) { ... }

// ✅ Con tolerancia
if (scrollLeft >= maxScroll - 25) { ... }
```

### 4. Validar datos del usuario SIEMPRE
```php
// ❌ Peligroso
$nombre = $_POST['nombre'];

// ✅ Seguro
$nombre = filter_var($_POST['nombre'], FILTER_SANITIZE_STRING);
```

### 5. Mobile First es más fácil
```css
/* ✅ Más fácil: empieza simple, agrega complejidad */
.card { width: 100%; }
@media (min-width: 768px) { 
    .card { width: 50%; } 
}

/* ❌ Más difícil: empieza complejo, quita features */
.card { width: 33.33%; }
@media (max-width: 768px) { 
    .card { width: 100%; } 
}
```

---

## 📖 RECURSOS Y REFERENCIAS

### Documentación Oficial
- [MDN Web Docs](https://developer.mozilla.org/) - HTML, CSS, JavaScript
- [CSS-Tricks](https://css-tricks.com/) - Guías y tips de CSS
- [W3C Accessibility](https://www.w3.org/WAI/) - Estándares de accesibilidad
- [Can I Use](https://caniuse.com/) - Compatibilidad de navegadores

### Herramientas Útiles
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Auditoría de rendimiento
- [Wave](https://wave.webaim.org/) - Test de accesibilidad
- [JSON Formatter](https://jsonformatter.org/) - Validar y formatear JSON
- [CSS Gradient Generator](https://cssgradient.io/) - Crear gradientes
- [Color Contrast Checker](https://webaim.org/resources/contrastchecker/) - Verificar contraste

---

**Autor:** GitHub Copilot & Samanta Sukevicius  
**Última actualización:** Diciembre 2024  
**Versión:** 1.0

---

*Este manual fue creado como guía técnica para entender, mantener y mejorar el proyecto Furry Travels. Cualquier duda o sugerencia, consultar la documentación adicional en el repositorio.*
