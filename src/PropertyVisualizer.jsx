
     

  
            
           


  import React, { useState } from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { Play, Image as ImageIcon, MapPin, ChevronRight, User, Sparkles, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PropertyVisualizer = () => {
  // ==========================================
  // CONFIGURACIÓN MARCA BLANCA
  // ==========================================
  const brandConfig = {
    agentName: "Rebeca Quintanilla",
    agentPhone: "525554045659", // Número actualizado aquí
    brandColor: "#606C5D",      
    logoUrl: "/fotospropiedades/logo.png", 
    logoText: "BOUTIQUE RE", 
  };

  const propertyData = {
    title: "Casa en el Bosque",
    location: "Valle de Bravo #10524",
    rooms: [
      {
        id: 1,
        name: "Estancia Principal",
        before: "/fotospropiedades/Estancia1A.JPEG", 
        after: "/fotospropiedades/Estancia2.JPEG",
        videoUrl: "/fotospropiedades/estancia.mp4"
      }
    ]
  };

  // ==========================================
  // FUNCIÓN INTELIGENTE DE WHATSAPP
  // ==========================================
  const handleWhatsApp = () => {
    const message = `¡Hola! Me interesa la propiedad: ${propertyData.title} en ${propertyData.location}. ¿Me podrías dar más información?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${brandConfig.agentPhone}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Tu diseño original aquí... */}
      {/* (Asumiendo tu estructura anterior de visualizador centrado) */}
      
      <div className="max-w-6xl mx-auto p-4 md:p-8">
        <header className="flex justify-between items-center mb-8">
           <h1 className="text-2xl font-serif font-bold">{brandConfig.logoText}</h1>
        </header>

        <main>
          {/* Visualizador centrado como lo tenías */}
          <div className="rounded-2xl overflow-hidden shadow-xl mb-6">
            <ReactCompareSlider
              itemOne={<ReactCompareSliderImage src={propertyData.rooms[0].before} />}
              itemTwo={<ReactCompareSliderImage src={propertyData.rooms[0].after} />}
            />
          </div>

          <div className="text-center space-y-4">
            <h2 className="text-3xl font-serif">{propertyData.title}</h2>
            <p className="text-stone-500 flex justify-center items-center gap-2">
              <MapPin size={18} /> {propertyData.location}
            </p>
            
            <button 
              onClick={handleWhatsApp}
              className="mt-6 bg-stone-800 text-white px-8 py-3 rounded-full hover:bg-stone-700 transition-all"
            >
              Contactar Agente
            </button>
          </div>
        </main>
      </div>

      {/* TU FOOTER EXACTO */}
      <footer className="max-w-6xl mx-auto p-8 md:p-12 text-center text-stone-300 text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase">
        Desarrollado por Mariana Hagerman 
      </footer>

      {/* BOTÓN FLOTANTE INTELIGENTE */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
};

export default PropertyVisualizer;
