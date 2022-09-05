import React from "react";
import styles from "./profile.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function Profile(props) {
  const [disable, setDisable] = useState(true);
  // const [userData, setUserData] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  // });

  const handleSubmit = (event) => {
    console.log("form submitted ✅");
    event.preventDefault();
    // localStorage.setItem("username", username);
    // localStorage.setItem("password", password);
    // localStorage.setItem("email", emailInput);
    let name = document.getElementById("input1").value;
    let email = document.getElementById("input2").value;
    let password = document.getElementById("input3").value;
    let data = { name, email, password };
    if (disable) {
      setDisable(false);
      console.log("YES");
    }

    // setUserData({ ...userData, [event.target.name]: event.target.value });
    console.log(data);
  };

  return (
    <>
      <div className={styles.profile}>
        <div className={styles.contain}>
          <form className={styles.profileForm} onSubmit={handleSubmit}>
            <div className={styles.formTxt}>
              <div className={styles.formHead}>Profile</div>
              <div className={styles.formSub}>
                Here you can save your profile so we can send you daily emails
                to update you on everything you need to know
              </div>
            </div>
            <div className={styles.inputBox}>
              <div className={styles.title}>Name</div>
              <input
                placeholder="Enter your Name.."
                className={styles.input}
                type="text"
                required
                minLength={1}
                id="input1"
              ></input>
              <div className={styles.title}>Email</div>
              <input
                placeholder="Enter your email address.."
                className={styles.input}
                type="email"
                alert={"no this is wrong"}
                required
                minLength={1}
                id="input2"
              ></input>
              <div className={styles.title}>Password</div>
              <input
                placeholder="Enter a safe password"
                className={styles.msgInput}
                type="password"
                required
                minLength={1}
                id="input3"
              ></input>
              <div className={styles.submit} id="submit1">
                {disable ? (
                  <button className={styles.SubButton} type="submit">
                    submit
                  </button>
                ) : null}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
