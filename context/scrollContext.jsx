import { createContext, useRef } from "react";

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const workRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);

  return (
    <ScrollContext.Provider value={{ workRef, homeRef, aboutRef }}>
      {children}
    </ScrollContext.Provider>
  );
};
