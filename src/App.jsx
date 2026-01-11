import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import PropertyVisualizer from './PropertyVisualizer';

// Esta es la pantalla de inicio (La Carátula)
function Home() {
  const navigate = useNavigate();

  const handleStart = () => {
    // Esto te lleva a la propiedad de ejemplo
    navigate('/propiedad/casa-lujo');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-2xl bg-white p-10 rounded-2xl shadow-xl border border-slate-100">
        <h1 className="text-4xl font-serif text-slate-800 mb-4">
          Visualizador de Propiedades
        </h1>
        <p className="text-slate-600 mb-8 text-lg">
          Bienvenida, Mariana. Esta es la puerta de entrada para tus clientes. 
          Al hacer clic abajo, verán la magia de la IA aplicada a tu propiedad.
        </p>
        
        <button 
          onClick={handleStart}
          className="bg-slate-800 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-700 transition-all shadow-lg hover:shadow-slate-200"
        >
          Ver Propiedad de Ejemplo →
        </button>

        <div className="mt-12 pt-8 border-t border-slate-100 text-slate-400 text-sm">
          Propulsado por Inteligencia Artificial para el sector Inmobiliario
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal: La Carátula elegante */}
        <Route path="/" element={<Home />} />
        
        {/* Ruta del visualizador: Donde ocurre la magia */}
        <Route path="/propiedad/:id" element={<PropertyVisualizer />} />
      </Routes>
    </Router>
  );
}

export default App;
