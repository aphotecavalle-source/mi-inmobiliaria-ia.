import React, { useState } from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { Play, Image as ImageIcon, MapPin, ChevronRight, User, Sparkles, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PropertyVisualizer = () => {
  // ==========================================
  // CONFIGURACIÓN ESTILO "SPATIAL"
  // ==========================================
  const brandConfig = {
    agentName: "Rebeca Quintanilla",
    agentPhone: "525554045659", 
    brandColor: "#9C8D7B", // Tono piedra/bronce de la referencia
    logoUrl: "/fotospropiedades/logo.png", 
    logoText: "BOUTIQUE RE",
  };

  const propertyData = {
    title: "Casa en el Bosque",
    location: "Valle de Bravo #10524",
    rooms: [
      { id: 1, name: "Estancia Principal", before: "/fotospropiedades/Estancia1A.JPEG", after: "/fotospropiedades/Estancia2.JPEG", videoUrl: "/fotospropiedades/estancia.mp4" },
      { id: 2, name: "Recámara", before: "/fotospropiedades/a1.jpg", after: "/fotospropiedades/recamara2.JPG", videoUrl: "/fotospropiedades/recamara.mp4" },
      { id: 3, name: "Terraza", before: "/fotospropiedades/Terraza1.JPG", after: "/fotospropiedades/Terraza2.JPEG", videoUrl: "/fotospropiedades/terraza.mp4" },
      { id: 4, name: "Family room", before: "/fotospropiedades/Sala1.JPEG", after: "/fotospropiedades/Sala2.JPEG", videoUrl: "/fotospropiedades/family.mp4" }
    ]
  };

  const [activeRoom, setActiveRoom] = useState(propertyData.rooms[0]);
  const [viewMode, setViewMode] = useState('images');

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`¡Hola! Me interesa la propiedad "${propertyData.title}" en ${propertyData.location}. ¿Me podrías dar más información?`);
    window.open(`https://wa.me/${brandConfig.agentPhone}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] font-sans text-[#1A1A1A] pb-20">
      
      {/* Botón WhatsApp Minimalista */}
      <motion.button
        whileHover={{ y: -2 }}
        onClick={handleWhatsApp}
        className="fixed bottom-8 right-8 z-[100] bg-[#1A1A1A] text-white px-8 py-4 rounded-none shadow-none flex items-center gap-4 border border-white/10"
      >
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Contactar</span>
        <MessageCircle size={18} />
      </motion.button>

      <header className="bg-white sticky top-0 z-50 border-b border-stone-100 p-6 md:p-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end md:items-center gap-6">
          <div className="flex flex-col items-start space-y-4">
            {/* LOGO */}
            <div className="mb-2">
              <img src={brandConfig.logoUrl} alt="Logo" className="h-10 w-auto grayscale" />
            </div>

            <h1 className="text-3xl md:text-5xl font-serif font-light tracking-tight text-[#1A1A1A] leading-none">
              {propertyData.title}
            </h1>
            
            <div className="flex items-center gap-6">
              <p className="flex items-center text-stone-400 text-[10px] font-bold tracking-[0.2em] uppercase">
                <MapPin size={12} className="mr-2" /> {propertyData.location}
              </p>
              <p style={{ color: brandConfig.brandColor }} className="text-[10px] font-bold tracking-[0.2em] uppercase">
                {brandConfig.agentName}
              </p>
            </div>
          </div>
          
          <div className="flex border border-stone-200 p-1 rounded-none">
            <button 
              onClick={() => setViewMode('images')}
              className={`px-8 py-2 text-[10px] tracking-[0.2em] font-bold transition-all ${
                viewMode === 'images' ? 'bg-[#1A1A1A] text-white' : 'text-stone-400'
              }`}
            >
              IMÁGENES
            </button>
            <button 
              onClick={() => setViewMode('video')}
              className={`px-8 py-2 text-[10px] tracking-[0.2em] font-bold transition-all ${
                viewMode === 'video' ? 'bg-[#1A1A1A] text-white' : 'text-stone-400'
              }`}
            >
              VIDEO
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6 md:p-10 grid grid-cols-1 lg:grid-cols-5 gap-16">
        
        {/* Sidebar Minimalista */}
        <aside className="lg:col-span-1 space-y-8">
          <h3 className="text-[11px] font-bold tracking-[0.4em] text-stone-300 uppercase">
            Selección de Espacios
          </h3>
          <div className="flex flex-col space-y-6">
            {propertyData.rooms.map((room) => (
              <button
                key={room.id}
                onClick={() => { setActiveRoom(room); setViewMode('images'); }}
                className="text-left group"
              >
                <span className={`block text-[11px] tracking-[0.2em] uppercase transition-all duration-500 ${
                  activeRoom.id === room.id && viewMode === 'images'
                    ? 'font-bold pl-4 border-l-2 border-[#1A1A1A]'
                    : 'text-stone-400 hover:text-[#1A1A1A] hover:pl-2'
                }`}>
                  {room.name}
                </span>
              </button>
            ))}
          </div>
        </aside>

        {/* Visualizador Sin Esquinas Redondeadas */}
        <section className="lg:col-span-4">
          <AnimatePresence mode="wait">
            {viewMode === 'images' ? (
              <motion.div 
                key={activeRoom.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white border border-stone-100 shadow-sm"
              >
                <div className="relative overflow-hidden h-[400px] md:h-[650px] rounded-none">
                  {/* Etiquetas Minimalistas */}
                  <div className="absolute top-8 left-8 z-10 bg-white/90 backdrop-blur-sm text-[#1A1A1A] px-6 py-2 text-[9px] font-bold tracking-[0.3em] uppercase">
                    ESTADO ACTUAL
                  </div>
                  <div className="absolute top-8 right-8 z-10 bg-[#1A1A1A] text-white px-6 py-2 text-[9px] font-bold tracking-[0.3em] uppercase">
                    PROPUESTA INTERIORISMO
                  </div>
                  
                  <ReactCompareSlider
                    itemOne={<ReactCompareSliderImage src={activeRoom.before} className="rounded-none" />}
                    itemTwo={<ReactCompareSliderImage src={activeRoom.after} className="rounded-none" />}
                    className="h-full w-full"
                  />
                </div>
                <div className="p-10 text-center">
                   <p className="text-[10px] font-light tracking-[0.5em] text-stone-400 uppercase">
                     {activeRoom.name} — Spatial Concept
                   </p>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="bg-black aspect-video flex items-center justify-center border border-stone-200"
              >
                <video key={activeRoom.videoUrl} controls autoPlay className="w-full h-full object-cover" src={activeRoom.videoUrl} />
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </main>

      <footer className="max-w-7xl mx-auto p-12 text-center border-t border-stone-100">
        <p className="text-stone-300 text-[9px] font-bold tracking-[0.3em] uppercase">
          Desarrollado por Mariana Hagerman
        </p>
      </footer>
    </div>
  );
};

export default PropertyVisualizer;
