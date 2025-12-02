import { useContext } from "react";
import { MobileSidebarContext } from "../Context/MobileSidebarContext";

function Button({
  children,
  color = "#ffffff",
  px,
  py,
  bg = "transparent",
  h,
  w,
  border,
}) {
  const { isMobile } = useContext(MobileSidebarContext);
  return (
    <button
      className="w-fit font-machina font-light text-sm border"
      style={{
        color: color,
        padding: isMobile ? "3px 6px" : `${py} ${px}`,
        backgroundColor: `${bg}`,
        height: `${h}`,
        width: `${w}`,
        borderColor: `${border}`,
      }}
    >
      {children}
    </button>
  );
}

export default Button;
