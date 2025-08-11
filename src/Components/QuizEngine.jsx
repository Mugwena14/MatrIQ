import React, { useState } from 'react';
import styles from '../App.module.css'; 
import BeatLoad from './Spinner'; 

const rawQuizData = [
  {
    id: 1,
    topic: "Climate",
    difficulty: "Easy",
    questionText: "Define the term 'weather'.",
    answerOptions: [
      { answerText: "The condition of the atmosphere at a specific time and place", isCorrect: true },
      { answerText: "The long-term average of temperature and rainfall", isCorrect: false },
      { answerText: "The study of rocks and minerals", isCorrect: false },
      { answerText: "A sudden change in tectonic plates", isCorrect: false }
    ],
    explanation: "Weather refers to the short-term conditions of the atmosphere, such as temperature, humidity, precipitation, and wind.",
    image: null
  },
  {
    id: 2,
    topic: "Climate",
    difficulty: "Easy",
    questionText: "Which layer of the atmosphere contains almost all weather events?",
    answerOptions: [
      { answerText: "Troposphere", isCorrect: true },
      { answerText: "Stratosphere", isCorrect: false },
      { answerText: "Mesosphere", isCorrect: false },
      { answerText: "Thermosphere", isCorrect: false }
    ],
    explanation: "The troposphere is the lowest layer of the atmosphere where nearly all weather phenomena occur.",
    image: null
  },
  {
    id: 3,
    topic: "Climate",
    difficulty: "Easy",
    questionText: "Name the instrument used to measure air pressure.",
    answerOptions: [
      { answerText: "Barometer", isCorrect: true },
      { answerText: "Anemometer", isCorrect: false },
      { answerText: "Hygrometer", isCorrect: false },
      { answerText: "Thermometer", isCorrect: false }
    ],
    explanation: "A barometer measures atmospheric pressure, which helps forecast weather changes.",
    image: null
  },
  {
    id: 4,
    topic: "Climate",
    difficulty: "Easy",
    questionText: "Which gas in the atmosphere is the most abundant?",
    answerOptions: [
      { answerText: "Nitrogen", isCorrect: true },
      { answerText: "Oxygen", isCorrect: false },
      { answerText: "Carbon dioxide", isCorrect: false },
      { answerText: "Argon", isCorrect: false }
    ],
    explanation: "Nitrogen makes up about 78% of Earth's atmosphere.",
    image: null
  },
  {
    id: 5,
    topic: "Climate",
    difficulty: "Easy",
    questionText: "Identify the main energy source that drives the Earth's weather systems.",
    answerOptions: [
      { answerText: "The Sun", isCorrect: true },
      { answerText: "The Moon", isCorrect: false },
      { answerText: "Volcanoes", isCorrect: false },
      { answerText: "Ocean tides", isCorrect: false }
    ],
    explanation: "Solar energy heats Earth's surface unevenly, driving winds and weather patterns.",
    image: null
  },
  {
    id: 6,
    topic: "Climate",
    difficulty: "Easy",
    questionText: "What is the term for precipitation that falls as ice pellets?",
    answerOptions: [
      { answerText: "Sleet", isCorrect: true },
      { answerText: "Hail", isCorrect: false },
      { answerText: "Snow", isCorrect: false },
      { answerText: "Freezing rain", isCorrect: false }
    ],
    explanation: "Sleet consists of small ice pellets that form when raindrops freeze before hitting the ground.",
    image: null
  },
  {
    id: 7,
    topic: "Climate",
    difficulty: "Easy",
    questionText: "Name the process by which water changes from liquid to gas.",
    answerOptions: [
      { answerText: "Evaporation", isCorrect: true },
      { answerText: "Condensation", isCorrect: false },
      { answerText: "Sublimation", isCorrect: false },
      { answerText: "Precipitation", isCorrect: false }
    ],
    explanation: "Evaporation is the process where water turns into water vapor, driven by heat from the Sun.",
    image: null
  },
  {
    id: 8,
    topic: "Climate",
    difficulty: "Easy",
    questionText: "Which ocean current warms the climate of northwestern Europe?",
    answerOptions: [
      { answerText: "Gulf Stream", isCorrect: true },
      { answerText: "California Current", isCorrect: false },
      { answerText: "Humboldt Current", isCorrect: false },
      { answerText: "Canary Current", isCorrect: false }
    ],
    explanation: "The Gulf Stream carries warm water from the tropics to northwestern Europe, moderating its climate.",
    image: null
  },
  {
    id: 9,
    topic: "Climate",
    difficulty: "Easy",
    questionText: "What is the term for a long period of significantly less rainfall than average?",
    answerOptions: [
      { answerText: "Drought", isCorrect: true },
      { answerText: "Monsoon", isCorrect: false },
      { answerText: "Flood", isCorrect: false },
      { answerText: "Cyclone", isCorrect: false }
    ],
    explanation: "A drought occurs when an area experiences a prolonged shortage of rainfall.",
    image: null
  },
  {
    id: 10,
    topic: "Climate",
    difficulty: "Easy",
    questionText: "What type of cloud is thin, wispy, and found at high altitudes?",
    answerOptions: [
      { answerText: "Cirrus", isCorrect: true },
      { answerText: "Cumulus", isCorrect: false },
      { answerText: "Stratus", isCorrect: false },
      { answerText: "Nimbus", isCorrect: false }
    ],
    explanation: "Cirrus clouds are high-altitude clouds made mostly of ice crystals.",
    image: null
  },
  {
    id: 11,
    topic: "Climate",
    difficulty: "Easy",
    questionText: "Which wind belt lies between 30° and 60° latitude?",
    answerOptions: [
      { answerText: "Westerlies", isCorrect: true },
      { answerText: "Trade winds", isCorrect: false },
      { answerText: "Polar easterlies", isCorrect: false },
      { answerText: "Monsoon winds", isCorrect: false }
    ],
    explanation: "The westerlies blow from the west to the east in the mid-latitudes.",
    image: null
  },
  {
    id: 12,
    topic: "Climate",
    difficulty: "Easy",
    questionText: "What is the difference between weather and climate?",
    answerOptions: [
      { answerText: "Weather is short-term; climate is long-term", isCorrect: true },
      { answerText: "Weather is long-term; climate is short-term", isCorrect: false },
      { answerText: "Both mean the same thing", isCorrect: false },
      { answerText: "Climate refers to daily changes", isCorrect: false }
    ],
    explanation: "Weather refers to short-term atmospheric conditions, while climate describes the long-term average patterns.",
    image: null
  },
  {
    id: 13,
    topic: "Climate",
    difficulty: "Easy",
    questionText: "Which month marks the start of summer in the Southern Hemisphere?",
    answerOptions: [
      { answerText: "December", isCorrect: true },
      { answerText: "June", isCorrect: false },
      { answerText: "September", isCorrect: false },
      { answerText: "March", isCorrect: false }
    ],
    explanation: "Summer in the Southern Hemisphere begins in December due to the tilt of Earth's axis.",
    image: null
  },
  {
    id: 14,
    topic: "Climate",
    difficulty: "Easy",
    questionText: "What is the general name for winds that blow toward the equator from the subtropical highs?",
    answerOptions: [
      { answerText: "Trade winds", isCorrect: true },
      { answerText: "Westerlies", isCorrect: false },
      { answerText: "Polar easterlies", isCorrect: false },
      { answerText: "Jet stream", isCorrect: false }
    ],
    explanation: "Trade winds are steady winds that blow from subtropical high-pressure belts toward the equator.",
    image: null
  },
  {
    id: 15,
    topic: "Climate",
    difficulty: "Easy",
    questionText: "Name the boundary where two different air masses meet.",
    answerOptions: [
      { answerText: "Front", isCorrect: true },
      { answerText: "Trough", isCorrect: false },
      { answerText: "Isobar", isCorrect: false },
      { answerText: "Thermocline", isCorrect: false }
    ],
    explanation: "A front is the boundary between two air masses with different temperatures and humidity levels.",
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
