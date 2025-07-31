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
    image: undefined,
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
    image: undefined,
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
    image: undefined,
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
    image: undefined,
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
    image: undefined,
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
    image: undefined,
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
    image: undefined,
},
{
    questionText: 'Which ONE of the following combinations of cell division events occur in both meiosis and mitosis?',
    answerOptions: [
        { answerText: '(ii) and (iv) only', isCorrect: true },
        { answerText: '(ii), (iii) and (iv) only', isCorrect: false },
        { answerText: '(i), (iii) and (iv) only', isCorrect: false },
        { answerText: '(ii) and (iv) only', isCorrect: false }, 
    ],
    explanation: 'Both meiosis and mitosis involve chromatids being pulled to opposite poles and individual chromosomes lining up at the equator. Events specific to meiosis, like homologous pairing and random assortment, do not occur in mitosis.',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV4AAABTCAYAAADXwm9wAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAACpMSURBVHhe7Z0LuFVFFYC3ZqX00HxUZj4ySKEoBYnyRZkFZloKqSmlZFoZmRQZVmZliYpKQSllmXgRRRMEMsFHaSWWloQ9SE0SUrLEDKOMNHfzL846zJ07s/fsc889nAvzf9/57j5z997zWjOzZmbNOpvlhiyRSCQSLWPz2t9EIpFItIjU8SYSiUSLSR1vIpFItJjU8SYSiUSLSR1vIpFItJjU8SYSiUSLSR1vIpFItJjU8SYSiUSLSR1vIpFItJiojve///1vNm/evGz16tXZH//4x2zlypXZz3/+89p/Nx7I13/+85/at/bk3//+d/boo4/WviW0zlQ2ezPPPvts9tBDD9W+bXrcf//92S9+8YvsmWeeqYV0ptXlo7LVE20uquP9yEc+kq1Zs0YK5fOf/3y29dZbZx//+MezP/3pT7U7mssZZ5whH5tzzz03O+WUU2rfeoZ3vvOdbT+g3HTTTdkxxxxT+5bQOlPZbFdWrVqV/frXv659Ww+dzG233SbXTz75ZPaqV71KrtuVX/7yl9k//vGP2rfmgVwffPDB2Zw5c6QclA1ZPipbPdHmSjteCprP+973vuwd73hHdvXVV2cveMELstNOOy379Kc/XburuTz11FPysdGRx+bvf/97l/uAkZH/KWhD7iiKFk9jKHJVQXxPPPFE7dt61q5dm/3zn/+sfVtPzDttSCf3h0Z4+N///pc9/vjj3neSr6effrr2bR18Z5BUQnkAwnk/UL7/+te/5FrR9LlxhNJdlH/+Zzco8uRCg3brGKjLspmIyqYN6fN1EqF4YiHtbpm4kFc7zT/72c+kzbhQV29961tr39bDs3Y9AuXqqw+XUP4Ipx5iUdmz+dCHPtRlAAm1Q9IfSqv7DH3M4YcfLgrWtttuWwvtmfIhbvcevodktyco7XivueYaKZDNNtssu+GGG7J3vetdEs7fH/7wh90S4Eb5y1/+kr3pTW/KxowZI5Xy4Q9/WAoMLfnII4/MDjrooGyfffbJjj322Oy4446TtO60007yHEyZMiUbPHhwNnbs2Ox1r3tddtddd0m4gsC9//3vl8bM3wMPPFAqBb72ta9lAwYMkHeThgMOOEDCQ+98/etfn/3mN7+Ra9hmm23k73XXXZe95S1vyc477zxJ77XXXivhNj/+8Y/lXR/72Mfk769+9SsJpzF84AMfyN797ndnL3vZy7K7775b4nj1q1+d7b///tnJJ58czAN1SLqp07e97W3y3rPOOit7+9vfnu2yyy7ZggULJI6f/OQn2Wtf+1qZ2ey9997Zd77zHQkPpTuUf8rngx/8oMSFtvKFL3xBNBueJU3UGw2B78SFlvHJT35SnmXq+eY3vzk7++yzs6OPPjo7/fTTJdyHLZvE+YlPfELyPmTIEHkWQvHYzJw5U2RGoSPgwyBH3VHmJ5xwQtavX7/s9ttvr921Hsp4v/32y0499dTskEMOkfKA7373u9lvf/vbLlo54fCe97xH/sLnPvc5Sd/uu++effOb35QwOibywv/e+MY3ZldddZWE24TyR2d72GGHSR1TRryHPIXyCt/61rek7M8888zsNa95Tfa73/0u+9GPfiSzXPJAXkLt8JJLLpE4qIfJkyfL+xTfMwz4V1xxRXbjjTeKHNk0s3weeeQR6RdOOumkbNCgQdn3vvc9Cecvaf3sZz+b7bXXXp3aa49hCqoQI7y5qSC5NtOAfNiwYXINpqHmJsO1b83DNJp86NChuekQ6h/iPf744+X/pmPJjbYt10aryQcOHJhff/318pxp4LkZSfN77703f+5zn5ubKajcRzj5+POf/5y/8IUvzB977DEJNwNLbgpbrt/whjfkprOT+0zl5Uazk/BTTjklN9pKvnLlynyrrbbKjfBIuOmE5Jmid+6666754sWL5Rq0yI3g5JdeeqlcG+25/qzNbrvtli9cuFCub7311vwHP/iB1IEZRHLTACTcdMq5aQgSx4tf/GJJC4TywPM77rhjvnz58tx0zvn222+fm8Yh95gOTsoWTGPLTWcm15q/v/3tb950l5WpaQxybRqVvPfRRx/NTWeQb7nlllKmpGvcuHFyD/W555575mZ6l59//vm56RgknHw89NBDcm2jdWbLJmGUCc+QZqM0SHyheGxMI8xN51r7ltflz8wOpO60fMkjcudipsX51KlT5dooJfkWW2yRmxlSl7aj6Hvt65tvvlm+m0EtNwOpXFOec+fOlWvKgbo2Gqx8V0L5mz59em46pbosjBo1SvIUyivwLs2rUWjqdajlDaF2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',
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
    image: 'data:image/png;base64,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',
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
    image: undefined,
},
{
    questionText: 'The type of bonds between nitrogenous bases in a DNA molecule',
    answerOptions: [
        { answerText: 'Ionic bonds', isCorrect: false },
        { answerText: 'Covalent bonds', isCorrect: false },
        { answerText: 'Hydrogen bonds', isCorrect: true },
        { answerText: 'Metallic bonds', isCorrect: false },
    ],
    explanation: 'Hydrogen bonds hold together complementary nitrogenous bases in DNA, enabling the double-helix structure.',
    image: undefined,
},
{
    questionText: 'The structure that joins two chromatids of a chromosome',
    answerOptions: [
        { answerText: 'Chromatin', isCorrect: false },
        { answerText: 'Centromere', isCorrect: true },
        { answerText: 'Nucleolus', isCorrect: false },
        { answerText: 'Spindle fibre', isCorrect: false },
    ],
    explanation: 'The centromere connects sister chromatids and plays a key role during chromosome alignment in cell division.',
    image: undefined,
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
    image: undefined,
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
    image: undefined,
},
{
    questionText: 'The structures in animal cells that give rise to spindle fibres during cell division',
    answerOptions: [
        { answerText: 'Nucleosomes', isCorrect: false },
        { answerText: 'Lysosomes', isCorrect: false },
        { answerText: 'Ribosomes', isCorrect: false },
        { answerText: 'Centrioles', isCorrect: true },
    ],
    explanation: 'Centrioles/Centrosomes organize spindle fibres, which guide chromosomes during cell division in animal cells.',
    image: undefined,
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
    image: undefined,
},
{
    questionText: 'The phase in the cell cycle during which DNA replication takes place',
    answerOptions: [
        { answerText: 'DNA-phase', isCorrect: false },
        { answerText: 'InterPhase', isCorrect: true },
        { answerText: 'Crossing Over', isCorrect: false },
        { answerText: 'Anaphase', isCorrect: false },
    ],
    explanation: 'DNA replication occurs in the S-phase of the cell cycle, ensuring genetic material is doubled before cell division.',
    image: undefined,
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
    image: undefined,
}


]