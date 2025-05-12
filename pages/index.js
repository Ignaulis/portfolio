import ContactForm from "@/components/hero/contactForm";
import Hero from "@/components/hero/hero";
import Slider from "@/components/hero/slider";
import Work from "@/components/work/work";
import HeroScene from "@/three/heroScene/heroScene";


export default function Home() {
  return (
    <>

      {/* hero */}
      <div className='flex w-full h-max mt-30 flex-wrap lg:flex-nowrap'>
        <Hero />
        <HeroScene />

        {/* contact form */}
        <ContactForm />
      </div>


      {/* slider */}
      <div className='flex flex-col gap-5 mb-28'>
        <Slider left />
        <Slider right />
      </div>


      {/* work */}
      <Work />
    </>
  );
}
