import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

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

const Card = ({ reason }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleFlip = () => {
        if (!isAnimating) {
            setIsFlipped(!isFlipped);
            setIsAnimating(true);
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
    return (
        <section className="py-20 bg-rose-50">
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
                        <Card key={index} reason={reason} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LoveReasons;
