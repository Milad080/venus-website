import { createContext, useState, useEffect } from "react";

export const MobileSidebarContext = createContext();

export function MobileSidebarProvider({ children }) {
  const [isMobile, setIsMobile] = useState(false);
  const [openMobileSidebar, setOpenMobileSidebar] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setOpenMobileSidebar(false);
    }
  }, [isMobile]);

  return (
    <MobileSidebarContext.Provider
      value={{ openMobileSidebar, setOpenMobileSidebar, isMobile }}
    >
      {children}
    </MobileSidebarContext.Provider>
  );
}
