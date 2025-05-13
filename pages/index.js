import ContactForm from "@/components/hero/contactForm";
import Hero from "@/components/hero/hero";
import Slider from "@/components/hero/slider";
import Work from "@/components/work/work";
import HeroScene from "@/three/heroScene/heroScene";
import { motion } from "framer-motion";
import { motionLoadAnimate } from "@/assets/data/framerMotion";
import About from "@/components/about/about";


export default function Home() {
  return (
    <>

      {/* hero */}
      <motion.div
        initial={motionLoadAnimate.initial}
        animate={motionLoadAnimate.animate}
        transition={motionLoadAnimate.transition}
        className='flex w-full lg:h-[500px] h-max mt-30 lg:mb-20 mb-4 flex-wrap lg:flex-nowrap'
      >

        <Hero />
        <HeroScene />

        {/* contact form */}
        <ContactForm />
      </motion.div>


      {/* slider */}
      <div className='flex flex-col gap-5 mb-28'>
        <Slider left />
        <Slider right />
      </div>


      {/* work */}
      <Work />
      <About />
    </>
  );
}
