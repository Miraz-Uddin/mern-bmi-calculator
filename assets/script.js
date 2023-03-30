(() => {
  // BMI function
  function bmiCalculate(weight, height) {
    // Formula
    // BMI CALCULATION
    // BMI = weight(kg) / (height(m) * height(m))
    return weight / (height * height);
  }
  // getting input
  function getInput() {
    let weight = null;
    let height = null;
    const weightInput = document.querySelector("#weightInput");
    const heightInput = document.querySelector("#heightInput");
    if (weightInput.value && heightInput.value) {
      weight = parseFloat(weightInput.value);
      height = parseFloat(heightInput.value);
    }
    return {
      weight,
      height,
    };
  }

  // getting DOM Elements
  const resultUI = document.querySelector("#result");
  const calculateBtn = document.querySelector("#calculateBtn");

  // listening to the Click Event
  calculateBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const { weight, height } = getInput() || {};
    let result = "Please Give Proper Values to get the Correct Output";
    if (weight && height) {
      const output = bmiCalculate(weight, height);
      const isApproximate = output.toFixed(2) == output;
      result = `BMI (Body Mass Index) is ${
        !isApproximate ? "Approximately" : ""
      } ${output.toFixed(2)} kg/m<sup>2</sup>`;
    }
    resultUI.innerHTML = result;
  });
})();
