import styles from './Hero.module.css'
import image from '../assets/LPage.jpeg'
import { FaQuoteLeft } from 'react-icons/fa'
import { FaQuoteRight } from 'react-icons/fa'

const Hero = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.rated}>
                    <button className={styles.ratedBtn1}>Achievements</button>
                    <button className={styles.ratedBtn2}>Rated No.1 by students</button>
                </div>
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
                    <button className={styles.btn1}>GEOGRAPHY</button>
                    <button className={styles.btn2}>LIFE SCIENCE</button>
                    <h3>200+ Users</h3>
                </div>
            </div>
        </div>
    )
}

export default Hero