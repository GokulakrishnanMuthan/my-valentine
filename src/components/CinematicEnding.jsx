import React from 'react';
import { motion } from 'framer-motion';

const CinematicEnding = () => {
  return (
    <section className="h-[100svh] bg-romantic-cream flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 3, ease: [0.2, 0, 0, 1] }}
        className="z-10"
      >
        <h2 className="text-romantic-rose/40 font-cinzel tracking-[0.8em] text-xs md:text-sm uppercase mb-16">
          Fin.
        </h2>

        <h1 className="text-gray-800 text-4xl md:text-7xl font-playfair italic mb-12 leading-tight">
          And this is just<br /> the beginning...
        </h1>

        <div className="flex flex-col items-center gap-6">
          <div className="h-[1px] w-24 bg-romantic-rose/20" />
          <p className="text-romantic-rose/60 font-cinzel tracking-[0.4em] text-xs uppercase font-bold">
            JP ❤️ Manjusha
          </p>
          <p className="text-gray-400 font-sans text-[10px] tracking-widest uppercase">
            Est. 08.12.2016
          </p>
        </div>
      </motion.div>

      {/* Atmospheric Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-romantic-rose/5 blur-[150px] z-0" />

      {/* Film Grain Overall Overlay */}
      <div className="film-grain" />
    </section>
  );
};

export default CinematicEnding;
