const questions = [
    {
    questionText: 'DNA and RNA are examples of …',
    answerOptions: [
        { answerText: 'amino acids.', isCorrect: false },
        { answerText: 'enzymes.', isCorrect: false },
        { answerText: 'nucleic acids.', isCorrect: true },
        { answerText: 'proteins.', isCorrect: false },
    ],
    explanation: 'DNA and RNA are types of nucleic acids, which are essential for storing and transmitting genetic information.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'Which ONE of the following is a product of meiosis?',
    answerOptions: [
        { answerText: 'Muscle cell', isCorrect: false },
        { answerText: 'Ovary', isCorrect: false },
        { answerText: 'Nerve cell', isCorrect: false },
        { answerText: 'Ovum', isCorrect: true },
    ],
    explanation: 'Meiosis is a type of cell division that produces gametes, such as ova (egg cells) in females.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'An individual is heterozygous for a harmful recessive allele but is unaffected by it. Which ONE of the following best represents the genetic composition of this individual?',
    answerOptions: [
        { answerText: 'One harmful recessive allele and one normal dominant allele', isCorrect: true },
        { answerText: 'Two dominant normal alleles', isCorrect: false },
        { answerText: 'One harmful recessive allele and one harmful dominant allele', isCorrect: false },
        { answerText: 'One harmful dominant allele and one normal recessive allele', isCorrect: false },
    ],
    explanation: 'A heterozygous individual has one normal dominant allele and one harmful recessive allele, making them a carrier but unaffected by the recessive trait.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'A person has the genotype IAi for blood type. What is this person\'s blood group?',
    answerOptions: [
        { answerText: 'B', isCorrect: false },
        { answerText: 'O', isCorrect: false },
        { answerText: 'AB', isCorrect: false },
        { answerText: 'A', isCorrect: true },
    ],
    explanation: 'The genotype IAi indicates that the person has blood type A, as IA is dominant over i.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'In a car accident, the biological father of a girl and three other men were killed. The men could not be identified due to their injuries. DNA profiling was used to identify the girls father. The diagram below shows the DNA profiles of the girl, her mother and the four men. Which ONE of the men is most likely to have been the father of the girl?',
    answerOptions: [
        { answerText: '4', isCorrect: true },
        { answerText: '3', isCorrect: false },
        { answerText: '2', isCorrect: false },
        { answerText: '1', isCorrect: false },
    ],
    explanation: 'The DNA profile of Man 4 shares the most bands with the girl\'s DNA profile, indicating that he is most likely her biological father.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'A DNA template strand codes for the amino acid serine with any of the following base triplets: AGA AGG AGT TCA TCG AGC. The anticodon that codes for the amino acid serine is ...',
    answerOptions: [
        { answerText: 'AGT.', isCorrect: false },
        { answerText: 'UGA.', isCorrect: false },
        { answerText: 'TCG.', isCorrect: false },
        { answerText: 'UCG.', isCorrect: true },
    ],
    explanation: 'The anticodon for serine is UCG, which pairs with the codon AGC on the mRNA.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'Which ONE of the following represents the correct sequence of phases between phase A and phase B?',
    answerOptions: [
        { answerText: 'Anaphase I, Metaphase I, Prophase II and Telophase II', isCorrect: false },
        { answerText: 'Metaphase I, Telophase I, Prophase II and Metaphase II', isCorrect: false },
        { answerText: 'Anaphase I, Telophase I, Prophase II, Metaphase II and Anaphase II', isCorrect: true },
        { answerText: 'Prophase I, Telophase I, Prophase II, Metaphase II and Telophase II', isCorrect: false },
    ],
    explanation: 'The correct sequence reflects the stages of meiosis, where Anaphase I is followed by Telophase I, leading into Prophase II, Metaphase II, and then Anaphase II.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'Which ONE of the following is CORRECT regarding the process shown in the diagram?',
    answerOptions: [
        { answerText: 'S represents an anticodon', isCorrect: false },
        { answerText: 'W represents mRNA', isCorrect: true },
        { answerText: 'T represents tRNA', isCorrect: false },
        { answerText: 'U represents an amino acid', isCorrect: false },
    ],
    explanation: 'W is labeled as the strand carrying codons from the nucleus, which identifies it as mRNA — the molecule responsible for transmitting genetic instructions to the ribosome.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'Evidence of hominid cultural evolution can be found in the fossil record. This evidence would include the ...',
    answerOptions: [
        { answerText: 'position of the attachment of the spine to the head.', isCorrect: false },
        { answerText: 'length of the upper limbs compared to the length of the lower limbs.', isCorrect: false },
        { answerText: 'number of teeth present in the skull.', isCorrect: false },
        { answerText: 'presence of stone tools.', isCorrect: true },
    ],
    explanation: 'The presence of stone tools in the fossil record indicates cultural evolution among hominids, as it reflects advancements in tool-making and usage.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'Which diagram shows the possible evolutionary relationships between species?',
    answerOptions: [
        { answerText: 'Phylogenetic tree', isCorrect: true },
        { answerText: 'Food web', isCorrect: false },
        { answerText: 'Genetic map', isCorrect: false },
        { answerText: 'Chromosome chart', isCorrect: false }
    ],
    explanation: 'A phylogenetic tree illustrates evolutionary relationships among various species based on similarities and differences in genetic or physical traits.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'What type of bond connects amino acids?',
    answerOptions: [
        { answerText: 'Hydrogen bond', isCorrect: false },
        { answerText: 'Ionic bond', isCorrect: false },
        { answerText: 'Peptide bond', isCorrect: true },
        { answerText: 'Covalent bond', isCorrect: false }
    ],
    explanation: 'A peptide bond is a covalent chemical bond formed between two amino acid molecules, crucial in forming protein structures.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'Which theory suggests long periods of stability in evolution interrupted by brief periods of rapid change?',
    answerOptions: [
        { answerText: 'Darwin’s theory of natural selection', isCorrect: false },
        { answerText: 'Gradualism', isCorrect: false },
        { answerText: 'Punctuated equilibrium', isCorrect: true },
        { answerText: 'Lamarckism', isCorrect: false }
    ],
    explanation: 'Punctuated equilibrium proposes that evolution occurs in rapid bursts separated by long periods of stability.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'Which term describes similar structures with different functions in different organisms?',
    answerOptions: [
        { answerText: 'Analogous structures', isCorrect: false },
        { answerText: 'Homologous structures', isCorrect: true },
        { answerText: 'Vestigial structures', isCorrect: false },
        { answerText: 'Adapted traits', isCorrect: false }
    ],
    explanation: 'Homologous structures indicate a common ancestry, even when their functions differ between organisms.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'What is the term for human-directed breeding for desired traits?',
    answerOptions: [
        { answerText: 'Gene editing', isCorrect: false },
        { answerText: 'Genetic engineering', isCorrect: false },
        { answerText: 'Artificial selection', isCorrect: true },
        { answerText: 'Natural selection', isCorrect: false }
    ],
    explanation: 'Artificial selection involves selective breeding of plants or animals by humans to achieve preferred traits.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'What type of dominance results when both alleles are expressed in a heterozygous individual?',
    answerOptions: [
        { answerText: 'Incomplete dominance', isCorrect: false },
        { answerText: 'Complete dominance', isCorrect: false },
        { answerText: 'Codominance', isCorrect: true },
        { answerText: 'Recessive inheritance', isCorrect: false }
    ],
    explanation: 'Codominance occurs when both alleles contribute equally and visibly to the phenotype in heterozygous organisms.',
    image: 'data:image/png;base64,...'
}



]