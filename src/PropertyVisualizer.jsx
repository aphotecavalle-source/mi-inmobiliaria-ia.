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
  Hash,
  ArrowLeft
} from 'lucide-react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const PropertyVisualizer = ({ alRegresar }) => {
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
      descripcion: "Residencia de lujo con acabados naturales, vistas panorámicas al bosque y diseño de iluminación inteligente."
    },
    rooms: [
      { id: 1, name: "Estancia Principal", before: "/fotopropiedades/Estancia1A.JPEG", after: "/fotopropiedades/estanciab2.JPEG", videoUrl: "/fotopropiedades/estancia.mp4" },
      { id: 2, name: "Recámara", before: "/fotopropiedades/recamarab1.JPG", after: "/fotopropiedades/recamarab2.JPEG", videoUrl: "/fotopropiedades/recamara.mp4" },
      { id: 3, name: "Terraza", before: "/fotopropiedades/Terraza1.JPG", after: "/fotopropiedades/Terraza2.JPEG", videoUrl: "/fotopropiedades/terraza.mp4" },
      { id: 4, name: "Exteriores", before: "/fotopropiedades/exteriores1.JPEG", after: "/fotopropiedades/exteriores2.JPEG", videoUrl: "/fotopropiedades/family.mp4" }, 
      { id: 5, name: "Cocina", before: "/fotopropiedades/exteriores1.JPEG", after: "/fotopropiedades/exteriores2.JPEG", videoUrl: "/fotopropiedades/family.mp4" }
    ]
  };

  const [activeRoom, setActiveRoom] = useState(propertyData.rooms[0]);
  const [viewMode, setViewMode] = useState('images');

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hola ${brandConfig.agentName}, me interesa la propiedad "${propertyData.title}" (ID: ${propertyData.refId}).`);
    window.open(`https://wa.me/${brandConfig.agentPhone}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#e2ede7] text-[#2a2a2a] pb-32" style={{ fontFamily: 'var(--fuente-sans)' }}>
      
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
              className="bg-white p-10 max-w-lg w-full shadow-2xl relative rounded-none"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setShowFicha(false)} className="absolute top-4 right-4 text-stone-400 hover:text-black"><X size={24} /></button>
              <h2 className="editorial-text text-3xl mb-2">{propertyData.title}</h2>
              <p className="text-[#c5b097] font-bold text-xl mb-6">{propertyData.precio}</p>
              <div className="grid grid-cols-2 gap-6 mb-8 border-y border-stone-100 py-6 text-sm">
                <div><p className="text-[9px] font-bold text-stone-400 uppercase tracking-widest">Terreno</p>{propertyData.detalles.terreno}</div>
                <div><p className="text-[9px] font-bold text-stone-400 uppercase tracking-widest">Construcción</p>{propertyData.detalles.construccion}</div>
                <div><p className="text-[9px] font-bold text-stone-400 uppercase tracking-widest">Habitaciones</p>{propertyData.detalles.recamaras}</div>
                <div><p className="text-[9px] font-bold text-stone-400 uppercase tracking-widest">Baños</p>{propertyData.detalles.baños}</div>
              </div>
              <p className="text-sm text-stone-500 italic leading-relaxed">"{propertyData.detalles.descripcion}"</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BOTÓN WHATSAPP */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        onClick={handleWhatsApp}
        style={{ backgroundColor: 'var(--color-arena)', borderRadius: '0px' }}
        className="fixed bottom-10 right-10 z-[100] flex items-center gap-3 text-white px-8 py-5 shadow-2xl"
      >
        <MessageCircle size={20} fill="currentColor" />
        <span className="font-bold text-[11px] tracking-widest uppercase">Contactar Agente</span>
      </motion.button>

      {/* HEADER LIMPIO */}
      <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-stone-100 p-6">
        <div className="max-w-5xl mx-auto flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-4 md:gap-8 text-[10px] font-bold tracking-[0.2em] uppercase border-b border-stone-50 pb-4">
            <button onClick={alRegresar} className="flex items-center gap-2 text-stone-400 hover:text-black transition-all">
              <ArrowLeft size={12} /> VOLVER
            </button>
            <div className="flex items-center" style={{ color: 'var(--color-arena)' }}><User size={12} className="mr-2" /> {brandConfig.agentName}</div>
            <div className="flex items-center text-stone-400 ml-auto"><Info size={12} className="mr-2" /> <button onClick={() => setShowFicha(true)}>DETALLES</button></div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="editorial-text text-3xl md:text-4xl mb-1">{propertyData.title}</h1>
              <p className="flex items-center text-stone-400 text-[9px] font-bold tracking-widest uppercase">
                <MapPin size={10} className="mr-2" /> {propertyData.location}
              </p>
            </div>
            
            <div className="flex bg-stone-100 p-1 border border-stone-200">
              <button onClick={() => setViewMode('images')} className={`px-5 py-2 flex items-center text-[9px] tracking-widest ${viewMode === 'images' ? 'bg-white shadow-sm font-bold' : 'font-medium text-stone-400'}`} style={{ color: viewMode === 'images' ? 'var(--color-arena)' : '' }}><ImageIcon size={14} className="mr-2" /> FOTOS</button>
              <button onClick={() => setViewMode('video')} className={`px-5 py-2 flex items-center text-[9px] tracking-widest ${viewMode === 'video' ? 'bg-white shadow-sm font-bold' : 'font-medium text-stone-400'}`} style={{ color: viewMode === 'video' ? 'var(--color-arena)' : '' }}><Play size={14} className="mr-2" /> VIDEO</button>
            </div>
          </div>
        </div>
      </header>

      {/* CUERPO DE LA PÁGINA */}
      <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-4 gap-8 mt-4">
        
        {/* LISTA DE ESPACIOS */}
        <aside className="order-2 lg:order-1 lg:col-span-1">
          <h3 className="editorial-text text-xl mb-6 text-stone-900">Espacios</h3>
          <div className="grid grid-cols-1 gap-2">
            {propertyData.rooms.map((room) => (
              <button 
                key={room.id} 
                onClick={() => { setActiveRoom(room); setViewMode('images'); }} 
                className={`w-full text-left p-4 transition-all border-b border-stone-200 ${activeRoom.id === room.id ? 'bg-white shadow-sm' : 'bg-transparent'}`}
              >
                <div className="flex justify-between items-center">
                  <span className={`text-[9px] tracking-widest uppercase ${activeRoom.id === room.id ? 'font-bold' : 'font-medium text-stone-400'}`} style={{ color: activeRoom.id === room.id ? 'var(--color-arena)' : '' }}>{room.name}</span>
                  <ChevronRight size={12} />
                </div>
              </button>
            ))}
          </div>
        </aside>

        {/* VISUALIZADOR PRINCIPAL */}
        <section className="order-1 lg:order-2 lg:col-span-3">
          <AnimatePresence mode="wait">
            {viewMode === 'images' ? (
              <motion.div key={activeRoom.id + "-img"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white p-2 shadow-xl border border-stone-100">
                {/* LETRERO FINO EDITORIAL */}
                <div className="mb-4 text-center">
                  <p className="text-[9px] font-bold tracking-[0.3em] text-stone-400 uppercase italic">
                    Desliza para ver el estado actual de la propiedad
                  </p>
                </div>
                
                {/* SLIDER AL 0% (Barra a la izquierda) */}
                <div className="relative overflow-hidden aspect-video w-full bg-[#f8f8f8]">
                  <ReactCompareSlider 
                    position={0} 
                    itemOne={<ReactCompareSliderImage src={activeRoom.before} style={{ objectFit: 'contain' }} />} 
                    itemTwo={<ReactCompareSliderImage src={activeRoom.after} style={{ objectFit: 'contain' }} />} 
                    className="h-full w-full" 
                  />
                </div>
              </motion.div>
            ) : (
              <motion.div key={activeRoom.id + "-vid"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-stone-950 shadow-xl overflow-hidden aspect-video border-[10px] border-white">
                <video key={activeRoom.videoUrl} controls autoPlay muted playsInline className="w-full h-full object-contain" src={activeRoom.videoUrl} />
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </main>

      {/* FIRMA FINAL */}
      <footer className="mt-20 text-center opacity-30">
        <p className="text-[9px] tracking-[0.8em] uppercase font-bold">Curated interior design by M Hagerman</p>
      </footer>
    </div>
  );
};

export default PropertyVisualizer;
