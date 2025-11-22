function Button({ children, color = "#ffffff", px, py, bg, h, w }) {
  return (
    <button
      className="w-fit font-machina font-light text-sm border-[0.5px] border-[#4f4f4f] bg-transparent"
      style={{
        color: color,
        padding: `${py} ${px}`,
        backgroundColor: `${bg}`,
        height: `${h}`,
        width: `${w}`,
      }}
    >
      {children}
    </button>
  );
}

export default Button;
