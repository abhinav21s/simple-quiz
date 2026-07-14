import questions from "./systems_programming_questions.js";

const shuffled = [...questions];

for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
}

const quiz = shuffled.slice(0, 10);

let current = 0;
let score = 0;

let timeLeft = 50;
let timer;

const timerText = document.getElementById("timer");

const question = document.getElementById("question");
const options = document.getElementById("options");
const next = document.getElementById("next");
const result = document.getElementById("result");

next.style.display = "none";

function startTimer() {

    clearInterval(timer);

    timeLeft = 50;
    timerText.innerHTML = `Time Left: ${timeLeft}s`;

    timer = setInterval(() => {

        timeLeft--;

        timerText.innerHTML = `Time Left: ${timeLeft}s`;

        if (timeLeft <= 0) {

            clearInterval(timer);

            const buttons = document.querySelectorAll(".option");

            buttons.forEach(btn => {

                btn.disabled = true;

                if (btn.innerHTML === quiz[current].answer) {
                    btn.classList.add("correct");
                }

            });

            next.style.display = "block";

        }

    }, 1000);

}

function loadQuestion() {

    question.innerHTML = `Q${current + 1}. ${quiz[current].question}`;

    options.innerHTML = "";

    next.style.display = "none";

    startTimer();

    quiz[current].options.forEach(option => {

        const btn = document.createElement("button");

        btn.className = "option";
        btn.innerHTML = option;

        btn.onclick = () => checkAnswer(btn, option);

        options.appendChild(btn);

    });

}

function checkAnswer(button, selected) {

    clearInterval(timer);

    const buttons = document.querySelectorAll(".option");

    buttons.forEach(btn => btn.disabled = true);

    if (selected === quiz[current].answer) {

        button.classList.add("correct");
        score++;

    } else {

        button.classList.add("wrong");

        buttons.forEach(btn => {

            if (btn.innerHTML === quiz[current].answer) {
                btn.classList.add("correct");
            }

        });

    }

    next.style.display = "block";

}

next.onclick = () => {

    current++;

    if (current < quiz.length) {

        loadQuestion();

    } else {

        clearInterval(timer);
        showScore();

    }

}

function showScore() {

    question.innerHTML = "Quiz Finished";

    options.innerHTML = "";

    next.style.display = "none";

    timerText.innerHTML = "";

    result.innerHTML = `You scored ${score} / ${quiz.length}`;

}

loadQuestion();