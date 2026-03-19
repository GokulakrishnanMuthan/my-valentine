import React from 'react';
import { motion } from 'framer-motion';
import SceneWrapper from './SceneWrapper';

const scenes = [
    {
        id: 'scene-1',
        date: '08-12-2016',
        title: 'The Beginning',
        subtitle: 'Scene I: Our First Meet',
        description: 'The moment our eyes met, and I knew this was the beginning of something special.',
        bg: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&q=80&w=2574',
    },
    {
        id: 'scene-2',
        date: '06-09-2018',
        title: 'The Promise',
        subtitle: 'Scene II: Our Engagement',
        description: 'Where our forever began—sealed with love, joy, and a promise to always stand together.',
        bg: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=2670',
    },
    {
        id: 'scene-3',
        date: '13-06-2019',
        title: 'The Wedding',
        subtitle: 'Scene III: Our Marriage',
        description: 'The day we promised forever. The most beautiful chapter of our lives began here.',
        bg: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2670',
    },
    {
        id: 'scene-4',
        date: '20-11-2025',
        title: 'The Miracle',
        subtitle: 'Scene IV: Blessed with Twins',
        description: 'Two little miracles entered our lives, bringing double the love, laughter, and a lifetime of beautiful moments.',
        bg: 'https://images.unsplash.com/photo-1555252333-978fead067f9?auto=format&fit=crop&q=80&w=2670',
    },
];

const TimelineScene = ({ scene, index }) => {
    return (
        <SceneWrapper 
            id={scene.id}
            title={scene.title}
            subtitle={scene.subtitle}
            bgImage={scene.bg}
            overlayOpacity={0.25}
        >
            <motion.div
                className="max-w-4xl mx-auto text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, ease: [0.2, 0, 0, 1] }}
            >
                <div className="glass-effect p-10 md:p-16 border border-white/40 shadow-premium">
                    <span className="text-romantic-rose/60 font-cinzel tracking-[0.3em] uppercase text-xs mb-4 block font-bold">
                        {scene.date}
                    </span>
                    <p className="text-gray-700 text-xl md:text-3xl font-playfair italic leading-relaxed">
                        "{scene.description}"
                    </p>
                    <div className="h-[1px] w-24 bg-romantic-gold/20 mx-auto mt-10" />
                </div>
            </motion.div>
        </SceneWrapper>
    );
};

const Timeline = () => {
    return (
        <section id="timeline">
            {scenes.map((scene, index) => (
                <TimelineScene key={scene.id} scene={scene} index={index} />
            ))}
        </section>
    );
};

export default Timeline;
