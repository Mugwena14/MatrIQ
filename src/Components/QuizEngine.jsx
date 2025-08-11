import React, { useState } from 'react';
import styles from '../App.module.css'; 
import BeatLoad from './Spinner'; 

const rawQuizData = [
  {
    id: 1,
    topic: "Climate",
    difficulty: "Hard",
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
    topic: "Geomorphology",
    difficulty: "Easy",
    questions: {
      questionText: "Which continent is South Africa in?",
      answerOptions: [
        { answerText: "Asia", isCorrect: false },
        { answerText: "Africa", isCorrect: true },
        { answerText: "Europe", isCorrect: false },
        { answerText: "Australia", isCorrect: false }
      ],
      explanation: "South Africa is located in the southern part of Africa.",
      image: null
    }
  },
  {
    id: 3,
    topic: "Climate",
    difficulty: "Hard",
    questionText: "Which layer of the atmosphere contains the ozone layer?",
    answerOptions: [
      { answerText: "Stratosphere", isCorrect: true },
      { answerText: "Troposphere", isCorrect: false },
      { answerText: "Mesosphere", isCorrect: false },
      { answerText: "Exosphere", isCorrect: false }
    ],
    explanation: "The ozone layer is located in the stratosphere.",
    image: null
  }
];

// Normalize mixed schemas into flat structure
function normalizeQuizData(data) {
  return data.map(item => {
    const base = item.questions || item;
    return {
      id: item.id,
      topic: item.topic,
      difficulty: item.difficulty,
      questionText: base.questionText,
      answerOptions: base.answerOptions,
      explanation: base.explanation,
      image: base.image
    };
  });
}

const quizData = normalizeQuizData(rawQuizData);

const QuizEngine = () => {
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

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [requested, setRequested] = useState(false);
  const [topic, setTopic] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [length, setLength] = useState();

  function handleGenerate(e) {
    e.preventDefault();
    if (!topic || !difficulty || !length) return;

    setLoading(true);
    setRequested(true);
    setCurrentQuestion(0);
    setScore(0);
    setAnswered(false);
    setSelectedAnswer(null);
    setIsCorrect(null);

    fetchQuiz({ topic, difficulty, limit: parseInt(length) }).then(data => {
      setQuestions(data);
      setLoading(false);
    });
  }

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
      {requested ? (
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
            <form className={styles.form} onSubmit={handleGenerate}>
              <h1>Generate Quiz</h1>

              <div className={styles.field}>
                <select 
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  required
                >
                  <option value="">Choose Topic</option>
                  <option value="Climate">Climate & Weather</option>
                  <option value="Geomorphology">Geomorphology</option>
                </select>
              </div>

              <div className={styles.field}>
                <select 
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                  required
                >
                  <option value="">Choose Difficulty</option>
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>

              <div className={styles.field}>
                <input
                  type="number"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  placeholder="No of Qs. Max = 10"
                  min={1}
                  max={10}
                  required
                />
              </div>

              <button type="submit">Generate</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizEngine;
