import React, { useState } from 'react';
import './index.css';
import Header from './components/Header';
import PropertyVisualizer from './PropertyVisualizer'; 
import { catalogoPropiedades } from './catalogopropiedades'; // IMPORTANTE: Importamos el catálogo

function App() {
  const [mostrarVisualizador, setMostrarVisualizador] = useState(false);

  // --- LÓGICA DINÁMICA ---
  const params = new URLSearchParams(window.location.search);
  const idPropiedad = params.get('id') || 'bosque'; 
  const data = catalogoPropiedades[idPropiedad] || catalogoPropiedades['bosque'];

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
              
              {/* IMAGEN DE PORTADA DINÁMICA */}
              <div style={{ flex: '1.2', minWidth: '350px', height: '500px', overflow: 'hidden' }}>
                <img 
                  src={data.fotoPortada} 
                  alt={data.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* TEXTO DINÁMICO */}
              <div style={{ 
                flex: '1', 
                padding: '70px 60px', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center',
                minWidth: '350px',
                textAlign: 'left'
              }}>
                <h1 className="editorial-text" style={{ fontSize: '3.8rem', marginBottom: '15px', lineHeight: '1', color: '#1a1a1a' }}>
                  {data.title}
                </h1>
                
                <div style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '8px', 
                  marginBottom: '50px',
                  borderLeft: '2px solid #c5b097',
                  paddingLeft: '20px'
                }}>
                  <p className="small-detail" style={{ letterSpacing: '0.3em', color: '#c5b097', fontWeight: 'bold' }}>
                    {data.location}
                  </p>
                  <p className="small-detail" style={{ fontSize: '0.7rem', letterSpacing: '0.15em', opacity: 0.7 }}>
                    AGENT: {data.agentName}
                  </p>
                  <p className="small-detail" style={{ fontSize: '0.65rem', letterSpacing: '0.2em', opacity: 0.5 }}>
                    ID: {data.refId}
                  </p>
                </div>
                
                <button className="btn-visualiza" onClick={() => setMostrarVisualizador(true)} style={{ width: '100%' }}>
                  Visualiza la propiedad
                </button>
              </div>

            </div>
          </div>
        ) : (
          // Pasamos la data completa al visualizador
          <PropertyVisualizer propertyData={data} alRegresar={() => setMostrarVisualizador(false)} />
        )}
      </main>

      <footer className="text-center p-20 text-stone-400 text-[9px] font-bold tracking-[0.3em] uppercase">
        © 2026 HAGERMAN HOME STAGING
      </footer>
    </div>
  );
}

export default App;
