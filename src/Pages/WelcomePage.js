import React from "react";
import { Link } from "react-router-dom";
import styles from "./WelcomePage.module.css";

const WelcomePage = () => {
  return (
    <React.Fragment>
      <div className={styles.imageContainer}>
        <div className={styles.content}>
          <div className={`${styles.heading} ${styles.highlight}`}>
            Delighted Meals..
          </div>
          <br />
          <div className={`${styles.description} ${styles.highlight}`}>
            Discover the flavours of India!
          </div>
          <br />
          <Link to="/Welcome" className={styles.highlight}>
            Click to BROWSE DISHES !
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WelcomePage;
