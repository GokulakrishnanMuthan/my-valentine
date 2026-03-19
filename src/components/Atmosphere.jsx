import React from 'react';
import { motion } from 'framer-motion';

const Atmosphere = () => {
    // Generate particles
    const particles = Array.from({ length: 40 });
    const orbs = Array.from({ length: 8 });

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {/* Soft Warm Base Gradient */}
            <div className="absolute inset-0 bg-romantic-cream/30" />
            
            {/* Cinematic Film Grain */}
            <div className="film-grain" />

            {/* Floating Warm Particles */}
            {particles.map((_, i) => (
                <motion.div
                    key={`p-${i}`}
                    className="absolute rounded-full"
                    style={{
                        width: Math.random() * 3 + 1,
                        height: Math.random() * 3 + 1,
                        background: Math.random() > 0.5 ? '#ff8fa3' : '#d4af37',
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        opacity: Math.random() * 0.4 + 0.1,
                        filter: 'blur(1px)',
                    }}
                    animate={{
                        y: [0, -100, 0],
                        x: [0, Math.random() * 50 - 25, 0],
                        opacity: [0, 0.5, 0],
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: Math.random() * 10,
                    }}
                />
            ))}

            {/* Sunlight Leaks / Glows */}
            {orbs.map((_, i) => (
                <motion.div
                    key={`o-${i}`}
                    className="absolute rounded-full"
                    style={{
                        width: Math.random() * 600 + 300,
                        height: Math.random() * 600 + 300,
                        background: `radial-gradient(circle, ${i % 2 === 0 ? 'rgba(255,143,163,0.1)' : 'rgba(212,175,55,0.08)'} 0%, transparent 70%)`,
                        left: `${Math.random() * 100 - 20}%`,
                        top: `${Math.random() * 100 - 20}%`,
                        filter: 'blur(80px)',
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: Math.random() * 15 + 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Dreamy Overlay Bloom */}
            <div className="absolute inset-0 bg-gradient-to-tr from-romantic-rose/5 via-transparent to-romantic-gold/5 mix-blend-soft-light" />
        </div>
    );
};

export default Atmosphere;
