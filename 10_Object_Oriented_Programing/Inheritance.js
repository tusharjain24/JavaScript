class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME: ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const teacher1 = new Teacher("teacherOne", "teacherOne@gmail.com", "abc");
const teacher2 = new Teacher("teacherTwo", "teacherTwo@gmail.com", "abc");
teacher1.addCourse();
teacher1.logMe();

const userOne = new User("user1");
userOne.logMe();

console.log("teacher1 === userOne: ", teacher1 === userOne);
console.log("teacher1 === teacher2: ", teacher1 === teacher2);
console.log("teacher1 instanceof Teacher: ", teacher1 instanceof Teacher);
console.log("teacher1 instanceof User: ", teacher1 instanceof User);

console.log("userOne instanceof User: ", userOne instanceof User);
console.log("userOne instanceof Teacher: ", userOne instanceof Teacher);
