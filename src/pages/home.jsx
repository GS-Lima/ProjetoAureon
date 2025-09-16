import bannerImg from "../assets/images/banner.png";



function Home() {
  return (
    <div>
      <div className="h-9/12 grid grid-cols-1 sm:grid-cols-2 p-4 lg:items-center lg:px-10">
        <div className="lg:pl-25 lg:pr-12">
          <h1 className="text-4xl font-bold mb-2 lg:text-5xl lg:mb-10 lg:leading-tight">Eletrônicos que tranformam o seu mundo</h1>
          <h2 className="text-lg mb-6 lg:text-1xl">
            Descubra as últimas inovações e pr odutos que elevam a sua experiência digital. Tecnologia de ponta ao seu
            alcance.
          </h2>
          <button className="bg-emerald-600 p-2 rounded-md text-white w-46 text-xl font-bold flex justify-center items-center">
            Compre agora
          </button>
        </div>
        <div>
          <img src={bannerImg} alt="" className="mt-4 p-2 rounded-4xl w-screen" />
        </div>
      </div>
    </div>

  );
}

export default Home;
