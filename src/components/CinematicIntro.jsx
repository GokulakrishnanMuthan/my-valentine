import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CinematicIntro = ({ onComplete }) => {
  const [showQuote, setShowQuote] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowQuote(false);
      setTimeout(onComplete, 2000);
    }, 6000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-romantic-cream flex items-center justify-center overflow-hidden">
      {/* Soft Ethereal Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-romantic-rose/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-romantic-gold/5 blur-[120px] rounded-full" />

      <AnimatePresence>
        {showQuote && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, filter: 'blur(20px)', scale: 1.1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="text-center px-12 relative z-10"
          >
            <motion.p
              className="text-romantic-rose/40 font-cinzel tracking-[0.5em] text-[10px] uppercase mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1.5 }}
            >
              A JP & Manjusha Production
            </motion.p>

            <h1 className="text-gray-800 text-3xl md:text-5xl font-playfair italic leading-relaxed max-w-2xl mx-auto overflow-hidden whitespace-nowrap border-r-2 border-romantic-rose animate-typing">
              Every love story is beautiful…
            </h1>
            <motion.h2
              className="text-romantic-rose text-4xl md:text-6xl font-playfair italic mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5, duration: 1.5 }}
            >
              but ours is my favorite.
            </motion.h2>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Atmospheric Particles (Subtle) */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-romantic-gold/30 rounded-full blur-[1px] animate-float-warm" />
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-romantic-rose/20 rounded-full blur-[2px] animate-float-warm [animation-delay:2s]" />
      </div>
    </div>
  );
};

export default CinematicIntro;
