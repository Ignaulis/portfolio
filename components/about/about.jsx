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
      className="mb-14 flex h-max w-full scroll-mb-40 flex-col px-2 sm:px-20"
    >
      <InView>
        <div className="mb-4 flex h-max w-full flex-col-reverse items-center justify-center sm:flex-row sm:justify-start">
          <span className="gradient-text text-3xl font-medium tracking-widest text-transparent select-none">
            {`< `}
            <span className="text-5xl italic">About Me</span>
            {` />`}
          </span>
          <div className="h-40 w-40">
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
