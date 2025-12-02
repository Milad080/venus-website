function MobileButton({
  children,
  color = "#ffffff",
  px,
  py,
  bg = "transparent",
  h,
  w,
  border,
}) {
  return (
    <button
      className="w-fit font-machina font-light text-[10px] border"
      style={{
        color: color,
        padding: `${py} ${px}`,
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

export default MobileButton;
