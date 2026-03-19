import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

import memory1 from '../assets/memory-1.png';
import memory2 from '../assets/memory-2.png';
import memory3 from '../assets/memory-3.jpeg';
import memory4 from '../assets/memory-4.jpeg';
import memory5 from '../assets/memory-5.jpeg';
import memory6 from '../assets/memory-6.jpeg';
import memory7 from '../assets/memory-7.jpeg';
import memory8 from '../assets/memory-8.jpeg';
import memory9 from '../assets/memory-9.jpeg';
import memory10 from '../assets/memory-10.jpeg';
import memory11 from '../assets/memory-11.jpeg';



const photos = [
    { id: 1, src: memory1, alt: 'Romantic moment' },
    { id: 2, src: memory2, alt: 'Together' },
    { id: 3, src: memory3, alt: 'Wedding vibes' },
    { id: 4, src: memory4, alt: 'Love' },
    { id: 5, src: memory5, alt: 'Us' },
    { id: 6, src: memory6, alt: 'Forever' },    
    { id: 7, src: memory7, alt: 'Happiness' },
    { id: 8, src: memory8, alt: 'Joy' },
    { id: 9, src: memory9, alt: 'Togetherness' },
    { id: 10, src: memory10, alt: 'Our Story' },
    { id: 11, src: memory11, alt: 'Memories' },
];

const Gallery = () => {
    const [selectedId, setSelectedId] = useState(null);

    return (
        <section id="gallery" className="relative py-32 bg-romantic-cream/50">
            <div className="container mx-auto px-6">
                <motion.div
                    className="flex flex-col items-center mb-24"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: [0.2, 0, 0, 1] }}
                >
                    <span className="text-romantic-rose/40 font-cinzel tracking-[0.5em] uppercase text-xs mb-6">The Gallery</span>
                    <h2 className="text-5xl md:text-8xl font-playfair italic text-gray-800 text-center leading-tight">
                        Our Beautiful Memories
                    </h2>
                    <div className="w-24 h-[1px] bg-romantic-rose/20 mt-10" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
                    {photos.map((photo) => (
                        <motion.div
                            key={photo.id}
                            layoutId={`card-${photo.id}`}
                            onClick={() => setSelectedId(photo.id)}
                            className="cursor-pointer overflow-hidden aspect-[3/4] relative group shadow-premium ring-1 ring-black/5"
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
                        >
                            <motion.img
                                src={photo.src}
                                alt={photo.alt}
                                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-romantic-rose/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-10">
                                <span className="text-white font-cinzel text-xs tracking-[0.3em] uppercase border-b border-white/40 pb-2">View Scene</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedId && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12"
                            onClick={() => setSelectedId(null)}
                        >
                            <motion.div 
                                className="absolute inset-0 bg-romantic-cream/95 backdrop-blur-xl"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            />
                            
                            <div className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
                                <motion.button
                                    className="absolute top-0 right-0 p-4 text-gray-400 hover:text-gray-800 transition-colors z-[110]"
                                    onClick={() => setSelectedId(null)}
                                    whileHover={{ rotate: 90, scale: 1.2 }}
                                >
                                    <X size={40} strokeWidth={1} />
                                </motion.button>

                                {photos.map(photo => photo.id === selectedId && (
                                    <motion.div
                                        key={photo.id}
                                        layoutId={`card-${photo.id}`}
                                        className="relative w-full h-full flex flex-col items-center justify-center gap-8"
                                    >
                                        <div className="relative overflow-hidden shadow-2xl ring-1 ring-black/10 rounded-lg">
                                            <img
                                                src={photo.src}
                                                alt={photo.alt}
                                                className="max-w-full max-h-[75vh] object-contain"
                                            />
                                        </div>
                                        <p className="text-romantic-rose/40 font-cinzel tracking-[0.4em] uppercase text-sm mt-4 font-bold">
                                            STILL FROM SCENE {photo.id}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Gallery;
