'use strict';

/**
 * Функкция которая определяет является ли входной параметр числом
 * @param {*} val 
 * @returns {boolean} true/false - Это число/это не число
 */
function is_Number (val) {
    if (val != '' && isNaN(val) === false) {
        return true;
    } else {
        return false;
    }  
}

/**
 * Функция для сложения
 * @param {number} a Первый аргумент для сложения 
 * @param {number} b Второй аргумент для сложения
 * @returns {number} Результат сложения
 */
function sum (a, b) {
    if (is_Number(a) && is_Number(b)) {
        return (a + b);
    } else {
        return 0;
    }
}
/**
 * Функция для вычетания
 * @param {number} a Первый аргумент для вычетания 
 * @param {number} b Второй аргумент для вычетания
 * @returns {number} Результат вычетания
 */
function diff (a, b) {
    if (is_Number(a) && is_Number(b)) {
        return (a - b);
    } else {
        return 0;
    }
}
/**
 * Функция для деления
 * @param {number} a Первый аргумент для деления 
 * @param {number} b Второй аргумент для деления
 * @returns {number} Результат деления
 */
function div (a, b) {
    if (is_Number(a) && is_Number(b)) {
        return (a / b);
    } else {
        return 0;
    }
}
/**
 * Функция для умножения
 * @param {number} a Первый аргумент для умножения 
 * @param {number} b Второй аргумент для умножения
 * @returns {number} Результат умножения
 */
function mult (a, b) {
    if (is_Number(a) && is_Number(b)) {
        return (a * b);
    } else {
        return 0;
    }
}