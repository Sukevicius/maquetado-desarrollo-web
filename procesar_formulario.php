<?php
/**
 * PROCESAR_FORMULARIO.PHP
 * Procesa los datos del formulario de contacto de Furry Travels
 * Valida, guarda y redirige a página de confirmación
 */

// Permitir solo POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: contacto.html');
    exit;
}

// ============================================
// PASO 1: RECIBIR Y SANITIZAR DATOS
// ============================================

$nombre = isset($_POST['nombre']) ? trim($_POST['nombre']) : '';
$apellido = isset($_POST['apellido']) ? trim($_POST['apellido']) : '';
$usuario = isset($_POST['usuario']) ? trim($_POST['usuario']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$clave = isset($_POST['clave']) ? trim($_POST['clave']) : '';
$sexo = isset($_POST['sexo']) ? trim($_POST['sexo']) : '';
$tipo_mascota = isset($_POST['tipo-mascota']) ? trim($_POST['tipo-mascota']) : '';
$mensaje = isset($_POST['mensaje']) ? trim($_POST['mensaje']) : '';
$intereses = isset($_POST['intereses']) ? $_POST['intereses'] : [];
$acepta = isset($_POST['acepta']) ? true : false;

// ============================================
// PASO 2: VALIDACIÓN BÁSICA
// ============================================

$errores = [];

// Validar campos requeridos
if (empty($nombre)) $errores[] = "El nombre es requerido";
if (empty($apellido)) $errores[] = "El apellido es requerido";
if (empty($usuario)) $errores[] = "El nombre de usuario es requerido";
if (empty($email)) $errores[] = "El email es requerido";
if (empty($clave)) $errores[] = "La contraseña es requerida";
if (empty($sexo)) $errores[] = "Debes seleccionar un sexo";
if (empty($tipo_mascota)) $errores[] = "Debes seleccionar un tipo de mascota";
if (!$acepta) $errores[] = "Debes aceptar los términos y condiciones";

// Validar email
if (!empty($email) && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errores[] = "El email no es válido";
}

// Validar que haya al menos un servicio seleccionado
if (empty($intereses)) {
    $errores[] = "Debes seleccionar al menos un servicio";
}

// Si hay errores, redirigir con mensaje
if (!empty($errores)) {
    $_SESSION['errores'] = $errores;
    header('Location: contacto.html');
    exit;
}

// ============================================
// PASO 3: PROCESAR ARCHIVO (foto de mascota)
// ============================================

$foto_mascota = '';
if (isset($_FILES['foto-mascota']) && $_FILES['foto-mascota']['error'] === UPLOAD_ERR_OK) {
    $archivo_tmp = $_FILES['foto-mascota']['tmp_name'];
    $nombre_archivo = $_FILES['foto-mascota']['name'];
    $tipo_archivo = mime_content_type($archivo_tmp);
    
    // Validar que sea imagen
    $tipos_permitidos = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (in_array($tipo_archivo, $tipos_permitidos)) {
        // Crear carpeta si no existe
        if (!is_dir('uploads')) {
            mkdir('uploads', 0755, true);
        }
        
        // Generar nombre único
        $extension = pathinfo($nombre_archivo, PATHINFO_EXTENSION);
        $nombre_unico = $usuario . '_' . time() . '.' . $extension;
        $ruta_destino = 'uploads/' . $nombre_unico;
        
        if (move_uploaded_file($archivo_tmp, $ruta_destino)) {
            $foto_mascota = $nombre_unico;
        }
    }
}

// ============================================
// PASO 4: PREPARAR DATOS PARA GUARDAR
// ============================================

$datos_formulario = [
    'id' => uniqid('FT_'),
    'timestamp' => date('Y-m-d H:i:s'),
    'nombre' => htmlspecialchars($nombre),
    'apellido' => htmlspecialchars($apellido),
    'usuario' => htmlspecialchars($usuario),
    'email' => htmlspecialchars($email),
    'sexo' => htmlspecialchars($sexo),
    'tipo_mascota' => htmlspecialchars($tipo_mascota),
    'mensaje' => htmlspecialchars($mensaje),
    'foto_mascota' => $foto_mascota,
    'intereses' => array_map('htmlspecialchars', $intereses),
    'ip_cliente' => $_SERVER['REMOTE_ADDR'] ?? 'desconocida'
];

// ============================================
// PASO 5: GUARDAR EN ARCHIVO JSON
// ============================================

$archivo_datos = 'data/consultas.json';

// Crear carpeta data si no existe
if (!is_dir('data')) {
    mkdir('data', 0755, true);
}

// Leer consultas existentes
$consultas = [];
if (file_exists($archivo_datos)) {
    $contenido = file_get_contents($archivo_datos);
    if (!empty($contenido)) {
        $consultas = json_decode($contenido, true) ?? [];
    }
}

// Agregar nueva consulta
$consultas[] = $datos_formulario;

// Guardar en archivo
if (file_put_contents($archivo_datos, json_encode($consultas, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE))) {
    // Guardar también un registro en text para fácil lectura
    guardar_registro_texto($datos_formulario);
} else {
    // Si hay error, igualmente redirigir pero con advertencia en log
    error_log("Error al guardar consulta de: " . $email);
}

// ============================================
// PASO 6: ENVIAR EMAIL DE CONFIRMACIÓN (Opcional)
// ============================================

$asunto = "Confirmación de consulta - Furry Travels";
$cuerpo_html = "
<html>
<head>
    <meta charset='UTF-8'>
    <style>
        body { font-family: Arial, sans-serif; color: #333; }
        .container { max-width: 600px; margin: 0 auto; }
        .header { background-color: #F35B31; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
        .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
        .footer { background-color: #f0f0f0; padding: 10px; text-align: center; font-size: 12px; border-radius: 0 0 5px 5px; }
        .info-item { margin: 10px 0; }
        .label { font-weight: bold; color: #1E5AA8; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h1>¡Gracias por contactarnos!</h1>
        </div>
        <div class='content'>
            <p>Hola <strong>{$nombre}</strong>,</p>
            <p>Tu consulta ha sido recibida exitosamente. Nuestro equipo de <em>Furry Travels</em> se pondrá en contacto contigo a la brevedad.</p>
            
            <h3>Resumen de tu consulta:</h3>
            <div class='info-item'>
                <span class='label'>Usuario:</span> {$usuario}
            </div>
            <div class='info-item'>
                <span class='label'>Email:</span> {$email}
            </div>
            <div class='info-item'>
                <span class='label'>Tipo de mascota:</span> {$tipo_mascota}
            </div>
            <div class='info-item'>
                <span class='label'>Servicios de interés:</span> " . implode(', ', $intereses) . "
            </div>
            <div class='info-item'>
                <span class='label'>Consulta:</span> {$mensaje}
            </div>
            
            <p style='margin-top: 20px; color: #666;'>
                <strong>Información importante:</strong> No responderemos a este email. 
                Nos comunicaremos contigo a través del número de teléfono o email que proporcionaste.
            </p>
        </div>
        <div class='footer'>
            <p>Furry Travels © 2025 - Viajá con tu mascota</p>
        </div>
    </div>
</body>
</html>
";

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type: text/html; charset=UTF-8" . "\r\n";
$headers .= "From: noreply@furrytravels.com" . "\r\n";

// Descomentar para activar envío de emails (requiere servidor configurado)
// mail($email, $asunto, $cuerpo_html, $headers);

// ============================================
// PASO 7: GUARDAR REGISTRO EN TEXTO (para fácil lectura)
// ============================================

function guardar_registro_texto($datos) {
    $archivo_log = 'data/consultas.txt';
    
    if (!is_dir('data')) {
        mkdir('data', 0755, true);
    }
    
    $registro = "\n" . str_repeat("=", 80) . "\n";
    $registro .= "CONSULTA ID: " . $datos['id'] . "\n";
    $registro .= "Fecha: " . $datos['timestamp'] . "\n";
    $registro .= "IP Cliente: " . $datos['ip_cliente'] . "\n";
    $registro .= str_repeat("-", 80) . "\n";
    $registro .= "DATOS PERSONALES\n";
    $registro .= "Nombre: " . $datos['nombre'] . " " . $datos['apellido'] . "\n";
    $registro .= "Usuario: " . $datos['usuario'] . "\n";
    $registro .= "Email: " . $datos['email'] . "\n";
    $registro .= "Sexo: " . $datos['sexo'] . "\n";
    $registro .= str_repeat("-", 80) . "\n";
    $registro .= "INFORMACIÓN DE MASCOTA\n";
    $registro .= "Tipo: " . $datos['tipo_mascota'] . "\n";
    if (!empty($datos['foto_mascota'])) {
        $registro .= "Foto: uploads/" . $datos['foto_mascota'] . "\n";
    }
    $registro .= str_repeat("-", 80) . "\n";
    $registro .= "SERVICIOS DE INTERÉS\n";
    $registro .= implode("\n", array_map(function($s) { return "• " . $s; }, $datos['intereses'])) . "\n";
    $registro .= str_repeat("-", 80) . "\n";
    $registro .= "MENSAJE\n";
    $registro .= $datos['mensaje'] . "\n";
    $registro .= str_repeat("=", 80) . "\n";
    
    file_put_contents($archivo_log, $registro, FILE_APPEND);
}

// ============================================
// PASO 8: REDIRIGIR A PÁGINA DE CONFIRMACIÓN
// ============================================

// Pasar datos a la página de gracias si es necesario
$_SESSION['consulta_exitosa'] = true;
$_SESSION['nombre_usuario'] = $nombre;
$_SESSION['email_usuario'] = $email;

header('Location: gracias.html?id=' . $datos_formulario['id']);
exit;
?>
