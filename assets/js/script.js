// Arrays of the questions

const quiz = [{
        q: 'Which variable name in JS is the most correct ?',
        options: ['let Usersnames', 'let user-data', 'let personalData', 'let some_things'],
        answer: 2
    },
    {
        q: 'What is the result of the "typeof(NaN)" operation ?',
        options: ['NaN', '"string"', '"number"', '"object"'],
        answer: 2
    },
    {
        q: 'What is the result of the "typeof(+ "4")" operation ?',
        options: ['"number"', '"string"', 'Error', 'NaN'],
        answer: 0
    },
    {
        q: 'What can be inside an array as its elements ?',
        options: ['Only any primitive data types and objects', 'Objects and other arrays', 'Any entities and data types', 'Objects, arrays, numbers, strings and functions'],
        answer: 2
    },
    {
        q: 'How many arguments a function can have ?',
        options: ['As much as necessary', 'No more than 10', '256', 'Depends on the method of declaring the function: from 1 to 256'],
        answer: 0
    },
    {
        q: 'Why you need a version control system ?',
        options: ['To save project checkpoints', 'To organize teamwork on a project', 'To save a backup', 'All answers is correct'],
        answer: 3
    },
    {
        q: 'JavaScript - is...',
        options: ['Prototypically oriented programming language', 'Functional programming language', 'Procedural programming language', 'Logical programming language'],
        answer: 0
    },
    {
        q: '"switch" construction allows...',
        options: ['Use cycles more rationally', 'Create functions only on demand', 'Put a lot of checks and conditions in place', 'It is convenient to check numbers for more\less'],
        answer: 2
    },
];

// Parallax for logo "ask.Js"

let bg = document.querySelector('.parallax');
window.addEventListener('mousemove', function (e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';

});

// Loading animation for a loading qube.

document.onreadystatechange = function () {
    // Set timeout function for a 2 sec.
    setTimeout(function () {
        if (document.readyState !== "complete") {
            document.querySelector(
                "body").style.visibility = "hidden";
            document.querySelector(
                ".logo").style.visibility = "hidden";
            document.querySelector(
                "#loader-wrapper").style.visibility = "visibe";
        } else {
            document.querySelector(
                "#loader-wrapper").style.display = "none";
            document.querySelector(
                "body").style.visibility = "visible";
            document.querySelector(
                ".logo").style.visibility = "visible";
        }
    }, 2000);
};

// Variables

const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const answerIndicatorContainer = document.querySelector(".answers-indicator");
const homeBox = document.querySelector('.home-box');
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let avaliableOptions = [];
let correctAnswers = 0;
let attempt = 0;


/**
 * Push the questions into avaliableQuestions Array
 */
function setAvailableQuestions() {
    const totalQuestions = quiz.length;
    for (let i = 0; i < totalQuestions; i++) {
        availableQuestions.push(quiz[i]);
    }
}