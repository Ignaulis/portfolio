import astro from "../../assets/lottie/aboutmeastro.json";
import dynamic from "next/dynamic";
import Aboutme from "./abouteme";
import Skills from "./skills";
import { useContext } from "react";
import { ScrollContext } from "@/context/scrollContext";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function About() {
  const { aboutRef } = useContext(ScrollContext);

  return (
    <div
      ref={aboutRef}
      className="flex scroll-mb-40 flex-col mb-0 mt-4 sm:px-20 px-2 w-full h-max"
    >
      <div className="flex w-full items-center sm:justify-end justify-center sm:flex-row flex-col-reverse h-max">
        <span className="gradient-text text-transparent sm:text-5xl text-3xl font-medium select-none tracking-widest">
          {`< `}
          <span className="sm:text-7xl text-5xl italic">About Me</span>
          {` />`}
        </span>
        <div className="w-40 h-40">
          <Lottie animationData={astro} loop={true} />
        </div>
      </div>
      <Aboutme />
      <Skills />
    </div>
  );
}
