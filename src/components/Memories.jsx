import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import memory1 from '../assets/g-1.jpg';
import memory2 from '../assets/g-2.jpg';
import memory3 from '../assets/g-3.jpg';
import memory4 from '../assets/g-4.jpg';
import memory5 from '../assets/g-5.jpg';
import memory6 from '../assets/g-6.jpg';
import memory7 from '../assets/g-7.jpg';

const photos = [
    { id: 1, src: memory1, alt: 'Romantic moment' },
    { id: 2, src: memory2, alt: 'Together' },
    { id: 3, src: memory3, alt: 'Wedding vibes' },
    { id: 4, src: memory4, alt: 'Love' },
    { id: 5, src: memory5, alt: 'Us' },
    { id: 6, src: memory6, alt: 'Forever' },
];

const Memories = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
            let nextIndex = prevIndex + newDirection;
            if (nextIndex < 0) nextIndex = photos.length - 1;
            if (nextIndex >= photos.length) nextIndex = 0;
            return nextIndex;
        });
    };

    useEffect(() => {
        const timer = setInterval(() => {
            paginate(1);
        }, 5000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    return (
        <section id="memories" className="py-20 bg-rose-100 overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-4xl font-great-vibes text-center text-rose-600 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Our Unforgettable Moments ✨
                </motion.h2>

                <div className="relative h-[60vh] md:h-[70vh] w-full max-w-5xl mx-auto flex items-center justify-center">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.img
                            key={currentIndex}
                            src={photos[currentIndex].src}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);

                                if (swipe < -swipeConfidenceThreshold) {
                                    paginate(1);
                                } else if (swipe > swipeConfidenceThreshold) {
                                    paginate(-1);
                                }
                            }}
                            className="absolute w-full h-full object-contain rounded-2xl shadow-2xl bg-white/50 backdrop-blur-sm"
                        />
                    </AnimatePresence>

                    <button
                        className="absolute left-4 md:left-2 z-10 p-3 bg-white/50 backdrop-blur-sm rounded-full text-rose-600 hover:bg-white hover:scale-110 transition-all shadow-lg"
                        onClick={() => paginate(-1)}
                    >
                        <ChevronLeft size={32} />
                    </button>
                    <button
                        className="absolute right-4 md:right-2 z-10 p-3 bg-white/50 backdrop-blur-sm rounded-full text-rose-600 hover:bg-white hover:scale-110 transition-all shadow-lg"
                        onClick={() => paginate(1)}
                    >
                        <ChevronRight size={32} />
                    </button>
                </div>

                <div className="flex justify-center mt-8 gap-3">
                    {photos.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                            }}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-rose-600 w-8' : 'bg-rose-300'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Memories;
