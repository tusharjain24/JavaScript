// let score = "123"

// console.log(score);
// console.log(typeof(score));

// let valueOfScore = Number(score);
// console.log(valueOfScore);//123
// console.log(typeof(valueOfScore));//number

// let Name="Tushar"
// console.log(Name);//Tushar
// console.log(typeof(Name));//string

// let valueOfName = Number(Name);
// console.log(valueOfName);//Nan
// console.log(typeof(valueOfName));//number

/*
Notes:Conversion of datatypes into number

i> "33" =>33
ii> "Tushar" => Nan ==> The string will be converted to number (Nan) if we use the 'Number(variable_Name)'
iii> true = 1 ; false => 0
*/

// Note: Nan and NaN --> means "not a number"

let isLoggedIn = 1;
let Name = "Tushar";

console.table([isLoggedIn, Name]);
// console.table([typeof(isLoggedIn),typeof(Name)]);

let boolIsLoggedIn = Boolean(isLoggedIn);
let boolName = Boolean(Name);
// console.table([boolIsLoggedIn,boolName]);
// console.table([typeof(boolIsLoggedIn),typeof(boolName)]);

/* Notes: */
// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33;

let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello";
let str2 = " hitesh";

let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( 3 + 4 * 5 % 3);
// console.log("2" + 1);

// console.log(+true);
// console.log(+"");

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
++gameCounter;
// console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
