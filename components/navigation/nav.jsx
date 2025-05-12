import NavButton from "../ui/navigationButtons";
import { motionLoadAnimate } from "@/assets/data/framerMotion";
import { useState, useCallback, useContext, useEffect } from "react"; // Added useEffect
import dynamic from "next/dynamic";
import { MobileContext } from "@/context/mobileContext";
import { MenuButton } from "./mobileHamburg";
import { motion } from "framer-motion";

// Lazy load NavContactsDrop component
const NavContactsDrop = dynamic(() => import("./NavContactsDrop"), {
  ssr: false,
  loading: () => <div>Loading contacts...</div>,
});

// Main navigation component
export default function Nav() {
  // State to control the visibility of the contacts dropdown
  const [showContacts, setShowContacts] = useState(false);
  // State to manage hover effect on navigation buttons
  const [hover, setHover] = useState(null);
  // State to control the mobile navigation menu open/close state
  const [isOpen, setIsOpen] = useState(false);

  // Callback function to toggle the mobile menu open/close state
  const handleIsOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // Context to check if the device is mobile
  const { isMobile } = useContext(MobileContext);

  // Callback function to toggle the visibility of the contacts dropdown
  const handleShowContacts = useCallback(() => {
    // Allow showing contacts only if the mobile menu is open on mobile devices
    if (isMobile && isOpen) {
      setShowContacts((prev) => !prev);
    } else if (!isMobile) {
      setShowContacts((prev) => !prev); // Keep the behavior for desktop
    }
  }, [isMobile, isOpen, setShowContacts]);

  // Array defining the navigation buttons and their labels/actions
  const navButtons = [
    { label: "home", onClick: () => console.log("Home Clicked") },
    { label: "work", onClick: () => console.log("Projects Clicked") },
    { label: "about", onClick: () => console.log("About Clicked") },
    { label: "contact", onClick: handleShowContacts },
  ];

  // useEffect to handle closing the contacts dropdown when the mobile menu is closed
  useEffect(() => {
    if (!isOpen && isMobile) {
      setShowContacts(false);
    }
  }, [isOpen, isMobile, setShowContacts]); // Include dependencies

  return (
    // Framer Motion component for initial load animation
    <motion.div
      initial={motionLoadAnimate.initial}
      animate={motionLoadAnimate.animate}
      transition={motionLoadAnimate.transition}
      className="fixed top-3 left-3 right-3 py-4.5 rounded-2xl z-50 bg-white/10 backdrop-blur-md shadow-lg border border-white/20"
    >
      {/* Section containing the navigation items */}
      <section className="w-full flex flex-wrap justify-center gap-x-10 gap-y-3 items-center">
        {/* Render mobile menu button or desktop navigation buttons */}
        {isMobile ? (
          <MenuButton isOpen={isOpen} onClick={handleIsOpen} />
        ) : (
          navButtons.map((button, index) => (
            <NavButton
              key={button.label}
              click={button.onClick}
              hover={hover}
              setHover={setHover}
              index={index}
            >
              {button.label}
            </NavButton>
          ))
        )}

        {/* Mobile menu dropdown */}
        {isMobile && (
          <div
            className={`w-full overflow-hidden flex items-center gap-2 flex-col transition-all duration-500 ease-in-out ${
              isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {navButtons.map((button) => (
              <NavButton
                key={button.label}
                click={button.onClick}
                hover={hover}
                setHover={setHover}
              >
                {button.label}
              </NavButton>
            ))}
          </div>
        )}
      </section>

      {/* Animated contacts dropdown */}
      <div
        className={`w-full overflow-hidden transition-all duration-500 ease-in-out transform
    ${
      showContacts
        ? "max-h-96 opacity-100 translate-y-0"
        : "max-h-0 opacity-0 -translate-y-6"
    }
  `}
      >
        {showContacts && <NavContactsDrop />}
      </div>
    </motion.div>
  );
}
