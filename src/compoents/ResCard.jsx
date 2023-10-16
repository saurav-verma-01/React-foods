import React from "react";

import styles from "./resCard.module.css";

const ResCard = ({
  resName,
  poster,
  cuisine,
  location,
  price,
  rating,
  eta,
}) => {
  return (
    <div className={styles.resCard}>
      <img src={poster} alt={resName} className={styles.resLogo} />

      <div className={styles.resCardDetails}>
        <h3 className={styles.resName}>{resName}</h3>
        <p className={styles.rating}>⭐ {rating} </p>

        <p className={styles.cuisine}>{cuisine}</p>

        <p className={styles.deliveryTime}>{eta} Mins</p>
        <div className={styles.resDetails}>
          <p className="cost">{price}</p>
          <p className={styles.location}>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default ResCard;
