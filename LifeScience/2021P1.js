const questions = [
    {
        questionText: 'Grommets are used in the treatment of …',
        answerOptions: [
        { answerText: 'deafness.', isCorrect: false },
        { answerText: 'blindness.', isCorrect: false },
        { answerText: 'middle-ear infection.', isCorrect: true },
        { answerText: 'multiple sclerosis.', isCorrect: false },
        ],
        explanation: 'Grommets are small tubes inserted into the eardrum to allow air to enter the middle ear, which helps to treat and prevent middle-ear infections.',
        image: 'data:image/png;base64,...'
    },
    {
        questionText: 'The ability of the lens of the eye to change its shape when viewing an object that is near or far is called …',
        answerOptions: [
        { answerText: 'binocular vision.', isCorrect: false },
        { answerText: 'accommodation.', isCorrect: true },
        { answerText: 'pupillary mechanism.', isCorrect: false },
        { answerText: 'refraction of light rays.', isCorrect: false },
        ],
        explanation: 'Accommodation is the process by which the lens changes shape to focus on objects at different distances, ensuring clear vision.',
        image: 'data:image/png;base64,...'
    },
    {
        questionText: 'Which ONE of the following is the visual defect that results from the uneven curvature of the cornea?',
        answerOptions: [
        { answerText: 'Cataracts', isCorrect: false },
        { answerText: 'Long-sightedness', isCorrect: false },
        { answerText: 'Short-sightedness', isCorrect: false },
        { answerText: 'Astigmatism', isCorrect: true },
        ],
        explanation: 'Astigmatism is caused by an irregular curvature of the cornea, leading to blurred or distorted vision.',
        image: 'data:image/png;base64,...'
    },
    {
        questionText: 'The receptor(s) involved in maintaining balance is/are the …',
        answerOptions: [
        { answerText: 'organ of Corti only.', isCorrect: false },
        { answerText: 'organ of Corti, maculae and cristae.', isCorrect: false },
        { answerText: 'maculae only.', isCorrect: false },
        { answerText: 'maculae and cristae only.', isCorrect: true },
        ],
        explanation: 'The organ of Corti, maculae, and cristae are all involved in maintaining balance by detecting changes in head position and movement.',
        image: 'data:image/png;base64,...'
    },
    {
        questionText: 'Which of the following structures are involved in maintaining balance when there is a change in the direction of movement of the body?',
        answerOptions: [
            { answerText: 'Eustachian tube and cerebellum', isCorrect: false },
            { answerText: 'Semi-circular canals and cerebrum', isCorrect: false },
            { answerText: 'Eustachian tube and cerebrum', isCorrect: false },
            { answerText: 'Semi-circular canals and cerebellum', isCorrect: true },
        ],
        explanation: 'The semi-circular canals detect rotational movements, while the cerebellum processes this information to help maintain balance.',
        image: 'data:image/png;base64,...'
        }, {
        questionText: 'Which of the following structures are protected by the meninges?',
        answerOptions: [
        { answerText: 'Spinal cord and brain', isCorrect: true },
        { answerText: 'Spinal cord and receptors', isCorrect: false },
        { answerText: 'Brain and effectors', isCorrect: false },
        { answerText: 'Effectors and receptors', isCorrect: false },
        ],
        explanation: 'The meninges are protective membranes that cover the brain and spinal cord, providing a barrier against infection and physical damage.',
        image: 'data:image/png;base64,...'
    },
    {
        questionText: 'Which ONE of the graphs correctly represents the blood glucose levels of the two men?',
        answerOptions: [
        { answerText: 'Graph W', isCorrect: false },
        { answerText: 'Graph Y', isCorrect: true },
        { answerText: 'Graph Z', isCorrect: false },
        { answerText: 'Graph X', isCorrect: false },
        ],
        explanation: 'Graph Y correctly shows the blood glucose levels of the diabetic and non-diabetic men over a period of 3 hours. The diabetic man`s glucose levels rise and remain high, while the non-diabetic man`s levels is normal.',
        image: 'data:image/png;base64,...'
    },{
        questionText: 'During a reflex action, impulses enter the spinal cord by means of a/an ...',
        answerOptions: [
        { answerText: 'Sensory neuron through the ventral root of the spinal nerve', isCorrect: false },
        { answerText: 'Sensory neuron through the dorsal root of the spinal nerve', isCorrect: true },
        { answerText: 'Interneuron through the ventral root of the spinal nerve', isCorrect: false },
        { answerText: 'Interneuron through the dorsal root of the spinal nerve', isCorrect: false },
        ],
        explanation: 'In a reflex arc, sensory neurons carry impulses into the spinal cord via the dorsal root, where they connect to interneurons and motor neurons to initiate a rapid response.',
        image: 'data:image/png;base64,...'
    },
    {
        questionText: 'A person produces a smaller volume of urine most probably because ...',
        answerOptions: [
        { answerText: 'ADH levels are high in the blood and the renal tubules are more permeable to water', isCorrect: true },
        { answerText: 'ADH levels are high in the blood and the renal tubules are less permeable to water', isCorrect: false },
        { answerText: 'ADH levels are low in the blood and the renal tubules are more permeable to water', isCorrect: false },
        { answerText: 'ADH levels are low in the blood and the renal tubules are less permeable to water', isCorrect: false },
        ],
        explanation: 'High ADH levels increase the permeability of renal tubules to water, allowing more water to be reabsorbed into the bloodstream and resulting in reduced urine volume.',
        image: 'data:image/png;base64,...'
    },
    {
        questionText: 'The release of an ovum from the ovary',
        answerOptions: [
        { answerText: 'Fertilisation', isCorrect: false },
        { answerText: 'Menstruation', isCorrect: false },
        { answerText: 'Ovulation', isCorrect: true },
        { answerText: 'Implantation', isCorrect: false },
        ],
        explanation: 'Ovulation is the process during which an ovary releases a mature egg (ovum), usually around the middle of a menstrual cycle.',
        image: 'data:image/png;base64,...'
    },
    {
        questionText: 'The microscopic gap between two consecutive neurons',
        answerOptions: [
        { answerText: 'Axon', isCorrect: false },
        { answerText: 'Synapse', isCorrect: true },
        { answerText: 'Dendrite', isCorrect: false },
        { answerText: 'Myelin sheath', isCorrect: false },
        ],
        explanation: 'A synapse is the small gap between two neurons where neurotransmitters are released to transmit signals.',
        image: 'data:image/png;base64,...'
    },
    {
        questionText: 'The period of development of the foetus in the uterus',
        answerOptions: [
        { answerText: 'Gestation', isCorrect: true },
        { answerText: 'Menstruation', isCorrect: false },
        { answerText: 'Fertilisation', isCorrect: false },
        { answerText: 'Ovulation', isCorrect: false },
        ],
        explanation: 'Gestation refers to the period from fertilisation to birth when the foetus develops inside the uterus.',
        image: 'data:image/png;base64,...'
    },
    {
        questionText: 'The growth movement of a plant in response to a stimulus',
        answerOptions: [
        { answerText: 'Respiration', isCorrect: false },
        { answerText: 'Photosynthesis', isCorrect: false },
        { answerText: 'Tropism', isCorrect: true },
        { answerText: 'Germination', isCorrect: false },
        ],
        explanation: 'Tropism is the directional growth of a plant in response to an environmental stimulus like light or gravity.',
        image: 'data:image/png;base64,...'
    },
    {
        questionText: 'The type of development in birds where the young are able to independently move and feed themselves after hatching',
        answerOptions: [
        { answerText: 'Precocial development', isCorrect: true },
        { answerText: 'Altricial development', isCorrect: false },
        { answerText: 'Gestational development', isCorrect: false },
        { answerText: 'Amniotic development', isCorrect: false },
        ],
        explanation: 'Precocial development refers to chicks that hatch well-developed and are capable of walking and feeding independently.',
        image: 'data:image/png;base64,...'
    },
    {
        questionText: 'The extra-embryonic membrane that is responsible for the excretion of waste in an amniotic egg',
        answerOptions: [
        { answerText: 'Chorion', isCorrect: false },
        { answerText: 'Allantois', isCorrect: true },
        { answerText: 'Amnion', isCorrect: false },
        { answerText: 'Yolk sac', isCorrect: false },
        ],
        explanation: 'The allantois is the membrane in amniotic eggs that stores nitrogenous waste and facilitates gas exchange.',
        image: 'data:image/png;base64,...'
    },
    {
        questionText: 'Tubules in the testes where spermatogenesis occurs',
        answerOptions: [
        { answerText: 'Seminiferous tubules', isCorrect: true },
        { answerText: 'Epididymis', isCorrect: false },
        { answerText: 'Vas deferens', isCorrect: false },
        { answerText: 'Prostate gland', isCorrect: false },
        ],
        explanation: 'Sperm production occurs in the seminiferous tubules, which are tightly coiled structures located within the testes.',
        image: 'data:image/png;base64,...'
    },
    {
        questionText: 'The plant hormone that brings about seed dormancy when conditions are unfavourable',
        answerOptions: [
        { answerText: 'Auxin', isCorrect: false },
        { answerText: 'Abscisic acid', isCorrect: true },
        { answerText: 'Gibberellin', isCorrect: false },
        { answerText: 'Cytokinin', isCorrect: false },
        ],
        explanation: 'Abscisic acid promotes seed dormancy and helps the plant survive adverse environmental conditions.',
        image: 'data:image/png;base64,...'
        },
    ]
