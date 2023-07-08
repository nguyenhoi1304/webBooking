import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SearchList from "../../components/SearchList/SearchList";
import SearchPopup from "../../components/SearchPopup/SearchPopup";
import styles from "./Search.module.css";

const Search = () => {
  return (
    <div>
      <Header />
      {/* Sử dụng class container là 1 class global */}
      <div className="container">
        <div className={styles.search__page}>
          <SearchPopup />
          <SearchList />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Search;
