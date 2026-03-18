import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-rose-900 text-rose-100 py-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
                <span>Made with endless love</span>
                <Heart size={16} fill="currentColor" className="text-rose-500" />
                <span>for Manjusha</span>
            </div>
            <p className="text-sm opacity-70">Yours Forever & Always</p>
        </footer>
    );
};

export default Footer;
