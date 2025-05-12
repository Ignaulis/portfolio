import { createContext, useEffect, useState } from "react";

// MobileContext komponentas
export const MobileContext = createContext();

// MobileContextProvider komponentas
export const MobileContextProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // Atidėtas arba su throttle debounced resize įvykio apdorojimas
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 650);
  };

  useEffect(() => {
    // Nustatome pradinę reikšmę pagal lango dydį
    handleResize();

    // Pridedame resize įvykio stebėjimą
    window.addEventListener("resize", handleResize);

    // Išvalome stebėjimą, kai komponentas sunaikinamas
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Tik pirmą kartą komponentui įsikrovus

  return (
    <MobileContext.Provider value={{ isMobile, setShowForm, showForm }}>
      {children}
    </MobileContext.Provider>
  );
};
