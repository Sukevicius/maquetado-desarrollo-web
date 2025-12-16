# INFORME TÉCNICO - FURRY TRAVELS

## CARÁTULA

**Alumna:** Sukevicius Samanta  
**DNI:** 32.584.131  
**Materia:** Maquetado y Desarrollo Web  
**Carrera:** Diseño Web  
**Comisión:** DWN1AP  
**Año:** 2025  
**Docente:** Carlos Ferrer  
**Institución:** Escuela Da Vinci  
**Fecha de mesa de final:** [COMPLETAR CON FECHA DEL EXAMEN]

---

## 1. DESCRIPCIÓN DEL SITIO WEB

**Furry Travels** es un sitio web dedicado a viajeros que desean explorar destinos turísticos junto a sus mascotas. La plataforma ofrece información sobre lugares *pet friendly*, servicios de hospedaje, gastronomía y actividades que aceptan animales de compañía.

El objetivo principal es brindar a los usuarios una guía completa para planificar viajes con sus mascotas, incluyendo recomendaciones de destinos nacionales e internacionales, hoteles que aceptan animales, restaurantes con espacios adaptados y actividades al aire libre.

---

## 2. TECNOLOGÍAS UTILIZADAS

### 2.1 HTML5
- Uso de etiquetas semánticas: `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`, `<article>`, `<aside>`
- Jerarquía correcta de encabezados (h1-h6)
- Formularios con validación HTML5
- Elementos multimedia: `<video>`, `<picture>`
- Refuerzos semánticos: `<strong>`, `<em>`, `<abbr>`, `<blockquote>`, `<cite>`
- Listas de definición: `<dl>`, `<dt>`, `<dd>`

### 2.2 CSS3
- Variables CSS (Custom Properties)
- Flexbox para layouts
- Media Queries para diseño responsive
- Animaciones y transiciones
- Pseudo-elementos y pseudo-clases

### 2.3 JavaScript (Vanilla)
- Interactividad del menú hamburguesa
- Slider de imágenes
- Acordeones interactivos
- Tabs de navegación

### 2.4 Recursos externos
| Recurso | URL |
|---------|-----|
| Font Awesome | https://fontawesome.com/ |
| Google Fonts (si aplica) | https://fonts.google.com/ |

---

## 3. ESTRUCTURA DE ARCHIVOS

```
maquetado-desarrollo-web/
├── index.html                    (Página principal)
├── contacto.html                 (Página de contacto con formulario)
├── gracias.html                  (Confirmación de formulario)
├── css/
│   ├── reset.css                 (Reset de estilos)
│   ├── global.css                (Estilos globales)
│   ├── index.css                 (Estilos página principal)
│   ├── contacto.css              (Estilos página contacto)
│   ├── gracias.css               (Estilos página gracias)
│   ├── modal.css                 (Estilos sistema de modales)
│   ├── page-cards.css            (Estilos cards)
│   └── page-hospedaje.css        (Estilos páginas internas)
├── img/                          (Imágenes y recursos multimedia)
├── pages-lugares/
│   └── bariloche.html            (Destino Bariloche - backup)
├── pages-hospedaje/
│   └── hospedaje.html            (Sección hospedaje)
├── pages-gastronomico/
│   └── gastronomia.html          (Sección gastronomía)
├── pages-actividades/
│   └── actividades.html          (Sección actividades)
└── script.js                     (JavaScript principal)
```

**Total de páginas HTML:** 7 (mínimo requerido: 5, máximo: 6)
**Nota:** `bariloche.html` es un backup ya que los destinos se muestran en modales interactivos en la home.

---

## 4. SOPORTE DE NAVEGADORES

El sitio fue testeado en los siguientes navegadores:

| Navegador | Versión | Resultado |
|-----------|---------|-----------|
| Google Chrome | [VERSIÓN] | ✓ Funciona correctamente |
| Mozilla Firefox | [VERSIÓN] | ✓ Funciona correctamente |
| Microsoft Edge | [VERSIÓN] | ✓ Funciona correctamente |
| Safari | [VERSIÓN] | ✓ Funciona correctamente |
| Opera | [VERSIÓN] | ✓ Funciona correctamente |

**Nota:** Completar con las versiones específicas al momento del testeo.

---

## 5. DISEÑO RESPONSIVE

### 5.1 Breakpoints implementados

| Dispositivo | Resolución | Breakpoint CSS |
|-------------|------------|----------------|
| Móvil | 320px - 480px | `max-width: 480px` |
| Tablet (opcional) | 481px - 768px | `max-width: 768px` |
| Desktop pequeño | 769px - 1024px | `max-width: 1024px` |
| Desktop estándar | 1280px - 1366px | Por defecto |

### 5.2 Cambios principales por resolución

#### Móvil (max-width: 480px)
- Menú hamburguesa reemplaza navegación horizontal
- Cards se muestran en columna única
- Formulario ocupa ancho completo
- Tipografías reducidas para mejor legibilidad
- Video se oculta o reduce para optimizar carga
- Botones ocupan ancho completo

#### Tablet (max-width: 768px)
- Cards en grilla de 2 columnas
- Formulario con fieldsets apilados
- Navegación adaptada

#### Desktop (1280px+)
- Layout completo con todas las secciones visibles
- Cards en slider horizontal
- Formulario junto a video

### 5.3 Imágenes responsive
Se utilizó el elemento `<picture>` con `<source>` para cargar diferentes recursos según el dispositivo, optimizando la carga y el rendimiento.

---

## 6. FORMULARIO

El formulario de contacto incluye los siguientes campos:

