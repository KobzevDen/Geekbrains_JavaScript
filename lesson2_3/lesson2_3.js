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
 * Функция принимает два числа и в зввисимости от условий возвращает значения
 * @param {number} a первый числовой параметр
 * @param {number} b второй числовой параметр
 * @returns {number} 
 */
function func (a,b) {
    if (is_Number(a) && is_Number(b)) {
        if (a >= 0 && b >= 0) {
            return (a - b);
        } else if (a < 0 && b < 0) {
            return a * b;
        } else if ((Math.sign(a) != Math.sign(b)) && a != 0 && b != 0) {
            return a + b;
        } else {
            return 0;
        }
    } else {
        return 0;
    }
}

let a1 = 13;
let b1 = 7;
console.log(func(a1,b1));