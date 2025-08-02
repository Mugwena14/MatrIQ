import styles from './Hero.module.css'
import image from '../assets/landing.PNG'

const Hero = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <div className={styles.rated}>
                    <button className={styles.ratedBtn1}>Achievements</button>
                    <button className={styles.ratedBtn2}>Rated No.1 by students</button>
                </div>
                <div className={styles.head}>
                    <h1 className={styles.matriq}>MatrIQ</h1>
                    <h2>Your Matric Prep Partner.</h2>
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
            <div className={styles.right}>
                <img src={image} alt="" />
            </div>
        </div>
    )
}

export default Hero