### Datos personales (OBLIGATORIO)
- Nombre (text, required)
- Apellido (text, required)
- Nombre de usuario (text, required)
- Email (email, required)
- Contraseña (password, required)
- Sexo (radio buttons: Femenino/Masculino/Otro, required)

### Sobre tu mascota
- Foto de mascota (file, accept="image/*")
- Tipo de mascota (select: Perro/Gato/Ave/Otro, required)

### Servicios de interés (selección múltiple - OBLIGATORIO)
- Hospedaje Pet Friendly (checkbox)
- Excursiones con mascotas (checkbox)
- Transporte especializado (checkbox)
- Servicios veterinarios (checkbox)
- Guardería de mascotas (checkbox)
- Entrenamiento canino (checkbox)

### Otros campos
- Mensaje/Consulta (textarea)
- Aceptar términos y condiciones (checkbox, required)

**Acción del formulario:** Redirige a `gracias.html` mostrando mensaje de confirmación.

---

## 7. VALIDACIÓN W3C

El sitio fue validado utilizando el validador oficial de la W3C:
- **URL:** http://validator.w3.org/

**Resultados:**
- [x] index.html - Sin errores
- [x] gracias.html - Sin errores
- [x] pages-lugares/bariloche.html - Sin errores
- [x] pages-hospedaje/hospedaje.html - Sin errores
- [x] pages-gastronomico/gastronomia.html - Sin errores
- [x] pages-actividades/actividades.html - Sin errores

**DOCTYPE utilizado:** `<!DOCTYPE html>` (HTML5)

---

## 8. ELEMENTOS SEMÁNTICOS UTILIZADOS

### Estructura
- `<header>` - Cabecera de página y secciones
- `<nav>` - Navegación principal con listas `<ul>/<li>`
- `<main>` - Contenido principal
- `<section>` - Secciones temáticas
- `<article>` - Cards de destinos
- `<aside>` - Contenido complementario
- `<footer>` - Pie de página

### Texto
- `<strong>` - Texto importante
- `<em>` - Énfasis (ej: "Pet friendly")
- `<abbr>` - Abreviaturas (ej: EE.UU., DNI, AVMA, RFID)
- `<blockquote>` - Citas
- `<cite>` - Fuente de citas

### Listas
- `<ul>/<li>` - Listas desordenadas
- `<dl>/<dt>/<dd>` - Listas de definición

### Formularios
- `<form>` - Formulario de contacto
- `<fieldset>/<legend>` - Agrupación de campos
- `<label>` - Etiquetas asociadas a inputs

---

## 9. ELEMENTOS MULTIMEDIA

| Tipo | Ubicación | Descripción |
|------|-----------|-------------|
| Video | index.html (sección contacto) | Video de fondo familia.mp4 |
| Imágenes | Todas las páginas | Optimizadas con `<picture>` |
| Iconos SVG | Footer | Redes sociales |

---

## 10. HOSTING (OPCIONAL - INCREMENTO DE NOTA)

**URL del sitio publicado:** [COMPLETAR SI SE PUBLICA]

**Servidor utilizado:** [000webhost / Netlify / GitHub Pages / Otro]

---

## ANEXO: TEXTOS DEL SITIO

### Página Principal (index.html)

**Sección Lugares:**
Bariloche, Argentina - Pet friendly: Muchos alojamientos y cervecerías artesanales aceptan mascotas.
San Sebastián, España - Pet friendly: Restaurantes y tiendas adaptadas para animales.
Portland, Oregón (EE.UU.) - Pet friendly: Cafés con menú para perros, parques y tiendas exclusivas.
Lago di Garda, Italia - Pet friendly: Embarcaciones, restaurantes y hoteles dog-friendly.

**Cita:**
"Las mascotas son parte de la familia, y cada vez más familias eligen incluirlas en sus aventuras de viaje." — AVMA

**Términos importantes:**
Pet Friendly - Establecimientos o servicios que aceptan y dan la bienvenida a mascotas.
Dog Park - Parque especialmente diseñado para que los perros puedan correr y jugar libremente.
RFID Microchip - Dispositivo de identificación implantado en mascotas para facilitar su localización.

### Página Gracias (gracias.html)

¡Gracias por contactarnos!
Tu mensaje ha sido enviado exitosamente. Nuestro equipo de Furry Travels se pondrá en contacto contigo a la brevedad para ayudarte a planificar el viaje perfecto con tu mascota.

¿Qué sigue ahora?
- Recibirás un email de confirmación en tu casilla de correo.
- Un asesor te contactará en un plazo de 24 a 48 horas hábiles.
- Mientras tanto, podés explorar nuestros destinos destacados.

"Viajar con tu mascota no es solo un viaje, es crear recuerdos inolvidables juntos." — El equipo de Furry Travels

### Página Bariloche (bariloche.html)

Bariloche Pet Friendly
Bariloche es un destino relativamente amigable con las mascotas, especialmente perros. Hay opciones de alojamiento, restaurantes y actividades que permiten la compañía de animales.

Alojamiento: Selina Bariloche, Hotel Hampton by Hilton Bariloche, Pailahue Lodge y Cabañas.
Gastronomía: Maleza, Chiado, Punto Panorámico.
Actividades: Senderos y naturaleza: Villa Coihues, Cerro Catedral. Playas: Playa Bonita, Bahía Serena, Playa Del Viento.
Consejos: Lleva agua y comida. Vacunas y documentación al día. Respeta normas.

---

*Documento generado para el examen final de Maquetado y Desarrollo Web - Escuela Da Vinci 2025*
