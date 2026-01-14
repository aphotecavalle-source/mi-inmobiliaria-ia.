import React, { useState, useEffect } from 'react';
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
  Smartphone,
  ArrowLeft
} from 'lucide-react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const PropertyVisualizer = ({ alRegresar }) => {
  const [showFicha, setShowFicha] = useState(false);
  const [showRotateOverlay, setShowRotateOverlay] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);

  const brandConfig = {
    agentName: "REBECA QUINTANILLA",
    agentPhone: "525512345678", 
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

  useEffect(() => {
    const checkOrientation = () => {
      const portrait = window.innerHeight > window.innerWidth;
      const mobile = window.innerWidth < 1024;
      setIsLandscape(!portrait && mobile);
      setShowRotateOverlay(mobile && portrait);
    };
    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    return () => window.removeEventListener('resize', checkOrientation);
  }, []);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hola ${brandConfig.agentName}, me interesa la propiedad "${propertyData.title}" (ID: ${propertyData.refId}).`);
    window.open(`https://wa.me/${brandConfig.agentPhone}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#A3B1AA] text-white pb-20 relative font-sans transition-all duration-500">
      
      {/* OVERLAY DE GIRO */}
      <AnimatePresence>
        {showRotateOverlay && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-[#A3B1AA]/98 backdrop-blur-xl flex flex-col items-center justify-center text-center p-8"
            onClick={() => setShowRotateOverlay(false)}
          >
            <motion.div animate={{ rotate: 90 }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", repeatType: "reverse" }} className="mb-8 opacity-80">
              <Smartphone size={64} strokeWidth={1} />
            </motion.div>
            <h3 className="font-serif italic text-3xl mb-4 text-white">Experiencia Editorial</h3>
            <p className="text-[10px] tracking-[0.3em] uppercase opacity-60">Gira tu dispositivo para una vista completa</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HEADER: Ultra-compacto en Horizontal */}
      <header className={`bg-[#A3B1AA]/80 backdrop-blur-md sticky top-0 z-50 border-b border-white/10 transition-all duration-500 ${isLandscape ? 'p-3' : 'p-8 md:p-12'}`}>
        <div className="max-w-7xl mx-auto flex flex-col gap-4">
          
          {/* Ocultamos info secundaria en horizontal */}
          {!isLandscape && (
            <div className="flex justify-between items-center text-[10px] tracking-[0.4em] uppercase opacity-70 border-b border-white/10 pb-6">
              <button onClick={alRegresar} className="flex items-center gap-2 hover:opacity-50 transition-all">
                <ArrowLeft size={14} /> Volver
              </button>
              <div className="flex items-center gap-8">
                <span className="font-bold tracking-[0.5em]">{brandConfig.agentName}</span>
                <span className="hidden md:block">ID: {propertyData.refId}</span>
              </div>
            </div>
          )}

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              {isLandscape && (
                <button onClick={alRegresar} className="p-2 mr-2 opacity-70">
                  <ArrowLeft size={20} />
                </button>
              )}
              <h1 className={`font-serif italic leading-none ${isLandscape ? 'text-2xl' : 'text-4xl md:text-7xl'}`}>
                {propertyData.title}
              </h1>
            </div>
            
            <div className={`flex bg-white/10 p-1 border border-white/20 backdrop-blur-sm ${isLandscape ? 'scale-90' : ''}`}>
              <button onClick={() => setViewMode('images')} className={`px-4 md:px-8 py-2 md:py-3 text-[9px] md:text-[10px] tracking-[0.3em] transition-all ${viewMode === 'images' ? 'bg-white text-[#A3B1AA] font-bold' : 'text-white'}`}>FOTOGRAFÍA</button>
              <button onClick={() => setViewMode('video')} className={`px-4 md:px-8 py-2 md:py-3 text-[9px] md:text-[10px] tracking-[0.3em] transition-all ${viewMode === 'video' ? 'bg-white text-[#A3B1AA] font-bold' : 'text-white'}`}>VIDEO</button>
            </div>
          </div>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className={`max-w-7xl mx-auto flex flex-col gap-4 transition-all ${isLandscape ? 'p-2' : 'p-8 md:p-12'}`}>
        
        {/* VISUALIZADOR */}
        <div className={`w-full overflow-hidden shadow-2xl relative ${isLandscape ? 'h-[60vh]' : 'aspect-video'}`}>
          <AnimatePresence mode="wait">
            {viewMode === 'images' ? (
              <motion.div key={activeRoom.id + "-img"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full w-full bg-white/5">
                <ReactCompareSlider 
                  position={50} 
                  itemOne={<ReactCompareSliderImage src={activeRoom.before} style={{ objectFit: 'contain' }} />} 
                  itemTwo={<ReactCompareSliderImage src={activeRoom.after} style={{ objectFit: 'contain' }} />} 
                  className="h-full w-full" 
                />
              </motion.div>
            ) : (
              <motion.div key={activeRoom.id + "-vid"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full w-full bg-black">
                <video key={activeRoom.videoUrl} controls autoPlay muted playsInline className="w-full h-full object-contain" src={activeRoom.videoUrl} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* NAVEGACIÓN DE ESPACIOS: En horizontal es una cinta scrollable */}
        <div className={`w-full ${isLandscape ? 'overflow-x-auto py-2' : 'mt-8'}`}>
          <div className={`${isLandscape ? 'flex flex-row gap-2 px-2 min-w-max' : 'grid grid-cols-1 md:grid-cols-5 gap-4'}`}>
            {isLandscape && <span className="text-[8px] uppercase tracking-widest opacity-40 flex items-center mr-2">Espacios:</span>}
            {propertyData.rooms.map((room) => (
              <button 
                key={room.id} 
                onClick={() => setActiveRoom(room)}
                className={`text-left py-4 px-6 border transition-all ${isLandscape ? 'border-white/10' : 'border-white/10'} ${activeRoom.id === room.id ? 'bg-white text-[#A3B1AA] font-bold border-white' : 'bg-white/5 text-white/50 hover:bg-white/10'}`}
              >
                <div className="flex justify-between items-center gap-4">
                  <span className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase whitespace-nowrap">{room.name}</span>
                  {!isLandscape && <ChevronRight size={14} className={activeRoom.id === room.id ? 'opacity-100' : 'opacity-0'} />}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* INFO ADICIONAL (Solo visible si no es horizontal para ahorrar espacio) */}
        {!isLandscape && (
          <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40">
             <button onClick={() => setShowFicha(true)} className="flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase font-bold border border-white/30 px-6 py-3 hover:bg-white hover:text-[#A3B1AA] transition-all">
               <Info size={14} /> Detalles Técnicos
             </button>
             <p className="text-[9px] tracking-[0.8em] uppercase">Curated interior design by M Hagerman</p>
          </div>
        )}
      </main>

      {/* BOTÓN WHATSAPP: Más discreto en Horizontal */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        onClick={handleWhatsApp}
        className={`fixed z-[100] flex items-center gap-3 bg-white text-[#A3B1AA] shadow-2xl transition-all ${isLandscape ? 'bottom-4 right-4 p-3 rounded-full' : 'bottom-10 right-10 px-8 py-5 rounded-none'}`}
      >
        <MessageCircle size={20} fill="currentColor" />
        {!isLandscape && <span className="font-bold text-[11px] tracking-widest uppercase">Contactar</span>}
      </motion.button>

    </div>
  );
};

export default PropertyVisualizer;
