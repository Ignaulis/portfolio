import astro from "../../assets/lottie/aboutmeastro.json";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function About() {
  return (
    <div className="flex flex-col mb-20 mt-10 sm:px-20 px-2 w-full h-max">
      <div className="flex w-full items-center sm:justify-start justify-center sm:flex-row flex-col-reverse h-max">
        <span className="text-white sm:text-5xl text-3xl font-medium tracking-widest">
          {`< `}
          <span className="sm:text-7xl text-5xl italic">About Me</span>
          {` />`}
        </span>
        <div className="w-40 h-40">
          <Lottie animationData={astro} loop={true} />
        </div>
      </div>
    </div>
  );
}
