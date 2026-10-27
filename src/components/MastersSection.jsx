import React from 'react';
import { motion } from 'framer-motion';
import { Award, Scissors, Star, Calendar } from 'lucide-react';
import { BARBERSHOP_DATA } from '../data/barbershopData';

export function MastersSection({ lang, t, onSelectMaster }) {
  return (
    <section id="maestros" className="py-20 bg-dark-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-gold-400 uppercase mb-3">
            <Award className="w-4 h-4" />
            <span>TALENTO DE ÉLITE EN MARACAY</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {t.masters.title}
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            {t.masters.subtitle}
          </p>
        </div>

        {/* Masters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BARBERSHOP_DATA.masters.map((master, idx) => (
            <motion.div
              key={master.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group rounded-2xl bg-dark-900 border border-dark-800 hover:border-gold-500/50 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
            >
              {/* Master Barber Image Frame */}
              <div className="relative h-64 overflow-hidden bg-dark-950">
                <img
                  src={master.photo}
                  alt={master.name}
                  className="w-full h-full object-cover barber-photo group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-90" />
                
                {/* Experience Badge */}
                <div className="absolute top-3 right-3 bg-dark-950/80 backdrop-blur-md border border-gold-500/30 px-2.5 py-1 rounded-full flex items-center gap-1.5 text-[11px] text-gold-300 font-semibold">
                  <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
                  <span>{master.experience}</span>
                </div>
              </div>

              {/* Master Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-cinzel text-xl font-bold text-white group-hover:text-gold-300 transition-colors">
                    {master.name}
                  </h3>
                  <p className="text-gold-400 text-xs font-semibold uppercase tracking-wider mb-3">
                    {master.role[lang] || master.role.es}
                  </p>
                  
                  <div className="bg-dark-950/60 rounded-lg p-3 border border-dark-800 mb-4 text-xs text-gray-300">
                    <span className="text-gray-400 block mb-1 font-medium">{t.masters.specialty}:</span>
                    <p className="leading-snug text-gray-200">
                      {master.specialty[lang] || master.specialty.es}
                    </p>
                  </div>
                </div>

                {/* Direct Booking with this Master */}
                <button
                  onClick={() => onSelectMaster(master)}
                  className="w-full py-2.5 rounded-lg bg-dark-800 hover:bg-gold-500 text-gray-200 hover:text-dark-950 font-bold text-xs uppercase tracking-wider border border-dark-700 hover:border-gold-400 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Scissors className="w-3.5 h-3.5 -rotate-45" />
                  <span>{t.masters.bookWith} {master.name.split(' ')[0]}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
