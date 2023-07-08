import React from "react";
import styles from "./SearchList.module.css";
import dataSearch from "../../data/search.json";

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
                {/* kiểm tra xem có Free không: nếu free hiển thị đoạn thông tin có nói đến không thì sẽ rỗng */}
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
