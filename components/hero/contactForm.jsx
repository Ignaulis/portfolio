import { useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MobileContext } from "@/context/mobileContext";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [hasMounted, setHasMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { showForm, setShowForm } = useContext(MobileContext);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/mzzraara", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        setTimeout(() => setShowForm(false), 3000);
        setFormData({ name: "", email: "", message: "" }); // Reset form after successful submission
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  if (!hasMounted || !showForm) return null;

  return (
    <div className="fixed inset-0 z-100 flex justify-center items-center">
      <motion.div
        className="w-[310px] mx-auto p-6 bg-white/10 backdrop-blur-md shadow-lg border border-white/20 rounded-2xl text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-2xl select-none mb-4 text-center">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
              required
              className="w-full border outline-0 border-gray-300 rounded-lg p-2 mt-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
              required
              className="w-full border outline-0 border-gray-300 rounded-lg p-2 mt-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  message: e.target.value,
                })
              }
              required
              className="w-full border outline-0 border-gray-300 rounded-lg p-2 mt-1 h-32"
            />
          </div>
          <div className="flex justify-between">
            <motion.button
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-green-700 text-white text-xl px-4 py-2 rounded-lg hover:opacity-85 transition cursor-pointer"
            >
              Send
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="bg-red-500 text-white text-xl px-4 py-2 rounded-lg hover:opacity-85 transition cursor-pointer"
              onClick={() => setShowForm(false)}
            >
              Close
            </motion.button>
          </div>

          <AnimatePresence>
            {status === "success" && (
              <motion.p
                className="text-green-600 mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Message sent successfully!
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                className="text-red-400 mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Something went wrong. Please try again.
              </motion.p>
            )}
          </AnimatePresence>
        </form>
      </motion.div>
    </div>
  );
}
