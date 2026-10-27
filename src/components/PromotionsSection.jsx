import React from 'react';
import { motion } from 'framer-motion';
import { Tag, Sparkles, Scissors, ArrowRight } from 'lucide-react';
import { BARBERSHOP_DATA } from '../data/barbershopData';

export function PromotionsSection({ lang, t, onOpenBooking }) {
  return (
    <section id="promociones" className="py-20 bg-dark-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-gold-400 uppercase mb-3">
            <Tag className="w-4 h-4" />
            <span>BENEFICIOS EXCLUSIVOS</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {t.promos.title}
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            {t.promos.subtitle}
          </p>
        </div>

        {/* Promotions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BARBERSHOP_DATA.promotions.map((promo, idx) => (
            <motion.div
              key={promo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className="relative rounded-2xl bg-gradient-to-b from-dark-850 to-dark-900 border border-gold-500/25 p-7 flex flex-col justify-between hover:border-gold-500/60 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(197,160,89,0.15)] group"
            >
              {/* Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 border border-gold-500/30">
                  {promo.badge}
                </span>
                <span className="font-cinzel text-2xl font-extrabold text-gold-400 drop-shadow">
                  {promo.discount}
                </span>
              </div>

              <div>
                <h3 className="font-cinzel text-xl font-bold text-white mb-3 group-hover:text-gold-300 transition-colors">
                  {promo.title[lang] || promo.title.es}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 font-montserrat">
                  {promo.desc[lang] || promo.desc.es}
                </p>
              </div>

              <button
                onClick={() => onOpenBooking()}
                className="w-full py-3 rounded-lg bg-gold-500/10 hover:bg-gold-500 text-gold-300 hover:text-dark-950 font-bold text-xs uppercase tracking-wider border border-gold-500/40 hover:border-gold-400 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t.promos.applyNow}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
