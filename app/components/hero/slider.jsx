'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { icons } from '@/app/data/icons';
import { motionLoadAnimate } from '@/app/data/motionLoadAnimate';

const Slider = ({ left, right }) => {
    const slides = [...icons, ...icons];

    return (
        <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={motionLoadAnimate.animate}
            transition={{ duration: 2.5 }}
            className='relative w-full overflow-hidden select-none'
        >
            {/* Kairysis gradientas su pranykimo efektu */}
            {/* <div
                className='absolute left-0 top-0 h-full w-1/6 z-10 bg-gradient-to-r from-transparent to-black/80 opacity-50 transition-opacity duration-2500 ease-in-out'
            /> */}
            {/* Dešinysis gradientas su pranykimo efektu */}
            {/* <div
                className='absolute right-0 top-0 h-full w-1/6 z-10 bg-gradient-to-l from-transparent to-black/80 opacity-50 transition-opacity duration-2500 ease-in-out'
            /> */}

            <motion.div
                className='flex bg-white/10 backdrop-blur-md shadow-lg border border-white/20 w-max'
                animate={{
                    x: (left && ['0%', '-50%']) || (right && ['-50%', '0%']),
                }}
                transition={{
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'linear',
                    duration: 30,
                }}
            >
                {slides.map((item, index) => (
                    <motion.div
                        key={index}
                        className='flex items-center justify-center text-white hover:bg-white/25 shrink-0 text-2xl w-[165px] h-[50px]'
                    >
                        {item.icon && <item.icon className='mr-2' />}
                        <span className='text-sm'>{item.name}</span>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Slider;
