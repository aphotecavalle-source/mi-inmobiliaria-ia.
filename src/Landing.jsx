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

const Landing = () => {
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
    /* FONDO: Gris Verdoso Menta (Sage Green) */
    <div className="min-h-screen bg-[#A3B1AA] flex flex-col justify-between p-8 md:p-16 text-white overflow-hidden transition-all duration-1000 font-sans">
      
      {/* HEADER: TITULO CON MÁS FUERZA Y LIMPIO */}
      <header className="w-full flex justify-center border-b border-white/20 pb-12">
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-[16px] md:text-[22px] tracking-[0.4em] text-white uppercase font-bold">
            Tu plataforma de staging inmobiliario
          </h1>
        </motion.div>
      </header>

      {/* CENTRAL: QUOTES EDITORIALES (TIPOGRAFÍA SERIF REFINADA) */}
      <main className="flex-1 flex flex-col justify-center items-center py-12">
        <div className="h-[300px] relative w-full max-w-5xl flex items-center justify-center text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuoteIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
              className="absolute w-full px-4"
            >
              {/* Tipografía Serif Editorial para los quotes */}
              <h2 className="text-4xl md:text-7xl font-serif italic text-white leading-[1.15] mb-12 drop-shadow-sm">
                "{quotes[currentQuoteIndex].text}"
              </h2>
              <div className="flex justify-center items-center gap-6">
                <div className="w-12 h-[1px] bg-white/40" />
                <span className="text-[11px] md:text-[13px] tracking-[0.5em] uppercase text-white/80 font-medium">
                  {quotes[currentQuoteIndex].author}
                </span>
                <div className="w-12 h-[1px] bg-white/40" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* FOOTER: ACCESO Y CRÉDITO ACTUALIZADO */}
      <footer className="w-full max-w-2xl mx-auto space-y-20">
        <div className="text-center space-y-12">
          <h3 className="text-[11px] md:text-[13px] tracking-[0.8em] text-white/90 uppercase font-medium">
            Visualiza la propiedad
          </h3>

          <form onSubmit={handleAccess} className="relative group max-w-lg mx-auto">
            <div className="flex items-center border-b border-white/40 py-4 focus-within:border-white transition-all duration-700">
              <input 
                type="text" 
                placeholder="INGRESA CLAVE"
                value={propertyCode}
                onChange={(e) => setPropertyCode(e.target.value)}
                className="flex-1 bg-transparent text-center text-[18px] md:text-[20px] tracking-[1em] outline-none uppercase font-light text-white placeholder:text-white/30"
              />
              <button 
                type="submit"
                className="p-2 hover:translate-x-3 transition-transform duration-500"
              >
                <ArrowRight size={32} strokeWidth={1} className="text-white" />
              </button>
            </div>
          </form>
        </div>

        {/* CRÉDITO EDITORIAL FINAL */}
        <div className="flex justify-center items-center opacity-70 text-[10px] tracking-[0.6em] uppercase pb-4">
           <p>Curated interior design <span className="font-bold">by M Hagerman</span></p>
        </div>
      </footer>

    </div>
  );
};

export default Landing;
