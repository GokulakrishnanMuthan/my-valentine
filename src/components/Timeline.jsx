import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Calendar, MapPin, Camera } from 'lucide-react';

const events = [
    {
        date: 'March 1, 2022',
        title: 'Our First Meet',
        description: 'The moment our eyes met, and I knew this was the beginning of something special.',
        icon: <Heart className="w-6 h-6" />,
    },
    {
        date: '29.04.2022',
        title: 'Our Marriage',
        description: 'The day we promised forever. The most beautiful chapter of our lives began here.',
        icon: <Heart className="w-6 h-6" />,
    },
    {
        date: '27.03.2023',
        title: 'Baby Shower',
        description: 'Celebrating the blessing of new life and the beautiful journey of parenthood.',
        icon: <Heart className="w-6 h-6" />,
    },
    {
        date: '08.06.2023',
        title: 'Our Son Born',
        description: 'Our little prince arrived, filling our world with endless joy and love.',
        icon: <Heart className="w-6 h-6" />,
    },
    {
        date: '14.02.2026',
        title: 'Valentine’s Day',
        description: 'Celebrating our love today and forever. You are my greatest gift.',
        icon: <Heart className="w-6 h-6" />,
    },
];

const TimelineItem = ({ event, index }) => {
    return (
        <motion.div
            className={`flex flex-col md:flex-row items-center justify-between w-full mb-8 md:mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
        >
            <div className="w-full md:w-5/12 mb-4 md:mb-0 pl-12 md:pl-0 relative">
                {/* Mobile Icon (Absolute positioned) */}
                <div className="absolute left-0 top-0 md:hidden w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center text-white shadow-lg border-4 border-rose-200 z-10">
                    {event.icon}
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-rose-400 hover:shadow-xl transition-shadow relative">
                    {/* Desktop Arrow (Optional, keeping simple for now) */}
                    <span className="text-rose-500 font-bold text-sm uppercase tracking-wider block mb-1">{event.date}</span>
                    <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
                    <p className="text-gray-600 mt-2">{event.description}</p>
                </div>
            </div>

            {/* Desktop Icon (Center Spine) */}
            <div className="hidden md:flex w-8 h-8 bg-rose-500 rounded-full items-center justify-center text-white shadow-lg border-4 border-rose-200 z-10">
                {event.icon}
            </div>

            <div className="w-full md:w-5/12 hidden md:block"></div>
        </motion.div>
    );
};

const Timeline = () => {
    return (
        <section id="timeline" className="py-20 bg-rose-50 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-4xl font-great-vibes text-center text-rose-600 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Our Love Story
                </motion.h2>

                <div className="relative wrap overflow-hidden p-4 h-full">
                    {/* Vertical Line: Left on mobile, Center on desktop */}
                    <div className="absolute border-opacity-20 border-rose-500 h-full border-l-2 left-8 md:left-1/2 transform -translate-x-1/2"></div>

                    <div className="flex flex-col items-center">
                        {events.map((event, index) => (
                            <TimelineItem key={index} event={event} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
