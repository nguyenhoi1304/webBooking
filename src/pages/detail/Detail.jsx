import Footer from "../../components/Footer/Footer";
import InformationHotel from "../../components/InformationHotel/InformationHotel";
import Navbar from "../../components/Navbar/Navbar";
import SubscribeHome from "../../components/SubscribeHome/SubscribeHome";
// import styles from "./Detail.module.css";

const Detail = () => {
  return (
    <>
      <Navbar />
      {/* Sử dụng class container là 1 class global */}
      <div className="container">
        <InformationHotel />
      </div>
      <SubscribeHome />
      <div className="container">
        <Footer />
      </div>
    </>
  );
};

export default Detail;
