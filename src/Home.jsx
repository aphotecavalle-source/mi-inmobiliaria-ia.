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
    <div className="min-h-screen bg-[#F9F8F6] flex flex-col justify-between p-8 md:p-16 text-[#4A4540]">
      
      {/* 1. HEADER: DECLARACIÓN DE MARCA (Más legible y con peso) */}
      <header className="w-full flex justify-between items-center border-b border-stone-200 pb-8">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="text-[12px] md:text-[14px] tracking-[0.5em] text-[#8F887A] uppercase font-bold">
            Tu plataforma de staging inmobiliario
          </h1>
        </motion.div>
        <span className="hidden md:block text-[10px] tracking-[0.3em] text-[#B4AD9E] uppercase font-medium">
          M. Hagerman Concept
        </span>
      </header>

      {/* 2. CENTER: QUOTES (Equilibrio de tamaño y contraste) */}
      <main className="flex-1 flex flex-col justify-center items-center py-20">
        <div className="h-[200px] relative w-full max-w-4xl flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuoteIndex}
              initial={{ opacity: 0, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.01 }}
              transition={{ duration: 1.2 }}
              className="absolute w-full text-center"
            >
              <h2 className="text-3xl md:text-5xl font-serif italic text-[#57534E] leading-tight mb-8">
                "{quotes[currentQuoteIndex].text}"
              </h2>
              <div className="flex justify-center items-center gap-4">
                <div className="w-6 h-[1px] bg-[#B4AD9E]" />
                <span className="text-[11px] tracking-[0.4em] uppercase text-[#B4AD9E] font-bold">
                  {quotes[currentQuoteIndex].author}
                </span>
                <div className="w-6 h-[1px] bg-[#B4AD9E]" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* 3. FOOTER: ACCESO CON ALTO CONTRASTE */}
      <footer className="w-full max-w-2xl mx-auto space-y-12">
        <div className="text-center space-y-8">
          <div className="inline-block relative">
            <h3 className="text-[11px] md:text-[13px] tracking-[0.6em] text-[#4A4540] uppercase font-bold">
              Visualiza la propiedad
            </h3>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-[#B4AD9E]" />
          </div>

          <form onSubmit={handleAccess} className="relative mt-8">
            <div className="flex items-center border-b-2 border-stone-300 py-4 focus-within:border-[#8F887A] transition-colors">
              <input 
                type="text" 
                placeholder="INGRESA CLAVE"
                value={propertyCode}
                onChange={(e) => setPropertyCode(e.target.value)}
                className="flex-1 bg-transparent text-center text-[14px] md:text-[16px] tracking-[0.8em] outline-none uppercase font-bold text-[#4A4540] placeholder:text-stone-200"
              />
              <button 
                type="submit"
                className="absolute right-0 p-2 hover:translate-x-2 transition-transform duration-500"
              >
                <ArrowRight size={24} strokeWidth={1.5} className="text-[#8F887A]" />
              </button>
            </div>
          </form>
        </div>

        <p className="text-[9px] tracking-[0.8em] text-[#B4AD9E] uppercase text-center opacity-60">
          Experiencia Inmersiva de Diseño
        </p>
      </footer>

    </div>
  );
};

export default Home;
