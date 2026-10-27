import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, MapPin, Calendar, ShieldCheck, ArrowRight, Star } from 'lucide-react';
import { BARBERSHOP_DATA } from '../data/barbershopData';
import { BarberScissorsIcon, BarberRazorIcon } from './BarberEmblemIcons';

export function Hero({ t, onOpenBooking }) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Dynamic Background Montage with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center filter contrast-125 brightness-[0.32] scale-105 transform animate-pulse duration-[8000ms]"
          style={{ backgroundImage: `url('/images/salon-action.jpg')` }}
        />
        {/* Luxury gradient overlays for maximum contrast and brutalist atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/70 to-dark-950/90" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-dark-950/60 to-dark-950" />
        <div className="absolute inset-0 bg-stripes opacity-40 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Badges with Rotating Barber Icon */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-dark-900/90 border border-gold-500/40 text-xs sm:text-sm text-gold-300 mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(197,160,89,0.2)]"
        >
          {/* Rotating barber icon */}
          <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-gold-500 to-amber-300 text-dark-950 flex items-center justify-center font-bold text-xs animate-[spin_4s_linear_infinite]">
            ✂
          </div>
          <span className="font-semibold tracking-wider uppercase">{t.hero.tagline}</span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-300 hidden sm:inline">{t.hero.since}</span>
        </motion.div>

        {/* Heraldic Central Trio: Scissors (Left) - Large Buffalo Crest (Center) - Straight Razor (Right) */}
        <div className="flex items-center justify-center gap-4 sm:gap-8 mb-8">
          {/* Left: Stylized Barber Scissors */}
          <motion.div
            initial={{ opacity: 0, x: -30, rotate: -15 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center group cursor-default"
          >
            <div className="p-3 sm:p-4 rounded-2xl bg-dark-900/85 border border-gold-500/35 backdrop-blur-md shadow-[0_0_25px_rgba(197,160,89,0.25)] group-hover:scale-110 group-hover:border-gold-400 group-hover:shadow-[0_0_35px_rgba(197,160,89,0.45)] transition-all duration-300">
              <BarberScissorsIcon className="w-10 h-10 sm:w-14 sm:h-14 transform -scale-x-100 group-hover:-rotate-12 transition-transform duration-300" />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-gold-400 font-bold mt-2 hidden sm:block">
              Tijeras Pro
            </span>
          </motion.div>

          {/* Center: Large Perfectly Centered Buffalo's Logo in Glowing Gold Ring */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative w-36 h-36 sm:w-44 sm:h-44 group shrink-0"
          >
            {/* Subtle rotating gold dashed accent ring */}
            <div className="absolute -inset-2 rounded-full border border-dashed border-gold-400/60 animate-[spin_16s_linear_infinite] pointer-events-none" />

            {/* Golden Yellow Border Frame */}
            <div className="w-full h-full rounded-full p-1.5 bg-gradient-to-tr from-gold-600 via-gold-400 to-amber-300 shadow-[0_0_45px_rgba(197,160,89,0.5)] group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full rounded-full overflow-hidden bg-black border-2 border-dark-950 flex items-center justify-center">
                <img
                  src="/images/logo-buffalos.png"
                  alt="Buffalo's Barbershop"
                  className="w-full h-full object-cover object-center filter contrast-125 brightness-110"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Stylized Straight Razor Blade */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotate: 15 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center group cursor-default"
          >
            <div className="p-3 sm:p-4 rounded-2xl bg-dark-900/85 border border-gold-500/35 backdrop-blur-md shadow-[0_0_25px_rgba(197,160,89,0.25)] group-hover:scale-110 group-hover:border-gold-400 group-hover:shadow-[0_0_35px_rgba(197,160,89,0.45)] transition-all duration-300">
              <BarberRazorIcon className="w-10 h-10 sm:w-14 sm:h-14 group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-gold-400 font-bold mt-2 hidden sm:block">
              Navaja Libre
            </span>
          </motion.div>
        </div>

        {/* Hero Headings */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight"
        >
          {t.hero.titleMain.split('Maracay')[0]}
          <span className="gold-gradient-text">Maracay</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12"
        >
          {/* Primary Action Button */}
          <button
            onClick={() => onOpenBooking()}
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-gradient-to-r from-gold-400 via-gold-500 to-amber-500 text-dark-950 font-bold text-sm sm:text-base uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(197,160,89,0.4)] hover:shadow-[0_0_35px_rgba(197,160,89,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <Scissors className="w-5 h-5 -rotate-45" />
            <span>{t.hero.ctaBook}</span>
          </button>

          {/* Secondary Action Button */}
          <a
            href="#servicios"
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-dark-900/80 hover:bg-dark-800 text-gray-200 hover:text-gold-300 font-semibold text-sm sm:text-base uppercase tracking-wider border border-dark-700 hover:border-gold-500/40 backdrop-blur-md flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <span>{t.hero.ctaServices}</span>
            <ArrowRight className="w-4 h-4 text-gold-400" />
          </a>
        </motion.div>

        {/* Bottom Trust Factors (Prices strictly in USD) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-dark-800/80 max-w-3xl mx-auto text-left"
        >
          <div className="flex items-center gap-3 p-3 rounded-lg bg-dark-900/40 border border-dark-800/50">
            <MapPin className="w-5 h-5 text-gold-400 shrink-0" />
            <div className="text-xs">
              <p className="font-semibold text-gray-200">CC Las Américas</p>
              <p className="text-gray-400">Estacionamiento seguro</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-dark-900/40 border border-dark-800/50">
            <Star className="w-5 h-5 text-gold-400 shrink-0 fill-gold-400" />
            <div className="text-xs">
              <p className="font-semibold text-gray-200">+10.000 Cortes</p>
              <p className="text-gray-400">Calificación 4.9 ★★★★★</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-dark-900/40 border border-dark-800/50">
            <ShieldCheck className="w-5 h-5 text-gold-400 shrink-0" />
            <div className="text-xs">
              <p className="font-semibold text-gray-200">Precios en USD</p>
              <p className="text-gray-400">Efectivo USD y Zelle</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

