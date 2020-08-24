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

function libertarian() {
  document.getElementById("text-centrism").innerHTML = "Dear user, your nearest match is: Libertarian Centrism. Unfortunatelly I cant give more details besides that because this program is very simple."
  document.getElementById("text-nazbol").innerHTML = "Dear user, your nearest match is: Libertarian Nazbol. Unfortunatelly I cant give more details besides that because this program is very simple."
  document.getElementById("text-strasserism").innerHTML = "Dear user, your nearest match is: Libertarian Strasserist. Unfortunatelly I cant give more details besides that because this program is very simple."
  document.getElementById("text-maoism").innerHTML = "Dear user, your nearest match is: Libertarian Maoist. Unfortunatelly I cant give more details besides that because this program is very simple."
}

function totalitarian() {
  document.getElementById("text-communism").innerHTML = "Dear user, your nearest match is: Authoritarian Left. Unfortunatelly I cant give more details besides that because this program is very simple."
  document.getElementById("text-centrism").innerHTML = "Dear user, your nearest match is: Authoritarian Centrism. Unfortunatelly I cant give more details besides that because this program is very simple."
  document.getElementById("text-right").innerHTML = "Dear user, your nearest match is: Authoritarian right. Unfortunatelly I cant give more details besides that because this program is very simple."
  document.getElementById("text-nazbol").innerHTML = "Dear user, your nearest match is: Authoritarian Nazbol. Unfortunatelly I cant give more details besides that because this program is very simple."
  document.getElementById("text-strasserism").innerHTML = "Dear user, your nearest match is: Authoritarian Strasserist. Unfortunatelly I cant give more details besides that because this program is very simple."
  document.getElementById("text-fascism").innerHTML = "Dear user, your nearest match is: Authoritarian Fascist. Unfortunatelly I cant give more details besides that because this program is very simple."
  document.getElementById("text-maoism").innerHTML = "Dear user, your nearest match is: Authoritarian Maoist. Unfortunatelly I cant give more details besides that because this program is very simple."
}

function seeIdeology() {
  if (authoritarian > 0) {
    totalitarian()
    if (benito >= 20) {
      right.classList.remove("hide")
    } else if (benito <= -20) {
      maoism.classList.remove("hide")
    } else if (benito == 0) {
      centrism.classList.remove("hide")
    } else if (benito > 0 && benito < 10) {
      strasserism.classList.remove("hide")
    } else if (benito >= 10 && benito < 20) {
      fascism.classList.remove("hide")
    } else if (benito < 0 && benito > -10) {
      nazbol.classList.remove("hide")
    } else if (benito < 0) {
      communism.classList.remove("hide")
    }
  } else if (authoritarian < 0) {
    libertarian()
    if (benito >= 20) {
      ancap.classList.remove("hide")
    } else if (benito <= -20) {
      maoism.classList.remove("hide")
    } else if (benito == 0) {
      centrism.classList.remove("hide")
    } else if (benito > 0 && benito < 10) {
      strasserism.classList.remove("hide")
    } else if (benito >= 10 && benito < 20) {
      anfasc.classList.remove("hide")
    } else if (benito < 0 && benito > -10) {
      nazbol.classList.remove("hide")
    } else if (benito < 0) {
      ancom.classList.remove("hide")
    }
  } else {
    if (benito >= 20) {
      right.classList.remove("hide")
    } else if (benito <= -20) {
      maoism.classList.remove("hide")
    } else if (benito == 0) {
      centrism.classList.remove("hide")
    } else if (benito > 0 && benito < 10) {
      strasserism.classList.remove("hide")
    } else if (benito >= 10 && benito < 20) {
      fascism.classList.remove("hide")
    } else if (benito < 0 && benito > -10) {
      nazbol.classList.remove("hide")
    } else if (benito < 0) {
      communism.classList.remove("hide")
    }
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
    } else {
      button.dataset.value = answer.social_value
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
var authoritarian = 0;

function selectAnswer(e) {

  if (shuffledQuestions[currentQuestionIndex].id === 11) {
    const selectedButton = e.target
    const value = Number(selectedButton.dataset.value);
    salve = authoritarian + value;
    authoritarian = salve;
    console.log(authoritarian);
    questionContainerElement.classList.add("hide")
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')
    } else {
      finishButton.classList.remove("hide")
    }
  } else if (shuffledQuestions[currentQuestionIndex].id === 12) {
    const selectedButton = e.target
    const value = Number(selectedButton.dataset.value);
    salve = authoritarian + value;
    authoritarian = salve;
    console.log(authoritarian);
    questionContainerElement.classList.add("hide")
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')
    } else {
      finishButton.classList.remove("hide")
    }
  } else if (shuffledQuestions[currentQuestionIndex].id === 13) {
    const selectedButton = e.target
    const value = Number(selectedButton.dataset.value);
    salve = authoritarian + value;
    authoritarian = salve;
    console.log(authoritarian);
    questionContainerElement.classList.add("hide")
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')
    } else {
      finishButton.classList.remove("hide")
    }
  } else {
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
}



