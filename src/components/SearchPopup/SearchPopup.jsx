import React from "react";
import styles from "./SearchPopup.module.css";

const SearchPopup = () => {
  return (
    <div className={styles.search}>
      <p>
        <strong>Search</strong>
      </p>
      <form>
        <div className={styles.search__header}>
          <label>Destination</label>
          <input type="text" />
          <label>Check-in Date</label>
          <input type="date" />
        </div>
        <div className={styles.search__body}>
          <p>Options</p>
          <section>
            <label>Min price per night</label>
            <input type="number" />
          </section>
          <section>
            <label>Max price per night</label>
            <input type="number" />
          </section>
          <section>
            <label>Adult</label>
            <input type="number" />
          </section>
          <section>
            <label>Children</label>
            <input type="number" />
          </section>
          <section>
            <label>Room</label>
            <input type="number" />
          </section>
        </div>
        <button className={styles.btn_search} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchPopup;
