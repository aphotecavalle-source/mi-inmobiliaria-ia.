import React, { useState } from 'react';
import './index.css';
import Header from './components/Header';
import PropertyVisualizer from './PropertyVisualizer'; 

function App() {
  const [mostrarVisualizador, setMostrarVisualizador] = useState(false);

  // URL de la imagen de internet seleccionada para ti
  const imagenBosque = "http://googleusercontent.com/image_collection/image_retrieval/16464980154844483187";

  return (
    <div className="App" style={{ backgroundColor: '#e2ede7', minHeight: '100vh', paddingBottom: '40px' }}>
      {!mostrarVisualizador && <Header />}
      
      <main>
        {!mostrarVisualizador ? (
          /* --- LANDING PAGE: FICHA HORIZONTAL --- */
          <div style={{ padding: '0 20px 60px', display: 'flex', justifyContent: 'center' }}>
            
            <div style={{ 
              backgroundColor: 'white', 
              maxWidth: '1000px', // Un poco más ancha para el formato horizontal
              width: '100%',
              display: 'flex', // Activa el formato horizontal
              flexDirection: 'row',
              flexWrap: 'wrap', // Para que en celular se ponga una arriba de otra
              boxShadow: '0 30px 60px rgba(0,0,0,0.05)',
              border: '1px solid rgba(0,0,0,0.05)',
              borderRadius: '0px' // Esquinas rectas
            }}>
              
              {/* IMAGEN A LA IZQUIERDA */}
              <div style={{ flex: '1.2', minWidth: '300px', height: '500px', overflow: 'hidden' }}>
                <img 
                  src={imagenBosque} 
                  alt="Casa en el Bosque" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* CONTENIDO A LA DERECHA */}
              <div style={{ 
                flex: '1', 
                padding: '60px 50px', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center',
                textAlign: 'left', // Alineado a la izquierda para look editorial
                minWidth: '300px'
              }}>
                <h1 className="editorial-text" style={{ fontSize: '3.8rem', marginBottom: '10px', lineHeight: '1' }}>
                  Casa en <br /> el Bosque
                </h1>
                <p className="small-detail" style={{ marginBottom: '40px', letterSpacing: '0.4em', color: 'var(--color-arena)' }}>
                  VALLE DE BRAVO
                </p>
                
                <div style={{ borderTop: '1px solid #eee', paddingTop: '30px' }}>
                  <button className="btn-visualiza" onClick={() => setMostrarVisualizador(true)} style={{ width: '100%' }}>
                    Visualiza la propiedad
                  </button>
                </div>
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
