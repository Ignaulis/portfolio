'use client';

import { motion } from 'framer-motion';
import '../../styles/buttons.css';
import dynamic from 'next/dynamic';
import hi from '../../assets/hi.json';

export default function Hero() {
    const Lottie = dynamic(() => import('lottie-react'), {
        ssr: false,
    });

    return (
        <motion.div className='flex flex-col gap-8 justify-end sm:justify-start mt-10 h-full items-center select-none'>
            <div className='flex flex-col gap-5'>
                <div className='w-full flex justify-center items-end'>
                    <div className='w-[200px] h-[200px] text-white'>
                        <Lottie animationData={hi} />
                    </div>
                    <span className='text-white -rotate-2 text-7xl font-mono flex flex-col'>
                        <span>I'm</span> <span>Ignas.</span>{' '}
                    </span>
                </div>

                <div className='text-xl lg:text-5xl flex gap-5 md:text-2xl text-white w-max tracking-wide '>
                    <h2 className='rotate-3'>
                        {'< '}
                        <span className='text-[#60a5fa] font-extrabold'>
                            Frontend Developer
                        </span>
                        {' />'}
                    </h2>
                </div>
            </div>
            <div className='text-white w-2/3 tracking-wide text-xl'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Possimus ratione obcaecati afsafsaljfsafas!
                </p>
            </div>
            {/* <div className='flex'>
                <div className='relative inline-block group'>
                    <button className='button-hire'></button>
                </div>
            </div> */}
        </motion.div>
    );
}
