import { useState } from "react";
import styles from './App.module.css';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);

  function handleNextQ() {
    setCurrentQuestion(currentQuestion + 1);
    setAnswered(false);
    setSelectedAnswer(null);
    setIsCorrect(null); 
  }

  function handleAnswerOption(correct, index) {
    setAnswered(true);
    setSelectedAnswer(index);
    setIsCorrect(correct);
    if (correct) {
      setScore(score + 1);
    }
  }

  const questions = [
    {
      questionText: 'Who is the president of SA?',
      answerOptions: [
        { answerText: 'Donald Trump', isCorrect: false },
        { answerText: 'Jacob Zuma', isCorrect: false },
        { answerText: 'Cyril Ramaphosa', isCorrect: true },
        { answerText: 'Julius Malema', isCorrect: false },
      ],
      explanation: 'Cyril is the one ruling the country.',
    },
    {
      questionText: 'Which province is Malamulele located in?',
      answerOptions: [
        { answerText: 'Gauteng', isCorrect: false },
        { answerText: 'Mpumalanga', isCorrect: false },
        { answerText: 'Western Cape', isCorrect: false },
        { answerText: 'Limpopo', isCorrect: true },
      ],
      explanation: 'Malamulele is a town in Limpopo province.',
    },
  ];

  return (
    <div>
      <h1>MatrIQ</h1>

      <p>{questions[currentQuestion].questionText}</p>

      {questions[currentQuestion].answerOptions.map((option, index) => (
        <button
          key={index}
          onClick={() => handleAnswerOption(option.isCorrect, index)}
          disabled={answered && selectedAnswer !== index}
          className={`${styles.answerBtn} ${
            answered
              ? option.isCorrect
                ? styles.correct
                : selectedAnswer === index
                ? styles.incorrect
                : ''
              : ''
          }`}
        >
          {option.answerText}
        </button>
      ))}

      <div>
        <button onClick={handleNextQ} disabled={!answered}>
          Next Question
        </button>
      </div>

      <div>
        {(answered && isCorrect === false && questions[currentQuestion].explanation) && (
          <p>{questions[currentQuestion].explanation}</p>
        )}
      </div>

      <p>Question {currentQuestion + 1} of {questions.length}</p>
      <p>Score: {score}</p>
    </div>
  );
}

export default App;
