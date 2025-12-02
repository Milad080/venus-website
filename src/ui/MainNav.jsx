import { NavLink } from "react-router-dom";
import { MobileSidebarContext } from "../Context/MobileSidebarContext";
import { useContext } from "react";

function MainNav() {
  const { setOpenMobileSidebar } = useContext(MobileSidebarContext);
  return (
    <nav className="mt-[66px]">
      <ul className="flex flex-col ml-[49px] gap-[9px]">
        <li>
          <button onClick={() => setOpenMobileSidebar(false)}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-machina text-[18px] ${
                  isActive ? "text-[#0038FF] font-bold" : "text-[#181433]"
                }`
              }
            >
              <span>Home</span>
            </NavLink>
          </button>
        </li>
        <li>
          <button onClick={() => setOpenMobileSidebar(false)}>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `font-machina text-[18px] ${
                  isActive ? "text-[#0038FF] font-bold" : "text-[#181433]"
                }`
              }
            >
              <span>Services</span>
            </NavLink>
          </button>
        </li>
        <li>
          <button onClick={() => setOpenMobileSidebar(false)}>
            <NavLink
              to="/solutions"
              className={({ isActive }) =>
                `font-machina text-[18px] ${
                  isActive ? "text-[#0038FF] font-bold" : "text-[#181433]"
                }`
              }
            >
              <span>Solutions</span>
            </NavLink>
          </button>
        </li>
        <li>
          <button onClick={() => setOpenMobileSidebar(false)}>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `font-machina text-[18px] ${
                  isActive ? "text-[#0038FF] font-bold" : "text-[#181433]"
                }`
              }
            >
              <span>Contact us</span>
            </NavLink>
          </button>
        </li>

        <li>
          <button onClick={() => setOpenMobileSidebar(false)}>
            <NavLink
              to="/Jobs"
              className={({ isActive }) =>
                `font-machina text-[18px] ${
                  isActive ? "text-[#0038FF] font-bold" : "text-[#181433]"
                }`
              }
            >
              <span>Jobs</span>
            </NavLink>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
