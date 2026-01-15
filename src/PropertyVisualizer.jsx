import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, MapPin, ChevronRight, ChevronLeft, Info, X, Maximize2, Tag, Layout
} from 'lucide-react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const PropertyVisualizer = ({ propertyData, alRegresar }) => {
  const [showFicha, setShowFicha] = useState(false);
  const [showPlanta, setShowPlanta] = useState(false);
  const [showZoomModal, setShowZoomModal] = useState(false);
  const [viewMode, setViewMode] = useState('images');
  const [activeRoom, setActiveRoom] = useState(propertyData?.rooms?.[0] || null);

  const mainColor = "#87947c"; // Sage Muted

  const handlePlantaClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    alert(`Coordenadas para el catálogo:\ntop: "${y.toFixed(1)}%", left: "${x.toFixed(1)}%"`);
  };

  const seleccionarEspacio = (room) => {
    setActiveRoom(room);
    setShowPlanta(false);
    setViewMode('images');
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hola, me interesa la propiedad "${propertyData.title}" (ID: ${propertyData.refId}).`);
    window.open(`https://wa.me/${propertyData.agentPhone}?text=${message}`, '_blank');
  };

  if (!activeRoom) return <div className="p-20 text-center text-stone-400 font-bold uppercase tracking-widest">Cargando...</div>;

  return (
    <div className="min-h-screen bg-[#f8faf9] text-[#2a2a2a] pb-32 relative text-left" style={{ fontFamily: 'var(--fuente-sans)' }}>
      
      {/* --- MODAL PLANTA INTERACTIVA --- */}
      <AnimatePresence>
        {showPlanta && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[600] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setShowPlanta(false)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white p-6 md:p-8 max-w-lg w-full shadow-2xl relative rounded-none text-center" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setShowPlanta(false)} className="absolute top-4 right-4 text-stone-300 hover:text-black transition-colors"><X size={24} /></button>
              <h2 className="editorial-text text-xl mb-1 tracking-tight">Plano de Distribución</h2>
              <p className="text-[7px] tracking-[0.3em] text-stone-400 uppercase mb-6 font-bold">Selecciona un área para visualizar</p>
              <div className="relative inline-block border border-stone-100 bg-white shadow-sm cursor-crosshair" onClick={handlePlantaClick}>
                <img src={propertyData.plantaImagen} alt="Planta" className="max-w-full max-h-[50vh] w-auto opacity-95" />
                {propertyData.rooms.map((room) => (
                  <div
                    key={`map-${room.id}`}
                    onClick={(e) => { e.stopPropagation(); seleccionarEspacio(room); }}
                    className="absolute cursor-pointer group flex items-center justify-center border border-dashed border-stone-200 hover:border-solid hover:bg-black/10 transition-all"
                    style={{
                      top: room.posPlanta?.top || '0%',
                      left: room.posPlanta?.left || '0%',
                      width: room.posPlanta?.width || '15%',
                      height: room.posPlanta?.height || '15%',
                    }}
                  >
                    <span className="opacity-0 group-hover:opacity-100 bg-white text-[7px] px-1.5 py-0.5 font-bold shadow-md z-10 pointer-events-none uppercase border border-stone-100 whitespace-nowrap">{room.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- MODAL FICHA TÉCNICA --- */}
      <AnimatePresence>
        {showFicha && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[500] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setShowFicha(false)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white p-10 max-w-lg w-full shadow-2xl relative rounded-none" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setShowFicha(false)} className="absolute top-4 right-4 text-stone-400 hover:text-black"><X size={24} /></button>
              <h2 className="editorial-text text-3xl mb-2 tracking-tight">{propertyData.title}</h2>
              <p style={{ color: mainColor }} className="font-bold text-xl mb-6">{propertyData.precio}</p>
              <div className="grid grid-cols-2 gap-6 mb-8 border-y border-stone-100 py-6 text-[10px] uppercase tracking-wider">
                <div><p className="text-[8px] font-bold text-stone-300 mb-1 tracking-widest uppercase">Terreno</p>{propertyData.detalles?.terreno}</div>
                <div><p className="text-[8px] font-bold text-stone-300 mb-1 tracking-widest uppercase">Construcción</p>{propertyData.detalles?.construccion}</div>
                <div><p className="text-[8px] font-bold text-stone-300 mb-1 tracking-widest uppercase">Recámaras</p>{propertyData.detalles?.recamaras}</div>
                <div><p className="text-[8px] font-bold text-stone-300 mb-1 tracking-widest uppercase">Baños</p>{propertyData.detalles?.baños}</div>
              </div>
              <p className="text-sm text-stone-500 italic leading-relaxed font-light">"{propertyData.detalles?.descripcion}"</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HEADER --- */}
      <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-stone-100 p-6 md:px-12 md:py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="flex-1">
            <div onClick={alRegresar} className="cursor-pointer group mb-4">
              <h1 className="editorial-text text-3xl md:text-5xl group-hover:opacity-60 transition-opacity tracking-tight leading-tight mb-3">
                {propertyData.title}
              </h1>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[9px] md:text-[10px] font-bold tracking-[0.25em] uppercase text-stone-400">
                <span className="flex items-center gap-1.5"><MapPin size={11} /> {propertyData.location}</span>
                <span className="text-stone-200">|</span>
                <span className="flex items-center gap-1.5"><Tag size={11} /> ID: {propertyData.refId}</span>
                <span className="text-stone-200">|</span>
                <span style={{ color: mainColor }}>Agente: {propertyData.agentName}</span>
              </div>
            </div>
            <div className="flex gap-6">
              <button onClick={() => setShowPlanta(true)} className="flex items-center gap-2 text-[9px] font-bold tracking-[0.2em] uppercase text-stone-500 hover:text-black transition-colors">
                 <Layout size={13} /> Ver Planta
              </button>
              <button onClick={() => setShowFicha(true)} className="flex items-center gap-2 text-[9px] font-bold tracking-[0.2em] uppercase text-stone-500 hover:text-black transition-colors">
                 <Info size={13} /> Ficha Técnica
              </button>
            </div>
          </div>
          <div className="flex bg-stone-100 p-1 border border-stone-200 w-full md:w-auto">
            <button onClick={() => setViewMode('images')} className={`flex-1 md:flex-none px-8 py-2 text-[10px] tracking-widest transition-all ${viewMode === 'images' ? 'bg-white shadow-sm font-bold' : 'text-stone-400'}`} style={viewMode === 'images' ? { color: mainColor } : {}}>FOTOS</button>
            <button onClick={() => setViewMode('video')} className={`flex-1 md:flex-none px-8 py-2 text-[10px] tracking-widest transition-all ${viewMode === 'video' ? 'bg-white shadow-sm font-bold' : 'text-stone-400'}`} style={viewMode === 'video' ? { color: mainColor } : {}}>VIDEO</button>
          </div>
        </div>
      </header>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <main className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-5 gap-8 mt-6">
        <aside className="order-2 lg:order-1 lg:col-span-1">
          <h3 className="editorial-text text-2xl mb-8 text-stone-900">Espacios</h3>
          <div className="grid grid-cols-1 gap-1">
            {propertyData.rooms.map((room) => (
              <button 
                key={room.id} 
                onClick={() => { setActiveRoom(room); setViewMode('images'); }} 
                className={`w-full text-left p-4 border-b border-stone-100 transition-all ${activeRoom.id === room.id ? 'bg-white shadow-md' : 'text-stone-700 hover:text-stone-900 font-medium'}`} 
                style={activeRoom.id === room.id ? { color: mainColor, borderLeft: `4px solid ${mainColor}`, fontWeight: '700' } : {}}
              >
                <div className="flex justify-between items-center">
                  <span className="text-[12px] tracking-widest uppercase">{room.name}</span>
                  <ChevronRight size={13} />
                </div>
              </button>
            ))}
          </div>
        </aside>

        <section className="order-1 lg:order-2 lg:col-span-4">
          <AnimatePresence mode="wait">
            {viewMode === 'images' ? (
              <motion.div key={activeRoom.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white p-2 shadow-2xl border border-stone-50 relative">
                <button onClick={() => setShowZoomModal(true)} className="absolute top-14 left-6 z-20 bg-white/95 p-2 rounded-full shadow-md transition-all hover:scale-110" style={{ color: mainColor }}><Maximize2 size={16} /></button>
                <p className="text-[10px] text-center mb-4 font-bold tracking-[0.4em] uppercase" style={{ color: mainColor }}>← Un espacio pensado para ti</p>
                
                <div className="relative aspect-video w-full bg-[#f8f8f8] overflow-hidden">
                  <ReactCompareSlider 
                    position={100} // Totalmente a la derecha (viendo el Antes)
                    handle={
                      <div className="relative h-full w-1 bg-white cursor-ew-resize">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2.5 shadow-xl flex items-center justify-center">
                          <ChevronLeft size={22} className="text-stone-400" />
                          <ChevronRight size={22} className="text-stone-400" />
                        </div>
                      </div>
                    }
                    itemOne={<ReactCompareSliderImage src={activeRoom.before} />} 
                    itemTwo={<ReactCompareSliderImage src={activeRoom.after} />} 
                  />
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

      {/* --- BOTÓN CONTACTAR --- */}
      <button 
        onClick={handleWhatsApp} 
        style={{ backgroundColor: mainColor }} 
        className="fixed bottom-6 right-6 z-[100] text-white py-1.5 px-4 shadow-sm flex items-center gap-2 active:scale-95 transition-all hover:brightness-95 tracking-[0.3em] font-medium text-[7.5px] uppercase rounded-none"
      >
        <MessageCircle size={12} fill="currentColor" /> 
        <span className="hidden md:inline">Contactar Agente</span>
      </button>

      {/* MODAL ZOOM */}
      <AnimatePresence>
        {showZoomModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[600] bg-black/95 flex items-center justify-center p-4" onClick={() => setShowZoomModal(false)}>
            <button className="absolute top-8 right-8 text-white"><X size={36} /></button>
            <img src={activeRoom.after} className="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl" alt="Zoom" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PropertyVisualizer;
