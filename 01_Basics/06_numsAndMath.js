const score = 400;
// console.log(score);

// Specially Defined balance with datatype Number
// to see more console log in chrome
const balance = new Number(5000);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 29.657485;
// console.log(otherNumber.toPrecision(4))

const anotherNumber = 1000000;
console.log(anotherNumber.toLocaleString("en-IN"));

let qq = "1a";

/*-------------------------------------------------Maths------------------------------------------------------------*/

// to see more console log in chrome
// console.log(Math)
// Math is an Object

// console.log(Math.abs(-4));
// console.log(Math.round(2.35));
// console.log(Math.ceil(2.35));
// console.log(Math.floor(2.35));

const arr = [3, 5, 8, 10];
console.log(Math.min(...arr));
console.log(Math.max(3, 5, 8, 10));

// Math.random() give value between 0 and 1
console.log(Math.random());
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
