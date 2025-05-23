import astro from "../../assets/lottie/aboutmeastro.json";
import dynamic from "next/dynamic";
import Aboutme from "./abouteme";
import Skills from "./skills";
import { useContext } from "react";
import { ScrollContext } from "@/context/scrollContext";
import More from "./more";
import Contact from "./contact";
import InView from "../common/InView";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function About() {
  const { aboutRef } = useContext(ScrollContext);

  return (
    <div
      ref={aboutRef}
      className="flex scroll-mb-40 flex-col mb-14 sm:px-20 px-2 w-full h-max"
    >
      <InView>
        <div className="flex w-full items-center sm:justify-start mb-4 justify-center sm:flex-row flex-col-reverse h-max">
          <span className="gradient-text text-transparent text-3xl font-medium select-none tracking-widest">
            {`< `}
            <span className="text-5xl italic">About Me</span>
            {` />`}
          </span>
          <div className="w-40 h-40">
            <Lottie animationData={astro} loop={true} />
          </div>
        </div>
      </InView>

      <InView>
        <Aboutme />
      </InView>
      <InView>
        <Skills />
      </InView>
      <InView>
        <More />
      </InView>
      <InView>
        <Contact />
      </InView>
    </div>
  );
}
