// IN ES6

// class user {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encryptPassword() {
//     this.password = `${this.password}abc`;
//     return this.password;
//   }

//   changeUsername() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const userOne = new user("tusharjain", "tushar@google", "password");
// console.log(userOne);
// console.log(userOne.encryptPassword());
// console.log(userOne.changeUsername());
// console.log(userOne);

// Behind the Scene
function user(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

user.prototype.encryptPassword = function () {
  this.password = `${this.password}abc`;
  return this.password;
};

user.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const userOneBehindTheScene = new user(
  "tusharjain",
  "tushar@google",
  "password"
);

// console.log(userOneBehindTheScene);
console.log(userOneBehindTheScene.encryptPassword());
console.log(userOneBehindTheScene.changeUsername());
console.log(userOneBehindTheScene);
