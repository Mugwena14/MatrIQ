const questions = [
    {
    questionText: 'Which ONE of the following organelles is the site of protein synthesis?',
    answerOptions: [
        { answerText: 'Chloroplasts', isCorrect: false },
        { answerText: 'Ribosomes', isCorrect: true },
        { answerText: 'Mitochondria', isCorrect: false },
        { answerText: 'Centrosomes', isCorrect: false },
    ],
    explanation: 'Ribosomes are the cellular structures responsible for protein synthesis by translating messenger RNA (mRNA) into polypeptide chains.',
    image: undefined,
},
{
    questionText: 'In humans, the gonosomes determine the gender. Which combination below shows the CORRECT gonosomes for males and females?',
    answerOptions: [
        { answerText: 'XY, YY', isCorrect: false },
        { answerText: 'YY, XY', isCorrect: false },
        { answerText: 'XY, XX', isCorrect: true },
        { answerText: 'XX, XY', isCorrect: false },
    ],
    explanation: 'In humans, males have one X and one Y chromosome (XY), while females have two X chromosomes (XX).',
    image: 'data:image/png;base64,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',
},
{
    questionText: 'An organism has the genotype TT. The CORRECT term which describes this organism\'s genotype is ...',
    answerOptions: [
        { answerText: 'heterozygous dominant.', isCorrect: false },
        { answerText: 'heterozygous recessive.', isCorrect: false },
        { answerText: 'homozygous recessive.', isCorrect: false },
        { answerText: 'homozygous dominant.', isCorrect: true },
    ],
    explanation: 'A genotype with two identical alleles, such as TT, is described as homozygous. Since T is dominant, the genotype is homozygous dominant.',
    image: undefined,
},
{
    questionText: 'Down syndrome is a genetic disorder where an individual has an extra copy of chromosome 21. Which ONE of the following may lead to Down syndrome?',
    answerOptions: [
        { answerText: 'Failure of chromosomes to replicate during mitosis', isCorrect: false },
        { answerText: 'Failure of chromosome pairs to separate during meiosis', isCorrect: true },
        { answerText: 'Failure of chromosomes to form pairs during fertilisation', isCorrect: false },
        { answerText: 'Failure of chromosome pairs to cross over during meiosis', isCorrect: false },
    ],
    explanation: 'Down syndrome is typically caused by nondisjunction during meiosis, where chromosome pairs fail to separate properly, resulting in an extra copy of chromosome 21.',
    image: undefined,
},
{
    questionText: 'A gradual change in the characteristics of a species over time is known as ...',
    answerOptions: [
        { answerText: 'Biological evolution', isCorrect: true },
        { answerText: 'Punctuated equilibrium', isCorrect: false },
        { answerText: 'Genetic engineering', isCorrect: false },
        { answerText: 'Speciation', isCorrect: false },
    ],
    explanation: 'Biological evolution refers to the slow and continuous changes in species characteristics over generations due to genetic variation and natural selection.',
    image: undefined,
},
{
    questionText: 'Which ONE of the following is a reproductive isolation mechanism?',
    answerOptions: [
        { answerText: 'Adaptation to the same pollinator', isCorrect: false },
        { answerText: 'Species-specific courtship behaviour', isCorrect: true },
        { answerText: 'Production of fertile offspring', isCorrect: false },
        { answerText: 'Breeding at the same time of the year', isCorrect: false },
    ],
    explanation: 'Species-specific courtship behaviour prevents interbreeding between species, serving as a reproductive isolation mechanism that preserves genetic integrity.',
    image: undefined,
},
{
    questionText: 'Analysis of mitochondrial DNA is an example of this line of evidence:',
    answerOptions: [
        { answerText: 'Fossil evidence', isCorrect: false },
        { answerText: 'Modification by descent', isCorrect: false },
        { answerText: 'Biogeography', isCorrect: false },
        { answerText: 'Genetic evidence', isCorrect: true },
    ],
    explanation: 'Mitochondrial DNA analysis reveals inherited traits and relationships between species, making it a form of genetic evidence used in evolutionary studies.',
    image: undefined,
},
{
    questionText: 'Which option below shows the CORRECT comparison between mitosis and meiosis?',
    answerOptions: [
        { answerText: 'MTS-Produces four daughter cells / MEOS-Produces two daughter cells', isCorrect: false },
        { answerText: 'MTS-The chromosome number remains the same / MEOS-The chromosome number is halved', isCorrect: true },
        { answerText: 'MTS-Produces genetically different cells / MEOS-Produces genetically identical cells', isCorrect: false },
        { answerText: 'MTS-Two divisions occur / MEOS-Four divisions occur', isCorrect: false },
    ],
    explanation: 'Mitosis preserves chromosome number while meiosis reduces it by half, enabling sexual reproduction with correct genetic contribution.',
    image: undefined,
},
{
    questionText: 'Which ONE of the following scientists discovered the fossil Taung Child?',
    answerOptions: [
        { answerText: 'Lee Berger', isCorrect: false },
        { answerText: 'Ron Clarke', isCorrect: false },
        { answerText: 'Robert Broom', isCorrect: false },
        { answerText: 'Raymond Dart', isCorrect: true },
    ],
    explanation: 'Raymond Dart discovered the Taung Child fossil in 1924, marking a pivotal moment in understanding human evolution in southern Africa.',
    image: undefined,
},
{
    questionText: 'Which ONE of the following is produced at the end of translation?',
    answerOptions: [
        { answerText: 'A protein', isCorrect: true },
        { answerText: 'A DNA molecule', isCorrect: false },
        { answerText: 'A messenger RNA molecule', isCorrect: false },
        { answerText: 'An amino acid', isCorrect: false },
    ],
    explanation: 'Translation is the final stage of protein synthesis where ribosomes assemble amino acids into a polypeptide chain, producing a functional protein.',
    image: undefined,
},
{
    questionText: 'Which nucleic acid carries hereditary information?',
    answerOptions: [
        { answerText: 'DNA', isCorrect: true },
        { answerText: 'RNA', isCorrect: false },
        { answerText: 'ATP', isCorrect: false },
        { answerText: 'Enzymes', isCorrect: false },
    ],
    explanation: 'DNA (deoxyribonucleic acid) is the molecule that carries genetic instructions used in growth, development, functioning, and reproduction.',
    image: undefined,
},
{
    questionText: 'What is the chromosome condition of a cell with only one set of chromosomes?',
    answerOptions: [
        { answerText: 'Diploid', isCorrect: false },
        { answerText: 'Haploid', isCorrect: true },
        { answerText: 'Triploid', isCorrect: false },
        { answerText: 'Polyploid', isCorrect: false },
    ],
    explanation: 'A haploid cell contains only one set of chromosomes, commonly found in gametes such as sperm and egg cells.',
    image: undefined,
},
{
    questionText: 'Which structure holds the two chromatids of a chromosome together?',
    answerOptions: [
        { answerText: 'Centrioles', isCorrect: false },
        { answerText: 'Spindle fibres', isCorrect: false },
        { answerText: 'Centromere', isCorrect: true },
        { answerText: 'Kinetochore', isCorrect: false },
    ],
    explanation: 'The centromere is the region that holds sister chromatids together and plays a key role during cell division.',
    image: undefined,
},
{
    questionText: 'Which type of RNA delivers specific amino acids during protein synthesis?',
    answerOptions: [
        { answerText: 'tRNA', isCorrect: true },
        { answerText: 'mRNA', isCorrect: false },
        { answerText: 'rRNA', isCorrect: false },
        { answerText: 'snRNA', isCorrect: false },
    ],
    explanation: 'Transfer RNA (tRNA) transports amino acids to the ribosome during translation, ensuring correct sequencing in proteins.',
    image: undefined,
},
{
    questionText: 'What is the analysis of DNA samples to identify individuals or relationships called?',
    answerOptions: [
        { answerText: 'Genetic engineering', isCorrect: false },
        { answerText: 'DNA profiling', isCorrect: true },
        { answerText: 'Gene cloning', isCorrect: false },
        { answerText: 'Forensic cytology', isCorrect: false },
    ],
    explanation: 'DNA profiling is a forensic technique used to identify individuals by examining their unique genetic makeup.',
    image: undefined,
},
{
    questionText: 'What shows the number and structure of all chromosomes in a somatic cell nucleus?',
    answerOptions: [
        { answerText: 'Karyotype', isCorrect: true },
        { answerText: 'Genome', isCorrect: false },
        { answerText: 'Gene map', isCorrect: false },
        { answerText: 'Chromosomal matrix', isCorrect: false },
    ],
    explanation: 'A karyotype is a photographic or digital representation of chromosomes arranged by size, number, and type in a somatic cell.',
    image: undefined,
},
{
    questionText: 'A group of similar organisms that interbreed to produce fertile offspring is called a ...',
    answerOptions: [
        { answerText: 'Family', isCorrect: false },
        { answerText: 'Population', isCorrect: false },
        { answerText: 'Genus', isCorrect: false },
        { answerText: 'Species', isCorrect: true },
    ],
    explanation: 'Species is the basic unit of biological classification, defined by the ability to interbreed and produce fertile offspring.',
    image: undefined,
},
{
    questionText: 'In which phase of meiosis are paired chromosomes arranged at the equator?',
    answerOptions: [
        { answerText: 'Anaphase I', isCorrect: false },
        { answerText: 'Prophase II', isCorrect: false },
        { answerText: 'Metaphase I', isCorrect: true },
        { answerText: 'Telophase I', isCorrect: false },
    ],
    explanation: 'During Metaphase I of meiosis, homologous chromosomes align at the cell equator in preparation for separation.',
    image: undefined,
},
{
    questionText: 'What biotechnological process produces genetically identical organisms?',
    answerOptions: [
        { answerText: 'Recombination', isCorrect: false },
        { answerText: 'Cloning', isCorrect: true },
        { answerText: 'Mutagenesis', isCorrect: false },
        { answerText: 'Hybridisation', isCorrect: false },
    ],
    explanation: 'Cloning is a process that produces organisms genetically identical to the original, commonly used in biotechnology and agriculture.',
    image: undefined,
}



]