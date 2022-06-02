'use strict';

// Вывести массив, перебрать его, вывести в консоль только те что начинаются на 2 или 4
let arr = ["258", "5698", "789", "456", "425", "963", "279"];

arr.forEach((item) => {
  if (item.startsWith('2') || item.startsWith('4')) {
    console.log(item);
  }
});


// Перебрать массив с помощью метода Filtr
let result = arr.filter(function (num) {
  if (num.startsWith('2') || num.startsWith('4')) {
    return true;
  } else {
    return false;
  }
});
console.log(result.sort());



// вывести все простые чиса от 1 до 100 в столбик
for (let i = 1; i <= 100; i++) {
  let isPrime = true;
  for (let j = 2; j < i; j++) { // проверить, делится ли число без остатка на j
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log("Делителями простого числа: " + i + " являются 1 и " + i);
  }
}