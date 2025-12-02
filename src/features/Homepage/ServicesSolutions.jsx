import { NavLink } from "react-router-dom";

function ServicesSolutions() {
  return (
    <div
      to="services"
      className="h-[600px] bg-black relative mt-20 xl:h-[749px]"
    >
      <img
        src="images/servicesSolutions.gif"
        alt="servicesgif"
        className="absolute left-[50%] top-[50%] -translate-x-2/4 -translate-y-2/4 z-10"
      />
      <div className="font-machina font-extrabold text-[32px] text-white absolute left-[50%] top-[50%] -translate-x-2/4 -translate-y-2/4 z-20 sm:text-[48px] xl:text-[64px]">
        <div className="flex flex-row items-center">
          <div>
            <p className="text-[68px] text-[#0038FF] font-light sm:text-[78px] xl:text-[128px]">
              &
            </p>
          </div>
          <div className="leading-none">
            <NavLink to="/services">
              <h1 className="cursor-pointer">Services</h1>
            </NavLink>
            <NavLink to="/solutions">
              <h1 className="cursor-pointer">Solutions</h1>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSolutions;
