import React from "react";
import styles from "./HotelHome.module.css";
import dataHotel from "../../data/hotel_list.json";

// biến listHotel lưu kết quả render
const listHotel = dataHotel.map((item, index) => (
  <div key={index} className={styles.item_hotel}>
    <img src={item.image_url} alt="hotel" />
    <div className={styles.sub__text}>
      <p className={styles.sub__name}>{item.name}</p>
      <p>{item.city}</p>
      <p className={styles.sub__price}>Starting from ${item.price}</p>
      <p>
        <span>{item.rate}</span> {item.type}
      </p>
      <p>{item.subText}</p>
    </div>
  </div>
));

const HotelHome = () => {
  return (
    <div>
      <div className={styles.hotel}>
        <div>
          <strong>Home Guests love</strong>
        </div>
        <div className={styles.home__hoTel_list}>{listHotel}</div>
      </div>
    </div>
  );
};

export default HotelHome;
