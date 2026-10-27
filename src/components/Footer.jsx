import React from 'react';
import { Scissors, Phone, MessageCircle, Instagram, MapPin, ArrowUp } from 'lucide-react';
import { BARBERSHOP_DATA } from '../data/barbershopData';

export function Footer({ lang, t }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-950 border-t border-dark-800 text-gray-400 text-xs sm:text-sm pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-gold-500 to-amber-300">
                <img
                  src="/images/logo-buffalos.jpg"
                  alt="Buffalo's Barbershop"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h4 className="font-cinzel text-lg font-bold text-white tracking-wider">
                  BUFFALO'S
                </h4>
                <p className="text-[10px] text-gold-400 uppercase font-semibold">
                  BARBERSHOP • MARACAY
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              El arte de la barbería clásica y moderna en Maracay, Estado Aragua. Estilo, precisión y carácter desde 2018.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <a
                href={`tel:${BARBERSHOP_DATA.phoneRaw}`}
                className="w-8 h-8 rounded-full bg-dark-850 hover:bg-gold-500 hover:text-dark-950 text-gray-300 flex items-center justify-center transition-all border border-dark-750"
              >
                <Phone className="w-3.5 h-3.5" />
              </a>
              <a
                href={`https://wa.me/${BARBERSHOP_DATA.whatsappRaw}?text=${encodeURIComponent('Hola Buffalo\'s Barbershop!')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-dark-850 hover:bg-emerald-600 hover:text-white text-emerald-400 flex items-center justify-center transition-all border border-dark-750"
              >
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
              <a
                href={BARBERSHOP_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-dark-850 hover:bg-pink-600 hover:text-white text-gray-300 flex items-center justify-center transition-all border border-dark-750"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider mb-4">
              Navegación
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#servicios" className="hover:text-gold-400 transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#maestros" className="hover:text-gold-400 transition-colors">
                  {t.nav.masters}
                </a>
              </li>
              <li>
                <a href="#productos" className="hover:text-gold-400 transition-colors">
                  {t.nav.products}
                </a>
              </li>
              <li>
                <a href="#promociones" className="hover:text-gold-400 transition-colors">
                  {t.nav.promos}
                </a>
              </li>
              <li>
                <a href="#academia" className="hover:text-gold-400 transition-colors">
                  {t.nav.academy}
                </a>
              </li>
            </ul>
          </div>

          {/* Sede y Contacto */}
          <div>
            <h5 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider mb-4">
              Sede Maracay
            </h5>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>Centro Comercial Las Américas, Av. Las Delicias, Maracay.</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <span>{BARBERSHOP_DATA.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: {BARBERSHOP_DATA.whatsapp}</span>
              </li>
            </ul>
          </div>

          {/* Horario & Métodos de Pago */}
          <div>
            <h5 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider mb-4">
              Horario & Pagos
            </h5>
            <p className="text-xs text-gray-300 font-medium mb-1">
              Lunes a Sábado: 9:00 AM - 8:00 PM
            </p>
            <p className="text-xs text-gold-400 font-medium mb-4">
              Domingo: 10:00 AM - 5:00 PM
            </p>
            <div className="p-3 rounded-lg bg-dark-900 border border-dark-800 text-[11px] text-gray-400 leading-tight">
              💵 Aceptamos: Dólares en efectivo, Zelle, Pago Móvil y Tarjetas a tasa BCV.
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 border-t border-dark-800 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Buffalo's Barbershop. Todos los derechos reservados. Maracay, Venezuela.</p>
          <button
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 flex items-center gap-1.5 text-gold-400 hover:text-gold-300 font-semibold cursor-pointer"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
