import React from "react";
import styles from "./CityHome.module.css";
import dataCity from "../../data/city.json";

const listCity = dataCity.map((item, index) => (
  <div key={index} className={styles.item_city}>
    <img src={item.image} alt="city" />
    <div className={styles.sub__text}>
      <p>{item.name}</p>
      <p>{item.subText}</p>
    </div>
  </div>
));

const CityHome = () => {
  return <div className={styles.home__city_list}>{listCity}</div>;
};

export default CityHome;
