
     

  
            
           
     
        
             
    import React, { useState } from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { Image as ImageIcon, MapPin, Sparkles, MessageCircle, Home, Maximize2, BedDouble, Bath } from 'lucide-react';

const PropertyVisualizer = () => {
  // ==========================================
  // CONFIGURACIÓN DE MARCA
  // ==========================================
  const brandConfig = {
    agentName: "Rebeca Quintanilla",
    agentPhone: "525554045659", // Número actualizado
    brandColor: "#606C5D",      
    logoUrl: "/fotospropiedades/logo.png", 
    logoText: "BOUTIQUE RE",
  };

  const propertyData = {
    title: "Casa en el Bosque",
    location: "Valle de Bravo, Edo. de México",
    price: "$12,500,000 MXN",
    specs: { beds: 4, baths: 3.5, sqft: "350m²" },
    rooms: [
      {
        id: 1,
        name: "Estancia Principal",
        before: "/fotospropiedades/Estancia1A.JPEG", 
        after: "/fotospropiedades/Estancia2.JPEG",
      },
      // Puedes agregar más habitaciones aquí siguiendo el mismo formato
    ]
  };

  const [activeRoom, setActiveRoom] = useState(propertyData.rooms[0]);

  // ==========================================
  // FUNCIÓN INTELIGENTE DE WHATSAPP
  // ==========================================
  const handleWhatsApp = () => {
    const message = `¡Hola! Me interesa la propiedad "${propertyData.title}" que vi en tu visualizador inteligente. ¿Podrías darme más información?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${brandConfig.agentPhone}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 pb-20">
      {/* Header / Logo */}
      <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
            <Home size={20} />
          </div>
          <span className="font-serif font-bold text-xl tracking-tight">{brandConfig.logoText}</span>
        </div>
        <button 
          onClick={handleWhatsApp}
          className="hidden md:block border border-slate-200 px-6 py-2 rounded-full text-sm font-medium hover:bg-slate-50 transition-all"
        >
          Contactar Agente
        </button>
      </nav>

      <main className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8">
        
        {/* Columna Izquierda: Visualizador */}
        <div className="lg:col-span-8 space-y-6">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-100 aspect-[4/3] md:aspect-video">
            <ReactCompareSlider
              itemOne={<ReactCompareSliderImage src={activeRoom.before} alt="Antes" />}
              itemTwo={<ReactCompareSliderImage src={activeRoom.after} alt="Después" />}
              style={{ width: '100%', height: '100%' }}
            />
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
              <Sparkles size={16} className="text-amber-500" />
              <span className="text-sm font-bold uppercase tracking-wider">Propuesta IA: {activeRoom.name}</span>
            </div>
          </div>

          {/* Selector de Habitaciones */}
          <div className="flex gap-4 overflow-x-auto pb-4">
            {propertyData.rooms.map((room) => (
              <button
                key={room.id}
                onClick={() => setActiveRoom(room)}
                className={`flex-shrink-0 px-6 py-3 rounded-2xl font-medium transition-all ${
                  activeRoom.id === room.id 
                  ? 'bg-slate-900 text-white shadow-lg' 
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                }`}
              >
                {room.name}
              </button>
            ))}
          </div>
        </div>

        {/* Columna Derecha: Información */}
        <div className="lg:col-span-4 space-y-8">
          <div>
            <div className="flex items-center gap-2 text-slate-400 mb-2">
              <MapPin size={16} />
              <span className="text-sm uppercase tracking-widest font-medium">{propertyData.location}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{propertyData.title}</h1>
            <p className="text-3xl font-light text-slate-600">{propertyData.price}</p>
          </div>

          <div className="grid grid-cols-3 gap-4 py-6 border-y border-slate-100">
            <div className="text-center">
              <BedDouble className="mx-auto mb-2 text-slate-400" size={20} />
              <span className="block text-sm font-bold">{propertyData.specs.beds} Rec.</span>
            </div>
            <div className="text-center border-x border-slate-100">
              <Bath className="mx-auto mb-2 text-slate-400" size={20} />
              <span className="block text-sm font-bold">{propertyData.specs.baths} Baños</span>
            </div>
            <div className="text-center">
              <Maximize2 className="mx-auto mb-2 text-slate-400" size={20} />
              <span className="block text-sm font-bold">{propertyData.specs.sqft}</span>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <Sparkles size={18} className="text-amber-500" />
              Transformación Digital
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Esta propiedad ha sido procesada con nuestra IA para mostrarte el potencial real de sus espacios. Desliza la barra en la imagen para comparar el estado actual vs. la propuesta de diseño.
            </p>
            <button 
              onClick={handleWhatsApp}
              className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl flex items-center justify-center gap-2"
            >
              Agendar Visita Personalizada
            </button>
          </div>
        </div>
      </main>

      {/* Footer con tu firma */}
      <footer className="max-w-6xl mx-auto p-8 md:p-12 text-center text-stone-300 text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase">
        Desarrollado por Mariana Hagerman
      </footer>

      {/* Botón Flotante Inteligente de WhatsApp */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-5 rounded-full shadow-[0_10px_40px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all flex items-center justify-center"
        aria-label="WhatsApp"
      >
        <MessageCircle size={30} fill="currentColor" />
      </button>
    </div>
  );
};

export default PropertyVisualizer;
