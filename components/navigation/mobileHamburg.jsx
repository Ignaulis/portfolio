import { motion } from "framer-motion";

const MenuButton = ({
  isOpen = false,
  width = 24,
  height = 24,
  strokeWidth = 1,
  color = "white",
  transition = { duration: 0.3 },
  onClick,
  ...props
}) => {
  const lineVariants = {
    closed: { rotate: 0, translateY: 0, opacity: 1 },
    openedTop: {
      rotate: 45,
      translateY: 12,
      opacity: 1,
    },
    openedBot: {
      rotate: -45,
      translateY: -12,
      opacity: 1,
    },
    middleOpened: { opacity: 0 },
  };

  const lineCommonProps = {
    stroke: color,
    strokeWidth,
    vectorEffect: "non-scaling-stroke",
    transition,
  };

  const renderLine = (y1, y2, variantName) => (
    <motion.line
      x1="0"
      x2="24"
      y1={y1}
      y2={y2}
      variants={lineVariants}
      initial="closed"
      animate={isOpen ? variantName : "closed"}
      {...lineCommonProps}
    />
  );

  return (
    <motion.svg
      viewBox="0 0 24 24"
      width={width}
      height={height}
      onClick={onClick}
      style={{ cursor: "pointer" }}
      {...props}
    >
      {renderLine(0, 0, "openedTop")} {/* Top Line */}
      {renderLine(12, 12, "middleOpened")} {/* Center Line */}
      {renderLine(24, 24, "openedBot")} {/* Bottom Line */}
    </motion.svg>
  );
};

export { MenuButton };
