// let myName = "Tushar     "
// let mychannel = "chaiaurcode     "

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.tushar = function () {
  console.log(`Tushar is present in all objects`);
};

Array.prototype.heyTushar = function () {
  console.log(`Tushar says hello`);
};

// heroPower.tushar()
// myHeros.tushar()
// myHeros.heyTushar()
// heroPower.heyTushar()

// inheritance

const User = {
  name: "Tushar",
  email: "Tushar@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "LibbyDan     ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
"Tushar".trueLength();
"iceTea".trueLength();
