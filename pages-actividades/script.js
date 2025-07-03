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
  // 🐾 TABS DE MEJOR ÉPOCA PARA VIAJAR
  // =======================================================
  const tabs = document.querySelectorAll('.tabs-epoca .tab');
  const epocaImagen = document.getElementById('epocaImagen');
  const epocaLista = document.getElementById('epocaLista');

  // Datos de cada destino
  const destinos = {
    buenosaires: {
      imagen: '../img/buenosaires.jpg',
      alt: 'Buenos Aires',
      lista: [
        'Junio: Clima templado y menos turistas.',
        'Julio: Temporada alta, muchas actividades.',
        'Agosto: Ideal para paseos con tu mascota.'
      ]
    },
    bariloche: {
      imagen: '../img/bariloche.jpg',
      alt: 'Bariloche',
      lista: [
        'Junio: Frío moderado y paisajes nevados.',
        'Julio: Temporada de ski y excursiones.',
        'Agosto: Clima frío, excelente para trekking con tu mascota.'
      ]
    },
    mardelplata: {
      imagen: '../img/mardelplata.jpg',
      alt: 'Mar del Plata',
      lista: [
        'Junio: Playas tranquilas.',
        'Julio: Actividad moderada, precios accesibles.',
        'Agosto: Clima fresco, paseos costeros con tu mascota.'
      ]
    }
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Quitar active de todos
      tabs.forEach(t => t.classList.remove('active'));

      // Activar el clickeado
      tab.classList.add('active');

      // Obtener el destino seleccionado
      const destino = tab.dataset.destino;
      const data = destinos[destino];

      // Cambiar la imagen
      epocaImagen.src = data.imagen;
      epocaImagen.alt = data.alt;

      // Cambiar la lista
      epocaLista.innerHTML = '';
      data.lista.forEach(item => {
        const partes = item.split(':');
        const li = document.createElement('li');
        li.innerHTML = `<strong>${partes[0]}:</strong>${partes[1]}`;
        epocaLista.appendChild(li);
      });
    });
  });
});
