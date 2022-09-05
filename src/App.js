import logo from "./logo.svg";
import "./App.css";
import Navbar from "./navbar";
import Profile from "./profilePage/profile";

function App() {
  return (
    <div className="app">
      <Navbar className="nav" />
      <div className="content">
        <div className="mainPage">
          <div className="heading">
            <p>THE</p>
            <h1>GENERAL</h1>
          </div>
          <div className="vl"></div>
          <div className="mainText">
            <div className="textbox">
              Welcome,We hope you enjoy you visit and become a regular visitor
              <br />
              Here you can view the latest news reports,weather report and the
              whole shebang! use the navbar on the left to find you way around
            </div>
          </div>
        </div>
        <Profile className="profile" />
      </div>
    </div>
  );
}

export default App;
