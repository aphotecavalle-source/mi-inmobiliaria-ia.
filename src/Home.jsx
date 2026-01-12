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
    <div className="min-h-screen bg-[#F9F8F6] flex flex-col items-center justify-between p-8 md:p-16 text-[#44403C] overflow-hidden font-sans">
      
      {/* 1. TOP: IDENTIFICADOR DE PLATAFORMA */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full text-center mt-4"
      >
        <p className="text-[10px] md:text-[12px] tracking-[0.6em] text-[#8F887A] uppercase font-bold">
          Tu plataforma de staging inmobiliario
        </p>
      </motion.div>

      {/* 2. CENTER: QUOTES (MÁS CHICOS Y LEGIBLES) */}
      <div className="flex-1 flex items-center justify-center w-full max-w-4xl">
        <div className="h-[200px] flex flex-col justify-center items-center relative w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuoteIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 1 }}
              className="absolute w-full flex flex-col items-center text-center"
            >
              <p className="text-2xl md:text-4xl font-serif italic tracking-tight text-[#57534E] leading-relaxed">
                "{quotes[currentQuoteIndex].text}"
              </p>
              <span className="block text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-[#A8A29E] mt-6 font-semibold">
                — {quotes[currentQuoteIndex].author}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* 3. BOTTOM: CALL TO ACTION (SECCIÓN DE ACCESO) */}
      <div className="w-full max-w-sm space-y-12 mb-10">
        <div className="space-y-8 text-center">
          <h2 className="text-[11px] font-bold tracking-[0.5em] text-[#78716C] uppercase">
            VISUALIZA LA PROPIEDAD
          </h2>

          <form onSubmit={handleAccess} className="space-y-8">
            <div className="relative border-b-2 border-stone-300 pb-2 transition-all focus-within:border-[#8F887A]">
              <input 
                type="text" 
                placeholder="INGRESA CLAVE"
                value={propertyCode}
                onChange={(e) => setPropertyCode(e.target.value)}
                className="w-full bg-transparent text-center text-[13px] tracking-[0.5em] font-bold text-[#44403C] placeholder:text-stone-300 outline-none uppercase py-2"
              />
            </div>
            
            <button 
              type="submit"
              className="w-full group bg-[#57534E] hover:bg-[#8F887A] text-white py-4 px-8 flex items-center justify-center gap-4 transition-all duration-500 rounded-sm shadow-sm"
            >
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase">ACCEDER AHORA</span>
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>

        {/* FIRMA FINAL */}
        <p className="text-[#A8A29E] text-[8px] font-bold tracking-[0.6em] uppercase text-center pt-8">
          Mariana Hagerman Concept
        </p>
      </div>

    </div>
  );
};

export default Home;
