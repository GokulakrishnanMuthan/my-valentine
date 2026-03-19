import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Star, Moon, Sun, Coffee, Music, Camera } from 'lucide-react';

const reasons = [
    {
        title: "Your Kindness",
        description: "The way you care for everyone around you with such grace and warmth inspires me every single day.",
        icon: Heart
    },
    {
        title: "Your Smile",
        description: "It's the light that guides me through my darkest days and the joy that makes my brightest ones even better.",
        icon: Sun
    },
    {
        title: "Our Coffee Dates",
        description: "Those quiet moments shared over a cup of coffee are my favorite part of every week.",
        icon: Coffee
    },
    {
        title: "Your Strength",
        description: "The incredible resilience you show in everything you do makes me so proud to be by your side.",
        icon: Sparkles
    },
    {
        title: "Our Shared Dreams",
        description: "Building a future together is the most exciting adventure I could ever imagine.",
        icon: Moon
    },
    {
        title: "Your Laughter",
        description: "The most beautiful melody I've ever heard. It makes my heart skip a beat every time.",
        icon: Music
    }
];

const LoveReasons = () => {
    return (
        <section id="reasons" className="py-32 bg-romantic-cream relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="flex flex-col items-center mb-24"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: [0.2, 0, 0, 1] }}
                >
                    <span className="text-romantic-rose/40 font-cinzel tracking-[0.5em] uppercase text-xs mb-6 font-bold">The Reasons</span>
                    <h2 className="text-5xl md:text-8xl font-playfair italic text-gray-800 text-center leading-tight">
                        Why I Love You
                    </h2>
                    <div className="w-24 h-[1px] bg-romantic-rose/20 mt-10" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            className="glass-effect p-12 rounded-[40px] border border-white/40 group hover:bg-white/60 transition-all duration-700 shadow-premium flex flex-col items-center text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 1 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="mb-8 p-6 bg-romantic-rose/5 rounded-3xl group-hover:bg-romantic-rose/10 transition-colors">
                                <reason.icon className="text-romantic-rose w-10 h-10" strokeWidth={1} />
                            </div>
                            <h3 className="text-gray-800 text-2xl font-playfair italic mb-4">
                                {reason.title}
                            </h3>
                            <p className="text-gray-600 font-light leading-relaxed italic">
                                "{reason.description}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-1/4 left-0 w-64 h-64 bg-romantic-rose/5 blur-[100px] rounded-full" />
            <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-romantic-gold/5 blur-[100px] rounded-full" />
        </section>
    );
};

export default LoveReasons;
