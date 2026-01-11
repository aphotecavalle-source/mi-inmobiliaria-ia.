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
      // Redirige a la propiedad usando el código ingresado
      navigate(`/propiedad/${propertyCode.toLowerCase().trim()}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F8F6] flex flex-col items-center justify-center p-6 text-[#78716C]">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-xl w-full text-center space-y-12"
      >
        <div className="space-y-4">
          <span className="text-[10px] font-bold tracking-[0.5em] text-[#B4AD9E] uppercase">
            Boutique Real Estate
          </span>
          <h1 className="text-4xl md:text-5xl font-light tracking-[0.2em] text-[#57534E] leading-tight uppercase">
            Visualizador <br/> Inteligente
          </h1>
        </div>

        <form onSubmit={handleAccess} className="space-y-8">
          <div className="relative border-b border-stone-200 pb-2 mx-auto max-w-xs transition-all focus-within:border-[#B4AD9E]">
            <input 
              type="text" 
              placeholder="INGRESA CLAVE DE PROPIEDAD"
              value={propertyCode}
              onChange={(e) => setPropertyCode(e.target.value)}
              className="w-full bg-transparent text-center text-[11px] tracking-[0.3em] font-medium placeholder:text-stone-300 outline-none uppercase py-2"
            />
          </div>
          
          <button 
            type="submit"
            className="group flex items-center gap-4 mx-auto text-[10px] font-bold tracking-[0.4em] text-[#78716C] hover:text-[#B4AD9E] transition-colors"
          >
            ACCEDER <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <p className="text-[9px] font-medium tracking-[0.2em] text-stone-300 uppercase pt-12">
          Arquitectura • Diseño • Tecnología
        </p>
      </motion.div>

      <footer className="absolute bottom-12 text-center">
        <p className="text-[#D1CDC7] text-[8px] font-bold tracking-[0.6em] uppercase">
          Mariana Hagerman Concept
        </p>
      </footer>
    </div>
  );
};

export default Home;
