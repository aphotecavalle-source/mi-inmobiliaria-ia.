import React, { useState } from 'react';
import './index.css';
import Header from './components/Header';
import PropertyVisualizer from './PropertyVisualizer'; 

function App() {
  const [mostrarVisualizador, setMostrarVisualizador] = useState(false);

  return (
    <div className="App">
      {/* El Header solo se ve en el landing */}
      {!mostrarVisualizador && <Header />}
      
      <main>
        {!mostrarVisualizador ? (
          /* --- LANDING PAGE --- */
          <div style={{ textAlign: 'center', padding: '40px 20px' }}>
            
            {/* FOTOGRAFÍA GENERAL DE LA CASA (Esquinas rectas) */}
            <div style={{ maxWidth: '1000px', margin: '0 auto 50px', border: '1px solid rgba(0,0,0,0.05)' }}>
              <img 
                src="https://images.unsplash.com/photo-1449156001437-3a1661dcda2e?q=80&w=2070" 
                alt="Casa en el Bosque General" 
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            <h1 className="editorial-text" style={{ fontSize: '4.5rem', marginBottom: '10px' }}>
              Casa en el Bosque
            </h1>
            <p className="small-detail" style={{ marginBottom: '50px', letterSpacing: '0.3em' }}>
              VALLE DE BRAVO
            </p>
            
            {/* Botón de entrada estilo bloque */}
            <button className="btn-visualiza" onClick={() => setMostrarVisualizador(true)}>
              Visualiza la propiedad
            </button>
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
