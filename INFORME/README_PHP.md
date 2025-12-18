# 🚀 GUÍA DE PHP - FURRY TRAVELS

## ¿Cómo funciona el sistema PHP?

Tu sitio web tiene un formulario que procesa datos y envía emails automáticamente. Aquí te explico cómo hacerlo funcionar.

---

## 📋 REQUISITOS

- ✅ XAMPP instalado (con PHP incluido)
- ✅ La carpeta `maquetado-desarrollo-web` en tu compu
- ✅ El archivo `config_mail.php` con tus credenciales

---

## 🎯 PASO 1: LEVANTAR EL SERVIDOR PHP

### Opción A: PowerShell (Recomendado)

1. **Abre PowerShell**
2. **Navega a tu carpeta:**
   ```powershell
   cd "c:\Users\ssuke\Desktop\DISEÑO WEB - CARRERA\Maquetado y desarrollo\TRABAJO-PARCTICO-1\maquetado-desarrollo-web"
   ```

3. **Levanta el servidor:**
   ```powershell
   C:\xampp\php\php.exe -S localhost:8000
   ```

4. **Deberías ver:**
   ```
   PHP 8.2.12 Development Server (http://localhost:8000) started
   ```

5. **NO cierres esta ventana** - el servidor sigue corriendo

### Opción B: Hacer un script ejecutable (para no escribir cada vez)

1. Crea un archivo llamado `iniciar_servidor.bat` en la carpeta del proyecto

2. Copia esto dentro:
   ```batch
   @echo off
   cd /d "%~dp0"
   C:\xampp\php\php.exe -S localhost:8000
   pause
   ```

3. Guarda y cierra

4. **Próximas veces:** solo haz doble click en `iniciar_servidor.bat` ✅

---

## 🌐 PASO 2: ACCEDER AL SITIO

Una vez que el servidor está levantado, abre tu navegador:

**http://localhost:8000/contacto.html**

✅ Deberías ver el formulario funcionando

---

## 📝 PASO 3: PROBAR EL FORMULARIO

1. **Llena el formulario:**
   - Nombre, apellido, usuario
   - Email (importante para recibir confirmación)
   - Selecciona sexo, tipo de mascota, servicios
   - Sube una foto (jpg, png, gif, webp)
   - Escribe un mensaje

2. **Click en "Enviar consulta"**

3. **Deberías ver:**
   - ✅ Se redirige a `gracias.html`
   - ✅ En tu email recibes confirmación automática
   - ✅ Los datos se guardan en `data/consultas.json`

---

## 📊 ¿DÓNDE SE GUARDAN LOS DATOS?

### Archivo 1: `data/consultas.json`
- Formato: JSON (fácil de leer por máquinas)
- Contiene todos los registros
- Abrelo con VS Code o cualquier editor

**Ruta:** `data/consultas.json`

**Contenido:**
```json
[
  {
    "id": "FT_6940b3c4afbcc",
    "timestamp": "2025-12-16 02:20:04",
    "nombre": "samanta",
    "email": "samanta.sukevicius@davinci.edu.ar",
    "tipo_mascota": "perro",
    "foto_mascota": "ssukevicius_1765848004.png",
    "intereses": ["hospedaje", "excursiones"]
  }
]
```

### Archivo 2: `data/consultas.txt`
- Formato: Texto legible
- Resumen bonito para lectura rápida
- Actualizado cada vez que se envía una consulta

**Ruta:** `data/consultas.txt`

### Carpeta: `uploads/`
- Fotos de mascotas subidas
- Nombradas: `usuario_timestamp.extension`
- Ejemplo: `ssukevicius_1765848004.png`

**Ruta:** `uploads/`

---

## 📧 EMAILS AUTOMÁTICOS

Cuando alguien llena el formulario:

1. ✅ Se validan todos los datos
2. ✅ Se guarda la foto en `uploads/`
3. ✅ Se registra todo en `data/consultas.json`
4. ✅ **Se envía un EMAIL bonito** al usuario

### Archivos relacionados:

- `procesar_formulario.php` - Procesa el formulario
- `config_mail.php` - Tus credenciales (NO subir a GitHub)
- `contacto.html` - El formulario

