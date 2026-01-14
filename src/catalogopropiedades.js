// ! ************************************************************
// ! CATALOGO DE PROPIEDADES - AQUÍ ES DONDE AGREGAS TUS CASAS
// ! ************************************************************

export const catalogoPropiedades = {
  
  // LLAVE: Este es el nombre que irá en el link (ej: ?id=bosque)
  "bosque": {
    title: "Casa en el Bosque",
    location: "Valle de Bravo, México",
    refId: "VDB-10524",
    precio: "$14,500,000 MXN",
    fotoPortada: "/fotopropiedades/caratula.JPEG",
    agentName: "REBECA QUINTANILLA",
    agentPhone: "525512345678",
    // ! ************************************************************
    // ! FOTOS DE LAS HABITACIONES DE ESTA CASA
    // ! ************************************************************
    rooms: [
      { id: 1, name: "Estancia Principal", before: "/fotospropiedades/Estancia1A.JPEG", after: "/fotospropiedades/estanciab2.JPEG", videoUrl: "/fotospropiedades/estancia.mp4" },
      { id: 2, name: "Recámara", before: "/fotospropiedades/recamarab1.JPG", after: "/fotospropiedades/recamarab2.JPEG", videoUrl: "/fotopropiedades/recamara.mp4" },
      // Puedes seguir agregando más habitaciones aquí...
    ]
  },

  // ! ************************************************************
  // ! PARA UNA SEGUNDA CASA, COPIAS DESDE AQUÍ:
  // ! ************************************************************
  "rancho": {
    title: "Rancho Avándaro",
    location: "Avándaro, México",
    refId: "VDB-9988",
    precio: "$22,000,000 MXN",
    fotoPortada: "/fotorancho/caratula.JPEG",
    agentName: "MARIANA HAGERMAN",
    agentPhone: "525500000000",
    rooms: [
      { id: 1, name: "Sala Principal", before: "/fotorancho/antes.jpg", after: "/fotorancho/despues.jpg", videoUrl: "/fotorancho/video.mp4" }
    ]
  }
};
