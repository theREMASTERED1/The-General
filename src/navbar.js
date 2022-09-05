import React from "react";

import styles from "./navbar.module.css";
import { useState } from "react";

import { Link } from "react-router-dom";

export default function Navbar() {
  const [burgerOpen, setBurgerOpen] = useState(false);

  function togBurgerOn() {
    if (burgerOpen) {
      setBurgerOpen(false);
      console.log("YES");
    } else {
      setBurgerOpen(true);
      console.log("NO");
    }
  }
  function togBurgerOff() {
    if (burgerOpen) {
      setBurgerOpen(false);
      console.log("NO");
    }
  }
  return (
    <div className={styles.contain}>
      <div className={styles.navBar}>
        <div className={styles.burgerBox}>
          <svg
            className={styles.hamburger}
            viewBox="0 0 100 80"
            width="40"
            height="40"
            onClick={togBurgerOn}
          >
            <rect width="100" height="20" rx="8" backcolor="white"></rect>
            <rect y="30" width="100" height="20" rx="8"></rect>
            <rect y="60" width="100" height="20" rx="8"></rect>
          </svg>
        </div>

        <div
          className={styles.navList1}
          animate={{ x: 100 }}
          transition={{ delay: 1 }}
        >
          <div className={styles.navListRow}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <p>Home</p>
            </Link>
          </div>
          <div className={styles.navListRow}>
            <Link to="/newsPage/news" style={{ textDecoration: "none" }}>
              <p>News</p>
            </Link>
          </div>
          <div className={styles.navListRow}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <p>Home</p>
            </Link>
          </div>
          <div className={styles.navListRow}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <p>Home</p>
            </Link>
          </div>
        </div>
      </div>
      {burgerOpen ? (
        <div
          className={styles.navList}
          animate={{ x: 100 }}
          transition={{ delay: 1 }}
          onClick={togBurgerOff}
        >
          <div className={styles.navListRow}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <p>Home</p>
            </Link>
          </div>
          <div className={styles.navListRow}>
            <Link to="/profilePage/profile" style={{ textDecoration: "none" }}>
              <p>Profile</p>
            </Link>
          </div>
          <div className={styles.navListRow}>
            <p>Weather</p>
          </div>
          <div className={styles.navListRow}>
            <p>NEWS</p>
          </div>
          <div className={styles.navListRow}>
            <Link
              to="/surprisePage/surprise"
              style={{ textDecoration: "none" }}
            >
              <p>surprise</p>
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
