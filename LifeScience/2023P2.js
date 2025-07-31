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
},
{
    questionText: 'Which ONE of the chromosomes (Q, R, S or T) would most likely be found in a cell during late Anaphase II of meiosis?',
    answerOptions: [
        { answerText: 'Q', isCorrect: false },
        { answerText: 'R', isCorrect: false },
        { answerText: 'S', isCorrect: true },
        { answerText: 'T', isCorrect: false },
    ],
    explanation: 'In late Anaphase II, sister chromatids are separating and moving toward opposite poles. Structure S represents a single chromatid being pulled apart, which matches this phase.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'Which scientist discovered the hominid fossil known as “Little Foot”?',
    answerOptions: [
        { answerText: 'Ron Clarke', isCorrect: true },
        { answerText: 'Lee Berger', isCorrect: false },
        { answerText: 'Raymond Dart', isCorrect: false },
        { answerText: 'Robert Broom', isCorrect: false },
    ],
    explanation: 'Ron Clarke discovered “Little Foot,” a nearly complete Australopithecus skeleton found in the Sterkfontein Caves, contributing major insights into human evolution.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'The position of a gene on a chromosome is called a ...',
    answerOptions: [
        { answerText: 'Karyotype', isCorrect: false },
        { answerText: 'Locus', isCorrect: true },
        { answerText: 'Centromere', isCorrect: false },
        { answerText: 'Allele', isCorrect: false },
    ],
    explanation: 'A locus is the specific, fixed position on a chromosome where a particular gene or genetic marker is located.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'The type of evolution characterised by long periods of little or no change followed by short periods of rapid change is called ...',
    answerOptions: [
        { answerText: 'Gradualism', isCorrect: false },
        { answerText: 'Genetic drift', isCorrect: false },
        { answerText: 'Natural selection', isCorrect: false },
        { answerText: 'Punctuated equilibrium', isCorrect: true },
    ],
    explanation: 'Punctuated equilibrium suggests species experience long periods of stability interrupted by short bursts of rapid evolutionary change.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'The natural shape of a DNA molecule is referred to as a ...',
    answerOptions: [
        { answerText: 'Alpha helix', isCorrect: false },
        { answerText: 'Triple strand', isCorrect: false },
        { answerText: 'DNA coil', isCorrect: false },
        { answerText: 'Double helix', isCorrect: true },
    ],
    explanation: 'DNA`s double helix structure features two strands twisted around each other, held together by base pairs.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'The type of bond found between two amino acids during protein synthesis is a ...',
    answerOptions: [
        { answerText: 'Peptide bond', isCorrect: true },
        { answerText: 'Hydrogen bond', isCorrect: false },
        { answerText: 'Ionic bond', isCorrect: false },
        { answerText: 'Covalent bond', isCorrect: false },
    ],
    explanation: 'Peptide bonds form between the amino group of one amino acid and the carboxyl group of another, linking them in a protein chain.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'The type of vision shared by primates that allows for depth perception is called ...',
    answerOptions: [
        { answerText: 'Monocular vision', isCorrect: false },
        { answerText: 'Stereoscopic vision', isCorrect: true },
        { answerText: 'Peripheral vision', isCorrect: false },
        { answerText: 'Tunnel vision', isCorrect: false },
    ],
    explanation: 'Stereoscopic/Binocular vision allows primates to perceive depth by combining images from both eyes into a single three-dimensional perception.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'The type of dominance which results in an intermediate phenotype in the heterozygous condition',
    answerOptions: [
        { answerText: 'Complete dominance', isCorrect: false },
        { answerText: 'Codominance', isCorrect: false },
        { answerText: 'Incomplete dominance', isCorrect: true },
        { answerText: 'Recessive inheritance', isCorrect: false },
    ],
    explanation: 'Incomplete dominance occurs when the heterozygous genotype produces a phenotype that is a blend of both alleles, not fully dominant or recessive.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'The fluid of the nucleus where free nucleotides are found',
    answerOptions: [
        { answerText: 'Cytosol', isCorrect: false },
        { answerText: 'Nucleoplasm', isCorrect: true },
        { answerText: 'Plasma membrane', isCorrect: false },
        { answerText: 'Endoplasm', isCorrect: false },
    ],
    explanation: 'Nucleoplasm is the semi-fluid substance inside the nucleus that houses chromatin and free nucleotides used during DNA replication and transcription.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'A tangled mass of chromosomes located within the nucleus',
    answerOptions: [
        { answerText: 'Chromatin Network', isCorrect: true },
        { answerText: 'Chromatid', isCorrect: false },
        { answerText: 'Centromere', isCorrect: false },
        { answerText: 'Nucleolus', isCorrect: false },
    ],
    explanation: 'Chromatin is the loose, thread-like form of DNA and proteins found in the nucleus during interphase, prior to chromosome condensation.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'The division of the cytoplasm after a nuclear division',
    answerOptions: [
        { answerText: 'Karyokinesis', isCorrect: false },
        { answerText: 'Mitosis', isCorrect: false },
        { answerText: 'Cytokinesis', isCorrect: true },
        { answerText: 'Meiosis', isCorrect: false },
    ],
    explanation: 'Cytokinesis is the process of dividing the cytoplasm following the division of the nucleus, completing the formation of two separate cells.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'The name for the X and Y sex chromosomes in humans',
    answerOptions: [
        { answerText: 'Autosomes', isCorrect: false },
        { answerText: 'Heterosomes', isCorrect: false },
        { answerText: 'Chromatids', isCorrect: false },
        { answerText: 'Gonosomes', isCorrect: true },
    ],
    explanation: 'Gonosomes are the sex chromosomes—X and Y—that determine an individual’s genetic sex. Females typically have XX and males XY.',
    image: 'data:image/png;base64,...'
}





]