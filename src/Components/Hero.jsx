import styles from './Hero.module.css'
import image from '../assets/LPage.jpeg'
import { FaQuoteLeft } from 'react-icons/fa'
import { FaQuoteRight } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import quizData from '../Gen'

const Hero = () => {

    const { Climate } = quizData;
    const easyQuestions = Climate.easy.questions;
    console.log(quizData);

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <p className={styles.rated}>
                    <button className={styles.ratedBtn1}>Achievements</button>
                    <button className={styles.ratedBtn2}>Rated No.1 by students 
                        <span className={styles.arrowShort}><FaArrowRight/></span>
                        </button>
                    <button className={styles.arrowBtn}>
                        <span className={styles.arrowLong}><FaArrowRightLong/></span>
                    </button>
                </p>
                <div className={styles.head}>
                    <div className={styles.quote}>
                        <h1 ><span className={styles.quote1}><FaQuoteLeft/></span>
                        Aim true when you shoot your shot or be ready to
                        reload.
                        <span className={styles.quote2}><FaQuoteRight/></span>
                        </h1>
                    </div>
                </div>
                <div className={styles.info}>
                    <p>Join hundreds of SA learners mastering Matric with 
                        fast, focused quizzes in Geography & Life Sciences. <br />
                        The goal is simple, to enable full mastery of MCQs
                        in Geo & LS.
                        No fluff, No stress, Just Success. <br />
                        Made in Mzansi.
                    </p>
                    <Link to='/Geo'><button className={styles.btn1}>GEOGRAPHY</button></Link>
                    <Link to='/LS'><button className={styles.btn2}>LIFE SCIENCE</button></Link>
                <div className={styles.trusted}>
                    <p>Trusted by 200+ Learners</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Hero