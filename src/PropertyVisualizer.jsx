import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  MapPin, 
  User, 
  Image as ImageIcon, 
  Play, 
  ChevronRight, 
  Info,
  X,
  Hash
} from 'lucide-react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const PropertyVisualizer = () => {
  const [showFicha, setShowFicha] = useState(false);

  const brandConfig = {
    agentName: "REBECA QUINTANILLA",
    agentPhone: "525512345678", 
    brandColor: "#c5b097", 
  };

  const propertyData = {
    title: "Casa en el Bosque",
    location: "Valle de Bravo, México",
    refId: "VDB-10524",
    precio: "$14,500,000 MXN",
    detalles: {
      terreno: "1,200 m²",
      construccion: "450 m²",
      recamaras: "4",
      baños: "4.5",
      estacionamientos: "3",
      descripcion: "Residencia de lujo con acabados naturales, vistas panorámicas al bosque y diseño de iluminación inteligente. Espacios abiertos que integran el interior con la naturaleza."
    },
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
    const message = encodeURIComponent(`Hola ${brandConfig.agentName}, me interesa la propiedad "${propertyData.title}" (ID: ${propertyData.refId}).`);
    window.open(`https://wa.me/${brandConfig.agentPhone}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#e2ede7] text-[#2a2a2a] pb-20" style={{ fontFamily: 'var(--fuente-sans)' }}>
      
      {/* MODAL FICHA TÉCNICA */}
      <AnimatePresence>
        {showFicha && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setShowFicha(false)}
          >
            <motion.div 
              initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }}
              className="bg-white p-10 max-w-lg w-full shadow-2xl relative"
              style={{ borderRadius: '0px' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setShowFicha(false)} className="absolute top-4 right-4 text-stone-400 hover:text-black">
                <X size={24} />
              </button>
              
              <h2 className="editorial-text text-3xl mb-2">{propertyData.title}</h2>
              <p className="text-[#c5b097] font-bold text-xl mb-6">{propertyData.precio}</p>
              
              <div className="grid grid-cols-2 gap-6 mb-8 border-y border-stone-100 py-6">
                <div>
                  <p className="text-[9px] font-bold text-stone-400 uppercase tracking-[0.2em] mb-1">Terreno</p>
                  <p className="font-medium text-sm">{propertyData.detalles.terreno}</p>
                </div>
                <div>
                  <p className="text-[9px] font-bold text-stone-400 uppercase tracking-[0.2em] mb-1">Construcción</p>
                  <p className="font-medium text-sm">{propertyData.detalles.construccion}</p>
                </div>
                <div>
                  <p className="text-[9px] font-bold text-stone-400 uppercase tracking-[0.2em] mb-1">Habitaciones</p>
                  <p className="font-medium text-sm">{propertyData.detalles.recamaras}</p>
                </div>
                <div>
                  <p className="text-[9px] font-bold text-stone-400 uppercase tracking-[0.2em] mb-1">Baños</p>
                  <p className="font-medium text-sm">{propertyData.detalles.baños}</p>
                </div>
              </div>
              
              <p className="text-sm text-stone-500 leading-relaxed italic">
                "{propertyData.detalles.descripcion}"
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón WhatsApp */}
      <motion.button
        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
        onClick={handleWhatsApp}
        style={{ backgroundColor: 'var(--color-arena)' }}
        className="fixed bottom-6 right-6 z-[100] flex items-center gap-3 text-white px-6 py-4 rounded-full shadow-2xl"
      >
        <MessageCircle size={20} fill="currentColor" />
        <span className="font-bold text-[10px] tracking-widest uppercase">WhatsApp Agente</span>
      </motion.button>

      <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-stone-100 p-6">
        <div className="max-w-6xl mx-auto flex flex-col gap-6">
          
          {/* LÍNEA SUPERIOR: Agente, ID y Ficha */}
          <div className="flex flex-wrap items-center gap-4 md:gap-8 text-[10px] font-bold tracking-[0.2em] uppercase border-b border-stone-50 pb-4">
            <div className="flex items-center" style={{ color: 'var(--color-arena)' }}>
              <User size={12} className="mr-2" /> {brandConfig.agentName}
            </div>
            <div className="flex items-center text-stone-400">
              <Hash size={12} className="mr-1" /> ID: {propertyData.refId}
            </div>
            <button 
              onClick={() => setShowFicha(true)}
              className="flex items-center gap-2 text-stone-600 hover:text-black transition-colors ml-auto"
            >
              <Info size={12} /> FICHA TÉCNICA
            </button>
          </div>

          {/* LÍNEA PRINCIPAL: Título y Controles */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="editorial-text text-4xl md:text-5xl mb-1">{propertyData.title}</h1>
              <p className="flex items-center text-stone-400 text-[10px] font-bold tracking-widest uppercase">
                <MapPin size={10} className="mr-2" /> {propertyData.location}
              </p>
            </div>
            
            <div className="flex bg-stone-100 p-1 border border-stone-200">
              <button 
                onClick={() => setViewMode('images')}
                className={`px-6 py-2.5 flex items-center text-[10px] tracking-widest transition-all ${
                  viewMode === 'images' ? 'bg-white shadow-sm font-bold' : 'font-medium text-stone-400'
                }`}
                style={{ color: viewMode === 'images' ? 'var(--color-arena)' : '' }}
              >
                <ImageIcon size={14} className="mr-2" /> FOTOS 
              </button>
              <button 
                onClick={() => setViewMode('video')}
                className={`px-6 py-2.5 flex items-center text-[10px] tracking-widest transition-all ${
                  viewMode === 'video' ? 'bg-white shadow-sm font-bold' : 'font-medium text-stone-400'
                }`}
                style={{ color: viewMode === 'video' ? 'var(--color-arena)' : '' }}
              >
                <Play size={14} className="mr-2" /> VIDEO 
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-4 gap-12 mt-8">
        <aside className="order-2 lg:order-1 lg:col-span-1">
          <h3 className="editorial-text text-2xl mb-6">Explorar Espacios</h3>
          <div className="grid grid-cols-1 gap-2">
            {propertyData.rooms.map((room) => (
              <button
                key={room.id}
                onClick={() => { setActiveRoom(room); setViewMode('images'); }}
                className={`w-full text-left p-5 transition-all border-b border-stone-200 ${
                  activeRoom.id === room.id ? 'bg-white shadow-sm' : 'bg-transparent'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className={`text-[10px] tracking-widest uppercase ${activeRoom.id === room.id ? 'font-bold' : 'font-medium text-stone-400'}`}
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
                  <p className="text-[9px] font-bold tracking-[0.3em] text-stone-400 uppercase">
                    Desliza para ver el estado actual de la propiedad
                  </p>
                </div>
                
                <div className="relative overflow-hidden h-[400px] md:h-[650px]">
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

      {/* FOOTER ACTUALIZADO CON TU NOMBRE */}
      <footer className="text-center p-20 text-stone-400 text-[9px] font-bold tracking-[0.3em] uppercase">
        © 2026 MARIANA HAGERMAN
      </footer>
    </div>
  );
};

export default PropertyVisualizer;
