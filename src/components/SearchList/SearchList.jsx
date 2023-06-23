import React from "react";
import styles from "./SearchList.module.css";

const dataSearch = [
  {
    name: "Tower Street Apartments",
    distance: "500m",
    tag: "Free airport taxi",
    type: "Entire studio • 1 bathroom • 21m² 1 full bed",
    description: "Studio Apartment with Air conditioning",
    free_cancel: true,
    price: 112,
    rate: 8.9,
    rate_text: "Excellent",
    image_url: "./images/hotel_search_1.webp",
  },
  {
    name: "Comfort Suites Airport",
    distance: "200m",
    tag: "Free Breakfast",
    type: "Entire studio • 2 bathroom • 100m² 2 full bed",
    description: "Studio Apartment",
    free_cancel: true,
    price: 140,
    rate: 9.3,
    rate_text: "Exceptional",
    image_url: "./images/hotel_search_2.jpg",
  },
  {
    name: "Four Seasons Hotel",
    distance: "100m",
    tag: "Free Parking",
    type: "1 bathroom • 51m² 2 full bed",
    description: "Hotel in Lisbon",
    free_cancel: false,
    price: 99,
    rate: 8.8,
    rate_text: "Excellent",
    image_url: "./images/hotel_search_3.jpg",
  },
];

const SearchList = () => {
  return (
    <div className={styles.result__search}>
      {dataSearch.map((item, index) => (
        <div key={index} className={styles.result__search_item}>
          <img src={item.image_url} alt="hotel"></img>
          <div className={styles.body_content}>
            <section className={styles.title}>
              <h1>{item.name}</h1>
              <p>{item.rate_text}</p>
              <span>{item.rate}</span>
            </section>
            <section className={styles.free}>
              <p>{item.distance} from center</p>
              <div>
                <span className={styles.rate_tag}>{item.tag}</span>
              </div>
              <p>
                <strong>{item.description}</strong>
              </p>
            </section>
            <section className={styles.title}>
              <p>{item.type}</p>
              <p className={styles.price}>${item.price}</p>
            </section>
            <section>
              <p>
                {item.free_cancel === true ? (
                  <div>
                    <section className={styles.title2}>
                      <p>Free cancellation</p>
                      <span>Includes taxes and fees</span>
                    </section>
                    <section className={styles.title3}>
                      <p>
                        You can cancel later, so luck in this great price today!
                      </p>
                    </section>
                  </div>
                ) : (
                  ""
                )}
              </p>
            </section>
            <button className={styles.btn__see}>See availability</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchList;
