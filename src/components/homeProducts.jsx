import bannerImg from "/public/assets/images/laptop.png";

export default function HomeProducts() {
 const product = [
  { id: 1, img: bannerImg, label: "Notebook", preco: "R$ 5.999,99" },
  { id: 2, img: bannerImg, label: "Notebook2", preco: "R$ 3.250,99" },
  { id: 3, img: bannerImg, label: "Notebook3", preco: "R$ 4.199,99" },
  { id: 4, img: bannerImg, label: "Notebook4", preco: "R$ 2.999,99" },
  { id: 5, img: bannerImg, label: "Notebook5", preco: "R$ 6.500,00" },
  { id: 6, img: bannerImg, label: "Notebook6", preco: "R$ 7.200,00" },
];

  return (
    <div className="flex flex-col justify-center items-center bg-slate-200 py-10 ">
      <div className="flex flex-col justify-center items-center" >
        <h1 className="text-3xl font-bold mb-10">Destaques da Semana</h1>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {product.map((produtos) => {
            return (
              <div key={produtos.id} className="bg-white h-72 w-60 flex flex-col justify-center items-center p-2 gap-2 rounded-md">
                <img src={produtos.img} alt="" />
                <label htmlFor="nome">{produtos.label}</label>
                <label htmlFor="preco">{produtos.preco}</label>
                <button className="bg-[#059669] text-white w-full rounded-md">Comprar</button>
              </div>
            );
          })}
        </section>
        <button type="button" className="bg-[#059669] text-white font-bold mt-10 w-1/3 rounded-md p-1 cursor-pointer ">
          Ver mais
        </button>
      </div>
    </div>
  );
}
