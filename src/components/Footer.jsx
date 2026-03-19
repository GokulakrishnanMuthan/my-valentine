import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 bg-romantic-cream border-t border-romantic-rose/10 text-center relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <p className="text-romantic-rose/40 font-cinzel tracking-[0.4em] text-[10px] uppercase mb-4 font-bold">
          A Love Story Eight Years in the Making
        </p>
        <p className="text-gray-400 font-sans text-[9px] tracking-widest uppercase opacity-60">
          © 2016-2024 JP & Manjusha. All rights reserved.
        </p>
      </div>

      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-romantic-rose/5 blur-[80px] rounded-full z-0" />
    </footer>
  );
};

export default Footer;
