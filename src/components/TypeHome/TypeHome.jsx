import React from "react";
import styles from "./TypeHome.module.css";

const dataType = [
  {
    name: "Hotels",
    count: 233,
    image: "./images/type_1.webp",
  },
  {
    name: "Apartments",
    count: 2331,
    image: "./images/type_2.jpg",
  },
  {
    name: "Resorts",
    count: 2331,
    image: "./images/type_3.jpg",
  },
  {
    name: "Villas",
    count: 2331,
    image: "./images/type_4.jpg",
  },
  {
    name: "Cabins",
    count: 2331,
    image: "./images/type_5.jpg",
  },
];

const listType = dataType.map((item, index) => (
  <div key={index} className={styles.item_type}>
    <img src={item.image} alt="hotel" />
    <div className={styles.sub__text}>
      <p className={styles.sub__name}>{item.name}</p>
      <p className={styles.sub__count}>{item.count} hotels</p>
    </div>
  </div>
));

const TypeHome = () => {
  return (
    <div className={styles.type}>
      <div>
        <strong>Browse by property type</strong>
      </div>
      <div className={styles.home__Type_list}>{listType}</div>
    </div>
  );
};

export default TypeHome;
