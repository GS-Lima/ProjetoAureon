import laptopImage from "../assets/icons/laptopIcon.svg";
import phoneImage from "../assets/icons/smartphoneIcon.png";
import earphoneImage from "../assets/icons/headphoneIcon.svg";
import electronicsImage from "../assets/icons/smartwatchIcon.png";
import gameImage from "../assets/icons/gameIcon.png";

const itens = [
  { id: "laptops", img: laptopImage, label: "Laptops" },
  { id: "smartphones", img: phoneImage, label: "Smartphones" },
  { id: "fones", img: earphoneImage, label: "Fones" },
  { id: "cameras", img: electronicsImage, label: "Câmeras" },
  { id: "jogos", img: gameImage, label: "Jogos" },
];


function Categories() {
  return (
      <div>
        <div className="flex overflow-auto gap-4 p-4">
            {itens.map(category =>{
                return (
                    <a key={category.id} href={`#${category.id}`} className="flex flex-col justify-center items-center bg-slate-100 p-2 rounded-md w-28 shrink-0">
                      <img src={category.img} alt="" className="h-10 p-0" />
                      <h1>{category.label}</h1>
                    </a>
                )
            })}
        </div>
    </div>
  );
}

export default Categories;
