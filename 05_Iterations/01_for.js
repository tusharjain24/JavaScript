// for loop ---> Entry Controled Loop
let array = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
//   console.log(element);
// }

// if-else inside loop
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  if (element === 5) {
    // console.log("5 is awesome");
  }
  //   console.log(element);
}

// Loop inside loop
for (let i = 1; i <= 10; i++) {
  //   console.log(`Outer Loop:${i}`);
  for (let j = 1; j <= 20; j++) {
    // console.log(`Outer Loop value:${i} and Inner Loop: ${j}`);
    // console.log(`${i} * ${j} = ${i * j}`);
    // console.log(i + "*" + j + " = " + i * j);
  }
}

// break and continue
// for (let index = 0; index < array.length; index++) {
//   console.log(`Value of index ${index}`);
//   if (index == 5) {
//     console.log(`Detected 5`);
//     break;
//   }
// }

for (let index = 0; index < array.length; index++) {
  console.log(`Value of index ${index}`);
  if (index == 5) {
    console.log(`Detected 5`);
    continue;
  }
}
