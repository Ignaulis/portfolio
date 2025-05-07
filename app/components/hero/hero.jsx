'use client';

import { motion } from 'framer-motion';
import '../../styles/buttons.css';

export default function Hero() {
    return (
        <motion.div className='flex flex-col justify-end sm:justify-center gap-12 h-full items-center select-none'>
            <div className='uppercase text-4xl lg:text-6xl md:text-5xl text-white w-max tracking-widest '>
                <h2>
                    {'< '}
                    <span className='text-[#60a5fa]'>Frontend</span>
                </h2>
                <h2 className='lg:ml-26 md:ml-20 ml-10'>
                    <span className='text-[#60a5fa]'>developer</span>
                    {' />'}
                </h2>
            </div>
            <div className='text-white w-2/3 tracking-wide text-xl'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Possimus ratione obcaecati fuga nam. Aliquid velit voluptate
                    dolores ullam, quae ipsam ad id, accusantium, corrupti cum
                    iure dolore saepe ab rerum!
                </p>
            </div>
            <div className='flex'>
                <div className='relative inline-block group'>
                    <button className='button-hire'></button>
                </div>
            </div>
        </motion.div>
    );
}
