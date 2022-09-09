import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./profilePage/profile";
import Navbar from "./navbar";
import Surprise from "./surprisePage/surprise";
import News from "./newsPage/news";
import Weather from "./weatherPage/weather";
import NewsData from "./newsPage/newsData";
import Game from "./gamePage/game";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/profilePage/profile" element={<Profile />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/surprisePage/surprise" element={<Surprise />} />
      <Route path="/newsPage/news" element={<News />} />
      <Route path="/weatherPage/weather" element={<Weather />} />
      <Route path="/newsPage/newsData" element={<NewsData />} />
      <Route path="/gamePage/game" element={<Game />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
