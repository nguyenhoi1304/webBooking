import React from "react";
import styles from "./HotelHome.module.css";

const dataHotel = [
  {
    name: "Aparthotel Stare Miasto",
    city: "Madrid",
    price: 120,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_1.webp",
  },
  {
    name: "Comfort Suites Airport",
    city: "Austin",
    price: 140,
    rate: 9.3,
    type: "Exceptional",
    image_url: "./images/hotel_2.jpg",
  },
  {
    name: "Four Seasons Hotel",
    city: "Lisbon",
    price: 99,
    rate: 8.8,
    type: "Excellent",
    image_url: "./images/hotel_3.jpg",
  },
  {
    name: "Hilton Garden Inn",
    city: "Berlin",
    price: 105,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_4.jpg",
  },
];

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
    <div className={styles.hotel}>
      <div>
        <strong>Home Guests love</strong>
      </div>
      <div className={styles.home__hoTel_list}>{listHotel}</div>
    </div>
  );
};

export default HotelHome;
