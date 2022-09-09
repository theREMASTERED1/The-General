import { useForceUpdate } from "framer-motion";
import React from "react";
import Navbar from "../navbar";
import styles from "./game.module.css";
import { useState } from "react";

export default function Game() {
  const [child, setChild] = useState("");
  function draw() {
    snakeBody.forEach((segment) => {
      const snakeElement = document.createElement("div");
      snakeElement.style.gridRowStart = segment.x;
      snakeElement.style.gridColumnStart = segment.y;
      snakeElement.classList.add("snake");
      snakeElement.style.backgroundColor = "blue";
      snakeElement.style.border = "1px solid black";

      setChild(gameBoard.appendChild(snakeElement));
      console.log(gameBoard);
    });
  }

  let lastRender = 0;
  const gameBoard = document.getElementById("board");
  console.log(gameBoard, "1");
  const SnakeSpeed = 1;
  const snakeBody = [
    { x: 10, y: 11 },
    { x: 11, y: 11 },
    { x: 12, y: 11 },
  ];
  function main(currentTime) {
    window.requestAnimationFrame(main);
    const SecondsSince = (currentTime - lastRender) / 1000;
    if (SecondsSince < 1 / SnakeSpeed) return;
    lastRender = currentTime;
    update();
    draw();
  }
  function update() {
    for (let i = snakeBody.length - 2; i >= 0; i--) {
      snakeBody[i + 1] = { ...snakeBody[i] };
    }
    snakeBody[0].x += 1;
    snakeBody[0].y += 0;
  }

  window.requestAnimationFrame(main);

  return (
    <>
      <div className={styles.mainBox}>
        <Navbar />
        <div className={styles.gameBox}>
          <div className={styles.board} id="board">
            {child}
          </div>
        </div>
      </div>
    </>
  );
}
