// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

//Important
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

// const DD = Object.defineProperty(Math, "PI", {
//   configurable: true,
//   enumerable: true,
//   writable: true,
// });

// console.log(DD);

const myNewObject = Object.create(null);
const chai = {
  name: "ginger tea",
  price: 250,
  isAvailable: true,
  orderChai: function () {
    console.log(`This is a function to order chai`);
  },
};

// console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
  if (typeof value != "function") {
    // console.log(`${key}: ${value}`);
  }
}
