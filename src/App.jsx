import React, { useState } from 'react';
import './index.css';
import Header from './components/Header';

// CAMBIO AQUÍ: Al estar en 'src', la ruta es solo './'
import PropertyVisualizer from './PropertyVisualizer'; 

function App() {
  const [mostrarVisualizador, setMostrarVisualizador] = useState(false);

  return (
    <div className="App">
      <Header />
      
      <main>
        {!mostrarVisualizador ? (
          /* --- PORTADA: CASA EN EL BOSQUE --- */
          <div style={{ textAlign: 'center', padding: '100px 20px' }}>
            <h1 className="editorial-text" style={{ fontSize: '4.5rem', marginBottom: '10px' }}>
              Casa en el Bosque
            </h1>
            <p className="small-detail" style={{ letterSpacing: '0.3em', marginBottom: '40px', opacity: 0.8 }}>
              VALLE DE BRAVO
            </p>
            <button className="btn-visualiza" onClick={() => setMostrarVisualizador(true)}>
              Visualiza la propiedad
            </button>
          </div>
        ) : (
          /* --- TU VISUALIZADOR (PROPERTYVISUALIZER) --- */
          <div>
            <div style={{ padding: '20px 40px' }}>
              <button 
                onClick={() => setMostrarVisualizador(false)} 
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  cursor: 'pointer', 
                  color: 'var(--color-arena)', 
                  fontWeight: '700',
                  fontSize: '0.75rem',
                  letterSpacing: '0.15em'
                }}
              >
                ← REGRESAR
              </button>
            </div>
            
            {/* Se carga el componente que está en src/PropertyVisualizer.jsx */}
            <PropertyVisualizer />
          </div>
        )}
      </main>
      
      <footer style={{ textAlign: 'center', padding: '60px 0', opacity: 0.4 }} className="small-detail">
        M. HAGERMAN &copy; 2026
      </footer>
    </div>
  );
}

export default App;
