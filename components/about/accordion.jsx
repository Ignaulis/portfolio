import { GoChevronDown } from "react-icons/go";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Accordion({ data, work, ed, dataO }) {
  const [click, setClick] = useState(false);
  const [hover, setHover] = useState(false);
  const [tap, setTap] = useState(false);

  return (
    <div
      onClick={() => setClick((pv) => !pv)}
      className="w-full h-max flex flex-col items-center cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseDownCapture={() => setTap(true)}
      onMouseUpCapture={() => setTap(false)}
    >
      <motion.div
        className="flex gap-2 items-center text-lg text-white"
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
          className="flex items-center w-full justify-around flex-wrap h-full px-1 sm:px-10"
        >
          <motion.div
            animate={
              click
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: -40, display: "none" }
            }
            className="px-6 flex flex-col gap-10 py-2 mt-4"
          >
            {dataO.map((e) => (
              <div className="flex flex-col text-xl gap-4 text-white/90">
                <div className="flex flex-col gap-2 custom-gradient-half p-2">
                  <span className="text-sm sm:text-xl">{e.institution}</span>
                  <div className="flex gap-10 items-center">
                    <span className="text-sm sm:text-lg">{e.deg}</span>
                    <span className="text-sm">{e.duration}</span>
                  </div>
                </div>
                <span className="tracking-wider text-sm sm:text-lg">
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
          className="flex items-center w-full justify-around flex-wrap h-full px-1 sm:px-10"
        >
          <motion.div
            animate={
              click
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: -40, display: "none" }
            }
            className="px-6 py-2 mt-4"
          >
            <div className="flex flex-col text-xl gap-4 text-white/90">
              <div className="flex flex-col custom-gradient-half p-2">
                <span className="text-sm sm:text-xl">{data.oc}</span>
                <span className="text-sm">{data.time}</span>
              </div>

              <span className="tracking-wider text-sm sm:text-lg">
                {data.des}
              </span>
            </div>
          </motion.div>
        </motion.div>
      ) : (
        // approaches
        <motion.div
          animate={click ? { height: "auto" } : { height: 0 }}
          className="flex items-center w-full gap-1 sm:gap-4 text-sm sm:text-lg justify-around flex-wrap h-full"
        >
          {data.app.map((e) => (
            <motion.span
              key={e}
              animate={
                click
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: -40, display: "none" }
              }
              className="px-6 py-2 bg-violet/20 backdrop-blur-2xl rounded-4xl mt-10 text-white"
            >
              {e}
            </motion.span>
          ))}
        </motion.div>
      )}
    </div>
  );
}
