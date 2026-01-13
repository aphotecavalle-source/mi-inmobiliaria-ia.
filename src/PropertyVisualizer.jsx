import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  MapPin, 
  User, 
  Image as ImageIcon, 
  Play, 
  ChevronRight, 
  Sparkles 
} from 'lucide-react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const PropertyVisualizer = () => {
  const brandConfig = {
    agentName: "Rebeca Quintanilla",
    agentPhone: "525512345678", 
    brandColor: "#c5b097", // Color arena que definimos en index.css
    logoText: "VIRTUAL INTERIOR DESIGN SERVICES",
    curatedBy: "curated by M. Hagerman"
  };

  const propertyData = {
    title: "Casa en el Bosque",
    location: "Valle de Bravo, México",
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
    <div className="min-h-screen bg-[#e2ede7] text-[#2a2a2a] pb-20" style={{ fontFamily: 'var(--fuente-sans)' }}>
      
      {/* Botón WhatsApp */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleWhatsApp}
        style={{ backgroundColor: 'var(--color-arena)' }}
        className="fixed bottom-6 right-6 z-[100] flex items-center gap-3 text-white px-6 py-4 rounded-full shadow-2xl"
      >
        <MessageCircle size={20} fill="currentColor" />
        <span className="font-bold text-xs tracking-widest">CONTACTAR AGENTE</span>
      </motion.button>

      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-stone-100 p-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex flex-col items-start">
            <div className="mb-4">
              <div className="text-[10px] font-bold tracking-[0.3em] text-stone-500 uppercase">
                {brandConfig.logoText}
              </div>
              <div className="text-sm italic" style={{ fontFamily: 'var(--fuente-editorial)' }}>
                {brandConfig.curatedBy}
              </div>
            </div>
            <h1 className="editorial-text text-3xl md:text-5xl mb-2">
              {propertyData.title}
            </h1>
            <p className="flex items-center text-stone-400 text-[10px] font-bold tracking-widest uppercase">
              <MapPin size={10} className="mr-2" /> {propertyData.location}
            </p>
          </div>
          
          <div className="flex bg-stone-100 p-1 rounded-none border border-stone-200">
            <button 
              onClick={() => setViewMode('images')}
              className={`px-6 py-2.5 rounded-none flex items-center text-[10px] tracking-widest transition-all ${
                viewMode === 'images' ? 'bg-white shadow-sm font-bold' : 'font-medium text-stone-400'
              }`}
              style={{ color: viewMode === 'images' ? 'var(--color-arena)' : '' }}
            >
              <ImageIcon size={14} className="mr-2" /> FOTOS 
            </button>
            <button 
              onClick={() => setViewMode('video')}
              className={`px-6 py-2.5 rounded-none flex items-center text-[10px] tracking-widest transition-all ${
                viewMode === 'video' ? 'bg-white shadow-sm font-bold' : 'font-medium text-stone-400'
              }`}
              style={{ color: viewMode === 'video' ? 'var(--color-arena)' : '' }}
            >
              <Play size={14} className="mr-2" /> VIDEO 
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-4 gap-12">
        <aside className="order-2 lg:order-1 lg:col-span-1 space-y-4">
          <h3 className="editorial-text text-2xl mb-6">Explorar Espacios</h3>
          <div className="grid grid-cols-1 gap-2">
            {propertyData.rooms.map((room) => (
              <button
                key={room.id}
                onClick={() => { setActiveRoom(room); setViewMode('images'); }}
                className={`w-full text-left p-5 transition-all border-b border-stone-200 ${
                  activeRoom.id === room.id ? 'bg-white' : 'bg-transparent hover:bg-white/50'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className={`text-xs tracking-widest uppercase ${activeRoom.id === room.id ? 'font-bold' : 'font-medium text-stone-400'}`}
                        style={{ color: activeRoom.id === room.id ? 'var(--color-arena)' : '' }}>
                    {room.name}
                  </span>
                  <ChevronRight size={14} />
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
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="bg-white p-2 shadow-2xl border border-stone-100"
              >
                <div className="mb-4 text-center">
                  <p className="text-[10px] font-bold tracking-[0.2em] text-stone-400 uppercase">
                    Desliza para ver el estado actual de la propiedad
                  </p>
                </div>
                
                {/* Visualizador con esquinas en ángulo recto */}
                <div className="relative overflow-hidden h-[400px] md:h-[650px]">
                  <div className="absolute top-6 right-6 z-10 bg-black/40 backdrop-blur-md text-white px-5 py-2 rounded-none text-[10px] font-black tracking-widest uppercase">
                    HOY (ESTADO ACTUAL)
                  </div>
                  <div style={{ backgroundColor: 'var(--color-arena)' }} className="absolute top-6 left-6 z-10 text-white px-5 py-2 rounded-none text-[10px] font-black tracking-widest shadow-lg uppercase flex items-center gap-2">
                    <Sparkles size={12} /> PROPUESTA STAGING
                  </div>
                  
                  {/* Imagen de 'después' aparece primero (handle a la izquierda) */}
                  <ReactCompareSlider
                    position={0}
                    itemOne={<ReactCompareSliderImage src={activeRoom.before} />}
                    itemTwo={<ReactCompareSliderImage src={activeRoom.after} />}
                    className="h-full w-full"
                  />
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key={activeRoom.id + "-vid"}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="bg-stone-950 shadow-2xl overflow-hidden aspect-video border-[15px] border-white"
              >
                <video key={activeRoom.videoUrl} controls autoPlay className="w-full h-full object-cover" src={activeRoom.videoUrl} />
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </main>

      <footer className="text-center p-20 text-stone-400 text-[9px] font-bold tracking-[0.3em] uppercase">
        Digital Experience by Mariana Hagerman • {brandConfig.agentName}
      </footer>
    </div>
  );
};

export default PropertyVisualizer;
