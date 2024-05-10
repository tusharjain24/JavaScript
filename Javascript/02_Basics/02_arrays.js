const marvelHeros = ["Ironman", "Hulk", "Thor"]
const dcHeros = ["Superman", "Batman", "Flash"]
// marvelHeros.push(dcHeros)

// console.log(marvelHeros);// Add the array dcHeros in the array marvelHeros
// console.log(marvelHeros[3][0]);// To access an element from the dcHeros array inside the marvelHeros

const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros);
//Push works on the same array whereas concat return another array

//Spread Operator => for example take a glass and drop it, the glass will spread
// Spread operator also does the same thing as concat but we can combine more the 2 arrays using spread operator
const newAllHeros = [...marvelHeros, ...dcHeros]
// console.log(newAllHeros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10, [11,12]]]
// console.log(anotherArray);
// console.log(anotherArray.flat(1)); //Flat returns the array where all sub-arrays are concatenated 
// console.log(anotherArray.flat(Infinity));

let tempString = "Tushar"
// console.log(Array.isArray(tempString)); //Checks if the given string or variable is an array
// console.log(Array.from("Tushar")); // From creates an array from an iterable object

// Here it will always return an empty array if we don't specify key array or value array 
console.log(Array.from({name:"Tushar"}));

const obj = {
    name: "Tushar Jain",
    age: 24,
    Education: "Btech 3rd year"
}
let arr = Array.from(Object.keys(obj))
console.log(arr);