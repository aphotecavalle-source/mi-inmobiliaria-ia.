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
    <div className="min-h-screen bg-[#F9F8F6] flex flex-col items-center justify-between p-10 md:p-20 text-[#57534E] overflow-hidden">
      
      {/* 1. TOP: PLATAFORMA (Ahora con más presencia) */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full text-center mt-2"
      >
        <h2 className="text-[14px] md:text-[18px] tracking-[0.5em] text-[#8F887A] uppercase font-bold">
          Tu plataforma de staging inmobiliario
        </h2>
        <div className="w-12 h-[1px] bg-[#B4AD9E] mx-auto mt-6 opacity-50" />
      </motion.div>

      {/* 2. CENTER: QUOTES (Equilibrio visual) */}
      <div className="flex-1 flex items-center justify-center w-full max-w-4xl my-12">
        <div className="h-[200px] flex flex-col justify-center items-center relative w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuoteIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 1.2 }}
              className="absolute w-full flex flex-col items-center text-center px-6"
            >
              <p className="text-3xl md:text-5xl font-serif italic tracking-tight text-[#78716C] leading-tight">
                "{quotes[currentQuoteIndex].text}"
              </p>
              <span className="block text-[11px] tracking-[0.4em] uppercase text-[#B4AD9E] mt-10 font-bold">
                — {quotes[currentQuoteIndex].author}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* 3. BOTTOM: CALL TO ACTION (Fuerte y definido) */}
      <div className="w-full max-w-sm space-y-12">
        <div className="space-y-10 text-center">
          <h3 className="text-[11px] font-bold tracking-[0.5em] text-[#8F887A] uppercase">
            VISUALIZA LA PROPIEDAD
          </h3>

          <form onSubmit={handleAccess} className="space-y-10">
            <div className="relative border-b-2 border-[#B4AD9E] pb-3 transition-all focus-within:border-[#8F887A]">
              <input 
                type="text" 
                placeholder="INGRESA CLAVE"
                value={propertyCode}
                onChange={(e) => setPropertyCode(e.target.value)}
                className="w-full bg-transparent text-center text-[14px] tracking-[0.6em] font-bold text-[#57534E] placeholder:text-stone-300 outline-none uppercase py-2"
              />
            </div>
            
            <button 
              type="submit"
              className="w-full group bg-[#B4AD9E] hover:bg-[#8F887A] text-white py-5 px-10 flex items-center justify-center gap-4 transition-all duration-500 rounded-sm shadow-md"
            >
              <span className="text-[12px] font-bold tracking-[0.4em] uppercase">ACCEDER AHORA</span>
              <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </form>
        </div>

        {/* FIRMA MARIANA HAGERMAN */}
        <p className="text-[#A8A29E] text-[10px] font-bold tracking-[0.6em] uppercase text-center pt-12 pb-4">
          Mariana Hagerman Concept
        </p>
      </div>

    </div>
  );
};

export default Home;
