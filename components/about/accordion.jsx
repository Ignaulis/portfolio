import { GoChevronDown } from "react-icons/go";
import { motion } from "framer-motion";
import { useState } from "react";
import { PiCertificateThin } from "react-icons/pi";

export default function Accordion({
  data,
  work,
  ed,
  dataO,
  setCertificateImage,
}) {
  const [click, setClick] = useState(false);
  const [hover, setHover] = useState(false);
  const [tap, setTap] = useState(false);

  return (
    <div
      onClick={() => setClick((pv) => !pv)}
      className="flex h-max w-full cursor-pointer flex-col items-center"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseDownCapture={() => setTap(true)}
      onMouseUpCapture={() => setTap(false)}
    >
      <motion.div
        className="flex items-center gap-2 text-lg text-white"
        animate={
          tap
            ? { scale: 0.95 }
            : hover
              ? { scale: 1.05, opacity: 1 }
              : { scale: 1, opacity: 0.8 }
        }
      >
        {data.name}
        <motion.div animate={click ? { rotate: 180 } : { rotate: 0 }}>
          <GoChevronDown />
        </motion.div>
      </motion.div>

      {/* education */}
      {ed ? (
        <motion.div
          animate={click ? { height: "auto" } : { height: 0 }}
          className="flex h-full w-full flex-wrap items-center justify-around px-1 sm:px-10"
        >
          <motion.div
            animate={
              click
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: -40, display: "none" }
            }
            className="mt-4 flex flex-col gap-10 px-6 py-2"
          >
            {dataO.map((e) => (
              <div
                key={e.institution}
                className="flex flex-col gap-4 text-xl text-white/90"
              >
                <div className="flex flex-wrap justify-between gap-4 md:flex-nowrap">
                  <div className="custom-gradient-half flex flex-col gap-2 p-2">
                    <span className="text-sm sm:text-xl">{e.institution}</span>
                    <div className="flex items-center gap-10">
                      <span className="text-sm sm:text-lg">{e.deg}</span>
                      <span className="text-sm">{e.duration}</span>
                    </div>
                  </div>
                  <div
                    className="flex transform items-center gap-2 text-lg transition-all duration-200 ease-in-out hover:scale-105 hover:text-orange-400 active:scale-95 md:text-xl"
                    onClick={(el) => {
                      el.stopPropagation();
                      setCertificateImage?.(e.image);
                    }}
                  >
                    <PiCertificateThin className="text-2xl" />
                    Certificate
                  </div>
                </div>
                <span className="text-sm tracking-wider sm:text-lg">
                  {e.details}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      ) : // experience
      work ? (
        <motion.div
          animate={click ? { height: "auto" } : { height: 0 }}
          className="flex h-full w-full flex-wrap items-center justify-around px-1 sm:px-10"
        >
          <motion.div
            animate={
              click
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: -40, display: "none" }
            }
            className="mt-4 px-6 py-2"
          >
            <div className="flex flex-col gap-4 text-xl text-white/90">
              <div className="custom-gradient-half flex flex-col p-2">
                <span className="text-sm sm:text-xl">{data.oc}</span>
                <div className="flex items-center gap-10">
                  <span className="text-sm sm:text-lg">{data.pos}</span>
                  <span className="text-sm">{data.time}</span>
                </div>
              </div>

              <span className="text-sm tracking-wider sm:text-lg">
                {data.des}
              </span>
            </div>
          </motion.div>
        </motion.div>
      ) : (
        // approaches
        <motion.div
          animate={click ? { height: "auto" } : { height: 0 }}
          className="flex h-full w-full flex-wrap items-center justify-around gap-1 text-sm sm:gap-4 sm:text-lg"
        >
          {data.app.map((e) => (
            <motion.span
              key={e}
              animate={
                click
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: -40, display: "none" }
              }
              className="bg-violet/20 mt-10 rounded-4xl px-6 py-2 text-white backdrop-blur-2xl"
            >
              {e}
            </motion.span>
          ))}
        </motion.div>
      )}
    </div>
  );
}
