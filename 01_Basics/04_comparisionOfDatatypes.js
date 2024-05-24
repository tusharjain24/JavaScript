// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0); //ans = false
console.log(null == 0); //ans = false
console.log(null === 0); //ans = false
console.log(null >= 0); //ans = true

/* the reason is that equlity check works differently than comparison operators such as " >, <, >=, <="
    here the comparision operators convert null into a number which is '0' and the compares them
*/

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

/* === checks both the value and it's Datatype */
