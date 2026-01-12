import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const quotes = [
  { text: "El hogar es nuestro rincón del mundo, nuestro primer universo.", author: "Gaston Bachelard" },
  { text: "Todo lo que puedes imaginar es real.", author: "Picasso" },
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
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleAccess = (e) => {
    e.preventDefault();
    if (propertyCode.trim()) {
      navigate(`/propiedad/${propertyCode.toLowerCase().trim()}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#A3836B] flex flex-col justify-between p-8 md:p-16 text-white overflow-hidden transition-all duration-1000">
      
      {/* HEADER: PROPUESTA TIPOGRÁFICA VANGUARDISTA */}
      <header className="w-full flex justify-between items-start border-b border-white/20 pb-12">
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }}
          className="space-y-2"
        >
          {/* Tipografía en minúsculas, ultra-light y con espaciado amplio: muy tendencia en diseño */}
          <h1 className="text-[14px] md:text-[16px] tracking-[0.8em] text-white/90 font-extralight lowercase">
            tu plataforma de <span className="font-normal italic">staging</span> inmobiliario
          </h1>
          <p className="text-[8px] tracking-[0.4em] text-white/40 uppercase">Selected Works 2024</p>
        </motion.div>
        
        <div className="text-right hidden md:block">
          <p className="text-[10px] tracking-[0.5em] text-white/80 uppercase font-bold border-l border-white/30 pl-4">
            M. Hagerman
          </p>
        </div>
      </header>

      {/* CENTRAL: QUOTES */}
      <main className="flex-1 flex flex-col justify-center items-center py-12">
        <div className="h-[280px] relative w-full max-w-5xl flex items-center justify-center text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuoteIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute w-full px-4"
            >
              <h2 className="text-3xl md:text-6xl font-serif italic text-white leading-[1.1] mb-12 opacity-95">
                "{quotes[currentQuoteIndex].text}"
              </h2>
              <div className="flex justify-center items-center gap-8">
                <span className="text-[10px] md:text-[12px] tracking-[0.6em] uppercase text-white/60 font-light italic">
                  — {quotes[currentQuoteIndex].author}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* FOOTER: ACCESO EDITORIAL */}
      <footer className="w-full max-w-2xl mx-auto space-y-16 mb-4">
        <div className="text-center space-y-12">
          <div className="space-y-4">
            <h3 className="text-[10px] md:text-[11px] tracking-[0.8em] text-white/70 uppercase font-light">
              Visualiza la propiedad
            </h3>
          </div>

          <form onSubmit={handleAccess} className="relative group">
            <div className="flex items-center border-b border-white/30 py-6 group-focus-within:border-white transition-all duration-700">
              <input 
                type="text" 
                placeholder="INGRESA CLAVE"
                value={propertyCode}
                onChange={(e) => setPropertyCode(e.target.value)}
                className="flex-1 bg-transparent text-center text-[18px] md:text-[22px] tracking-[1.2em] outline-none uppercase font-extralight text-white placeholder:text-white/20 transition-all"
              />
              <button 
                type="submit"
                className="absolute right-0 hover:translate-x-4 transition-transform duration-700 ease-in-out"
              >
                <ArrowRight size={36} strokeWidth={0.5} className="text-white/80" />
              </button>
            </div>
          </form>
        </div>

        <div className="flex justify-between items-center opacity-30 text-[8px] tracking-[0.5em] uppercase px-4">
           <p>Curated Interior Design</p>
           <p>© 2024</p>
        </div>
      </footer>

    </div>
  );
};

export default Home;
