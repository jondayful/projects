function determine() {
  let number = document.getElementById("number").value;
  number = parseInt(number);

  let es5Result = numberDeterminerES5(number);
  let es6Result = numberDeterminerES6(number);

  document.getElementById("es5").innerText = es5Result;
  document.getElementById("es6").innerText = es6Result;
}

function numberDeterminerES5(number) {
  let result = "";
  if (number > 0) {
    result += "The Number is positive and ";
  } else if (number < 0) {
    result += "The Number is negative and ";
  } else {
    result += "The Number is zero and ";
  }

  if (number % 2 === 0) {
    result += "even";
  } else {
    result += "odd";
  }

  return result;
}

const numberDeterminerES6 = (number) => {
  let result = "";
  if (number > 0) {
    result += "The Number is positive and ";
  } else if (number < 0) {
    result += "The Number is negative and ";
  } else {
    result += "The Number is zero and ";
  }

  if (number % 2 === 0) {
    result += "even";
  } else {
    result += "odd";
  }

  return result;
};

//Part 2
const tipCalculator = (sum, percentage, currency, prefix) => {
  let tip = sum * (percentage / 100);
  let total = sum + tip;

  if (prefix === "prefix") {
    console.log(`
        Sum before tip: ${sum.toFixed(2)} ${currency}
        Tip percentage: ${percentage}%
        Tip:            ${tip.toFixed(2)} ${currency}
        Total:          ${currency} ${total.toFixed(2)}
      `);
  } else {
    console.log("Invalid prefix. Please use 'prefix''.");
  }
};

// Example usage:
tipCalculator(20, 20, "$", "prefix");
tipCalculator(40, 20, "PHP", "prefix");
