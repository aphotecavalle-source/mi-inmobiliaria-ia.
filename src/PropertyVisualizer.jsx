import React, { useState } from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { Play, Image as ImageIcon, MapPin, ChevronRight, User, Sparkles, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PropertyVisualizer = () => {
  // ==========================================
  // CONFIGURACIÓN: ESTÉTICA REFINADA Y LIGERA
  // ==========================================
  const brandConfig = {
    agentName: "Rebeca Quintanilla",
    agentPhone: "525554045659", 
    brandColor: "#B4AD9E", 
    textColor: "#78716C",  
    logoUrl: "/fotospropiedades/logo.png", 
    logoText: "BOUTIQUE RE",
  };

  const propertyData = {
    title: "CASA EN EL BOSQUE",
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
    const message = encodeURIComponent(`Hola, me interesa la propiedad "${propertyData.title}".`);
    window.open(`https://wa.me/${brandConfig.agentPhone}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F9F8F6] font-sans text-[#78716C] pb-20">
      
      {/* Botón WhatsApp Minimalista */}
      <motion.button
        whileHover={{ y: -2 }}
        onClick={handleWhatsApp}
        style={{ backgroundColor: brandConfig.brandColor }}
        className="fixed bottom-10 right-10 z-[100] text-white px-8 py-4 rounded-sm shadow-sm flex items-center gap-4 opacity-90"
      >
        <span className="text-[9px] font-bold tracking-[0.4em] uppercase">CONTACTAR</span>
        <MessageCircle size={16} />
      </motion.button>

      <header className="bg-white/50 backdrop-blur-sm sticky top-0 z-50 border-b border-stone-100 p-8 md:p-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-end md:items-center gap-8">
          <div className="space-y-3">
            <h1 className="text-2xl md:text-4xl font-light tracking-[0.2em] text-[#57534E] uppercase">
              {propertyData.title}
            </h1>
            <div className="flex items-center gap-6 border-l border-stone-200 pl-4">
              <p className="flex items-center text-stone-300 text-[8px] font-bold tracking-[0.3em] uppercase">
                <MapPin size={10} className="mr-2" /> {propertyData.location}
              </p>
              <p className="text-[8px] font-bold tracking-[0.3em] uppercase text-stone-300">
                / {brandConfig.agentName}
              </p>
            </div>
          </div>
          
          <div className="flex bg-stone-50 p-1 rounded-sm border border-stone-100">
            <button 
              onClick={() => setViewMode('images')}
              className={`px-6 py-2 text-[9px] tracking-[0.3em] font-bold transition-all ${
                viewMode === 'images' ? 'bg-white text-stone-600 shadow-sm' : 'text-stone-300'
              }`}
            >
              FOTOGRAFÍA
            </button>
            <button 
              onClick={() => setViewMode('video')}
              className={`px-6 py-2 text-[9px] tracking-[0.3em] font-bold transition-all ${
                viewMode === 'video' ? 'bg-white text-stone-600 shadow-sm' : 'text-stone-300'
              }`}
            >
              VIDEO
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6 md:p-10 grid grid-cols-1 lg:grid-cols-6 gap-12 md:gap-20">
        
        {/* Navegación Lateral */}
        <aside className="lg:col-span-1 space-y-8">
          <div className="flex flex-col space-y-8">
            {propertyData.rooms.map((room) => (
              <button
                key={room.id}
                onClick={() => { setActiveRoom(room); setViewMode('images'); }}
                className="text-left group relative"
              >
                <span className={`block text-[9px] tracking-[0.3em] uppercase transition-all duration-700 ${
                  activeRoom.id === room.id && viewMode === 'images'
                    ? 'text-stone-600 font-bold'
                    : 'text-stone-300 hover:text-stone-400'
                }`}>
                  {room.name}
                </span>
                {activeRoom.id === room.id && (
                  <motion.div layoutId="line" className="absolute -left-4 top-1/2 w-1.5 h-[1px] bg-stone-400" />
                )}
              </button>
            ))}
          </div>
        </aside>

        {/* Visualizador - Tamaño Reducido */}
        <section className="lg:col-span-5 flex justify-center">
          <AnimatePresence mode="wait">
            {viewMode === 'images' ? (
              <motion.div 
                key={activeRoom.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white p-2 rounded-sm border border-stone-50 shadow-sm w-full max-w-4xl"
              >
                {/* Altura reducida de 650px a 500px para mayor elegancia */}
                <div className="relative overflow-hidden h-[300px] md:h-[500px] rounded-sm">
                  <div className="absolute top-8 left-8 z-10 text-stone-400 text-[7px] md:text-[8px] font-bold tracking-[0.5em] uppercase border-b border-stone-200 pb-1">
                    01 / ACTUAL
                  </div>
                  <div className="absolute top-8 right-8 z-10 text-stone-400 text-[7px] md:text-[8px] font-bold tracking-[0.5em] uppercase border-b border-stone-200 pb-1">
                    02 / PROPUESTA
                  </div>
                  
                  <ReactCompareSlider
                    itemOne={<ReactCompareSliderImage src={activeRoom.before} />}
                    itemTwo={<ReactCompareSliderImage src={activeRoom.after} />}
                    className="h-full w-full"
                  />
                </div>
              </motion.div>
            ) : (
              <div className="bg-stone-50 aspect-video w-full max-w-4xl flex items-center justify-center rounded-sm">
                <video key={activeRoom.videoUrl} controls autoPlay className="w-full h-full object-cover opacity-90" src={activeRoom.videoUrl} />
              </div>
            )}
          </AnimatePresence>
        </section>
      </main>

      <footer className="max-w-6xl mx-auto p-16 text-center border-t border-stone-100 mt-10">
        <p className="text-stone-200 text-[8px] font-bold tracking-[0.6em] uppercase">
          Mariana Hagerman Concept
        </p>
      </footer>
    </div>
  );
};

export default PropertyVisualizer;
