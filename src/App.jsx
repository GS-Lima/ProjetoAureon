import Carousel from "./components/carrousel";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Categories from "./components/categories";
import Home from "./pages/home";


function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Home />
      <Carousel />
      <Categories />
    </>
  );
}

export default App;
