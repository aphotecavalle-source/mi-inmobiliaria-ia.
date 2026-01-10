import React, { useState } from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { Play, Image as ImageIcon, MapPin, ChevronRight, User, Sparkles, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PropertyVisualizer = () => {
  // ==========================================
  // CONFIGURACIÓN MARCA BLANCA (Personaliza aquí)
  // ==========================================
  const brandConfig = {
    agentName: "Rebeca Quintanilla",
    agentPhone: "525512345678", 
    brandColor: "#606C5D",      
    // RUTA DEL LOGO: Pon aquí el nombre de tu archivo de imagen
    logoUrl: "/fotospropiedades/logo.png", 
    logoText: "BOUTIQUE RE", // Este texto aparece si la imagen no carga
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
      },
      {
        id: 2,
        name: "Recámara",
        before: "/fotospropiedades/a1.jpg",
        after: "/fotospropiedades/recamara2.JPG",
        videoUrl: "/fotospropiedades/recamara.mp4"
      },
      {
        id: 3,
        name: "Terraza", 
        before:  "/fotospropiedades/Terraza1.JPG",
        after: "/fotospropiedades/Terraza2.JPEG",
        videoUrl: "/fotospropiedades/terraza.mp4"
      },
      {
        id: 4,
        name: "Family room", 
        before:  "/fotospropiedades/Sala1.JPEG", 
        after: "/fotospropiedades/Sala2.JPEG",
        videoUrl: "/fotospropiedades/family.mp4"
      }
    ]
  };

  const [activeRoom, setActiveRoom] = useState(propertyData.rooms[0]);
  const [viewMode, setViewMode] = useState('images');

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hola ${brandConfig.agentName}, me interesa la propiedad "${propertyData.title}" que vi en el visualizador.`);
    window.open(`https://wa.me/${brandConfig.agentPhone}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F8F8F6] font-sans text-stone-800 pb-20">
      
      {/* Botón WhatsApp */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleWhatsApp}
        style={{ backgroundColor: brandConfig.brandColor }}
        className="fixed bottom-6 right-6 z-[100] flex items-center gap-3 text-white px-6 py-4 rounded-full shadow-2xl"
      >
        <MessageCircle size={20} fill="currentColor" />
        <span className="font-bold text-sm tracking-tighter">CONTACTAR AGENTE</span>
      </motion.button>

      <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-stone-200 p-4 md:p-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex flex-col items-start">
            
            {/* LOGO DE IMAGEN */}
            <div className="mb-3">
              {brandConfig.logoUrl ? (
                <img 
                  src={brandConfig.logoUrl} 
                  alt="Logo Inmobiliaria" 
                  className="h-8 md:h-12 w-auto object-contain"
                  onError={(e) => { e.target.style.display = 'none'; }} // Si no encuentra la imagen, la oculta
                />
              ) : (
                <div className="text-[10px] font-black tracking-[0.3em] text-stone-400 uppercase">
                  {brandConfig.logoText}
                </div>
              )}
            </div>

            <h1 className="text-xl md:text-3xl font-extrabold tracking-tight text-stone-900 leading-tight">
              {propertyData.title}
            </h1>
            <div className="flex flex-wrap items-center gap-2 md:gap-4 mt-1">
              <p className="flex items-center text-stone-400 text-[10px] md:text-xs font-medium">
                <MapPin size={10} className="mr-1" /> {propertyData.location}
              </p>
              <span className="hidden md:block text-stone-200">|</span>
              <p style={{ color: brandConfig.brandColor }} className="flex items-center text-[10px] md:text-xs font-bold uppercase tracking-wider">
                <User size={10} className="mr-1" /> {brandConfig.agentName}
              </p>
            </div>
          </div>
          
          <div className="flex w-full md:w-auto bg-stone-100 p-1 rounded-xl border border-stone-200">
            <button 
              onClick={() => setViewMode('images')}
              style={{ color: viewMode === 'images' ? brandConfig.brandColor : '' }}
              className={`flex-1 md:flex-none px-4 md:px-6 py-2.5 rounded-lg flex justify-center items-center text-[11px] md:text-xs transition-all duration-300 ${
                viewMode === 'images' ? 'bg-white shadow-sm font-bold' : 'font-medium text-stone-400'
              }`}
            >
              <ImageIcon size={14} className="mr-2" /> FOTOS 
            </button>
            <button 
              onClick={() => setViewMode('video')}
              style={{ color: viewMode === 'video' ? brandConfig.brandColor : '' }}
              className={`flex-1 md:flex-none px-4 md:px-6 py-2.5 rounded-lg flex justify-center items-center text-[11px] md:text-xs transition-all duration-300 ${
                viewMode === 'video' ? 'bg-white shadow-sm font-bold' : 'font-medium text-stone-400'
              }`}
            >
              <Play size={14} className="mr-2" /> VIDEO 
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-4 md:p-6 grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-12">
        <aside className="order-2 lg:order-1 lg:col-span-1 space-y-2 md:space-y-3">
          <h3 className="text-lg md:text-2xl font-extrabold tracking-tight text-stone-900 mb-4 md:mb-6">
            Explorar Espacios
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 md:gap-3">
            {propertyData.rooms.map((room) => (
              <button
                key={room.id}
                onClick={() => { 
                  setActiveRoom(room); 
                  setViewMode('images');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`w-full group text-left p-3 md:p-4 rounded-xl md:rounded-2xl transition-all duration-300 ${
                  activeRoom.id === room.id && viewMode === 'images'
                    ? 'bg-white border border-stone-200 shadow-lg scale-[1.01]'
                    : 'bg-stone-50 md:bg-transparent border border-transparent'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className={`text-xs md:text-sm tracking-tight ${activeRoom.id === room.id ? 'font-bold' : 'font-medium text-stone-500'}`}
                        style={{ color: activeRoom.id === room.id ? brandConfig.brandColor : '' }}>
                    {room.name}
                  </span>
                  <ChevronRight size={14} style={{ color: activeRoom.id === room.id ? brandConfig.brandColor : '#D1D5DB' }} />
                </div>
              </button>
            ))}
          </div>
        </aside>

        <section className="order-1 lg:order-2 lg:col-span-3">
          <AnimatePresence mode="wait">
            {viewMode === 'images' ? (
              <motion.div 
                key={activeRoom.id + "-img"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white p-1.5 md:p-2 rounded-[1.5rem] md:rounded-[2.5rem] shadow-xl md:shadow-2xl border border-stone-100"
              >
                <div className="relative rounded-[1.2rem] md:rounded-[2rem] overflow-hidden h-[350px] md:h-[550px]">
                  <div className="absolute top-3 left-3 md:top-6 md:left-6 z-10 bg-black/40 backdrop-blur-md text-white px-4 py-1.5 md:px-5 md:py-2 rounded-full text-[9px] md:text-[11px] font-black tracking-[0.2em] uppercase">
                    HOY
                  </div>
                  <div style={{ backgroundColor: brandConfig.brandColor }} className="absolute top-3 right-3 md:top-6 md:right-6 z-10 text-white px-4 py-1.5 md:px-5 md:py-2 rounded-full text-[9px] md:text-[11px] font-black tracking-[0.2em] shadow-lg uppercase flex items-center gap-1 md:gap-2 border border-white/20">
                    <Sparkles size={12} /> MAÑANA
                  </div>
                  <ReactCompareSlider
                    itemOne={<ReactCompareSliderImage src={activeRoom.before} alt="Hoy" />}
                    itemTwo={<ReactCompareSliderImage src={activeRoom.after} alt="Mañana" />}
                    className="h-full w-full"
                  />
                </div>
                <div className="py-6 md:p-8 text-center text-stone-400">
                  <p className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase italic px-4">
                    Visualización de {activeRoom.name}
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key={activeRoom.id + "-vid"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-stone-950 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl overflow-hidden aspect-video border-[6px] md:border-[10px] border-white"
              >
                <video key={activeRoom.videoUrl} controls autoPlay className="w-full h-full object-cover" src={activeRoom.videoUrl} />
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </main>

      <footer className="max-w-6xl mx-auto p-8 md:p-12 text-center text-stone-300 text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase">
        Desarrollado por Mariana Hagerman • {brandConfig.agentName}
      </footer>
    </div>
  );
};

export default PropertyVisualizer;