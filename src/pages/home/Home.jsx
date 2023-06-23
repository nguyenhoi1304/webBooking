import CityHome from "../../components/CityHome/CityHome";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HotelHome from "../../components/HotelHome/HotelHome";
import SubscribeHome from "../../components/SubscribeHome/SubscribeHome";
import TypeHome from "../../components/TypeHome/TypeHome";
// import styles from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <Header />
      <CityHome />
      <TypeHome />
      <HotelHome />
      <SubscribeHome />
      <Footer />
    </div>
  );
};

export default Home;
