import CityHome from "../../components/CityHome/CityHome";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HotelHome from "../../components/HotelHome/HotelHome";
import SubscribeHome from "../../components/SubscribeHome/SubscribeHome";
import TypeHome from "../../components/TypeHome/TypeHome";

const Home = () => {
  return (
    <div>
      <Header />
      {/* Sử dụng class container là 1 class global */}
      <div className="container">
        <CityHome />
        <TypeHome />
        <HotelHome />
      </div>
      <SubscribeHome />
      <div className="container">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
