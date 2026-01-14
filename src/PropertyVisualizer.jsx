import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  MapPin, 
  ChevronRight, 
  Info, 
  X, 
  Maximize2 
} from 'lucide-react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const PropertyVisualizer = ({ propertyData, alRegresar }) => {
  const [showFicha, setShowFicha] = useState(false);
  const [showZoomModal, setShowZoomModal] = useState(false);
  const [viewMode, setViewMode] = useState('images');
  
  const [activeRoom, setActiveRoom] = useState(propertyData?.rooms?.[0] || null);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hola, me interesa la propiedad "${propertyData.title}" (ID: ${propertyData.refId}).`);
    window.open(`https://wa.me/${propertyData.agentPhone}?text=${message}`, '_blank');
  };

  if (!activeRoom) return <div className="p-20 text-center text-stone-500">Cargando datos...</div>;

  return (
    <div className="min-h-screen bg-[#f4f7f5] text-[#2a2a2a] pb-32 relative text-left" style={{ fontFamily: 'var(--fuente-sans)' }}>
      
      {/* --- MODAL FICHA TÉCNICA --- */}
      <AnimatePresence>
        {showFicha && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[500] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setShowFicha(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white p-10 max-w-lg w-full shadow-2xl relative rounded-none text-left"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setShowFicha(false)} className="absolute top-4 right-4 text-stone-400 hover:text-black">
                <X size={24} />
              </button>
              <h2 className="editorial-text text-3xl mb-2">{propertyData.title}</h2>
              <p className="text-[#c5b097] font-bold text-xl mb-6">{propertyData.precio}</p>
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

      {/* --- HEADER --- */}
      <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-stone-100 p-6">
        <div className="max-w-5xl mx-auto flex flex-col gap-6">
          <div className="flex items-center text-[11px] font-bold tracking-widest uppercase border-b border-stone-50 pb-4">
             <span style={{ color: '#c5b097' }}>{propertyData.agentName}</span>
             <button onClick={() => setShowFicha(true)} className="ml-auto flex items-center gap-2 text-stone-500 hover:text-black transition-colors">
               <Info size={14} /> FICHA TÉCNICA
             </button>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div onClick={alRegresar} className="cursor-pointer group">
              <h1 className="editorial-text text-3xl md:text-4xl group-hover:opacity-60 transition-opacity uppercase tracking-tight">
                {propertyData.title}
              </h1>
              <p className="text-stone-400 text-[10px] font-bold tracking-widest uppercase mt-1">
                <MapPin size={10} className="inline mr-1" /> {propertyData.location}
              </p>
            </div>
            <div className="flex bg-stone-100 p-1 border border-stone-200">
              <button onClick={() => setViewMode('images')} className={`px-5 py-2 text-[10px] tracking-widest transition-all ${viewMode === 'images' ? 'bg-white shadow-sm font-bold text-[#c5b097]' : 'text-stone-400'}`}>FOTOS</button>
              <button onClick={() => setViewMode('video')} className={`px-5 py-2 text-[10px] tracking-widest transition-all ${viewMode === 'video' ? 'bg-white shadow-sm font-bold text-[#c5b097]' : 'text-stone-400'}`}>VIDEO</button>
            </div>
          </div>
        </div>
      </header>

      {/* --- CONTENIDO --- */}
      <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-4 gap-8 mt-4">
        
        {/* ASIDE - ESPACIOS */}
        <aside className="order-2 lg:order-1 lg:col-span-1">
          <h3 className="editorial-text text-2xl mb-6 text-stone-800">Espacios</h3>
          <div className="grid grid-cols-1 gap-2">
            {propertyData.rooms.map((room) => (
              <button 
                key={room.id} 
                onClick={() => { setActiveRoom(room); setViewMode('images'); }} 
                className={`w-full text-left p-4 border-b border-stone-200 transition-all ${activeRoom.id === room.id ? 'bg-white shadow-sm font-bold text-[#c5b097]' : 'text-stone-600 hover:text-stone-900'}`}
              >
                <div className="flex justify-between items-center">
                  <span className="text-[12px] tracking-widest uppercase font-medium">{room.name}</span>
                  <ChevronRight size={14} />
                </div>
              </button>
            ))}
          </div>
        </aside>

        {/* SECCIÓN VISUALIZADOR */}
        <section className="order-1 lg:order-2 lg:col-span-3">
          <AnimatePresence mode="wait">
            {viewMode === 'images' ? (
              <motion.div key={activeRoom.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white p-2 shadow-xl border relative">
                
                {/* BOTÓN ZOOM (MUEVO A LA IZQUIERDA) */}
                <button 
                  onClick={() => setShowZoomModal(true)} 
                  // Cambié 'right-5' por 'left-5' aquí abajo:
                  className="absolute top-16 left-5 z-20 bg-white/80 p-2 rounded-full shadow-md hover:text-[#c5b097] transition-all"
                >
                  <Maximize2 size={18} />
                </button>
                
                <p className="text-[11px] text-center mb-4 text-[#c5b097] font-bold tracking-[0.2em] uppercase">
                  ← Aquí podrías vivir
                </p>

                <div className="relative aspect-video w-full bg-[#f8f8f8]">
                  <ReactCompareSlider 
                    position={99} 
                    itemOne={<ReactCompareSliderImage src={activeRoom.before} />} 
                    itemTwo={<ReactCompareSliderImage src={activeRoom.after} />} 
                  />
                </div>
              </motion.div>
            ) : (
              <motion.div key={activeRoom.id + "vid"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-black aspect-video border-[10px] border-white shadow-xl">
                <video 
                  key={activeRoom.video} 
                  src={activeRoom.video} 
                  controls autoPlay muted playsInline 
                  className="w-full h-full object-contain" 
                />
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </main>

      {/* WHATSAPP */}
      <button onClick={handleWhatsApp} style={{ backgroundColor: '#c5b097' }} className="fixed bottom-6 right-6 z-[100] text-white p-4 md:px-8 md:py-5 shadow-2xl flex items-center gap-3 active:scale-95 transition-transform">
        <MessageCircle size={22} fill="currentColor" /> 
        <span className="hidden md:inline font-bold text-[11px] tracking-widest uppercase">Contactar Agente</span>
      </button>

      {/* MODAL ZOOM */}
      <AnimatePresence>
        {showZoomModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[600] bg-black/95 flex items-center justify-center p-4" onClick={() => setShowZoomModal(false)}>
            <button className="absolute top-6 right-6 text-white"><X size={32} /></button>
            <img src={activeRoom.after} className="max-h-full max-w-full object-contain" alt="Zoom" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PropertyVisualizer;
