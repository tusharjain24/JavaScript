const name = "Tushar";
const repoCount = "5";

// console.log(name + repoCount + "Value") outdated version to write code nowadays programmers use BACKTICKS

// console.log(`Hello My Name is ${name} and my RepoCount is ${repoCount}.`)

// Behind the scene of creating a string
// to see more console log in chrome
const gameName = new String("Tushar_Jain");

// console.log(gameName[0]);
console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase~());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf("J"));

const subString1 = gameName.substring(0, 4);
console.log(subString1);

//Slice extracts a substring from the given string
const subString2 = gameName.slice(4, 7);
console.log(subString2);
console.log("Splice:", gameName);
console.log("gameName: ", gameName);

const newStringOne = "   Tushar    ";
// console.log(newStringOne)

//trim removes the starting and ending spaces in the given string. We can also use trimStart() and trimEnd()
// console.log(newStringOne.trim());

const url = "https://Tushar%20Jain2000";
console.log(url);

console.log(url.replace("%20", "_"));
console.log(url.includes("%20"));
console.log(url.includes("RAM"));

console.log(gameName.split("_"));
