import React from "react";
import styles from "./Navbar.module.css";

const dataNavList = [
  {
    type: "Stays",
    icon: "fa fa-bed",
    active: true,
  },
  {
    type: "Flights",
    icon: "fa fa-plane",
    active: false,
  },
  {
    type: "Car rentals",
    icon: "fa fa-car",
    active: false,
  },
  {
    type: "Attractions",
    icon: "fa fa-bed",
    active: false,
  },
  {
    type: "Airport taxis",
    icon: "fa fa-taxi",
    active: false,
  },
];

const Navbar = (props) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.nav_header}>
        <h1 className={styles.name}>Booking website</h1>
        <div className={styles.rightHeader}>
          <button className={styles.btnRegister}> Register</button>
          <button className={styles.btnLogin}> Login</button>
        </div>
      </div>
      <ul className={styles.list}>
        {dataNavList.map((item, index) => (
          <li
            key={index}
            className={`${styles["listItem"]} ${
              item.active === true ? styles.active : ""
            }`}
          >
            <i className={item.icon}></i>
            <span className={styles.nameItem}>{item.type}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
