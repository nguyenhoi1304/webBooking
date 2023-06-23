import React from "react";
import styles from "./Footer.module.css";

const dataFooter = [
  {
    col_number: 1,
    col_values: [
      "Countries",
      "Regions",
      "Cities",
      "Districts",
      "Airports",
      "Hotels",
    ],
  },
  {
    col_number: 2,
    col_values: [
      "Homes",
      "Apartments",
      "Resorts",
      "Villas",
      "Hostels",
      "Guest houses",
    ],
  },
  {
    col_number: 3,
    col_values: [
      "Unique places to stay",
      "Reviews",
      "Unpacked: Travel articles",
      "Travel communities",
      "Seasonal and holiday deals",
    ],
  },
  {
    col_number: 4,
    col_values: [
      "Car rental",
      "Flight Finder",
      "Restaurant reservations",
      "Travel Agents",
    ],
  },
  {
    col_number: 5,
    col_values: [
      "Curtomer Service",
      "Partner Help",
      "Careers",
      "Sustainability",
      "Press center",
      "Safety Resource Center",
      "Investor relations",
      "Terms & conditions",
    ],
  },
];

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
