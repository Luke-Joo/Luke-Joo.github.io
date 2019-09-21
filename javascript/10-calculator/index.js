var firstNumber = Number(prompt("Type  your first number: "));
var operation = prompt("Type the operation");
var secondNumber = Number(prompt("Type .your second number: "));

if (operation == "+") {
    alert(firstNumber + secondNumber)
} else if (operation == "-") {
    alert(firstNumber - secondNumber)
} else if (operation == "*") {
    alert(firstNumber * secondNumber)
} else if (operation == "/") {
    alert(firstNumber / secondNumber)
} else {
    alert("Enter a valid operator")
}