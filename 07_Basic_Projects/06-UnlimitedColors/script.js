// Generate Random Hex Values
function hexColor() {
  const hexValues = "123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * 16);
    color += hexValues[randomNumber];
  }
  return color;
}

// Generate Random RGB values
function RGBcolor() {
  randomNumber_1 = Math.floor(Math.random() * 256);
  randomNumber_2 = Math.floor(Math.random() * 256);
  randomNumber_3 = Math.floor(Math.random() * 256);
  return `rgb(${randomNumber_1}, ${randomNumber_2}, ${randomNumber_3})`;
}

const start = document.getElementById("start");

function startChangingColor() {
  document.body.style.backgroundColor = hexColor();
}
let toStop;

// const startChangingColor = () => {
//   toStop = setInterval(changeBgColor, 1000);

//   function changeBgColor() {
//     document.body.style.backgroundColor = hexColor();
//   }
// };

start.addEventListener("click", () => {
  console.log("starting to change background color");
  //   startChangingColor();
  if (!toStop) {
    toStop = setInterval(startChangingColor, 500);
  }
  //   start.setAttribute("disabled", "true");
  //   stop.removeAttribute("disabled");
});

const stop = document.querySelector("#stop");
stop.addEventListener("click", () => {
  console.log("Stop changing background color");
  clearInterval(toStop);
  //   stop.setAttribute("disabled", "true");
  //   start.removeAttribute("disabled");
  toStop = null;
});
