import React from "react";

import styles from "./navbar.module.css";
import { useState } from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [turn, setTurn] = useState(false);

  const buttonTurn = () => {
    document.getElementById("arrow").style.transform = "rotate(180deg)";
  };

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <motion.div
        animate={{ width: open ? "200px" : "50px" }}
        className={styles.sideBar}
      >
        <div className={styles.burger}>
          <div onClick={toggle}>
            <motion.i
              animate={{
                transform: open ? "rotate(180deg)" : "rotate(0deg)",
              }}
              class="fa-solid fa-circle-chevron-right fa-2xl"
              id="arrow"
            ></motion.i>
          </div>
        </div>
        <div className={styles.links}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className={styles.navListRow}>
              <i className="fa-solid fa-house"></i>
              {open && "Home"}
            </div>
          </Link>
          <Link to="/newsPage/news" style={{ textDecoration: "none" }}>
            <div className={styles.navListRow}>
              <i className="fa-solid fa-newspaper"></i> {open && "News"}
            </div>
          </Link>
          <Link to="/weatherPage/weather" style={{ textDecoration: "none" }}>
            <div className={styles.navListRow}>
              <i className="fa-solid fa-cloud"></i> {open && "Weather"}
            </div>
          </Link>
          <Link to="/gamePage/game" style={{ textDecoration: "none" }}>
            <div className={styles.navListRow}>
              <i className="fa-solid fa-gamepad"></i> {open && "Game"}
            </div>
          </Link>
        </div>
        {open && (
          <div className={styles.heading}>
            <p>THE</p>
            <h1>GENERAL</h1>
          </div>
        )}
      </motion.div>
    </>
  );
}
