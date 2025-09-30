import searchIcon from "../assets/icons/searchIcon.svg";

function Navbar() {
  return (
    <nav className="h-12 max-w-full flex items-center justify-center border-b-slate-500 shadow-sm sticky top-16 bg-white lg:hidden">
      <div className="flex w-4/5 bg-slate-100 rounded-md border border-slate-300 ">
        <img src={searchIcon} alt="search" className="h-4 m-2" />
        <input type="text" spellCheck={false} className="flex-1 p-1 min-w-0 " placeholder="Buscar produtos..." />
      </div>
    </nav>
  );
}

export default Navbar;
