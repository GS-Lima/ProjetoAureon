import logo from "/public/assets/icons/logo.png";
import { useState } from "react";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";

export default function BasicHeader() {
  const [isOpen, setOpen] = useState(false);

  function MenuHamburger() {
    return (
      <ul className="flex flex-col fixed left-0 gap-10 w-1/2 h-screen p-2 pt-10 mt-8 bg-white text-2xl font-bold underline">
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
          <a href="" >Contatos</a>
        </li>
      </ul>
    );
  }

  return (
    <div className="w-full h-16 min-h-[64px] flex items-center justify-center bg-white px-4">
      <div className="absolute left-0 ml-4">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <Link to="/" className="flex">
        <img src={logo} alt="aaa" className="h-12 w-auto" />
      </Link>
      <div className="">{isOpen && <MenuHamburger />}</div>
    </div>
  );
}
