const questions =[
    {
    questionText: 'The base pairing in DNA was discovered by …',
    answerOptions: [
        { answerText: 'Watson and Wilkins', isCorrect: false },
        { answerText: 'Franklin and Wilkins', isCorrect: false },
        { answerText: 'Crick and Watson', isCorrect: true },
        { answerText: 'Franklin and Crick', isCorrect: false },
    ],
    explanation: 'James Watson and Francis Crick discovered the base pairing mechanism of DNA, building on foundational work by Rosalind Franklin and Maurice Wilkins.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'A gene codes for the production of …',
    answerOptions: [
        { answerText: 'A chromosome', isCorrect: false },
        { answerText: 'An allele', isCorrect: false },
        { answerText: 'DNA', isCorrect: false },
        { answerText: 'A protein', isCorrect: true },
    ],
    explanation: 'Genes contain instructions for synthesizing specific proteins, which carry out various functions in the body.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'Which ONE of the following is a characteristic of stem cells?',
    answerOptions: [
        { answerText: 'They are easily obtained from any organ', isCorrect: false },
        { answerText: 'They divide by meiosis', isCorrect: false },
        { answerText: 'They can be stimulated to form any type of cell needed', isCorrect: true },
        { answerText: 'They are haploid', isCorrect: false },
    ],
    explanation: 'Stem cells are pluripotent, meaning they can differentiate into various types of cells depending on the body’s needs.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'The chances of having a female child in humans is …',
    answerOptions: [
        { answerText: '25%', isCorrect: false },
        { answerText: '50%', isCorrect: true },
        { answerText: '75%', isCorrect: false },
        { answerText: '100%', isCorrect: false },
    ],
    explanation: 'Each parent contributes one sex chromosome. Since males produce equal numbers of X and Y sperm, the chance is 50% for either sex.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'Which ONE of the following is part of the reason why colour-blindness is more common in males than in females?',
    answerOptions: [
        { answerText: 'The allele for colour-blindness is recessive and located on the X-chromosome', isCorrect: true },
        { answerText: 'Colour-blind males have two copies of the allele for colour-blindness', isCorrect: false },
        { answerText: 'The allele for colour-blindness is recessive and located on the Y-chromosome', isCorrect: false },
        { answerText: 'Fathers pass the allele of colour-blindness to their sons only', isCorrect: false },
    ],
    explanation: 'Since males have only one X chromosome, a recessive allele on it expresses the trait. Females need two copies to be affected, making it less common.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'Which individuals are possible members of the same family based on the DNA profiles provided?',
    answerOptions: [
        { answerText: 'X and Z only', isCorrect: false },
        { answerText: 'X, Y and Z only', isCorrect: false },
        { answerText: 'W, X and Y only', isCorrect: true },
        { answerText: 'W, Y and Z only', isCorrect: false },
    ],
    explanation: 'Family members tend to share DNA banding patterns. W, X, and Y have overlapping fragments suggesting a genetic relationship, while Z’s pattern differs significantly.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'What is the expected phenotype ratio when two plants heterozygous for a trait are crossed?',
    answerOptions: [
        { answerText: 'Dominant phenotype 3 : Recessive phenotype 1', isCorrect: true },
        { answerText: 'Dominant phenotype 1 : Recessive phenotype 3', isCorrect: false },
        { answerText: 'Dominant phenotype 1 : Recessive phenotype 2', isCorrect: false },
        { answerText: 'Dominant phenotype 1 : Recessive phenotype 1', isCorrect: false },
    ],
    explanation: 'In a monohybrid cross involving two heterozygotes (Aa × Aa), the offspring ratio is 3 showing the dominant trait and 1 showing the recessive trait.',
    image: 'data:image/png;base64,...'
}


]