// Questions database
var database = [
    {
        question: "Who is the 45th president of the United States",
        option1: "Donald Trump",
        option2: "Barack Obama",
        option3: "Hillary Clinton",
        option4: "Bill CLinton",
        answer: "1"
    },
    {
        question: "What date did Adolf Hitler die?",
        option1: "29 April 1967",
        option2: "30 April 1945",
        option3: "30 March 2091",
        option4: "29 March 1967",
        answer: "2"
    },
    {
        question: "Where is the capital city of New Zealand?",
        option1: "China",
        option2: "Canbarra",
        option3: "Wellington",
        option4: "None of the above",
        answer: "3"
    },
    {
        question: "What videos are Pewdiepie mostly uploading right now?",
        option1: "Fortnite",
        option2: "Minecraft",
        option3: "Meme Review",
        option4: "LWIAY",
        answer: "2"
    },
    {
        question: "What is Ironman's name in the MCU?",
        option1: "John Cena",
        option2: "Peter Parker",
        option3: "Robert Downey Jr",
        option4: "Tony Stark",
        answer: "4"
    }
]

// HTML Elements
var scoreDiv = document.querySelector(".score")
var questionDiv = document.querySelector(".question")
var option1Div = document.querySelector(".option-1-content")
var option2Div = document.querySelector(".option-2-content")
var option3Div = document.querySelector(".option-3-content")
var option4Div = document.querySelector(".option-4-content")
var optionDivs = document.querySelectorAll(".option")

// Get random question from the database
var numberOfQuestions = database.length
function generateRandomQuestionNumber() {
    var questionNumber = Math.floor(Math.random() * numberOfQuestions)
    return questionNumber
}

// Display question and options
var score = 0
var answer

function displayQusetionAndOptions() {
    var questionNumber = generateRandomQuestionNumber()
    var currentQuestion = database[questionNumber]
    questionDiv.innerHTML = currentQuestion.question
    option1Div.innerHTML = currentQuestion.option1
    option2Div.innerHTML = currentQuestion.option2
    option3Div.innerHTML = currentQuestion.option3
    option4Div.innerHTML = currentQuestion.option4
    scoreDiv.innerHTML = `Score: ${score}`
    answer = currentQuestion.answer
    database.splice(questionNumber, 1)
    numberOfQuestions--
}

displayQusetionAndOptions()

// Listen for option click
for (var i = 0; i < optionDivs.length; i++) {
    optionDivs[i].addEventListener ("click", checkAnswer)
}

function checkAnswer(event) {
    if (event.target.dataset.value == answer) {
        score++
        scoreDiv.innerHTML = `Score: ${score}`
    }

    if (numberOfQuestions > 0) {
        displayQusetionAndOptions()
    }else {
        alert(`Your score is ${score}.`)
    }
 }