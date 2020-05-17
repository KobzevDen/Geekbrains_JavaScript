'use strict';

function MessageRub () {
    let num = prompt("Введите число");
    if (num != '' && isNaN(num) === false && Number(num) > 0) {
        let lastnum = num.slice(-1);
        let arrRub = ["Рубль","Рубля","Рублей"];
        switch (lastnum) {
            case "1":
              return `Ваша сумма в ${num} ${arrRub[0]} успешно зачислена.`;
            case "2":
            case "3":
            case "4":
              return `Ваша сумма в ${num} ${arrRub[1]} успешно зачислена.`;
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case "0":
              return `Ваша сумма в ${num} ${arrRub[2]} успешно зачислена.`;
        }
    } else {
        return `Вы ввели неверное число`;
    }
 }