/*
var --> Global Scope
let --> Block Scope
const --> Block Scope
*/

// {}   define a scope of a function or class

//var c = 300
let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

// <----------------------------------------- LECTURE:22 ------------------------------------------------>

// Closure: In Nested Functions child function can access parent function's variables(Lexical Scope) but parent function cannot access child function's variables.
function one() {
  const username = "Tushar";

  function two() {
    const website = "Github";
    console.log(username);
  }
  //   console.log(website);
  two();
}

// one();

if (true) {
  const username = "Tushar";
  if (username === "Tushar") {
    const website = " Github";
    // console.log(username + website);
  }
  // console.log(website); // Will throw an error
}
// console.log(username); // Will throw an error

// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5));

function addone(num) {
  return num + 1;
}

// console.log(addTwo(5)); //Will throw an error because addTwo has not been defined yet due to hoisting
const addTwo = function (num) {
  return num + 2;
};
