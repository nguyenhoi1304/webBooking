import React from "react";
import styles from "./Navbar.module.css";
import dataNavBar from "../../data/navBar.json";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.nav_header}>
          <h1 className={styles.name}>Booking website</h1>
          <div className={styles.rightHeader}>
            <button className={styles.btnRegister}> Register</button>
            <button className={styles.btnLogin}> Login</button>
          </div>
        </div>
        <ul className={styles.list}>
          {dataNavBar.map((item, index) => (
            <li
              key={index}
              // Kiểm tra xem item có đang active hay không:
              className={`${styles["listItem"]} ${
                // Nết có active thì thêm class active không thì sẽ không có class
                item.active === true ? styles.active : ""
              }`}
            >
              <i className={`fa ${item.icon}`}></i>
              <span className={styles.nameItem}>{item.type}</span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
