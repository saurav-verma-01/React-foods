import React from "react";

import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.logoContainer}>
          <img
            src="https://i.pinimg.com/736x/9a/fa/a4/9afaa4a58b2c5e73cdbd7d66c0b2c220.jpg"
            alt="react logo"
            className="logo"
          />
        </div>

        <nav className={styles.navbar}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Offers</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
