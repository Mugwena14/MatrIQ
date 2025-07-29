const questions = [
    {
        questionText: 'The hormone responsible for the regulation of salt content in the human body is ...',
        answerOptions: [
            { answerText: 'testosterone.', isCorrect: false },
            { answerText: 'aldosterone.', isCorrect: true },
            { answerText: 'prolactin.', isCorrect: false },
            { answerText: 'glucagon.', isCorrect: false },
        ],
        image: 'data:image/png;base64,...', // your image string goes here
        explanation: 'Aldosterone regulates salt by controlling sodium reabsorption in the kidneys.',
    },
    {
        questionText: 'Which ONE of the following is a stage in human embryonic development?',
        answerOptions: [
            { answerText: 'Choroid', isCorrect: false },
            { answerText: 'Amnion', isCorrect: false },
            { answerText: 'Morula', isCorrect: true },
            { answerText: 'Chorion', isCorrect: false },
        ],
        image: 'data:image/png;base64,...',
        explanation: 'Morula is the early stage formed by cell division of the fertilized ovum.',
    },
    {
        questionText: 'Which hormone is responsible for increasing the blood glucose level?',
        answerOptions: [
            { answerText: 'Insulin', isCorrect: false },
            { answerText: 'Glucagon', isCorrect: true },
            { answerText: 'Thyroxine', isCorrect: false },
            { answerText: 'Adrenaline', isCorrect: false },
        ],
        image: 'data:image/png;base64,...',
        explanation: 'Glucagon raises blood glucose levels by stimulating glycogen breakdown.',
    },
    {
        questionText: 'An increase in the blood glucose level results in the secretion of ...',
        answerOptions: [
            { answerText: 'glucagon.', isCorrect: false },
            { answerText: 'insulin.', isCorrect: true },
            { answerText: 'adrenaline.', isCorrect: false },
            { answerText: 'thyroxine.', isCorrect: false },
        ],
        image: 'data:image/png;base64,...',
        explanation: 'Insulin is released to lower glucose levels by enhancing cellular uptake.',
    },
    {
        questionText: 'Which ONE of the following may be the result of diabetes?',
        answerOptions: [
            { answerText: 'Too little glucagon.', isCorrect: false },
            { answerText: 'Too much insulin.', isCorrect: false },
            { answerText: 'Too little insulin.', isCorrect: true },
            { answerText: 'Too much glucose.', isCorrect: false },
        ],
        image: 'data:image/png;base64,...',
        explanation: 'Diabetes is caused by insufficient insulin, leading to high blood sugar.',
    },
    {
        questionText: 'Which ONE of the following describes the condition of structures X, Y and Z when a person seated 200 metres away looks at a ball in the middle of the soccer field?',
        answerOptions: [
            { answerText: 'Relaxed / Slack / More convex', isCorrect: false },
            { answerText: 'Contracted / Slack / Less convex', isCorrect: false },
            { answerText: 'Relaxed / Taut / Less convex', isCorrect: true },
            { answerText: 'Contracted / Taut / More convex', isCorrect: false },
        ],
        image: 'data:image/png;base64,...', // Replace with second image string
        explanation: 'When viewing distant objects, the ciliary muscles relax, suspensory ligaments are taut, and the lens becomes less convex for clear focus.',
    },
    {
        questionText: 'Which ONE of the following is involved in thermoregulation?',
        answerOptions: [
            { answerText: 'Corpus callosum', isCorrect: false },
            { answerText: 'Hypothalamus', isCorrect: true },
            { answerText: 'Cerebellum', isCorrect: false },
            { answerText: 'Spinal cord', isCorrect: false },
        ],
        image: 'data:image/png;base64,...', // Same second image
        explanation: 'The hypothalamus monitors and regulates body temperature by controlling mechanisms like sweating and shivering.',
    },
    {
        questionText: 'Which combination of factors is the amniotic fluid responsible for?',
        answerOptions: [
            { answerText: '(i), (ii), and (iii) only', isCorrect: true },
            { answerText: '(i) and (iv) only', isCorrect: false },
            { answerText: '(ii) and (iii) only', isCorrect: false },
            { answerText: '(i), (ii), (iii), and (iv)', isCorrect: false },
        ],
        image: 'data:image/png;base64,...', // Same second image
        explanation: 'Amniotic fluid cushions the fetus (protection), allows movement, and helps regulate temperature—but does not provide nutrition.',
    },
    {
        questionText: 'Which ONE of the following occurs when there are excess waves in the inner ear?',
        answerOptions: [
            { answerText: 'Pressure is released at A', isCorrect: false },
            { answerText: 'Pressure is released at C', isCorrect: true },
            { answerText: 'Pressure is absorbed at B', isCorrect: false },
            { answerText: 'Pressure is absorbed at A and C', isCorrect: false },
        ],
        image: 'data:image/png;base64,...', // Replace with third image string
        explanation: 'The round window (C) absorbs pressure waves in the inner ear to prevent echoing and allow fluid movement.',
    },
    {
        questionText: 'The nerve impulses for balance are transmitted as follows:',
        answerOptions: [
            { answerText: 'J → F → H', isCorrect: false },
            { answerText: 'E → F → H', isCorrect: true },
            { answerText: 'E → F → G', isCorrect: false },
            { answerText: 'J → F → G', isCorrect: false },
        ],
        image: 'data:image/png;base64,...', // Same third image string
        explanation: 'Balance-related impulses travel from the semicircular canals (E) through the auditory nerve (F) to the cerebellum (H).',
    }
];
