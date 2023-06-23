import React from "react";
import styles from "./InformationHotel.module.css";

const dataDetail = {
  name: "Tower Street Apartments",
  address: "Elton St 125 New york",
  distance: "Excellent location - 500m from center",
  price: "Book a stay over $114 at this property and get a free airport taxi",
  photos: [
    "./images/hotel_detail_1.jpg",
    "./images/hotel_detail_2.jpg",
    "./images/hotel_detail_3.jpg",
    "./images/hotel_detail_4.jpg",
    "./images/hotel_detail_5.jpg",
    "./images/hotel_detail_6.jpg",
  ],
  title: "Stay in the heart of City",
  description:
    "Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accommodations with air conditioning and free WiFi.The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat - screen TV, and a private bathroom with shower and a hairdryer.A fridge is also offered, as well as an electric tea pot and a coffee machine.Popular points of interest near the apartment include Cloth Hall, Main Market Square and Town Hall Tower.The nearest airport is John Paul II International Kraków - Balice, 16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service.",
  nine_night_price: 955,
};

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
