import laptopImage from "../assets/icons/laptopIcon.svg";
import phoneImage from "../assets/icons/smartphoneIcon.png";
import earphoneImage from "../assets/icons/headphoneIcon.svg";
import electronicsImage from "../assets/icons/smartwatchIcon.png";
import gameImage from "../assets/icons/gameIcon.png";

function Categories() {
  return (
    <div className="">
      <h1 className="text-3xl ml-4 mb-4 font-bold">Explore as categorias</h1>
      <div className="flex overflow-auto w-screen p-4 gap-10 ">
        <a href="" className="flex flex-col justify-center items-center bg-slate-100 p-2 rounded-md w-28">
          <img src={laptopImage} alt="" className="h-10 p-0" />
          <h1>Laptops</h1>
        </a>
        <a href="" className="flex flex-col justify-center items-center bg-slate-100 p-2 rounded-md w-28">
          <img src={phoneImage} alt="" className="h-10 p-0" />
          <h1>Smartphones</h1>
        </a>
        <a href="" className="flex flex-col justify-center items-center  bg-slate-100 rounded-md w-28">
          <img src={earphoneImage} alt="" className="h-10 p-0" />
          <h1>Fones</h1>
        </a>
        <a href="" className="flex flex-col justify-center items-center  bg-slate-100 rounded-md w-28">
          <img src={electronicsImage} alt="" className="h-10 p-0" />
          <h1>Eletrônicos</h1>
        </a>
        <a href="" className="flex flex-col justify-center items-center  bg-slate-100 rounded-md w-28">
          <img src={gameImage} alt="" className="h-10 p-0" />
          <h1>Jogos</h1>
        </a>
      </div>
    </div>
  );
}

export default Categories;
