import searchIcon from "../assets/icons/searchIcon.svg";
import userIcon from "../assets/icons/userIcon.svg";
import cartIcon from "../assets/icons/cartIcon.svg";
import favoriteIcon from "../assets/icons/favoriteIcon.svg";
import logo from "../assets/icons/logo.png";
import { useState } from "react";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";




export default function Header() {
  const [isOpen, setOpen] = useState(false);

  function MenuHamburger() {
    return (
      <ul className="flex flex-col fixed left-0 gap-10 w-1/2 h-screen p-2 pt-10 mt-8 z-50 bg-white text-2xl font-bold underline">
        <li>
          <a href="" className="">
            Home
          </a>
        </li>
        <li>
          <a href="">Categorias</a>
        </li>
        <li>
          <a href="">Ofertas</a>
        </li>
        <li>
          <a href="">Sobre Nós</a>
        </li>
        <li>
          <a href="">Contatos</a>
        </li>
      </ul>
    );
  }

  return (
    <div
      style={{ height: "64px", minHeight: "64px", paddingTop: "0", paddingBottom: "0" }}
      className="w-full h-16 min-h-[64px] flex items-center sm:flex justify-between sticky top-0 bg-white px-4 z-50 !pt-0 !pb-0"
    >
      <div className="sm:hidden">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <a href="">
        <img src={logo} alt="aaa" className="h-12 w-auto" />
      </a>
      <div className="">{isOpen && <MenuHamburger />}</div>
      <div className=" bg-slate-100 rounded-md border border-slate-300 items-center hidden lg:flex">
        <img src={searchIcon} alt="search" className="h-4 m-2" />
        <input
          type="text"
          className="h-8 outline-none w-48 "
          placeholder="Pesquise por eletrônicos..."
          spellCheck={false}
        />
      </div>

      {/* criar classes para esse padrão*/}
      <div className="ml-4 mr-4 flex items-center gap-2">
        <Link to="/login" className="border border-slate-400 p-2 rounded-md items-center flex">
          <img src={userIcon} alt="userIcon" className="h-6" />{" "}
        </Link>
        <a href="" className="border border-slate-400 p-2 rounded-md items-center  hidden sm:flex">
          <img src={favoriteIcon} alt="userIcon" className="h-6" />{" "}
        </a>
        <a href="" className="border border-slate-400 p-2 rounded-md items-center hidden sm:flex">
          <img src={cartIcon} alt="userIcon" className="h-6" />{" "}
        </a>
      </div>
    </div>
  );
}


