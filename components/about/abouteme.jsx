import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Aboutme() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const [text] = useTypewriter({
    words: [
      `Hey!\n\nI'm Ignas Naulis, a web developer from Lithuania. I love creating clean, responsive, and visually sharp websites. Turning ideas into real, working products is what keeps me going.\n\nI'm all about pixel-perfect results — every little detail matters to me. While most of my experience is in front-end development, I’ve also explored some back-end and 3D web projects.\n\nAlways learning, always building.`,
    ],
    loop: 1,
    typeSpeed: 30,
    deleteSpeed: 0,
    delaySpeed: 1000,
  });

  return (
    <div className="custom-background-with-blur-border mt-10 mb-10 flex w-11/12 flex-wrap justify-center gap-8 p-6 sm:w-full lg:flex-nowrap">
      {/* Avataras */}
      <div className="flex h-60 w-60 justify-end overflow-hidden rounded-4xl border-2 border-white/20 bg-white/20 backdrop-blur-2xl">
        <Image
          src="/avatar.png"
          width={300}
          height={300}
          alt="Avatar"
          className="object-cover"
        />
      </div>

      {/* Teksto rašymo animacija */}
      <div
        ref={ref}
        className="relative flex w-full items-start justify-start text-lg leading-6.5 whitespace-pre-line text-gray-300 select-none"
      >
        {inView && (
          <span>
            {text}
            <Cursor cursorStyle="|" cursorColor="white" />
          </span>
        )}
      </div>

      <div className="custom-background-background"></div>
    </div>
  );
}
