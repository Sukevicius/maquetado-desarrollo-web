# 📤 GUÍA PARA SUBIR A GITHUB

## ✅ Archivos nuevos creados

1. **`procesar_formulario.php`** - Script PHP para procesar formularios
2. **`DOCUMENTACION_PHP.md`** - Documentación técnica
3. **`.gitignore`** - Archivo para ignorar carpetas innecesarias

## 🚀 PASOS PARA SUBIR A GITHUB

### Paso 1: Abre PowerShell en la carpeta del proyecto

```powershell
cd "c:\Users\ssuke\Desktop\DISEÑO WEB - CARRERA\Maquetado y desarrollo\TRABAJO-PARCTICO-1\maquetado-desarrollo-web"
```

### Paso 2: Verifica el estado actual

```powershell
git status
```

Deberías ver:
- `procesar_formulario.php` (sin seguimiento)
- `DOCUMENTACION_PHP.md` (sin seguimiento)
- `.gitignore` (modificado/nuevo)
- `contacto.html` (modificado)

### Paso 3: Agrega todos los archivos

```powershell
git add .
```

### Paso 4: Crea el commit con mensaje descriptivo

```powershell
git commit -m "feat: Agregar procesamiento PHP de formulario con validación y almacenamiento JSON"
```

Otras opciones de mensajes:
```powershell
git commit -m "feat: Implementar PHP backend para formulario de contacto"
git commit -m "feat: Agregar procesar_formulario.php y documentación"
git commit -m "docs: Agregar documentación del sistema PHP"
```

### Paso 5: Sube a GitHub

```powershell
git push origin main
```

Si pide credenciales:
- **Usuario**: Tu usuario de GitHub
- **Contraseña**: Tu token de acceso personal (no contraseña)

## 📋 Verificación Final

Después de subir, verifica en GitHub:

1. Abre https://github.com/Sukevicius/maquetado-desarrollo-web
2. Deberías ver los archivos nuevos en la rama `main`
3. En el historial de commits debe aparecer el nuevo commit

## 🔍 Detalles de lo que se sube

**Archivos nuevos:**
- ✅ `procesar_formulario.php` - 310 líneas de código PHP
- ✅ `DOCUMENTACION_PHP.md` - Documentación completa
- ✅ `.gitignore` - Configuración de Git

**Archivos modificados:**
- ✅ `contacto.html` - Cambio de `action="gracias.html"` a `action="procesar_formulario.php"`

**Archivos ignorados (no se suben):**
- ❌ `data/` - Carpeta con consultas guardadas
- ❌ `uploads/` - Carpeta con fotos subidas
- ❌ `.DS_Store` - Archivos del sistema

## 💡 Tips

**Ver commits recientes:**
```powershell
git log --oneline -5
```

**Ver cambios sin confirmar:**
```powershell
git diff
```

**Deshacer un archivo (si no quieres subirlo):**
```powershell
git reset nombre_archivo.php
```

**Revertir el último commit (si cometiste error):**
```powershell
git reset --soft HEAD~1
```

## ✨ ¿Qué hace el PHP?

El archivo `procesar_formulario.php`:

1. **Recibe datos** del formulario de contacto.html
2. **Valida** que todos los campos sean correctos
3. **Guarda las fotos** en la carpeta `uploads/`
4. **Almacena consultas** en JSON y TXT
5. **Redirige** a `gracias.html` con ID único

**Resultado:** Todas las consultas se guardan automáticamente para que puedas verlas después.

## 📊 Estructura final del proyecto

```
maquetado-desarrollo-web/
├── index.html
├── contacto.html (MODIFICADO)
├── gracias.html
├── procesar_formulario.php (NUEVO)
├── DOCUMENTACION_PHP.md (NUEVO)
├── .gitignore (NUEVO)
├── script.js
├── css/
├── img/
├── pages-hospedaje/
├── pages-gastronomico/
├── pages-actividades/
└── data/ (se crea automáticamente)
    ├── consultas.json
    └── consultas.txt
```

---

## 🎯 SIGUIENTE PASO

Después de subir:

1. ✅ Verifica en GitHub que todo esté
2. ✅ Prueba el formulario en local (con XAMPP o PHP built-in)
3. ✅ Verifica que se guardaron datos en `data/consultas.json`
4. ✅ ¡Listo para entregar!

---

**¿Problemas?** Dime qué error ves en PowerShell y lo resolvemos.
