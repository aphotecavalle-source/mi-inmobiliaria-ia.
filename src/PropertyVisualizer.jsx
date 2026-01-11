import React, { useState } from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { Play, Image as ImageIcon, MapPin, ChevronRight, User, Sparkles, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PropertyVisualizer = () => {
  // ==========================================
  // CONFIGURACIÓN ESTILO "SPATIAL" REFINADO
  // ==========================================
  const brandConfig = {
    agentName: "Rebeca Quintanilla",
    agentPhone: "525554045659", 
    brandColor: "#9C8D7B", // Tono Bronce/Piedra (Suave y elegante)
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
    const message = encodeURIComponent(`¡Hola! Me interesa la propiedad "${propertyData.title}" en ${propertyData.location}.`);
    window.open(`https://wa.me/${brandConfig.agentPhone}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans text-[#4A4540] pb-20">
      
      {/* Botón WhatsApp - Ahora en el color de marca y más sutil */}
      <motion.button
        whileHover={{ y: -2 }}
        onClick={handleWhatsApp}
        style={{ backgroundColor: brandConfig.brandColor }}
        className="fixed bottom-8 right-8 z-[100] text-white px-8 py-4 rounded-none shadow-lg flex items-center gap-4"
      >
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Contactar</span>
        <MessageCircle size={18} fill="currentColor" />
      </motion.button>

      <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-stone-100 p-8 md:p-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end md:items-center gap-6">
          <div className="flex flex-col items-start space-y-2">
            
            {/* Título Estilo Editorial */}
            <h1 className="text-4xl md:text-6xl font-serif font-light tracking-tight text-[#2D2A26] leading-none mb-2">
              {propertyData.title}
            </h1>
            
            <div className="flex items-center gap-6">
              <p className="flex items-center text-stone-400 text-[10px] font-bold tracking-[0.2em] uppercase">
                <MapPin size={12} className="mr-2" /> {propertyData.location}
              </p>
              <p style={{ color: brandConfig.brandColor }} className="text-[10px] font-bold tracking-[0.2em] uppercase italic">
                {brandConfig.agentName}
              </p>
            </div>
          </div>
          
          {/* Selector de modo - Colores suaves */}
          <div className="flex border border-stone-200 p-1 rounded-none bg-white">
            <button 
              onClick={() => setViewMode('images')}
              style={{ 
                backgroundColor: viewMode === 'images' ? brandConfig.brandColor : 'transparent',
                color: viewMode === 'images' ? '#fff' : '#A8A29E'
              }}
              className="px-8 py-2 text-[10px] tracking-[0.2em] font-bold transition-all"
            >
              FOTOGRAFÍA
            </button>
            <button 
              onClick={() => setViewMode('video')}
              style={{ 
                backgroundColor: viewMode === 'video' ? brandConfig.brandColor : 'transparent',
                color: viewMode === 'video' ? '#fff' : '#A8A29E'
              }}
              className="px-8 py-2 text-[10px] tracking-[0.2em] font-bold transition-all"
            >
              VIDEO
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6 md:p-12 grid grid-cols-1 lg:grid-cols-5 gap-16">
        
        {/* Navegación Lateral */}
        <aside className="lg:col-span-1 space-y-10">
          <h3 className="text-[10px] font-bold tracking-[0.4em] text-stone-300 uppercase">
            Recorrido
          </h3>
          <div className="flex flex-col space-y-8">
            {propertyData.rooms.map((room) => (
              <button
                key={room.id}
                onClick={() => { setActiveRoom(room); setViewMode('images'); }}
                className="text-left group"
              >
                <span className={`block text-[11px] tracking-[0.2em] uppercase transition-all duration-700 ${
                  activeRoom.id === room.id && viewMode === 'images'
                    ? 'font-bold border-l-2 border-[#9C8D7B] pl-4'
                    : 'text-stone-400 hover:text-[#2D2A26] hover:pl-2'
                }`}
                style={{ color: activeRoom.id === room.id ? brandConfig.brandColor : '' }}>
                  {room.name}
                </span>
              </button>
            ))}
          </div>
        </aside>

        {/* Visualizador Arquitectónico (Esquinas Rectas) */}
        <section className="lg:col-span-4">
          <AnimatePresence mode="wait">
            {viewMode === 'images' ? (
              <motion.div 
                key={activeRoom.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white border border-stone-100 shadow-sm"
              >
                <div className="relative overflow-hidden h-[450px] md:h-[600px] rounded-none">
                  {/* Etiquetas Minimalistas en Color Marca */}
                  <div className="absolute top-8 left-8 z-10 bg-white/90 text-[#4A4540] px-6 py-2 text-[9px] font-bold tracking-[0.3em] uppercase">
                    ORIGINAL
                  </div>
                  <div style={{ backgroundColor: brandConfig.brandColor }} className="absolute top-8 right-8 z-10 text-white px-6 py-2 text-[9px] font-bold tracking-[0.3em] uppercase">
                    REDISEÑO IA
                  </div>
                  
                  <ReactCompareSlider
                    itemOne={<ReactCompareSliderImage src={activeRoom.before} />}
                    itemTwo={<ReactCompareSliderImage src={activeRoom.after} />}
                    className="h-full w-full"
                  />
                </div>
                <div className="p-8 border-t border-stone-50 flex justify-between items-center">
                   <p className="text-[9px] font-bold tracking-[0.4em] text-stone-300 uppercase">
                     {activeRoom.name}
                   </p>
                   <Sparkles size={14} className="text-stone-200" />
                </div>
              </motion.div>
            ) : (
              <motion.div 
                className="bg-stone-100 aspect-video flex items-center justify-center border border-stone-200"
              >
                <video key={activeRoom.videoUrl} controls autoPlay className="w-full h-full object-cover" src={activeRoom.videoUrl} />
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </main>

      <footer className="max-w-7xl mx-auto p-16 text-center border-t border-stone-100 mt-20">
        <p className="text-stone-300 text-[9px] font-bold tracking-[0.5em] uppercase">
          Desarrollado por Mariana Hagerman
        </p>
      </footer>
    </div>
  );
};

export default PropertyVisualizer;
