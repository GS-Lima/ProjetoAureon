import bannerImg from "../assets/images/laptop.png";

function Home() {
  return (
    <div className="w-full bg-[#111111] overflow-x-hidden ">
      <div className="h-9/12 grid grid-cols-1  sm:grid-cols-2 p-4 lg:items-center">
        <div className="flex flex-col justify-center text-center p-4">
          <h1 className="text-4xl text-white font-bold mb-2 lg:text-5xl lg:mb-10 lg:leading-tight max-w-full lg:max-w-md">
            Eletrônicos que tranformam o seu mundo
          </h1>
          <h2 className="text-lg text-white mb-6 lg:text-xl">
            Descubra as últimas inovações e produtos que elevam a sua experiência digital. Tecnologia de ponta ao seu
            alcance.
          </h2>
          <div className="flex justify-center">
            <button className="bg-[#059669] p-2 pl-5 pr-5 rounded-4xl text-white w-fit text-xl font-bold flex justify-center items-center">
              Explorar Produtos
            </button>
          </div>
        </div>
        <div className="flex ml-10 justify-center lg:justify-end">
          <img src={bannerImg} alt="" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

export default Home;
