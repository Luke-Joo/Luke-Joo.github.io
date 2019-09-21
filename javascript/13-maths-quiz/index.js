var additionQuestionHTML  = document.querySelector(".addition-question")
var additionAnswerHTML = document.querySelector(".addition-answer")
var multiplicationQuestionHTML  = document.querySelector(".multiplication-question")
var multiplicationAnswerHTML = document.querySelector(".multiplication-answer")

function generateRandomNumber() {
    var number = Math.floor(Math.random() * 10);
    return number
}

var additionAnswer
var multiplicationAnswer

function generateAdditionQuestion() {
    var number1 = generateRandomNumber()
    var number2 = generateRandomNumber()
    additionAnswer = number1 + number2
    additionQuestionHTML.innerHTML = `${number1} + ${number2}`
}

function generateMultiplicationQuestion() {
    var number1 = generateRandomNumber()
    var number2 = generateRandomNumber()
    multiplicationAnswer = number1 * number2
    multiplicationQuestionHTML.innerHTML = `${number1} × ${number2}`
}

generateAdditionQuestion()
generateMultiplicationQuestion()

additionAnswerHTML.addEventListener("keyup", handleAdditionAnswer)
multiplicationAnswerHTML.addEventListener("keyup", handleMultiplicationAnswer)

function handleAdditionAnswer() {
    if (event.key == "Enter") {
        if (additionAnswerHTML.value == additionAnswer) {
            additionAnswerHTML.style.backgroundColor = "green"
        } else {
            additionAnswerHTML.style.backgroundColor = "red"
        }
        setTimeout(() => {
            additionAnswerHTML.style.backgroundColor = "rgb(50, 50, 50"
            additionAnswerHTML.value = ""
            generateAdditionQuestion()
        }, 1500);
    }
}

function handleMultiplicationAnswer() {
    if (event.key == "Enter") {
        if (multiplicationAnswerHTML.value == multiplicationAnswer) {
            multiplicationAnswerHTML.style.backgroundColor = "green"
        } else {
            multiplicationAnswerHTML.style.backgroundColor = "red"
        }
        setTimeout(() => {
            multiplicationAnswerHTML.style.backgroundColor = "rgb(50, 50, 50"
            multiplicationAnswerHTML.value = ""
            generateMultiplicationQuestion()
        }, 1500);
    }
}