import React from 'react';
import { motion } from 'framer-motion';

const SceneWrapper = ({ 
  children, 
  id, 
  title, 
  subtitle, 
  bgImage, 
  overlayOpacity = 0.4,
  kenBurns = true 
}) => {
  return (
    <section 
      id={id}
      className="relative min-h-[100svh] w-full flex flex-col items-center justify-center overflow-hidden snap-start"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        {bgImage && (
          <motion.div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
            animate={kenBurns ? { scale: [1, 1.1] } : {}}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              repeatType: "alternate", 
              ease: "linear" 
            }}
          />
        )}
        
        {/* Cinematic Color Grading Overlay */}
        <div 
          className="absolute inset-0 bg-romantic-cream mix-blend-multiply"
          style={{ opacity: overlayOpacity }}
        />
        
        {/* Warm Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-romantic-rose/5 via-transparent to-romantic-gold/10" />
      </div>

      {/* Header Credits (Scene Labeling) */}
      {(title || subtitle) && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute top-12 md:top-20 z-20 text-center"
        >
          {subtitle && (
            <span className="block text-romantic-rose/60 font-cinzel tracking-[0.4em] text-[10px] md:text-xs uppercase mb-2">
              {subtitle}
            </span>
          )}
          {title && (
            <h2 className="text-gray-800/80 text-xl md:text-3xl font-playfair italic tracking-widest">
              {title}
            </h2>
          )}
          <div className="h-[1px] w-12 bg-romantic-rose/20 mx-auto mt-4" />
        </motion.div>
      )}

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 0.8 }}
        className="relative z-10 w-full px-6"
      >
        {children}
      </motion.div>

      {/* Film Grain Rendering */}
      <div className="film-grain" />
    </section>
  );
};

export default SceneWrapper;
