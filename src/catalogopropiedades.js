// src/catalogopropiedades.js
export const catalogoPropiedades = {
  
  "bosque": {
    title: "Casa en el Bosque",
    location: "VALLE DE BRAVO",
    refId: "VDB-10524",
    agentName: "REBECA QUINTANILLA",
    agentPhone: "525512345678", // Pon aquí el cel del agente (solo números)
    precio: "$14,500,000 MXN",
    // COPIA Y PEGA EL LINK DE GOOGLE MAPS AQUÍ:
    googleMapsLink: "https://www.google.com/maps/@19.1897,-100.1264,303m/data=!3m1!1e3", 
    fotoPortada: "/fotospropiedades/caratula.JPEG",
    plantaImagen: "/fotospropiedades/planta.JPEG",
    detalles: {
      terreno: "1,200 m²",
      construccion: "450 m²",
      recamaras: "4",
      baños: "4.5",
      descripcion: "Residencia de lujo con acabados naturales y diseño de iluminación inteligente."
    },
    rooms: [
      { 
        id: 1, 
        name: "Estancia Principal", 
        before: "/fotospropiedades/Estancia1A.JPEG", 
        after: "/fotospropiedades/estanciab2.JPEG", 
        video: "/fotospropiedades/estancia.mp4",
        posPlanta: { top: "25.5%", left: "49.4%", width: "10%", height: "10%" } 
      },
      { 
        id: 2, 
        name: "Recámara", 
        before: "/fotospropiedades/recamarab1.JPG", 
        after: "/fotospropiedades/recamarab2.JPEG", 
        video: "/fotospropiedades/recamara.mp4",
        posPlanta: { top: "58.2%", left: "22.1%", width: "10%", height: "10%" }
      },
      { 
        id: 3, 
        name: "Terraza", 
        before: "/fotospropiedades/Terraza1.JPG", 
        after: "/fotospropiedades/Terraza2.JPEG", 
        video: "/fotospropiedades/terraza.mp4",
        posPlanta: { top: "29.8%", left: "11.1%", width: "10%", height: "10%" }
      },
      { 
        id: 4, 
        name: "Exteriores", 
        before: "/fotospropiedades/exteriores1.JPEG", 
        after: "/fotospropiedades/exteriores2.JPEG", 
        video: "/fotospropiedades/estancia.mp4",
        posPlanta: { top: "8.4%", left: "47.1%", width: "12%", height: "12%" }
      },
      { 
        id: 5, 
        name: "Cocina", 
        before: "/fotospropiedades/exteriores1.JPEG", 
        after: "/fotospropiedades/exteriores2.JPEG", 
        video: "/fotospropiedades/estancia.mp4",
        posPlanta: { top: "47.4%", left: "34.6%", width: "10%", height: "10%" }
      }
    ]
  },

  "rancho": {
    title: "Rancho Avándaro",
    location: "AVÁNDARO",
    refId: "AV-9988",
    agentName: "MARIANA HAGERMAN",
    agentPhone: "525500000000",
    precio: "$22,000,000 MXN",
    googleMapsLink: "", 
    fotoPortada: "/fotospropiedades/caratula.JPEG", 
    plantaImagen: "/fotospropiedades/planta.JPEG", 
    detalles: {
      terreno: "5,000 m²",
      construccion: "800 m²",
      recamaras: "6",
      baños: "6",
      descripcion: "Espectacular rancho con caballerizas y vistas al lago."
    },
    rooms: [
      { 
        id: 1, 
        name: "Sala Principal", 
        before: "/fotospropiedades/Estancia1A.JPEG", 
        after: "/fotospropiedades/estanciab2.JPEG", 
        video: "/fotospropiedades/estancia.mp4",
        posPlanta: { top: "50%", left: "50%", width: "15%", height: "15%" }
      }
    ]
  }
};
