import React, { useState } from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { MapPin, X, FileText, ArrowLeftRight, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const PropertyVisualizer = () => {
  const navigate = useNavigate();

  const brandConfig = {
    agentName: "Rebeca Quintanilla",
    agentPhone: "525554045659", 
    brandColor: "#B4AD9E", 
  };

  const propertyData = {
    title: "CASA EN EL BOSQUE",
    precio: "$12,500,000 MXN",
    location: "Valle de Bravo #10524",
    description: "Una propiedad única que fusiona la arquitectura contemporánea con el entorno natural de Valle de Bravo. Espacios diseñados para capturar la luz cenital y ofrecer vistas ininterrumpidas al bosque.",
    specs: {
      terreno: "1,200 m²",
      construccion: "450 m²",
      recamaras: "4",
      baños: "4.5",
      estacionamientos: "3"
    },
    rooms: [
      { id: 1, name: "Estancia Principal", before: "/fotospropiedades/Estancia1A.JPEG", after: "/fotospropiedades/Estancia2.JPEG", videoUrl: "/fotospropiedades/estancia.mp4" },
      { id: 2, name: "Recámara", before: "/fotospropiedades/a1.jpg", after: "/fotospropiedades/recamara2.JPG", videoUrl: "/fotospropiedades/recamara.mp4" },
      { id: 3, name: "Terraza", before: "/fotospropiedades/Terraza1.JPG", after: "/fotospropiedades/Terraza2.JPEG", videoUrl: "/fotospropiedades/terraza.mp4" },
      { id: 4, name: "Family room", before: "/fotospropiedades/Sala1.JPEG", after: "/fotospropiedades/Sala2.JPEG", videoUrl: "/fotospropiedades/family.mp4" }
    ]
  };

  const [activeRoom, setActiveRoom] = useState(propertyData.rooms[0]);
  const [viewMode, setViewMode] = useState('images');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hola, me interesa la propiedad "${propertyData.title}".`);
    window.open(`https://wa.me/${brandConfig.agentPhone}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F9F8F6] font-sans text-[#78716C] pb-10">
      
      {/* MODAL DE INFORMACIÓN */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-[#57534E]/20 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
              className="relative bg-white w-full max-w-lg p-8 md:p-12 shadow-2xl rounded-sm border border-stone-100"
            >
              <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-stone-300 hover:text-stone-500">
                <X size={20} />
              </button>
              <div className="space-y-8">
                <div className="flex justify-between items-start">
                   <h2 className="text-[10px] font-bold tracking-[0.4em] text-stone-300 uppercase">Ficha Técnica</h2>
                   <span className="text-[11px] font-bold tracking-[0.15em] text-[#B4AD9E]">{propertyData.precio}</span>
                </div>
                <h3 className="text-2xl font-light tracking-[0.1em] text-[#57534E] uppercase leading-tight">{propertyData.title}</h3>
                <p className="text-sm leading-relaxed text-stone-500 font-light">{propertyData.description}</p>
                <div className="grid grid-cols-2 gap-y-6 border-t border-stone-50 pt-8">
                  {Object.entries(propertyData.specs).map(([key, value]) => (
                    <div key={key}>
                      <span className="block text-[8px] font-bold tracking-[0.2em] text-stone-300 uppercase mb-1">{key}</span>
                      <span className="text-xs text-stone-600 font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* CABECERA COMPACTA CON TÍTULO GRANDE */}
      <header className="bg-white/50 backdrop-blur-sm sticky top-0 z-50 border-b border-stone-100 px-8 py-6 md:px-14 md:py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          
          <div className="space-y-4">
            {/* TÍTULO MÁS GRANDE Y FUNCIONAL */}
            <button 
              onClick={() => navigate('/')}
              className="group text-left transition-all"
            >
              <h1 className="text-3xl md:text-5xl font-light tracking-[0.15em] text-[#57534E] uppercase leading-none group-hover:text-[#B4AD9E] transition-colors">
                {propertyData.title}
              </h1>
              <span className="text-[8px] tracking-[0.4em] text-stone-300 uppercase opacity-0 group-hover:opacity-100 transition-opacity block mt-2">
                Volver al inicio
              </span>
            </button>
            
            <div className="flex flex-wrap items-center gap-5 text-[#A8A29E]">
              <p className="flex items-center text-[10px] font-bold tracking-[0.2em] uppercase">
                <MapPin size={11} className="mr-2 opacity-60" /> {propertyData.location}
              </p>
              <span className="opacity-30">|</span>
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase italic">
                {brandConfig.agentName}
              </p>
              <button 
                onClick={() => setIsModalOpen(true)} 
                className="ml-2 flex items-center gap-2 px-3 py-1 border border-stone-200 text-[#B4AD9E] text-[9px] font-bold tracking-[0.1em] uppercase hover:bg-white transition-colors rounded-sm"
              >
                <FileText size={11} /> FICHA
              </button>
            </div>
          </div>

          <div className="flex bg-stone-50 p-1 rounded-sm border border-stone-100">
            <button onClick={() => setViewMode('images')} className={`px-6 py-2 text-[10px] tracking-[0.2em] font-bold transition-all ${viewMode === 'images' ? 'bg-white text-[#78716C] shadow-sm' : 'text-stone-300'}`}>FOTOGRAFÍA</button>
            <button onClick={() => setViewMode('video')} className={`px-6 py-2 text-[10px] tracking-[0.2em] font-bold transition-all ${viewMode === 'video' ? 'bg-white text-[#78716C] shadow-sm' : 'text-stone-300'}`}>VIDEO</button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6 md:p-10 grid grid-cols-1 lg:grid-cols-6 gap-10 md:gap-16">
        <aside className="lg:col-span-1">
          <div className="flex flex-col space-y-6 md:space-y-10">
            {propertyData.rooms.map((room) => (
              <button key={room.id} onClick={() => { setActiveRoom(room); setViewMode('images'); }} className="text-left group relative">
                <span className={`block text-[11px] md:text-[12px] tracking-[0.2em] uppercase transition-all duration-700 ${activeRoom.id === room.id && viewMode === 'images' ? 'text-[#57534E] font-bold' : 'text-[#D1CDC7] hover:text-[#78716C]'}`}>{room.name}</span>
                {activeRoom.id === room.id && <motion.div layoutId="line" className="absolute -left-4 top-1/2 w-2 h-[1px] bg-[#B4AD9E]" />}
              </button>
            ))}
          </div>
        </aside>

        <section className="lg:col-span-5 flex flex-col items-center">
          <AnimatePresence mode="wait">
            {viewMode === 'images' ? (
              <motion.div key={activeRoom.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full max-w-4xl space-y-8">
                
                <div className="relative bg-white p-1.5 rounded-sm border border-stone-50 shadow-sm overflow-hidden h-[350px] md:h-[550px]">
                  
                  {/* ETIQUETA "ASÍ PODRÍA QUEDAR" - MODERNA Y CURSIVA */}
                  <div className="absolute top-8 right-8 z-20">
                    <p className="text-[#B4AD9E] text-[13px] md:text-[16px] font-serif italic tracking-wide lowercase opacity-80">
                      así podría quedar
                    </p>
                  </div>

                  <ReactCompareSlider
                    itemOne={<ReactCompareSliderImage src={activeRoom.before} />}
                    itemTwo={<ReactCompareSliderImage src={activeRoom.after} />}
                    position={0}
                    className="h-full w-full"
                  />
                </div>

                <div className="flex justify-center">
                  <p className="text-[#A8A29E] text-[10px] font-medium tracking-[0.15em] italic flex items-center gap-3">
                    <ArrowLeftRight size={11} className="opacity-40" /> 
                    desliza para ver el estado actual de la propiedad
                  </p>
                </div>
                
              </motion.div>
            ) : (
              <div className="bg-stone-50 aspect-video w-full max-w-4xl flex items-center justify-center rounded-sm border border-stone-100 shadow-inner">
                <video key={activeRoom.videoUrl} controls autoPlay className="w-full h-full object-cover opacity-80" src={activeRoom.videoUrl} />
              </div>
            )}
          </AnimatePresence>
        </section>
      </main>

      <footer className="max-w-6xl mx-auto p-12 text-center border-t border-stone-100 mt-10">
        <p className="text-[#D1CDC7] text-[8px] font-bold tracking-[0.5em] uppercase">Mariana Hagerman Concept</p>
      </footer>

      {/* BOTÓN DE CONTACTO REFINADO */}
      <motion.button 
        whileHover={{ y: -1 }} 
        onClick={handleWhatsApp} 
        style={{ backgroundColor: brandConfig.brandColor }} 
        className="fixed bottom-8 right-8 z-[100] text-white px-6 py-3 rounded-sm shadow-md flex items-center gap-3 opacity-95 transition-all"
      >
        <span className="text-[9px] font-bold tracking-[0.3em] uppercase">CONTACTAR</span>
        <MessageCircle size={14} />
      </motion.button>
    </div>
  );
};

export default PropertyVisualizer;
