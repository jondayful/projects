function changeStylesheet(stylesheetName) {
  const stylesheetLink = document.getElementById("myStylesheet");

  if (stylesheetName === "stylesheet1") {
    stylesheetLink.href = "./css/stylesheet1.css";
  } else if (stylesheetName === "stylesheet2") {
    stylesheetLink.href = "./css/stylesheet2.css";
  } else if (stylesheetName === "stylesheet3") {
    stylesheetLink.href = "./css/stylesheet3.css";
  } else if (stylesheetName === "stylesheet4") {
    stylesheetLink.href = "./css/stylesheet4.css";
  }
}

function removeStylesheet() {
  const stylesheetLink = document.getElementById("myStylesheet");
  stylesheetLink.href = "";
}
