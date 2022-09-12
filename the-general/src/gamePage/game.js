import { useForceUpdate } from "framer-motion";
import React, { useEffect } from "react";
import Navbar from "../navbar";
import styles from "./game.module.css";
import { useState } from "react";

const snakeBody = [{ x: 11, y: 11 }];
let newSeg = 0;
let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };
export default function Game() {
  const expand = 1;
  let food = randomFood();

  function draw() {
    snakeBody.forEach((segment) => {
      const gameBoard = document.getElementById("board");
      const snakeElement = document.createElement("div");
      let food = randomFood();
      const foodElement = document.createElement("div");
      foodElement.style.gridRowStart = food.y;
      foodElement.style.gridColumnStart = food.x;

      snakeElement.style.gridRowStart = segment.y;
      snakeElement.style.gridColumnStart = segment.x;
      foodElement.classList.add("food");
      foodElement.style.backgroundColor = "orange";
      foodElement.style.border = "1px solid black";

      snakeElement.style.backgroundColor = "blue";
      snakeElement.style.border = "1px solid black";
      snakeElement.classList.add("snake");

      gameBoard.appendChild(foodElement);
      gameBoard.appendChild(snakeElement);
    });
  }
  function randomGrid() {
    return {
      x: 1,
      y: 0,
    };
  }

  let lastRender = 0;

  const SnakeSpeed = 3;

  function main(currentTime) {
    const gameBoard = document.getElementById("board");
    window.requestAnimationFrame(main);
    const SecondsSince = (currentTime - lastRender) / 1000;
    if (SecondsSince < 1 / SnakeSpeed) return;
    lastRender = currentTime;
    update();
    draw((gameBoard.innerHTML = ""));
  }
  function randomFood() {
    let newFood;
    while (newFood == null || onSnake(newFood)) {
      newFood = randomGrid();
    }
  }

  function expandSnake(amount) {
    newSeg += amount;
  }

  function update() {
    addSeg();
    if (onSnake(food)) {
      expandSnake(expand);
      food = { x: 20, y: 10 };
    }

    const inputDirection = getDirection();
    for (let i = snakeBody.length - 2; i >= 0; i--) {
      snakeBody[i + 1] = { ...snakeBody[i] };
    }
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
  }
  function onSnake(position) {
    return snakeBody.some((segment) => {
      return equalPosition(segment, position);
      function equalPosition(pos1, pos2) {
        return pos1.x === pos2.x && pos1.y === pos2.y;
      }
    });
  }

  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        if (lastInputDirection.y !== 0) break;
        inputDirection = { x: 0, y: -1 };
        break;
      case "ArrowDown":
        if (lastInputDirection.y !== 0) break;
        inputDirection = { x: 0, y: 1 };
        break;
      case "ArrowLeft":
        if (lastInputDirection.x !== 0) break;
        inputDirection = { x: -1, y: 0 };
        break;
      case "ArrowRight":
        if (lastInputDirection.x !== 0) break;
        inputDirection = { x: 1, y: 0 };
        break;
      default:
        inputDirection = { x: 0, y: 0 };
        break;
    }
  });
  function getDirection() {
    lastInputDirection = inputDirection;
    return inputDirection;
  }
  function addSeg() {
    for (let i = 0; i < newSeg; i++) {
      snakeBody[snakeBody.length] = { ...snakeBody[snakeBody.length - 1] };
    }
    newSeg = 0;
  }

  window.requestAnimationFrame(main);

  return (
    <>
      <div className={styles.mainBox}>
        <Navbar />
        <div className={styles.gameBox}>
          <div className={styles.board} id="board"></div>
        </div>
      </div>
    </>
  );
}
