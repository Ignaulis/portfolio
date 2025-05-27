import { useContext } from "react";
import { MobileContext } from "@/context/mobileContext";
import HeroButton from "../ui/heroButton";
import { ScrollContext } from "@/context/scrollContext";
import { SiReaddotcv } from "react-icons/si";

export default function Hero() {
  const { setShowForm } = useContext(MobileContext);
  const { homeRef } = useContext(ScrollContext);

  return (
    <div
      className="mb-10 flex h-full w-full scroll-mt-32 flex-col items-center justify-center gap-8 select-none lg:mb-0 lg:ml-20 lg:w-1/2 lg:items-start lg:justify-start"
      ref={homeRef}
    >
      <div className="text-gradient-animation flex flex-col items-center text-5xl font-extrabold uppercase sm:text-6xl lg:items-start">
        <span>web</span>
        <span>developer</span>
      </div>

      <div className="flex w-4/5 justify-center text-start text-xl tracking-wider text-white">
        <span className="w-full px-4 text-center sm:px-0 lg:w-full lg:text-start">
          I build clean, responsive, and detail-focused web solutions — turning
          ideas into sharp, scalable digital experiences.
        </span>
      </div>

      <div className="mt-6 flex w-full justify-center gap-5 lg:justify-start">
        <HeroButton
          href={"/cv/ignas_naulis_cv.pdf"}
          download
          Icon={SiReaddotcv}
        >
          download cv
        </HeroButton>

        <HeroButton onClick={() => setShowForm((pv) => !pv)}>
          send me
        </HeroButton>
      </div>
    </div>
  );
}
