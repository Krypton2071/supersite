// `use strict`;

// Main Function to check if a number is Even or Odd
function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
document.querySelector(".check-button").addEventListener("click", checkNumber);
//  Function to handle button click and display result
function checkNumber() {
  const input = document.getElementById("numberInput");
  const resultDiv = document.getElementById("result");
  const value = input.value;

  // Check if input is empty
  if (value === "") {
    resultDiv.className = "result error";
    resultDiv.textContent = "Please enter a number!";
    return;
  }

  // Convert to Number
  const number = parseFloat(value);

  // Check if it's a valid number
  if (isNaN(number)) {
    resultDiv.className = "result error";
    resultDiv.textContent = "Invalid input! Please enter a valid number!";
    return;
  }

  // Check if it's an integer
  if (!Number.isInteger(number)) {
    resultDiv.className = "result error";
    resultDiv.textContent = " Please enter a whole number!";
    return;
  }

  // Call the function and get result
  const result = checkEvenOrOdd(number);

  // Display result
  if (result === "Even") {
    resultDiv.className = "result even";
    resultDiv.textContent = `${number} is ${result}! ✔`;
  } else {
    resultDiv.className = "result odd";
    resultDiv.textContent = `${number} is ${result}! ✔`;
  }
}

// allow Enter key to trigger check
document
  .getElementById("numberInput")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      checkNumber();
    }
  });
