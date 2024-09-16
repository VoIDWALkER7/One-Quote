const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', () =>{
  startGame()
  document.getElementById("war").play;
})
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: '“I will take responsibility for what I have done. If I must fall, I will rise each time a better man.”',
    answers: [
      { text: 'Brandon Sanderson, Oathbringer', correct: true },
      { text: 'Sebastien de Castell, Spellslinger', correct: false },
      { text: 'Scott Lynch, The Lies of Locke Lamora ', correct: false},
      { text: 'Jim Butcher, Ghost Story ', correct: false}
    ]
  },
  {
    question: '“There’s no blade as keen as surprise.”',
    answers: [
      { text: 'Andrzej Sapkowski, Sword of Destiny ', correct: false },
      { text: 'Brian Staveley, The Emperor’s Blades ', correct: true },
      { text: 'Raymond E. Feist, Rise of a Merchant Prince', correct: false },
      { text: 'Luke Scull, Sword of the North  ', correct: false }
    ]
  },
  {
    question: '“Friends can betray you, but with an old enemy, you always know where you stand.”',
    answers: [
      { text: 'Mark T. Barnes, The Pillars of Sand', correct: false },
      { text: 'Raymond E. Feist, Krondor: The Betrayal', correct: true },
      { text: 'Patrick Rothfuss, The Name of the Wind', correct: false },
      { text: 'Marie Brennan, The Tropic of Serpents', correct: false }
    ]
  },
  {
    question: '“The most important step a man can take. It’s not the first one, is it? It’s the next one. Always the next step.”',
    answers: [
      { text: 'Mark Lawrence, Emperor of Thorns ', correct: false },
      { text: 'Robert Jordan, The Great Hunt', correct: false},
      { text: 'Kevin Hearne, Hounded', correct: false },
      { text: 'Brandon Sanderson, Oathbringer ', correct: true }
    ]
  },
  {
  question: '“Pride… it’s so often an excuse for people to be weak.”',
  answers: [
    { text: 'Brandon Sanderson, The Well of Ascension', correct: false },
    { text: 'Raymond E. Feist, Krondor: The Betrayal', correct: false },
    { text: 'Robert Jackson Bennett, Foundryside ', correct: true },
    { text: 'Jim Butcher, Changes ', correct: false }
  ]
  },
  {
    question: '“Pick your enemies more carefully then your friends, they will be with you longer.”',
    answers: [
      { text: 'Lois McMaster Bujold, The Curse of Chalion ', correct: false },
      { text: 'Robert Jordan, The Great Hunt', correct: false},
      { text: 'Guy Gavriel Kay, Tigana ', correct: false },
      { text: 'Joe Abercrombie, Half a King', correct: true }
    ]
  },
  {
    question: '“Keep your mind too open, and you never know what might walk in.”',
    answers: [
      { text: 'Piers Anthony, Castle Roogna', correct: false },
      { text: 'Simon R. Green, Drinking Midnight Wine ', correct: true },
      { text: 'George R.R. Martin, A Game of Thrones', correct: false },
      { text: 'David Dalglish, Magic, Myth & Majesty', correct: false }
    ]
  },
  {
    question: '“Being terrified but going ahead and doing what must be done – that’s courage. The one who feels no fear is a fool, and the one who lets fear rule him is a coward.”',
    answers: [
      { text: 'Piers Anthony, Castle Roogna', correct: true },
      { text: 'Patrick Rothfuss, The Name of the Wind', correct: false },
      { text: 'Miles Cameron, The Red Knight ', correct: false},
      { text: 'Mark Lawrence, Emperor of Thorns ', correct: false}
    ]
  }

]