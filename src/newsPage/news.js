import React from "react";
import Navbar from "../navbar";
import styles from "./news.module.css";
import NewsData from "./newsData";

export default function News() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.news}>
          <Navbar />
          <NewsData />
        </div>
      </div>
    </>
  );
}
