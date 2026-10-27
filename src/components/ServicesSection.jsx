import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Scissors, Sparkles, Check, ChevronRight } from 'lucide-react';
import { BARBERSHOP_DATA } from '../data/barbershopData';

export function ServicesSection({ lang, t, onSelectService }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: t.services.tabs.all },
    { id: 'cortes', label: t.services.tabs.cortes },
    { id: 'barba', label: t.services.tabs.barba },
    { id: 'afeitado', label: t.services.tabs.afeitado },
    { id: 'combos', label: t.services.tabs.combos },
    { id: 'tratamientos', label: t.services.tabs.tratamientos }
  ];

  const filteredServices = activeCategory === 'all'
    ? BARBERSHOP_DATA.services
    : BARBERSHOP_DATA.services.filter(s => s.category === activeCategory);

  return (
    <section id="servicios" className="py-20 bg-dark-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-gold-400 uppercase mb-3">
            <Scissors className="w-4 h-4 -rotate-45" />
            <span>MENU DE SERVICIOS EXCLUSIVOS</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {t.services.title}
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-gold-500 to-amber-500 text-dark-950 shadow-[0_0_15px_rgba(197,160,89,0.35)]'
                  : 'bg-dark-800/80 text-gray-300 hover:text-white hover:bg-dark-700 border border-dark-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => {
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group relative rounded-xl bg-dark-850/90 border border-dark-750 hover:border-gold-500/50 p-6 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between"
                >
                  {/* Top line badge */}
                  {service.tag && (
                    <span className="absolute top-4 right-4 text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-gold-500/20 text-gold-300 border border-gold-500/30">
                      {service.tag}
                    </span>
                  )}

                  <div>
                    {/* Header: Title and Price */}
                    <div className="flex items-start justify-between gap-4 mb-3 pr-16">
                      <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white group-hover:text-gold-300 transition-colors">
                        {service.name[lang] || service.name.es}
                      </h3>
                    </div>

                    {/* Price Block - USD Only */}
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="font-cinzel text-2xl font-extrabold text-gold-400">
                        ${service.priceUSD} USD
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
                      {service.description[lang] || service.description.es}
                    </p>
                  </div>

                  {/* Footer: Duration & Book CTA */}
                  <div className="pt-4 border-t border-dark-800 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                      <Clock className="w-3.5 h-3.5 text-gold-500" />
                      <span>{service.duration}</span>
                    </div>

                    <button
                      onClick={() => onSelectService(service)}
                      className="inline-flex items-center gap-1 px-4 py-2 rounded-md bg-dark-800 hover:bg-gold-500 text-gold-300 hover:text-dark-950 font-bold text-xs uppercase tracking-wider border border-dark-700 hover:border-gold-400 transition-all cursor-pointer"
                    >
                      <span>{t.services.bookThis}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
