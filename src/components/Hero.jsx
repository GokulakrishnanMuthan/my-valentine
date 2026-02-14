import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Hero = () => {
    const scrollToTimeline = () => {
        const timelineSection = document.getElementById('timeline');
        if (timelineSection) {
            timelineSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-rose-100 via-pink-100 to-rose-200 flex flex-col items-center justify-center text-center p-4">
            {/* Floating Hearts Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-rose-300/40"
                        initial={{
                            y: '100vh',
                            x: Math.random() * 100 + 'vw',
                            scale: Math.random() * 0.5 + 0.5,
                            opacity: 0,
                        }}
                        animate={{
                            y: '-10vh',
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: 'linear',
                            delay: Math.random() * 10,
                        }}
                    >
                        <Heart size={Math.random() * 40 + 20} fill="currentColor" />
                    </motion.div>
                ))}
            </div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="z-10 bg-white/30 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/50 max-w-2xl mx-auto"
            >
                <motion.h1
                    className="text-5xl md:text-7xl font-great-vibes text-rose-600 mb-4 drop-shadow-sm"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    Happy Valentine’s Day,<br />Kavitha ❤️
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl text-gray-700 mb-8 font-light"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    "Since <span className="font-semibold text-rose-500">29.04.2022</span>, every day with you is my favorite day."
                </motion.p>

                <motion.button
                    onClick={scrollToTimeline}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-rose-500 text-white rounded-full font-medium text-lg shadow-lg hover:bg-rose-600 transition-colors flex items-center gap-2 mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                >
                    Open My Heart 💌
                </motion.button>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 text-rose-400"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <Heart size={24} fill="currentColor" />
            </motion.div>
        </section>
    );
};

export default Hero;
