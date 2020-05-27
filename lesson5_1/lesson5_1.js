"use strict";

let winOpen = document.querySelector(".wrap");
let btnOpen = document.querySelector("button");
let btnClose = document.querySelector("span");

//Открытие окна
btnOpen.addEventListener("click", () => {
  winOpen.classList.remove("hidden","animate__lightSpeedOutLeft");
  winOpen.classList.add("animate__animated", "animate__lightSpeedInLeft");
});
//Закрытие окна
btnClose.addEventListener("click", () => {
  winOpen.classList.remove("animate__lightSpeedInLeft");
  winOpen.classList.add("animate__lightSpeedOutLeft");
  setTimeout(() => winOpen.classList.add("hidden"),1000);
});
