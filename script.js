'use strict';

// Убираем лишние пробелы + обрезаем строку до 30 символов

let string = "    Решение хард задачи 4 урока по обрезке строки    ";


const checkString = function (str) {
  if (typeof str !== 'string') {
    console.log('Переданное значение не является строкой');
  } else {
    str = str.trim();
    return str.slice(0, 30) + "...";
  }
};

console.log(checkString(string));