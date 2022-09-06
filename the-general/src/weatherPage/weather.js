import { useState, useEffect } from "react";
import React from "react";
import styles from "./weather.module.css";
import Navbar from "../navbar";

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
        <header className={styles.head}>
          <h1>Weather</h1>
          <div className={styles.submit}>
            <input
              type="text"
              placeholder="Enter city/town..."
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={searchPressed}>Search</button>
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
