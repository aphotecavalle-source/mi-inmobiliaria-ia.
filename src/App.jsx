import React from 'react';
import './index.css';
import Header from './components/Header';
import PropiedadDetalle from './components/PropiedadDetalle';

function App() {
  return (
    <div className="App">
      <Header />
      
      <main>
        {/* SECCIÓN 1: BIENVENIDA / QUOTE */}
        <section style={{ 
          textAlign: 'center', 
          padding: '100px 20px', 
          maxWidth: '800px', 
          margin: '0 auto' 
        }}>
          <h1 className="editorial-text" style={{ fontSize: '3.5rem', marginBottom: '20px' }}>
            Casa en el Bosque
          </h1>
          <p className="quote-text">
            "Un refugio donde el diseño escandinavo se encuentra con la naturaleza salvaje."
          </p>
          <div style={{ marginTop: '40px' }}>
             <span className="small-detail">DESLIZA PARA EXPLORAR</span>
             <div style={{ fontSize: '1.5rem', marginTop: '10px' }}>↓</div>
          </div>
        </section>

        {/* SECCIÓN 2: EL VISUALIZADOR (TU PROPIEDAD) */}
        <section id="visualizador">
          <PropiedadDetalle />
        </section>
      </main>
      
      <footer style={{ textAlign: 'center', padding: '100px 0 40px', opacity: 0.6 }} className="small-detail">
        M. HAGERMAN &copy; 2026
      </footer>
    </div>
  );
}

export default App;
