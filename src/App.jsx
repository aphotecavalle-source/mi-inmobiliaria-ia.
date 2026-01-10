import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropertyVisualizer from './PropertyVisualizer';

function App() {
  return (
    <Router>
      <Routes>
        {/* Esta es la ruta que estamos intentando abrir */}
        <Route path="/propiedad/:id" element={<PropertyVisualizer />} />
        
        <Route path="/" element={
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Bienvenido al Visualizador Real Estate</h1>
            <p>Por favor, añade <b>/propiedad/casa-1</b> al final de la URL</p>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;