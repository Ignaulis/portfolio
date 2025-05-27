import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

export default function WorkImages({ openImages, setOpenImages, images }) {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleClose = () => {
    setOpenImages();
    setCurrent(0);
  };

  return (
    <AnimatePresence>
      {openImages && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-md"
        >
          {/* Close button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={handleClose}
            className="absolute top-4 right-4 cursor-pointer rounded-full bg-black/40 p-2 text-white hover:bg-black/70"
          >
            <FaTimes size={20} />
          </motion.button>

          {/* Back button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={handlePrev}
            className="absolute left-4 cursor-pointer rounded-full bg-black/40 p-2 text-white hover:bg-black/70 sm:left-10"
          >
            <FaChevronLeft size={28} />
          </motion.button>

          {/* Image container */}
          <motion.div
            key={current}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="h-auto max-h-[80%] w-full max-w-[90%] overflow-hidden rounded-xl px-3 shadow-lg sm:w-2/3 sm:px-0"
          >
            <img
              src={images[current]}
              alt={`Slide ${current}`}
              className="h-full w-full object-contain"
            />
          </motion.div>

          {/* Next button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={handleNext}
            className="absolute right-4 cursor-pointer rounded-full bg-black/40 p-2 text-white hover:bg-black/70 sm:right-10"
          >
            <FaChevronRight size={28} />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
