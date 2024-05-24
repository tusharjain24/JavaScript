const parent = document.querySelector(".week");

// console.log(parent);
// console.log(parent.children); //Returns a HTMLCollection
// console.log(parent.children[1].innerHTML);

// for (let i = 0; i < parent.children.length; i++) {
//   console.log(parent.children[i].innerHTML);
// }

/*

* From parent to child

parent.children[1].style.color = "orange";
console.log(parent.firstElementChild);

console.log(parent.lastElementChild);

*/

const dayOne = document.querySelector(".days");

/**From child to parent

console.log(dayOne.parentElement);

* to sibling elements 

console.log(dayOne.nextElementSibling);

console.log(dayOne.previousElementSibling);

*/

console.log("Nodes:", parent.childNodes);
