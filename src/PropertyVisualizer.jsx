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
    <div className="min-h-screen pb-40 relative text-left" style={{ backgroundColor: softBg, fontFamily: 'var(--fuente-sans)' }}>
      
      {/* MODAL PLANTA INTERACTIVA */}
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

      {/* MODAL ZOOM */}
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

      {/* MODAL FICHA TÉCNICA */}
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
      <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-stone-200 p-6 md:px-12 md:py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-10 pt-2">
            <img src="/fotospropiedades/logo.png" alt="Logo" className="h-12 md:h-14 w-auto object-contain" onError={(e) => e.target.style.display = 'none'} />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div className="flex-1">
              <div onClick={alRegresar} className="cursor-pointer group mb-4">
                <h1 className="editorial-text text-3xl md:text-5xl group-hover:opacity-60 transition-opacity tracking-tight leading-tight mb-3 text-stone-900">{propertyData.title}</h1>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[9px] md:text-[10px] font-bold tracking-[0.25em] uppercase text-stone-700">
                  <button onClick={(e) => { e.stopPropagation(); handleMapsClick(); }} className="flex items-center gap-1.5 group/loc transition-all hover:text-[#87947c]">
                    <MapPin size={12} style={{ color: mainColor }} strokeWidth={2} /> 
                    <span className="border-b border-stone-300 group-hover/loc:border-[#87947c] transition-all">{propertyData.location}</span>
                  </button>
                  <span className="text-stone-300">|</span>
                  <span className="flex items-center gap-1.5"><Tag size={12} className="text-stone-500" strokeWidth={2} /> <span>ID: {propertyData.refId}</span></span>
                  <span className="text-stone-300">|</span>
                  <button onClick={(e) => { e.stopPropagation(); handleWhatsApp(); }} className="flex items-center gap-2 group/agent transition-all hover:text-[#87947c]">
                    <span className="text-stone-500 font-bold">AGENTE:</span> 
                    <span className="border-b border-stone-300 group-hover/agent:border-[#87947c] transition-all">{propertyData.agentName}</span>
                    <MessageCircle size={16} style={{ color: mainColor }} strokeWidth={2} fill="none" className="ml-1 transition-transform group-hover/agent:scale-110" />
                  </button>
                </div>
              </div>

              <div className="flex gap-8">
                <motion.button onClick={() => setShowPlanta(true)} animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="flex items-center gap-2 text-[10px] font-bold tracking-[0.25em] uppercase text-stone-600 hover:text-black transition-colors">
                   <Layout size={14} strokeWidth={2} /> Ver Planta
                </motion.button>
                <motion.button onClick={() => setShowFicha(true)} animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} className="flex items-center gap-2 text-[10px] font-bold tracking-[0.25em] uppercase text-stone-600 hover:text-black transition-colors">
                   <Info size={14} strokeWidth={2} /> Ficha Técnica
                </motion.button>
              </div>
            </div>

            <div className="flex bg-stone-200/50 p-1 border border-stone-200 w-full md:w-auto shadow-sm">
              <button onClick={() => setViewMode('images')} className={`flex-1 md:flex-none px-8 py-2.5 text-[10px] tracking-widest transition-all ${viewMode === 'images' ? 'bg-white shadow-sm font-bold text-[#87947c]' : 'text-stone-500 hover:text-stone-800'}`}>FOTOS</button>
              <button onClick={() => setViewMode('video')} className={`flex-1 md:flex-none px-8 py-2.5 text-[10px] tracking-widest transition-all ${viewMode === 'video' ? 'bg-white shadow-sm font-bold text-[#87947c]' : 'text-stone-500 hover:text-stone-800'}`}>VIDEO</button>
            </div>
          </div>
        </div>
      </header>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <main className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-5 gap-12 mt-12 mb-20">
        <aside className="order-2 lg:order-1 lg:col-span-1">
          <h3 className="editorial-text text-2xl mb-8 text-stone-900 border-b border-stone-300 pb-2">Espacios</h3>
          <div className="grid grid-cols-1 gap-1">
            {propertyData.rooms.map((room) => (
              <button key={room.id} onClick={() => { setActiveRoom(room); setViewMode('images'); }} className={`w-full text-left p-4 transition-all duration-500 ${activeRoom.id === room.id ? 'bg-white shadow-md border-l-4' : 'text-stone-800 hover:text-stone-900 font-medium hover:bg-white/40'}`} style={activeRoom.id === room.id ? { color: mainColor, borderColor: mainColor } : {}}>
                <div className="flex justify-between items-center"><span className="text-[12px] tracking-widest uppercase">{room.name}</span><ChevronRight size={13} className={activeRoom.id === room.id ? 'opacity-100' : 'opacity-30'} /></div>
              </button>
            ))}
          </div>
        </aside>

        <section className="order-1 lg:order-2 lg:col-span-4 px-0 md:px-8">
          <AnimatePresence mode="wait">
            {viewMode === 'images' ? (
              <motion.div key={activeRoom.id} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="bg-white p-4 shadow-2xl border border-stone-200/50 relative">
                <button onClick={() => setShowZoomModal(true)} className="absolute top-16 left-8 z-20 bg-white/95 p-2 rounded-full shadow-md transition-all hover:scale-110" style={{ color: mainColor }}><Maximize2 size={16} /></button>
                <div className="flex items-center justify-center gap-4 mb-8 pt-4">
                  <motion.div animate={{ x: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="flex items-center"><ArrowLeft size={16} style={{ color: mainColor }} strokeWidth={1.5} /></motion.div>
                  <motion.p animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 4, repeat: Infinity }} className="editorial-text italic text-lg md:text-xl text-stone-600 lowercase tracking-wide">“creando un estilo de vida en cada espacio”</motion.p>
                </div>
                <div className="relative aspect-video w-full bg-stone-100 overflow-hidden shadow-inner border border-stone-200/50">
                  <ReactCompareSlider position={100} handle={<div className="relative h-full w-1 bg-white cursor-ew-resize"><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2.5 shadow-2xl flex items-center justify-center"><ChevronLeft size={22} className="text-stone-400" /><ChevronRight size={22} className="text-stone-400" /></div></div>} itemOne={<ReactCompareSliderImage src={activeRoom.before} />} itemTwo={<ReactCompareSliderImage src={activeRoom.after} />} />
                </div>
              </motion.div>
            ) : (
              <motion.div key={activeRoom.id + "vid"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-black aspect-video border-[8px] border-white shadow-2xl">
                <video key={activeRoom.video} src={activeRoom.video} controls autoPlay muted playsInline className="w-full h-full object-contain" />
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </main>
    </div>
  );
};

export default PropertyVisualizer;
