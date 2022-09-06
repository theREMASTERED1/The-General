import React from "react";
import Navbar from "../navbar";
import styles from "./news.module.css";
import NewsData from "./newsData";

export default function News() {
  return (
    <>
      <div className={styles.container}>
        <Navbar />
        <div className={styles.news}>
          <NewsData />
        </div>
      </div>
    </>
  );
}
