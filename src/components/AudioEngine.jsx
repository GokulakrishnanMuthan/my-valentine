import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

const AudioEngine = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Note: For a real app, I'd use a local asset. 
  // For this demo, I'll use a placeholder URL for romantic piano.
  const musicUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"; // Placeholder

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log("Audio play blocked by browser", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-10 right-10 z-[60] flex items-center gap-4">
      <audio ref={audioRef} src={musicUrl} loop />
      
      <motion.button
        onClick={togglePlay}
        className="w-12 h-12 rounded-full glass-effect flex items-center justify-center text-white/80 hover:text-white transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </motion.button>
      
      <AnimatePresence>
        {!isPlaying && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="text-white/40 font-cinzel text-[10px] tracking-widest uppercase"
          >
            Play Soundtrack
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AudioEngine;
