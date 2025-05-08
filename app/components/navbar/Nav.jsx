'use client';

import { motion, AnimatePresence } from 'framer-motion';
import NavButton from '../ui/NavButton';
import { motionLoadAnimate } from '@/app/data/motionLoadAnimate';
import { useState } from 'react';
import NavContactsDrop from './NavContactsDrop';

export default function Nav() {
    const [showContacts, setShowContacts] = useState(false);
    const [hover, setHover] = useState(null);

    const handleShowContacts = () => {
        setShowContacts((prev) => !prev);
    };

    const navButtons = [
        { label: 'home', onClick: () => console.log('Home Clicked') },
        { label: 'projects', onClick: () => console.log('Projects Clicked') },
        { label: 'about', onClick: () => console.log('About Clicked') },
        { label: 'contacts', onClick: handleShowContacts },
    ];

    return (
        <motion.div
            initial={motionLoadAnimate.initial}
            animate={motionLoadAnimate.animate}
            transition={motionLoadAnimate.transition}
            className='fixed top-3 left-3 right-3 py-4.5 rounded-2xl z-50 bg-white/10 backdrop-blur-md shadow-lg border border-white/20'
        >
            <section className='w-full flex flex-wrap justify-center gap-x-10 gap-y-3 items-center'>
                {navButtons.map((button, index) => (
                    <NavButton
                        key={index}
                        index={index}
                        click={button.onClick}
                        hover={hover}
                        setHover={setHover}
                    >
                        {button.label}
                    </NavButton>
                ))}
            </section>

            <AnimatePresence>
                {showContacts && (
                    <motion.section
                        key='contacts'
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className='w-full overflow-hidden'
                    >
                        <NavContactsDrop />
                    </motion.section>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
