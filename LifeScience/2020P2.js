const questions = [
    {
    questionText: 'Which ONE of the following may result in Down syndrome in humans?',
    answerOptions: [
        { answerText: 'A gene mutation on chromosome 21', isCorrect: false },
        { answerText: 'Failure of chromosome pair 21 to separate during anaphase I', isCorrect: true },
        { answerText: 'Failure of the gonosomes to separate during meiosis II', isCorrect: false },
        { answerText: 'A gene mutation occurs on the X chromosome', isCorrect: false }
    ],
    explanation: 'Down syndrome is commonly caused by nondisjunction during anaphase I, resulting in a trisomy of chromosome 21.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'Variation within a species is introduced through …',
    answerOptions: [
        { answerText: 'Random mating and asexual reproduction', isCorrect: false },
        { answerText: 'Mitosis and random fertilisation', isCorrect: false },
        { answerText: 'Random mating and random fertilisation', isCorrect: true },
        { answerText: 'Mitosis and meiosis', isCorrect: false }
    ],
    explanation: 'Sexual reproduction introduces genetic variation through mechanisms such as random mating and random fertilisation.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'African apes and humans are similar. Both have …',
    answerOptions: [
        { answerText: 'Small jaws and well-developed brow ridges', isCorrect: false },
        { answerText: 'Gaps between their teeth and eyes in front', isCorrect: false },
        { answerText: 'An upright posture and a cranial ridge', isCorrect: false },
        { answerText: 'Opposable thumbs and bare fingertips', isCorrect: true },
    ],
    explanation: 'Opposable thumbs and bare fingertips are key similarities that highlight evolutionary links between African apes and humans.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'According to Lamarck, this species of fish may have evolved the ability to "walk" on land by …',
    answerOptions: [
        { answerText: 'Undergoing natural genetic mutations which caused the fins to develop into legs', isCorrect: false },
        { answerText: 'The process of natural selection', isCorrect: false },
        { answerText: 'Passing on the acquired characteristic of fins to their offspring', isCorrect: false },
        { answerText: 'Stretching its fins and using them for "walking"', isCorrect: true }
    ],
    explanation: 'Lamarck`s theory suggested that organisms acquire traits through use or disuse and pass them on, such as stretching fins for walking.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'Which ONE of the following is the CORRECT labels for 1, 2 and 3 in the diagram?',
    answerOptions: [
        { answerText: 'Translation, Ribosome, mRNA', isCorrect: false },
        { answerText: 'Transcription, Ribosome, tRNA', isCorrect: false },
        { answerText: 'Transcription, Nucleus, mRNA', isCorrect: true },
        { answerText: 'Translation, Nucleus, tRNA', isCorrect: false }
    ],
    explanation: 'Translation occurs at the ribosome where mRNA is read and proteins are synthesized. The diagram matches this sequence, confirming the correct labels as Translation, Ribosome, and mRNA.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'Which ONE of the following is the CORRECT phenotypic ratio of the F₂-generation?',
    answerOptions: [
        { answerText: '1 purple : 1 pink', isCorrect: true },
        { answerText: '1 purple : 3 pink', isCorrect: false },
        { answerText: '3 purple : 1 pink', isCorrect: false },
        { answerText: '1 purple : 2 pink', isCorrect: false }
    ],
    explanation: 'Crossing a heterozygous F₁ plant (Pp) with a pink parent (pp) yields a 1:1 ratio of purple to pink flowers in the F₂ generation.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'Which ONE of the following scientists discovered fossils of Homo sapiens and Ardipithecus sp?',
    answerOptions: [
        { answerText: 'Raymond Dart', isCorrect: false },
        { answerText: 'Tim White', isCorrect: true },
        { answerText: 'Lee Berger', isCorrect: false },
        { answerText: 'Louis Leakey', isCorrect: false },
    ],
    explanation: 'Tim White is credited with discovering fossils of both Homo sapiens and Ardipithecus species, contributing significantly to our understanding of human evolution.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'Which ONE of the following characteristics was found undesirable by humans?',
    answerOptions: [
        { answerText: 'Number of branches and leaf area', isCorrect: false },
        { answerText: 'Plant height and leaf area', isCorrect: false },
        { answerText: 'Plant height and number of branches', isCorrect: true },
        { answerText: 'Plant height and flower diameter', isCorrect: false },
    ],
    explanation: 'Artificial selection reduced plant height and eliminated branching, indicating these were considered undesirable traits by humans for cultivated sunflowers.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'Punctuated equilibrium suggests the following:',
    answerOptions: [
        { answerText: 'New species can appear quickly, over a relatively short period of time.', isCorrect: true },
        { answerText: 'Evolution is always a slow and gradual process.', isCorrect: false },
        { answerText: 'Natural selection does not explain evolution.', isCorrect: false },
        { answerText: 'Artificial selection is the only mechanism that causes evolution.', isCorrect: false }
    ],
    explanation: 'Punctuated equilibrium describes a model where species remain relatively unchanged for long periods, punctuated by short bursts of rapid change.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'Antibiotic resistance in bacteria is caused by the long-term use of antibiotics. This statement is a/an …',
    answerOptions: [
        { answerText: 'Theory', isCorrect: false },
        { answerText: 'Hypothesis', isCorrect: true },
        { answerText: 'Aim', isCorrect: false },
        { answerText: 'Conclusion', isCorrect: false }
    ],
    explanation: 'A hypothesis is a proposed explanation based on observations. The statement draws a predictive link between antibiotic use and bacterial resistance.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'Which ONE of the following describes similar structures in different organisms that indicate descent with modification?',
    answerOptions: [
        { answerText: 'Homologous structures', isCorrect: true },
        { answerText: 'Analogous structures', isCorrect: false },
        { answerText: 'Vestigial structures', isCorrect: false },
        { answerText: 'Adaptive features', isCorrect: false }
    ],
    explanation: 'Homologous structures are anatomical features found in different organisms that share a common origin but may serve different functions, demonstrating evolutionary descent.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'Large, pointed teeth in African apes that are used for tearing food are called …',
    answerOptions: [
        { answerText: 'Molars', isCorrect: false },
        { answerText: 'Incisors', isCorrect: false },
        { answerText: 'Canines', isCorrect: true },
        { answerText: 'Premolars', isCorrect: false }
    ],
    explanation: 'Canines are sharp teeth found in African apes and other mammals, specialized for tearing food and often enlarged in species with competitive social behavior.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'The part of the skull that houses the brain is called the …',
    answerOptions: [
        { answerText: 'Jawbone', isCorrect: false },
        { answerText: 'Mandible', isCorrect: false },
        { answerText: 'Spinal column', isCorrect: false },
        { answerText: 'Cranium', isCorrect: true },
    ],
    explanation: 'The cranium is the portion of the skull that encases and protects the brain, forming the upper part of the skull structure.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'The non-sex chromosomes in humans are referred to as …',
    answerOptions: [
        { answerText: 'Gonosomes', isCorrect: false },
        { answerText: 'Chromatids', isCorrect: false },
        { answerText: 'Autosomes', isCorrect: true },
        { answerText: 'Haploids', isCorrect: false }
    ],
    explanation: 'Autosomes are the chromosomes that determine non-sex-related traits, making up 22 of the 23 pairs in humans.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'The network of genetic material found in the nucleus during interphase is called …',
    answerOptions: [
        { answerText: 'Chromatin', isCorrect: true },
        { answerText: 'Centromeres', isCorrect: false },
        { answerText: 'Chromosomes', isCorrect: false },
        { answerText: 'Histones', isCorrect: false }
    ],
    explanation: 'Chromatin is a complex of DNA and proteins found in the nucleus during interphase, enabling gene expression and replication.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'The number, shape and arrangement of all the chromosomes in the nucleus of a somatic cell is referred to as the …',
    answerOptions: [
        { answerText: 'Genome', isCorrect: false },
        { answerText: 'Karyotype', isCorrect: true },
        { answerText: 'Genotype', isCorrect: false },
        { answerText: 'Chromatid count', isCorrect: false }
    ],
    explanation: 'A karyotype is a photographic representation or chart of the complete set of chromosomes in a cell, showing number, structure, and any abnormalities.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'Having a protruding jaw is known as …',
    answerOptions: [
        { answerText: 'Retrognathism', isCorrect: false },
        { answerText: 'Mandibular extension', isCorrect: false },
        { answerText: 'Cranial ridge', isCorrect: false },
        { answerText: 'Prognathism', isCorrect: true },
    ],
    explanation: 'Prognathism refers to the condition where the jaw projects forward relative to the facial profile, commonly seen in early hominids.',
    image: 'data:image/png;base64,...'
}




]