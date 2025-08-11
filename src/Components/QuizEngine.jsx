import React, { useState, useEffect } from 'react';
import styles from '../App.module.css'; // adjust path as needed
import BeatLoad from './Spinner'; // loading spinner component

const QuizEngine = () => {
  // Local quiz data
  const quizData = [
    {
      id: 1,
      topic: "Geography",
      difficulty: "Easy",
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "Paris", isCorrect: true },
        { answerText: "Berlin", isCorrect: false },
        { answerText: "Madrid", isCorrect: false },
        { answerText: "Rome", isCorrect: false }
      ],
      explanation: "Paris is the capital city of France.",
      image: null
    },
    {
      id: 2,
      topic: "Geography",
      difficulty: "Easy",
      questionText: "Which continent is South Africa in?",
      answerOptions: [
        { answerText: "Asia", isCorrect: false },
        { answerText: "Africa", isCorrect: true },
        { answerText: "Europe", isCorrect: false },
        { answerText: "Australia", isCorrect: false }
      ],
      explanation: "South Africa is located in the southern part of Africa.",
      image: null
    },
    {
      id: 3,
      topic: "Geography",
      difficulty: "Easy",
      questionText: "Name a desert in Africa.",
      answerOptions: [
        { answerText: "Sahara", isCorrect: true },
        { answerText: "Gobi", isCorrect: false },
        { answerText: "Kalahari", isCorrect: true },
        { answerText: "Atacama", isCorrect: false }
      ],
      explanation: "Both the Sahara and Kalahari are African deserts.",
      image: null
    }
  ];

  //  Simulated API fetch working like an API
  function fetchQuiz({ topic, difficulty, limit }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filtered = quizData
          .filter(q => q.topic === topic && q.difficulty === difficulty)
          .slice(0, limit);
        resolve(filtered);
      }, 500);
    });
  }

  // All hooks inside the component
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [requested, setRequested] = useState(false);
  const [topic, setTopic] = useState()
  const [difficulty, setDifficulty] = useState()
  const [length, setLength] = useState()

  useEffect(() => {
    fetchQuiz({ topic: "Geography", difficulty: "Easy", limit: 5 }).then(data => {
      setQuestions(data);
      setLoading(false);
    });
  }, []);

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

  const current = questions[currentQuestion];

  return (
    <div>
      {answered ? (
        <div className={styles.quiz}>
          {loading ? (
            <BeatLoad />
          ) : (
            <div>
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
          )}
        </div>
      ) : (
        <div className={styles.gen}>
            <div className={styles.genBox}>
                <form action="" className={styles.form}>
                        <h1>Generate Quiz</h1>
                    <div className={styles.field}>
                        <select 
                        value={topic}
                        onChange={(e) => {
                            setTopic(e.target.value)
                        }}
                        name="topic" id="topic" required>
                            <option value="">Choose Topic</option>
                            <option value="Climate and Weather">Climate & Weather</option>
                            <option value="Geomorphology">Geomorphology</option>
                        </select>
                    </div>
                    <div className={styles.field}>
                        <select 
                        value={difficulty}
                        onChange={(e) => {
                            setDifficulty(e.target.value)
                        }}
                        name="difficulty" id="difficulty" required>
                            <option value="">Choose Difficulty</option>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </div>
                    <div className={styles.field}>
                        <input
                        value={length}
                        onChange={(e) => {
                            setLength(e.target.value)
                        }}
                        type="number" placeholder="No of Qs. Max = 10" min={1} max={10} required/>
                    </div>
                    <button>Generate</button>
                </form>
            </div>
        </div>
      )}
    </div>
  );
};

export default QuizEngine;
