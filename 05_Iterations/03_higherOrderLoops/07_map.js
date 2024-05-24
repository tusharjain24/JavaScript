const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumers.map((num) => num + 10);
// const newNums = myNumers.map( (num) => { return num + 10})

/** Doing the function of map using forEach loop
 
const newNums = [];
myNumers.forEach((nums) => {
  newNums.push(nums + 10);
});

 */

// Chaining of methods and higher order loops
const newNums = myNumers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);

console.log(newNums);

// map returns an array of elements
