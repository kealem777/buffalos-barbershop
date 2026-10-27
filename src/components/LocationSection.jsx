import React from 'react';
import { MapPin, Clock, Phone, MessageCircle, Instagram, Navigation, Shield, Car } from 'lucide-react';
import { BARBERSHOP_DATA } from '../data/barbershopData';

export function LocationSection({ lang, t }) {
  return (
    <section id="contacto" className="py-24 bg-dark-950 relative border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-gold-400 uppercase mb-3">
            <MapPin className="w-4 h-4" />
            <span>VISÍTANOS EN EL CORAZÓN DE MARACAY</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {t.location.title}
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            {t.location.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Info Side */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-dark-900 border border-dark-800 hover:border-gold-500/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gold-500/10 text-gold-400 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-cinzel text-lg font-bold text-white mb-1">
                    {t.location.addressTitle}
                  </h3>
                  <p className="text-gray-300 text-sm font-medium mb-2">
                    {BARBERSHOP_DATA.mall}
                  </p>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Av. Las Delicias, Nivel Comercial, Maracay, Estado Aragua, Venezuela.
                  </p>
                  
                  <div className="flex items-center gap-4 mt-4 pt-3 border-t border-dark-800 text-[11px] text-gray-400">
                    <span className="flex items-center gap-1.5">
                      <Car className="w-3.5 h-3.5 text-gold-500" />
                      Estacionamiento seguro
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5 text-gold-500" />
                      Seguridad privada
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="p-6 rounded-2xl bg-dark-900 border border-dark-800 hover:border-gold-500/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gold-500/10 text-gold-400 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-cinzel text-lg font-bold text-white mb-2">
                    {t.location.hoursTitle}
                  </h3>
                  <div className="space-y-1.5 text-xs sm:text-sm text-gray-300">
                    <div className="flex justify-between py-1 border-b border-dark-800">
                      <span className="text-gray-400">Lunes a Sábado:</span>
                      <span className="font-semibold text-white">9:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-gray-400">Domingo:</span>
                      <span className="font-semibold text-gold-400">10:00 AM - 5:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${BARBERSHOP_DATA.phoneRaw}`}
                className="p-3.5 rounded-xl bg-dark-900 hover:bg-dark-800 text-gray-200 border border-dark-750 hover:border-gold-500/50 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4 text-gold-400" />
                <span>{t.location.callUs}</span>
              </a>

              <a
                href={`https://wa.me/${BARBERSHOP_DATA.whatsappRaw}?text=${encodeURIComponent('Hola Buffalo\'s Barbershop! Deseo información para agendar mi cita en CC Las Américas.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-emerald-700/30 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/30 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Directions Link */}
            <a
              href={BARBERSHOP_DATA.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-amber-500 hover:from-gold-400 hover:to-amber-400 text-dark-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(197,160,89,0.3)] transition-all cursor-pointer"
            >
              <Navigation className="w-4 h-4" />
              <span>{t.location.howToGet}</span>
            </a>
          </div>

          {/* Interactive Google Map with Buffalo's Barbershop Marker */}
          <div className="lg:col-span-7 h-96 lg:h-auto min-h-[420px] rounded-2xl overflow-hidden border border-dark-750 shadow-2xl relative">
            <iframe
              title="Google Map - Buffalo's Barbershop CC Las Americas Maracay"
              src="https://maps.google.com/maps?q=Centro+Comercial+Las+Americas+Av+Las+Delicias+Maracay+Aragua+Venezuela&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(110%)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />

            {/* Custom Interactive Buffalo's Barbershop Pin Badge directly on map */}
            <div className="absolute top-5 left-5 right-5 sm:right-auto sm:max-w-md bg-dark-950/95 backdrop-blur-md border border-gold-500/60 p-4 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.85)] flex items-center gap-3.5 z-20">
              <div className="relative shrink-0 flex items-center justify-center">
                <span className="absolute w-8 h-8 rounded-full bg-gold-500/40 animate-ping" />
                <div className="w-11 h-11 rounded-full p-0.5 bg-gradient-to-tr from-gold-400 to-amber-300 shadow-md">
                  <img
                    src="/images/logo-buffalos.jpg"
                    alt="Buffalo's"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-cinzel text-sm sm:text-base font-extrabold text-white tracking-wide truncate">
                    BUFFALO'S BARBERSHOP
                  </h4>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-gold-500/20 text-gold-300 border border-gold-500/30 font-bold uppercase">
                    Aquí
                  </span>
                </div>
                <p className="text-xs text-gold-400 font-semibold truncate">
                  Centro Comercial Las Américas • Nivel Feria / Comercial
                </p>
                <p className="text-[11px] text-gray-400 truncate">
                  Av. Las Delicias, Maracay, Edo. Aragua
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
