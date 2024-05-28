// const clock = document.querySelector("#clock");
const clock = document.getElementById("clock");

// console.log(localTime.toLocaleTimeString());

setInterval(function () {
  const localTime = new Date();
  clock.innerHTML = `<span>${localTime.toLocaleTimeString()}</span>`;
}, 1000);
