class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  //   createId() {
  //     return `${this.username}123`;
  //   }

  // There are times where we don't want to give access to every object that has been instantiated using this class therefore in that case use static keyword.
  static createId() {
    return `${this.username}123`;
  }
}

const tushar = new User("tushar");
// console.log(tushar.createId());
// console.log(tushar.createId()); // Will give error as we have used the static key word

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher("iphone", "iphone@apple.com");
iphone.logMe();
console.log(iphone.createId());

// static keyword does not allow child class to inherit methods that have been defined with static keyword in the parent class.
