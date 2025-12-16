# FURRY TRAVELS - Documentación de PHP

## Procesamiento de Formulario

### Archivos Relacionados

- **`procesar_formulario.php`**: Script PHP que procesa los datos del formulario
- **`contacto.html`**: Formulario que envía datos a `procesar_formulario.php`
- **`gracias.html`**: Página de confirmación a la que se redirige tras enviar

### Carpetas Generadas Automáticamente

El script crea automáticamente dos carpetas:

1. **`data/`**
   - `consultas.json`: Archivo JSON con todos los registros guardados
   - `consultas.txt`: Archivo de texto legible con resumen de consultas

2. **`uploads/`**
   - Fotos de mascotas subidas por usuarios
   - Nombradas como: `nombreusuario_timestamp.extension`

### Flujo del Formulario

```
1. Usuario completa formulario en contacto.html
   ↓
2. Envía POST a procesar_formulario.php
   ↓
3. Script valida datos
   ↓
4. Guarda foto en carpeta uploads/
   ↓
5. Registra datos en data/consultas.json y data/consultas.txt
   ↓
6. Redirige a gracias.html?id=IDCONSULTA
```

### Validaciones Implementadas

El script valida:

- ✅ Todos los campos requeridos completos
- ✅ Email válido (formato correcto)
- ✅ Al menos un servicio seleccionado
- ✅ Aceptación de términos y condiciones
- ✅ Tipo de archivo de imagen válido
- ✅ Solo acepta peticiones POST

### Seguridad

- **Sanitización**: `htmlspecialchars()` en todos los datos
- **Validación**: Todas las entradas se validan
- **Archivo upload**: Se verifica MIME type
- **Permisos**: Carpetas creadas con permisos 0755

### Estructura de Datos Guardados (JSON)

```json
{
  "id": "FT_1765500800xyz",
  "timestamp": "2025-12-15 14:30:00",
  "nombre": "Juan",
  "apellido": "Pérez",
  "usuario": "juanperez",
  "email": "juan@ejemplo.com",
  "sexo": "masculino",
  "tipo_mascota": "perro",
  "mensaje": "Consulta sobre destinos...",
  "foto_mascota": "juanperez_1765500800.jpg",
  "intereses": ["hospedaje", "excursiones"],
  "ip_cliente": "192.168.1.1"
}
```

### Características Implementadas

1. **Validación HTML5**: En el formulario
2. **Validación PHP**: En el servidor (recomendado)
3. **Almacenamiento JSON**: Fácil de leer y parsear
4. **Almacenamiento TXT**: Resumen legible para revisión rápida
5. **ID único**: Cada consulta tiene `id` único (FT_timestamp)
6. **Timestamp**: Registra fecha y hora exacta
7. **IP del cliente**: Registra IP para auditoría
8. **Upload de archivos**: Soporte para fotos de mascotas
9. **Email de confirmación**: Código HTML listo (comentado)

### Activar Envío de Emails

Para enviar emails de confirmación automáticos:

1. Descomentar línea en `procesar_formulario.php` (aprox. línea 160):
   ```php
   mail($email, $asunto, $cuerpo_html, $headers);
   ```

2. Requiere que el servidor tenga PHP Mail configurado

### Requisitos del Servidor

- PHP 7.4+ (o superior)
- Extensión de carga de archivos habilitada
- Permisos de escritura en carpeta raíz

### Testing Local

Para probar en local:

1. **Opción 1: XAMPP**
   - Coloca la carpeta en `htdocs`
   - Accede a `http://localhost/maquetado-desarrollo-web/contacto.html`

2. **Opción 2: PHP Built-in Server**
   ```bash
   cd maquetado-desarrollo-web
   php -S localhost:8000
   ```
   Luego accede a `http://localhost:8000/contacto.html`

### Ver Consultas Guardadas

**Opción 1: Archivo JSON** (`data/consultas.json`)
```bash
cat data/consultas.json
```

**Opción 2: Archivo TXT** (`data/consultas.txt`)
```bash
cat data/consultas.txt
```

**Opción 3: Visual Studio Code**
Abre directamente los archivos desde el explorador

### Notas Importantes

⚠️ **No es BASE DE DATOS**: Los datos se guardan en archivos JSON/TXT, no en BD.
- Suficiente para el trabajo práctico
- Ideal para pequeño volumen de datos
- Para producción, usar base de datos (MySQL, PostgreSQL, etc.)

⚠️ **Seguridad**: Este código es educativo. Para producción:
- Usar prepared statements si usas BD
- Validación más estricta
- HTTPS obligatorio
- Rate limiting

⚠️ **Emails**: El envío de emails depende de la configuración del servidor.
- En local puede no funcionar
- En hosting compartido generalmente funciona
- Descomentar solo cuando esté en servidor con soporte

### Troubleshooting

**Problema**: Permisos denegados al guardar
**Solución**: Dar permisos 777 a la carpeta raíz `chmod 777 .`

**Problema**: El archivo no se crea
**Solución**: Verificar que PHP tenga permisos de escritura

**Problema**: No se guardan los datos
**Solución**: Verificar `data/error_log.php` o `error_log` del servidor

---

**Autor**: Furry Travels
**Versión**: 1.0
**Última actualización**: Diciembre 2025
