import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Landing'; // Importamos el archivo Landing.jsx
import PropertyVisualizer from './PropertyVisualizer';

function App() {
  return (
    <Router>
      <Routes>
        {/* Usamos Landing como la página principal */}
        <Route path="/" element={<Landing />} />
        <Route path="/propiedad/:id" element={<PropertyVisualizer />} />
      </Routes>
    </Router>
  );
}

export default App;
