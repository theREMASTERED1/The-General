import { useState, useEffect } from "react";
import React from "react";
import styles from "./weather.module.css";
import Navbar from "../navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Weather() {
  const api = {
    key: "a841af18862204435bad2b5345bbfd26",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState([]);
  const [icon, SetIcon] = useState([]);

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        SetIcon(result.weather[0].icon);
        console.log(result);
      });
  };

  let iconUrl = `http://openweathermap.org/img/w/${icon}.png`;

  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.contain}>
        <div className={styles.background}>
          <div className={styles.x1}>
            <div className={styles.cloud}></div>
          </div>
          <div className={styles.x2}>
            <div className={styles.cloud}></div>
          </div>
          <div className={styles.x3}>
            <div className={styles.cloud}></div>
          </div>
          <div className={styles.x4}>
            <div className={styles.cloud}></div>
          </div>
          <div className={styles.x5}>
            <div className={styles.cloud}></div>
          </div>
        </div>
        <header className={styles.head}>
          <div className={styles.submit}>
            <input
              type="text"
              placeholder="Enter city/town..."
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={searchPressed}>
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          {typeof weather.main !== "undefined" ? (
            <div className={styles.list}>
              <p>{weather.name}</p>

              <p>{weather.main.temp}°C</p>

              <p>{weather.weather[0].main}</p>
              <p>({weather.weather[0].description})</p>
              <div className={styles.icon}>
                <img src={iconUrl} className={styles.image} alt="" />
              </div>
            </div>
          ) : (
            ""
          )}
        </header>
      </div>
    </div>
  );
}
