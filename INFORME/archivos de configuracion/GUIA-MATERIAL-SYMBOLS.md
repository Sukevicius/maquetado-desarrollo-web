# 📘 Guía: Cómo usar Material Symbols en tu proyecto

## 🎯 ¿Qué son Material Symbols?

Son iconos modernos de Google que se cargan como una fuente. Son más profesionales que los emojis y totalmente personalizables con CSS.

---

## 🚀 Paso 1: Agregar la fuente a tu HTML

En el `<head>` de cada página HTML, agregá este link:

```html
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet">
```

✅ **Ya está agregado en todas las páginas de este proyecto**

---

## 🎨 Paso 2: Configurar estilos en CSS

En tu archivo `global.css` (o donde tengas tus estilos globales), agregá:

```css
.material-symbols-outlined {
  font-family: 'Material Symbols Outlined';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
```

✅ **Ya está configurado en `css/global.css`**

---

## 📝 Paso 3: Usar iconos en tu HTML

### Sintaxis básica:

```html
<span class="material-symbols-outlined">nombre_del_icono</span>
```

### Ejemplos prácticos:

```html
<!-- Email -->
<span class="material-symbols-outlined">email</span>

<!-- Teléfono -->
<span class="material-symbols-outlined">phone</span>

<!-- Ubicación -->
<span class="material-symbols-outlined">location_on</span>

<!-- Calendario -->
<span class="material-symbols-outlined">calendar_month</span>

<!-- Mascotas -->
<span class="material-symbols-outlined">pets</span>

<!-- Casa -->
<span class="material-symbols-outlined">home</span>

<!-- Hotel -->
<span class="material-symbols-outlined">hotel</span>
```

---

## 🔍 Paso 4: Buscar iconos

**Página oficial:** https://fonts.google.com/icons

1. Entrá a la página
2. Asegurate que esté seleccionado **"Material Symbols"** (arriba)
3. Buscá el icono que necesitás
4. Hacé click en el icono
5. Copiá el nombre (ejemplo: `location_on`)
6. Usalo en tu HTML: `<span class="material-symbols-outlined">location_on</span>`

---

## 🎨 Personalización con CSS

### Cambiar tamaño:

```css
.material-symbols-outlined {
  font-size: 18px;  /* Chico */
  font-size: 24px;  /* Normal (default) */
  font-size: 36px;  /* Grande */
  font-size: 48px;  /* Muy grande */
}
```

O usá las clases predefinidas del proyecto:

```html
<span class="material-symbols-outlined md-18">home</span>  <!-- 18px -->
<span class="material-symbols-outlined md-24">home</span>  <!-- 24px -->
<span class="material-symbols-outlined md-36">home</span>  <!-- 36px -->
<span class="material-symbols-outlined md-48">home</span>  <!-- 48px -->
```

### Cambiar color:

```css
.material-symbols-outlined {
  color: #FF5722;  /* Color personalizado */
}
```

O usá las clases predefinidas:

```html
<span class="material-symbols-outlined md-primary">home</span>   <!-- Color primario -->
<span class="material-symbols-outlined md-accent">home</span>    <!-- Color acento -->
<span class="material-symbols-outlined md-white">home</span>     <!-- Blanco -->
```

### Estilo relleno (filled):

```html
<span class="material-symbols-outlined md-filled">favorite</span>
```

### Peso del trazo:

```html
<span class="material-symbols-outlined md-light">home</span>   <!-- Fino -->
<span class="material-symbols-outlined md-regular">home</span> <!-- Normal -->
<span class="material-symbols-outlined md-bold">home</span>    <!-- Grueso -->
```

---

## 💡 Ejemplos reales del proyecto

### En un botón:

```html
<button class="btn-primary">
  <span class="material-symbols-outlined">send</span>
  Enviar mensaje
</button>
```

### En un título:

```html
<h4>
  <span class="material-symbols-outlined">pets</span>
  Servicios Pet Friendly
</h4>
```

### En un label:

```html
<label for="destino">
  <span class="material-symbols-outlined">location_on</span>
  Destino:
</label>
```

### En una lista:

```html
<ul>
  <li><span class="material-symbols-outlined">email</span> Respuesta en menos de 24hs</li>
  <li><span class="material-symbols-outlined">pets</span> Asesoramiento personalizado</li>
</ul>
```

---

## ⚠️ Errores comunes

### ❌ Incorrecto:
```html
<!-- Nombre de icono mal escrito -->
<span class="material-symbols-outlined">emails</span>

<!-- Olvidarse la clase -->
<span>email</span>

<!-- Usar Material Icons (versión vieja) -->
<i class="material-icons">email</i>
```

### ✅ Correcto:
```html
<span class="material-symbols-outlined">email</span>
```

---

## 🔧 Troubleshooting

### No se ven los iconos:

1. **Verificá el link en el `<head>`:**
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet">
   ```

2. **Verificá el CSS en `global.css`:**
   ```css
   .material-symbols-outlined {
     font-family: 'Material Symbols Outlined';
     font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
   }
   ```

3. **Verificá que el nombre del icono sea correcto** (buscalo en https://fonts.google.com/icons)

4. **Limpiá la caché del navegador** (Ctrl + Shift + R o Ctrl + F5)

---

## 📦 Iconos más usados en este proyecto

| Icono | Nombre | Uso |
|-------|--------|-----|
| 📧 → <span class="material-symbols-outlined">email</span> | `email` | Contacto, correos |
| 📱 → <span class="material-symbols-outlined">phone</span> | `phone` | Teléfono |
| 📍 → <span class="material-symbols-outlined">location_on</span> | `location_on` | Ubicación, destino |
| 🏠 → <span class="material-symbols-outlined">home</span> | `home` | Casa, inicio |
| 🏨 → <span class="material-symbols-outlined">hotel</span> | `hotel` | Hoteles |
| 🐾 → <span class="material-symbols-outlined">pets</span> | `pets` | Mascotas, pet friendly |
| 📅 → <span class="material-symbols-outlined">calendar_month</span> | `calendar_month` | Fechas, temporada |
| 🕐 → <span class="material-symbols-outlined">schedule</span> | `schedule` | Horarios |
| ✈️ → <span class="material-symbols-outlined">flight</span> | `flight` | Viajes |
| 🛏️ → <span class="material-symbols-outlined">bed</span> | `bed` | Hospedaje, dormir |

---

## 🎓 Resumen rápido

1. **Agregá el link** en el `<head>` de tu HTML
2. **Copiá los estilos** en tu CSS global
3. **Buscá el icono** en https://fonts.google.com/icons
4. **Usalo así:** `<span class="material-symbols-outlined">nombre_icono</span>`
5. **Personalizá** con CSS o clases predefinidas

¡Listo! 🎉
