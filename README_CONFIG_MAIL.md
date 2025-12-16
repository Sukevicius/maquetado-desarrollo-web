# ⚠️ CONFIG_MAIL.PHP - ARCHIVO DE CREDENCIALES

## IMPORTANTE: SEGURIDAD

Este archivo **NO se sube a GitHub** porque contiene credenciales sensibles.

Está configurado en `.gitignore` para que Git lo ignore automáticamente.

## ¿Por qué?

Si subes `config_mail.php` a GitHub:
- ❌ Cualquiera puede ver tu contraseña de Gmail
- ❌ Riesgo de que usen tu cuenta para spam
- ❌ Violación de seguridad básica

## ✅ Lo que ESTÁ protegido

```
config_mail.php → NO se sube a GitHub ✓
```

## Verificar que está protegido

```bash
git status
```

Si ves `config_mail.php` sin seguimiento = ✅ Está bien

Si ves `config_mail.php` en cambios = ⚠️ Problema

## Instrucciones para colaboradores

Si otra persona clona tu proyecto:

1. Verá que falta `config_mail.php`
2. Deberá crear su propio archivo con sus credenciales
3. El proyecto seguirá funcionando

## Crear config_mail.php en otra máquina

```php
<?php
define('MAIL_HOST', 'smtp.gmail.com');
define('MAIL_PORT', 587);
define('MAIL_USERNAME', 'tu_email@gmail.com');
define('MAIL_PASSWORD', 'tu_contraseña_aplicacion');
define('MAIL_FROM_EMAIL', 'tu_email@gmail.com');
define('MAIL_FROM_NAME', 'Tu Nombre');
?>
```

---

**Nunca compartas este archivo públicamente.**
