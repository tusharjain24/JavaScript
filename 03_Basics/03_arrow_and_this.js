// 'this' keyword is used to refer to current context and it is not used in arrow functions
// console.log(this); // will return Empty

const user = {
  username: "Tushar",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// function chai() {
//   let username = "Tushar";
//   console.log(this);
// }

// function chai() {
//   let username = "Tushar";
//   console.log(this.username); //Will return undefined
// }

// chai();

const chai = () => {
  let username = "Tushar";
  console.log(this);
};

// chai();

// NORMAL ARROW function (Explicit Return)
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// When we use {} we have to use return keyword otherwise we can use impliccit return
// IMPLICIT RETURN
// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({ username: "Tushar" });

// console.log(addTwo(3, 4));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
