import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Home = () => {
  const [propertyCode, setPropertyCode] = useState('');
  const navigate = useNavigate();

  const handleAccess = (e) => {
    e.preventDefault();
    if (propertyCode.trim()) {
      navigate(`/propiedad/${propertyCode.toLowerCase().trim()}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F8F6] flex flex-col items-center justify-center p-6 text-[#78716C]">
      
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="max-w-2xl w-full text-center space-y-24"
      >
        {/* LA CITA DE PICASSO */}
        <div className="space-y-5 px-4">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 2 }}
            className="text-[12px] md:text-[14px] font-serif italic tracking-[0.15em] text-[#B4AD9E] leading-relaxed"
          >
            "Todo lo que puedes imaginar es real."
          </motion.p>
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 2 }}
            className="block text-[8px] tracking-[0.4em] uppercase text-stone-300"
          >
            — Pablo Picasso
          </motion.span>
        </div>

        {/* NUEVO TÍTULO EVOCADOR */}
        <div className="space-y-4">
          <span className="text-[9px] font-bold tracking-[0.5em] text-[#D1CDC7] uppercase">
            Boutique Real Estate
          </span>
          <h1 className="text-4xl md:text-6xl font-light tracking-[0.3em] text-[#57534E] leading-tight uppercase">
            Lo que <br/> podría ser
          </h1>
        </div>

        {/* Buscador de Clave */}
        <form onSubmit={handleAccess} className="space-y-12">
          <div className="relative border-b border-stone-200 pb-3 mx-auto max-w-xs transition-all focus-within:border-[#B4AD9E]">
            <input 
              type="text" 
              placeholder="INGRESA CLAVE"
              value={propertyCode}
              onChange={(e) => setPropertyCode(e.target.value)}
              className="w-full bg-transparent text-center text-[11px] tracking-[0.5em] font-medium placeholder:text-stone-300 outline-none uppercase py-2"
            />
          </div>
          
          <button 
            type="submit"
            className="group flex items-center gap-5 mx-auto text-[10px] font-bold tracking-[0.5em] text-[#78716C] hover:text-[#B4AD9E] transition-colors"
          >
            ACCEDER <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </motion.div>

      {/* Footer */}
      <footer className="absolute bottom-12 text-center w-full px-4">
        <p className="text-[#D1CDC7] text-[8px] font-bold tracking-[0.6em] uppercase">
          Mariana Hagerman Concept • 2026
        </p>
      </footer>
    </div>
  );
};

export default Home;
