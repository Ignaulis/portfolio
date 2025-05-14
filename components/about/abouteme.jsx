import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Aboutme() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div className="w-full flex mt-10 flex-wrap justify-center gap-8 lg:flex-nowrap p-6 bg-white/10 backdrop-blur-2xl rounded border-white/20 border-1">
      {/* Avataras */}
      <div className="w-60 h-60 overflow-hidden bg-white/20 backdrop-blur-2xl border-white/20 border-2 rounded-4xl flex justify-end">
        <Image
          src="/avatar.png"
          width={300}
          height={300}
          className="object-cover"
        />
      </div>

      {/* Teksto rašymo animacija */}
      <div
        ref={ref}
        className="select-none relative flex items-start justify-start w-full text-xl text-gray-300 whitespace-pre-line leading-6.5"
      >
        {inView && (
          <Typewriter
            words={[
              `Hey!\n\nI'm Ignas Naulis, a front-end developer from Lithuania. I love creating clean, responsive, and visually sharp websites. Turning ideas into real, working products is what keeps me going.\n\nI'm all about pixel-perfect results — every little detail matters to me. While most of my experience is in front-end, I’ve also played around with some back-end and 3D web projects too.\n\nAlways learning, always building.`,
            ]}
            loop={1}
            typeSpeed={30}
            deleteSpeed={0}
            delaySpeed={1000}
          />
        )}
      </div>
      <div
        className={`absolute -z-10 bg-white/10 w-full h-full rounded-2xl top-5 -right-5 opacity-40`}
      ></div>
    </div>
  );
}
