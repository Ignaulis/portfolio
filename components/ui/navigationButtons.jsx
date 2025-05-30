import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

export default function NavButton({ children, click, index, hover, setHover }) {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className={`sm:text-md relative block cursor-pointer overflow-hidden p-0 text-lg whitespace-nowrap text-white uppercase transition-opacity duration-300 select-none md:text-xl lg:text-xl ${
        hover !== null && hover !== index ? "opacity-50" : "opacity-100"
      }`}
      onMouseEnter={() => setHover(index)}
      onMouseLeave={() => setHover(null)}
      onClick={click}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
