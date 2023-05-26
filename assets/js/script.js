
//user is presented with main page "coding quiz challenge" and list of instructions
//user will click start button to start quiz(event listener)
// timer will start when start button is pressed
// also first question will present once start button is pressed
//user is presented with question and four possible answers.
// once user answers question they are presented with new question
// guest sees "correct!" for right answers
//when user answers incorrectly time is subtracted from the clock and user sees "wrong!""
//if all questions are answered if the timer reaches 0 game ends
//when game is over user can save initials and their score
//keylistener events, timer, score
//need function to get score total
//user can clear high scores or go back
//user can view high scores (saved in local storage)



var questionContainer = document.querySelector(".container");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var questionCount = document.querySelector(".number-of-question");
var userScore = document.getElementById("user-score");
var questions =document.querySelector(".questions");
var questionCount;
var scoreCount = 0;
var timer;
var timerCount;

startButton.addEventListener("click", startQuiz); 

// The startGame function is called when the start button is clicked
function startQuiz() {
  timerCount = 45;

  

var questionsArray = [ 
  {
    id:"0",
    question: "What does CSS stand for?",
    options: ["Computer System System", "Cheese Spicy Sandwhich", "Class Structure Sheet"],
    answer: "Class Style Sheet",
  },
  {
    id:"1",
    question: "What does HTML stand for?",
    opitons: ["High Tech Markup Language", "HyperText Machine Language", "Hero Tech Machine Language"],
    answer: "Hypertext Markup Language",
  },
  {
    id:"2",
    question: "What sybmol is associated with a ID element in HTML?",
    opitons: ["?","$","!"],
    answer: "#",

  },
  {
    id:"3",
    question: "What data type is associated with checking for True or False?",
    options: ["String", "Number","alerts"],
    answer: "Boolean",
  },
  {
    id:"4",
    question: "What does A.P.I. stand for?",
    options: ["Application Partner Interface", "All Program Internet", "Algorithm Program Information"],
    answer: "Application Programming Interface",
  },
  ]
}
 
var questionsArray = JSON.stringify(obj);
document.write(questionsArray);

/*
  every question will be a:
  {
    question: "What does CSS stand for?";
    option1: "opiton here";
    option2:"another example here";
    option3:"this one too";
    correctanswer: "this is right answer";
  }
  
  all questions will be stored in an array, which will look like this:
  [Q1, Q2, Q3, ...]
  
  When printing the question to the HTML page, I will need to:
  add Q.question to the page
  add Q.options1-3 to a new array [O1, O2, O3]
  add Q.answer to that same array [O1, O2, O3, A]
  randomize that array [O2, A, O1, O3]
  Write those answers to the page
  Make sure to add a listener that will properly detect answers
  */
 
 
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
          clearInterval(timer);
        }
      
      
    
    )}, 1000;

startQuiz();

//Used code from previous word guessing game challenge from class to start. 
// Was not able to complete full project submitting what I have. 

