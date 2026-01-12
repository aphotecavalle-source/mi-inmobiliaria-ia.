import React from 'react';

const PropiedadDetalle = () => {
  const propiedad = {
    nombre: "Casa en el Bosque",
    ubicacion: "Valle de Bravo, México",
    descripcion: "Un proyecto de staging virtual donde la calidez escandinava se fusiona con el entorno forestal. Tonos arena, texturas orgánicas y un diseño pensado para la paz.",
    imagenPrincipal: "https://images.unsplash.com/photo-1449156001437-3a1661dcda2e?q=80&w=2070", 
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" 
  };

  return (
    <div className="container" style={{ marginTop: '40px' }}>
      <div className="card-propiedad" style={{ marginBottom: '50px', padding: '40px' }}>
        <div style={{ marginBottom: '30px' }}>
          <span className="small-detail" style={{ color: 'var(--color-arena)', fontWeight: '700' }}>PROYECTO DESTACADO</span>
          <h2 className="editorial-text" style={{ fontSize: '3rem', margin: '10px 0' }}>{propiedad.nombre}</h2>
          <p className="small-detail" style={{ fontSize: '0.9rem', opacity: 0.8 }}>{propiedad.ubicacion.toUpperCase()}</p>
        </div>
        <div style={{ marginBottom: '40px' }}>
          <img src={propiedad.imagenPrincipal} alt={propiedad.nombre} className="img-dslr" style={{ width: '100%', borderRadius: '8px' }} />
        </div>
        <div style={{ maxWidth: '700px', marginBottom: '60px' }}>
          <p style={{ color: 'var(--color-texto-secundario)', fontSize: '1.2rem', lineHeight: '1.8' }}>{propiedad.descripcion}</p>
        </div>
        <div className="video-section" style={{ marginTop: '50px', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '40px' }}>
          <h3 className="small-detail" style={{ marginBottom: '25px', textAlign: 'center' }}>RECORRIDO CINEMÁTICO</h3>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px' }}>
            <iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} src={propiedad.videoUrl} title="Video" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropiedadDetalle;
