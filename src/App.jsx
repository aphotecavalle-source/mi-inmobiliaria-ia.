import React, { useState } from 'react';
import './index.css';
import Header from './components/Header';
import PropertyVisualizer from './PropertyVisualizer'; 

function App() {
  const [mostrarVisualizador, setMostrarVisualizador] = useState(false);

  // ESTA ES LA URL DE LA CABAÑA NUEVA (Verificada)
  const fotoPortada = "/fotospropiedad/caratula.JPEG";

  const infoPropiedad = {
    titulo: "Casa en el Bosque",
    ubicacion: "VALLE DE BRAVO",
    agente: "REBECA QUINTANILLA",
    id: "ID: VDB-10524"
  };

  return (
    <div className="App" style={{ backgroundColor: '#e2ede7', minHeight: '100vh', paddingBottom: '60px' }}>
      {!mostrarVisualizador && <Header />}
      
      <main>
        {!mostrarVisualizador ? (
          <div style={{ padding: '0 20px', display: 'flex', justifyContent: 'center' }}>
            
            <div style={{ 
              backgroundColor: 'white', 
              maxWidth: '1000px', 
              width: '100%',
              display: 'flex', 
              flexDirection: 'row',
              flexWrap: 'wrap',
              boxShadow: '0 40px 80px rgba(0,0,0,0.06)',
              borderRadius: '0px',
              border: '1px solid rgba(0,0,0,0.03)',
              overflow: 'hidden'
            }}>
              
              <div style={{ flex: '1.2', minWidth: '350px', height: '500px', overflow: 'hidden' }}>
                <img 
                  src={fotoPortada} 
                  alt={infoPropiedad.titulo} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  onError={(e) => { 
                    e.target.src = "/fotospropiedad/caratula.JPEG"; 
                  }}
                />
              </div>

              <div style={{ 
                flex: '1', 
                padding: '70px 60px', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center',
                minWidth: '350px'
              }}>
                <h1 className="editorial-text" style={{ fontSize: '3.8rem', marginBottom: '15px', lineHeight: '1', color: '#1a1a1a' }}>
                  Casa en <br /> el Bosque
                </h1>
                
                <div style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '8px', 
                  marginBottom: '50px',
                  borderLeft: '2px solid var(--color-arena)',
                  paddingLeft: '20px'
                }}>
                  <p className="small-detail" style={{ letterSpacing: '0.3em', color: 'var(--color-arena)', fontWeight: 'bold' }}>
                    {infoPropiedad.ubicacion}
                  </p>
                  <p className="small-detail" style={{ fontSize: '0.7rem', letterSpacing: '0.15em', opacity: 0.7 }}>
                    AGENT: {infoPropiedad.agente}
                  </p>
                  <p className="small-detail" style={{ fontSize: '0.65rem', letterSpacing: '0.2em', opacity: 0.5 }}>
                    {infoPropiedad.id}
                  </p>
                </div>
                
                <button className="btn-visualiza" onClick={() => setMostrarVisualizador(true)} style={{ width: '100%' }}>
                  Visualiza la propiedad
                </button>
              </div>

            </div>
          </div>
        ) : (
          <PropertyVisualizer alRegresar={() => setMostrarVisualizador(false)} />
        )}
      </main>

      <footer className="text-center p-20 text-stone-400 text-[9px] font-bold tracking-[0.3em] uppercase">
        © 2026 HAGERMAN HOME STAGING
      </footer>
    </div>
  );
}

export default App;
