import React from 'react';
import { motion } from 'framer-motion';
import SceneWrapper from './SceneWrapper';
import LoveCounter from './LoveCounter';

const Hero = () => {
    const scrollToTimeline = () => {
        const timelineSection = document.getElementById('timeline');
        if (timelineSection) {
            timelineSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <SceneWrapper 
            id="hero"
            subtitle="The Journey of Us"
            bgImage="https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=2586&auto=format&fit=crop"
            overlayOpacity={0.3}
        >
            <div className="flex flex-col items-center justify-center text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2.5, ease: [0.2, 0, 0, 1] }}
                    className="mb-12"
                >
                    <h1 className="text-5xl md:text-8xl font-cinzel text-gray-800 tracking-widest leading-none mb-4">
                        JP & MANJUSHA
                    </h1>
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-romantic-rose/40 to-transparent mb-4" />
                    <p className="text-romantic-rose font-playfair italic text-xl md:text-2xl tracking-[0.2em]">
                        A Love Story Eight Years in the Making
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 2 }}
                    className="max-w-xl"
                >
                    <p className="text-gray-600 text-lg md:text-xl font-light leading-relaxed mb-12 italic">
                        "Since 8-12-2016, every day with you has been a masterpiece of joy, 
                        a rewrite of my world into something infinitely more beautiful."
                    </p>
                </motion.div>

                <LoveCounter />

                <motion.button
                    onClick={scrollToTimeline}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-cinematic mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.2, duration: 1.2 }}
                >
                    Begin the Tale 🎞️
                </motion.button>
            </div>
        </SceneWrapper>
    );
};

export default Hero;
