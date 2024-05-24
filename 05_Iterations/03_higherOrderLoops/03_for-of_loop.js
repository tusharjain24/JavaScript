// ["", "", ""]    //Array of string
// [({}, {}, {})]; //Array of Objects

const arr = [1, 2, 3, 4, 5];

// for of
for (const num of arr) {
  //   console.log(num);
}

const greetings = "Hello World !!";
for (const character of greetings) {
  //   console.log(`Each char is ${character}`);
}

//Maps
// All values in map are unique and does not contain duplicate values.
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

// console.log(map);

for (const [key, value] of map) {
  //   console.log(key, ": -", value);
}

const object1 = {
  game1: "NFS",
  game2: "Counter Strike",
};

// Below for-of loop won't work
/*
    for (const [key, value] of object1) {
    console.log(key, ": -", value);
}
*/

// Therefore objects are not iterable using for-of loop in javaScript
