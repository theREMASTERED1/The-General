import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar";
import styles from "./surprise.module.css";

export default function Surprise() {
  //   const [count, setCount] = useState(null);
  //   const prevCountRef = useRef();
  //   let currentCount = window.localStorage.getItem("prevCount");
  //   useEffect(() => {
  //     let currentCount = window.localStorage.getItem("prevCount");
  //     if (currentCount !== null) setCount(JSON.parse(currentCount));
  //     console.log(currentCount);
  //   }, []);

  //   useEffect(() => {
  //     window.localStorage.setItem("prevCount", JSON.stringify(count));
  //   }, [count]);
  var n = localStorage.getItem("on_load_counter");
  if (n === null) {
    n = 0;
  }
  useEffect(() => {
    n++;
    localStorage.setItem("on_load_counter", n);
    document.getElementById("counter").innerHTML = n.value;
  }, []);

  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.box}>
        <div className={styles.head}>Hello</div>
        <div>
          you opened this page
          <br />
          <p id="counter">0</p>
          <br />
          times,why?
        </div>
        <div>
          press this to go back
          <br />
          <br />
          {/* <Link to="/"> */}
          <button>home</button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}
