// To iterate an object in JavaScript we use for-in loop

/*
*Syantax of for-in loop

for (const key in object) {
    
}

* for-in loop returns index values whereas for-of loop returns values on that index
*/

const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myObject) {
  // console.log(`${key} is shortform of ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
  // console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }

// Therefore for-in loop won't work on maps as they are not iterable
