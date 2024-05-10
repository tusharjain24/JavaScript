const array1 = [0, 1, 2, 3, 4, true, false, "MyFirstArray"];
const array2 = new Array(0, 1, 2, 3, 4, "Shaktiman");
// Inside the array the elements can be of different types
// Arrays are resizable

// console.log(array1); //To print the entire array
// console.log(array2); //To print the entire array
// console.log(array1[0]); // to print a single element of the array

//<----------------------------------------------- Array Methods ---------------------------------------------->

array2.push(9);
array2.push(70);
array2.pop();
array2.unshift(23); // To add an element at the starting of the array
array2.shift(); // Removes the first element of the array
// console.log(array2); //To print the entire array
// console.log(array2.length); //To print the entire array
// console.log(array2.includes(4));
// console.log(array2.includes("Spiderman"));
// console.log(array2.indexOf("Spiderman")); //SpiderMan is not in the array so it returns -1
// console.log(array2.indexOf("Shaktiman"));

const newArray = array2.join(); // It converts the array into string and binds the array
// console.log(array2);
// console.log(newArray);

//<-------------------------------------- Slice and Splice ---------------------------------------------------->

const myNewArray = array2.slice(1, 3);
console.log("A-Original Array", array2);
console.log("After slice", myNewArray);

const myNewArray2 = array2.splice(1, 3);
console.log("B-Original Array", array2);
console.log("Ater Splice", myNewArray2);

// In slice the mentioned range is copied where as splice removes the elements of the mentioned range from the array
