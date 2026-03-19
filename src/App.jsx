import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import LoveReasons from './components/LoveReasons';
import Surprise from './components/Surprise';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';
import CinematicIntro from './components/CinematicIntro';
import Atmosphere from './components/Atmosphere';

import CinematicEnding from './components/CinematicEnding';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="cinematic-grading min-h-screen bg-romantic-cream selection:bg-romantic-rose/20 selection:text-romantic-rose">
      <AnimatePresence mode="wait">
        {showIntro ? (
          <CinematicIntro key="intro" onComplete={() => setShowIntro(false)} />
        ) : (
          <motion.main
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="relative"
          >
            <Atmosphere />
            <Hero />
            <Timeline />
            <Gallery />
            <LoveReasons />
            <Surprise />
            <CinematicEnding />
            <Footer />
            <MusicPlayer />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
