'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), {
    ssr: false,
});

import rocketAnimation from '../../assets/rocket.json';

export default function RocketAnimation() {
    const [rockets, setRockets] = useState([]);

    useEffect(() => {
        let intervalTimeout;
        let initialTimeout;

        const launchRocket = () => {
            const id = Math.random().toString(36).substring(2, 9);
            const left = Math.floor(Math.random() * 90);
            setRockets((prev) => [...prev, { id, left }]);

            setTimeout(() => {
                setRockets((prev) => prev.filter((r) => r.id !== id));
            }, 5000);
        };

        const randomInterval = () => {
            return Math.floor(Math.random() * 10000) + 20000;
        };

        const startLoop = () => {
            intervalTimeout = setTimeout(function loop() {
                launchRocket();
                intervalTimeout = setTimeout(loop, randomInterval());
            }, randomInterval());
        };

        const stopLoop = () => {
            clearTimeout(initialTimeout);
            clearTimeout(intervalTimeout);
        };

        const handleVisibilityChange = () => {
            if (document.visibilityState === 'visible') {
                initialTimeout = setTimeout(() => {
                    launchRocket();
                    startLoop();
                }, 3000);
            } else {
                stopLoop();
            }
        };

        if (document.visibilityState === 'visible') {
            initialTimeout = setTimeout(() => {
                launchRocket();
                startLoop();
            }, 3000);
        }

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            stopLoop();
            document.removeEventListener(
                'visibilitychange',
                handleVisibilityChange,
            );
        };
    }, []);

    return (
        <AnimatePresence>
            {rockets.map((rocket) => (
                <motion.div
                    key={rocket.id}
                    initial={{ bottom: 0, opacity: 1 }}
                    animate={{ bottom: '120%', opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 5, ease: 'easeInOut' }}
                    className='fixed bottom-0 z-50 pointer-events-none'
                    style={{ left: `${rocket.left}%` }}
                >
                    <div className='w-[150px] h-[150px]'>
                        <Lottie animationData={rocketAnimation} />
                    </div>
                </motion.div>
            ))}
        </AnimatePresence>
    );
}
