// =======================================================
// 📦 DATOS DE DESTINOS - HOSPEDAJES PET FRIENDLY
// =======================================================
// Este archivo contiene todos los datos de destinos y hospedajes
// Se carga antes que script.js en el HTML

const DESTINOS_DATA = {
  bariloche: {
    nombre: "Bariloche, Argentina",
    imagen: '../img/bariloche.png',
    alt: 'Bariloche',
    descripcion: 'Destino patagónico rodeado de lagos y montañas.',
    hospedajes: [
      { 
        id: 'selina-bariloche',
        nombre: 'Selina Bariloche', 
        tipo: 'Hostel boutique',
        tipoAlojamiento: 'hotel',
        descripcion: 'Espacios pet friendly con ambiente joven y moderno. Perfecto para viajeros con mascotas que buscan comunidad.',
        imagen: '../img/bariloche.png',
        telefono: '+54 294 442-1234',
        email: 'reservas@selina-bariloche.com',
        direccion: 'Av. Bustillo Km 1.5, San Carlos de Bariloche',
        web: 'www.selina.com/bariloche',
        amenities: ['Área de juegos para mascotas', 'Comederos disponibles', 'Veterinario cercano', 'Senderos pet friendly']
      },
      { 
        id: 'hampton-bariloche',
        nombre: 'Hampton by Hilton Bariloche', 
        tipo: 'Hotel 4 estrellas',
        tipoAlojamiento: 'hotel',
        descripcion: 'Hotel de cadena internacional con políticas flexibles para mascotas de hasta 10kg.',
        imagen: '../img/bariloche.png',
        telefono: '+54 294 443-5678',
        email: 'info@hamptonbariloche.com.ar',
        direccion: 'Rolando 263, San Carlos de Bariloche',
        web: 'www.hilton.com/hampton-bariloche',
        amenities: ['Kit de bienvenida para mascotas', 'Camas para perros', 'Servicio de paseo', 'Menú especial para mascotas']
      },
      { 
        id: 'pailahue-lodge',
        nombre: 'Pailahue Lodge y Cabañas', 
        tipo: 'Cabañas',
        tipoAlojamiento: 'casa',
        descripcion: 'Cabañas rodeadas de naturaleza, ideales para que tu perro corra libremente.',
        imagen: '../img/bariloche.png',
        telefono: '+54 294 446-2020',
        email: 'reservas@pailahue.com',
        direccion: 'Av. Bustillo Km 7, San Carlos de Bariloche',
        web: 'www.pailahue.com',
        amenities: ['Jardín privado cercado', 'Lago privado', 'Sin restricción de tamaño', 'Fogones para asado']
      },
      { 
        id: 'depto-centro-bariloche',
        nombre: 'Departamento Centro Bariloche', 
        tipo: 'Departamento céntrico',
        tipoAlojamiento: 'departamento',
        descripcion: 'Departamento completamente equipado en el centro, ideal para familias con mascotas.',
        imagen: '../img/bariloche.png',
        telefono: '+54 294 445-3333',
        email: 'deptos@bariloche.com',
        direccion: 'Mitre 450, San Carlos de Bariloche',
        web: 'www.deptosbariloche.com',
        amenities: ['Cocina equipada', 'Balcón privado', 'Pet friendly', 'Cerca de paseos']
      },
      { 
        id: 'casa-lago-bariloche',
        nombre: 'Casa del Lago', 
        tipo: 'Casa con vista al lago',
        tipoAlojamiento: 'casa',
        descripcion: 'Hermosa casa frente al lago Nahuel Huapi, perfecta para vacaciones con mascotas.',
        imagen: '../img/bariloche.png',
        telefono: '+54 294 448-7777',
        email: 'casadellago@gmail.com',
        direccion: 'Av. Bustillo Km 12, San Carlos de Bariloche',
        web: 'www.casadellago.com.ar',
        amenities: ['Jardín grande', 'Acceso al lago', 'Parrilla', 'Sin restricciones de mascotas']
      }
    ]
  },
  sanmartin: {
    nombre: "San Martín de los Andes, Argentina",
    imagen: '../img/bariloche.png',
    alt: 'San Martín de los Andes',
    descripcion: 'Destino patagónico con lagos cristalinos y montañas. Ideal para mascotas.',
    hospedajes: [
      { 
        id: 'loi-suites-chapelco',
        nombre: 'Loi Suites Chapelco', 
        tipo: 'Resort 5 estrellas',
        tipoAlojamiento: 'hotel',
        descripcion: 'Resort de montaña con políticas pet friendly y acceso a senderos naturales.',
        imagen: '../img/bariloche.png',
        telefono: '+54 2972 427-000',
        email: 'chapelco@loisuites.com.ar',
        direccion: 'Ruta 234 Km 4, San Martín de los Andes',
        web: 'www.loisuites.com.ar',
        amenities: ['Jardines amplios', 'Senderos pet friendly', 'Veterinario on-call', 'Comederos disponibles']
      },
      { 
        id: 'cabanas-vegamaipu',
        nombre: 'Cabañas Vega Maipú', 
        tipo: 'Cabañas',
        tipoAlojamiento: 'casa',
        descripcion: 'Cabañas con jardín privado, perfectas para viajar con mascotas de cualquier tamaño.',
        imagen: '../img/bariloche.png',
        telefono: '+54 2972 428-100',
        email: 'info@vegamaipu.com',
        direccion: 'Av. Vega Maipú 850, San Martín de los Andes',
        web: 'www.vegamaipu.com',
        amenities: ['Jardín cercado', 'Sin límite de peso', 'Parrilla', 'Vista al lago']
      }
    ]
  },
  angostura: {
    nombre: "Villa La Angostura, Argentina",
    imagen: '../img/bariloche.png',
    alt: 'Villa La Angostura',
    descripcion: 'Pintoresco pueblo de montaña con bosques y lagos. Muy pet friendly.',
    hospedajes: [
      { 
        id: 'hosteria-angostura',
        nombre: 'Hostería Las Balsas', 
        tipo: 'Hostería boutique',
        tipoAlojamiento: 'hotel',
        descripcion: 'Hostería de lujo a orillas del lago Nahuel Huapi que acepta mascotas.',
        imagen: '../img/bariloche.png',
        telefono: '+54 2944 494-308',
        email: 'info@lasbalsas.com',
        direccion: 'Bahía Las Balsas, Villa La Angostura',
        web: 'www.lasbalsas.com',
        amenities: ['Playa privada', 'Senderos en bosque', 'Kit para mascotas', 'Restaurante gourmet']
      },
      { 
        id: 'cabanas-angostura',
        nombre: 'Cabañas Arrayanes', 
        tipo: 'Cabañas',
        tipoAlojamiento: 'casa',
        descripcion: 'Cabañas rodeadas de bosque nativo, ideales para mascotas aventureras.',
        imagen: '../img/bariloche.png',
        telefono: '+54 2944 495-200',
        email: 'arrayanes@cabanas.com',
        direccion: 'Los Arrayanes 120, Villa La Angostura',
        web: 'www.cabanasarrayanes.com',
        amenities: ['Bosque privado', 'Senderos marcados', 'Chimenea', 'Pet friendly sin cargo']
      }
    ]
  },
  elbolson: {
    nombre: "El Bolsón, Argentina",
    imagen: '../img/bariloche.png',
    alt: 'El Bolsón',
    descripcion: 'Valle rodeado de montañas, famoso por su feria artesanal y espíritu hippie.',
    hospedajes: [
      { 
        id: 'posada-ecologica',
        nombre: 'Posada Los Juncos', 
        tipo: 'Posada ecológica',
        tipoAlojamiento: 'hotel',
        descripcion: 'Posada con filosofía sustentable que ama a las mascotas.',
        imagen: '../img/bariloche.png',
        telefono: '+54 2944 492-550',
        email: 'losjuncos@posada.com',
        direccion: 'Av. Belgrano 1200, El Bolsón',
        web: 'www.posadalosjuncos.com',
        amenities: ['Huerta orgánica', 'Senderos naturales', 'Mascotas bienvenidas', 'Desayuno casero']
      },
      { 
        id: 'cabanas-rurales',
        nombre: 'Cabañas Ruca Hueney', 
        tipo: 'Cabañas rurales',
        tipoAlojamiento: 'casa',
        descripcion: 'Cabañas con amplio terreno, perfectas para que tu perro corra libre.',
        imagen: '../img/bariloche.png',
        telefono: '+54 2944 493-400',
        email: 'rucahueney@gmail.com',
        direccion: 'Ruta 40 Km 1880, El Bolsón',
        web: 'www.rucahueney.com.ar',
        amenities: ['3 hectáreas de terreno', 'Río cercano', 'Fogón', 'Sin restricciones']
      }
    ]
  },
  sanrafael: {
    nombre: "San Rafael, Mendoza, Argentina",
    imagen: '../img/bariloche.png',
    alt: 'San Rafael',
    descripcion: 'Oasis en el desierto con diques, ríos y bodegas. Ideal para paseos con mascotas.',
    hospedajes: [
      { 
        id: 'cabanas-vallegrande',
        nombre: 'Cabañas Valle Grande', 
        tipo: 'Cabañas',
        tipoAlojamiento: 'casa',
        descripcion: 'Cabañas cerca del dique con jardines amplios para mascotas.',
        imagen: '../img/bariloche.png',
        telefono: '+54 260 442-2100',
        email: 'vallegrande@cabanas.com',
        direccion: 'Valle Grande, San Rafael',
        web: 'www.cabanasvallegrandesanrafael.com',
        amenities: ['Jardín grande', 'Cerca del dique', 'Parrilla', 'Pet friendly']
      }
    ]
  },
  belgrano: {
    nombre: "Villa General Belgrano, Córdoba, Argentina",
    imagen: '../img/bariloche.png',
    alt: 'Villa General Belgrano',
    descripcion: 'Pueblo de montaña con arquitectura alemana. Muy tranquilo y pet friendly.',
    hospedajes: [
      { 
        id: 'posada-sauce',
        nombre: 'Posada del Sauce', 
        tipo: 'Posada boutique',
        tipoAlojamiento: 'hotel',
        descripcion: 'Posada familiar que recibe mascotas con mucho cariño.',
        imagen: '../img/bariloche.png',
        telefono: '+54 3546 463-200',
        email: 'posadadelsauce@vgb.com',
        direccion: 'Av. San Martín 500, Villa Gral. Belgrano',
        web: 'www.posadadelsauce.com',
        amenities: ['Jardín con sombra', 'Agua para mascotas', 'Cerca del centro', 'Desayuno casero']
      },
      { 
        id: 'cabanas-serranas',
        nombre: 'Cabañas Serranas VGB', 
        tipo: 'Cabañas',
        tipoAlojamiento: 'casa',
        descripcion: 'Cabañas en las sierras con terreno vallado.',
        imagen: '../img/bariloche.png',
        telefono: '+54 3546 464-100',
        email: 'serranas@vgb.com',
        direccion: 'Los Troncos 234, Villa Gral. Belgrano',
        web: 'www.cabanasserranasvgb.com',
        amenities: ['Terreno cercado', 'Vista a las sierras', 'Fogón', 'Pet friendly']
      }
    ]
  },
  tandil: {
    nombre: "Tandil, Buenos Aires, Argentina",
    imagen: '../img/bariloche.png',
    alt: 'Tandil',
    descripcion: 'Ciudad serrana con parques, sierras y ambiente tranquilo. Ideal para mascotas.',
    hospedajes: [
      { 
        id: 'mulen-hotel',
        nombre: 'Mulen Hotel Tandil', 
        tipo: 'Hotel 4 estrellas',
        tipoAlojamiento: 'hotel',
        descripcion: 'Hotel moderno con políticas pet friendly y cerca de parques.',
        imagen: '../img/bariloche.png',
        telefono: '+54 249 442-2000',
        email: 'reservas@mulenhotel.com',
        direccion: 'Av. España 750, Tandil',
        web: 'www.mulenhotel.com',
        amenities: ['Parque cercano', 'Kit para mascotas', 'Estacionamiento', 'Desayuno incluido']
      },
      { 
        id: 'cabanas-tandil',
        nombre: 'Cabañas Serranas Tandil', 
        tipo: 'Cabañas',
        tipoAlojamiento: 'casa',
        descripcion: 'Cabañas con vista a las sierras y jardín para mascotas.',
        imagen: '../img/bariloche.png',
        telefono: '+54 249 443-3000',
        email: 'serranas@tandil.com',
        direccion: 'Av. Don Bosco 1200, Tandil',
        web: 'www.cabanastanddil.com.ar',
        amenities: ['Jardín amplio', 'Vista panorámica', 'Parrilla', 'Sin límite de mascotas']
      }
    ]
  },
  mardlaspampas: {
    nombre: "Mar de las Pampas, Buenos Aires, Argentina",
    imagen: '../img/bariloche.png',
    alt: 'Mar de las Pampas',
    descripcion: 'Balneario rodeado de bosque con playas habilitadas para perros.',
    hospedajes: [
      { 
        id: 'cabanas-boutique',
        nombre: 'Cabañas Boutique Mar de las Pampas', 
        tipo: 'Cabañas boutique',
        tipoAlojamiento: 'casa',
        descripcion: 'Cabañas de diseño en el bosque, muy cerca de la playa canina.',
        imagen: '../img/bariloche.png',
        telefono: '+54 2255 479-200',
        email: 'boutique@mardlaspampas.com',
        direccion: 'Calle 7 entre 12 y 14, Mar de las Pampas',
        web: 'www.cabanasmdp.com',
        amenities: ['En el bosque', 'Playa canina a 5 min', 'Parrilla', 'Pet friendly sin cargo']
      },
      { 
        id: 'hotel-petfriendly',
        nombre: 'Hotel Pet Paradise', 
        tipo: 'Hotel boutique',
        tipoAlojamiento: 'hotel',
        descripcion: 'Hotel especializado en recibir familias con mascotas.',
        imagen: '../img/bariloche.png',
        telefono: '+54 2255 478-100',
        email: 'paradise@hotelpet.com',
        direccion: 'Av. 3 y Calle 10, Mar de las Pampas',
        web: 'www.petparadisehotel.com',
        amenities: ['Área de juegos canina', 'Piscina para perros', 'Veterinario', 'Servicio de paseo']
      }
    ]
  },
  sansebastian: {
    nombre: "San Sebastián, España",
    imagen: '../img/SanSebastian.png',
    alt: 'San Sebastián',
    descripcion: 'Ciudad costera vasca con playas y gastronomía.',
    hospedajes: [
      { 
        id: 'hotel-arbaso',
        nombre: 'Hotel Arbaso', 
        tipo: 'Boutique 4 estrellas',
        tipoAlojamiento: 'hotel',
        descripcion: 'Hotel boutique que acepta mascotas sin cargo extra. Ubicación privilegiada en el centro.',
        imagen: '../img/SanSebastian.png',
        telefono: '+34 943 42-0123',
        email: 'info@hotelarbaso.com',
        direccion: 'Calle Narrica 3, San Sebastián',
        web: 'www.hotelarbaso.com',
        amenities: ['Cama para mascotas', 'Platos y bebederos', 'Bolsas higiénicas', 'Mapa de rutas pet friendly']
      },
      { 
        id: 'pension-aldamar',
        nombre: 'Pensión Aldamar', 
        tipo: 'Pensión',
        tipoAlojamiento: 'hotel',
        descripcion: 'Alojamiento céntrico, económico y muy pet friendly. Ideal para viajes cortos.',
        imagen: '../img/SanSebastian.png',
        telefono: '+34 943 45-6789',
        email: 'aldamar@pension.es',
        direccion: 'Calle Mayor 22, San Sebastián',
        web: 'www.pensionaldamar.com',
        amenities: ['Mascotas bienvenidas gratis', 'Cerca de playas caninas', 'Terraza compartida', 'Desayuno incluido']
      },
      { 
        id: 'hotel-londres',
        nombre: 'Hotel de Londres y de Inglaterra', 
        tipo: 'Hotel histórico 5 estrellas',
        tipoAlojamiento: 'hotel',
        descripcion: 'Hotel emblemático frente a la playa de La Concha con políticas flexibles para mascotas.',
        imagen: '../img/SanSebastian.png',
        telefono: '+34 943 44-0770',
        email: 'reservas@hlondres.com',
        direccion: 'Zubieta 2, San Sebastián',
        web: 'www.hlondres.com',
        amenities: ['Servicio VIP para mascotas', 'Cama ortopédica', 'Snacks gourmet', 'Cuidador disponible']
      },
      { 
        id: 'depto-gros',
        nombre: 'Apartamento Gros Beach', 
        tipo: 'Departamento con vista al mar',
        tipoAlojamiento: 'departamento',
        descripcion: 'Moderno departamento cerca de la playa de Gros, perfecto para mascotas.',
        imagen: '../img/SanSebastian.png',
        telefono: '+34 943 46-1122',
        email: 'grosbeach@apartamentos.es',
        direccion: 'Calle Zabaleta 15, San Sebastián',
        web: 'www.grosbeach.com',
        amenities: ['Terraza privada', 'Cerca de playa canina', 'Cocina completa', 'WiFi gratis']
      },
      { 
        id: 'casa-monte',
        nombre: 'Casa Monte Igueldo', 
        tipo: 'Casa con jardín',
        tipoAlojamiento: 'casa',
        descripcion: 'Preciosa casa en las faldas del Monte Igueldo con jardín para mascotas.',
        imagen: '../img/SanSebastian.png',
        telefono: '+34 943 47-3344',
        email: 'casaigueldo@rentals.es',
        direccion: 'Paseo de Igueldo 42, San Sebastián',
        web: 'www.casaigueldo.com',
        amenities: ['Jardín vallado', 'Vistas panorámicas', 'Parking privado', 'BBQ disponible']
      }
    ]
  },
  portland: {
    nombre: "Portland, Oregón (EE.UU.)",
    imagen: '../img/portland-city.jpg',
    alt: 'Portland',
    descripcion: 'La ciudad más pet friendly de Estados Unidos.',
    hospedajes: [
      { 
        id: 'hotel-monaco',
        nombre: 'Hotel Monaco Portland', 
        tipo: 'Lujo 5 estrellas',
        tipoAlojamiento: 'hotel',
        descripcion: 'Amenities especiales para mascotas incluyendo servicio de spa y paseos guiados.',
        imagen: '../img/portland-city.jpg',
        telefono: '+1 503-222-0001',
        email: 'portland@monaco-hotel.com',
        direccion: '506 SW Washington St, Portland, OR',
        web: 'www.monaco-portland.com',
        amenities: ['Spa para mascotas', 'Room service para perros', 'Paseadores profesionales', 'Juguetes de cortesía']
      },
      { 
        id: 'the-nines',
        nombre: 'The Nines', 
        tipo: 'Boutique de lujo',
        tipoAlojamiento: 'hotel',
        descripcion: 'Hotel boutique que recibe perros de cualquier tamaño sin depósito adicional.',
        imagen: '../img/portland-city.jpg',
        telefono: '+1 503-222-9999',
        email: 'info@thenines.com',
        direccion: '525 SW Morrison St, Portland, OR',
        web: 'www.thenineshotel.com',
        amenities: ['Sin límite de peso', 'Camas memory foam', 'Treats orgánicos', 'Dog park cercano']
      },
      { 
        id: 'ace-hotel',
        nombre: 'Ace Hotel Portland', 
        tipo: 'Hotel hipster',
        tipoAlojamiento: 'hotel',
        descripcion: 'Hotel con onda indie muy amigable con mascotas. Ambiente relajado y artístico.',
        imagen: '../img/portland-city.jpg',
        telefono: '+1 503-228-2277',
        email: 'portland@acehotel.com',
        direccion: '1022 SW Stark St, Portland, OR',
        web: 'www.acehotel.com/portland',
        amenities: ['Perros en lobby', 'Bowl de agua gratis', 'Eventos pet friendly', 'Cafetería dog-friendly']
      },
      { 
        id: 'pearl-apartment',
        nombre: 'Pearl District Loft', 
        tipo: 'Loft moderno',
        tipoAlojamiento: 'departamento',
        descripcion: 'Amplio loft en el barrio artístico de Pearl, ideal para estadías con mascotas.',
        imagen: '../img/portland-city.jpg',
        telefono: '+1 503-225-4455',
        email: 'pearl@portlandlofts.com',
        direccion: '1100 NW Glisan St, Portland, OR',
        web: 'www.pearllofts.com',
        amenities: ['Espacio amplio', 'Dog park en el edificio', 'Cocina gourmet', 'Rooftop pet friendly']
      },
      { 
        id: 'hawthorne-house',
        nombre: 'Hawthorne Pet House', 
        tipo: 'Casa vintage',
        tipoAlojamiento: 'casa',
        descripcion: 'Encantadora casa en el bohemio barrio Hawthorne con patio para mascotas.',
        imagen: '../img/portland-city.jpg',
        telefono: '+1 503-226-7788',
        email: 'hawthorne@pethouses.com',
        direccion: '3456 SE Hawthorne Blvd, Portland, OR',
        web: 'www.hawthornehouse.com',
        amenities: ['Patio cercado', 'Cerca de parques', 'Chimenea', 'Bicicletas incluidas']
      }
    ]
  },
  garda: {
    nombre: "Lago di Garda, Italia",
    imagen: '../img/garda-italy.jpg',
    alt: 'Lago di Garda',
    descripcion: 'El lago más grande de Italia con pueblos pintorescos.',
    hospedajes: [
      { 
        id: 'lido-palace',
        nombre: 'Hotel Lido Palace', 
        tipo: 'Resort de lujo 5 estrellas',
        tipoAlojamiento: 'hotel',
        descripcion: 'Resort de lujo que acepta mascotas con servicio especial y vista al lago.',
        imagen: '../img/garda-italy.jpg',
        telefono: '+39 0464 021-899',
        email: 'info@lfrr.it',
        direccion: 'Viale Carducci 10, Riva del Garda',
        web: 'www.lfrr.it',
        amenities: ['Servicio de niñera para mascotas', 'Menú gourmet para perros', 'Jardín privado', 'Playa pet friendly']
      },
      { 
        id: 'lefay-resort',
        nombre: 'Lefay Resort & SPA', 
        tipo: 'Resort Spa 5 estrellas',
        tipoAlojamiento: 'hotel',
        descripcion: 'Resort con spa rodeado de naturaleza, ideal para viajar con perros.',
        imagen: '../img/garda-italy.jpg',
        telefono: '+39 0365 241-800',
        email: 'info@lefayresorts.com',
        direccion: 'Via Angelo Feltrinelli 136, Gargnano',
        web: 'www.lefayresorts.com',
        amenities: ['11 hectáreas de jardines', 'Senderos para caminatas', 'Veterinario on-call', 'Kit de bienvenida premium']
      },
      { 
        id: 'bella-riva',
        nombre: 'Hotel Bella Riva', 
        tipo: 'Hotel 4 estrellas',
        tipoAlojamiento: 'hotel',
        descripcion: 'Hotel con vista al lago y políticas muy flexibles para mascotas.',
        imagen: '../img/garda-italy.jpg',
        telefono: '+39 0365 520-012',
        email: 'bellariva@hotel.it',
        direccion: 'Piazza Calphurnia 9, Gardone Riviera',
        web: 'www.hotelbellariva.it',
        amenities: ['Terraza pet friendly', 'Piscina cercana', 'Botes admiten mascotas', 'Restaurante acepta perros']
      },
      { 
        id: 'appartamento-limone',
        nombre: 'Appartamento Limone', 
        tipo: 'Departamento frente al lago',
        tipoAlojamiento: 'departamento',
        descripcion: 'Hermoso departamento en Limone sul Garda con vista al lago y balcón.',
        imagen: '../img/garda-italy.jpg',
        telefono: '+39 0365 954-321',
        email: 'limone@appartamenti.it',
        direccion: 'Via IV Novembre 25, Limone sul Garda',
        web: 'www.appartamentolimone.it',
        amenities: ['Balcón con vista', 'A pasos del lago', 'Cocina italiana', 'Pet friendly sin cargo']
      },
      { 
        id: 'villa-sirmione',
        nombre: 'Villa Sirmione', 
        tipo: 'Villa con piscina',
        tipoAlojamiento: 'casa',
        descripcion: 'Espectacular villa en la península de Sirmione con piscina y jardín.',
        imagen: '../img/garda-italy.jpg',
        telefono: '+39 030 916-7890',
        email: 'villa@sirmione.it',
        direccion: 'Via Catullo 88, Sirmione',
        web: 'www.villasirmione.com',
        amenities: ['Piscina privada', 'Jardín de 2000m²', 'Acceso privado al lago', 'Chef disponible']
      }
    ]
  },
  colonia: {
    nombre: "Colonia del Sacramento, Uruguay",
    imagen: '../img/bariloche.png',
    alt: 'Colonia del Sacramento',
    descripcion: 'Ciudad histórica uruguaya a orillas del Río de la Plata. Muy pet friendly.',
    hospedajes: [
      { 
        id: 'charco-hotel',
        nombre: 'Charco Hotel', 
        tipo: 'Hotel boutique',
        tipoAlojamiento: 'hotel',
        descripcion: 'Hotel de diseño en el barrio histórico que acepta mascotas.',
        imagen: '../img/bariloche.png',
        telefono: '+598 4522-2554',
        email: 'info@charcohotel.com',
        direccion: 'San José 163, Colonia del Sacramento',
        web: 'www.charcohotel.com',
        amenities: ['Casco histórico', 'Patio interno', 'Kit para mascotas', 'Desayuno incluido']
      },
      { 
        id: 'posada-historica',
        nombre: 'Posada Plaza Mayor', 
        tipo: 'Posada histórica',
        tipoAlojamiento: 'hotel',
        descripcion: 'Posada colonial que recibe mascotas en el corazón del casco antiguo.',
        imagen: '../img/bariloche.png',
        telefono: '+598 4522-3193',
        email: 'plazamayor@colonia.com.uy',
        direccion: 'Del Comercio 111, Colonia del Sacramento',
        web: 'www.posadaplazamayor.com',
        amenities: ['Edificio histórico', 'Patio colonial', 'Pet friendly', 'WiFi gratis']
      }
    ]
  },
  florianopolis: {
    nombre: "Florianópolis, Brasil",
    imagen: '../img/bariloche.png',
    alt: 'Florianópolis',
    descripcion: 'Isla con más de 40 playas, varias habilitadas para perros. Muy pet friendly.',
    hospedajes: [
      { 
        id: 'hotel-boutique-floripa',
        nombre: 'Pousada dos Chás', 
        tipo: 'Hotel boutique',
        tipoAlojamiento: 'hotel',
        descripcion: 'Posada frente al mar que acepta mascotas de cualquier tamaño.',
        imagen: '../img/bariloche.png',
        telefono: '+55 48 3232-5000',
        email: 'pousadadoschas@floripa.com.br',
        direccion: 'Rua das Gaivotas 254, Lagoa da Conceição',
        web: 'www.pousadadoschas.com.br',
        amenities: ['Frente a la playa', 'Sin límite de peso', 'Playa canina cerca', 'Ducha para mascotas']
      },
      { 
        id: 'casa-floripa',
        nombre: 'Casa na Praia', 
        tipo: 'Casa de playa',
        tipoAlojamiento: 'casa',
        descripcion: 'Casa con jardín cerca de playa dog-friendly.',
        imagen: '../img/bariloche.png',
        telefono: '+55 48 3233-4000',
        email: 'casanapraia@floripa.com.br',
        direccion: 'Praia Mole, Florianópolis',
        web: 'www.casanapraiafloripa.com.br',
        amenities: ['Jardín cercado', 'A pasos de la playa', 'Parrilla', 'Ducha externa']
      }
    ]
  }
};
