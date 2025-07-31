const questions = [
    {
    questionText: 'Which ONE of the following parts controls the amount of light entering the eye by influencing the size of the pupil?',
    answerOptions: [
        { answerText: 'Cornea', isCorrect: false },
        { answerText: 'Retina', isCorrect: false },
        { answerText: 'Iris', isCorrect: true },
        { answerText: 'Sclera', isCorrect: false },
    ],
    image: undefined,
    explanation: 'The iris controls the amount of light entering the eye by adjusting the size of the pupil. It contracts or dilates in response to light intensity.',
    },
    {
    questionText: 'The function of the umbilical vein is to transport …',
    answerOptions: [
        { answerText: 'Carbon dioxide from the foetus to the mother.', isCorrect: false },
        { answerText: 'Nutrients from the mother to the foetus.', isCorrect: true },
        { answerText: 'Carbon dioxide from the mother to the foetus.', isCorrect: false },
        { answerText: 'Nutrients from the foetus to the mother.', isCorrect: false },
    ],
    image: undefined,
    explanation: 'The umbilical vein transports oxygenated blood and nutrients from the mother to the foetus, ensuring proper development.',
    },
    {
    questionText: 'Which ONE of the following represents gland X and hormone Y in homeostatic control of blood glucose?',
    answerOptions: [
        { answerText: 'Pancreas, Insulin', isCorrect: false },
        { answerText: 'Pituitary, Insulin', isCorrect: false },
        { answerText: 'Pancreas, Glucagon', isCorrect: true },
        { answerText: 'Pituitary, Glucagon', isCorrect: false },
    ],
    image: 'data:image/png;base64,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',
    explanation: 'The pancreas detects changes in blood glucose levels and releases glucagon when glucose levels are low. Glucagon stimulates the liver to release stored glucose.',
    },
    {
    questionText: 'Which ONE of the following is CORRECT regarding the homeostatic control of carbon dioxide concentration in the blood?',
    answerOptions: [
        { answerText: 'High oxygen levels is the stimulus.', isCorrect: false },
        { answerText: 'Breathing muscles are the effectors.', isCorrect: true },
        { answerText: 'The lungs have receptors.', isCorrect: false },
        { answerText: 'The process is controlled by the cerebrum.', isCorrect: false },
    ],
    image: undefined,
    explanation: 'Breathing muscles, such as the diaphragm and intercostal muscles, act as effectors in controlling carbon dioxide levels by adjusting the breathing rate.',
    },
    {
    questionText: 'The plant hormones that can be used to kill broad-leaved weeds are …',
    answerOptions: [
        { answerText: 'Auxins only.', isCorrect: true },
        { answerText: 'Abscisic acid and gibberellins.', isCorrect: false },
        { answerText: 'Abscisic acid and auxins.', isCorrect: false },
        { answerText: 'Abscisic acid only.', isCorrect: false },
    ],
    image: undefined,
    explanation: 'Auxins are commonly used in herbicides to selectively kill broad-leaved weeds while sparing grasses and cereals.',
    },
    {
    questionText: 'A girl looking at a car moving away from her is able to focus on the letters on the number plate. Which ONE of the following changes occurred in her eyes?',
    answerOptions: [
        { answerText: 'The lens became more convex.', isCorrect: false },
        { answerText: 'Light rays were refracted more.', isCorrect: false },
        { answerText: 'The suspensory ligaments slackened.', isCorrect: false },
        { answerText: 'The ciliary muscles relaxed.', isCorrect: true },
    ],
    image: undefined,
    explanation: 'When viewing distant objects, the ciliary muscles relax, causing the lens to flatten and reduce refraction.',
    },
    {
    questionText: 'One of the characteristics of a sperm that causes it to move faster is the …',
    answerOptions: [
        { answerText: 'Oval-shaped head.', isCorrect: false },
        { answerText: 'Presence of enzymes in the acrosome.', isCorrect: true },
        { answerText: 'Haploid nucleus.', isCorrect: false },
        { answerText: 'Absence of a middle piece.', isCorrect: false },
    ],
    image: undefined,
    explanation: 'Enzymes in the acrosome play a critical role in penetrating the egg, and their presence is linked to enhanced motility in sperm cells.',
    },
    {
    questionText: 'In a person suffering from long-sightedness, …',
    answerOptions: [
        { answerText: 'Light rays are refracted more by the lens.', isCorrect: false },
        { answerText: 'Distant objects will appear blurred.', isCorrect: false },
        { answerText: 'The eyeball is longer than normal.', isCorrect: false },
        { answerText: 'Light rays fall behind the retina.', isCorrect: true },
    ],
    image: undefined,
    explanation: 'Long-sightedness (hyperopia) occurs when light rays focus behind the retina, making it hard to see nearby objects clearly.',
    },
    {
    questionText: 'Which ONE of the following statements is a conclusion that can be made from the results shown in the graph?',
    answerOptions: [
        { answerText: 'As the size of the pupil decreases, the distance from the light source increases.', isCorrect: false },
        { answerText: 'As the distance from the light source decreases, the size of the pupil increases.', isCorrect: false },
        { answerText: 'As the distance from the light source increases, the size of the pupil increases.', isCorrect: true },
        { answerText: 'As the size of the pupil increases, the distance from the light source increases.', isCorrect: false },
    ],
    image: 'data:image/png;base64,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',
    explanation: 'As light intensity decreases with distance, the pupil enlarges to allow more light in. This explains the positive correlation observed on the graph.',
    },
    {
    questionText: 'Which ONE of the following is a combination of events influenced by LH (luteinising hormone)?',
    answerOptions: [
        { answerText: '(i), (ii), (iii), (iv) and (v)', isCorrect: false },
        { answerText: '(ii), (iii), (iv) and (v) only', isCorrect: false },
        { answerText: '(iii) only', isCorrect: false },
        { answerText: '(ii) and (iii) only', isCorrect: true },
    ],
    image: 'data:image/png;base64,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',
    explanation: 'LH triggers ovulation and the development of the corpus luteum, making (ii) and (iii) the correct combination.',
    },
    {
    questionText: 'Which term describes a reproductive strategy where the young receives nutrients through the placenta?',
    answerOptions: [
        { answerText: 'Ovipary', isCorrect: false },
        { answerText: 'Ovovivipary', isCorrect: false },
        { answerText: 'Vivipary', isCorrect: true },
        { answerText: 'Parthenogenesis', isCorrect: false },
    ],
    explanation: 'Vivipary refers to internal development where the embryo receives nourishment directly from the mother through a placenta. Ovipary and ovovivipary involve egg-based reproduction, while parthenogenesis is reproduction without fertilization.',
    image: undefined
    },
    {
    questionText: 'Which term describes the duct that transports semen and urine to the outside of the body?',
    answerOptions: [
        { answerText: 'Urethra', isCorrect: true },
        { answerText: 'Vas deferens', isCorrect: false },
        { answerText: 'Fallopian tube', isCorrect: false },
        { answerText: 'Epididymis', isCorrect: false },
    ],
    explanation: 'The urethra is the duct that transports both semen and urine to the outside of the body. The vas deferens transports sperm from the epididymis to the urethra, while the fallopian tube and epididymis are parts of the female and male reproductive systems respectively.',
    image: undefined
    },
    {
    questionText: 'Which term describes the part of the nervous system that consists of cranial and spinal nerves?',
    answerOptions: [
        { answerText: 'Peripheral nervous system', isCorrect: true },
        { answerText: 'Central nervous system', isCorrect: false },
        { answerText: 'Autonomic nervous system', isCorrect: false },
        { answerText: 'Somatic nervous system', isCorrect: false },
    ],
    explanation: 'The peripheral nervous system consists of cranial and spinal nerves. The central nervous system includes the brain and spinal cord, while the autonomic and somatic nervous systems are subdivisions of the peripheral nervous system.',
    image: undefined
    },
    {
    questionText: 'Which term describes the form in which excess glucose is stored in the liver?',
    answerOptions: [
        { answerText: 'Glucose', isCorrect: false },
        { answerText: 'Glycogen', isCorrect: true },
        { answerText: 'Insulin', isCorrect: false },
        { answerText: 'Glucagon', isCorrect: false },
    ],
    explanation: 'Glycogen is the form in which excess glucose is stored in the liver. Glucose is the sugar itself, insulin is a hormone that regulates blood sugar levels, and glucagon is a hormone that raises blood sugar levels.',
    image: undefined
    },
    {
    questionText: 'Which term describes the structure that serves as a micro-filter during pregnancy?',
    answerOptions: [
        { answerText: 'Amniotic sac', isCorrect: false },
        { answerText: 'Umbilical cord', isCorrect: false },
        { answerText: 'Endometrium', isCorrect: false },
        { answerText: 'Placenta', isCorrect: true },
    ],
    explanation: 'The placenta serves as a micro-filter during pregnancy, providing nutrients and oxygen to the fetus while removing waste products. The amniotic sac contains the amniotic fluid, the umbilical cord connects the fetus to the placenta, and the endometrium is the lining of the uterus.',
    image: undefined
    },
    {
    questionText: 'Which term describes the pigmented layer of the eye that absorbs excess light?',
    answerOptions: [
        { answerText: 'Retina', isCorrect: false },
        { answerText: 'Choroid', isCorrect: true },
        { answerText: 'Cornea', isCorrect: false },
        { answerText: 'Sclera', isCorrect: false },
    ],
    explanation: 'The choroid is the pigmented layer of the eye that absorbs excess light. The retina is the layer that contains photoreceptor cells, the cornea is the transparent front part of the eye, and the sclera is the white outer layer of the eye.',
    image: undefined
    },
    {
    questionText: 'Which term describes the part of a neuron that plays a role in the speed at which a nerve impulse is transmitted?',
    answerOptions: [
        { answerText: 'Axon', isCorrect: false },
        { answerText: 'Dendrite', isCorrect: false },
        { answerText: 'Myelin sheath', isCorrect: true },
        { answerText: 'Synapse', isCorrect: false },
    ],
    explanation: 'The myelin sheath insulates the axon and increases the speed at which nerve impulses travel. Axons conduct the impulse, dendrites receive signals, and synapses are junctions where impulses are transmitted between neurons.',
    image: undefined
    },
    {
    questionText: 'Which part of the male reproductive system stores sperm until they mature?',
    answerOptions: [
        { answerText: 'Epididymis', isCorrect: true },
        { answerText: 'Seminal vesicle', isCorrect: false },
        { answerText: 'Vas deferens', isCorrect: false },
        { answerText: 'Prostate gland', isCorrect: false },
    ],
    explanation: 'The epididymis is a coiled tube where sperm mature and are stored. The seminal vesicle contributes fluid to semen, the vas deferens transports mature sperm, and the prostate gland secretes additional fluid that nourishes and protects sperm.',
    image: undefined
}

]
