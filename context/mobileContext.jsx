import { createContext, useEffect, useState } from "react";

export const MobileContext = createContext();

export const MobileContextProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 650);
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <MobileContext.Provider value={{ isMobile, setShowForm, showForm }}>
      {children}
    </MobileContext.Provider>
  );
};
