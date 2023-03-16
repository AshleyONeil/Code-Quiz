var startbtn = document.getElementById("start-btn");
var quizEl = document.getElementById("quiz");
var score = 0
var scoreEl = document.getElementById("score");
var timerEl = document.getElementById("timer");
var time = 60;
var timeInterval;
var questions = [
    {
        question: "What is the capital of France?",
        answers: [
            "Paris",
            "Lyon",
            "Toulouse",],
        correctAnswer: "Toulouse"
    }, {
        question: "What is the capital of Spain?",
        answers: [
            "Madrid",
            "Barcelona",
            "Morrocco"],
        correctAnswer: "Madrid"
    },
    {
        question: "What is the capital of Germany?",
        answers: [
            "Berlin",
            "Hamberg",
            "Ggersthofen"],
        correctAnswer: "Berlin"
    },
    {
        question: "What is the capital of Italy?",
        answers: [
            "Venice",
            "Rome",
            "Milan"],
        correctAnswer: "Rome"
    }

]
var Q = 0
function askQuestion() {
    document.getElementById("button-container").innerHTML = "";
    var currentQuestion = questions[Q];
    var questionEl = document.getElementById("question");
    questionEl.innerText = currentQuestion.question;
    currentQuestion.answers.forEach(function (answer) {
        var button = document.createElement("button");
        button.innerText = answer;
        button.onclick = function () {
            console.log(this.innerText);
            if (this.innerText === currentQuestion.correctAnswer) {
                score++;
                scoreEl.innerText = score;

            }
            else {
                console.log("wrong");
            }
            Q++;
            if (Q < questions.length) {
                askQuestion();
            }
            else {
                quizEl.classList.add("hide");
                // scoreEl.innerText = score;
                document.getElementById("end").classList.remove("hide");
                document.getElementById("results").textContent = "You got " + score + " out of " + questions.length + " questions correct";
            clearInterval (timeInterval);
            }
        

        };
        document.getElementById("button-container").appendChild(button);
    })

}
function startGame() {
    timeInterval = setInterval(function () {
        if (time < 0) {
            time = 0;
            clearInterval(timeInterval);
            quizEl.classList.add("hide");
            scoreEl.innerText = score;
        }
        timerEl.innerText = --time;
    }, 1000);
    document.getElementById("start").classList.add("hide");
    quizEl.classList.remove("hide");
    askQuestion();
}

















startbtn.addEventListener("click", startGame);