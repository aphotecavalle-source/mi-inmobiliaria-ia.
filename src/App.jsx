import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import PropertyVisualizer from './PropertyVisualizer';

function App() {
  return (
    <Router>
      <Routes>
        {/* Si entran a la raíz (mi-app.vercel.app), ven el buscador elegante */}
        <Route path="/" element={<Home />} />
        
        {/* Si entran con código (mi-app.vercel.app/propiedad/casa-1), van directo */}
        <Route path="/propiedad/:id" element={<PropertyVisualizer />} />
      </Routes>
    </Router>
  );
}

export default App;
