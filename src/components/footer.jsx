import facebookImg from "/public/assets/icons/facebookLogo.svg";
import instagramImg from "/public/assets/icons/instagramLogo.svg";
import twitterImg from "/public/assets/icons/twitterLogo.svg";

export default function Footer() {
  return (
    <div className="w-full h-fit bg-[#111111] flex flex-col justify-center items-center ">
      <div className="flex flex-col text-center pt-10 gap-10 font-bold  text-white ">
        <a href="">Sobre nós</a>
        <a href="">Produtos</a>
        <a href="">Contato</a>
        <a href="">Política de Privacidade</a>
        <a href="">Termos de Uso</a>
      </div>
      <div className="flex flex-row gap-4 my-2 items-center mt-10 mb-10">
        <a href=""><img src={facebookImg} alt="" className="h-8"/></a>
        <a href=""><img src={instagramImg} alt="" className="h-10"/></a>
        <a href=""><img src={twitterImg} alt="" className="h-8" /></a>
      </div>
      <h1 className="text-slate-100 pb-2">© 2025 Aureon. All rights reserved.</h1>
    </div>
  );
}
