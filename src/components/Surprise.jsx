import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Heart } from 'lucide-react';
import SceneWrapper from './SceneWrapper';

const Surprise = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <SceneWrapper 
            id="surprise"
            title="A Final Word"
            subtitle="Scene V: The Eternal Promise"
            bgImage="https://images.unsplash.com/photo-1516589174184-c6852651428?auto=format&fit=crop&q=80&w=2574"
            overlayOpacity={0.4}
        >
            <div className="flex flex-col items-center">
                <AnimatePresence mode="wait">
                    {!isOpen ? (
                        <motion.div
                            key="gift-box"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
                            className="flex flex-col items-center"
                        >
                            <motion.button
                                onClick={() => setIsOpen(true)}
                                className="w-40 h-40 bg-white/40 backdrop-blur-xl border border-romantic-rose/20 flex items-center justify-center relative group overflow-hidden rounded-2xl shadow-premium"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="absolute inset-0 bg-romantic-rose/5 group-hover:bg-romantic-rose/10 transition-colors" />
                                <Gift size={64} className="text-romantic-rose/60 group-hover:text-romantic-rose transition-all duration-700 group-hover:scale-110" strokeWidth={1} />
                                <motion.div 
                                    className="absolute inset-0 border border-romantic-rose/20"
                                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            </motion.button>
                            <p className="mt-12 text-romantic-rose font-cinzel tracking-[0.4em] uppercase text-xs font-bold">
                                Open the Final Chapter
                            </p>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="surprise-content"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2, ease: [0.2, 0, 0, 1] }}
                            className="text-center max-w-3xl glass-effect p-16 rounded-[40px]"
                        >
                            <p className="text-gray-700 text-3xl md:text-5xl font-playfair italic leading-relaxed mb-12">
                                "In all the world, there is no heart for me like yours.<br />
                                In all the world, there is no love for you like mine."
                            </p>
                            
                            <div className="flex flex-col items-center gap-8">
                                <div className="h-[1px] w-24 bg-romantic-rose/20" />
                                <h4 className="text-romantic-rose font-cinzel tracking-[0.8em] text-sm uppercase font-bold">Forever Yours</h4>
                                <motion.div
                                    animate={{ scale: [1, 1.15, 1] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <Heart className="text-romantic-rose fill-current w-12 h-12" />
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </SceneWrapper>
    );
};

export default Surprise;
