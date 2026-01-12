
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

// LISTA ACTUALIZADA: BACHELARD PRIMERO PARA VERIFICAR EL CAMBIO
const quotes = [
  { text: "El hogar es nuestro rincón del mundo, nuestro primer universo.", author: "Gaston Bachelard" },
  { text: "Todo lo que puedes imaginar es real.", author: "Pablo Picasso" },
  { text: "Cada gran sueño comienza con un soñador.", author: "Harriet Tubman" },
  { text: "La mejor forma de predecir el futuro es crearlo.", author: "Peter Drucker" }
];

const Home = () => {
  const [propertyCode, setPropertyCode] = useState('');
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const navigate = useNavigate();

  // Rotación cada 7 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const handleAccess = (e) => {
    e.preventDefault();
    if (propertyCode.trim()) {
      navigate(`/propiedad/${propertyCode.toLowerCase().trim()}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F8F6] flex flex-col items-center justify-center p-6 text-[#78716C] overflow-hidden">
      
      <div className="max-w-5xl w-full text-center space-y-20 relative z-10">
        
        {/* CARRUSEL DE CITAS XXL */}
        <div className="h-[350px] md:h-[450px] flex flex-col justify-center items-center relative px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuoteIndex}
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.02, y: -20 }}
              transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
              className="absolute w-full flex flex-col items-center"
            >
              {/* Texto de la cita: Tamaño Máximo */}
              <p className="text-4xl md:text-7xl font-serif italic tracking-tight text-[#B4AD9E] leading-[1.1] max-w-4xl mx-auto">
                "{quotes[currentQuoteIndex].text}"
              </p>
              
              {/* Autor */}
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="block text-[10px] md:text-[12px] tracking-[0.5em] uppercase text-stone-300 mt-10"
              >
                — {quotes[currentQuoteIndex].author}
              </motion.span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* MENSAJE DE ACCESO Y BUSCADOR */}
        <div className="space-y-12">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-[10px] md:text-[12px] font-bold tracking-[0.5em] text-[#A8A29E] uppercase"
          >
            VISUALIZA TU PROPIEDAD AQUÍ
          </motion.h1>

          <form onSubmit={handleAccess} className="space-y-10">
            <div className="relative border-b border-stone-200 pb-3 mx-auto max-w-[280px] md:max-w-xs transition-all focus-within:border-[#B4AD9E]">
              <input 
                type="text" 
                placeholder="INGRESA CLAVE"
                value={propertyCode}
                onChange={(e) => setPropertyCode(e.target.value)}
                className="w-full bg-transparent text-center text-[12px] tracking-[0.6em] font-medium placeholder:text-stone-200 outline-none uppercase py-2"
              />
            </div>
            
            <button 
              type="submit"
              className="group flex items-center gap-5 mx-auto text-[10px] font-bold tracking-[0.5em] text-[#78716C] hover:text-[#B4AD9E] transition-all"
            >
              ACCEDER <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </form>
        </div>
      </div>

      {/* Tu firma al pie */}
      <footer className="absolute bottom-12 text-center w-full px-4">
        <p className="text-[#D1CDC7] text-[8px] font-bold tracking-[0.7em] uppercase">
          Mariana Hagerman Concept
        </p>
      </footer>
    </div>
  );
};

export default Home;
