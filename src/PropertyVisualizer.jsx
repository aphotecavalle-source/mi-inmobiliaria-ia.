
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  MapPin, 
  ChevronRight, 
  Info, 
  X, 
  Maximize2,
  Tag
} from 'lucide-react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const PropertyVisualizer = ({ propertyData, alRegresar }) => {
  const [showFicha, setShowFicha] = useState(false);
  const [showZoomModal, setShowZoomModal] = useState(false);
  const [viewMode, setViewMode] = useState('images');
  
  const [activeRoom, setActiveRoom] = useState(propertyData?.rooms?.[0] || null);

  const mainColor = "#87947c"; // Sage

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hola, me interesa la propiedad "${propertyData.title}" (ID: ${propertyData.refId}).`);
    window.open(`https://wa.me/${propertyData.agentPhone}?text=${message}`, '_blank');
  };

  if (!activeRoom) return <div className="p-20 text-center text-stone-400 font-bold tracking-widest">CARGANDO...</div>;

  return (
    <div className="min-h-screen bg-[#f8faf9] text-[#2a2a2a] pb-32 relative text-left" style={{ fontFamily: 'var(--fuente-sans)' }}>
      
      {/* MODAL FICHA TÉCNICA */}
      <AnimatePresence>
        {showFicha && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[500] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setShowFicha(false)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white p-10 max-w-lg w-full shadow-2xl relative rounded-none" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setShowFicha(false)} className="absolute top-4 right-4 text-stone-400 hover:text-black"><X size={24} /></button>
              <h2 className="editorial-text text-3xl mb-2">{propertyData.title}</h2>
              <p style={{ color: mainColor }} className="font-bold text-xl mb-6">{propertyData.precio}</p>
              <div className="grid grid-cols-2 gap-6 mb-8 border-y border-stone-100 py-6 text-sm">
                <div><p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1">Terreno</p>{propertyData.detalles?.terreno}</div>
                <div><p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1">Construcción</p>{propertyData.detalles?.construccion}</div>
                <div><p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1">Recámaras</p>{propertyData.detalles?.recamaras}</div>
                <div><p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1">Baños</p>{propertyData.detalles?.baños}</div>
              </div>
              <p className="text-sm text-stone-500 italic leading-relaxed">"{propertyData.detalles?.descripcion}"</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HEADER REDISEÑADO CON EL NUEVO ORDEN */}
      <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-stone-100 p-6 md:p-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div onClick={alRegresar} className="cursor-pointer group flex-1">
              {/* TÍTULO MAXIMIZADO */}
              <h1 className="editorial-text text-5xl md:text-7xl group-hover:opacity-60 transition-opacity uppercase tracking-tighter leading-none mb-6">
                {propertyData.title}
              </h1>
              
              {/* LÍNEA DE METADATOS: UBICACIÓN | ID | AGENTE */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-stone-400">
                <span className="flex items-center gap-1.5"><MapPin size={12} /> {propertyData.location}</span>
                <span className="text-stone-200">|</span>
                <span className="flex items-center gap-1.5"><Tag size={12} /> ID: {propertyData.refId}</span>
                <span className="text-stone-200">|</span>
                <span style={{ color: mainColor }}>AGENTE: {propertyData.agentName}</span>
              </div>
            </div>

            <div className="flex flex-col items-end gap-6 w-full md:w-auto">
              <button onClick={() => setShowFicha(true)} className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-stone-500 hover:text-black transition-colors">
                 <Info size={14} /> FICHA TÉCNICA
              </button>
              
              <div className="flex bg-stone-100 p-1 border border-stone-200 w-full md:w-auto">
                <button onClick={() => setViewMode('images')} className={`flex-1 md:flex-none px-8 py-2.5 text-[10px] tracking-widest transition-all ${viewMode === 'images' ? 'bg-white shadow-sm font-bold' : 'text-stone-400'}`} style={viewMode === 'images' ? { color: mainColor } : {}}>FOTOS</button>
                <button onClick={() => setViewMode('video')} className={`flex-1 md:flex-none px-8 py-2.5 text-[10px] tracking-widest transition-all ${viewMode === 'video' ? 'bg-white shadow-sm font-bold' : 'text-stone-400'}`} style={viewMode === 'video' ? { color: mainColor } : {}}>VIDEO</button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-4 gap-12 mt-8">
        <aside className="order-2 lg:order-1 lg:col-span-1">
          <h3 className="editorial-text text-2xl mb-8 text-stone-800">Espacios</h3>
          <div className="grid grid-cols-1 gap-1">
            {propertyData.rooms.map((room) => (
              <button 
                key={room.id} 
                onClick={() => { setActiveRoom(room); setViewMode('images'); }} 
                className={`w-full text-left p-5 border-b border-stone-100 transition-all ${activeRoom.id === room.id ? 'bg-white shadow-md font-bold' : 'text-stone-500 hover:text-stone-900'}`}
                style={activeRoom.id === room.id ? { color: mainColor, borderLeft: `4px solid ${mainColor}` } : {}}
              >
                <div className="flex justify-between items-center">
                  <span className="text-[13px] tracking-widest uppercase font-medium">{room.name}</span>
                  <ChevronRight size={14} />
                </div>
              </button>
            ))}
          </div>
        </aside>

        <section className="order-1 lg:order-2 lg:col-span-3">
          <AnimatePresence mode="wait">
            {viewMode === 'images' ? (
              <motion.div key={activeRoom.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white p-3 shadow-2xl border border-stone-100 relative">
                <button onClick={() => setShowZoomModal(true)} className="absolute top-20 left-8 z-20 bg-white/95 p-3 rounded-full shadow-lg transition-all hover:scale-110" style={{ color: mainColor }}>
                  <Maximize2 size={20} />
                </button>
                <p className="text-[11px] text-center mb-6 font-bold tracking-[0.3em] uppercase" style={{ color: mainColor }}>
                  ← Un espacio pensado para ti
                </p>
                <div className="relative aspect-video w-full bg-[#f8f8f8] overflow-hidden">
                  <ReactCompareSlider position={99} itemOne={<ReactCompareSliderImage src={activeRoom.before} />} itemTwo={<ReactCompareSliderImage src={activeRoom.after} />} />
                </div>
              </motion.div>
            ) : (
              <motion.div key={activeRoom.id + "vid"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-black aspect-video border-[12px] border-white shadow-2xl">
                <video key={activeRoom.video} src={activeRoom.video} controls autoPlay muted playsInline className="w-full h-full object-contain" />
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </main>

      {/* BOTÓN WHATSAPP */}
      <button onClick={handleWhatsApp} style={{ backgroundColor: mainColor }} className="fixed bottom-8 right-8 z-[100] text-white p-6 md:px-12 md:py-6 shadow-2xl flex items-center gap-4 active:scale-95 transition-transform hover:brightness-90 tracking-[0.2em] font-bold text-[12px] uppercase">
        <MessageCircle size={24} fill="currentColor" /> 
        <span className="hidden md:inline">Contactar Agente</span>
      </button>

      {/* ZOOM MODAL */}
      <AnimatePresence>
        {showZoomModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[600] bg-black/95 flex items-center justify-center p-4" onClick={() => setShowZoomModal(false)}>
            <button className="absolute top-8 right-8 text-white"><X size={40} /></button>
            <img src={activeRoom.after} className="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl" alt="Zoom" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PropertyVisualizer;
