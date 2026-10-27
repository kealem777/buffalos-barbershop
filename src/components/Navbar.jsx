import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Instagram, Menu, X, Globe, Scissors } from 'lucide-react';
import { BARBERSHOP_DATA } from '../data/barbershopData';

export function Navbar({ lang, setLang, t, onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#servicios', label: t.nav.services },
    { href: '#maestros', label: t.nav.masters },
    { href: '#productos', label: t.nav.products },
    { href: '#promociones', label: t.nav.promos },
    { href: '#academia', label: t.nav.academy },
    { href: '#contacto', label: t.nav.contact }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-950/95 backdrop-blur-md border-b border-dark-800 shadow-xl py-2.5'
          : 'bg-gradient-to-b from-dark-950/90 via-dark-950/50 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full p-[1.5px] bg-gradient-to-br from-gold-400 to-gold-700 shadow-md">
              <img
                src="/images/logo-buffalos.jpg"
                alt="Buffalo's Barbershop"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-cinzel text-lg sm:text-xl font-bold tracking-wider text-white group-hover:text-gold-400 transition-colors">
                BUFFALO'S
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold -mt-1">
                BARBERSHOP • MARACAY
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-gold-400 transition-colors uppercase tracking-wider py-1 border-b-2 border-transparent hover:border-gold-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Icons & CTA */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Quick Contact Icons */}
            <div className="hidden sm:flex items-center gap-2 pr-2 border-r border-dark-700">
              {/* Phone direct call */}
              <a
                href={`tel:${BARBERSHOP_DATA.phoneRaw}`}
                title="Llamar a Buffalo's Barbershop"
                className="w-9 h-9 rounded-full bg-dark-850 hover:bg-gold-500 hover:text-dark-950 text-gray-300 flex items-center justify-center transition-all border border-dark-700 hover:border-gold-400"
              >
                <Phone className="w-4 h-4" />
              </a>

              {/* WhatsApp direct */}
              <a
                href={`https://wa.me/${BARBERSHOP_DATA.whatsappRaw}?text=${encodeURIComponent(
                  'Hola Buffalo\'s Barbershop, me gustaría información o reservar una cita en CC Las Américas.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Chat de WhatsApp"
                className="w-9 h-9 rounded-full bg-dark-850 hover:bg-emerald-600 text-gray-300 hover:text-white flex items-center justify-center transition-all border border-dark-700 hover:border-emerald-500"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
              </a>

              {/* Instagram */}
              <a
                href={BARBERSHOP_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram @buffalosbarbershop"
                className="w-9 h-9 rounded-full bg-dark-850 hover:bg-gradient-to-tr hover:from-amber-500 hover:to-pink-600 text-gray-300 hover:text-white flex items-center justify-center transition-all border border-dark-700"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-dark-850 border border-dark-700 text-xs font-semibold text-gray-300 hover:text-gold-400 hover:border-gold-500/40 transition-colors"
              title="Cambiar idioma / Switch language"
            >
              <Globe className="w-3.5 h-3.5 text-gold-400" />
              <span>{lang.toUpperCase()}</span>
            </button>

            {/* Main CTA: Reservar Cita */}
            <button
              onClick={() => onOpenBooking()}
              className="relative inline-flex items-center justify-center px-4 sm:px-5 py-2 overflow-hidden text-xs sm:text-sm font-bold uppercase tracking-wider text-dark-950 bg-gradient-to-r from-gold-400 to-gold-600 rounded-md hover:from-gold-300 hover:to-gold-500 transition-all shadow-[0_0_15px_rgba(197,160,89,0.3)] hover:shadow-[0_0_22px_rgba(197,160,89,0.5)] cursor-pointer"
            >
              <Scissors className="w-4 h-4 mr-1.5 -rotate-45" />
              <span>{t.nav.bookBtn}</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-4 pb-6 px-4 bg-dark-900 border border-dark-700 rounded-xl shadow-2xl space-y-3">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-gray-200 hover:text-gold-400 hover:bg-dark-800 rounded-lg transition-colors uppercase tracking-wider"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-dark-800 flex items-center justify-around">
              <a
                href={`tel:${BARBERSHOP_DATA.phoneRaw}`}
                className="flex items-center gap-1.5 text-xs text-gray-300 hover:text-gold-400"
              >
                <Phone className="w-4 h-4 text-gold-400" />
                <span>Llamar</span>
              </a>
              <a
                href={`https://wa.me/${BARBERSHOP_DATA.whatsappRaw}?text=${encodeURIComponent('Hola Buffalo\'s Barbershop!')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <a
                href={BARBERSHOP_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-pink-400"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
