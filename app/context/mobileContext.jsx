import { createContext, useEffect, useState } from 'react';

export const MobileContextProvider = createContext();

export const MobileContext = ({ children }) => {
    const [isMobile, setIsMobile] = useState(false); // initial default

    useEffect(() => {
        // This runs only on the client
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 650);
        };

        handleResize(); // Set initial value on client

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <MobileContextProvider.Provider value={{ isMobile }}>
            {children}
        </MobileContextProvider.Provider>
    );
};
