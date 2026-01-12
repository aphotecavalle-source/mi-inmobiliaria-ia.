import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

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
    <div className="min-h-screen bg-[#F9F8F6] flex flex-col items-center justify-center p-6 text-[#57534E] overflow-hidden">
      
      <div className="max-w-5xl w-full text-center space-y-12 md:space-y-16 relative z-10">
        
        {/* CARRUSEL DE CITAS */}
        <div className="h-[300px] md:h-[400px] flex flex-col justify-center items-center relative px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuoteIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
              className="absolute w-full flex flex-col items-center"
            >
              <p className="text-4xl md:text-7xl font-serif italic tracking-tight text-[#8F887A] leading-[1.1] max-w-4xl mx-auto">
                "{quotes[currentQuoteIndex].text}"
              </p>
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="block text-[10px] md:text-[12px] tracking-[0.5em] uppercase text-[#78716C] mt-10 font-medium"
              >
                — {quotes[currentQuoteIndex].author}
              </motion.span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* FRASE INTERMEDIA - PLATAFORMA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="py-4"
        >
          <p className="text-[11px] md:text-[13px] tracking-[0.6em] text-[#8F887A] uppercase font-light">
            Tu plataforma de staging inmobiliario
          </p>
        </motion.div>

        {/* SECCIÓN DE ACCESO */}
        <div className="space-y-10">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-[10px] md:text-[11px] font-bold tracking-[0.5em] text-[#78716C] uppercase"
          >
            VISUALIZA LA PROPIEDAD
          </motion.h1>

          <form onSubmit={handleAccess} className="space-y-10">
            <div className="relative border-b border-stone-400 pb-3 mx-auto max-w-[280px] md:max-w-xs transition-all focus-within:border-[#8F887A]">
              <input 
                type="text" 
                placeholder="INGRESA CLAVE"
                value={propertyCode}
                onChange={(e) => setPropertyCode(e.target.value)}
                className="w-full bg-transparent text-center text-[12px] tracking-[0.6em] font-bold text-[#57534E] placeholder:text-stone-300 outline-none uppercase py-2"
              />
            </div>
            
            <button 
              type="submit"
              className="group flex items-center gap-5 mx-auto text-[10px] font-bold tracking-[0.5em] text-[#57534E] hover:text-[#8F887A] transition-all"
            >
              ACCEDER <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform text-[#8F887A]" />
            </button>
          </form>
        </div>
      </div>

      <footer className="absolute bottom-12 text-center w-full px-4">
        <p className="text-[#A8A29E] text-[9px] font-bold tracking-[0.7em] uppercase">
          Mariana Hagerman Concept
        </p>
      </footer>
    </div>
  );
};

export default Home;
