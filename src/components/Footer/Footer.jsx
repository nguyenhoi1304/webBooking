import React from "react";
import styles from "./Footer.module.css";
import dataFooter from "../../data/footer.json";

// Biến listDataFooter lưu kết quả render
const listDataFooter = dataFooter.map((item, index) => (
  <div key={index}>
    <ul className={styles.listFooter}>
      {item.col_values.map((item, index) => (
        <li key={index} className={styles.listFooter__item}>
          {item}
        </li>
      ))}
    </ul>
  </div>
));

const Footer = () => {
  return <div className={styles.footer}>{listDataFooter}</div>;
};

export default Footer;
