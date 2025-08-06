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
    async function getData() {
      try {
        const res = await fetch(`http://localhost:3001/geo?id=${id}`);
        const data = await res.json();
        setQuestions(data.questions || []); 
      } catch (error) {
        console.log('Error fetching data', error);
      }
    }
    getData();
  }, [id]);

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

  if (questions.length === 0) return <div>Loading...</div>;

  const current = questions[currentQuestion];

  return (
    <div className={styles.quiz}>
      <h2>Geo Paper 1 2024</h2>
      {current.image ? (
        <img src={current.image} alt="Question Image" />
      ) : null}
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
          <button className={styles.nxtQ} onClick={handleNextQ} disabled={!answered}>
            Next Question
          </button>
        </div>
        <div className={styles.explanation}>
          {answered && isCorrect === false && current.explanation && (
            <p>{current.explanation}</p>
          )}
        </div>
        <div className={styles.qNo}>
          <p>Question {currentQuestion + 1} of {questions.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