const questions = [
  {
    question: 'What is your opinion on free healthcare?',
    id : 1,
    answers: [
      { text: 'Strongly Agree', value: -8 },
      { text: 'Agree', value: -5 },
      { text: 'Disagree', value: 5 },
      { text: 'Strongly Disagree', value: 8 }
    ]
  },
  {
    question: 'What is your opinion on KKK?',
    id : 2,
    answers: [
      { text: 'Strongly Agree', value: 8 },
      { text: 'Agree', value: 5 },
      { text: 'Disagree', value: -5 },
      { text: 'Strongly Disagree', value: -8 }
    ]
  },
  {
    question: 'What is better between: Strasserism and Nazism?',
    id : 3,
    answers: [
      { text: 'Nazism', value: 5 },
      { text: 'Strasserism', value: -5 }
    ]
  },
  {
    question: 'What is better between: Mao-Tse-Tung and Deng xiaoping?',
    id : 4,
    answers: [
      { text: 'Deng', value: 5 },
      { text: 'Mao', value: -5 }
    ]
  },
  {
    question: 'What do you think about socialism?',
    id : 5,
    answers: [
      { text: 'Very bad ideology', value: 8 },
      { text: 'Bad Ideology or meh', value: 5 },
      { text: 'Good ideology', value: -5 },
      { text: 'Very good ideology', value: -8 }
    ]
  },
  {
    question: 'What do you think about Thomas sankara?',
    id : 6,
    answers: [
      { text: 'Very good', value: -8 },
      { text: 'Good', value: -5 },
      { text: 'Bad', value: 5 },
      { text: 'Very bad', value: 8 }
    ]
  },
  {
    question: 'What do you think about Gaddafi?',
    id : 7,
    answers: [
      { text: 'Very bad', value: 8 },
      { text: 'Bad', value: 5 },
      { text: 'Good', value: -5 },
      { text: 'Very good', value: -8 }
    ]
  },
  {
    question: 'What do you think about Falangism?',
    id : 8,
    answers: [
      { text: 'Very bad', value: -8 },
      { text: 'Bad', value: -5 },
      { text: 'Good', value: 5 },
      { text: 'Very good', value: 8 }
    ]
  },
  {
    question: 'What do you think about Fascism?',
    id : 9,
    answers: [
      { text: 'Very bad', value: -8 },
      { text: 'Bad', value: -5 },
      { text: 'Good', value: 5 },
      { text: 'Very good', value: 8 }
    ]
  },
  {
    question: 'What do you think about gender equality?',
    id : 10,
    answers: [
      { text: 'Very good', value: -8 },
      { text: 'Good', value: -5 },
      { text: 'Bad', value: 5 },
      { text: 'Very Bad', value: 8 }
    ]
  },
  {
    question: 'What do you think about legalization of drugs?',
    id : 11,
    answers: [
      { text: 'Very good', social_value: -8 },
      { text: 'Good', social_value: -3 },
      { text: 'Bad', social_value: 3 },
      { text: 'Very Bad', social_value: 8  }
    ]
  },
  {
    question: 'What do you think about liberals?',
    id : 12,
    answers: [
      { text: 'Very good', social_value: -8 },
      { text: 'Good', social_value: -3 },
      { text: 'Neutral/Unsure', social_value: 0 },
      { text: 'Bad', social_value: 3 },
      { text: 'Very Bad', social_value: 8  }
    ]
  },
  {
    question: 'What do you think about North korea?',
    id : 13,
    answers: [
      { text: 'Very good', social_value: 8 },
      { text: 'Good', social_value: 3 },
      { text: 'Neutral/Unsure', social_value: 0 },
      { text: 'Bad', social_value: -3 },
      { text: 'Very Bad', social_value: -8  }
    ]
  },
]
