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
    image: 'data:image/png;base64,...'
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
    image: 'data:image/png;base64,...'
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
    image: 'data:image/png;base64,...'
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
    image: 'data:image/png;base64,...'
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
    image: 'data:image/png;base64,...'
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
    image: 'data:image/png;base64,...'
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
    image: 'data:image/png;base64,...'
},
{
    questionText: 'Which option in the table below shows the CORRECT comparison between mitosis and meiosis?',
    answerOptions: [
        { answerText: 'Produces four daughter cells / Produces two daughter cells', isCorrect: false },
        { answerText: 'The chromosome number remains the same / The chromosome number is halved', isCorrect: true },
        { answerText: 'Produces genetically different cells / Produces genetically identical cells', isCorrect: false },
        { answerText: 'Two divisions occur / Four divisions occur', isCorrect: false },
    ],
    explanation: 'Mitosis preserves chromosome number while meiosis reduces it by half, enabling sexual reproduction with correct genetic contribution.',
    image: 'data:image/png;base64,...'
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
    image: 'data:image/png;base64,...'
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
    image: 'data:image/png;base64,...'
},
{
    questionText: 'Which nucleic acid carries hereditary information?',
    answerOptions: [
        { answerText: 'RNA', isCorrect: false },
        { answerText: 'ATP', isCorrect: false },
        { answerText: 'DNA', isCorrect: true },
        { answerText: 'Enzymes', isCorrect: false },
    ],
    explanation: 'DNA (deoxyribonucleic acid) is the molecule that carries genetic instructions used in growth, development, functioning, and reproduction.',
    image: 'data:image/png;base64,...'
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
    image: 'data:image/png;base64,...'
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
    image: 'data:image/png;base64,...'
},
{
    questionText: 'Which type of RNA delivers specific amino acids during protein synthesis?',
    answerOptions: [
        { answerText: 'mRNA', isCorrect: false },
        { answerText: 'rRNA', isCorrect: false },
        { answerText: 'tRNA', isCorrect: true },
        { answerText: 'snRNA', isCorrect: false },
    ],
    explanation: 'Transfer RNA (tRNA) transports amino acids to the ribosome during translation, ensuring correct sequencing in proteins.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'What is the analysis of DNA samples to identify individuals or relationships called?',
    answerOptions: [
        { answerText: 'Genetic engineering', isCorrect: false },
        { answerText: 'Gene cloning', isCorrect: false },
        { answerText: 'DNA profiling', isCorrect: true },
        { answerText: 'Forensic cytology', isCorrect: false },
    ],
    explanation: 'DNA profiling is a forensic technique used to identify individuals by examining their unique genetic makeup.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'What shows the number and structure of all chromosomes in a somatic cell nucleus?',
    answerOptions: [
        { answerText: 'Genome', isCorrect: false },
        { answerText: 'Gene map', isCorrect: false },
        { answerText: 'Karyotype', isCorrect: true },
        { answerText: 'Chromosomal matrix', isCorrect: false },
    ],
    explanation: 'A karyotype is a photographic or digital representation of chromosomes arranged by size, number, and type in a somatic cell.',
    image: 'data:image/png;base64,...'
},
{
    questionText: 'A group of similar organisms that interbreed to produce fertile offspring is called a ...',
    answerOptions: [
        { answerText: 'Family', isCorrect: false },
        { answerText: 'Population', isCorrect: false },
        { answerText: 'Species', isCorrect: true },
        { answerText: 'Genus', isCorrect: false },
    ],
    explanation: 'Species is the basic unit of biological classification, defined by the ability to interbreed and produce fertile offspring.',
    image: 'data:image/png;base64,...'
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
    image: 'data:image/png;base64,...'
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
    image: 'data:image/png;base64,...'
}



]