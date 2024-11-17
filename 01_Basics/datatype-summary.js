/**Primitives Datatypes : total 7
 * i> String
 * ii> Boolean
 * iii> Number
 * iv> Undefined
 * v> Symbol
 * vi> Null
 * vii> Bigint
 */

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

/**Non-Primitive or Reference
 * Array
 * Objects
 * Function
 */

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "hitesh",
  age: 22,
};

const myFunction = function () {
  console.log("Hello world");
};

console.log(typeof anotherId);

/**Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/

/*
Dynamic and static typing are two different approaches to how variables are handled in programming languages:

Dynamically Typed Language:

In a dynamically typed language, variable types are determined at runtime.
This means that you don't have to explicitly declare the type of a variable before using it;
the type of a variable is determined based on the value assigned to it.

Examples of dynamically typed languages include Python, JavaScript, Ruby, and PHP.

Statically Typed Language:

In a statically typed language, variable types are determined at compile time.
This means that you must explicitly declare the type of each variable before using it, and 
the compiler checks that the type of each variable is consistent throughout the program.

Static typing helps catch type-related errors early in the development process, before the program is run, which can lead to more robust and efficient code.
Statically typed languages often require more verbose type annotations, which can make code slightly more complex but can also improve code readability and maintainability, especially in large projects.
Examples of statically typed languages include Java, C, C++, Swift, and TypeScript (a superset of JavaScript with optional static typing).
 */
//  Primitive Datatypes are stored in STACK in JS.
//  Non Primitive Datatypes are stored in HEAP in JS.
/**
 * let Str = "Tushar"
 * let Str2 = Str
    console.log(Str2)
 * Here Str2 has a copy of Str and any change made to Str2 will not affect Str
 *  Str2 = "jain"
 * console.log(Str)    
 * console.log(Str2)


 * let con = {
 *  email:"abc@gmail.com"
 *  name :"TJ"
 * }
 
 * let con2 = con
    console.log(con)  
    
    * console.log(con2)
    * console.log(con2)
    * then con and con2 both are pointing toward the same memory loaction in heap and therefore if any one value is changed using con or con 2 
    * then value is changed for both con and con2.
    */
