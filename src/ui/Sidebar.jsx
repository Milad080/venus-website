import Logo from "./Logo";
import MainNav from "./MainNav";

function Sidebar() {
  return (
    <div className="flex mr-2.5 font-machina">
      <div className="w-2.5 bg-[#0038FF]"></div>
      <aside className="w-[223px]">
        <Logo />
        <MainNav />
      </aside>
    </div>
  );
}

export default Sidebar;
