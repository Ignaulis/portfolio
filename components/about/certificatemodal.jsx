import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

export default function CertificateModal({ image, onClose }) {
  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-md"
        >
          {/* Close button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={onClose}
            className="absolute top-4 right-4 cursor-pointer rounded-full bg-black/40 p-2 text-white hover:bg-black/70"
          >
            <FaTimes size={20} />
          </motion.button>

          {/* Image */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="max-h-[80%] w-full max-w-3xl px-4"
          >
            <img
              src={image}
              alt="Certificate"
              className="h-full w-full rounded-xl object-contain shadow-xl"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
