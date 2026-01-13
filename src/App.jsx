import React, { useState } from 'react';
import './index.css';
import Header from './components/Header';
import PropertyVisualizer from './PropertyVisualizer'; 

function App() {
  const [mostrarVisualizador, setMostrarVisualizador] = useState(false);

  return (
    <div className="App">
      {/* El Header con "Virtual Interior Design..." solo se ve en el landing */}
      {!mostrarVisualizador && <Header />}
      
      <main>
        {!mostrarVisualizador ? (
          /* --- LANDING PAGE --- */
          <div style={{ textAlign: 'center', padding: '100px 20px' }}>
            <h1 className="editorial-text" style={{ fontSize: '4.5rem' }}>Casa en el Bosque</h1>
            <p className="small-detail" style={{ marginBottom: '40px' }}>VALLE DE BRAVO</p>
            <button className="btn-visualiza" onClick={() => setMostrarVisualizador(true)}>
              Visualiza la propiedad
            </button>
          </div>
        ) : (
          /* --- VISUALIZADOR (Sin botón regresar) --- */
          <PropertyVisualizer />
        )}
      </main>

      {/* FOOTER ÚNICO: Se muestra siempre abajo de todo */}
      <footer className="text-center p-20 text-stone-400 text-[9px] font-bold tracking-[0.3em] uppercase">
        © 2026 MARIANA HAGERMAN
      </footer>
    </div>
  );
}

export default App;
