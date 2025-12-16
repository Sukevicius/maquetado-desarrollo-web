@echo off
REM Iniciar servidor PHP local en localhost:8000
REM Doble click para ejecutar

echo ========================================
echo Iniciando servidor PHP Furry Travels
echo ========================================
echo.
echo Abre tu navegador en:
echo http://localhost:8000/contacto.html
echo.
echo Para detener: Presiona Ctrl + C
echo ========================================
echo.

cd /d "%~dp0"
C:\xampp\php\php.exe -S localhost:8000

pause
