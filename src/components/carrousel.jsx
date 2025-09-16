
function Carousel() {
  return (
    <div className="p-4 mb-8 overflow-x-auto scroll-smooth snap-x snap-mandatory">
        <h1 className="flex font-bold text-3xl p-2">Ofertas Exclusivas</h1>
        <div className="flex gap-4 overflow-auto mt-4">
            <div className="flex items-center justify-center gradiebt h-50 w-96 rounded-md bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 ">
                <h1 className="text-white">Carrossel</h1>
            </div>
        </div> 
    </div>
  );
}

export default Carousel;