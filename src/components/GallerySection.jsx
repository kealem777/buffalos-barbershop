import React, { useState } from 'react';
import { Camera, Eye, X, ZoomIn } from 'lucide-react';
import { salonInteriorImg, masterBarberCutImg, salonActionImg, academyImg } from '../assets/images';

export function GallerySection({ lang }) {
  const [activePhoto, setActivePhoto] = useState(null);

  const photos = [
    {
      src: salonInteriorImg,
      title: lang === 'es' ? 'Sillones Retro & Ambiente VIP' : 'Retro Barber Chairs & VIP Atmosphere',
      desc: lang === 'es' ? 'Estaciones de trabajo equipadas con la más alta tecnología' : 'Equipped workstations with cutting-edge tools'
    },
    {
      src: masterBarberCutImg,
      title: lang === 'es' ? 'Precisión a Tijera y Navaja' : 'Scissor & Razor Millimeter Precision',
      desc: lang === 'es' ? 'Maestría y cuidado en cada detalle del corte' : 'Artisanal attention to every haircut'
    },
    {
      src: salonActionImg,
      title: lang === 'es' ? 'Ritual Clásico en Acción' : 'Classic Barber Ritual in Action',
      desc: lang === 'es' ? 'Ambiente enérgico y profesional en CC Las Américas' : 'Dynamic gentleman club environment'
    },
    {
      src: academyImg,
      title: lang === 'es' ? 'Graduación Buffalo\'s Academy' : 'Buffalo\'s Academy Graduation',
      desc: lang === 'es' ? 'Entrega de certificados oficiales a nuevos barberos' : 'Official diplomas awarded to certified barbers'
    }
  ];

  return (
    <section className="py-20 bg-dark-900/40 relative border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-gold-400 uppercase mb-3">
            <Camera className="w-4 h-4" />
            <span>NUESTRAS INSTALACIONES REALES</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white mb-4">
            {lang === 'es' ? 'Atmósfera Buffalo\'s en Maracay' : 'The Buffalo\'s Atmosphere in Maracay'}
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            {lang === 'es'
              ? 'Conoce nuestro espacio en el Centro Comercial Las Américas, diseñado para desconectar y disfrutar de una experiencia masculina única.'
              : 'Take a look inside our lounge at CC Las Américas, tailored for premium grooming and relaxation.'}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((photo, i) => (
            <div
              key={i}
              onClick={() => setActivePhoto(photo)}
              className="group relative h-72 rounded-2xl overflow-hidden border border-dark-800 hover:border-gold-500/60 cursor-pointer shadow-lg"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover barber-photo group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent opacity-85 group-hover:opacity-60 transition-opacity" />

              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="font-cinzel text-sm font-bold text-white group-hover:text-gold-300 transition-colors">
                  {photo.title}
                </h4>
                <p className="text-[11px] text-gray-300 mt-1 line-clamp-1">
                  {photo.desc}
                </p>
              </div>

              <div className="absolute top-3 right-3 p-2 rounded-full bg-dark-950/70 text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-[200] bg-dark-950/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-dark-900 border border-gold-500/40 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-dark-950/80 text-white hover:text-gold-400 flex items-center justify-center cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={activePhoto.src}
              alt={activePhoto.title}
              className="w-full max-h-[75vh] object-contain bg-black"
            />
            <div className="p-5 bg-dark-900">
              <h3 className="font-cinzel text-lg font-bold text-white">
                {activePhoto.title}
              </h3>
              <p className="text-xs text-gray-400 mt-1">{activePhoto.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
