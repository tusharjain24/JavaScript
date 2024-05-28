const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // We are using parseInt because the we get from .value is string and therefore we have to convert it.
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");
  if (height === "" || height <= 0 || isNaN(height)) {
    const span = document.createElement("span");
    const addText = document.createTextNode(
      `Please enter VALID height: ${height}`
    );
    span.appendChild(addText);
    result.appendChild(span);
  } else if (weight === "" || weight <= 0 || isNaN(weight)) {
    const span = document.createElement("span");
    const addText = document.createTextNode(
      `Please enter VALID weight: ${weight}`
    );
    span.appendChild(addText);
    result.appendChild(span);
  } else {
    const bmi = ((weight / Math.pow(height, 2)) * 10000).toFixed(2);
    if (bmi < 18.6) {
      result.innerHTML = `<span>BMI: ${bmi}</span><br><p style = "color: blue" >Under Weight</p>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      result.innerHTML = `<span>BMI: ${bmi}</span><br><p style = "color: green" >Normal Range</p>`;
    } else {
      result.innerHTML = `<span>BMI: ${bmi}</span><br><p style = "color: red" >Over Weight </p>`;
    }
  }
  const span = document.createElement("span");
});

// The above code can be done using innerHTML but it is not optimized
