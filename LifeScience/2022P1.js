const questions = [
    {
        questionText: 'Which ONE of the following structures maintains the shape of the eyeball?',
        answerOptions: [
        { answerText: 'Cornea', isCorrect: false },
        { answerText: 'Lens', isCorrect: false },
        { answerText: 'Vitreous humour', isCorrect: true },
        { answerText: 'Retina', isCorrect: false },
        ],
        explanation: 'The vitreous humour is a transparent gel-like substance that fills the space between the lens and retina. It provides internal pressure to maintain the eyeball’s shape and ensure that light is properly focused onto the retina.',
        image: 'data:image/png;base64,...'
    },
    {
        questionText: 'The choroid layer of the eye...',
        answerOptions: [
        { answerText: 'is richly supplied with blood vessels.', isCorrect: true },
        { answerText: 'contains photoreceptors.', isCorrect: false },
        { answerText: 'refracts light rays.', isCorrect: false },
        { answerText: 'sends impulses to the brain.', isCorrect: false },
        ],
        explanation: 'The choroid is a layer of the eye that is rich in blood vessels, providing oxygen and nutrients to the outer layers of the retina.',
        image: 'data:image/png;base64,...'
    },
    {
        questionText: 'Which ONE of the following occurs immediately after fertilisation?',
        answerOptions: [
        { answerText: 'The blastula, which is a hollow ball of cells, is formed by meiosis.', isCorrect: false },
        { answerText: 'The morula, which is a hollow ball of cells, is formed by meiosis.', isCorrect: false },
        { answerText: 'The blastula, which is a solid ball of cells, is formed by mitosis.', isCorrect: false },
        { answerText: 'The morula, which is a solid ball of cells, is formed by mitosis.', isCorrect: true },
        ],
        explanation: 'Immediately after fertilisation, the zygote undergoes rapid cell division through mitosis to form a solid ball of cells known as the morula.',
        image: 'data:image/png;base64,...'
    },
    {
        questionText: 'On a hot day, which ONE of the following occurs as a cooling mechanism in humans?',
        answerOptions: [
        { answerText: 'Less blood flows to the surface of the skin.', isCorrect: false },
        { answerText: 'The sweat glands become inactive.', isCorrect: false },
        { answerText: 'More blood flows to the surface of the skin.', isCorrect: true },
        { answerText: 'Vasoconstriction takes place.', isCorrect: false },
        ],
        explanation: 'On a hot day, the body increases blood flow to the skin’s surface, allowing heat to be lost through radiation and evaporation of sweat.',
        image: 'data:image/png;base64,...'
    },
    {
        questionText: 'The normal site of fertilisation in a human female is the...',
        answerOptions: [
        { answerText: 'Uterus.', isCorrect: false },
        { answerText: 'Ovary.', isCorrect: false },
        { answerText: 'Vagina.', isCorrect: false },
        { answerText: 'Fallopian tube.', isCorrect: true },
        ],
        explanation: 'Fertilisation typically occurs in the Fallopian tube, where the sperm meets the ovum after ovulation.',
        image: 'data:image/png;base64,...'
    },
    {
        questionText: 'Which ONE of the following best describes the events of accommodation when a person is viewing an object that is less than 6 m away?',
        answerOptions: [
        { answerText: 'Ciliary muscle relaxes, suspensory ligaments tighten, tension on the lens increases', isCorrect: false },
        { answerText: 'Ciliary muscle contracts, suspensory ligaments slacken, tension on the lens decreases', isCorrect: true },
        { answerText: 'Ciliary muscle relaxes, suspensory ligaments slacken, tension on the lens decreases', isCorrect: false },
        { answerText: 'Ciliary muscle contracts, suspensory ligaments tighten, tension on the lens increases', isCorrect: false },
        ],
        explanation: 'To focus on a nearby object (less than 6 m away), the ciliary muscles contract. This reduces tension on the suspensory ligaments, causing them to slacken. As a result, the lens becomes more convex (rounded), decreasing tension but increasing its refractive power to focus light properly onto the retina.',
        image: 'data:image/png;base64,...'
    },
    {
        questionText: 'The axon is represented by structure …',
        answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '2', isCorrect: false },
        { answerText: '3', isCorrect: true },
        { answerText: '4', isCorrect: false },
        ],
        explanation: 'In the neuron diagram, structure 3 represents the axon, which is the long, cable-like extension that transmits electrical impulses away from the cell body.',
        image: 'data:image/png;base64,...'
    },
    {
        questionText: 'Which labelled part affects the speed of impulse transmission?',
        answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '2', isCorrect: true },
        { answerText: '3', isCorrect: false },
        { answerText: '4', isCorrect: false },
        ],
        explanation: 'Structure 2 is the myelin sheath, a fatty layer that insulates the axon and significantly increases the speed at which electrical impulses travel along the neuron.',
        image: 'data:image/png;base64,...'
    },
    {
        questionText: 'Which ONE of the following is an explanation of the results observed in the stationary clinostat investigation?',
        answerOptions: [
        { answerText: 'Phototropism occurred because the auxins moved towards light, which inhibited growth on the lower side of the stem.', isCorrect: false },
        { answerText: 'Geotropism occurred because the auxins moved downwards, which stimulated growth on the lower side of the stem.', isCorrect: true },
        { answerText: 'Phototropism occurred because the auxins moved away from light, which stimulated growth on the upper side of the stem.', isCorrect: false },
        { answerText: 'Geotropism occurred because the auxins moved upwards, which inhibited growth on the upper side of the stem.', isCorrect: false },
        ],
        explanation: 'Geotropism is the plant’s response to gravity. In a stationary clinostat, gravity affects auxin distribution. Auxins accumulate on the lower side of the stem, stimulating cell elongation and causing the stem to grow upwards.',
        image: 'data:image/png;base64,...'
    },
    {
        questionText: 'Which ONE of the following would be the expected results observed in the control using a rotating clinostat?',
        answerOptions: [
        { answerText: 'There will be no growth.', isCorrect: false },
        { answerText: 'The stem will grow upwards.', isCorrect: true },
        { answerText: 'The stem will grow downwards.', isCorrect: false },
        { answerText: 'The stem will grow horizontally.', isCorrect: false },
        ],
        explanation: 'In a rotating clinostat, the effects of gravity are neutralized because the direction of gravity constantly changes. This results in even auxin distribution and normal upward stem growth, uninfluenced by geotropism.',
        image: 'data:image/png;base64,...'
    }

]


