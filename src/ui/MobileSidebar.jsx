import { useContext } from "react";
import { HiMenu } from "react-icons/hi";
import { MobileSidebarContext } from "../Context/MobileSidebarContext";
import MainNav from "./MainNav";
import { FiX } from "react-icons/fi";

function MobileSidebar() {
  const { openMobileSidebar, setOpenMobileSidebar } =
    useContext(MobileSidebarContext);
  return (
    <div className="">
      <HiMenu
        className="cursor-pointer mt-2 ml-1 drop-shadow-[0_5px_3px_rgba(0,0,0,0.9)]"
        size={42}
        onClick={() => setOpenMobileSidebar(true)}
      />
      {openMobileSidebar && (
        <div className="fixed bg-[#ffffff14] top-0 left-0 w-full h-screen backdrop-blur-sm transition-all duration-500 z-[1000]">
          <div className="bg-[#fafafa] fixed top-0 left-0 h-screen transition-all duration-500 drop-shadow-[0_3px_13px_rgba(0,0,0,0.5)] pr-6 z-50">
            <FiX
              className="cursor-pointer"
              size={42}
              onClick={() => setOpenMobileSidebar(false)}
            />
            <MainNav />
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileSidebar;
