import React from "react";
import styles from "./SubscribeHome.module.css";

const SubscribeHome = () => {
  const handleSubmit = (e) => {
    e.preventdefault();
  };
  return (
    <form className={styles.subsCribe__home} onSubmit={handleSubmit}>
      <h1>Save time, save money!</h1>
      <p>Sign up and we''ll send the best deals to you</p>
      <div className={styles.emailInput}>
        <input placeholder="Your Email" />
        <button type="submit">Subscribe</button>
      </div>
    </form>
  );
};

export default SubscribeHome;
