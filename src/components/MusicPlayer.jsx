import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Music, Volume2, VolumeX } from 'lucide-react';
import bgMusic from '../assets/Malare-Ninne.mp3';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio(bgMusic));

    useEffect(() => {
        const audio = audioRef.current;
        audio.loop = true;

        // Attempt autoplay on mount
        const playPromise = audio.play();

        if (playPromise !== undefined) {
            playPromise.then(() => {
                setIsPlaying(true);
            }).catch(error => {
                // Auto-play was prevented
                console.log("Autoplay prevented. Waiting for user interaction.");
                setIsPlaying(false);

                // Fallback: Play on first interaction
                const playOnInteraction = () => {
                    audio.play()
                        .then(() => {
                            setIsPlaying(true);
                            // Remove listeners once successful
                            document.removeEventListener('click', playOnInteraction);
                            document.removeEventListener('keydown', playOnInteraction);
                            document.removeEventListener('touchstart', playOnInteraction);
                            document.removeEventListener('scroll', playOnInteraction);
                        })
                        .catch(err => console.error("Interaction play failed:", err));
                };

                document.addEventListener('click', playOnInteraction);
                document.addEventListener('keydown', playOnInteraction);
                document.addEventListener('touchstart', playOnInteraction);
                document.addEventListener('scroll', playOnInteraction);
            });
        }

        return () => {
            audio.pause();
        };
    }, []);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <motion.button
            className="fixed bottom-4 left-4 z-50 p-3 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-rose-200 text-rose-600 hover:bg-rose-50 transition-all group"
            onClick={togglePlay}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
        >
            <div className="relative">
                {isPlaying ? (
                    <Volume2 size={24} className="animate-pulse" />
                ) : (
                    <VolumeX size={24} />
                )}

                {/* Ping animation when playing */}
                {isPlaying && (
                    <span className="absolute top-0 right-0 -mr-1 -mt-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
                    </span>
                )}
            </div>
        </motion.button>
    );
};

export default MusicPlayer;
