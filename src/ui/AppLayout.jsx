import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import MobileSidebar from "./MobileSidebar";
import { useContext } from "react";
import { MobileSidebarContext } from "../Context/MobileSidebarContext";
import MobileLogo from "./MobileLogo";
function AppLayout() {
  const { isMobile } = useContext(MobileSidebarContext);
  return (
    <div className="flex h-screen">
      {!isMobile ? <Sidebar /> : <MobileSidebar />}

      <main className="flex-1 overflow-y-auto">
        {isMobile ? (
          <>
            <MobileLogo />
            <Outlet />
          </>
        ) : (
          <Outlet />
        )}
      </main>
    </div>
  );
}

export default AppLayout;
