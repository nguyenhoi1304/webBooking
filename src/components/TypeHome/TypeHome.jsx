import React from "react";
import styles from "./TypeHome.module.css";
import dataType from "../../data/type.json";

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
