import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Sparkles, Check, DollarSign } from 'lucide-react';
import { BARBERSHOP_DATA, BCV_RATE } from '../data/barbershopData';

export function ProductsSection({ lang, t }) {
  const [reservedList, setReservedList] = useState({});

  const handleToggleReserve = (productId) => {
    setReservedList(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  return (
    <section id="productos" className="py-20 bg-dark-900/50 relative border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-gold-400 uppercase mb-3">
            <ShoppingBag className="w-4 h-4" />
            <span>LÍNEA DE CUIDADO MASCULINO PROFESIONAL</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {t.products.title}
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            {t.products.subtitle}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BARBERSHOP_DATA.products.map((item, idx) => {
            const isReserved = !!reservedList[item.id];
            const priceBs = (item.priceUSD * BCV_RATE).toFixed(0);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="rounded-2xl bg-dark-850 border border-dark-800 hover:border-gold-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
              >
                <div>
                  {/* Category & Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold-400/80 bg-gold-500/10 px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                    {item.tag && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        {item.tag}
                      </span>
                    )}
                  </div>

                  {/* Brand & Name */}
                  <p className="text-[11px] uppercase tracking-widest text-gray-400 font-semibold mb-1">
                    {item.brand}
                  </p>
                  <h3 className="font-cinzel text-lg font-bold text-white mb-3">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-xs leading-relaxed mb-6">
                    {item.description[lang] || item.description.es}
                  </p>
                </div>

                {/* Price & Action Button */}
                <div className="pt-4 border-t border-dark-800 flex items-center justify-between">
                  <div>
                    <span className="font-cinzel text-xl font-bold text-gold-400">
                      ${item.priceUSD}
                    </span>
                    <span className="text-[11px] text-gray-400 block -mt-1">
                      ~{priceBs} Bs.
                    </span>
                  </div>

                  <button
                    onClick={() => handleToggleReserve(item.id)}
                    className={`px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                      isReserved
                        ? 'bg-emerald-600 text-white'
                        : 'bg-dark-800 hover:bg-gold-500 text-gray-200 hover:text-dark-950 border border-dark-700 hover:border-gold-400'
                    }`}
                  >
                    {isReserved ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Apartado</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>{t.products.reserveProduct}</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
