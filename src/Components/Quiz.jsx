import React from 'react'
import { useState } from 'react';
import styles from '../App.module.css'

const Quiz = () => {
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
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAkCAYAAADy19hsAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHySURBVFhH1ZivrjIxEMVnPyQYFAqBgBfAkIDgBTA8EAIBjicgeCwIDA4IGF4ABAKFwIFAkN6eppvcfOlO9x+99JdM0rLbOWcbYGcaCAl5RO6G3+83hSmDIKBCoaDGeZHZ8O12o+12S7vdjo7HI10uF7per+patVqlWq1GzWaT2u02dTodqlQq6lpqYDgNp9NJjMdj0Wq18MCxAvdiDdamJZXh+Xwuut2u0VScwFrkSEMiw/L7KUajkSiXy0YjSQI5kAs5k5DI8GAwMIpnCeRMQmzDk8nEKJg15D+Jyh2XWIZXq5WQv3ijYB6B3NCIg9Xw/X4X/X7fKJRnQANaNqyGZ7OZUeATAS0b/+SNLIvFQo941us1Hl7FdDrVnyYjjhZr+HA40HK51LPPAy1ocrCGN5uNqg1cAS1ocrCGURu4xqbJGpbvfD1yh02TNXw+n/XIHTbNSMPP55Mej4eeucOmye7wNxJpuFgsUqlU0jN32DTZHa7X63rkDpsma7jRaOiRO2yarGH0Yq6xaqqKIoL9fi9k12ssVP4PWUvoVWZer5cYDofGtWFAC5oc7A7LppF6vZ6efR5oQZNFG4/k28pLq2HvCnjgVYsUgkYRDaNJMGvk3oSGeNXmA+8OUkK8Oar6zV8dBnp33OrdCTz7av4+iH4Ac2v7VWBMXeIAAAAASUVORK5CYII=',
        explanation: 'Cyril is the one ruling the country.',
        },
        {
            questionText: 'A mid-latitude cyclone occurs between … north and south of the equator.',
            answerOptions: [
                { answerText: '5° and 25° ', isCorrect: false },
                { answerText: '30° and 60°', isCorrect: true },
                { answerText: '0° and 5°', isCorrect: false },
                { answerText: '60° and 90°', isCorrect: false },
            ],
            explanation: 'Mid-latitude cyclones develop in the temperature zones between 30° and 60° latitude, where cold and warm air masses often clash.',
            image: undefined,
        },
        {
        questionText: 'Which province is Malamulele located in?',
        answerOptions: [
            { answerText: 'Gauteng', isCorrect: false },
            { answerText: 'Mpumalanga', isCorrect: false },
            { answerText: 'Western Cape', isCorrect: false },
            { answerText: 'Limpopo', isCorrect: true },
        ],
        image: undefined,
        explanation: 'Malamulele is a town in Limpopo province.',
        },
    ];

    return (
        <div className={styles.quiz}>
            <h2>Geo Paper 1 2024</h2>

            {questions[currentQuestion].image ? (
                <img src={questions[currentQuestion].image} alt="Question Image"/>
            ) : null}

            <div className={styles.inQuiz}>
                <h3>{questions[currentQuestion].questionText}</h3>
            
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
                {(answered && isCorrect === false && questions[currentQuestion].explanation) && (
                <p>{questions[currentQuestion].explanation}</p>
                )}
            </div>
            <div className={styles.qNo}>
                <p>Question {currentQuestion + 1} of {questions.length}</p>
            </div>
            {/* <p>Score: {score}</p> */}
            </div>
        </div>
    );
}


export default Quiz