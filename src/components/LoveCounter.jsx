import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LoveCounter = ({ startDate }) => {
    const [timeElapsed, setTimeElapsed] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        // Parse the start date: 5-7-2015 -> July 5, 2015 (DD-MM-YYYY)
        // Note: Months in JS Date are 0-indexed (0=Jan, 6=July)
        const start = new Date(2015, 6, 5);

        const timer = setInterval(() => {
            const now = new Date();
            const difference = now.getTime() - start.getTime();

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeElapsed({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const timeUnits = [
        { label: 'Days', value: timeElapsed.days },
        { label: 'Hours', value: timeElapsed.hours },
        { label: 'Mins', value: timeElapsed.minutes },
        { label: 'Secs', value: timeElapsed.seconds },
    ];

    return (
        <motion.div
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
        >
            {timeUnits.map((unit, index) => (
                <div key={index} className="flex flex-col items-center bg-white/40 backdrop-blur-md px-4 py-2 rounded-xl border border-white/50 shadow-sm min-w-[80px]">
                    <span className="text-2xl md:text-3xl font-bold text-rose-600 block">
                        {unit.value}
                    </span>
                    <span className="text-xs md:text-sm text-rose-800 uppercase tracking-wider">
                        {unit.label}
                    </span>
                </div>
            ))}
        </motion.div>
    );
};

export default LoveCounter;
