var divisionQuestionHTML = document.querySelector(".division-question")
var divisionAnswerHTML = document.querySelector(".division-question")

function generateRandomNumber() {
    var number = Math.floor(Math.random() * 100)
    return number
}

var divisionAnswer

function generateDivisionQuestion() {
    var num1 = generateRandomNumber()
    var num2 = generateRandomNumber()
    divisionAnswer = num1 / num2
}