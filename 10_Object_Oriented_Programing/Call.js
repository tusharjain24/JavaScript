function setUsername(username) {
  // Complex DB calls
  this.username = username;
  console.log("Called");
}

function createUser(username, email, password) {
  //   setUsername(username);
  setUsername.call(this, username);
  this.email = email;
  this.password = password;
}

const userOne = new createUser("TusharJain", "tushar@google.com", "123");
console.log(userOne);
