'use client'

// imports
import Nav from '../components/navbar/Nav';
import StarSkyBackground from '../threejs/background';
import HeroScene from '../threejs/heroScene';
import { motion } from 'framer-motion';
import { motionLoadAnimate } from '../data/motionLoadAnimate';
import Hero from '../components/hero/hero';
import { MobileContext } from '../context/mobileContext';
import Slider from '../components/hero/slider';
import RocketAnimation from '../components/hero/rocketAnimation';

export default function Home() {

    return (
        <div className='relative w-screen h-screen overflow-hidden'>
            {/* canvas background */}
            <div className='absolute inset-0'>
                <StarSkyBackground />
            </div>

            <MobileContext>

                {/* main content */}
                <div className='absolute inset-0 z-10 h-screen overflow-y-auto'>

                    <Nav />
                    <div className='w-full flex flex-col'>

                        {/* hero section */}
                        <motion.div
                            initial={motionLoadAnimate.initial}
                            animate={motionLoadAnimate.animate}
                            transition={{ duration: 3 }}
                            className='flex w-full h-max mt-20 flex-wrap-reverse lg:flex-nowrap'
                        >
                            <div className='w-full h-max mb-10 lg:w-1/2'>
                                <Hero />
                            </div>
                            <div className='w-full lg:w-1/2 h-[600px] lg:mt-20 mt-0'>
                                <HeroScene />
                            </div>
                            {/* <RocketAnimation /> */}
                        </motion.div>
                        <div className='flex flex-col gap-5 mb-10'>
                            <Slider left />
                            <Slider right />
                        </div>


                    </div>


                </div>

            </MobileContext>

        </div>
    );
}