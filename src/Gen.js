const quizData = {
  Climate: {
      easy: {
        questions: [
          {
            questionText: "The air movement associated with upslope flow",
            answerOptions: [
              { answerText: "Anabatic", isCorrect: true },
              { answerText: "Katabatic", isCorrect: false },
              { answerText: "Gravity flow", isCorrect: false },
              { answerText: "Valley breeze", isCorrect: false }
            ],
            explanation: "Anabatic winds are caused by warm air rising along slopes during daytime heating.",
            image: null
          }
        ]
      },
      medium: {
        questions: [ /* same structure */ ]
      },
      hard: {
        questions: [ /* same structure */ ]
      }
  },
  Geomorphology: {
      easy: {
        questions: [
          {
            questionText: "The process of erosion by water is known as",
            answerOptions: [
              { answerText: "Hydraulic action", isCorrect: true },
              { answerText: "Abrasion", isCorrect: false },
              { answerText: "Attrition", isCorrect: false },
              { answerText: "Corrosion", isCorrect: false }
            ],
            explanation: "Hydraulic action refers to the force of moving water eroding rock and soil.",
            image: null
          }
        ]
      },
      medium: {
        questions: [ /* same structure */ ]
      },
      hard: {
        questions: [ /* same structure */ ]
      }
  }
};

export default quizData;
