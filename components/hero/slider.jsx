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
        className="flex w-max border border-white/20 bg-white/10 shadow-lg backdrop-blur-md"
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
            className="flex h-[50px] w-[165px] shrink-0 items-center justify-center text-2xl text-white hover:bg-white/25"
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
