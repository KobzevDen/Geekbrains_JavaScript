'use strict';

function start() {
    let num = Number(prompt("Введите число в диапазоне [0,999]"));
  
    if (isNaN(num) || !Number.isInteger(num) || num < 0 || num > 999) {
      console.log("Значение должно быть целым числом в диапазон [0,999]");
      return {};
    }
    let str = "00" + num;
    let arr = str.slice(-3).split("");
    return {
      units: arr[2],
      tens: arr[1],
      hundred: arr[0],
    };
  }