import React, { useState } from "react";
import styles from "./newsData.module.css";
let apiKey = "8e333552269e45ab9324f5ddb62f383d";

export default function NewsData() {
  const [topic, setTopic] = useState("");
  const [newsInput, setNews] = useState([]);

  const handleSubmit = () => {
    fetch(`https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`)
      .then((response) => response.json())
      .then((result) => {
        setNews((result = result.articles));
        console.log(result);
        // .then((data) => setNews({ articles: data.articles }));
      }, []);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.search} id="searchForm">
          <label>NEWS</label>
          <input
            className={styles.input1}
            id="input1"
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Search for news.."
          />
          <button className={styles.submit} onClick={handleSubmit}>
            search
          </button>
        </div>

        <div className={styles.cards}>
          {newsInput?.map((news) => (
            <div className={styles.newsCard} id="card" key={news.id}>
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
          ))}
        </div>
      </div>
    </>
  );
}
