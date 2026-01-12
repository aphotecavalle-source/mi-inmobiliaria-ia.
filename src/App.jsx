import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'; // Asegúrate que el archivo se llame Home.jsx con H mayúscula
import PropertyVisualizer from './PropertyVisualizer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/propiedad/:id" element={<PropertyVisualizer />} />
      </Routes>
    </Router>
  );
}

export default App;
