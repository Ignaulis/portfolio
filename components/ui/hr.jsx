import { motion } from "framer-motion";

export default function Hr() {
  return (
    <div className="w-4/5 lg:w-full">
      <motion.hr
        className="h-1 bg-white border-0"
        initial={{ width: "3%", opacity: 0.7 }}
        animate={{
          width: ["3%", "100%", "3%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
