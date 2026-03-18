import React, { useRef } from 'react';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';
import { Gift, Heart } from 'lucide-react';

const Surprise = () => {
    const [showMessage, setShowMessage] = React.useState(false);
    const buttonRef = useRef(null);

    const handleClick = () => {
        // Fire confetti
        const duration = 5 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min, max) => Math.random() * (max - min) + min;

        const interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);

            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
            });
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
            });
        }, 250);

        setShowMessage(true);
    };

    return (
        <section className="py-24 bg-gradient-to-t from-rose-200 to-rose-50 flex items-center justify-center relative overflow-hidden">
            <div className="text-center z-10 px-4">
                {!showMessage ? (
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-rose-800 mb-8 font-great-vibes">One Last Surprise...</h2>
                        <motion.button
                            ref={buttonRef}
                            onClick={handleClick}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="bg-rose-500 text-white px-8 py-4 rounded-full font-bold text-xl shadow-lg hover:bg-rose-600 transition-colors flex items-center justify-center gap-3 mx-auto"
                        >
                            <Gift size={24} />
                            Click for Your Surprise
                        </motion.button>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, type: 'spring' }}
                        className="bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-2xl border-2 border-rose-300 max-w-2xl mx-auto"
                    >
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="text-rose-500 mb-6 flex justify-center"
                        >
                            <Heart size={60} fill="currentColor" />
                        </motion.div>

                        <h3 className="text-3xl font-bold text-rose-600 mb-6 font-great-vibes">My Dearest Manjusha,</h3>
                        <p className="text-xl text-gray-700 leading-relaxed font-light mb-6">
                            "I promise to love you more every single day. <br />
                            You are my forever and always."
                        </p>
                        <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">
                            Yours Forever
                        </p>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Surprise;
