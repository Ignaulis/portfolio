'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { icons } from '@/app/data/icons';

const Slider = () => {
    const slides = [...icons, ...icons];

    return (
        <div className='relative w-full overflow-hidden'>
            <div className='absolute left-0 top-0 h-full w-1/6 bg-gradient-to-r from-white/80 via-transparent to-transparent z-10' />
            <div className='absolute right-0 top-0 h-full w-1/6 bg-gradient-to-l from-white/80 via-transparent to-transparent z-10' />

            <motion.div
                className='flex bg-white/10 backdrop-blur-md shadow-lg border border-white/20'
                style={{ width: 'max-content' }}
                animate={{
                    x: ['0%', '-50%'],
                }}
                transition={{
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'linear',
                    duration: 30,
                }}
            >
                {slides.map((item, index) => (
                    <div
                        key={index}
                        className='flex items-center justify-center text-white'
                        style={{
                            width: '165px',
                            height: '50px',
                            flexShrink: 0,
                            fontSize: '2rem',
                        }}
                    >
                        {item.icon && <item.icon className='mr-2' />}
                        <span className='text-sm'>{item.name}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Slider;
