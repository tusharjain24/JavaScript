// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

//Important
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

const myNewObject = Object.create(null);
const chai = {
  name: "ginger tea",
  price: 250,
  isAvailable: true,
};

// console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
