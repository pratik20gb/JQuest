const questions = [
  {
    question: "What does JS stand for?",
    options: ["JavaScript", "JavaStyle", "JustScript", "JumboScript"],
    answer: 0,
    explanation:
      "JS stands for JavaScript, a scripting language used to build dynamic websites.",
  },
  {
    question: "Which keyword declares a variable in JavaScript?",
    options: ["var", "let", "const", "All of the above"],
    answer: 3,
    explanation:
      "All of these are used to declare variables in JS with different scopes and mutability.",
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "/*", "#", "<!-- -->"],
    answer: 0,
    explanation: "// is used for single-line comments in JavaScript.",
  },
  {
    question: "What is the correct syntax to call a function?",
    options: [
      "call.myFunction()",
      "myFunction()",
      "function:myFunction()",
      "myFunction[]",
    ],
    answer: 1,
    explanation: "Functions are called with parentheses like myFunction().",
  },
  {
    question: "What is 'typeof null' in JavaScript?",
    options: ["object", "null", "undefined", "number"],
    answer: 0,
    explanation:
      "typeof null returns 'object' due to a historical bug in JavaScript.",
  },
  {
    question: "Which method converts JSON to a JavaScript object?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.object()",
      "parse.JSON()",
    ],
    answer: 0,
    explanation:
      "JSON.parse() is used to convert a JSON string into a JS object.",
  },
  {
    question: "What is NaN in JavaScript?",
    options: ["A string", "An error", "Not a Number", "A function"],
    answer: 2,
    explanation:
      "NaN stands for 'Not a Number' and represents a computational error.",
  },
  {
    question: "Which of the following is a JavaScript data type?",
    options: ["number", "string", "boolean", "All of the above"],
    answer: 3,
    explanation: "All are primitive data types in JavaScript.",
  },
  {
    question: "Which operator is used to assign a value?",
    options: ["=", "==", "===", ":"],
    answer: 0,
    explanation: "'=' is the assignment operator.",
  },
  {
    question: "How do you write an if statement in JavaScript?",
    options: ["if i = 5 then", "if i == 5", "if (i == 5)", "if i === 5:"],
    answer: 2,
    explanation: "Use if (condition) syntax in JavaScript.",
  },
  {
    question: "Which function is used to output to the console?",
    options: ["print()", "console.log()", "write()", "output()"],
    answer: 1,
    explanation: "console.log() is used for debugging output in JavaScript.",
  },
  {
    question: "Which method adds an item to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: 0,
    explanation: "push() adds an element to the end of the array.",
  },
  {
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Model",
      "Display Object Management",
      "Digital Output Mode",
    ],
    answer: 0,
    explanation:
      "DOM stands for Document Object Model and represents the structure of HTML documents.",
  },
  {
    question: "Which loop is best for iterating over arrays?",
    options: ["for", "while", "for...of", "do...while"],
    answer: 2,
    explanation: "for...of is ideal for iterating through array elements.",
  },
  {
    question: "Which keyword stops a loop?",
    options: ["exit", "stop", "return", "break"],
    answer: 3,
    explanation: "break is used to exit a loop immediately.",
  },
  {
    question: "Which is not a JavaScript framework?",
    options: ["React", "Angular", "Vue", "Django"],
    answer: 3,
    explanation: "Django is a Python framework, not JavaScript.",
  },
  {
    question: "Which method removes the last item of an array?",
    options: ["pop()", "shift()", "slice()", "splice()"],
    answer: 0,
    explanation: "pop() removes the last item from an array.",
  },
  {
    question: "What does '===' mean in JavaScript?",
    options: ["Assignment", "Equals", "Strict Equality", "Error"],
    answer: 2,
    explanation: "'===' checks both value and type strictly.",
  },
  {
    question: "How do you declare a constant in JavaScript?",
    options: [
      "const pi = 3.14;",
      "pi = 3.14;",
      "let pi = constant;",
      "constant pi = 3.14;",
    ],
    answer: 0,
    explanation: "Use 'const' to declare a constant variable.",
  },
  {
    question: "Which method converts a number to a string?",
    options: ["toNumber()", "toString()", "stringify()", "convert()"],
    answer: 1,
    explanation: "toString() converts a number or any value to string.",
  },
  {
    question: "Which symbol is used for logical AND?",
    options: ["&&", "||", "!", "&"],
    answer: 0,
    explanation: "'&&' is used for logical AND operations.",
  },
  {
    question: "Which function checks if a value is an integer?",
    options: [
      "Number.isInteger()",
      "isInt()",
      "isNumber()",
      "Number.checkInt()",
    ],
    answer: 0,
    explanation:
      "Number.isInteger() is used to check if a value is an integer.",
  },
  {
    question: "Which object represents date and time?",
    options: ["Time()", "Date()", "Clock()", "Calendar()"],
    answer: 1,
    explanation: "Date is a built-in object for handling dates and times.",
  },
  {
    question: "What is the default value of uninitialized variables?",
    options: ["null", "0", "undefined", "false"],
    answer: 2,
    explanation: "Uninitialized variables have the value 'undefined'.",
  },
  {
    question: "Which method joins array elements into a string?",
    options: ["concat()", "join()", "merge()", "append()"],
    answer: 1,
    explanation: "join() combines array elements into a single string.",
  },
];

let current = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const explanationEl = document.getElementById("explanation");

function showQuestion() {
  const q = questions[current];
  questionEl.textContent = `${current + 1}. ${q.question}`;
  answersEl.innerHTML = "";
  explanationEl.classList.add("hidden");
  nextBtn.style.display = "none";

  q.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(index);
    answersEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = questions[current].answer;
  if (selected === correct) score++;

  [...answersEl.children].forEach((btn, idx) => {
    btn.disabled = true;
    btn.style.backgroundColor =
      idx === correct ? "green" : idx === selected ? "red" : "#007bff";
  });

  explanationEl.classList.remove("hidden");
  explanationEl.textContent = "Explanation: " + questions[current].explanation;

  nextBtn.style.display = "inline-block";
}

nextBtn.onclick = () => {
  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
    document.getElementById("quiz").style.display = "none";
    resultEl.classList.remove("hidden");
    scoreEl.textContent = score;
  }
};

showQuestion();
