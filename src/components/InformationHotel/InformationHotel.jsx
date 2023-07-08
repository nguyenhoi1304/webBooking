import React from "react";
import styles from "./InformationHotel.module.css";
import dataDetail from "../../data/detail.json";

const InformationHotel = () => {
  return (
    <div className={styles.detail}>
      <section className={styles.detail__header}>
        <ul>
          <li>{dataDetail.name}</li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 384 512"
            >
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
            </svg>
            {dataDetail.address}
          </li>

          <li>{dataDetail.distance}</li>
          <li>
            Book a stay over ${dataDetail.price} at this property and het a free
            airport taxi
          </li>
        </ul>
        <div>
          <button>Reserve or Book Now!</button>
        </div>
      </section>
      <section className={styles.listImg}>
        {dataDetail.photos.map((item, index) => (
          <img key={index} src={item} alt="error img" />
        ))}
      </section>
      <section className={styles.detail__footer}>
        <div className={styles.detail__footer_left}>
          <p>
            <strong>{dataDetail.title}</strong>
          </p>
          <p>{dataDetail.description}</p>
        </div>
        <div className={styles.detail__footer_right}>
          <p>Perfect for a 9-night stay!</p>
          <p>
            Located in the real heart of Krakow, this property has an
            excellent.Location score of 9.8!
          </p>
          <div>
            <span className={styles.price__nine}>
              ${`${dataDetail.nine_night_price}`}
            </span>
            <span> (9 nights)</span>
          </div>
          <button>Reserve or Book Now!</button>
        </div>
      </section>
    </div>
  );
};

export default InformationHotel;
