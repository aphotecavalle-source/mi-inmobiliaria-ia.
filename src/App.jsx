import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Landing'; // IMPORTANTE: Que coincida con el nombre del archivo
import PropertyVisualizer from './PropertyVisualizer';

function App() {
  return (
    <Router>
      <Routes>
        {/* Aquí decimos que la página principal es Landing */}
        <Route path="/" element={<Landing />} /> 
        <Route path="/propiedad/:id" element={<PropertyVisualizer />} />
      </Routes>
    </Router>
  );
}

export default App;
