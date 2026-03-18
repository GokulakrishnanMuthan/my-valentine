import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

import memory1 from '../assets/memory-1.png';
import memory2 from '../assets/memory-2.png';
import memory3 from '../assets/memory-3.jpeg';
import memory4 from '../assets/memory-4.jpeg';
import memory5 from '../assets/memory-5.jpeg';
import memory6 from '../assets/memory-6.JPEG';
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
        <section id="gallery" className="py-20 bg-gradient-to-b from-rose-50 to-pink-100">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-4xl font-great-vibes text-center text-rose-600 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Our Beautiful Memories 📸
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {photos.map((photo) => (
                        <motion.div
                            key={photo.id}
                            layoutId={`card-${photo.id}`}
                            onClick={() => setSelectedId(photo.id)}
                            className="cursor-pointer overflow-hidden rounded-2xl shadow-md bg-white aspect-[4/3] relative group"
                            whileHover={{ scale: 1.02, shadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
                        >
                            <motion.img
                                src={photo.src}
                                alt={photo.alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">View</span>
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
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                            onClick={() => setSelectedId(null)}
                        >
                            <div className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                                <motion.button
                                    className="absolute -top-12 right-0 text-white hover:text-rose-400 transition-colors"
                                    onClick={() => setSelectedId(null)}
                                >
                                    <X size={32} />
                                </motion.button>
                                {photos.map(photo => photo.id === selectedId && (
                                    <motion.img
                                        key={photo.id}
                                        layoutId={`card-${photo.id}`}
                                        src={photo.src}
                                        alt={photo.alt}
                                        className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                                    />
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
