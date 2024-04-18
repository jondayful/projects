let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
let result = document.getElementById("result");

let add = document.getElementById("add");
let subtract = document.getElementById("subtract");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let clear = document.getElementById("clear");
let about = document.getElementById("about");

add.onclick = () => {
  let num1 = parseFloat(firstNumber.value);
  let num2 = parseFloat(secondNumber.value);
  result.value = parseFloat((num1 + num2).toFixed(2));
};

subtract.onclick = () => {
  let num1 = parseFloat(firstNumber.value);
  let num2 = parseFloat(secondNumber.value);
  result.value = parseFloat((num1 - num2).toFixed(2));
};

multiply.onclick = () => {
  let num1 = parseFloat(firstNumber.value);
  let num2 = parseFloat(secondNumber.value);
  result.value = parseFloat((num1 * num2).toFixed(2));
};

divide.onclick = () => {
  let num1 = parseFloat(firstNumber.value);
  let num2 = parseFloat(secondNumber.value);
  if (num2 === 0) {
    alert("Cannot divide by zero");
    return;
  }
  result.value = parseFloat((num1 / num2).toFixed(2));
};

clear.onclick = () => {
  firstNumber.value = "";
  secondNumber.value = "";
  result.value = "";
};

about.onclick = () => {
  alert("Work of Your Full Name");
};
