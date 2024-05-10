// IIFE : Immediately Invoked Function Execution
// To remove globle scope pollution we use IIFE

// Named IIFE
(function one() {
  console.log("This is an IIFE!");
})();

(() => {
  console.log("Connected to DB");
})();

// IIFE doesn't know where to stop context so if we don't use semicolons it will give error

((name) => {
  console.log(`Connected to DB ${name}`);
})("Tushar");
