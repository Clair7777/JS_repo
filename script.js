"use strict";

const btn = document.getElementById("btn");
const inputColor = document.getElementById("text");
const square = document.getElementById("square");
const span = document.getElementById("text-span");
const btnE = document.getElementById("e_btn");
const range = document.getElementById("range");
const circle = document.getElementById("circle");

btn.onclick = function () {
  square.style.backgroundColor = inputColor.value;
};

btnE.onclick = function () {
  btnE.style.display = "none";
};

range.oninput = function () {
  circle.style.height = `${range.value}%`;
  circle.style.width = `${range.value}%`;
};
