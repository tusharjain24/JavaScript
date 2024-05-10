const tinderUser = new Object(); //This is a singleton object
const tinderUser2 = {}; //This is not a singleton object

// console.log(tinderUser);
// console.log(tinderUser2);

tinderUser.email = "tusharjain@google.com";
tinderUser.name = "Tushar Jain";
tinderUser.age = 24;
tinderUser.city = "Gandhinagar";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "tusharjain@gmail.com",
  fullName: {
    userFullname: {
      firstName: "Tushar",
      lastName: "Jain",
    },
  },
};

// console.log(regularUser.fullName.userFullname.firstName);

const obj1 = {
  1: "a",
  2: "b",
};

const obj2 = {
  3: "c",
  4: "d",
};

const obj3 = {
  5: "a",
  6: "b",
};

// const obj3 = {obj1,obj2} //Object inside an object
// console.log(obj3);

//Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object
//Syntax = Object,assign(target, source1, source2, source3)
const obj4 = Object.assign({}, obj1, obj2, obj3);
// console.log(obj4);

const obj5 = { ...obj1, ...obj2, ...obj3 }; //Using Spread operator
// console.log(obj5);

// console.log("A", Object.keys(tinderUser));
// console.log("B", Object.values(tinderUser));
// console.log((Object.keys(tinderUser)).length);
// console.log("C", Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

// <-------------------------------------------------- Object Destructure ------------------------------------>

const course = {
  courseName: "JavaScript",
  platform: "Youtube",
  fee: 999,
  instructorName: "Hitesh Choudhary",
};

// console.log(course.instructorName);

const { instructorName: Instructor, courseName: CourseName } = course; //Destructuring of Object
console.log(Instructor, CourseName);

// API can come as JSON or Array of Objects
/* JSON Example
{
    courseName: "JavaScript",
    platform: "Youtube",
    fee: 999,
    instructorName:"Hitesh Choudhary"   
}
*/

/*Array of objects:
    [
        {},
        {},
        {}
    ]
*/
