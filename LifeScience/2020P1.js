    const questions =
    [
    {
        questionText: 'Which part controls the amount of light entering the eye?',
        answerOptions: [
        { answerText: 'Cornea', isCorrect: false },
        { answerText: 'Choroid', isCorrect: false },
        { answerText: 'Lens', isCorrect: false },
        { answerText: 'Iris', isCorrect: true },
        ],
        explanation: 'The iris regulates the size of the pupil, controlling how much light enters the eye.',
        image: undefined,
    },
    {
        questionText: 'Which ONE of the following refers to an aquifer?',
        answerOptions: [
            { answerText: 'An underground permeable rock saturated with water', isCorrect: true },
        { answerText: 'An increase in the temperature of water bodies as a result of water from industries', isCorrect: false },
        { answerText: 'Planting of the same crop on the same area repeatedly', isCorrect: false },
        { answerText: 'The release of water with chemicals from mines', isCorrect: false },
        ],
        explanation: 'An aquifer is a water-bearing underground layer of permeable rock, gravel, or sand from which groundwater can be extracted.',
        image: undefined,
    },
    {
        questionText: 'The structure in the amniotic egg that removes waste products:',
        answerOptions: [
        { answerText: 'Yolk sac', isCorrect: false },
        { answerText: 'Allantois', isCorrect: true },
        { answerText: 'Chorion', isCorrect: false },
        { answerText: 'Amnion', isCorrect: false },
        ],
        explanation: 'The allantois collects and stores waste products and facilitates gas exchange within the amniotic egg.',
        image: undefined,
    },
    {
        questionText: 'Which ONE of the following is CORRECT with regard to astigmatism?',
        answerOptions: [
        { answerText: 'Light cannot pass through the cornea', isCorrect: false },
        { answerText: 'Light cannot pass through the lens', isCorrect: false },
        { answerText: 'Refraction of light rays by the cornea is uneven', isCorrect: true },
        { answerText: 'The lens cannot become more rounded', isCorrect: false },
        ],
        explanation: 'Astigmatism results from an irregular curvature of the cornea or lens, causing uneven refraction and blurred vision.',
        image: undefined,
    },
    {
        questionText: 'Which structures secrete progesterone during pregnancy?',
        answerOptions: [
            { answerText: 'Corpus luteum and placenta', isCorrect: true },
        { answerText: 'Adrenal gland and corpus luteum', isCorrect: false },
        { answerText: 'Thyroid gland and Graafian follicle', isCorrect: false },
        { answerText: 'Pituitary gland and Graafian follicle', isCorrect: false },
        ],
        explanation: 'During pregnancy, progesterone is mainly secreted by the corpus luteum in early stages and the placenta later to maintain the uterine lining.',
        image: undefined,
    },
    {
        questionText: 'Which ONE of the following shows the correct sequence of an impulse from the receptor in a simple reflex arc?',
        answerOptions: [
        { answerText: 'Sensory neuron through the dorsal root → motor neuron through the ventral root → effector', isCorrect: true },
        { answerText: 'Motor neuron through the dorsal root → sensory neuron through the ventral root → effector', isCorrect: false },
        { answerText: 'Sensory neuron through the dorsal root → effector → motor neuron through the ventral root', isCorrect: false },
        { answerText: 'Effector → interneuron through the dorsal root → motor neuron through the ventral root', isCorrect: false },
        ],
        explanation: 'A reflex arc follows the path: receptor → sensory neuron → spinal cord (interneuron) → motor neuron → effector. The sensory neuron enters through the dorsal root, and the motor neuron exits via the ventral root.',
        image: undefined,
    },
    {
        questionText: 'Which ONE of the following would be a disadvantage when a biological method is used to control alien plant invasion?',
        answerOptions: [
        { answerText: 'Able to control alien plants without the use of harmful chemicals', isCorrect: false },
        { answerText: 'Some part of the alien plant may be left to regrow when mechanically removed', isCorrect: false },
        { answerText: 'Chemicals might affect the indigenous plants in the area', isCorrect: false },
        { answerText: 'The species introduced might be alien in the area and out-compete the indigenous species', isCorrect: true },
        ],
        explanation: 'Introducing a new species for control may disrupt native ecosystems, leading to unintended ecological consequences.',
        image: undefined,
    },
    {
        questionText: 'Which ONE of the following is a consequence of the destruction of wetlands?',
        answerOptions: [
        { answerText: 'Increased biodiversity', isCorrect: false },
        { answerText: 'Decreased water availability', isCorrect: true },
        { answerText: 'Decreased global warming', isCorrect: false },
        { answerText: 'Increased water quality', isCorrect: false },
        ],
        explanation: 'Wetlands play a crucial role in water filtration and storage. Destroying them reduces water availability and harms local biodiversity.',
        image: undefined,
    },
    {
        questionText: 'Nocturnal animals have the ability to see clearly in the dark. They have...',
        answerOptions: [
        { answerText: 'Bigger eyes.', isCorrect: false },
        { answerText: 'More rods in the retina.', isCorrect: true },
        { answerText: 'More cones in the retina.', isCorrect: false },
        { answerText: 'No blind spot.', isCorrect: false },
        ],
        explanation: 'Rods are photoreceptor cells in the retina that are sensitive to low light. Nocturnal animals rely on a higher concentration of rods for night vision.',
        image: undefined,
    },
    {
        questionText: 'Which ONE of the following is CORRECT regarding the homeostatic control of glucose in the human body?',
        answerOptions: [
        { answerText: 'Pancreas | Insulin | Increase', isCorrect: false },
        { answerText: 'Pituitary | Glucagon | Increase', isCorrect: false },
        { answerText: 'Pituitary | Glucagon | Decrease', isCorrect: false },
        { answerText: 'Pancreas | Insulin | Decrease', isCorrect: true },
        ],
        explanation: 'Insulin is produced by the pancreas and lowers blood glucose by promoting uptake of glucose by cells.',
        image: undefined,
    },
    {
        questionText: 'The layer in the atmosphere that protects living organisms from the ultraviolet rays of the sun:',
        answerOptions: [
        { answerText: 'Ozone layer', isCorrect: true },
        { answerText: 'Troposphere', isCorrect: false },
        { answerText: 'Stratosphere', isCorrect: false },
        { answerText: 'Greenhouse gases', isCorrect: false },
        ],
        explanation: 'The ozone layer absorbs harmful ultraviolet radiation from the sun, shielding living organisms on Earth.',
        image: undefined,
    },
    {
        questionText: 'The illegal hunting and killing of animals:',
        answerOptions: [
        { answerText: 'Habitat destruction', isCorrect: false },
        { answerText: 'Deforestation', isCorrect: false },
        { answerText: 'Culling', isCorrect: false },
        { answerText: 'Poaching', isCorrect: true },
        ],
        explanation: 'Poaching refers to the unlawful capture or killing of wildlife, often contributing to species endangerment.',
        image: undefined,
    },
    {
        questionText: 'A condition of the cell where there is only one set of chromosomes:',
        answerOptions: [
        { answerText: 'Diploid', isCorrect: false },
        { answerText: 'Zygote', isCorrect: false },
        { answerText: 'Gamete', isCorrect: false },
        { answerText: 'Haploid', isCorrect: true },
        ],
        explanation: 'Haploid cells contain a single set of chromosomes, typical of gametes such as sperm and egg cells.',
        image: undefined,
    },
    {
        questionText: 'The response of a part of a plant to a light stimulus:',
        answerOptions: [
        { answerText: 'Hydrotropism', isCorrect: false },
        { answerText: 'Phototropism', isCorrect: true },
        { answerText: 'Geotropism', isCorrect: false },
        { answerText: 'Thigmotropism', isCorrect: false },
        ],
        explanation: 'Phototropism is a plant`s directional growth response to light, often seen as stems bending toward sunlight.',
        image: undefined,
    },
    {
        questionText: 'A hormone that stimulates ovulation in humans:',
        answerOptions: [
        { answerText: 'LH (Luteinising hormone)', isCorrect: true },
        { answerText: 'FSH (Follicle-stimulating hormone)', isCorrect: false },
        { answerText: 'Progesterone', isCorrect: false },
        { answerText: 'Estrogen', isCorrect: false },
        ],
        explanation: 'LH surges mid-cycle to trigger ovulation, releasing an egg from the ovary.',
        image: undefined,
    },
    {
        questionText: 'The part of the brain that connects the left and right hemispheres:',
        answerOptions: [
        { answerText: 'Cerebellum', isCorrect: false },
        { answerText: 'Medulla oblongata', isCorrect: false },
        { answerText: 'Thalamus', isCorrect: false },
        { answerText: 'Corpus callosum', isCorrect: true },
        ],
        explanation: 'The corpus callosum is a thick band of nerve fibers that enables communication between the two cerebral hemispheres.',
        image: undefined,
    },
    {
        questionText: 'The blood vessel that transports deoxygenated blood from the foetus towards the placenta:',
        answerOptions: [
        { answerText: 'Umbilical vein', isCorrect: false },
        { answerText: 'Umbilical artery', isCorrect: true },
        { answerText: 'Aorta', isCorrect: false },
        { answerText: 'Pulmonary artery', isCorrect: false },
        ],
        explanation: 'Umbilical arteries carry deoxygenated blood from the foetus to the placenta for gas and nutrient exchange.',
        image: undefined,
    },
    {
        questionText: 'A small device that is inserted in the ear to drain fluids caused by a middle-ear infection:',
        answerOptions: [
        { answerText: 'Cochlear implant', isCorrect: false },
        { answerText: 'Hearing aid', isCorrect: false },
        { answerText: 'Stethoscope', isCorrect: false },
        { answerText: 'Ear tube (grommet)', isCorrect: true },
        ],
        explanation: 'Grommets are tiny tubes placed in the eardrum to ventilate the middle ear and prevent fluid buildup.',
        image: undefined,
    },
    {
        questionText: 'The branch of the autonomic nervous system that restores an increased heart rate back to normal:',
        answerOptions: [
        { answerText: 'Sympathetic nervous system', isCorrect: false },
        { answerText: 'Somatic nervous system', isCorrect: false },
        { answerText: 'Parasympathetic nervous system', isCorrect: true },
        { answerText: 'Central nervous system', isCorrect: false },
        ],
        explanation: 'The parasympathetic nervous system promotes relaxation and returns bodily functions to a resting state.',
        image: undefined,
    },
    {
        questionText: 'A structure in the eye that absorbs light to prevent internal reflection:',
        answerOptions: [
        { answerText: 'Choroid', isCorrect: true },
        { answerText: 'Retina', isCorrect: false },
        { answerText: 'Optic nerve', isCorrect: false },
        { answerText: 'Sclera', isCorrect: false },
        ],
        explanation: 'The choroid is a pigmented layer that reduces light scattering inside the eye, improving visual clarity.',
        image: undefined,
    }
    ]
