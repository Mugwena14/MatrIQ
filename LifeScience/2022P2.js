const questions = [
    {
    questionText: 'The scientist who discovered the fossil "Karabo" (Australopithecus sediba)',
    answerOptions: [
        { answerText: 'Robert Brown', isCorrect: false },
        { answerText: 'Raymond Dart', isCorrect: false },
        { answerText: 'Lee Berger', isCorrect: true },
        { answerText: 'Ronald Clarke', isCorrect: false },
    ],
    explanation: 'Lee Berger discovered the fossil "Karabo" in South Africa in 2008. It belongs to the species Australopithecus sediba and sheds light on early human evolution.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'Which ONE of the following is a source of variation during normal meiosis?',
    answerOptions: [
        { answerText: 'Random mating', isCorrect: false },
        { answerText: 'Chromosomal mutations', isCorrect: false },
        { answerText: 'Cloning', isCorrect: false },
        { answerText: 'Random arrangement of chromosomes', isCorrect: true },
    ],
    explanation: 'During meiosis, the random arrangement of homologous chromosomes leads to genetic variation in gametes, enhancing diversity.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'How many sex chromosomes does a normal human female inherit from her mother?',
    answerOptions: [
        { answerText: '1', isCorrect: true },
        { answerText: '2', isCorrect: false },
        { answerText: '23', isCorrect: false },
        { answerText: '46', isCorrect: false },
    ],
    explanation: 'A female inherits one X chromosome from her mother and another X from her father, making a total of two sex chromosomes.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'During which phase of meiosis does the nuclear membrane disappear?',
    answerOptions: [
        { answerText: 'Metaphase', isCorrect: false },
        { answerText: 'Telophase', isCorrect: false },
        { answerText: 'Prophase', isCorrect: true },
        { answerText: 'Anaphase', isCorrect: false },
    ],
    explanation: 'In prophase of meiosis, the nuclear membrane breaks down, allowing chromosomes to become visible and begin pairing up.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'Which ONE of the following is an example of discontinuous variation in humans?',
    answerOptions: [
        { answerText: 'Height', isCorrect: false },
        { answerText: 'Heart rate', isCorrect: false },
        { answerText: 'Weight', isCorrect: false },
        { answerText: 'Gender', isCorrect: true },
    ],
    explanation: 'Discontinuous variation refers to traits that fall into distinct categories. Gender is a clear example, with no intermediate states.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'For a particular characteristic, the offspring inherits …',
    answerOptions: [
        { answerText: 'One allele from the mother and one allele from the father.', isCorrect: true },
        { answerText: 'Both alleles from the father.', isCorrect: false },
        { answerText: 'Both alleles from the mother.', isCorrect: false },
        { answerText: 'The alleles from either the mother or the father randomly.', isCorrect: false },
    ],
    explanation: 'Every individual inherits one allele for each trait from each parent. These alleles may be dominant or recessive and combine to determine the offspring’s phenotype.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'Which ONE of the following is CORRECT for speciation through geographic isolation?',
    answerOptions: [
        { answerText: 'The populations undergo phenotypic changes only.', isCorrect: false },
        { answerText: 'The conditions on each side of the geographic barrier are the same.', isCorrect: false },
        { answerText: 'Each population undergoes natural selection independently.', isCorrect: true },
        { answerText: 'The new species formed are genotypically the same as the original species.', isCorrect: false },
    ],
    explanation: 'Geographic isolation leads to reproductive isolation. Over time, populations adapt independently to different environments, resulting in distinct genotypes and eventual speciation.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'Which ONE of the following combinations of cell division events occur in both meiosis and mitosis?',
    answerOptions: [
        { answerText: '(ii), (iii) and (iv) only', isCorrect: false },
        { answerText: '(ii) and (iv) only', isCorrect: true },
        { answerText: '(i), (iii) and (iv) only', isCorrect: false },
        { answerText: '(ii) and (iv) only', isCorrect: false }, 
    ],
    explanation: 'Both meiosis and mitosis involve chromatids being pulled to opposite poles and individual chromosomes lining up at the equator. Events specific to meiosis, like homologous pairing and random assortment, do not occur in mitosis.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'How many nucleotides containing thymine (T) were present in Strand 1?',
    answerOptions: [
        { answerText: '4', isCorrect: false },
        { answerText: '2', isCorrect: false },
        { answerText: '8', isCorrect: true },
        { answerText: '16', isCorrect: false },
    ],
    explanation: 'Due to base-pairing rules, strand 1 contains the same number of thymine (T) as strand 2 has adenine (A)—which is 8. Therefore, strand 1 has 8 thymine nucleotides.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'The process of change in the characteristics of biological species over time',
    answerOptions: [
        { answerText: 'Evolution', isCorrect: true },
        { answerText: 'Mutation', isCorrect: false },
        { answerText: 'Inheritance', isCorrect: false },
        { answerText: 'Adaptation', isCorrect: false },
    ],
    explanation: 'Evolution is the gradual change in species over time, driven by mechanisms like natural selection and genetic drift.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'The type of bonds between nitrogenous bases in a DNA molecule',
    answerOptions: [
        { answerText: 'Hydrogen bonds', isCorrect: true },
        { answerText: 'Ionic bonds', isCorrect: false },
        { answerText: 'Covalent bonds', isCorrect: false },
        { answerText: 'Metallic bonds', isCorrect: false },
    ],
    explanation: 'Hydrogen bonds hold together complementary nitrogenous bases in DNA, enabling the double-helix structure.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'The structure that joins two chromatids of a chromosome',
    answerOptions: [
        { answerText: 'Centromere', isCorrect: true },
        { answerText: 'Chromatin', isCorrect: false },
        { answerText: 'Nucleolus', isCorrect: false },
        { answerText: 'Spindle fibre', isCorrect: false },
    ],
    explanation: 'The centromere connects sister chromatids and plays a key role during chromosome alignment in cell division.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'The division of the cytoplasm of a cell during cell division',
    answerOptions: [
        { answerText: 'Karyokinesis', isCorrect: false },
        { answerText: 'Mitosis', isCorrect: false },
        { answerText: 'Cytokinesis', isCorrect: true },
        { answerText: 'Meiosis', isCorrect: false },
    ],
    explanation: 'Cytokinesis is the final step in cell division where the cytoplasm splits, producing two separate cells.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'The process during meiosis where there is an exchange of genetic material between chromatids',
    answerOptions: [
        { answerText: 'Replication', isCorrect: false },
        { answerText: 'Independent assortment', isCorrect: false },
        { answerText: 'Crossing over', isCorrect: true },
        { answerText: 'Mutation', isCorrect: false },
    ],
    explanation: 'Crossing over during prophase I of meiosis increases genetic variation by exchanging segments between chromatids.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'The structures in animal cells that give rise to spindle fibres during cell division',
    answerOptions: [
        { answerText: 'Nucleosomes', isCorrect: false },
        { answerText: 'Lysosomes', isCorrect: false },
        { answerText: 'Ribosomes', isCorrect: false },
        { answerText: 'Centrioles', isCorrect: true },
    ],
    explanation: 'Centrioles organize spindle fibres, which guide chromosomes during cell division in animal cells.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'Similar structures that are inherited from a common ancestor and are modified for different functions',
    answerOptions: [
        { answerText: 'Homologous structures', isCorrect: true },
        { answerText: 'Analogous structures', isCorrect: false },
        { answerText: 'Vestigial structures', isCorrect: false },
        { answerText: 'Adaptive structures', isCorrect: false },
    ],
    explanation: 'Homologous structures like the limbs of vertebrates share a common origin but serve different functions due to evolution.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'The phase in the cell cycle during which DNA replication takes place',
    answerOptions: [
        { answerText: 'S-phase', isCorrect: true },
        { answerText: 'G1-phase', isCorrect: false },
        { answerText: 'G2-phase', isCorrect: false },
        { answerText: 'M-phase', isCorrect: false },
    ],
    explanation: 'DNA replication occurs in the S-phase of the cell cycle, ensuring genetic material is doubled before cell division.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'The organelle where translation occurs during protein synthesis',
    answerOptions: [
        { answerText: 'Nucleus', isCorrect: false },
        { answerText: 'Mitochondrion', isCorrect: false },
        { answerText: 'Ribosome', isCorrect: true },
        { answerText: 'Golgi body', isCorrect: false },
    ],
    explanation: 'Ribosomes are the sites of translation, where mRNA is decoded into a polypeptide chain during protein synthesis.',
    image: 'data:image/png;base64,...'
}


]