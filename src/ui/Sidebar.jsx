import Logo from "./Logo";
import MainNav from "./MainNav";

function Sidebar() {
  return (
    <aside className="flex mr-2.5 font-machina">
      <div className="w-2.5 bg-[#0038FF]"></div>
      <div className="w-[160px] lg:w-[223px]">
        <Logo />
        <MainNav />
      </div>
    </aside>
  );
}

export default Sidebar;
