'use client';

import { motion } from 'framer-motion';
import '../../styles/buttons.css';

export default function Hero() {
    return (
        <motion.div className='flex flex-col gap-8 ml-8 sm:justify-start mt-10 h-full w-full select-none '>
            <div className='font-sans text-white uppercase font-extrabold text-7xl flex flex-col'>
                <span>frontend</span>
                <span>developer</span>
            </div>
            <div className='w-3/5'>
                <motion.hr
                    className='h-1 bg-white border-0'
                    initial={{ width: '3%', opacity: 0.7 }}
                    animate={{
                        width: ['3%', '100%', '3%'],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: 'easeInOut',
                    }}
                />
            </div>

            <div className='text-white text-2xl w-2/3'>
                <span className=' font-bold'>Hi,</span> I'm
                <span className='text-white font-bold'> Ignas </span>
                <span>
                    I like to craft solid and scalable frontend products with
                    great user experiences.
                </span>
            </div>
        </motion.div>
    );
}
