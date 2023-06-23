import React from "react";
import styles from "./CityHome.module.css";

const dataCity = [
  {
    name: "Dublin",
    subText: "123 properties",
    image: "./images/city_1.webp",
  },
  {
    name: "Reno",
    subText: "533 properties",
    image: "./images/city_2.webp",
  },
  {
    name: "Austin",
    subText: "532 properties",
    image: "./images/city_3.webp",
  },
];

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
