// Singleton

//Object Literals
const user = {
    name: "Tushar Jain",
    "full name":"Tushar Santosh Jain",
    age: 24,
    education: "Btech 3rd year",
    city: "Gandhinagar",
    isLoggedIn: false,
    lastLoggedDay:["Monday", "Tuesday"],
    email:"tusharjain@google.com"
}

// Different ways to access object's key
// console.log(user.email);
// console.log(user["email"]);
// console.log(user["full name"]);

// To use Symbol in object

const mySymbol = Symbol("@")
const anotherUser = {
    name: "Tushar Jain",
    "full name":"Tushar Santosh Jain",
    age: 24,
    [mySymbol]: "key1", //Symbol used as a key
    education: "Btech 3rd year",
    city: "Gandhinagar",
    isLoggedIn: false,
    lastLoggedDay:["Monday", "Tuesday"],
    email:"tusharjain@google.com"
}

// console.log(anotherUser[mySymbol]);
// console.log(typeof (anotherUser[mySymbol]));
// console.log(anotherUser);

user.email = "tusharjain@chatgpt.com"
// Object.freeze(user) //This will lock the object and we won't be able to change any value after this statement executes
user.email = "tusharjain@meta.com"

// console.log(user);

user.greeting = function () {
    console.log("Hello User");
}

// console.log(user.greeting); //Return the function and didn't execute the function
// console.log(user.greeting());

anotherUser.greeting = function () {
    console.log(`Hello User, ${this.name}`); //Use of BACKTICKS means string interpolation
}
console.log(anotherUser.greeting());