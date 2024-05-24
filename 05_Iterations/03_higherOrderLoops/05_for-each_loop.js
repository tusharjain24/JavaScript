const coding = ["js", "ruby", "java", "python", "cpp"];

/**
 *Syntax 
 
    array.forEach(element => {
        
    });
  
 */

/*
coding.forEach((lang) => {
  console.log(lang);
});
*/

/*
coding.forEach(function (lang) {
  console.log(lang);
});
*/

/*
function printMe(item) {
  console.log(item);
}

coding.forEach(printMe);

*/

/* Parameters you get inside for-each loop

coding.forEach((item, index, array) => {
  console.log(`item: ${item}, index: ${index}, from array: ${array}`);
});

*/

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach(({ languageName, languageFileName }) => {
  console.log(
    `Language Name: ${languageName}, \nFile Name: ${languageFileName}`
  );
});

// Therefore forEach loop does not return anything
// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values); // Will return undefined
