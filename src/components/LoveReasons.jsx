import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, X } from 'lucide-react';

const reasons = [
    "Your smile is my peace.",
    "You support me in everything.",
    "You make my life beautiful.",
    "You are my home.",
    "Your kindness inspires me.",
    "You make me laugh like no one else.",
    "I love how you care for us.",
    "You are my best friend forever."
];

const Card = ({ reason, onInteract }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleFlip = () => {
        if (!isAnimating) {
            setIsFlipped(!isFlipped);
            setIsAnimating(true);
            if (!isFlipped && onInteract) {
                onInteract();
            }
        }
    };

    return (
        <div className="h-48 w-full perspective-1000 cursor-pointer" onClick={handleFlip}>
            <motion.div
                className="w-full h-full relative preserve-3d"
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, animationDirection: "normal" }}
                onAnimationComplete={() => setIsAnimating(false)}
            >
                {/* Front */}
                <div className="absolute inset-0 backface-hidden bg-rose-400 rounded-2xl shadow-lg flex items-center justify-center p-6 border-4 border-rose-200">
                    <Heart className="w-16 h-16 text-white animate-pulse" fill="#fff" />
                    <span className="absolute bottom-4 text-white font-medium text-sm">Tap to see why ❤️</span>
                </div>

                {/* Back */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white rounded-2xl shadow-lg flex items-center justify-center p-6 border-4 border-rose-400">
                    <p className="text-center text-rose-600 font-great-vibes text-2xl leading-relaxed">
                        "{reason}"
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

const LoveReasons = () => {
    const [clickedIndices, setClickedIndices] = useState(new Set());
    const [showSecret, setShowSecret] = useState(false);

    const handleCardInteract = (index) => {
        if (showSecret) return;

        const newSet = new Set(clickedIndices);
        newSet.add(index);
        setClickedIndices(newSet);

        if (newSet.size === 3) {
            setShowSecret(true);
        }
    };

    return (
        <section className="py-20 bg-rose-50 relative">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-4xl font-great-vibes text-center text-rose-600 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Why I Love You ❤️
                </motion.h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    {reasons.map((reason, index) => (
                        <Card
                            key={index}
                            reason={reason}
                            onInteract={() => handleCardInteract(index)}
                        />
                    ))}
                </div>
            </div>

            {/* Secret Modal */}
            <AnimatePresence>
                {showSecret && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center px-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Backdrop */}
                        <div
                            className="absolute inset-0 bg-black/60 backdrop-blur-md"
                            onClick={() => setShowSecret(false)}
                        />

                        {/* Modal Content */}
                        <motion.div
                            className="relative z-10 bg-gradient-to-br from-rose-100 to-white p-8 md:p-12 rounded-3xl shadow-2xl border-2 border-rose-200 max-w-2xl w-full text-center overflow-hidden"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        >
                            {/* Floating Petals Background Animation */}
                            {[...Array(12)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute pointer-events-none"
                                    initial={{
                                        y: -20,
                                        x: Math.random() * 100 + "%",
                                        opacity: 0,
                                        rotate: 0
                                    }}
                                    animate={{
                                        y: 400,
                                        opacity: [0, 1, 0],
                                        rotate: 360
                                    }}
                                    transition={{
                                        duration: Math.random() * 5 + 5,
                                        repeat: Infinity,
                                        delay: Math.random() * 2,
                                        ease: "linear"
                                    }}
                                >
                                    <span className="text-xl">🌸</span>
                                </motion.div>
                            ))}

                            <button
                                onClick={() => setShowSecret(false)}
                                className="absolute top-4 right-4 text-rose-400 hover:text-rose-600 transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                <Heart className="w-20 h-20 text-rose-500 mx-auto mb-6 fill-current animate-pulse drop-shadow-lg" />
                                <h3 className="text-3xl md:text-5xl font-great-vibes text-rose-600 mb-6 leading-tight drop-shadow-md">
                                    Sandeep, you are the best decision of my life ❤️
                                </h3>
                                <p className="text-rose-400 font-light tracking-widest text-sm uppercase">
                                    Forever & Always
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default LoveReasons;
