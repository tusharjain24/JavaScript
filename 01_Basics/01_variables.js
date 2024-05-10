const accountId=123456;
let accountEmail="tushar@google.com";
var accountPassword="123456";
accountCity="Gandhinagar";//Should never be used
let accountState;

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
// accountId=123456 // Will throw an error because JS doesn't allow to edit const variables
// console.log(accountId);

accountEmail="tusharjain@google.com";
accountPassword="1234567";
accountCity="Ahmedabad";

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

/*

i> Prefer not to use var -->because of use in block scope and functional scope
ii> If the value of a variable(using let or var keyword) is not defined-->it is stored as "undefined"

*/