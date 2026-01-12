import React from 'react';

const PropiedadDetalle = () => {
  const propiedad = {
    nombre: "Casa en el Bosque",
    descripcion: "Un proyecto de staging virtual donde la calidez escandinava se fusiona con el entorno forestal. Tonos arena, texturas orgánicas y un diseño pensado para la paz.",
    imagenPrincipal: "URL_DE_TU_FOTO_CASA_BOSQUE", // Reemplaza con tu link
    videoUrl: "URL_DE_TU_VIDEO" // Si tienes un video en YouTube o Drive
  };

  return (
    <div className="container">
      <div className="card-propiedad" style={{ marginBottom: '50px' }}>
        <h2 className="editorial-text" style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{propiedad.nombre}</h2>
        <p style={{ color: 'var(--color-texto-secundario)', marginBottom: '40px', maxWidth: '600px' }}>
          {propiedad.descripcion}
        </p>

        {/* CONTENEDOR DE IMAGEN */}
        <div style={{ marginBottom: '40px' }}>
          <img src={propiedad.imagenPrincipal} alt="Casa en el Bosque" className="img-dslr" />
        </div>

        {/* SECCIÓN DE VIDEO (Si tienes el link de video) */}
        <div className="video-section" style={{ marginTop: '50px' }}>
          <h3 className="small-detail" style={{ marginBottom: '20px' }}>RECORRIDO CINEMÁTICO</h3>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
            <iframe 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '8px' }}
              src={propiedad.videoUrl} 
              title="Video House Tour"
              frameBorder="0" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropiedadDetalle;
