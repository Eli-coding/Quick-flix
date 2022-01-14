var startButton = document.getElementById("button")
var quizArea = document.getElementById("quizArea")
var questionTitle = document.getElementById("questionTitle")
var answer1 = document.getElementById("answer1")
var answer2 = document.getElementById("answer2")
var answer3 = document.getElementById("answer3")
var answer4 = document.getElementById("answer4")
var answer5 = document.getElementById("answer5")

startButton.addEventListener("click", function () {
    startArea.classList.add("hide")
    quizArea.classList.remove("hide")
    startGame();
});

var questions = [
    {
        question: "What you in the mood for?",
        options: ["do you want to laugh?", "Are you feeling spooky?", "Are you looking for adventure?", "Are you feeling romantic?", "Are you with the family?"]
    },
    {
        question: "what color is the sky?",
        options: ["blue", "red"]

    },
]
function startGame() {
    questionTitle.textContent = questions[counter].question
    answer1.textContent = questions[counter].options[0]
    answer2.textContent = questions[counter].options[1]
    answer3.textContent = questions[counter].options[2]
    answer4.textContent = questions[counter].options[3]
    answer5.textContent = questions[counter].options[4]
}