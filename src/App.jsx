import React, { useState } from 'react'; // Importamos el estado
import './index.css';
import Header from './components/Header';
import PropiedadDetalle from './components/PropiedadDetalle';

function App() {
  // Esta "memoria" decide si vemos el landing o la propiedad
  const [mostrarPropiedad, setMostrarPropiedad] = useState(false);

  return (
    <div className="App">
      <Header />
      
      <main>
        {!mostrarPropiedad ? (
          /* VISTA 1: LANDING PAGE */
          <div style={{ textAlign: 'center', padding: '50px 20px' }}>
            <h1 className="editorial-text" style={{ fontSize: '3rem', marginBottom: '30px' }}>
              Eleva el potencial de tu espacio
            </h1>
            <p style={{ maxWidth: '600px', margin: '0 auto 40px', color: 'var(--color-texto-secundario)' }}>
              Transformamos propiedades a través de un diseño escandinavo y cálido que conecta con las emociones.
            </p>
            {/* El botón ahora cambia la vista al hacer clic */}
            <button className="btn-visualiza" onClick={() => setMostrarPropiedad(true)}>
              Visualiza la propiedad
            </button>
          </div>
        ) : (
          /* VISTA 2: DETALLE DE LA PROPIEDAD */
          <div>
            <button 
              onClick={() => setMostrarPropiedad(false)} 
              style={{ background: 'none', border: 'none', cursor: 'pointer', marginLeft: '40px', color: 'var(--color-arena)', fontWeight: 'bold' }}
            >
              ← VOLVER
            </button>
            <PropiedadDetalle />
          </div>
        )}
      </main>
      
      <footer style={{ textAlign: 'center', padding: '100px 0 40px', opacity: 0.6 }} className="small-detail">
        M. HAGERMAN &copy; 2026
      </footer>
    </div>
  );
}

export default App;
