import { useState } from "react"

function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answered, setAnswered] = useState(false);

  function handleNextQ(){
    setCurrentQuestion(currentQuestion + 1)
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
      
    </>
  )
}

export default App
