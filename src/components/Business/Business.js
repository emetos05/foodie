import React from "react";

import styles from "./Business.module.css";

const Business = ({ business }) => {
  return (
    <div className={styles.business}>
      <div className={styles.imageContainer}>
        <img src={business.imageSrc} alt="" />
      </div>
      <h2>{business.name}</h2>
      <div className={styles.info}>
        <div className={styles.address}>
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.google.com/maps/`}
          >
            <p>{business.address1}</p>
            <p>{business.address2}</p>
          </a>
        </div>
        <div className={styles.reviews}>
          <h3>{business.category}</h3>
          <h3 className={styles.rating}>{`${business.rating} stars`}</h3>
          <p>{`${business.reviewCount} reviews`}</p>
        </div>
      </div>
    </div>
  );
};
export default Business;
