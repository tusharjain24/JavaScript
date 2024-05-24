// Switch
const month = 3;
switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("Februry");
    break;
  case 3:
    console.log("March");
    break;

  default:
    console.log("Not first 3 months");
    break;
}

const monthName = "February";
switch (monthName) {
  case "January":
    console.log("1");
    break;
  case "February":
    console.log("2");
    break;
  case "March":
    console.log("3");
    break;
  default:
    console.log("Not first 3 months");
    break;
}
// If we don't write break after each case, It will execute all the cases below the matched case except default
