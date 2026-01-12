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
    <div className="min-h-screen bg-[#FDFCFB] flex flex-col justify-between p-6 md:p-12 text-[#57534E] font-light">
      
      {/* HEADER: ESTILO MARCA DE AGUA EDITORIAL */}
      <header className="flex justify-between items-start w-full">
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="max-w-[150px] md:max-w-none"
        >
          <p className="text-[9px] md:text-[11px] tracking-[0.8em] text-[#B4AD9E] uppercase leading-loose">
            Plataforma de <br/> Staging Inmobiliario
          </p>
        </motion.div>
        
        <div className="text-right">
          <p className="text-[8px] tracking-[0.5em] text-[#D1CDC7] uppercase">M. Hagerman Concept</p>
        </div>
      </header>

      {/* CENTRAL: POESÍA VISUAL (ASIMÉTRICA) */}
      <main className="flex-1 flex flex-col justify-center items-center md:items-start md:pl-20">
        <div className="h-[250px] relative w-full max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuoteIndex}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 1.5, ease: "circOut" }}
              className="absolute inset-0 flex flex-col justify-center"
            >
              <h2 className="text-3xl md:text-6xl font-serif italic text-[#78716C] leading-[1.1] mb-6">
                {quotes[currentQuoteIndex].text}
              </h2>
              <div className="flex items-center gap-4">
                <div className="w-8 h-[1px] bg-[#B4AD9E]" />
                <span className="text-[10px] tracking-[0.4em] uppercase text-[#B4AD9E]">
                  {quotes[currentQuoteIndex].author}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* FOOTER: ACCESO MINIMALISTA (TIPO CONCIERGE) */}
      <footer className="w-full flex flex-col md:flex-row justify-between items-end gap-12">
        <div className="w-full md:max-w-md">
          <form onSubmit={handleAccess} className="group relative">
            <p className="text-[8px] tracking-[0.4em] text-[#B4AD9E] uppercase mb-4 opacity-0 group-focus-within:opacity-100 transition-opacity">
              Visualiza la propiedad
            </p>
            <div className="flex items-center border-b border-stone-200 py-2 group-focus-within:border-[#B4AD9E] transition-colors">
              <input 
                type="text" 
                placeholder="INGRESA CLAVE"
                value={propertyCode}
                onChange={(e) => setPropertyCode(e.target.value)}
                className="flex-1 bg-transparent text-[11px] tracking-[0.6em] outline-none uppercase placeholder:text-stone-300 text-[#57534E]"
              />
              <button 
                type="submit"
                className="ml-4 hover:translate-x-2 transition-transform duration-500"
              >
                <ArrowRight size={20} strokeWidth={1} className="text-[#B4AD9E]" />
              </button>
            </div>
          </form>
        </div>

        <div className="hidden md:block">
          <p className="text-[9px] tracking-[0.8em] text-[#D1CDC7] uppercase vertical-text transform rotate-180" style={{writingMode: 'vertical-rl'}}>
            Est. 2024
          </p>
        </div>
      </footer>

    </div>
  );
};

export default Home;
