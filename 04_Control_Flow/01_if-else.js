// if
// <, >, ==, <=, >=, !=, ===, !==

// const temperature = 41;
// if (temperature === 40) {
//   console.log(`Temperature is ${temperature} which is less than 50`);
// } else {
//   console.log("Temperature is NOT 40 celsius");
// }
// console.log("Executed");

// const score = 200;
// if (score > 100) {
//   const power = "Fly";
//   console.log(`User Power:${power}`);
// }
// console.log(`User Power:${power}`); //Will throw an error because scope of power ended within if statement

const balance = 1000;
// Should not be written this way
// if (balance > 500) console.log("Test1"), console.log("Test2");

// if (balance < 500) {
//   console.log("Balance is less than 500");
// } else if (balance < 900) {
//   console.log("Balance is less than 900");
// } else {
//   console.log("Balance is less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// if (userLoggedIn && debitCard) {
//   console.log("User allowed to shop and buy products");
// }
// if (loggedInFromGoogle || loggedInFromEmail) {
//   console.log("User Logged in");
// }
