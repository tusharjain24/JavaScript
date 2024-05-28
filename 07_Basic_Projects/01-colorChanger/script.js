const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    switch (event.target.id) {
      case "grey":
        document.body.style.backgroundColor = event.target.id;
        break;
      case "white":
        document.body.style.backgroundColor = event.target.id;
        break;
      case "blue":
        document.body.style.backgroundColor = event.target.id;
        break;
      case "yellow":
        document.body.style.backgroundColor = event.target.id;
        break;
      case "purple":
        document.body.style.backgroundColor = event.target.id;
        break;
      case "black":
        document.body.style.backgroundColor = event.target.id;
        break;
      default:
        document.body.style.backgroundColor = "#212121";
    }
  });
});
