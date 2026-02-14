import React from 'react';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import LoveReasons from './components/LoveReasons';
import Memories from './components/Memories';
import Surprise from './components/Surprise';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-800 bg-rose-50 min-h-screen selection:bg-rose-200 selection:text-rose-900">
      <Hero />
      <Timeline />
      <Gallery />
      <LoveReasons />
      <Memories />
      <Surprise />
      <Footer />
    </div>
  );
}

export default App;
