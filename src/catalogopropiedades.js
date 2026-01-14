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
    detalles: {
      terreno: "1,200 m²",
      construccion: "450 m²",
      recamaras: "4",
      baños: "4.5",
      descripcion: "Residencia de lujo con acabados naturales y diseño de iluminación inteligente."
    },
    rooms: [
      { id: 1, name: "Estancia Principal", before: "/fotospropiedades/Estancia1A.JPEG", after: "/fotospropiedades/estanciab2.JPEG", videoUrl: "/fotospropiedades/estancia.mp4" },
      { id: 2, name: "Recámara", before: "/fotospropiedades/recamarab1.JPG", after: "/fotospropiedades/recamarab2.JPEG", videoUrl: "/fotospropiedades/recamara.mp4" },
      { id: 3, name: "Terraza", before: "/fotospropiedades/Terraza1.JPG", after: "/fotospropiedades/Terraza2.JPEG", videoUrl: "/fotospropiedades/terraza.mp4" },
      { id: 4, name: "Exteriores", before: "/fotospropiedades/exteriores1.JPEG", after: "/fotospropiedades/exteriores2.JPEG", videoUrl: "/fotospropiedades/family.mp4" },
      { id: 5, name: "Cocina", before: "/fotospropiedades/exteriores1.JPEG", after: "/fotospropiedades/exteriores2.JPEG", videoUrl: "/fotospropiedades/family.mp4" }
    ]
  },
  "rancho": {
    title: "Rancho Avándaro",
    location: "AVÁNDARO",
    refId: "AV-9988",
    agentName: "MARIANA HAGERMAN",
    agentPhone: "525500000000",
    precio: "$22,000,000 MXN",
    fotoPortada: "/fotospropiedades/caratula.JPEG", 
    detalles: {
      terreno: "5,000 m²",
      construccion: "800 m²",
      recamaras: "6",
      baños: "6",
      descripcion: "Espectacular rancho con caballerizas y vistas al lago."
    },
    rooms: [
      { id: 1, name: "Sala Principal", before: "/fotospropiedades/Estancia1A.JPEG", after: "/fotospropiedades/estanciab2.JPEG", videoUrl: "/fotospropiedades/estancia.mp4" }
    ]
  }
};
