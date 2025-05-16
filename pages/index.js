import dynamic from "next/dynamic";
const HeroScene = dynamic(() => import("@/three/heroScene/heroScene"), {
  ssr: false,
  loading: () => <Loader />
});

import ContactForm from "@/components/hero/contactForm";
import Hero from "@/components/hero/hero";
import Slider from "@/components/hero/slider";
import Work from "@/components/work/work";
import { motion } from "framer-motion";
import { motionLoadAnimate } from "@/assets/data/framerMotion";
import About from "@/components/about/about";
import Footer from "@/components/footer/footer";
import Loader from "@/components/ui/loader";


export default function Home() {
  return (
    <>

      {/* hero */}
      <motion.div
        initial={motionLoadAnimate.initial}
        animate={motionLoadAnimate.animate}
        transition={motionLoadAnimate.transition}
        className='flex w-full lg:h-[500px] h-max mt-40 lg:mb-8 mb-4 flex-wrap lg:flex-nowrap'
      >

        <Hero />
        <HeroScene />

        {/* contact form */}
        <ContactForm />
      </motion.div>


      {/* slider */}
      <div className='flex flex-col gap-5 sm:mb-18 mb-12'>
        <Slider left />
        <Slider right />
      </div>


      {/* work */}
      <Work />
      <About />


      {/* footer */}
      <Footer />
    </>
  );
}
