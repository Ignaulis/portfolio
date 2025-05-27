import NavButton from "../ui/navigationButtons";
import { motionLoadAnimate } from "@/assets/data/framerMotion";
import { useState, useCallback, useContext, useEffect } from "react"; // Added useEffect
import dynamic from "next/dynamic";
import { MobileContext } from "@/context/mobileContext";
import { MenuButton } from "./mobileHamburg";
import { motion } from "framer-motion";
import { ScrollContext } from "@/context/scrollContext";

const NavContactsDrop = dynamic(() => import("./NavContactsDrop"), {
  ssr: false,
  loading: () => <div></div>,
});

export default function Nav() {
  //states
  const [showContacts, setShowContacts] = useState(false);
  const [hover, setHover] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // Context
  const { isMobile } = useContext(MobileContext);
  const { workRef, homeRef, aboutRef } = useContext(ScrollContext);

  // functions
  const handleIsOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // Callback function to toggle the visibility of the contacts dropdown
  const handleShowContacts = useCallback(() => {
    if (isMobile && isOpen) {
      setShowContacts((prev) => !prev);
    } else if (!isMobile) {
      setShowContacts((prev) => !prev);
    }
  }, [isMobile, isOpen, setShowContacts]);

  // scrolling func
  const handleWorkScroll = () => {
    workRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handlehomeScroll = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleabouteScroll = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const navButtons = [
    { label: "home", onClick: handlehomeScroll },
    { label: "work", onClick: handleWorkScroll },
    { label: "about", onClick: handleabouteScroll },
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
      className="fixed top-3 right-3 left-3 z-50 rounded-2xl border border-white/20 bg-white/10 py-4.5 shadow-lg backdrop-blur-md"
    >
      {/* Section containing the navigation items */}
      <section className="flex w-full flex-wrap items-center justify-center gap-x-10 gap-y-3">
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
            className={`flex w-full flex-col items-center gap-2 overflow-hidden transition-all duration-500 ease-in-out ${
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
        className={`w-full transform overflow-hidden transition-all duration-500 ease-in-out ${
          showContacts
            ? "max-h-96 translate-y-0 opacity-100"
            : "max-h-0 -translate-y-6 opacity-0"
        } `}
      >
        {showContacts && <NavContactsDrop />}
      </div>
    </motion.div>
  );
}
