import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, MapPin, ChevronRight, ChevronLeft, Info, X, Maximize2, Tag, Layout, ArrowLeft
} from 'lucide-react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const PropertyVisualizer = ({ propertyData, alRegresar }) => {
  const [showFicha, setShowFicha] = useState(false);
  const [showPlanta, setShowPlanta] = useState(false);
  const [showZoomModal, setShowZoomModal] = useState(false);
  const [viewMode, setViewMode] = useState('images');
  const [activeRoom, setActiveRoom] = useState(propertyData?.rooms?.[0] || null);

  const mainColor = "#87947c"; // Sage Muted
  const softBg = "#e9ede6";    // Earthy Sage profundo
  const darkGray = "#292524";  // stone-800

  const handlePlantaClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    alert(`Coordenadas:\ntop: "${y.toFixed(1)}%", left: "${x.toFixed(1)}%"`);
  };

  const seleccionarDesdePlanta = (room) => {
    setActiveRoom(room);
    setShowZoomModal(true);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hola, me interesa la propiedad "${propertyData.title}" (ID: ${propertyData.refId}).`);
    window.open(`https://wa.me/${propertyData.agentPhone}?text=${message}`, '_blank');
  };

  const handleMapsClick = () => {
    if (propertyData.googleMapsLink) {
      window.open(propertyData.googleMapsLink, '_blank');
    } else {
      alert("Enlace de mapa no disponible.");
    }
  };

  if (!activeRoom) return <div className="p-20 text-center text-stone-400 font-bold uppercase tracking-widest">Cargando...</div>;

  return (
    <div className="min-h-screen relative text-left flex flex-col" style={{ backgroundColor: softBg, fontFamily: 'var(--fuente-sans)' }}>
      
      {/* --- MODALES --- */}
      <AnimatePresence>
        {showPlanta && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[600] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setShowPlanta(false)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white p-6 md:p-8 max-w-lg w-full shadow-2xl relative rounded-none text-center" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setShowPlanta(false)} className="absolute top-4 right-4 text-stone-300 hover:text-black transition-colors"><X size={24} /></button>
              <h2 className="editorial-text text-xl mb-1 tracking-tight">Plano de Distribución</h2>
              <p className="text-[7px] tracking-[0.3em] text-stone-400 uppercase mb-6 font-bold">Selecciona un área para ver el resultado final</p>
              <div className="relative inline-block border border-stone-100 bg-white shadow-sm cursor-crosshair" onClick={handlePlantaClick}>
                <img src={propertyData.plantaImagen} alt="Planta" className="max-w-full max-h-[50vh] w-auto opacity-95" />
                {propertyData.rooms.map((room) => (
                  <div key={`map-${room.id}`} onClick={(e) => { e.stopPropagation(); seleccionarDesdePlanta(room); }} className="absolute cursor-pointer group flex items-center justify-center border border-dashed border-stone-200 hover:border-solid hover:bg-black/10 transition-all" style={{ top: room.posPlanta?.top || '0%', left: room.posPlanta?.left || '0%', width: room.posPlanta?.width || '15%', height: room.posPlanta?.height || '15%' }}>
                    <span className="opacity-0 group-hover:opacity-100 bg-white text-[7px] px-1.5 py-0.5 font-bold shadow-md z-10 pointer-events-none uppercase border border-stone-100 whitespace-nowrap">{room.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showZoomModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[700] bg-black/95 flex items-center justify-center p-4" onClick={() => setShowZoomModal(false)}>
            <button className="absolute top-8 right-8 text-white"><X size={36} /></button>
            <motion.div initial={{ scale: 0.8, y: 20 }} animate={{ scale: 1, y: 0 }} className="relative" onClick={(e) => e.stopPropagation()}>
              <p className="absolute -top-10 left-0 text-white/70 text-[10px] tracking-[0.4em] uppercase font-bold">{activeRoom.name}</p>
              <img src={activeRoom.after} className="max-h-[85vh] max-w-[90vw] object-contain shadow-2xl border border-white/10" alt="Zoom" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showFicha && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[500] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setShowFicha(false)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white p-12 max-w-lg w-full shadow-2xl relative rounded-none border-t-4" style={{ borderColor: mainColor }} onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setShowFicha(false)} className="absolute top-6 right-6 text-stone-300 hover:text-black"><X size={24} /></button>
              <h2 className="editorial-text text-4xl mb-2 tracking-tight">{propertyData.title}</h2>
              <p style={{ color: mainColor }} className="font-bold text-2xl mb-8">{propertyData.precio}</p>
              <div className="grid grid-cols-2 gap-y-8 gap-x-12 mb-10 border-y border-stone-100 py-8">
                <div className="border-l border-stone-200 pl-4"><p className="text-[9px] font-bold text-stone-400 mb-1 tracking-widest uppercase">Terreno</p><span className="text-stone-800 font-medium">{propertyData.detalles?.terreno}</span></div>
                <div className="border-l border-stone-200 pl-4"><p className="text-[9px] font-bold text-stone-400 mb-1 tracking-widest uppercase">Construcción</p><span className="text-stone-800 font-medium">{propertyData.detalles?.construccion}</span></div>
                <div className="border-l border-stone-200 pl-4"><p className="text-[9px] font-bold text-stone-400 mb-1 tracking-widest uppercase">Recámaras</p><span className="text-stone-800 font-medium">{propertyData.detalles?.recamaras}</span></div>
                <div className="border-l border-stone-200 pl-4"><p className="text-[9px] font-bold text-stone-400 mb-1 tracking-widest uppercase">Baños</p><span className="text-stone-800 font-medium">{propertyData.detalles?.baños}</span></div>
              </div>
              <p className="text-[13px] text-stone-600 italic leading-relaxed font-light">"{propertyData.detalles?.descripcion}"</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HEADER --- */}
      <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-stone-200 p-4 md:px-12 md:pt-12 md:pb-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex-1 flex flex-col gap-4">
            <div onClick={alRegresar} className="cursor-pointer group">
              <h1 className="editorial-text text-3xl md:text-5xl group-hover:opacity-60 transition-opacity tracking-tight leading-tight mb-5 text-stone-900">
                {propertyData.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] md:text-[11px] font-bold tracking-[0.25em] uppercase text-stone-800">
                <button onClick={(e) => { e.stopPropagation(); handleMapsClick(); }} className="flex items-center gap-1.5 group transition-all hover:text-[#87947c]">
                  <MapPin size={12} strokeWidth={2} /> 
                  <span className="border-b border-stone-300 group-hover:border-[#87947c] transition-all">{propertyData.location}</span>
                </button>
                <span className="text-stone-300">|</span>
                <span className="flex items-center gap-1.5 group transition-all hover:text-[#87947c]">
                  <Tag size={12} strokeWidth={2} /> <span>ID: {propertyData.refId}</span>
                </span>
                <span className="text-stone-300">|</span>
                <button onClick={(e) => { e.stopPropagation(); handleWhatsApp(); }} className="flex items-center gap-2 group transition-all hover:text-[#87947c]">
                  <span className="font-bold">AGENTE:</span> 
                  <span className="border-b border-stone-300 group-hover:border-[#87947c] transition-all">{propertyData.agentName}</span>
                  <MessageCircle size={15} strokeWidth={2} fill="none" className="ml-1 transition-transform group-hover:scale-110" />
                </button>
              </div>
            </div>

            <div className="flex gap-10">
              <motion.button 
                onClick={() => setShowPlanta(true)} 
                animate={{ scale: [1, 1.1, 1], opacity: [1, 0.7, 1] }} 
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} 
                className="flex items-center gap-2 text-[10px] md:text-[11px] font-bold tracking-[0.25em] uppercase text-stone-800 hover:text-[#87947c] transition-colors"
              >
                 <Layout size={15} strokeWidth={2} /> Ver Planta
              </motion.button>
              <motion.button 
                onClick={() => setShowFicha(true)} 
                animate={{ scale: [1, 1.1, 1], opacity: [1, 0.7, 1] }} 
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} 
                className="flex items-center gap-2 text-[10px] md:text-[11px] font-bold tracking-[0.25em] uppercase text-stone-800 hover:text-[#87947c] transition-colors"
              >
                 <Info size={15} strokeWidth={2} /> Ficha Técnica
              </motion.button>
            </div>
          </div>

          {/* SELECTOR FOTOS/VIDEO CON HOVER SAGE */}
          <div className="flex bg-stone-200/50 p-1 border border-stone-200 shadow-sm">
            <button 
              onClick={() => setViewMode('images')} 
              className={`px-10 py-3 text-[10px] tracking-widest transition-all ${
                viewMode === 'images' 
                  ? 'bg-white shadow-sm font-bold text-[#87947c]' 
                  : 'text-stone-500 hover:text-[#87947c]'
              }`}
            >
              FOTOS
            </button>
            <button 
              onClick={() => setViewMode('video')} 
              className={`px-10 py-3 text-[10px] tracking-widest transition-all ${
                viewMode === 'video' 
                  ? 'bg-white shadow-sm font-bold text-[#87947c]' 
                  : 'text-stone-500 hover:text-[#87947c]'
              }`}
            >
              VIDEO
            </button>
          </div>
        </div>
      </header>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <main className="flex-1 p-6 lg:p-12 overflow-y-auto flex items-start">
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-start mt-10">
          
          <aside className="lg:col-span-1 hidden lg:block sticky top-0">
            <h3 className="editorial-text text-2xl mb-8 text-stone-900 border-b border-stone-300 pb-2 text-left">Espacios</h3>
            <div className="grid grid-cols-1 gap-1">
              {propertyData.rooms.map((room) => (
                <button 
                  key={room.id} 
                  onClick={() => { setActiveRoom(room); setViewMode('images'); }} 
                  className={`w-full p-5 transition-all duration-500 ${activeRoom.id === room.id ? 'bg-white shadow-md border-l-4' : 'text-stone-800 hover:text-stone-900 font-medium hover:bg-white/40'}`} 
                  style={activeRoom.id === room.id ? { color: mainColor, borderColor: mainColor } : {}}
                >
                  <div className="flex justify-between items-center w-full">
                    <span className="text-[13px] tracking-widest uppercase text-left">{room.name}</span>
                    <ChevronRight size={14} className={activeRoom.id === room.id ? 'opacity-100' : 'opacity-30'} />
                  </div>
                </button>
              ))}
            </div>
          </aside>

          <section className="lg:col-span-4 flex flex-col items-center w-full">
            <AnimatePresence mode="wait">
              {viewMode === 'images' ? (
                <motion.div 
                  key={activeRoom.id} 
                  initial={{ opacity: 0, scale: 0.98 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  exit={{ opacity: 0 }} 
                  transition={{ duration: 0.8 }} 
                  className="bg-white shadow-2xl border border-stone-200/50 relative w-full max-w-4xl"
                >
                  <div className="flex items-center justify-center px-12 py-10 relative">
                    <button onClick={() => setShowZoomModal(true)} className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-stone-50/80 p-2 rounded-full shadow-sm transition-all hover:scale-110 hover:bg-white" style={{ color: darkGray }}>
                      <Maximize2 size={16} />
                    </button>

                    <div className="flex items-center gap-5">
                      <motion.div animate={{ x: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="flex items-center">
                        <ArrowLeft size={16} style={{ color: mainColor }} strokeWidth={1.5} />
                      </motion.div>
                      <motion.p animate={{ opacity: [0.8, 1, 0.8] }} transition={{ duration: 4, repeat: Infinity }} className="editorial-text italic text-lg md:text-xl lg:text-2xl text-stone-600 lowercase tracking-wide text-center">
                        “creando un estilo de vida en cada espacio”
                      </motion.p>
                    </div>
                  </div>
                  
                  <div className="px-5 pb-5 md:px-6 md:pb-6">
                    <div className="relative aspect-video w-full bg-stone-100 overflow-hidden shadow-inner border border-stone-200/50">
                      <ReactCompareSlider position={100} handle={<div className="relative h-full w-1 bg-white cursor-ew-resize"><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2.5 shadow-2xl flex items-center justify-center"><ChevronLeft size={22} className="text-stone-400" /><ChevronRight size={22} className="text-stone-400" /></div></div>} itemOne={<ReactCompareSliderImage src={activeRoom.before} />} itemTwo={<ReactCompareSliderImage src={activeRoom.after} />} />
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div key={activeRoom.id + "vid"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-black aspect-video border-[8px] border-white shadow-2xl w-full max-w-4xl">
                  <video key={activeRoom.video} src={activeRoom.video} controls autoPlay muted playsInline className="w-full h-full object-contain" />
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PropertyVisualizer;
