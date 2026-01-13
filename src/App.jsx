import React, { useState } from 'react';
import './index.css';
import Header from './components/Header';
import PropertyVisualizer from './PropertyVisualizer'; 

function App() {
  const [mostrarVisualizador, setMostrarVisualizador] = useState(false);

  return (
    <div className="App" style={{ backgroundColor: '#e2ede7', minHeight: '100vh' }}>
      {!mostrarVisualizador && <Header />}
      
      <main>
        {!mostrarVisualizador ? (
          /* --- LANDING PAGE: DISEÑO DE FICHA --- */
          <div style={{ padding: '0 20px 60px', display: 'flex', justifyContent: 'center' }}>
            
            <div style={{ 
              backgroundColor: 'white', 
              maxWidth: '700px', // Ventana más chica y controlada
              width: '100%',
              boxShadow: '0 30px 60px rgba(0,0,0,0.05)',
              border: '1px solid rgba(0,0,0,0.05)'
            }}>
              
              {/* IMAGEN INTEGRADA EN LA FICHA */}
              <div style={{ width: '100%', height: '400px', overflow: 'hidden' }}>
                <img 
                  src="https://images.unsplash.com/photo-1449156001437-3a1661dcda2e?q=80&w=2070" 
                  alt="Casa en el Bosque" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* CONTENIDO DE LA FICHA */}
              <div style={{ padding: '50px 40px', textAlign: 'center' }}>
                <h1 className="editorial-text" style={{ fontSize: '3.5rem', marginBottom: '10px' }}>
                  Casa en el Bosque
                </h1>
                <p className="small-detail" style={{ marginBottom: '40px', letterSpacing: '0.4em', color: 'var(--color-arena)' }}>
                  VALLE DE BRAVO
                </p>
                
                <button className="btn-visualiza" onClick={() => setMostrarVisualizador(true)}>
                  Visualiza la propiedad
                </button>
              </div>

            </div>
          </div>
        ) : (
          /* --- VISUALIZADOR INTERACTIVO --- */
          <PropertyVisualizer alRegresar={() => setMostrarVisualizador(false)} />
        )}
      </main>

      <footer className="text-center p-20 text-stone-400 text-[9px] font-bold tracking-[0.3em] uppercase">
        © 2026 MARIANA HAGERMAN
      </footer>
    </div>
  );
}

export default App;
