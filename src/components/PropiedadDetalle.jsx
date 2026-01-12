import React from 'react';

const PropiedadDetalle = () => {
  // Datos de ejemplo con el estilo que buscas
  const propiedad = {
    nombre: "Casa Bruma",
    ubicacion: "Valle de Bravo, México",
    descripcion: "Un refugio que integra la calidez del estilo escandinavo con texturas naturales y una iluminación diseñada para generar paz y plenitud.",
    imagen: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" // Imagen de ejemplo tipo DSLR
  };

  return (
    <section className="container" style={{ marginTop: '40px' }}>
      <div className="card-propiedad">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}>
          
          <div className="image-container">
            <img src={propiedad.imagen} alt={propiedad.nombre} className="img-dslr" />
          </div>

          <div className="info-vivienda">
            <span className="small-detail" style={{ color: 'var(--color-arena)', fontWeight: '700' }}>
              PROYECTO DESTACADO
            </span>
            <h2 className="editorial-text" style={{ fontSize: '2.8rem', margin: '15px 0' }}>
              {propiedad.nombre}
            </h2>
            <p className="small-detail" style={{ marginBottom: '20px', fontSize: '0.9rem' }}>
              {propiedad.ubicacion.toUpperCase()}
            </p>
            <p style={{ color: 'var(--color-texto-secundario)', marginBottom: '30px', fontSize: '1.1rem' }}>
              {propiedad.descripcion}
            </p>
            <button className="btn-visualiza">
              Visualiza la propiedad
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default PropiedadDetalle;
