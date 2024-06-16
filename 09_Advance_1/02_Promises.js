/* 
The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.


A Promise is in one of these states:

i> pending: initial state, neither fulfilled nor rejected.
ii> fulfilled: meaning that the operation was completed successfully.
iii> rejected: meaning that the operation failed.


Before Promises were came along with JavaScript in ES6, we used libraries like Bluebird and Q to use promises, fetch, async await.
*/

const promise1 = new Promise(function (resolve, reject) {
  // Promises are used to,
  // do an async task, DB calls, Network calls, Cryptography
  setTimeout(function () {
    console.log("Async Task 1 completed");
    resolve(); // If we don't call resolve() function .then will not execute
  }, 1000);
});
promise1.then(function () {
  console.log("Async 1 resolved");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2 completed");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async task 2 resolved");
});

const promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    const user = {
      username: "tusharjain2000",
      email: "tushar@google.com",
      password: "qwertyuiop",
    };
    resolve(user);
  }, 1000);
}).then(function (user) {
  //   console.log(user);
});

const promise4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // let error = true; // To run catch block of code
    let error = false; // To run then block of code
    if (!error) {
      resolve({ username: "tusharjain2000", email: "tushar@google.com" });
    } else {
      reject("ERROR: SOMETHING WENT WRONG");
    }
  });
});

promise4
  .then(function (user) {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    // This is known as Chaining
    console.log("username: ", username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("FINALLY THE PROMISE IS EITHER RESOLVED OR REJECTED");
  });

const promise5 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    // let error = false;
    if (!error) {
      resolve({ username: "tusharjain2000", email: "tushar@google.com" });
    } else {
      reject("ERROR: SOMETHING WENT WRONG in PROMISE5");
    }
  }, 1000);
});

async function consumePromise5() {
  try {
    const response = await promise5;
    // console.log(response);
  } catch (error) {
    // console.log(error);
  }
}
consumePromise5();

async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);
    // console.log(response);
  } catch (error) {
    console.log("Error: ", error);
  }
}
getUsers();

fetch("https://api.github.com/users/tusharjain24")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
