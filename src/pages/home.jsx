import Carousel from "../components/carousel";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Categories from "../components/categories";
import Banner from "../components/banner";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <Carousel />
      <Categories />
      <Footer />
    </>
  );
}
