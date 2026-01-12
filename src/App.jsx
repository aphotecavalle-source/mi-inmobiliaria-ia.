import React, { useState } from 'react';
import './index.css';
import Header from './components/Header';
import PropiedadDetalle from './components/PropiedadDetalle';

function App() {
  const [mostrarDetalle, setMostrarDetalle] = useState(false);

  return (
    <div className="App">
      <Header />
      <main>
        {!mostrarDetalle ? (
          <div style={{ textAlign: 'center', padding: '100px 20px' }}>
            <h1 className="editorial-text" style={{ fontSize: '4rem' }}>Casa en el Bosque</h1>
            <p className="small-detail" style={{ marginBottom: '40px' }}>VALLE DE BRAVO</p>
            <button className="btn-visualiza" onClick={() => setMostrarDetalle(true)}>Visualiza la propiedad</button>
          </div>
        ) : (
          <div>
            <button onClick={() => setMostrarDetalle(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '20px 40px', color: 'var(--color-arena)', fontWeight: 'bold' }}>← REGRESAR</button>
            <PropiedadDetalle />
          </div>
        )}
      </main>
      <footer style={{ textAlign: 'center', padding: '80px 0', opacity: 0.5 }} className="small-detail">M. HAGERMAN &copy; 2026</footer>
    </div>
  );
}

export default App;
