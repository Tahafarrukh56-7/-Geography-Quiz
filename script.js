const questions = [
    {
        question: "What is the largest continent in the world?",
        answers: ["Africa", "Asia", "Europe", "Australia"],
        correct: "Asia"
    },

    {
        question: "What is the largest ocean in the world?",
        answers: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
        correct: "Pacific Ocean"
    },

    {
        question: "What is the capital of Pakistan?",
        answers: ["Lahore", "Karachi", "Islamabad", "Peshawar"],
        correct: "Islamabad"
    },

    {
        question: "Which is the longest river in Pakistan?",
        answers: ["River Indus", "River Ravi", "River Chenab", "River Jhelum"],
        correct: "River Indus"
    },

    {
        question: "Which country is famous for the Great Wall?",
        answers: ["Japan", "China", "India", "South Korea"],
        correct: "China"
    },

    {
        question: "Which is the largest hot desert in the world?",
        answers: ["Thar Desert", "Gobi Desert", "Sahara Desert", "Arabian Desert"],
        correct: "Sahara Desert"
    },

    {
        question: "Which mountain is the highest in the world?",
        answers: ["K2", "Mount Everest", "Nanga Parbat", "Mount Fuji"],
        correct: "Mount Everest"
    },

    {
        question: "How many continents are there?",
        answers: ["5", "6", "7", "8"],
        correct: "7"
    },

    {
        question: "Which country has the largest land area?",
        answers: ["Canada", "China", "Russia", "United States"],
        correct: "Russia"
    },

    {
        question: "Which ocean lies between Africa, Asia and Australia?",
        answers: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
        correct: "Indian Ocean"
    }
];


let currentQuestion = 0;
let score = 0;


const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");

const questionNumber = document.getElementById("question-number");
const scoreElement = document.getElementById("score");

const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");

const finalScore = document.getElementById("final-score");
const message = document.getElementById("message");

const restartButton = document.getElementById("restart-btn");


function showQuestion() {

    const question = questions[currentQuestion];

    questionElement.textContent = question.question;

    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    scoreElement.textContent =
        `Score: ${score}`;

    answersElement.innerHTML = "";


    question.answers.forEach(answer => {

        const button = document.createElement("button");

        button.textContent = answer;

        button.classList.add("answer-btn");

        button.addEventListener("click", () => {
            checkAnswer(button, answer);
        });

        answersElement.appendChild(button);

    });


    nextButton.style.display = "none";
}


function checkAnswer(button, selectedAnswer) {

    const correctAnswer =
        questions[currentQuestion].correct;

    const allButtons =
        document.querySelectorAll(".answer-btn");


    allButtons.forEach(btn => {
        btn.disabled = true;
    });


    if (selectedAnswer === correctAnswer) {

        button.classList.add("correct");

        score++;

        scoreElement.textContent =
            `Score: ${score}`;

    } else {

        button.classList.add("wrong");


        allButtons.forEach(btn => {

            if (btn.textContent === correctAnswer) {

                btn.classList.add("correct");

            }

        });

    }


    nextButton.style.display = "block";
}


nextButton.addEventListener("click", () => {

    currentQuestion++;


    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        showResult();

    }

});


function showResult() {

    quizBox.classList.add("hidden");

    resultBox.classList.remove("hidden");


    finalScore.textContent =
        `Your Score: ${score} / ${questions.length}`;


    if (score === 10) {

        message.textContent =
            "🏆 Perfect! You are a Geography Expert!";

    } else if (score >= 7) {

        message.textContent =
            "🌟 Great job! You know Geography well!";

    } else if (score >= 5) {

        message.textContent =
            "👍 Good effort! Keep learning!";

    } else {

        message.textContent =
            "📚 Keep practicing. You can do better!";

    }

}


restartButton.addEventListener("click", () => {

    currentQuestion = 0;

    score = 0;

    resultBox.classList.add("hidden");

    quizBox.classList.remove("hidden");

    showQuestion();

});


showQuestion();