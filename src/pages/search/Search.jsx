import SearchList from "../../components/SearchList/SearchList";
import SearchPopup from "../../components/SearchPopup/SearchPopup";
import styles from "./Search.module.css";

const Search = () => {
  return (
    <div className={styles.search__page}>
      <SearchPopup />
      <SearchList />
    </div>
  );
};

export default Search;
