import React, { useState } from 'react';
import './index.css';
import Header from './components/Header';
import PropertyVisualizer from './PropertyVisualizer'; 
import { catalogoPropiedades } from './catalogopropiedades';

function App() {
  const [mostrarVisualizador, setMostrarVisualizador] = useState(false);

  // Intentamos leer el ID del link, si no, usamos "bosque"
  const params = new URLSearchParams(window.location.search);
  const idPropiedad = params.get('id') || 'bosque';
  
  // Seguridad: Si el catálogo no carga o el ID no existe, usamos "bosque"
  const data = (catalogoPropiedades && catalogoPropiedades[idPropiedad]) 
               ? catalogoPropiedades[idPropiedad] 
               : catalogoPropiedades['bosque'];

  if (!data) return <div className="p-20 text-center">Cargando catálogo...</div>;

  return (
    <div className="App" style={{ backgroundColor: '#e2ede7', minHeight: '100vh', paddingBottom: '60px' }}>
      {!mostrarVisualizador && <Header />}
      
      <main>
        {!mostrarVisualizador ? (
          <div style={{ padding: '0 20px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ 
              backgroundColor: 'white', maxWidth: '1000px', width: '100%',
              display: 'flex', flexDirection: 'row', flexWrap: 'wrap',
              boxShadow: '0 40px 80px rgba(0,0,0,0.06)', overflow: 'hidden' 
            }}>
              
              <div style={{ flex: '1.2', minWidth: '350px', height: '500px', overflow: 'hidden' }}>
                <img 
                  src={data.fotoPortada} 
                  alt={data.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
                />
              </div>

              <div style={{ 
                flex: '1', padding: '70px 60px', display: 'flex', flexDirection: 'column', 
                justifyContent: 'center', minWidth: '350px', textAlign: 'left' 
              }}>
                <h1 className="editorial-text" style={{ fontSize: '3.8rem', marginBottom: '15px', lineHeight: '1', color: '#1a1a1a' }}>
                  {data.title}
                </h1>
                
                <div style={{ borderLeft: '2px solid #c5b097', paddingLeft: '20px', marginBottom: '50px' }}>
                  <p className="small-detail" style={{ letterSpacing: '0.3em', color: '#c5b097', fontWeight: 'bold' }}>
                    {data.location}
                  </p>
                  <p className="small-detail" style={{ fontSize: '0.7rem', opacity: 0.7 }}>
                    AGENT: {data.agentName}
                  </p>
                  <p className="small-detail" style={{ fontSize: '0.65rem', opacity: 0.5 }}>
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
