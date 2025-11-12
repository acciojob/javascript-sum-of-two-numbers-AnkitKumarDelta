let input1 = prompt("Enter the first number:");
let input2 = prompt("Enter the second number:");

// Write your code here and print the output using alert function

if (
  input1 === "" ||
  input2 === "" ||
  isNaN(Number(input1)) ||
  isNaN(Number(input2))
) {
  alert("Invalid input. Please enter a valid number.");
} else {
  alert(
    `The sum of ${Number(input1)} and ${Number(input2)} is ${
      Number(input1) + Number(input2)
    }`
  );
}
