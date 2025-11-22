import { NavLink } from "react-router-dom";

function MainNav() {
  return (
    <nav className="mt-[66px]">
      <ul className="flex flex-col ml-[49px] gap-[9px]">
        <li>
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
        </li>
        <li>
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
        </li>
        <li>
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
        </li>
        <li>
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
        </li>
        <li>
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
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
