const myNums = [1, 2, 3];

/** how reducer actually looks
 
const myTotal = myNums.reduce(function (acc, currval) {
//   console.log(`acc: ${acc} and currval: ${currval}`);
  return acc + currval;
}, 0);

 */

// const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);

// console.log(myTotal);

const shoppingCart = [
  {
    courseName: "js course",
    price: 2999,
  },
  {
    courseName: "python course",
    price: 999,
  },
  {
    courseName: "flutter course",
    price: 5999,
  },
  {
    courseName: "Data Scientist course",
    price: 12999,
  },
];

const cartPrice = shoppingCart.reduce((acc, course) => acc + course.price, 0);
console.log(cartPrice);
