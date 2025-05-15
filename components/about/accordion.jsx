import { GoChevronDown } from "react-icons/go";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Accordion({ data, work }) {
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
        className="flex gap-2 items-center"
        animate={
          tap
            ? { scale: 0.95 }
            : hover
            ? { scale: 1.05, color: "white" }
            : { scale: 1 }
        }
      >
        {data.name}
        <motion.div animate={click ? { rotate: 180 } : { rotate: 0 }}>
          <GoChevronDown />
        </motion.div>
      </motion.div>
      {work ? (
        <motion.div
          animate={click ? { height: "auto" } : { height: 0 }}
          className="flex items-center w-full justify-around flex-wrap h-full px-10"
        >
          <motion.div
            animate={
              click
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: -40, display: "none" }
            }
            className="px-6 py-2 mt-4"
          >
            <div className="flex flex-col text-xl gap-4">
              <div className="flex flex-col custom-gradient-half p-2">
                <span className="text-xl">{data.oc}</span>
                <span className="text-sm">{data.time}</span>
              </div>

              <span className="tracking-wider text-lg">{data.des}</span>
            </div>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          animate={click ? { height: "auto" } : { height: 0 }}
          className="flex items-center w-full justify-around flex-wrap h-full"
        >
          {data.app.map((e) => (
            <motion.span
              animate={click ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
              className="px-6 py-2 bg-violet/20 backdrop-blur-2xl rounded-4xl mt-10"
            >
              {e}
            </motion.span>
          ))}
        </motion.div>
      )}
    </div>
  );
}
