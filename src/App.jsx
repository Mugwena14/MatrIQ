import { useState } from "react"

function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answered, setAnswered] = useState(false);

  function handleNextQ(){
    setCurrentQuestion(currentQuestion + 1)
    setAnswered(false)
  }

  function handleAnswer(){
    setAnswered(true)
  }

  const questions = [
    {
      questionText: 'Who is the president of SA?',
      answerOptions: [
        {answerText: 'Donald Trump', isCorrect: false},
        {answerText: 'Jacob Zuma', isCorrect: false},
        {answerText: 'Cyril Rhamaphosa', isCorrect: true},
        {answerText: 'Julius Malema', isCorrect: false},
      ]
    },
    {
      questionText: 'Which province is Malamulele located in?',
      answerOptions: [
        {answerText: 'Gauteng', isCorrect: false},
        {answerText: 'Mpumalanga', isCorrect: false},
        {answerText: 'Wetsern Cape', isCorrect: false},
        {answerText: 'Limpopo', isCorrect: true},
      ]
    },
  ]


  return (
    <>
      <div>
        <div><h1>MatrIQ</h1></div>
        <div>
          <p>{questions[currentQuestion].questionText}</p>
        </div>
        <div>
          {questions[currentQuestion].answerOptions.map((option, index) => (
            <button
            onClick={() => handleAnswer()}
            >{option.answerText}</button>
          ))}
        </div>
        <div>
          <button onClick={() => handleNextQ()}
            disabled = {answered ? '' : 'disabled'}
            >Next Question</button>
        </div>
        <div>
          <p>Question {currentQuestion + 1} of {questions.length}</p>
        </div>
      </div>
    </>
  )
}

export default App