---

## 🔧 ARCHIVO: `procesar_formulario.php`

Este es el "corazón" del sistema. Hace:

### 1. Recibe datos del formulario
```php
$nombre = $_POST['nombre'];
$email = $_POST['email'];
// ... etc
```

### 2. Valida que todo esté correcto
```php
if (empty($nombre)) $errores[] = "El nombre es requerido";
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errores[] = "Email no válido";
}
```

### 3. Guarda la foto
```php
move_uploaded_file($archivo_tmp, 'uploads/' . $nombre_unico);
```

### 4. Registra en JSON
```php
$consultas[] = $datos_formulario;
file_put_contents('data/consultas.json', json_encode($consultas));
```

### 5. Envía email
```php
enviar_email_confirmacion($email, $nombre, ...);
```

### 6. Redirige a gracias.html
```php
header('Location: gracias.html?id=' . $id);
```

---

## ⚙️ ARCHIVO: `config_mail.php`

Contiene tus credenciales de Gmail:

```php
define('MAIL_USERNAME', 'samanta.sukevicius@davinci.edu.ar');
define('MAIL_PASSWORD', 'Trex2026');
```

**⚠️ IMPORTANTE:**
- ❌ NO subir a GitHub
- ❌ NO compartir públicamente
- ✅ Está en `.gitignore` (protegido)
- ✅ Solo en tu máquina

---

## 🐛 TROUBLESHOOTING

### Problema: "No se puede acceder a localhost:8000"
**Solución:** 
- Verifica que el servidor PHP está levantado
- No cierres la terminal del servidor

### Problema: "Error 404"
**Solución:**
- Asegúrate de escribir bien: `localhost:8000/contacto.html`

### Problema: "No se guardan los datos"
**Solución:**
- Verifica que exista la carpeta `data/`
- Dale permisos: `chmod 777 data/`

### Problema: "No se envía el email"
**Solución:**
- Verifica que `config_mail.php` esté en la raíz
- Confirma credenciales de Gmail correctas
- Gmail debe tener "Acceso de aplicaciones menos seguras" habilitado

### Problema: "Foto no se sube"
**Solución:**
- Verifica que la carpeta `uploads/` exista
- Dale permisos: `chmod 777 uploads/`
- Archivo debe ser JPG, PNG, GIF o WebP

---

## 📱 FLUJO COMPLETO

```
Usuario abre contacto.html
    ↓
Llena el formulario
    ↓
Click en "Enviar consulta"
    ↓
POST a procesar_formulario.php
    ↓
PHP valida datos
    ↓
Guarda foto en uploads/
    ↓
Registra en data/consultas.json
    ↓
Envía email de confirmación
    ↓
Redirige a gracias.html?id=...
    ↓
Usuario ve página de agradecimiento
```

---

## 🎓 PARA APRENDER MÁS

### ¿Qué es PHP?
- Lenguaje de programación **del lado del servidor**
- Se ejecuta en la compu (no en el navegador)
- Ideal para procesar formularios, bases de datos, emails

### ¿Qué es un servidor local?
- Tu compu actuando como servidor web
- `localhost:8000` = tu máquina en puerto 8000
- Útil para testing antes de subir a internet

### ¿Qué es JSON?
- Formato de datos legible
- Fácil de parsear y guardar
- Usado en casi todos lados

---

## 📋 CHECKLIST

- ✅ XAMPP instalado
- ✅ Carpeta del proyecto lista
- ✅ `config_mail.php` con credenciales
- ✅ Servidor PHP levantado
- ✅ Puedo acceder a `localhost:8000/contacto.html`
- ✅ Formulario funciona
- ✅ Datos se guardan en `data/`
- ✅ Email se envía

---

## 🚀 RESUMEN RÁPIDO

**Para usar el sitio:**

1. Abre PowerShell
2. `cd "ruta\maquetado-desarrollo-web"`
3. `C:\xampp\php\php.exe -S localhost:8000`
4. Abre `http://localhost:8000/contacto.html`
5. ¡Listo!

---

**¿Preguntas?** Revisa este README o los archivos comentados en el código.

*Última actualización: Diciembre 2025*
