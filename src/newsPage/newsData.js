import React, { useState } from "react";
import styles from "./newsData.module.css";
let apiKey = "8e333552269e45ab9324f5ddb62f383d";

export default function NewsData() {
  const [topic, setTopic] = useState("");
  const [news, setNews] = useState({});

  const handleSubmit = () => {
    fetch(`https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        console.log({ data });
        // .then((data) => setNews({ articles: data.articles }));
      });
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.search} id="searchForm">
          <label>Search here</label>
          <input
            className={styles.input1}
            id="input1"
            onChange={(e) => setTopic(e.target.value)}
          />
          <button className={styles.submit} onClick={handleSubmit}>
            search
          </button>
        </div>

        <div className={styles.cards}>
          {typeof news.main !== "undefined" ? (
            <div className={styles.newsCard} id="card">
              <img src={news.urlToImage} className={styles.image} />
              <div className={styles.txt}>
                <div className={styles.head} style={{ textDecoration: "none" }}>
                  <a style={{ textDecoration: "none" }} href={news.url}>
                    {news.title}
                  </a>
                </div>
                <div className={styles.source}>{news.source.name}</div>
                <div className={styles.info}>{news.description}</div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
