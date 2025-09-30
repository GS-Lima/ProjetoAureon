import facebookImg from "../assets/icons/facebookLogo.svg";
import instagramImg from "../assets/icons/instagramLogo.svg";
import twitterImg from "../assets/icons/twitterLogo.svg";

export default function BasicFooter() {
  return (
    <div className="w-full h-1/2 bg-[#111111] flex flex-col justify-center items-center bottom-0">
      <div className="flex flex-row gap-4 my-2 items-center mt-10 mb-10">
        <a href="">
          <img src={facebookImg} alt="" className="h-8" />
        </a>
        <a href="">
          <img src={instagramImg} alt="" className="h-10" />
        </a>
        <a href="">
          <img src={twitterImg} alt="" className="h-8" />
        </a>
      </div>
      <h1 className="text-slate-100 pb-2">© 2025 Aureon. All rights reserved.</h1>
    </div>
  );
}
