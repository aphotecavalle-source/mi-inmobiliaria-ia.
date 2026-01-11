import React, { useState } from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { Play, Image as ImageIcon, MapPin, ChevronRight, User, Sparkles, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PropertyVisualizer = () => {
  // ==========================================
  // CONFIGURACIÓN: ESTÉTICA REFINADA (CON CONTRASTE)
  // ==========================================
  const brandConfig = {
    agentName: "Rebeca Quintanilla",
    agentPhone: "525554045659", 
    brandColor: "#B4AD9E", 
    textColor: "#57534E", // Tono de texto principal más profundo
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
    <div className="min-h-screen bg-[#F9F8F6] font-sans text-[#57534E] pb-20">
      
      {/* Botón WhatsApp Minimalista */}
      <motion.button
        whileHover={{ y: -2 }}
        onClick={handleWhatsApp}
        style={{ backgroundColor: brandConfig.brandColor }}
        className="fixed bottom-10 right-10 z-[100] text-white px-8 py-4 rounded-sm shadow-sm flex items-center gap-4 opacity-95 transition-all"
      >
        <span className="text-[10px] font-bold tracking-[0.4em] uppercase">CONTACTAR</span>
        <MessageCircle size={16} />
      </motion.button>

      <header className="bg-white/50 backdrop-blur-sm sticky top-0 z-50 border-b border-stone-100 p-8 md:p-14">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-end md:items-center gap-8">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-light tracking-[0.2em] text-[#2D2A26] uppercase">
              {propertyData.title}
            </h1>
            
            <div className="flex items-center gap-6 border-l border-stone-300 pl-6">
              {/* UBICACIÓN: Más grande y con tono más fuerte */}
              <p className="flex items-center text-stone-500 text-[10px] md:text-[11px] font-bold tracking-[0.3em] uppercase">
                <MapPin size={12} className="mr-2 text-stone-400" /> {propertyData.location}
              </p>
              {/* AGENTE: Más grande y tono más fuerte */}
              <p className="text-[10px] md:text-[11px] font-bold tracking-[0.3em] uppercase text-stone-500">
                / {brandConfig.agentName}
              </p>
            </div>
          </div>
          
          <div className="flex bg-stone-50 p-1 rounded-sm border border-stone-100">
            <button 
              onClick={() => setViewMode('images')}
              className={`px-8 py-2 text-[10px] tracking-[0.3em] font-bold transition-all ${
                viewMode === 'images' ? 'bg-white text-[#2D2A26] shadow-sm' : 'text-stone-300'
              }`}
            >
              FOTOGRAFÍA
            </button>
            <button 
              onClick={() => setViewMode('video')}
              className={`px-8 py-2 text-[10px] tracking-[0.3em] font-bold transition-all ${
                viewMode === 'video' ? 'bg-white text-[#2D2A26] shadow-sm' : 'text-stone-300'
              }`}
            >
              VIDEO
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6 md:p-14 grid grid-cols-1 lg:grid-cols-6 gap-20">
        
        {/* Navegación lateral: Habitaciones más grandes y legibles */}
        <aside className="lg:col-span-1 space-y-12">
          <div className="flex flex-col space-y-10">
            {propertyData.rooms.map((room) => (
              <button
                key={room.id}
                onClick={() => { setActiveRoom(room); setViewMode('images'); }}
                className="text-left group relative"
              >
                <span className={`block text-[11px] md:text-[12px] tracking-[0.3em] uppercase transition-all duration-700 ${
                  activeRoom.id === room.id && viewMode === 'images'
                    ? 'text-[#2D2A26] font-bold'
                    : 'text-stone-400 hover:text-[#2D2A26]'
                }`}>
                  {room.name}
                </span>
                {activeRoom.id === room.id && (
                  <motion.div layoutId="line" className="absolute -left-5 top-1/2 w-2 h-[1px] bg-stone-600" />
                )}
              </button>
            ))}
          </div>
        </aside>

        {/* Visualizador - Tamaño equilibrado */}
        <section className="lg:col-span-5 flex justify-center">
          <AnimatePresence mode="wait">
            {viewMode === 'images' ? (
              <motion.div 
                key={activeRoom.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white p-2 rounded-sm border border-stone-100 shadow-sm w-full max-w-4xl"
              >
                <div className="relative overflow-hidden h-[350px] md:h-[500px] rounded-sm">
                  {/* Etiquetas: Más legibles pero minimalistas */}
                  <div className="absolute top-10 left-10 z-10 text-stone-500 text-[9px] font-bold tracking-[0.5em] uppercase border-b border-stone-300 pb-1">
                    01 / ACTUAL
                  </div>
                  <div className="absolute top-10 right-10 z-10 text-stone-500 text-[9px] font-bold tracking-[0.5em] uppercase border-b border-stone-300 pb-1">
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
              <div className="bg-stone-50 aspect-video w-full max-w-4xl flex items-center justify-center rounded-sm border border-stone-100">
                <video key={activeRoom.videoUrl} controls autoPlay className="w-full h-full object-cover opacity-90" src={activeRoom.videoUrl} />
              </div>
            )}
          </AnimatePresence>
        </section>
      </main>

      <footer className="max-w-6xl mx-auto p-20 text-center border-t border-stone-100 mt-20">
        <p className="text-stone-300 text-[9px] font-bold tracking-[0.6em] uppercase">
          Mariana Hagerman Concept
        </p>
      </footer>
    </div>
  );
};

export default PropertyVisualizer;
