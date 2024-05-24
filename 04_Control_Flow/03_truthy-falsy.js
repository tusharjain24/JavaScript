const userEmail = "tusharjain@google.com";

if (userEmail) {
  //   console.log("Got user email");
} else {
  //   console.log("Don't have user Email");
}

/** Falsy-Values
 * false,
 * 0,
 * -0,
 * BigInt 0n,
 * "",
 * null,
 * NaN,
 * undefined
 */

/**Truthy Values
 * "0",
 * "false",
 *  " ",
 * [],
 *  {},
 * function(){},
 *
 */

// To check if an array is empty
const userArray = [];
if (userArray.length === 0) {
  //   console.log("User Array is empty");
}

// To check if an object is empty
const emptyObject = {};
if (Object.keys(emptyObject).length === 0) {
  //   console.log("Object is empty");
}

// Nullish Coalescing Operator (??) : null undefined
let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 15;
// console.log(val1);

// Ternary Operator (alternate to if-else)
// condition ? true : false;
const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("More than 80") : console.log("Less than 80");
