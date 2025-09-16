import searchIcon from "../assets/icons/searchIcon.svg";

function Navbar() {
  return (
    <nav className="h-12 w-screen flex items-center justify-center border-b-slate-500 shadow-sm sticky top-16 bg-white">
      <div className="flex w-5/6 bg-slate-100 rounded-md border-1 border-slate-300 ">
        <img src={searchIcon} alt="search" className="h-4 m-2" />
        <input type="text" spellCheck={false} className="w-screen p-1 " placeholder="Buscar produtos..." />
      </div>
    </nav>
  );
}

export default Navbar;
