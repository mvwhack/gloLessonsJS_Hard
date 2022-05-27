let num = 266219;

const arr = num.toString().split('').map(string => +string);
const result = arr.reduce(function (a, b) {
  return a + b;
});


const degree = result ** 3;
console.log(degree.toString().slice(0, 2));