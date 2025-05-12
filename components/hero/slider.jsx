import { motion } from "framer-motion";
import { icons } from "@/assets/data/icons";
import { motionLoadAnimate } from "@/assets/data/framerMotion";

const Slider = ({ left, right }) => {
  const slides = [...icons, ...icons];

  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={motionLoadAnimate.animate}
      transition={{ duration: 2.5 }}
      className="relative w-full overflow-hidden select-none"
    >
      <motion.div
        className="flex bg-white/10 backdrop-blur-md shadow-lg border border-white/20 w-max"
        animate={{
          x: (left && ["0%", "-50%"]) || (right && ["-50%", "0%"]),
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 40,
        }}
      >
        {slides.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center text-white hover:bg-white/25 shrink-0 text-2xl w-[165px] h-[50px]"
          >
            {item.icon && <item.icon className="mr-2" />}
            <span className="text-sm">{item.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Slider;
