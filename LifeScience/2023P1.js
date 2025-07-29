const questions = [
    {
    questionText: 'Which ONE of the following parts controls the amount of light entering the eye by influencing the size of the pupil?',
    answerOptions: [
        { answerText: 'Cornea', isCorrect: false },
        { answerText: 'Retina', isCorrect: false },
        { answerText: 'Iris', isCorrect: true },
        { answerText: 'Sclera', isCorrect: false },
    ],
    image: 'data:image/png;base64,...',
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
    image: 'data:image/png;base64,...',
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
    image: 'data:image/png;base64,...',
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
    image: 'data:image/png;base64,...',
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
    image: 'data:image/png;base64,...',
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
    image: 'data:image/png;base64,...',
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
    image: 'data:image/png;base64,...',
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
    image: 'data:image/png;base64,...',
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
    image: 'data:image/png;base64,...',
    explanation: 'As light intensity decreases with distance, the pupil enlarges to allow more light in. This explains the positive correlation observed on the graph.',
    },
    {
    questionText: 'Which ONE of the following is a combination of events influenced by LH (luteinising hormone)?',
    answerOptions: [
        { answerText: '(ii) and (iii) only', isCorrect: true },
        { answerText: '(i), (ii), (iii), (iv) and (v)', isCorrect: false },
        { answerText: '(ii), (iii), (iv) and (v) only', isCorrect: false },
        { answerText: '(iii) only', isCorrect: false },
    ],
    image: 'data:image/png;base64,...',
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
    image: 'data:image/png;base64,...'
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
    image: 'data:image/png;base64,...'
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
    image: 'data:image/png;base64,...'
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
    image: 'data:image/png;base64,...'
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
    image: 'data:image/png;base64,...'
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
    image: 'data:image/png;base64,...'
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
    image: 'data:image/png;base64,...'
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
    image: 'data:image/png;base64,...'
}

]
