/*  *Date  */

let myDate = new Date();
//Date is an obeject in JS
// Month starts from 0 in Date in JS

// console.log(typeof(myDate));

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString("en-GB"));
// console.log(myDate.toISOString());
console.log(myDate.toJSON());

// let myCreatedDate = new Date(2023, 0, 14)
let myCreatedDate = new Date(2023, 0, 14, 5, 7); // yyyy-mm-dd-hh-mm-ss
// let myCreatedDate = new Date("01-14-2023")   //MM-DD-YYYY
// let myCreatedDate = new Date("2023-01-14")   //yyyy-mm-dd
// let myCreatedDate = new Date("14-01-2023") //Invalid date
// let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate.toLocaleString("en-GB"));

let myTimeStamp = Date.now();

// console.log(myTimeStamp);    //To convert date into milliseconds
// console.log(myCreatedDate.getTime());
// Note:Always compare Date in milli-seconds

// console.log(Math.floor(Date.now()/1000)); // To convert time into seconds and always use either Math.round() or Math.floor()

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth() + 1); //Month here starts with 0
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString("default", {
  weekday: "long",
  calendar: "indian",
  year: "numeric",
  month: "long",
  day: "numeric",
});
