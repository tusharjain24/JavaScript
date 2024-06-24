// Object Literal

const user = {
  username: "tushar",
  loginCount: 8,
  signedIn: true,
  getUserDetails: function () {
    // console.log("Got user details from database");
    console.log(`username: ${this.username}`);
    // console.log(this);
  },
};
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this); // Will return empty here but in the browser it will return window object

// Constructor function
function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  this.greetings = () => {
    console.log(`Welcome${this.username}`);
  };
  return this;
}

// const userOne = User("Tushar", 12, true);
// const userTwo = User("Santosh", 12, true); // Will rewrite userOne
// console.log(userOne);

const userOne = new User("Tushar", 12, true);
const userTwo = new User("Jain", 13, false); // Will rewrite userOne
// console.log(userOne);
console.log(userOne.constructor);
// console.log(userTwo);

/*  Some Points about 'new' keyword
    1> Whenever we use new Keyword it creates an empty object which is known as new instance.
    2> Constructor function is called because of new keyword and packs all the arguments to it.
    3> In thrid step, all the arguments are injected into the this keyword.
*/

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car("Honda", "Accord", 1998);

console.log(auto instanceof Car);
// Expected output: true

console.log(auto instanceof Object);
// Expected output: true
