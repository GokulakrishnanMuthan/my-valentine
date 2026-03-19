import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(e => console.log("Autoplay blocked"));
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="fixed bottom-12 left-8 md:left-12 z-[110]">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 1 }}
                className="flex items-center gap-6"
            >
                <motion.button
                    onClick={togglePlay}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-16 h-16 glass-effect border border-romantic-rose/20 flex items-center justify-center relative group overflow-hidden rounded-full shadow-premium"
                >
                    <div className="absolute inset-0 bg-romantic-rose/5 group-hover:bg-romantic-rose/10 transition-colors" />
                    {isPlaying ? (
                        <Volume2 size={24} className="text-romantic-rose group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                    ) : (
                        <VolumeX size={24} className="text-gray-400 group-hover:text-romantic-rose transition-all duration-500" strokeWidth={1.5} />
                    )}
                </motion.button>
                
                <div className="flex flex-col">
                    <span className="text-gray-800 font-cinzel text-[10px] tracking-[0.4em] uppercase font-bold">Soundtrack</span>
                    <span className="text-romantic-rose/60 font-playfair italic text-xs">
                        {isPlaying ? "Enchanted Waltz - Cinematic" : "Music Paused"}
                    </span>
                </div>
            </motion.div>

            <audio
                ref={audioRef}
                src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                loop
            />
        </div>
    );
};

export default MusicPlayer;
