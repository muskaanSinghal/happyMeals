import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./MainHeader.module.css";
import { useState } from "react";

const MainHeader = () => {
  const [demo, setDemo] = useState([]);
  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.left}>Delighted Meals</div>
        <nav className={styles.right}>
          <NavLink
            to="/main/login"
            className={styles.link}
            activeClassName={styles.active}
          >
            Log In
          </NavLink>
          <NavLink
            to="/cart"
            className={styles.link}
            activeClassName={styles.active}
          >
            Your Cart
          </NavLink>
          <NavLink
            to="/logOut"
            className={styles.link}
            activeClassName={styles.active}
          >
            Log Out
          </NavLink>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default MainHeader;
