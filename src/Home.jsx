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
    /* FONDO: Ahora es un Arena Profundo para que el blanco resalte */
    <div className="min-h-screen bg-[#A8A29E] flex flex-col justify-between p-8 md:p-16 text-white overflow-hidden">
      
      {/* 1. HEADER: UNIFICADO EN BLANCO SUTIL */}
      <header className="w-full flex justify-between items-center border-b border-white/20 pb-8">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="text-[12px] md:text-[14px] tracking-[0.5em] text-white uppercase font-bold">
            Tu plataforma de staging inmobiliario
          </h1>
        </motion.div>
        <span className="hidden md:block text-[10px] tracking-[0.3em] text-white/60 uppercase font-medium">
          M. Hagerman Concept
        </span>
      </header>

      {/* 2. CENTER: QUOTES EN BLANCO (MÁXIMO IMPACTO) */}
      <main className="flex-1 flex flex-col justify-center items-center py-20">
        <div className="h-[250px] relative w-full max-w-4xl flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuoteIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute w-full text-center"
            >
              <h2 className="text-3xl md:text-5xl font-serif italic text-white leading-tight mb-8 drop-shadow-sm">
                "{quotes[currentQuoteIndex].text}"
              </h2>
              <div className="flex justify-center items-center gap-4">
                <div className="w-8 h-[1px] bg-white/40" />
                <span className="text-[11px] tracking-[0.4em] uppercase text-white/80 font-bold">
                  {quotes[currentQuoteIndex].author}
                </span>
                <div className="w-8 h-[1px] bg-white/40" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* 3. FOOTER: ACCESO UNIFICADO EN BLANCO */}
      <footer className="w-full max-w-xl mx-auto space-y-12">
        <div className="text-center space-y-8">
          <div className="inline-block relative">
            <h3 className="text-[11px] md:text-[13px] tracking-[0.6em] text-white uppercase font-bold">
              Visualiza la propiedad
            </h3>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-10 h-[1px] bg-white" />
          </div>

          <form onSubmit={handleAccess} className="relative mt-10">
            <div className="flex items-center border-b border-white/60 py-4 focus-within:border-white transition-colors">
              <input 
                type="text" 
                placeholder="INGRESA CLAVE"
                value={propertyCode}
                onChange={(e) => setPropertyCode(e.target.value)}
                className="flex-1 bg-transparent text-center text-[15px] tracking-[1em] outline-none uppercase font-bold text-white placeholder:text-white/30 ml-6"
              />
              <button 
                type="submit"
                className="p-2 hover:translate-x-2 transition-transform duration-500"
              >
                <ArrowRight size={28} strokeWidth={1} className="text-white" />
              </button>
            </div>
          </form>
        </div>

        <p className="text-[9px] tracking-[0.8em] text-white/40 uppercase text-center">
          Experiencia Inmersiva de Diseño
        </p>
      </footer>

    </div>
  );
};

export default Home;
