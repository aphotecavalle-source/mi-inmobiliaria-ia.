import React from 'react';

const PropertyVisualizer = () => {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h2 className="editorial-text" style={{ fontSize: '2.5rem', color: 'var(--color-texto-principal)' }}>
        Área de Visualización Interactiva
      </h2>
      <p style={{ color: 'var(--color-texto-secundario)', marginTop: '20px' }}>
        Aquí aparecerán tus herramientas de Staging Virtual curated by M. Hagerman.
      </p>
      
      {/* Contenedor de prueba para la imagen */}
      <div style={{ 
        marginTop: '40px', 
        width: '100%', 
        height: '400px', 
        backgroundColor: 'rgba(255,255,255,0.5)', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: '12px',
        border: '1px dashed var(--color-arena)'
      }}>
        <span style={{ color: 'var(--color-arena)', fontWeight: 'bold' }}>
          MÓDULO DE CAMBIO DE MATERIALES (PRÓXIMAMENTE)
        </span>
      </div>
    </div>
  );
};

export default PropertyVisualizer;
