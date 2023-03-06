let input = document.querySelector(".inp-area"); //input class
let buttons = document.querySelectorAll(".btn"); // all buttons are selected

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.value == "=") {
      input.value = eval(input.value);
    } else if (button.value == "clear") {
      input.value = " ";
    } else if (button.value == "Del") {
      input.value = input.value.toString().slice(0, -1);
    } else if (button.value == "^2") {
      let currentValue = parseFloat(input.value);
      input.value = currentValue ** 2;
    } else if (button.value == "%") {
      let currentValue = parseFloat(input.value);
      input.value = currentValue / 100;
    } else if (button.value == "sqrt") {
      let currentValue = parseFloat(input.value);
      input.value = Math.sqrt(currentValue);
    } else {
      input.value += button.value;
    }
  });
});
