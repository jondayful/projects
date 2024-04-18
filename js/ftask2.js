//Part 1

function greetUser() {
  let color = prompt("Enter your favorite color: ");
  console.log("Welcome! Your favorite color is " + color + ".");
}

greetUser();

//Part 2

function calculateArea() {
  let width = prompt("Enter the width of the rectangle: ");
  let length = prompt("Enter the length of the rectangle: ");
  let area = length * width;
  console.log("The area of the rectangle is: " + area);
}

calculateArea();
