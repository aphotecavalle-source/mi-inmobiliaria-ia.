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
  Maximize2 
} from 'lucide-react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const PropertyVisualizer = ({ propertyData, alRegresar }) => {
  const [showFicha, setShowFicha] = useState(false);
  const [showZoomModal, setShowZoomModal] = useState(false);
  const [viewMode, setViewMode] = useState('images');
  
  // Seguridad: Seleccionamos la primera habitación disponible
  const [activeRoom, setActiveRoom] = useState(propertyData?.rooms?.[0] || null);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hola, me interesa la propiedad "${propertyData.title}" (ID: ${propertyData.refId}).`);
    window.open(`https://wa.me/${propertyData.agentPhone}?text=${message}`, '_blank');
  };

  if (!activeRoom) return <div className="p-20 text-center">Cargando datos de la propiedad...</div>;

  return (
    <div className="min-h-screen bg-[#e2ede7] text-[#2a2a2a] pb-32 relative text-left" style={{ fontFamily: 'var(--fuente-sans)' }}>
      
      {/* --- MODAL FICHA TÉCNICA (CORREGIDO) --- */}
      <AnimatePresence>
        {showFicha && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[500] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setShowFicha(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white p-10 max-w-lg w-full shadow-2xl relative rounded-none text-left"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setShowFicha(false)} 
                className="absolute top-4 right-4 text-stone-400 hover:text-black"
              >
                <X size={24} />
              </button>
              
              <h2 className="editorial-text text-3xl mb-2">{propertyData.title}</h2>
              <p className="text-[#c5b097] font-bold text-xl mb-6">{propertyData.precio}</p>
              
              <div className="grid grid-cols-2 gap-6 mb-8 border-y border-stone-100 py-6 text-sm">
                <div>
                  <p className="text-[9px] font-bold text-stone-400 uppercase tracking-widest mb-1">Terreno</p>
                  {propertyData.detalles?.terreno || "N/A"}
                </div>
                <div>
                  <p className="text-[9px] font-bold text-stone-400 uppercase tracking-widest mb-1">Construcción</p>
                  {propertyData.detalles?.construccion || "N/A"}
                </div>
                <div>
                  <p className="text-[9px] font-bold text-stone-400 uppercase tracking-widest mb-1">Habitaciones</p>
                  {propertyData.detalles?.recamaras || "0"}
                </div>
                <div>
                  <p className="text-[9px] font-bold text-stone-400 uppercase tracking-widest mb-1">Baños</p>
                  {propertyData.detalles?.baños || "0"}
                </div>
              </div>
              
              <p className="text-sm text-stone-500 italic leading-relaxed">
                "{propertyData.detalles?.descripcion || "Sin descripción disponible."}"
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- MODAL ZOOM --- */}
      <AnimatePresence>
        {showZoomModal && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[600] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setShowZoomModal(false)}
          >
            <button className="absolute top-6 right-6 text-white"><X size={32} /></button>
            <motion.img 
              initial={{ scale: 0.9 }} animate={{ scale: 1 }}
              src={activeRoom.after} 
              className="max-h-full max-w-full object-contain shadow-2xl"
              alt="Zoom"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HEADER --- */}
      <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-stone-100 p-6">
        <div className="max-w-5xl mx-auto flex flex-col gap-6">
          <div className="flex items-center text-[10px] font-bold tracking-widest uppercase border-b border-stone-50 pb-4">
             <span style={{ color: '#c5b097' }}>{propertyData.agentName}</span>
             
             {/* BOTÓN DE FICHA TÉCNICA */}
             <button 
               onClick={() => setShowFicha(true)} 
               className="ml-auto flex items-center gap-2 text-stone-400 hover:text-black transition-colors"
             >
               <Info size={12} /> FICHA TÉCNICA
             </button>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div onClick={alRegresar} className="cursor-pointer group">
              <h1 className="editorial-text text-3xl md:text-4xl group-hover:opacity-60 transition-opacity">
                {propertyData.title}
              </h1>
              <p className="text-stone-400 text-[9px] font-bold tracking-widest uppercase">
                <MapPin size={10} className="inline mr-1" /> {propertyData.location}
              </p>
            </div>
            
            <div className="flex bg-stone-100 p-1 border border-stone-200">
              <button 
                onClick={() => setViewMode('images')} 
                className={`px-5 py-2 text-[9px] tracking-widest transition-all ${viewMode === 'images' ? 'bg-white shadow-sm font-bold text-[#c5b097]' : 'text-stone-400'}`}
              >
                FOTOS
              </button>
              <button 
                onClick={() => setViewMode('video')} 
                className={`px-5 py-2 text-[9px] tracking-widest transition-all ${viewMode === 'video' ? 'bg-white shadow-sm font-bold text-[#c5b097]' : 'text-stone-400'}`}
              >
                VIDEO
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-4 gap-8 mt-4">
        
        {/* MENÚ DE ESPACIOS */}
        <aside className="order-2 lg:order-1 lg:col-span-1">
          <h3 className="editorial-text text-xl mb-6">Espacios</h3>
          <div className="grid grid-cols-1 gap-2">
            {propertyData.rooms.map((room) => (
              <button 
                key={room.id} 
                onClick={() => { setActiveRoom(room); setViewMode('images'); }} 
                className={`w-full text-left p-4 border-b border-stone-200 transition-all ${activeRoom.id === room.id ? 'bg-white shadow-sm font-bold text-[#c5b097]' : 'text-stone-400'}`}
              >
                <div className="flex justify-between items-center">
                  <span className="text-[9px] tracking-widest uppercase">{room.name}</span>
                  <ChevronRight size={12} />
                </div>
              </button>
            ))}
          </div>
        </aside>

        {/* VISUALIZADOR */}
        <section className="order-1 lg:order-2 lg:col-span-3">
          <AnimatePresence mode="wait">
            {viewMode === 'images' ? (
              <motion.div 
                key={activeRoom.id} 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="bg-white p-2 shadow-xl border relative"
              >
                <button 
                  onClick={() => setShowZoomModal(true)} 
                  className="absolute top-16 right-5 z-20 bg-white/80 p-2 rounded-full shadow-md hover:text-[#c5b097] transition-all"
                >
                  <Maximize2 size={18} />
                </button>
                <p className="text-[9px] text-center mb-4 text-stone-400 italic tracking-widest uppercase">
                  Desliza para ver el estado actual
                </p>
                <div className="relative aspect-video w-full bg-[#f8f8f8]">
                  <ReactCompareSlider 
                    position={0} 
                    itemOne={<ReactCompareSliderImage src={activeRoom.before} />} 
                    itemTwo={<ReactCompareSliderImage src={activeRoom.after} />} 
                  />
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key={activeRoom.id + "vid"} 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="bg-black aspect-video border-[10px] border-white shadow-xl"
              >
                <video src={activeRoom.videoUrl} controls autoPlay muted playsInline className="w-full h-full object-contain" />
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </main>

      {/* BOTÓN WHATSAPP */}
      <button 
        onClick={handleWhatsApp} 
        style={{ backgroundColor: '#c5b097' }} 
        className="fixed bottom-6 right-6 z-[100] text-white p-4 md:px-8 md:py-5 shadow-2xl flex items-center gap-3 transition-transform active:scale-95"
      >
        <MessageCircle size={22} fill="currentColor" /> 
        <span className="hidden md:inline font-bold text-[11px] tracking-widest uppercase">Contactar Agente</span>
      </button>

    </div>
  );
};

export default PropertyVisualizer;
