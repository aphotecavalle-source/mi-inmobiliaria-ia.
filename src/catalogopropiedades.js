// src/catalogopropiedades.js
export const catalogoPropiedades = {
  "bosque": {
    title: "Casa en el Bosque",
    location: "VALLE DE BRAVO",
    refId: "VDB-10524",
    agentName: "REBECA QUINTANILLA",
    agentPhone: "525512345678",
    precio: "$14,500,000 MXN",
    fotoPortada: "/fotospropiedades/caratula.JPEG",
    plantaImagen: "/fotospropiedades/planta.JPEG", // Tu nueva imagen
    detalles: {
      terreno: "1,200 m²",
      construccion: "450 m²",
      recamaras: "4",
      baños: "4.5",
      descripcion: "Residencia de lujo con acabados naturales y diseño de iluminación inteligente."
    },
    rooms: [
      { 
        id: 1, name: "Estancia Principal", 
        before: "/fotospropiedades/Estancia1A.JPEG", after: "/fotospropiedades/estanciab2.JPEG", video: "/fotospropiedades/estancia.mp4",
        posPlanta: { top: "20%", left: "20%", width: "15%", height: "15%" } // Coordenadas temporales
      },
      { 
        id: 2, name: "Recámara", 
        before: "/fotospropiedades/recamarab1.JPG", after: "/fotospropiedades/recamarab2.JPEG", video: "/fotospropiedades/recamara.mp4",
        posPlanta: { top: "20%", left: "40%", width: "15%", height: "15%" }
      },
      { 
        id: 3, name: "Terraza", 
        before: "/fotospropiedades/Terraza1.JPG", after: "/fotospropiedades/Terraza2.JPEG", video: "/fotospropiedades/terraza.mp4",
        posPlanta: { top: "20%", left: "60%", width: "15%", height: "15%" }
      },
      { 
        id: 4, name: "Exteriores", 
        before: "/fotospropiedades/exteriores1.JPEG", after: "/fotospropiedades/exteriores2.JPEG", video: "/fotospropiedades/estancia.mp4",
        posPlanta: { top: "50%", left: "20%", width: "15%", height: "15%" }
      },
      { 
        id: 5, name: "Cocina", 
        before: "/fotospropiedades/exteriores1.JPEG", after: "/fotospropiedades/exteriores2.JPEG", video: "/fotospropiedades/estancia.mp4",
        posPlanta: { top: "50%", left: "40%", width: "15%", height: "15%" }
      }
    ]
  },
  "rancho": {
    title: "Rancho Avándaro",
    // ... (puedes copiar la misma lógica si consigues plano para el rancho después)
    rooms: [
      { id: 1, name: "Sala Principal", before: "/fotospropiedades/Estancia1A.JPEG", after: "/fotospropiedades/estanciab2.JPEG", video: "/fotospropiedades/estancia.mp4" }
    ]
  }
};
