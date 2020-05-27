"use strict";

const rows = [8, 7, 6, 5, 4, 3, 2, 1];
const cols = ["A", "B", "C", "D", "E", "F", "G", "H"];
const color = ["white", "black"];

/**
 * Функция отрисовки полей шахматной доски
 */
function getFields() {
  let startColorRow = color[0];
  let fields = "";
  for (let i = 0; i < rows.length; i++) {
    fields += getTR(startColorRow, rows[i]);
    startColorRow = startColorRow == color[0] ? color[1] : color[0];
  }
  return `<table><tbody>${fields}</tbody></table>`;
}

/**
 * Функция отрисовки строк шахматной доски
 * @param {string} currColorRow Цвет с которого начинается строка 
 * @param {number} numRow  Номер строки
 */
function getTR(currColorRow, numRow) {
  let startColorCol = currColorRow;
  let row = "";
  for (let j = 0; j < cols.length; j++) {
    row += getTD(startColorCol, numRow, cols[j]);
    startColorCol = startColorCol == color[0] ? color[1] : color[0];
  }
  return `<tr>${row}</tr>`;
}

/**
 * Функция отрисовки ячеек строки шахматной доски
 * @param {string} currColor Цвет ячейки с которой начинается строка
 * @param {number} currRow Номер строки 
 * @param {string} currCol Буквенное представление ячейки
 */
function getTD(currColor, currRow, currCol) {
  return `<td data-row="${currRow}" data-col="${currCol}" class="${currColor}"></td>`;
}

/**
 * Функция отрисовки двух верстикальных разметок шахматной доски (числовая разметка)
 */
function getVerticalHead() {
  document.querySelectorAll("table tr").forEach((el) => {
      let rowNum = el.querySelector("td").getAttribute("data-row");
      el.insertAdjacentHTML("afterbegin",`<td class="headfiels">${rowNum}</td>`);
      el.insertAdjacentHTML("beforeend",`<td class="headfiels">${rowNum}</td>`);
      });
}

/**
 * Функция отрисовки двух горизонтальных разметок шахматной доски (буквенная разметка)
 */
function getHorizontalHead() {
    let el = document.querySelector('table tbody');
    let td = '<td></td>';
    let headStr = td;
    for (let i = 0; i < cols.length; i++) {
        headStr += `<td class="headfiels">${cols[i]}</td>`;
    }
    headStr += td;
    el.insertAdjacentHTML('afterbegin',headStr);
    el.insertAdjacentHTML('beforeend',headStr);
  }

/**
 * Инициализация шахматной доски
 */
function init() {
  document.body.innerHTML = getFields();
  getVerticalHead();
  getHorizontalHead();
}

init();
