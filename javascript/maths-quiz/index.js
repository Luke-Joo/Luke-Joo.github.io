var paragraphElement = document.querySelector(".multiplication");
var paragraphAdditionElement = document.querySelector(".addition");

var firstAdditionNumber = Math.ceil(Math.random() * 9);
var secondAdditionNumber = Math.ceil(Math.random() * 9);

var firstMultiplicationNumber = Math.ceil(Math.random() * 9);
var secondMultiplicationNumber = Math.ceil(Math.random() * 9);

var additionQuestion = `${firstAdditionNumber} * ${secondAdditionNumber}`;

var multiplicationQuestion = `${firstMultiplicationNumber} * ${secondMultiplicationNumber}`;

console.log(multiplicationQuestion);

paragraphAdditionElement.innerHTML = additionQuestion;
paragraphElement.innerHTML = multiplicationQuestion;