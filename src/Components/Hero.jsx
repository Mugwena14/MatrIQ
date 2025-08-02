import styles from './Hero.module.css'

const Hero = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <div className={styles.rated}>
                    <button>Achievement</button>
                    <button>Rated No.1 by students</button>
                </div>
                <div className={styles.head}>
                    <h1>MatrIQ</h1>
                    <h1>Your Matric Prep Partner - Powered by Purpose.</h1>
                </div>
                <div className={styles.info}>
                    <p>Join hundreds os SA learners mastering Matric with 
                        fast, focused quizzes in Geography & Life Sciences
                        No fluff, No stress, Just Success.
                    </p>
                    <p>Start Now</p>
                    <button>Geography</button>
                    <button>Life Sciences</button>
                    <h3>200+ Users</h3>
                </div>
                <div className={styles.aim}>
                    <p>OUR AIM? SIMPLE:</p>
                    <p>ENABLE FULL MASTERY OF MULTIPLE-CHOICE
                        QUESTIONS IN GEO & LS, BECAUSE EVERY MARK COUNTS.
                    </p>
                </div>
            </div>
            <div className={styles.right}>

            </div>
        </div>
    )
}

export default Hero