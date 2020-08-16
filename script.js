const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const finishButton = document.getElementById('finish-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const leftism = document.getElementById("communism")
const centrism = document.getElementById("centrism")
const right = document.getElementById("right")

let shuffledQuestions, currentQuestionIndex

finishButton.addEventListener("click", seeIdeology)
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function seeIdeology() {
  if (benito > 0) {
    right.classList.remove("hide")
    } else if (benito < 0) {
    leftism.classList.remove("hide")
  } else if (benito == 0) {
    centrism.classList.remove("hide")
  }
}

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  questionContainerElement.classList.remove("hide")
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.value) {
      button.dataset.value = answer.value
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

var benito = 0;

function selectAnswer(e) {
  const selectedButton = e.target
  const value = Number(selectedButton.dataset.value);
  salve = benito + value;
  benito = salve;
  console.log(benito);
  questionContainerElement.classList.add("hide")
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    finishButton.classList.remove("hide")

  }
}



const questions = [
  {
    question: 'What is your opinion on free healthcare?',
    answers: [
      { text: 'Strongly Agree', value: -8 },
      { text: 'Agree', value: -5 },
      { text: 'Disagree', value: 5 },
      { text: 'Strongly Disagree', value: 8 }
    ]
  },
  {
    question: 'What is your opinion on KKK?',
    answers: [
      { text: 'Strongly Agree', value: 8 },
      { text: 'Agree', value: 5 },
      { text: 'Disagree', value: -5 },
      { text: 'Strongly Disagree', value: -8 }
    ]
  },
  {
    question: 'What is better between: Strasserism and Nazism?',
    answers: [
      { text: 'Nazism', value: 5 },
      { text: 'Strasserism', value: -5 }
    ]
  },
  {
    question: 'What is better between: Mao-Tse-Tung and Deng xiaoping?',
    answers: [
      { text: 'Deng', value: 5 },
      { text: 'Mao', value: -5 }
    ]
  },
  {
    question: 'What do you think about socialism?',
    answers: [
      { text: 'Very bad ideology', value: 8 },
      { text: 'Bad Ideology or meh', value: 5 },
      { text: 'Good ideology', value: -5 },
      { text: 'Very good ideology', value: -8 }
    ]
  },
  {
    question: 'What do you think about Thomas sankara?',
    answers: [
      { text: 'Very good', value: -8 },
      { text: 'Good', value: -5 },
      { text: 'Bad', value: 5 },
      { text: 'Very bad', value: 8 }
    ]
  },
  {
    question: 'What do you think about Gaddafi?',
    answers: [
      { text: 'Very bad', value: 8 },
      { text: 'Bad', value: 5 },
      { text: 'Good', value: -5 },
      { text: 'Very good', value: -8 }
    ]
  },
  {
    question: 'What do you think about Falangism?',
    answers: [
      { text: 'Very bad', value: -8 },
      { text: 'Bad', value: -5 },
      { text: 'Good', value: 5 },
      { text: 'Very good', value: 8 }
    ]
  },
  {
    question: 'What do you think about Fascism?',
    answers: [
      { text: 'Very bad', value: -8 },
      { text: 'Bad', value: -5 },
      { text: 'Good', value: 5 },
      { text: 'Very good', value: 8 }
    ]
  },
  {
    question: 'What do you think about gender equality?',
    answers: [
      { text: 'Very good', value: -8 },
      { text: 'Good', value: -5 },
      { text: 'Bad', value: 5 },
      { text: 'Very Bad', value: 8 }
    ]
  },
]
