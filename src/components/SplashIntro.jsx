import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { logoImg } from '../assets/images';

export function SplashIntro({ onFinish, brandName = "BUFFALO'S", since = "2018" }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Auto-dismiss after 2.4 seconds for smooth entrance
    const timer = setTimeout(() => {
      handleClose();
    }, 2400);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => {
      if (onFinish) onFinish();
    }, 600);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-dark-950 text-white select-none overflow-hidden px-4"
        >
          {/* Subtle background radial glow */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-gold-500/10 blur-[120px] pointer-events-none" />

          {/* Glowing animated logo container */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex flex-col items-center"
          >
            {/* Outer rotating dashed accent ring */}
            <div className="relative w-48 h-48 sm:w-60 sm:h-60 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-gold-400/50 animate-[spin_10s_linear_infinite]" />

              {/* Yellow/Gold frame */}
              <div className="w-[90%] h-[90%] rounded-full p-1.5 bg-gradient-to-tr from-gold-600 via-gold-400 to-amber-300 shadow-[0_0_55px_rgba(197,160,89,0.45)]">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden border-2 border-dark-950">
                  <img
                    src={logoImg}
                    alt="Buffalo's Barbershop Logo"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Title & Slogan */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-center mt-6"
            >
              <h1 className="font-cinzel text-3xl sm:text-5xl font-extrabold tracking-widest text-white drop-shadow-md">
                BUFFALO'S
              </h1>
              <div className="flex items-center justify-center gap-3 mt-2">
                <span className="h-[1px] w-8 bg-gold-500/60" />
                <span className="font-cinzel text-xs sm:text-sm tracking-[0.3em] text-gold-400 uppercase font-semibold">
                  BARBERSHOP • MARACAY
                </span>
                <span className="h-[1px] w-8 bg-gold-500/60" />
              </div>
              <p className="text-gray-400 text-xs sm:text-sm mt-2 font-montserrat tracking-wider">
                SINCE {since} • CENTRO COMERCIAL LAS AMÉRICAS
              </p>
            </motion.div>
          </motion.div>

          {/* Quick enter button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            onClick={handleClose}
            className="mt-8 px-6 py-2 rounded-full border border-gold-500/30 text-gold-400 text-xs uppercase tracking-widest font-semibold hover:bg-gold-500/10 hover:border-gold-400 transition-all cursor-pointer"
          >
            Entrar al Sitio / Enter ➔
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
