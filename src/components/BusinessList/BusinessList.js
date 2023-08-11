import React from "react";

import styles from "./BusinessList.module.css";
import Business from "../Business/Business";

// collection of all businesses, map over to render - for later
// const businesses = [];

const BusinessList = () => {
  return (
    <div className={styles.businessList}>
      <Business />
      <Business />
      <Business />
    </div>
  );
};
export default BusinessList;
