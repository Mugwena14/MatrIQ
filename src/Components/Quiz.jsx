import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../App.module.css';

const Quiz = () => {
  const { id } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`http://localhost:3001/geo?id=${id}`);
        const data = await res.json();

        const combinedQuestions = data.flatMap(item => item.questions || []);
        setQuestions(combinedQuestions);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    }

    fetchData();
  }, [id]);

  function handleNextQ() {
    setCurrentQuestion(prev => prev + 1);
    setAnswered(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
  }

  function handleAnswerOption(correct, index) {
    setAnswered(true);
    setSelectedAnswer(index);
    setIsCorrect(correct);
    if (correct) {
      setScore(prev => prev + 1);
    }
  }

  if (!questions.length || !questions[currentQuestion]) {
    return <div>Loading...</div>;
  }

  const current = questions[currentQuestion];

  return (
    <div className={styles.quiz}>
      <h2>Geo Paper 1 2024</h2>

      {current.image && (
        <img src={current.image} alt="Question" className={styles.questionImage} />
      )}

      <div className={styles.inQuiz}>
        <h3>{current.questionText}</h3>

        {current.answerOptions.map((option, index) => (
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
                  : styles.empty
                : styles.empty
            }`}
          >
            {option.answerText}
          </button>
        ))}

        <div>
          <button
            className={styles.nxtQ}
            onClick={handleNextQ}
            disabled={!answered || currentQuestion >= questions.length - 1}
          >
            {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish'}
          </button>
        </div>

        <div className={styles.explanation}>
          {answered && isCorrect === false && current.explanation && (
            <p>{current.explanation}</p>
          )}
        </div>

        <div className={styles.qNo}>
          <p>Question {currentQuestion + 1} of {questions.length}</p>
          <p>Score: {score}</p>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
